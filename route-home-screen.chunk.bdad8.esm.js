(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"730d":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o=t=>new Promise((e,n)=>{fetch("https://raw.githubusercontent.com/openhomescreen/pwa-market/main/data/manifests/"+encodeURIComponent(btoa(t))+".json").then(t=>{t.json().then(t=>{"[object Array]"==Object.prototype.toString.call(t.icons)&&t.icons.sort((t,e)=>{if(t.purpose&&"maskable"==t.purpose&&(!e.purpose||"maskable"!=e.purpose))return-1;if(e.purpose&&"maskable"==e.purpose&&(!t.purpose||"maskable"!=t.purpose))return 1;let n=parseInt(t.sizes.split("x")[0]),o=parseInt(e.sizes.split("x")[0]);return n>o?-1:o>n?1:0}),e(t)}).catch(t=>{n(t)})}).catch(t=>{n(t)})})},E02R:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},GAEk:function(t,e,n){"use strict";function o(t,e){for(var n in e)t[n]=e[n];return t}function r(t,e){for(var n in t)if("__source"!==n&&!(n in e))return!0;for(var o in e)if("__source"!==o&&t[o]!==e[o])return!0;return!1}function i(t){this.props=t}function c(){this.__u=0,this.t=null,this.__b=null}function a(t){var e=t.__.__c;return e&&e.__e&&e.__e(t)}function s(){this.o=null,this.u=null}function u(t){return this.getChildContext=function(){return t.context},t.children}function l(t){var e=this,n=t.i;e.componentWillUnmount=function(){Object(I.render)(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),t.__v?(e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(t){this.childNodes.push(t),e.i.appendChild(t)},insertBefore:function(t){this.childNodes.push(t),e.i.appendChild(t)},removeChild:function(t){this.childNodes.splice(this.childNodes.indexOf(t)>>>1,1),e.i.removeChild(t)}}),Object(I.render)(Object(I.createElement)(u,{context:e.context},t.__v),e.l)):e.l&&e.componentWillUnmount()}function p(){}function f(){return this.cancelBubble}function _(){return this.defaultPrevented}function h(t){return!!t&&t.$$typeof===U}function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)e.indexOf(n=i[o])>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)e.indexOf(n=i[o])>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function O(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}function j(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var n,o=e.indexOf(":"),r=g(e.slice(0,o)),i=e.slice(o+1).trim();return r.startsWith("webkit")?t[(n=r,n.charAt(0).toUpperCase()+n.slice(1))]=i:t[r]=i,t}),{})}function P(t){return S.c.icon?S.c.icon(t):null===t?null:"object"===d(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function w(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?m({},t,e):{}}function E(t){var e=t.forwardedRef,n=v(t,["forwardedRef"]),o=n.mask,r=n.symbol,i=n.className,c=n.title,a=n.titleId,s=P(n.icon),u=w("classes",[].concat(O(function(t){var e,n=t.flip,o=t.size,r=t.rotation,i=t.pull,c=(m(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-inverse":t.inverse,"fa-border":t.border,"fa-li":t.listItem,"fa-flip-horizontal":"horizontal"===n||"both"===n,"fa-flip-vertical":"vertical"===n||"both"===n},"fa-".concat(o),null!=o),m(e,"fa-rotate-".concat(r),null!=r&&0!==r),m(e,"fa-pull-".concat(i),null!=i),m(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(c).map((function(t){return c[t]?t:null})).filter((function(t){return t}))}(n)),O(i.split(" ")))),l=w("transform","string"==typeof n.transform?S.c.transform(n.transform):n.transform),p=w("mask",P(o)),f=Object(S.a)(s,y({},u,{},l,{},p,{symbol:r,title:c,titleId:a}));if(!f)return function(){var t;!V&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",s),null;var _=f.abstract,h={ref:e};return Object.keys(n).forEach((function(t){E.defaultProps.hasOwnProperty(t)||(h[t]=n[t])})),X(_[0],h)}n.d(e,"a",(function(){return E}));var S=n("X7+o"),W=n("W0B4"),x=n.n(W),R=n("QRet"),I=n("hosL");(i.prototype=new I.Component).isPureReactComponent=!0,i.prototype.shouldComponentUpdate=function(t,e){return r(this.props,t)||r(this.state,e)};var C=I.options.__b;I.options.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),C&&C(t)};var T="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911,A=function(t,e){return null==t?null:Object(I.toChildArray)(Object(I.toChildArray)(t).map(e))},N={map:A,forEach:A,count:function(t){return t?Object(I.toChildArray)(t).length:0},only:function(t){var e=Object(I.toChildArray)(t);if(1!==e.length)throw"Children.only";return e[0]},toArray:I.toChildArray},k=I.options.__e;I.options.__e=function(t,e,n){if(t.then)for(var o,r=e;r=r.__;)if((o=r.__c)&&o.__c)return null==e.__e&&(e.__e=n.__e,e.__k=n.__k),o.__c(t,e);k(t,e,n)},(c.prototype=new I.Component).__c=function(t,e){var n=e.__c,o=this;null==o.t&&(o.t=[]),o.t.push(n);var r=a(o.__v),i=!1,c=function(){i||(i=!0,n.componentWillUnmount=n.__c,r?r(s):s())};n.__c=n.componentWillUnmount,n.componentWillUnmount=function(){c(),n.__c&&n.__c()};var s=function(){if(!--o.__u){if(o.state.__e){var t=o.state.__e;o.__v.__k[0]=function t(e,n,o){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return t(e,n,o)})),e.__c&&e.__c.__P===n&&(e.__e&&o.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=o)),e}(t,t.__c.__P,t.__c.__O)}var e;for(o.setState({__e:o.__b=null});e=o.t.pop();)e.forceUpdate()}},u=!0===e.__h;o.__u++||u||o.setState({__e:o.__b=o.__v.__k[0]}),t.then(c,c)},c.prototype.componentWillUnmount=function(){this.t=[]},c.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function t(e,n,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(t){"function"==typeof t.__c&&t.__c()})),e.__c.__H=null),null!=(e=o({},e)).__c&&(e.__c.__P===r&&(e.__c.__P=n),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return t(e,n,r)}))),e}(this.__b,n,r.__O=r.__P)}this.__b=null}var i=e.__e&&Object(I.createElement)(I.Fragment,null,t.fallback);return i&&(i.__h=null),[Object(I.createElement)(I.Fragment,null,e.__e?null:t.children),i]};var L=function(t,e,n){if(++n[1]===n[0]&&t.u.delete(e),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.u.size))for(n=t.o;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.o=n=n[2]}};(s.prototype=new I.Component).__e=function(t){var e=this,n=a(e.__v),o=e.u.get(t);return o[0]++,function(r){var i=function(){e.props.revealOrder?(o.push(r),L(e,t,o)):r()};n?n(i):i()}},s.prototype.render=function(t){this.o=null,this.u=new Map;var e=Object(I.toChildArray)(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var n=e.length;n--;)this.u.set(e[n],this.o=[1,0,this.o]);return t.children},s.prototype.componentDidUpdate=s.prototype.componentDidMount=function(){var t=this;this.u.forEach((function(e,n){L(t,n,e)}))};var U="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,D=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,H=function(t){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(t)};I.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(t){Object.defineProperty(I.Component.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})}));var F=I.options.event;I.options.event=function(t){return F&&(t=F(t)),t.persist=p,t.isPropagationStopped=f,t.isDefaultPrevented=_,t.nativeEvent=t};var G,Y={configurable:!0,get:function(){return this.class}},$=I.options.vnode;I.options.vnode=function(t){var e=t.type,n=t.props,o=n;if("string"==typeof e){for(var r in o={},n){var i=n[r];"defaultValue"===r&&"value"in n&&null==n.value?r="value":"download"===r&&!0===i?i="":/ondoubleclick/i.test(r)?r="ondblclick":/^onchange(textarea|input)/i.test(r+e)&&!H(n.type)?r="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(r)?r=r.toLowerCase():D.test(r)?r=r.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===i&&(i=void 0),o[r]=i}"select"==e&&o.multiple&&Array.isArray(o.value)&&(o.value=Object(I.toChildArray)(n.children).forEach((function(t){t.props.selected=-1!=o.value.indexOf(t.props.value)}))),"select"==e&&null!=o.defaultValue&&(o.value=Object(I.toChildArray)(n.children).forEach((function(t){t.props.selected=o.multiple?-1!=o.defaultValue.indexOf(t.props.value):o.defaultValue==t.props.value}))),t.props=o}e&&n.class!=n.className&&(Y.enumerable="className"in n,null!=n.className&&(o.class=n.className),Object.defineProperty(o,"className",Y)),t.$$typeof=U,$&&$(t)};var z=I.options.__r;I.options.__r=function(t){z&&z(t),G=t.__c};var M={ReactCurrentDispatcher:{current:{readContext:function(t){return G.__n[t.__c].props.value}}}},B=("object"==typeof performance&&"function"==typeof performance.now&&performance.now.bind(performance),{useState:R.j,useReducer:R.h,useEffect:R.d,useLayoutEffect:R.f,useRef:R.i,useImperativeHandle:R.e,useMemo:R.g,useCallback:R.a,useContext:R.b,useDebugValue:R.c,version:"16.8.0",Children:N,render:function(t,e,n){return null==e.__k&&(e.textContent=""),Object(I.render)(t,e),"function"==typeof n&&n(),t?t.__c:null},hydrate:function(t,e,n){return Object(I.hydrate)(t,e),"function"==typeof n&&n(),t?t.__c:null},unmountComponentAtNode:function(t){return!!t.__k&&(Object(I.render)(null,t),!0)},createPortal:function(t,e){return Object(I.createElement)(l,{__v:t,i:e})},createElement:I.createElement,createContext:I.createContext,createFactory:function(t){return I.createElement.bind(null,t)},cloneElement:function(t){return h(t)?I.cloneElement.apply(null,arguments):t},createRef:I.createRef,Fragment:I.Fragment,isValidElement:h,findDOMNode:function(t){return t&&(t.base||1===t.nodeType&&t)||null},Component:I.Component,PureComponent:i,memo:function(t,e){function n(t){var n=this.props.ref,o=n==t.ref;return!o&&n&&(n.call?n(null):n.current=null),e?!e(this.props,t)||!o:r(this.props,t)}function o(e){return this.shouldComponentUpdate=n,Object(I.createElement)(t,e)}return o.displayName="Memo("+(t.displayName||t.name)+")",o.prototype.isReactComponent=!0,o.__f=!0,o},forwardRef:function(t){function e(e,n){var r=o({},e);return delete r.ref,t(r,(n=e.ref||n)&&("object"!=typeof n||"current"in n)?n:null)}return e.$$typeof=T,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e},unstable_batchedUpdates:function(t,e){return t(e)},StrictMode:I.Fragment,Suspense:c,SuspenseList:s,lazy:function(t){function e(e){if(n||(n=t()).then((function(t){o=t.default||t}),(function(t){r=t})),r)throw r;if(!o)throw n;return Object(I.createElement)(o,e)}var n,o,r;return e.displayName="Lazy",e.__f=!0,e},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:M}),V=!1;try{V=!0}catch(t){}E.displayName="FontAwesomeIcon",E.propTypes={border:x.a.bool,className:x.a.string,mask:x.a.oneOfType([x.a.object,x.a.array,x.a.string]),fixedWidth:x.a.bool,inverse:x.a.bool,flip:x.a.oneOf(["horizontal","vertical","both"]),icon:x.a.oneOfType([x.a.object,x.a.array,x.a.string]),listItem:x.a.bool,pull:x.a.oneOf(["right","left"]),pulse:x.a.bool,rotation:x.a.oneOf([0,90,180,270]),size:x.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:x.a.bool,symbol:x.a.oneOfType([x.a.bool,x.a.string]),title:x.a.string,transform:x.a.oneOfType([x.a.string,x.a.object]),swapOpacity:x.a.bool},E.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var X=function t(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var r=(n.children||[]).map((function(n){return t(e,n)})),i=Object.keys(n.attributes||{}).reduce((function(t,e){var o=n.attributes[e];switch(e){case"class":t.attrs.className=o,delete n.attributes.class;break;case"style":t.attrs.style=j(o);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=o:t.attrs[g(e)]=o}return t}),{attrs:{}}),c=o.style,a=void 0===c?{}:c,s=v(o,["style"]);return i.attrs.style=y({},i.attrs.style,{},a),e.apply(void 0,[n.tag,y({},i.attrs,{},s)].concat(O(r)))}.bind(null,B.createElement)},NS33:function(t,e,n){"use strict";function o(){}function r(){}var i=n("E02R");r.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,r,c){if(c!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n,n}},Pe6V:function(t){t.exports={homescreen:"d6c6"}},QRet:function(t,e,n){"use strict";function o(t,e){j.options.__h&&j.options.__h(O,t,P||e),P=0;var n=O.__H||(O.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function r(t){return P=1,i(y,t)}function i(t,e,n){var r=o(v++,2);return r.t=t,r.__c||(r.__=[n?n(e):y(void 0,e),function(t){var e=r.t(r.__[0],t);r.__[0]!==e&&(r.__=[e,r.__[1]],r.__c.setState({}))}],r.__c=O),r.__}function c(t,e){var n=o(v++,3);!j.options.__s&&b(n.__H,e)&&(n.__=t,n.__H=e,O.__H.__h.push(n))}function a(t,e){var n=o(v++,4);!j.options.__s&&b(n.__H,e)&&(n.__=t,n.__H=e,O.__h.push(n))}function s(t){return P=5,l((function(){return{current:t}}),[])}function u(t,e,n){P=6,a((function(){"function"==typeof t?t(e()):t&&(t.current=e())}),null==n?n:n.concat(t))}function l(t,e){var n=o(v++,7);return b(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function p(t,e){return P=8,l((function(){return t}),e)}function f(t){var e=O.context[t.__c],n=o(v++,9);return n.__c=t,e?(null==n.__&&(n.__=!0,e.sub(O)),e.props.value):t.__}function _(t,e){j.options.useDebugValue&&j.options.useDebugValue(e?e(t):t)}function h(){w.forEach((function(t){if(t.__P)try{t.__H.__h.forEach(d),t.__H.__h.forEach(m),t.__H.__h=[]}catch(e){t.__H.__h=[],j.options.__e(e,t.__v)}})),w=[]}function d(t){var e=O;"function"==typeof t.__c&&t.__c(),O=e}function m(t){var e=O;t.__c=t.__(),O=e}function b(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function y(t,e){return"function"==typeof e?e(t):e}n.d(e,"j",(function(){return r})),n.d(e,"h",(function(){return i})),n.d(e,"d",(function(){return c})),n.d(e,"f",(function(){return a})),n.d(e,"i",(function(){return s})),n.d(e,"e",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return _}));var v,O,g,j=n("hosL"),P=0,w=[],E=j.options.__b,S=j.options.__r,W=j.options.diffed,x=j.options.__c,R=j.options.unmount;j.options.__b=function(t){O=null,E&&E(t)},j.options.__r=function(t){S&&S(t),v=0;var e=(O=t.__c).__H;e&&(e.__h.forEach(d),e.__h.forEach(m),e.__h=[])},j.options.diffed=function(t){W&&W(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==w.push(e)&&g===j.options.requestAnimationFrame||((g=j.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(o),I&&cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(n,100);I&&(e=requestAnimationFrame(n))})(h)),O=void 0},j.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(d),t.__h=t.__h.filter((function(t){return!t.__||m(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],j.options.__e(n,t.__v)}})),x&&x(t,e)},j.options.unmount=function(t){R&&R(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(d)}catch(t){j.options.__e(t,e.__v)}};var I="function"==typeof requestAnimationFrame},Upn6:function(t,e,n){"use strict";function o(t){return new Promise((e,n)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>n(t.error)})}function r(){return u||(u=function(t,e){const n=indexedDB.open(t);n.onupgradeneeded=()=>n.result.createObjectStore(e);const r=o(n);return(t,n)=>r.then(o=>n(o.transaction(e,t).objectStore(e)))}("keyval-store","keyval")),u}function i(t,e=r()){return e("readonly",e=>o(e.get(t)))}function c(t,e,n=r()){return n("readwrite",n=>(n.put(e,t),o(n.transaction)))}function a(t,e,n=r()){return n("readwrite",n=>new Promise((r,i)=>{n.get(t).onsuccess=function(){try{n.put(e(this.result),t),r(o(n.transaction))}catch(t){i(t)}}}))}function s(t,e=r()){return e("readwrite",e=>(e.delete(t),o(e.transaction)))}let u;n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return a}))},W0B4:function(t,e,n){t.exports=n("NS33")()},XaJR:function(t,e,n){"use strict";function o(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}function r(t){return"__private_"+_+++"_"+t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e);var s=n("hosL"),u=n("QRet"),l=(n("Y3FI"),n("GAEk")),p=n("fHgA"),f=n.n(p),_=0;const h=Object.freeze({SWIPE_UP:"swipe-up",SWIPE_DOWN:"swipe-down",SWIPE_RIGHT:"swipe-right",SWIPE_LEFT:"swipe-left",SWIPE_DOWN_LEFT:"swipe-down-left",SWIPE_DOWN_RIGHT:"swipe-down-right",SWIPE_UP_LEFT:"swipe-up-left",SWIPE_UP_RIGHT:"swipe-up-right",DRAW_X:"draw-x",ANY:"any"});var d=r("detectType"),m=r("watchDiagonals"),b=r("watchComplexGestures"),y=r("lastGesture");class v{constructor(t,e,n,r){this.target=void 0,Object.defineProperty(this,d,{writable:!0,value:h.ANY}),this.minDistance=50,this.continuous=!1,Object.defineProperty(this,m,{writable:!0,value:!1}),Object.defineProperty(this,b,{writable:!0,value:!1}),Object.defineProperty(this,y,{writable:!0,value:void 0}),this.position=Object.seal({initial:{x:void 0,y:void 0},final:{x:void 0,y:void 0}}),this.listener=()=>{console.error("gesture listener callback function undefined")},this.destroy=()=>{this.target.removeEventListener("touchstart",this.touchstart,!1),this.target.removeEventListener("touchmove",this.touchmove,!1),this.target.removeEventListener("touchend",this.touchend,!1)},this.touchstart=t=>{this.position.initial.x=this.position.final.x=t.touches[0].screenX,this.position.initial.y=this.position.final.y=t.touches[0].screenY},this.touchmove=t=>{this.position.final.x=t.touches[0].clientX,this.position.final.y=t.touches[0].clientY,this.continuous&&this.listener({target:this.target,type:"in-motion",screenPosition:this.position,movementX:this.position.final.x-this.position.initial.x,movementY:this.position.final.y-this.position.initial.y})},this.touchend=()=>{let t=null;const e=this.position.final.x-this.position.initial.x,n=this.position.final.y-this.position.initial.y;Math.sqrt(Math.pow(e,2)+Math.pow(n,2))<this.minDistance||(t=0===n||Math.abs(e/n)>1?0!=n&&o(this,m)[m]&&Math.abs(e/n)<2?e>0?n>0?h.SWIPE_UP_RIGHT:h.SWIPE_DOWN_RIGHT:n>0?h.SWIPE_UP_LEFT:h.SWIPE_DOWN_LEFT:e>0?h.SWIPE_RIGHT:h.SWIPE_LEFT:o(this,m)[m]&&Math.abs(e/n)>.75?e>0?n>0?h.SWIPE_UP_RIGHT:h.SWIPE_DOWN_RIGHT:n>0?h.SWIPE_UP_LEFT:h.SWIPE_DOWN_LEFT:n>0?h.SWIPE_DOWN:h.SWIPE_UP,o(this,b)[b]&&(o(this,y)[y]&&((o(this,y)[y]!=h.SWIPE_DOWN_LEFT&&o(this,y)[y]!=h.SWIPE_UP_RIGHT||t!=h.SWIPE_DOWN_RIGHT&&t!=h.SWIPE_UP_LEFT)&&(o(this,y)[y]!=h.SWIPE_DOWN_RIGHT&&o(this,y)[y]!=h.SWIPE_UP_LEFT||t!=h.SWIPE_DOWN_LEFT&&t!=h.SWIPE_UP_RIGHT)||(t=h.DRAW_X)),o(this,y)[y]=t,setTimeout(()=>{o(this,y)[y]=void 0},1e3)),t!=o(this,d)[d]&&o(this,d)[d]!=h.ANY||"function"!=typeof this.listener||this.listener({target:this.target,type:t,screenPosition:this.position,movementX:e,movementY:n}))},this.target=t,o(this,d)[d]=e||o(this,d)[d],this.listener=n||this.listener,this.minDistance=r.minSwipeDistance||this.minDistance,this.continuous=r.continuous||this.continuous,o(this,d)[d]!=h.SWIPE_DOWN_LEFT&&o(this,d)[d]!=h.SWIPE_DOWN_RIGHT&&o(this,d)[d]!=h.DRAW_X&&o(this,d)[d]!=h.ANY||(o(this,m)[m]=!0),o(this,d)[d]!=h.DRAW_X&&o(this,d)[d]!=h.ANY||(o(this,b)[b]=!0),this.target.addEventListener("touchstart",this.touchstart,!1),this.target.addEventListener("touchmove",this.touchmove,!1),this.target.addEventListener("touchend",this.touchend,!1)}}var O=n("yqlB"),g=n("730d");var j=t=>{const e={animating:!1,height:void 0,launched:!1,expanded:!1,loaded:!1,position:void 0,closePosition:void 0,width:void 0,iconURL:t.iconURL,title:t.title},[n,o]=Object(u.j)(e),r=Object(u.i)(),i=Object(u.i)();Object(u.d)(()=>{if(n.launched){let t=new v(r.current,h.DRAW_X,t=>{a(t)},{minSwipeDistance:25});return()=>t.destroy()}},[r.current,n.launched,n.closePosition]),Object(u.d)(()=>{if(n.launched){let t=new v(i.current,h.ANY,t=>{t.target.style.top="-1.5em",t.target.style.left="-1.5em",t.target.style.transform=`translate(${t.screenPosition.final.x}px, ${t.screenPosition.final.y}px)`},{minSwipeDistance:1,continuous:!0});return()=>t.destroy()}},[i.current,n.launched,n.closePosition]),Object(u.d)(()=>{t.src&&Object(g.a)(t.src).then(e=>{o(n=>c(c({},n),{},{title:e.name.length>15?e.short_name:e.name,iconURL:e.icons[0]?t.src+(e.icons[0].src.match(/^\//)?"":"/")+e.icons[0].src:n.iconURL}))}).catch((function(t){console.log(t)}))},[t.src]);const a=t=>{n.launched&&("function"==typeof t.stopPropagation&&t.stopPropagation(),o(t=>c(c({},t),{},{launched:!1})),setTimeout(()=>o(t=>c(c({},e),{},{closePosition:t.closePosition,iconURL:t.iconURL})),450))};return Object(s.h)("span",{className:f.a.launcher+(n.launched?" "+f.a.launched:"")+(n.animating?" "+f.a.animating:"")+(n.loaded?" "+f.a.loaded:"")+(t.systemLauncher?" "+f.a.system:"")},(n.title||t.icon)&&Object(s.h)("div",{ref:r,onClick:n.launched?void 0:()=>{let e=r.current.getBoundingClientRect();o(t=>c(c({},t),{},{position:{top:e.top,left:e.left},width:r.current.offsetWidth,height:r.current.offsetHeight})),setTimeout(()=>o(t=>c(c({},t),{},{animating:!0,launched:!0})),50),setTimeout(()=>{let e=i.current.getBoundingClientRect();o(n=>c(c({},n),{},{expanded:!0,loaded:!t.src||n.loaded,closePosition:{top:e.x,left:e.y}}))},500)},className:n.title||t.icon?f.a.geometry:"",style:n.position?`position:fixed;margin:0;top:${n.position.top}px;left:${n.position.left}px;width:${n.width}px;height:${n.height}px;`:""},n.iconURL?Object(s.h)("img",{class:f.a.icon,src:n.iconURL,onError:()=>{console.info("icon img failed",n.iconURL),o(t=>c(c({},t),{},{iconURL:void 0}))}}):Object(s.h)(s.Fragment,null),t.icon&&!n.iconURL?Object(s.h)(l.a,{icon:t.icon}):Object(s.h)(s.Fragment,null),t.src&&"string"==typeof t.src&&n.expanded?Object(s.h)("iframe",{onLoad:()=>{o(t=>c(c({},t),{},{loaded:!0}))},src:t.src}):Object(s.h)(s.Fragment,null),n.launched?Object(s.h)("div",{className:f.a.childWrapper},t.children):Object(s.h)(s.Fragment,null),Object(s.h)("div",{ref:i,class:f.a.close,onClick:a},Object(s.h)(l.a,{icon:"times"}))),n.title&&Object(s.h)("div",{className:f.a.title},n.title))},P=n("ensb"),w=Object(P.a)((function(t){n.e(2).then(function(){var e=n("JYnV");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)})),E=n("Upn6"),S=n("Pe6V"),W=n.n(S);e.default=()=>{const[t,e]=Object(u.j)(void 0),[n,o]=Object(u.j)({});Object(u.d)(()=>{Object(E.b)("wallpaper").then(t=>{e(t)}),Object(E.b)("installedApps").then(t=>{o(t||{})})},[]);const r=Object.keys(n);return Object(s.h)("div",{class:W.a.homescreen,style:t?`--bgurl: url(${t});`:""},Object(s.h)(j,{icon:"university",title:"App Library",systemLauncher:!0},Object(s.h)(w,{updateInstalledApps:(t,e)=>new Promise(n=>{Object(E.d)("installedApps",r=>{switch(null==r&&(r={}),t){case"save":r[btoa(e.url)]={iconURL:e.iconURL,title:e.title};break;case"remove":delete r[btoa(e.url)]}return o(r),n(r),r})}),installedApps:r})),Object(s.h)(j,null),Object(s.h)(j,null),Object(s.h)(j,{icon:"cogs",title:"Settings",systemLauncher:!0},Object(s.h)(O.a,{saveWallpaper:t=>(e(t),t?Object(E.c)("wallpaper",t):Object(E.a)("wallpaper")),hasCustomWallpaper:null!=t})),r.map(t=>Object(s.h)(j,{iconURL:n[t].iconURL,title:n[t].title,src:atob(t)})))}},fHgA:function(t){t.exports={launcher:"_2627",system:"d4bd",geometry:"d7b9",close:"_2cea",childWrapper:"a9b4",grow:"_8fbd",icon:"b6d3",title:"_3612",animating:"c655",launched:"b803",loaded:"c041"}}}]);
//# sourceMappingURL=route-home-screen.chunk.bdad8.esm.js.map