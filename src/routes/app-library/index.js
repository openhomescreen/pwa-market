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

	return (
		<div class={style.appLibrary}>
			<h1>App Library</h1>
      {apps.length && apps.map(app => {
        app.saved = props.installedApps.includes(btoa(app.url))
        return <AppStub updateInstalledApps={props.updateInstalledApps} initialState={app}/>
      })}
		</div>
	)
}

export default AppLibrary;