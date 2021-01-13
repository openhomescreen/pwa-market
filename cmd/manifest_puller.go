package main

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"path/filepath"
	"sync"
)

// App defines the structure of the metadata for a given pwa
type App struct {
	URL string `json:"url"`
}

// Data defines the structure of the metadata required for the pwa store
type Data struct {
	Apps []App `json:"apps"`
}

// purgeOldManifests returns an error if anything goes wrong with deleting the
// old manifest files.
func purgeOldManifests(manifestDirGlob string) error {
	files, err := filepath.Glob(manifestDirGlob)
	if err != nil {
		return err
	}

	for _, file := range files {
		if err := os.RemoveAll(file); err != nil {
			return err
		}
	}

	return nil
}

// parseAppsFile returns an error if anything goes wrong with reading or parsing
// the configuration file for the site.
func parseAppsFile(appsFilepath string) (*Data, error) {
	appsFile, err := ioutil.ReadFile(appsFilepath)
	if err != nil {
		return nil, err
	}

	var data Data
	if err := json.Unmarshal(appsFile, &data); err != nil {
		return nil, err
	}

	return &data, nil
}

// fetchManifestFile performs all of the required logic of fetching and storing
// of the manifest file within the project's assets folder. This method is set
// up to be completely self-contained inorder to be able to run in a separate
// goroutine to speed up the time it takes to run.
func fetchManifestFile(app App, manifestsDir string, wg *sync.WaitGroup) {
	defer wg.Done()

	fmt.Printf("Pulling Data for %s\n", app.URL)

	name := base64.URLEncoding.EncodeToString([]byte(app.URL)) + ".json"
	filepath := filepath.Join(manifestsDir, name)
	url := app.URL
	if url[len(url)-1] != '/' {
		url += "/"
	}
	url += "manifest.json"

	manifestResponse, err := http.Get(url)
	if err != nil {
		panic(err)
	}

	defer manifestResponse.Body.Close()
	manifest, err := ioutil.ReadAll(manifestResponse.Body)
	if err != nil {
		panic(err)
	}

	if err := ioutil.WriteFile(filepath, manifest, 0644); err != nil {
		panic(err)
	}
}

func main() {
	assetsDir := "./data"
	manifestsDir := filepath.Join(assetsDir, "manifests")
	manifestDirGlob := filepath.Join(manifestsDir, "*.json")
	appsFilepath := filepath.Join(assetsDir, "apps.json")

	if err := purgeOldManifests(manifestDirGlob); err != nil {
		panic(err)
	}

	data, err := parseAppsFile(appsFilepath)
	if err != nil {
		panic(err)
	}

	wg := new(sync.WaitGroup)
	for _, app := range data.Apps {
		wg.Add(1)
		go fetchManifestFile(app, manifestsDir, wg)
	}
	wg.Wait()
}
