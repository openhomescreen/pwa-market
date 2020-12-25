import { h } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style';
import { useRef, useState } from 'preact/hooks';
import { GESTURES, GestureListener } from '../../util/gestureListener';

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
    appSpaceListener: undefined,
    closeBtnListener: undefined,
  }

  const [state, setState] = useState(initialState)

  const appSpace = useRef()
  const closeBtn = useRef()

  var launch = (e) => {
    console.log('launch')
    let position = appSpace.current.getBoundingClientRect();
    
    setState((prevState) => ({
      ...prevState,
      position: {
        top: position.top,
        left: position.left,
      },
      width: appSpace.current.offsetWidth,
      height: appSpace.current.offsetHeight,
      appSpaceListener: new GestureListener(appSpace.current, GESTURES.DRAW_X, (e) => {
        if(e.type == 'in-motion') {
          // contentBox is the parent of gestureBox
          // console.log(e.movementY)
          // e.target.parentElement.style.transform = 'translateY('+(Math.max(0, e.movementY)*1.5)+'px)';
          // e.target.parentElement.style['transition-property'] = 'none';
          // let css = e.target.parentElement.style.cssText
          // console.log(css);
          // e.target.parentElement.style.cssText = css.replace(/top:.*px(\s!important)?;/,'top:'+Math.round(Math.max(0, e.movementY)*1.5+(window.innerHeight/10))+'px !important;');
        } else {
          // alert(JSON.stringify(e))
          console.log('appSpaceListener', JSON.stringify(e))
          console.log('appSpaceListener', JSON.stringify(state))
          close(e)
        }
      }, {
        minSwipeDistance: 25,
        // continuous: true,
      }),
      closeBtnListener: new GestureListener(closeBtn.current, GESTURES.ANY, (e) => {
        if(state.closePosition == undefined) {
          let closeBtnPosition = e.target.getBoundingClientRect()
          // state.closePosition = closeBtnPosition
          // console.log('setting', state.closePosition)
          setState((prevState) => ({
            ...prevState,
            closePosition: {
              top: closeBtnPosition.top,
              left: closeBtnPosition.left,
            },
          }))
        }
        if(e.type == 'in-motion') {
          e.target.style.top = state.closePosition.top + e.movementY
          e.target.style.left = state.closePosition.left + e.movementX
        } else {
          setState((prevState) => ({
            ...prevState,
            closePosition: {
              top: state.closePosition.top + e.movementY,
              left: state.closePosition.left + e.movementX,
            },
          }))
        }
      }, {
        minSwipeDistance: 1,
        continuous: true,
      })
    }))
    setTimeout(() => setState((prevState) => ({
      ...prevState,
      animating: true,
      launched: true,
    })), 50)
    if(props.src) {
      setTimeout(() => setState((prevState) => ({
        ...prevState,
        expanded: true,
      })), 500)
    } else {
      setTimeout(() => setState((prevState) => ({
        ...prevState,
        loaded: true,
      })), 500)
    }
  }

  const showApp = (e) => {
    setState((prevState) => ({
      ...prevState,
      loaded: true,
    }))
  }

  const close = (e) => {
    console.log('close', JSON.stringify(state))
    if(state.launched) {
      state.appSpaceListener.destroy()
      state.closeBtnListener.destroy()
      if(typeof e.stopPropagation == 'function')
        e.stopPropagation();
      setState((prevState) => ({
        ...prevState,
        launched: false,
      }))
      setTimeout(() => setState((prevState) => ({
        ...initialState,
        closePosition: prevState.closePosition
      })), 450)
    }
  }

  return (
    <span className={style.launcher+(state.launched?' '+style.launched:'')+(state.animating?' '+style.animating:'')+(state.loaded?' '+style.loaded:'')}>
      {(props.title || props.icon) && <div ref={appSpace} onClick={!state.launched?launch:undefined} className={((props.title || props.icon)?style.geometry:'')}
        style={(state.position?`position:fixed;margin:0;top:${state.position.top}px;left:${state.position.left}px;width:${state.width}px;height:${state.height}px;`:'')}
      >
        <FontAwesomeIcon icon={props.icon} />
        {(props.src && state.expanded) && <iframe onLoad={showApp} src={props.src}/>}
        <div ref={closeBtn} class={style.close} onClick={close}><FontAwesomeIcon icon='times'/></div>
      </div>}
      {props.title && <div className={style.title}>{props.title}</div>}
    </span>
  )
}

export default Launcher;
