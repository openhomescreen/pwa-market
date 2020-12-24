import { createRef, h } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style';
import { useState } from 'preact/hooks';
import { GESTURES } from '../../util/EventTarget.addGestureListener';

const Launcher = (props) => {

  const initialState = {
    animating: false,
    height: undefined,
    launched: false,
    expanded: false,
    loaded: false,
    position: undefined,
    width: undefined,
  }

  const [state, setState] = useState(initialState)

  const appSpace = createRef();
  const closeBtn = createRef();

  const launch = (e) => {
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
    appSpace.current.addGestureListener(GESTURES.DRAW_X, (e) => {
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
        console.log(e)
				close(e)
      }
    }, {
      minSwipeDistance: 25,
      // continuous: true,
    })
  }

  const showApp = (e) => {
    setState((prevState) => ({
      ...prevState,
      loaded: true,
    }))
  }

  const close = (e) => {
    appSpace.current.removeGestureListeners();
    closeBtn.current.removeGestureListeners();
    if(typeof e.stopPropagation == 'function')
      e.stopPropagation();
    setState((prevState) => ({
      ...prevState,
      launched: false,
    }))
    setTimeout(() => setState(initialState), 450)
    
  }

  return (
    <span className={style.launcher+(state.launched?' '+style.launched:'')+(state.animating?' '+style.animating:'')+(state.loaded?' '+style.loaded:'')}>
      {(props.title || props.icon) && <div ref={appSpace} onClick={!state.launched?launch:undefined} className={((props.title || props.icon)?style.geometry:'')}
        style={(state.position?`position:fixed;margin:0;top:${state.position.top}px;left:${state.position.left}px;width:${state.width}px;height:${state.height}px;`:'')}
      >
        <FontAwesomeIcon icon={props.icon} />
        {(props.src && state.expanded) && <iframe onLoad={showApp} src={props.src}/>}
        {state.launched && <div ref={closeBtn} class={style.close} onClick={close}><FontAwesomeIcon icon='times'/></div>}
      </div>}
      {props.title && <div className={style.title}>{props.title}</div>}
    </span>
  )
}

export default Launcher;
