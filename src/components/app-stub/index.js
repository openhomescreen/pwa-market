import { h } from 'preact'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getManifest } from '../../util/dbHelpers'
import style from './style'
import { useEffect, useState } from 'preact/hooks'

const AppStub = (props) => {

  const [stub, updateStub] = useState(props.initialState)

  useEffect(() => {
    if(stub.url) {
      console.log(stub.url)
      getManifest(stub.url)
      .then(manifest => {
        console.log(stub.url, manifest)
        updateStub(prevStub => ({
          ...manifest,
          url: prevStub.url,
          title: (manifest.name.length?manifest.name:manifest.short_name),
          iconURL: (manifest.icons[0]?(prevStub.url+(manifest.icons[0].src.match(/^\//)?'':'/')+manifest.icons[0].src):prevStub.iconURL),
        }))
        // setState((prevState) => ({
        //   ...prevState,
        //   title: (data.name.length > 15?data.short_name:data.name),
        //   iconURL: (data.icons[0]?(props.src+data.icons[0].src):prevState.iconURL),
        // }))
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

	return (
    <div class={style.appStub}>
      <div class={style.btn}>Save</div>
      <div class={style.icon}>
        {stub.iconURL && <img src={stub.iconURL}/>}
      </div>
      <div class={style.title}>{stub.title}</div>
      <div class={style.slogan}>{stub.description?stub.description:'Lorem Ipsum Dolar Sit'}</div>
    </div>
	)
}

export default AppStub;