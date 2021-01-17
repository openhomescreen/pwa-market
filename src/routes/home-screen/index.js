import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
// import { GESTURES } from '../../util/EventTarget.addGestureListener'
import Launcher from '../../components/launcher';
import Settings from '../settings';
import AppLibrary from '../app-library';
import { get, set, del, update } from 'idb-keyval';

import style from './style';

const HomeScreen = (props) => {

	const [wallpaperURL, setWallpaper] = useState(undefined)
	const [appGrid, updateAppGrid] = useState({})

	useEffect(() => {
		get('wallpaper').then((imgData) => {
			setWallpaper(imgData)
		})

		get('installedApps').then((installedApps) => {
			updateAppGrid(installedApps?installedApps:{})
		})
	}, [])

	const saveWallpaper = (imgData) => {
		setWallpaper(imgData)
		if(imgData) {
			return set('wallpaper', imgData)
		}
		return del('wallpaper')
	}

	const updateInstalledApps = (action, appDetails) => {
		return new Promise((resolve, reject) => {
			update('installedApps', installedApps => {
				
				if(installedApps == undefined)
					installedApps = {}

				switch (action) {
					case 'save':
						installedApps[btoa(appDetails.url)] = {
							iconURL: appDetails.iconURL,
							title: appDetails.title,
						}
						break;
					case 'remove':
						delete installedApps[btoa(appDetails.url)]
						break;
					default:
						break;
				}
				updateAppGrid(installedApps)
				resolve(installedApps)
				return installedApps
			})
		})
	}
	
	const appKeyList = Object.keys(appGrid)

	return (
		<div class={style.homescreen} style={wallpaperURL?`--bgurl: url(${wallpaperURL});`:''}>
			<Launcher icon='university' title='App Library' systemLauncher><AppLibrary updateInstalledApps={updateInstalledApps} installedApps={appKeyList}/></Launcher>
			<Launcher/>
			<Launcher/>
			<Launcher icon='cogs' title='Settings' systemLauncher><Settings saveWallpaper={saveWallpaper} hasCustomWallpaper={wallpaperURL!=undefined}/></Launcher>
			{appKeyList.map(appKey => <Launcher iconURL={appGrid[appKey].iconURL} title={appGrid[appKey].title} src={atob(appKey)}/>)}
		</div>
	);
}

export default HomeScreen;