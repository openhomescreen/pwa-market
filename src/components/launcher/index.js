import { h } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style';
import { useEffect, useRef, useState } from 'preact/hooks';
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
  }

  const [state, setState] = useState(initialState)

  const appSpace = useRef()
  const closeBtn = useRef()

  useEffect(() => {
    if(state.launched) {
      console.log('APP SPACE LISTENER');
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
      console.log('CLOSE BTN LISTENER');
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
      let closeBtnRect = closeBtn.current.getBoundingClientRect()
      setState((prevState) => ({
        ...prevState,
        expanded: props.src?true:prevState.expanded,
        loaded: props.src?prevState.loaded:true,
        closePosition: {
          top: closeBtnRect.x,
          left: closeBtnRect.y,
        },
      }))
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
