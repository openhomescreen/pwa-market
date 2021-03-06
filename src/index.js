import './style/index'
import App from './components/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalculator, faCheckSquare, faCogs, faCube, faDiceFive, faExchangeAlt, faGamepad, faGhost, faHome, faHotel, faImage, faMale, faMobile, faPalette, faProjectDiagram, faSquare, faStopwatch, faTh, faTimes, faUniversity, faWifi } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
// import { extendEventTargetWithGestures } from './util/EventTarget.addGestureListener'

// extend the EventTarget object to include a gesture listener setter
// extendEventTargetWithGestures()

// add the icons we want to a library so we can easily use them throughout the rest of the project
// https://www.npmjs.com/package/@fortawesome/react-fontawesome#build-a-library-to-reference-icons-throughout-your-app-more-conveniently
library.add(faCalculator, faCheckSquare, faCircle, faCogs, faCube, faDiceFive, faExchangeAlt, faGamepad, faGhost, faHome, faHotel, faImage, faMale, faMobile, faPalette, faProjectDiagram, faSquare, faStopwatch, faTh, faTimes, faUniversity, faWifi)

export default App
