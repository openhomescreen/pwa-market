
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
  ANY: 'any',
})

export class GestureListener {
  target = undefined
  #detectType = GESTURES.ANY
  minDistance = 50
  continuous = false
  #watchDiagonals = false
  #watchComplexGestures = false
  #lastGesture = undefined

  position = Object.seal({
    initial: {
      x: undefined,
      y: undefined,
    },
    final: {
      x: undefined,
      y: undefined,
    },
  })

  listener = (e) => {
    console.error('gesture listener callback function undefined')
  }

  /**
   * define a gesture listener that will return an event to the callback
   * after the final gesture has been detected
   * @param {EventTarget} elm the element to bind the event listener to 
   * @param {string} type swipe-up, swipe-down, swipe-left, swipe-right, any
   * @param {function} listener callback function
   * @param {object} options { minSwipeDistance: (number), continuous: (bool) } 
   */
  constructor(elm, type, listener, options) {
    this.target = elm
    this.#detectType = type || this.#detectType
    this.listener = listener || this.listener
    this.minDistance = options.minSwipeDistance || this.minDistance
    this.continuous = options.continuous || this.continuous

    if(this.#detectType == GESTURES.SWIPE_DOWN_LEFT
      || this.#detectType == GESTURES.SWIPE_DOWN_RIGHT
      || this.#detectType == GESTURES.DRAW_X
      || this.#detectType == GESTURES.ANY)
      this.#watchDiagonals = true

    if(this.#detectType == GESTURES.DRAW_X
      || this.#detectType == GESTURES.ANY)
      this.#watchComplexGestures = true

    this.target.addEventListener('touchstart', this.touchstart, false)
    this.target.addEventListener('touchmove', this.touchmove, false)
    this.target.addEventListener('touchend', this.touchend, false)
  }

  destroy = () => {
    this.target.removeEventListener('touchstart', this.touchstart, false)
    this.target.removeEventListener('touchmove', this.touchmove, false)
    this.target.removeEventListener('touchend', this.touchend, false)
  }

  /**
   * records the first point of the touch interaction
   */
  touchstart = (e) => {
    this.position.initial.x = this.position.final.x = e.touches[0].screenX
    this.position.initial.y = this.position.final.y = e.touches[0].screenY
    // console.log('touchstart', JSON.stringify(position.initial));
  }

  /**
   * updates the end point of the touch interaction
   */
  touchmove = (e) => {
    this.position.final.x = e.touches[0].screenX
    this.position.final.y = e.touches[0].screenY
    // console.log('touchmove', 'continuous: '+continuous, JSON.stringify(this.position.final))

    if(this.continuous) {
      this.listener({
        target: this.target,
        type: 'in-motion',
        screenPosition: {
          initial: this.position.initial
        },
        movementX: this.position.final.x - this.position.initial.x,
        movementY: this.position.final.y - this.position.initial.y,
      })
    }
  }

  /**
   * calculates the vector between the initial x/y and the final x/y
   * then determines what type of swipe that indicates and 
   */
  touchend = (e) => {
    let gesture = null
    const dX = this.position.final.x - this.position.initial.x
    const dY = this.position.final.y - this.position.initial.y

    // console.log('touchend', dX, dY, JSON.stringify(position));

    // distance calc and compare to minimum threshold
    let distance = Math.sqrt(Math.pow(dX,2) + Math.pow(dY,2))
    if (distance < this.minDistance) {
      // console.log('distance '+distance+' too short')
      return
    }
    
    // general direction of swipe
    if (dY === 0 || Math.abs(dX / dY) > 1) {
      if(dY != 0 && this.#watchDiagonals && Math.abs(dX / dY) < 2) {
        //diagonal
        gesture = dX > 0 ? (dY > 0 ? GESTURES.SWIPE_UP_RIGHT : GESTURES.SWIPE_DOWN_RIGHT) : (dY > 0 ? GESTURES.SWIPE_UP_LEFT : GESTURES.SWIPE_DOWN_LEFT)
      } else {
        // horizontal
        gesture = dX > 0 ? GESTURES.SWIPE_RIGHT : GESTURES.SWIPE_LEFT
      }

    } else { 
      if(this.#watchDiagonals && Math.abs(dX / dY) > .75) {
        //diagonal
        gesture = dX > 0 ? (dY > 0 ? GESTURES.SWIPE_UP_RIGHT : GESTURES.SWIPE_DOWN_RIGHT) : (dY > 0 ? GESTURES.SWIPE_UP_LEFT : GESTURES.SWIPE_DOWN_LEFT)
      } else {
        // vertical
        gesture = dY > 0 ? GESTURES.SWIPE_DOWN : GESTURES.SWIPE_UP
      }
    }

    if(this.#watchComplexGestures) {
      if(this.#lastGesture) {
        if(
          ((this.#lastGesture == GESTURES.SWIPE_DOWN_LEFT || this.#lastGesture == GESTURES.SWIPE_UP_RIGHT) && (gesture == GESTURES.SWIPE_DOWN_RIGHT || gesture == GESTURES.SWIPE_UP_LEFT))
          || ((this.#lastGesture == GESTURES.SWIPE_DOWN_RIGHT || this.#lastGesture == GESTURES.SWIPE_UP_LEFT) && (gesture == GESTURES.SWIPE_DOWN_LEFT || gesture == GESTURES.SWIPE_UP_RIGHT))
        )
          gesture = GESTURES.DRAW_X
      }
      this.#lastGesture = gesture
      setTimeout(() => {
        this.#lastGesture = undefined
      }, 1000)
    }

    // call listener if it matches the type requested
    if ((gesture == this.#detectType || this.#detectType == GESTURES.ANY) && typeof this.listener === 'function') {
      this.listener({
        target: this.target,
        type: gesture,
        screenPosition: this.position,
        movementX: dX,
        movementY: dY,
      })
    } else {
      //console.log(gesture, 'gesture did not match');
    }
  }
} 