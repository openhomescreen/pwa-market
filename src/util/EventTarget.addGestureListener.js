
// SYNTAX
// target.addGestureListener(type, listener [, minSwipeDistance]);
// document.getElementById('swipeTarget').addGestureListener(GESTURE.SWIPE_DOWN, (e) => {
//   console.log(`the ${e.type} gesture was detected on the following element`, e.target)
// }, 20)

export const GESTURES = Object.freeze({
  SWIPE_UP: 'swipe-up',
  SWIPE_DOWN: 'swipe-down',
  SWIPE_RIGHT: 'swipe-right',
  SWIPE_LEFT: 'swipe-left',
  SWIPE_DOWN_LEFT: 'swipe-down-left',
  SWIPE_DOWN_RIGHT: 'swipe-down-right',
  SWIPE_UP_LEFT: 'swipe-up-left',
  SWIPE_UP_RIGHT: 'swipe-up-right',
  DRAW_X: 'draw-x',
})

const position = Object.seal({
  initial: {
    x: undefined,
    y: undefined,
  },
  final: {
    x: undefined,
    y: undefined,
  },
})

var continuous, minDistance, detectType, lastGesture
var watchDiagonals = false
var watchComplexGestures = false
var callback = (e) => {
  console.error('gesture listener callback function undefined')
}

/**
 * records the first point of the touch interaction
 */
const touchstart = function(e) {
  position.initial.x = position.final.x = e.touches[0].screenX
  position.initial.y = position.final.y = e.touches[0].screenY
  // console.log('touchstart', JSON.stringify(position.initial));
}

/**
 * updates the end point of the touch interaction
 */
const touchmove = function(e) {
  position.final.x = e.touches[0].screenX
  position.final.y = e.touches[0].screenY
  // console.log('touchmove', 'continuous: '+continuous, JSON.stringify(position.final))

  if(continuous) {
    callback({
      target: this,
      type: 'in-motion',
      screenPosition: {
        initial: position.initial
      },
      movementX: position.final.x - position.initial.x,
      movementY: position.final.y - position.initial.y,
    })
  }
}

/**
 * calculates the vector between the initial x/y and the final x/y
 * then determines what type of swipe that indicates and 
 */
const touchend = function(e) {
  let gesture = null
  const dX = position.final.x - position.initial.x
  const dY = position.final.y - position.initial.y

  // console.log('touchend', dX, dY, JSON.stringify(position));

  // distance calc and compare to minimum threshold
  let distance = Math.sqrt(Math.pow(dX,2) + Math.pow(dY,2))
  if (distance < minDistance) {
    // console.log('distance '+distance+' too short')
    return
  }
  
  // general direction of swipe
  if (dY === 0 || Math.abs(dX / dY) > 1) {
    if(dY != 0 && watchDiagonals && Math.abs(dX / dY) < 2) {
      //diagonal
      gesture = dX > 0 ? (dY > 0 ? GESTURES.SWIPE_UP_RIGHT : GESTURES.SWIPE_DOWN_RIGHT) : (dY > 0 ? GESTURES.SWIPE_UP_LEFT : GESTURES.SWIPE_DOWN_LEFT)
    } else {
      // horizontal
      gesture = dX > 0 ? GESTURES.SWIPE_RIGHT : GESTURES.SWIPE_LEFT
    }

  } else { 
    if(watchDiagonals && Math.abs(dX / dY) > .75) {
      //diagonal
      gesture = dX > 0 ? (dY > 0 ? GESTURES.SWIPE_UP_RIGHT : GESTURES.SWIPE_DOWN_RIGHT) : (dY > 0 ? GESTURES.SWIPE_UP_LEFT : GESTURES.SWIPE_DOWN_LEFT)
    } else {
      // vertical
      gesture = dY > 0 ? GESTURES.SWIPE_DOWN : GESTURES.SWIPE_UP
    }
  }

  if(watchComplexGestures) {
    if(lastGesture) {
      if(
        ((lastGesture == GESTURES.SWIPE_DOWN_LEFT || lastGesture == GESTURES.SWIPE_UP_RIGHT) && (gesture == GESTURES.SWIPE_DOWN_RIGHT || gesture == GESTURES.SWIPE_UP_LEFT))
        || ((lastGesture == GESTURES.SWIPE_DOWN_RIGHT || lastGesture == GESTURES.SWIPE_UP_LEFT) && (gesture == GESTURES.SWIPE_DOWN_LEFT || gesture == GESTURES.SWIPE_UP_RIGHT))
      )
        gesture = GESTURES.DRAW_X
    }
    lastGesture = gesture
    setTimeout(() => {
      lastGesture = undefined
    }, 1000)
  }

  // call listener if it matches the type requested
  if ((gesture == detectType || detectType == 'any') && typeof callback === 'function') {
    callback({
      target: this,
      type: gesture,
      screenPosition: position,
      movementX: dX,
      movementY: dY,
    })
  } else {
    //console.log(gesture, 'gesture did not match');
  }
}

/**
 * extend the EventTarget object prototype with helpers for adding 
 * and removing gesture listeners
 */
export const extendEventTargetWithGestures = () => {
  /**
   * remove all gesture listeners of all type from the target element
   */
  EventTarget.prototype.removeGestureListeners = function() {
    this.removeEventListener('touchstart', touchstart, false)
    this.removeEventListener('touchmove', touchmove, false)
    this.removeEventListener('touchend', touchend, false)
  }

  /**
   * define a gesture listener that will return an event to the callback
   * after the final gesture has been detected
   * @param {string} type swipe-up, swipe-down, swipe-left, swipe-right, any
   * @param {function} listener callback function
   * @param {object} options { minSwipeDistance: (number), continuous: (bool) } 
   */
  EventTarget.prototype.addGestureListener = function(type, listener, options = { minSwipeDistance: 50, continuous: false}) {
    // console.log('addGestureListener', this);
    detectType = type
    callback = listener
    minDistance = options.minSwipeDistance
    continuous = options.continuous

    if(detectType == GESTURES.SWIPE_DOWN_LEFT
      || detectType == GESTURES.SWIPE_DOWN_RIGHT
      || detectType == GESTURES.DRAW_X
      || detectType == 'any')
      watchDiagonals = true

    if(detectType == GESTURES.DRAW_X
      || detectType == 'any')
      watchComplexGestures = true

    this.addEventListener('touchstart', touchstart, false)
    this.addEventListener('touchmove', touchmove, false)
    this.addEventListener('touchend', touchend, false)
  }
}