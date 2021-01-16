import { h } from 'preact'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getManifest } from '../../util/dbHelpers'
import style from './style'
import { useEffect, useState } from 'preact/hooks'
import AppStub from '../../components/app-stub'

const AppLibrary = (props) => {

  const [apps, updateApps] = useState([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/openhomescreen/pwa-market/main/data/apps.json')
    .then(resp => {
      resp.json().then(data => {
        updateApps(data.apps)
      })
    })
  }, [])

  // const previewWallpaper = (e) => {
  //   e.stopPropagation()
	// 	var file = e.target.files;
	// 	if (file.length > 0) {
	// 		var fileReader = new FileReader()
	// 		fileReader.onload = (event) => {
  //       props.saveWallpaper(event.target.result)
  //         .then(() => alert('Wallpaper Updated'))
  //         .catch(err => console.log(err))
	// 		}
	// 		fileReader.readAsDataURL(file[0])
  //   } 
  // }

  // const clearWallpaper = (e) => {
  //   e.stopPropagation()
  //   props.saveWallpaper(undefined)
  //     .then(() => alert('Wallpaper Removed'))
  //     .catch(err => console.log(err))
  // }

	return (
		<div class={style.appLibrary}>
			<h1>App Library</h1>
      {apps.length && apps.map(app => (
        <AppStub initialState={app}/>
      ))}
		</div>
	)
}

export default AppLibrary;