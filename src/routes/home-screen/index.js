import { createRef, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
// import { GESTURES } from '../../util/EventTarget.addGestureListener'
import Launcher from '../../components/launcher';
import Settings from '../settings';
import AppLibrary from '../app-library';
import { get, set, del } from 'idb-keyval';

import style from './style';
import AppStub from '../../components/app-stub';

const HomeScreen = (props) => {

	const [wallpaperURL, setWallpaper] = useState(undefined)
	const [appGrid, updateAppGrid] = useState([])

	useEffect(() => {
		get('wallpaper').then((imgData) => {
			setWallpaper(imgData)
		})

		get('app_grid').then((appGridArray) => {
			updateAppGrid(appGridArray)
		})
	}, [])

	const saveWallpaper = (imgData) => {
		setWallpaper(imgData)
		if(imgData) {
			return set('wallpaper', imgData)
		}
		return del('wallpaper')
	}
	
	return (
		<div class={style.homescreen} style={wallpaperURL?`--bgurl: url(${wallpaperURL});`:''}>
			<Launcher icon='university' title='App Library' systemLauncher><AppLibrary/></Launcher>
			<Launcher/>
			<Launcher/>
			<Launcher icon='cogs' title='Settings' systemLauncher><Settings saveWallpaper={saveWallpaper} hasCustomWallpaper={wallpaperURL!=undefined}/></Launcher>
			<Launcher icon='male' title='Hangapp' src='https://kylesureline.com/hangapp'/>
			{appGrid && appGrid.forEach(app => <Launcher icon={app.icon} title={app.title} src={app.url}/>)}
		</div>
	);
}

export default HomeScreen;