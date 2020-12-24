import { createRef, h } from 'preact';
// import { GESTURES } from '../../util/EventTarget.addGestureListener'
import Launcher from '../../components/launcher';
// import { useEffect } from 'preact/hooks';

import style from './style';

const HomeScreen = (props) => {
	// const screen = createRef();

	// useEffect(() => {
	// 	// alert('works')
	// 	screen.current.addGestureListener(GESTURES.DRAW_X, (e) => {
  //     if(e.type == 'in-motion') {
  //       // contentBox is the parent of gestureBox
  //       // console.log(e.movementY)
  //       // e.target.parentElement.style.transform = 'translateY('+(Math.max(0, e.movementY)*1.5)+'px)';
  //       // e.target.parentElement.style['transition-property'] = 'none';
  //       // let css = e.target.parentElement.style.cssText
  //       // console.log(css);
  //       // e.target.parentElement.style.cssText = css.replace(/top:.*px(\s!important)?;/,'top:'+Math.round(Math.max(0, e.movementY)*1.5+(window.innerHeight/10))+'px !important;');
  //     } else {
	// 			alert(JSON.stringify(e))
				
  //     }
  //   }, {
  //     minSwipeDistance: 40,
  //     // continuous: true,
  //   })
	// }, [])

	return (
		<div class={style.homescreen}
			// ref={screen}
		>
			<Launcher icon='store' title='App Store'/>
			<Launcher/>
			<Launcher/>
			<Launcher/>
			<Launcher icon='male' title='Hangapp' src='https://kylesureline.com/hangapp/#/'/>
			<Launcher icon='hotel' title='Tower Game' src='https://towergame.app'/>
			<Launcher icon='cube' title='The Cube' src='https://bsehovac.github.io/the-cube/'/>
			<Launcher/>
			<Launcher icon='stopwatch' title='Stopwatch' src='https://stopwatch-app.com'/>
			<Launcher icon='calculator' title='Calculator' src='https://calculator.iondrimbafilho.me'/>
			<Launcher icon='wifi' title='Snapdrop' src='https://snapdrop.net'/>
			<Launcher icon='check-square' title='Todolist' src='https://todo.geekydevs.com'/>
			<Launcher/>
			<Launcher/>
			<Launcher/>
			<Launcher icon='cogs' title='Settings'/>
		</div>
	);
}

export default HomeScreen;