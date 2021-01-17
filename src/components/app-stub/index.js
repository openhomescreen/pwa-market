import { h } from 'preact'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getManifest } from '../../util/dbHelpers'
import style from './style'
import { useEffect, useState } from 'preact/hooks'

const AppStub = (props) => {

  const [stub, updateStub] = useState(props.initialState)

  useEffect(() => {
    if(stub.url) {
      getManifest(stub.url)
      .then(manifest => {
        updateStub(prevStub => ({
          ...manifest,
          url: prevStub.url,
          title: (manifest.name.length?manifest.name:manifest.short_name),
          iconURL: (manifest.icons[0]?(prevStub.url+(manifest.icons[0].src.match(/^\//)?'':'/')+manifest.icons[0].src):prevStub.iconURL),
          saved: prevStub.saved,
        }))
      })
    }
  }, [stub.url])

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

  const togglePossession = (e) => {
    updateStub(prevStub => {
      if(!prevStub.saved) {
        props.updateInstalledApps('save', stub)
      } else {
        props.updateInstalledApps('remove', stub)
      }
      return {
        ...prevStub,
        saved: !prevStub.saved,
      }
    })
  }

	return (
    <div class={style.appStub}>
      <div class={style.btn+(stub.saved?' '+style.saved:'')} onClick={togglePossession}>{stub.saved?'lose':'save'}</div>
      <div class={style.icon}>
        {stub.iconURL && <img src={stub.iconURL}/>}
      </div>
      <div class={style.title}>{stub.title}</div>
      <div class={style.slogan}>{stub.description?stub.description:''}</div>
    </div>
	)
}

export default AppStub;