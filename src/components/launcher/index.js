import { Fragment, h } from 'preact'
import { route } from 'preact-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './style'
import { useEffect, useRef, useState } from 'preact/hooks'
import { GESTURES, GestureListener } from '../../util/gestureListener'
import { Settings } from '../../routes/settings'
import { getManifest } from '../../util/dbHelpers'

const Launcher = (props) => {

  const initialState = {
    animating: false,
    height: undefined,
    launched: false,
    expanded: false,
    loaded: false,
    position: undefined,
    closePosition: undefined,
    width: undefined,
    iconURL: undefined,
    title: props.title,
  }

  const [state, setState] = useState(initialState)

  const appSpace = useRef()
  const closeBtn = useRef()

  useEffect(() => {
    if(state.launched) {
      let appSpaceListener = new GestureListener(appSpace.current, GESTURES.DRAW_X, (e) => {
        close(e)
      }, {
        minSwipeDistance: 25,
      })

      return () => appSpaceListener.destroy()
    }
  }, [appSpace.current, state.launched, state.closePosition])

  useEffect(() => {
    if(state.launched) {
      let closeBtnListener = new GestureListener(closeBtn.current, GESTURES.ANY, (e) => {
        e.target.style.top = '-1.5em'
        e.target.style.left = '-1.5em'
        e.target.style.transform = `translate(${e.screenPosition.final.x}px, ${e.screenPosition.final.y}px)`
      }, {
        minSwipeDistance: 1,
        continuous: true,
      })

      return () => closeBtnListener.destroy()
    }
  }, [closeBtn.current, state.launched, state.closePosition])

  // reach out to the app server to read its pwa manifest
  useEffect(() => {
    if(props.src) {
      getManifest(props.src)
      .then(manifest => {
        setState((prevState) => ({
          ...prevState,
          title: (manifest.name.length > 15?manifest.short_name:manifest.name),
          iconURL: (manifest.icons[0]?(props.src+(manifest.icons[0].src.match(/^\//)?'':'/')+manifest.icons[0].src):prevState.iconURL),
        }))
      })
      .catch(function(reason) {
        console.log(reason)
      })
      
      // fetch(props.src+'manifest.json', {
      //     // fetch('/api/v1/pwa/<id>/manifest', {
      //     // credentials: 'include'
      //   })
      //   .then(function(resp) {
      //     return resp.json()
      //   })
      //   .then(function(data) {
      //     // TODO: move these requests to backend once available
      //     // console.log(data)
      //     // sort the icons to give three priorities
      //     // 1. maskable
      //     // 2. in the sweet spot (>=64px && <=192px) (too large or too small is bad)
      //     // 3. size (larger is better)
      //     data.icons.sort((a, b) => {
      //       if(a.purpose == 'maskable' && b.purpose != 'maskable') return -1
      //       if(b.purpose == 'maskable' && a.purpose != 'maskable') return 1

      //       let aSize = parseInt(a.sizes.split('x')[0]);
      //       let bSize = parseInt(b.sizes.split('x')[0]);
      //       if(aSize > bSize) return -1
      //       if(bSize > aSize) return 1
      //       return 0
      //     })

      //     // console.log(data.icons)
      //     setState((prevState) => ({
      //       ...prevState,
      //       title: (data.name.length > 15?data.short_name:data.name),
      //       iconURL: (data.icons[0]?(props.src+data.icons[0].src):prevState.iconURL),
      //     }))
      //   })
      //   .catch(function(reason) {
      //     console.log(reason)
      //   })
    }
  }, [props.src])

  const iconFallback = (e) => {
    console.info('icon img failed', state.iconURL)
    setState((prevState) => ({
      ...prevState,
      iconURL: undefined,
    }))
  }

  const launch = (e) => {
    let position = appSpace.current.getBoundingClientRect();
    
    setState((prevState) => ({
      ...prevState,
      position: {
        top: position.top,
        left: position.left,
      },
      width: appSpace.current.offsetWidth,
      height: appSpace.current.offsetHeight,
    }))
    setTimeout(() => setState((prevState) => ({
      ...prevState,
      animating: true,
      launched: true,
    })), 50)
    setTimeout(() => {
      // if(props.src && props.src.indexOf('://') == -1) {
      //   route(props.src, true);
      // } else {
        let closeBtnRect = closeBtn.current.getBoundingClientRect()
        setState((prevState) => ({
          ...prevState,
          expanded: true,
          loaded: props.src?prevState.loaded:true,
          closePosition: {
            top: closeBtnRect.x,
            left: closeBtnRect.y,
          },
        }))
      // }
    }, 500)
  }

  const showApp = (e) => {
    setState((prevState) => ({
      ...prevState,
      loaded: true,
    }))
  }

  const close = (e) => {
    if(state.launched) {
      if(typeof e.stopPropagation == 'function')
        e.stopPropagation();
      setState((prevState) => ({
        ...prevState,
        launched: false,
      }))
      setTimeout(() => setState((prevState) => ({
        ...initialState,
        closePosition: prevState.closePosition,
        iconURL: prevState.iconURL,
      })), 450)
    }
  }

  return (
    <span className={style.launcher+(state.launched?' '+style.launched:'')+(state.animating?' '+style.animating:'')+(state.loaded?' '+style.loaded:'')+(props.systemLauncher?' '+style.system:'')}>
      {(state.title || props.icon) && <div ref={appSpace} onClick={!state.launched?launch:undefined} className={((state.title || props.icon)?style.geometry:'')}
        style={(state.position?`position:fixed;margin:0;top:${state.position.top}px;left:${state.position.left}px;width:${state.width}px;height:${state.height}px;`:'')}
      >
        {state.iconURL?<img class={style.icon} src={state.iconURL} onError={iconFallback}/>:<></>}
        {(props.icon && !state.iconURL) ? <FontAwesomeIcon icon={props.icon} />:<></>}
        {(props.src && typeof props.src == 'string' && state.expanded) ? <iframe onLoad={showApp} src={props.src}/>:<></>}
        {state.launched?<div className={style.childWrapper}>{props.children}</div>:<></>}
        <div ref={closeBtn} class={style.close} onClick={close}><FontAwesomeIcon icon='times'/></div>
      </div>}
      {state.title && <div className={style.title}>{state.title}</div>}
    </span>
  )
}

export default Launcher;
