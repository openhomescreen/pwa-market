import { createRef, h } from 'preact'
import { DateTime, Interval } from 'luxon'
import style from './style'
import { useState, useReducer, useEffect } from 'preact/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GESTURES } from '../../util/EventTarget.addGestureListener'
import { getUpgradedImgSrc } from '../../util/image-sourcer'

const initialStubState = {
  expanded: false,
  hasExpanded: false,
  classes: '',
  contentStyle: '',
  textStyle: ''
}
const defaultArticleDetails = {
  url: '',
  description: '',
  tags: [],
  largeImage: false,
}
var top, height, width, age, stubHeight

const reducer = (state, action) => {
  let nextState = Object.assign({}, state)
  switch (action) {
    case 'prepareExpanse': 
      nextState.contentStyle = `height:${height}px;top:${top}px;`
      nextState.textStyle = 'margin-left:25vw;'
      break
    case 'expand':
      document.getElementById('app').classList.add("fix")
      nextState.expanded = true
      nextState.hasExpanded = true
      nextState.classes = style.expanded
      break
    case 'beginCollapse': 
      nextState.classes = ''
      nextState.expanded = false
      nextState.contentStyle += 'position:fixed;width:94vw;background-color:#222;'
      nextState.textStyle = ''
      break
    case 'collapse':
      document.getElementById('app').classList.remove("fix")
      nextState.contentStyle = 'background-color:#222;'
      break
    case 'removeFocus':
      nextState.classes = style.read
      nextState.contentStyle = ''
      break
    default: 
      throw new Error('Unexpected stub action')
  }
  return nextState;
}

const Stub = (props) => {
  if(props.date) {
    const now = DateTime.local()
    const published = DateTime.fromSeconds(props.date)
    age = Math.round(Interval.fromDateTimes(published, now).length('days'))
  }
  
  const contentBox = createRef()
  const gestureBox = createRef()
  const [stub, dispatch] = useReducer(reducer, initialStubState)
  const [articleDetails, setArticleDetails] = useState(defaultArticleDetails)

  const expand = () => {
    let position = contentBox.current.getBoundingClientRect()
    stubHeight = contentBox.current.parentElement.offsetHeight
    height = contentBox.current.offsetHeight
    width = contentBox.current.offsetWidth
    top = position.top
    dispatch('prepareExpanse')
    setTimeout(() => dispatch('expand'), 100)
    // TODO: run only once
    setTimeout(() => {
      // TODO: replace this url with the api/feed endpoint
      fetch(`/api/article/${props.id}`, {
      // fetch(`/assets/article.json`, {
        credentials: 'include'
      })
      .then(function(resp) {
        return resp.json()
      })
      .then(function(data) {
        console.log('before data', JSON.stringify(articleDetails));
        setArticleDetails(prevArticleDetails => ({
          ...prevArticleDetails,
          ...data,
        }));
        // setArticleDetails(Object.assign(articleDetails, data))
        console.log('after data', JSON.stringify(articleDetails));
      })
    }, 500)

    gestureBox.current.addGestureListener(GESTURES.SWIPE_DOWN, (e) => {
      if(e.type == 'in-motion') {
        // contentBox is the parent of gestureBox
        // console.log(e.movementY)
        e.target.parentElement.style.transform = 'translateY('+(Math.max(0, e.movementY)*1.5)+'px)';
        // e.target.parentElement.style['transition-property'] = 'none';
        // let css = e.target.parentElement.style.cssText
        // console.log(css);
        // e.target.parentElement.style.cssText = css.replace(/top:.*px(\s!important)?;/,'top:'+Math.round(Math.max(0, e.movementY)*1.5+(window.innerHeight/10))+'px !important;');
      } else {
        collapse(e);
      }
    }, {
      maxSwipeDistance: 5,
      continuous: true,
    })
    // contentBox.current.addGestureListener(GESTURES.SWIPE_DOWN, (e) => {
    //   collapse(e);
    // }, 90)
  }

  const collapse = (e) => {
    // gestureBox.current.removeGestureListener();
    // contentBox.current.removeGestureListener();
    if(typeof e.stopPropagation === 'function')
      e.stopPropagation()
    dispatch('beginCollapse')
    setTimeout(() => dispatch('collapse'), 250)
    setTimeout(() => dispatch('removeFocus'), 1000);
  }

  const share = (e) => {
    navigator.share(articleDetails.url);
  }
  
  const swapImage = (e) => {
    console.log(e);
    console.log('before img', JSON.stringify(articleDetails));
    setArticleDetails(prevArticleDetails => ({
      ...prevArticleDetails,
      largeImage: e.target.src,
    }));
    console.log('after img', JSON.stringify(articleDetails));
  }

	return (
    <div class={style.stub + (stub.classes?' '+stub.classes:'')} style={stub.contentStyle?`height:${stubHeight}px;`:''} href={"/"+props.id}>
      <div class={style.content} style={stub.contentStyle} onClick={!stub.expanded?expand:undefined} ref={contentBox}>
        <div class={style.close} onClick={collapse} ref={gestureBox}><FontAwesomeIcon icon="minus"/></div>
        <div class={style.img}>
          {((!articleDetails.largeImage || !stub.expanded) && (!stub.expanded || props.imageURL)) && <img class={stub.hasExpanded?style.noTransition:''} src={props.imageURL || "/assets/noimg.png"}/>}
          {console.log('render', JSON.stringify(articleDetails))}
          {(stub.expanded && props.imageURL) && <img class={style.noTransition} onLoad={swapImage} src={articleDetails.largeImage || getUpgradedImgSrc("New York Times", props.imageURL)}/>}
        </div>
        <div class={style.text} style={stub.textStyle}>
          <h2>{props.headline && props.headline.replace(/&#39;/g,"'")}</h2>
          <p>{props.publisher && props.publisher.replace(/^(t|T)he /, "")}{(props.publisher && props.author) && " / "}{props.author}{((props.publisher || props.author) && age) && " / "}{age && age+'d'}</p>
        </div>
        <div class={style.description}>
          {/* TODO: split description into multiple p tags when multiple paragraphs are necessary */}
          <p>
            {articleDetails.description}
          </p>
        </div>
        {articleDetails.url && 
          <div class={style.links}>
            <FontAwesomeIcon icon="share-square" />
            <FontAwesomeIcon icon="glasses" />
            <a target="_blank" href={articleDetails.url}>Visit Source</a>
          </div>
        }
      </div>
    </div>
  );
}

export default Stub;
