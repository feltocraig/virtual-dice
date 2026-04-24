(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Fp={exports:{}},ll={},Op={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eo=Symbol.for("react.element"),Xv=Symbol.for("react.portal"),Yv=Symbol.for("react.fragment"),qv=Symbol.for("react.strict_mode"),$v=Symbol.for("react.profiler"),Kv=Symbol.for("react.provider"),Zv=Symbol.for("react.context"),Qv=Symbol.for("react.forward_ref"),Jv=Symbol.for("react.suspense"),e0=Symbol.for("react.memo"),t0=Symbol.for("react.lazy"),Jd=Symbol.iterator;function n0(t){return t===null||typeof t!="object"?null:(t=Jd&&t[Jd]||t["@@iterator"],typeof t=="function"?t:null)}var kp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zp=Object.assign,Bp={};function ys(t,e,n){this.props=t,this.context=e,this.refs=Bp,this.updater=n||kp}ys.prototype.isReactComponent={};ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hp(){}Hp.prototype=ys.prototype;function Wu(t,e,n){this.props=t,this.context=e,this.refs=Bp,this.updater=n||kp}var ju=Wu.prototype=new Hp;ju.constructor=Wu;zp(ju,ys.prototype);ju.isPureReactComponent=!0;var ef=Array.isArray,Gp=Object.prototype.hasOwnProperty,Xu={current:null},Vp={key:!0,ref:!0,__self:!0,__source:!0};function Wp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Gp.call(e,i)&&!Vp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Eo,type:t,key:s,ref:o,props:r,_owner:Xu.current}}function i0(t,e){return{$$typeof:Eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Eo}function r0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var tf=/\/+/g;function Il(t,e){return typeof t=="object"&&t!==null&&t.key!=null?r0(""+t.key):e.toString(36)}function xa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Eo:case Xv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Il(o,0):i,ef(r)?(n="",t!=null&&(n=t.replace(tf,"$&/")+"/"),xa(r,e,n,"",function(c){return c})):r!=null&&(Yu(r)&&(r=i0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(tf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ef(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Il(s,a);o+=xa(s,e,n,l,r)}else if(l=n0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Il(s,a++),o+=xa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Io(t,e,n){if(t==null)return t;var i=[],r=0;return xa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function s0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},ya={transition:null},o0={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:ya,ReactCurrentOwner:Xu};function jp(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:Io,forEach:function(t,e,n){Io(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Io(t,function(){e++}),e},toArray:function(t){return Io(t,function(e){return e})||[]},only:function(t){if(!Yu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=ys;Xe.Fragment=Yv;Xe.Profiler=$v;Xe.PureComponent=Wu;Xe.StrictMode=qv;Xe.Suspense=Jv;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o0;Xe.act=jp;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=zp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xu.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Gp.call(e,l)&&!Vp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Eo,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:Zv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Kv,_context:t},t.Consumer=t};Xe.createElement=Wp;Xe.createFactory=function(t){var e=Wp.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:Qv,render:t}};Xe.isValidElement=Yu;Xe.lazy=function(t){return{$$typeof:t0,_payload:{_status:-1,_result:t},_init:s0}};Xe.memo=function(t,e){return{$$typeof:e0,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=ya.transition;ya.transition={};try{t()}finally{ya.transition=e}};Xe.unstable_act=jp;Xe.useCallback=function(t,e){return $t.current.useCallback(t,e)};Xe.useContext=function(t){return $t.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return $t.current.useEffect(t,e)};Xe.useId=function(){return $t.current.useId()};Xe.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return $t.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};Xe.useRef=function(t){return $t.current.useRef(t)};Xe.useState=function(t){return $t.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return $t.current.useTransition()};Xe.version="18.3.1";Op.exports=Xe;var Re=Op.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0=Re,l0=Symbol.for("react.element"),c0=Symbol.for("react.fragment"),u0=Object.prototype.hasOwnProperty,d0=a0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f0={key:!0,ref:!0,__self:!0,__source:!0};function Xp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)u0.call(e,i)&&!f0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:l0,type:t,key:s,ref:o,props:r,_owner:d0.current}}ll.Fragment=c0;ll.jsx=Xp;ll.jsxs=Xp;Fp.exports=ll;var D=Fp.exports,zc={},Yp={exports:{}},pn={},qp={exports:{}},$p={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,b){var N=P.length;P.push(b);e:for(;0<N;){var Y=N-1>>>1,Z=P[Y];if(0<r(Z,b))P[Y]=b,P[N]=Z,N=Y;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var b=P[0],N=P.pop();if(N!==b){P[0]=N;e:for(var Y=0,Z=P.length,H=Z>>>1;Y<H;){var $=2*(Y+1)-1,se=P[$],de=$+1,fe=P[de];if(0>r(se,N))de<Z&&0>r(fe,se)?(P[Y]=fe,P[de]=N,Y=de):(P[Y]=se,P[$]=N,Y=$);else if(de<Z&&0>r(fe,N))P[Y]=fe,P[de]=N,Y=de;else break e}}return b}function r(P,b){var N=P.sortIndex-b.sortIndex;return N!==0?N:P.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,g=!1,x=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var b=n(c);b!==null;){if(b.callback===null)i(c);else if(b.startTime<=P)i(c),b.sortIndex=b.expirationTime,e(l,b);else break;b=n(c)}}function S(P){if(_=!1,m(P),!x)if(n(l)!==null)x=!0,W(R);else{var b=n(c);b!==null&&q(S,b.startTime-P)}}function R(P,b){x=!1,_&&(_=!1,u(U),U=-1),g=!0;var N=h;try{for(m(b),f=n(l);f!==null&&(!(f.expirationTime>b)||P&&!k());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,h=f.priorityLevel;var Z=Y(f.expirationTime<=b);b=t.unstable_now(),typeof Z=="function"?f.callback=Z:f===n(l)&&i(l),m(b)}else i(l);f=n(l)}if(f!==null)var H=!0;else{var $=n(c);$!==null&&q(S,$.startTime-b),H=!1}return H}finally{f=null,h=N,g=!1}}var C=!1,w=null,U=-1,M=5,E=-1;function k(){return!(t.unstable_now()-E<M)}function K(){if(w!==null){var P=t.unstable_now();E=P;var b=!0;try{b=w(!0,P)}finally{b?J():(C=!1,w=null)}}else C=!1}var J;if(typeof v=="function")J=function(){v(K)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,V=I.port2;I.port1.onmessage=K,J=function(){V.postMessage(null)}}else J=function(){p(K,0)};function W(P){w=P,C||(C=!0,J())}function q(P,b){U=p(function(){P(t.unstable_now())},b)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,W(R))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var b=3;break;default:b=h}var N=h;h=b;try{return P()}finally{h=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,b){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var N=h;h=P;try{return b()}finally{h=N}},t.unstable_scheduleCallback=function(P,b,N){var Y=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?Y+N:Y):N=Y,P){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=N+Z,P={id:d++,callback:b,priorityLevel:P,startTime:N,expirationTime:Z,sortIndex:-1},N>Y?(P.sortIndex=N,e(c,P),n(l)===null&&P===n(c)&&(_?(u(U),U=-1):_=!0,q(S,N-Y))):(P.sortIndex=Z,e(l,P),x||g||(x=!0,W(R))),P},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(P){var b=h;return function(){var N=h;h=b;try{return P.apply(this,arguments)}finally{h=N}}}})($p);qp.exports=$p;var h0=qp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0=Re,hn=h0;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kp=new Set,io={};function xr(t,e){ls(t,e),ls(t+"Capture",e)}function ls(t,e){for(io[t]=e,t=0;t<e.length;t++)Kp.add(e[t])}var li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=Object.prototype.hasOwnProperty,m0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nf={},rf={};function g0(t){return Bc.call(rf,t)?!0:Bc.call(nf,t)?!1:m0.test(t)?rf[t]=!0:(nf[t]=!0,!1)}function v0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _0(t,e,n,i){if(e===null||typeof e>"u"||v0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var qu=/[\-:]([a-z])/g;function $u(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qu,$u);It[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qu,$u);It[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qu,$u);It[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ku(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_0(e,n,r,i)&&(n=null),i||r===null?g0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var hi=p0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Uo=Symbol.for("react.element"),zr=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),Zu=Symbol.for("react.strict_mode"),Hc=Symbol.for("react.profiler"),Zp=Symbol.for("react.provider"),Qp=Symbol.for("react.context"),Qu=Symbol.for("react.forward_ref"),Gc=Symbol.for("react.suspense"),Vc=Symbol.for("react.suspense_list"),Ju=Symbol.for("react.memo"),yi=Symbol.for("react.lazy"),Jp=Symbol.for("react.offscreen"),sf=Symbol.iterator;function Rs(t){return t===null||typeof t!="object"?null:(t=sf&&t[sf]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,Ul;function Vs(t){if(Ul===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ul=e&&e[1]||""}return`
`+Ul+t}var Nl=!1;function Fl(t,e){if(!t||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vs(t):""}function x0(t){switch(t.tag){case 5:return Vs(t.type);case 16:return Vs("Lazy");case 13:return Vs("Suspense");case 19:return Vs("SuspenseList");case 0:case 2:case 15:return t=Fl(t.type,!1),t;case 11:return t=Fl(t.type.render,!1),t;case 1:return t=Fl(t.type,!0),t;default:return""}}function Wc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Br:return"Fragment";case zr:return"Portal";case Hc:return"Profiler";case Zu:return"StrictMode";case Gc:return"Suspense";case Vc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qp:return(t.displayName||"Context")+".Consumer";case Zp:return(t._context.displayName||"Context")+".Provider";case Qu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ju:return e=t.displayName||null,e!==null?e:Wc(t.type)||"Memo";case yi:e=t._payload,t=t._init;try{return Wc(t(e))}catch{}}return null}function y0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wc(e);case 8:return e===Zu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function em(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function S0(t){var e=em(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function No(t){t._valueTracker||(t._valueTracker=S0(t))}function tm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=em(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Da(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jc(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function of(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function nm(t,e){e=e.checked,e!=null&&Ku(t,"checked",e,!1)}function Xc(t,e){nm(t,e);var n=zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yc(t,e.type,zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function af(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yc(t,e,n){(e!=="number"||Da(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ws=Array.isArray;function es(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function qc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Ws(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zi(n)}}function im(t,e){var n=zi(e.value),i=zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function cf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $c(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fo,sm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fo=Fo||document.createElement("div"),Fo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},M0=["Webkit","ms","Moz","O"];Object.keys(Ys).forEach(function(t){M0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ys[e]=Ys[t]})});function om(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ys.hasOwnProperty(t)&&Ys[t]?(""+e).trim():e+"px"}function am(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=om(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var E0=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kc(t,e){if(e){if(E0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Zc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qc=null;function ed(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jc=null,ts=null,ns=null;function uf(t){if(t=Ao(t)){if(typeof Jc!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=hl(e),Jc(t.stateNode,t.type,e))}}function lm(t){ts?ns?ns.push(t):ns=[t]:ts=t}function cm(){if(ts){var t=ts,e=ns;if(ns=ts=null,uf(t),e)for(t=0;t<e.length;t++)uf(e[t])}}function um(t,e){return t(e)}function dm(){}var Ol=!1;function fm(t,e,n){if(Ol)return t(e,n);Ol=!0;try{return um(t,e,n)}finally{Ol=!1,(ts!==null||ns!==null)&&(dm(),cm())}}function so(t,e){var n=t.stateNode;if(n===null)return null;var i=hl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var eu=!1;if(li)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){eu=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{eu=!1}function T0(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var qs=!1,Ia=null,Ua=!1,tu=null,w0={onError:function(t){qs=!0,Ia=t}};function A0(t,e,n,i,r,s,o,a,l){qs=!1,Ia=null,T0.apply(w0,arguments)}function C0(t,e,n,i,r,s,o,a,l){if(A0.apply(this,arguments),qs){if(qs){var c=Ia;qs=!1,Ia=null}else throw Error(ne(198));Ua||(Ua=!0,tu=c)}}function yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function hm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function df(t){if(yr(t)!==t)throw Error(ne(188))}function R0(t){var e=t.alternate;if(!e){if(e=yr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return df(r),t;if(s===i)return df(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function pm(t){return t=R0(t),t!==null?mm(t):null}function mm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=mm(t);if(e!==null)return e;t=t.sibling}return null}var gm=hn.unstable_scheduleCallback,ff=hn.unstable_cancelCallback,b0=hn.unstable_shouldYield,L0=hn.unstable_requestPaint,vt=hn.unstable_now,P0=hn.unstable_getCurrentPriorityLevel,td=hn.unstable_ImmediatePriority,vm=hn.unstable_UserBlockingPriority,Na=hn.unstable_NormalPriority,D0=hn.unstable_LowPriority,_m=hn.unstable_IdlePriority,cl=null,jn=null;function I0(t){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(cl,t,void 0,(t.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:F0,U0=Math.log,N0=Math.LN2;function F0(t){return t>>>=0,t===0?32:31-(U0(t)/N0|0)|0}var Oo=64,ko=4194304;function js(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fa(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=js(a):(s&=o,s!==0&&(i=js(s)))}else o=n&~r,o!==0?i=js(o):s!==0&&(i=js(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Fn(e),r=1<<n,i|=t[n],e&=~r;return i}function O0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Fn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=O0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function nu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xm(){var t=Oo;return Oo<<=1,!(Oo&4194240)&&(Oo=64),t}function kl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function To(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fn(e),t[e]=n}function z0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Fn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function nd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Fn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ke=0;function ym(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sm,id,Mm,Em,Tm,iu=!1,zo=[],Ri=null,bi=null,Li=null,oo=new Map,ao=new Map,Mi=[],B0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hf(t,e){switch(t){case"focusin":case"focusout":Ri=null;break;case"dragenter":case"dragleave":bi=null;break;case"mouseover":case"mouseout":Li=null;break;case"pointerover":case"pointerout":oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(e.pointerId)}}function Ls(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ao(e),e!==null&&id(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function H0(t,e,n,i,r){switch(e){case"focusin":return Ri=Ls(Ri,t,e,n,i,r),!0;case"dragenter":return bi=Ls(bi,t,e,n,i,r),!0;case"mouseover":return Li=Ls(Li,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return oo.set(s,Ls(oo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ao.set(s,Ls(ao.get(s)||null,t,e,n,i,r)),!0}return!1}function wm(t){var e=ir(t.target);if(e!==null){var n=yr(e);if(n!==null){if(e=n.tag,e===13){if(e=hm(n),e!==null){t.blockedOn=e,Tm(t.priority,function(){Mm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ru(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Qc=i,n.target.dispatchEvent(i),Qc=null}else return e=Ao(n),e!==null&&id(e),t.blockedOn=n,!1;e.shift()}return!0}function pf(t,e,n){Sa(t)&&n.delete(e)}function G0(){iu=!1,Ri!==null&&Sa(Ri)&&(Ri=null),bi!==null&&Sa(bi)&&(bi=null),Li!==null&&Sa(Li)&&(Li=null),oo.forEach(pf),ao.forEach(pf)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,iu||(iu=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,G0)))}function lo(t){function e(r){return Ps(r,t)}if(0<zo.length){Ps(zo[0],t);for(var n=1;n<zo.length;n++){var i=zo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ri!==null&&Ps(Ri,t),bi!==null&&Ps(bi,t),Li!==null&&Ps(Li,t),oo.forEach(e),ao.forEach(e),n=0;n<Mi.length;n++)i=Mi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Mi.length&&(n=Mi[0],n.blockedOn===null);)wm(n),n.blockedOn===null&&Mi.shift()}var is=hi.ReactCurrentBatchConfig,Oa=!0;function V0(t,e,n,i){var r=Ke,s=is.transition;is.transition=null;try{Ke=1,rd(t,e,n,i)}finally{Ke=r,is.transition=s}}function W0(t,e,n,i){var r=Ke,s=is.transition;is.transition=null;try{Ke=4,rd(t,e,n,i)}finally{Ke=r,is.transition=s}}function rd(t,e,n,i){if(Oa){var r=ru(t,e,n,i);if(r===null)ql(t,e,i,ka,n),hf(t,i);else if(H0(r,t,e,n,i))i.stopPropagation();else if(hf(t,i),e&4&&-1<B0.indexOf(t)){for(;r!==null;){var s=Ao(r);if(s!==null&&Sm(s),s=ru(t,e,n,i),s===null&&ql(t,e,i,ka,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ql(t,e,i,null,n)}}var ka=null;function ru(t,e,n,i){if(ka=null,t=ed(i),t=ir(t),t!==null)if(e=yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=hm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ka=t,null}function Am(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P0()){case td:return 1;case vm:return 4;case Na:case D0:return 16;case _m:return 536870912;default:return 16}default:return 16}}var Ti=null,sd=null,Ma=null;function Cm(){if(Ma)return Ma;var t,e=sd,n=e.length,i,r="value"in Ti?Ti.value:Ti.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ma=r.slice(t,1<i?1-i:void 0)}function Ea(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bo(){return!0}function mf(){return!1}function mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bo:mf,this.isPropagationStopped=mf,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),e}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},od=mn(Ss),wo=ft({},Ss,{view:0,detail:0}),j0=mn(wo),zl,Bl,Ds,ul=ft({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ad,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ds&&(Ds&&t.type==="mousemove"?(zl=t.screenX-Ds.screenX,Bl=t.screenY-Ds.screenY):Bl=zl=0,Ds=t),zl)},movementY:function(t){return"movementY"in t?t.movementY:Bl}}),gf=mn(ul),X0=ft({},ul,{dataTransfer:0}),Y0=mn(X0),q0=ft({},wo,{relatedTarget:0}),Hl=mn(q0),$0=ft({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),K0=mn($0),Z0=ft({},Ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Q0=mn(Z0),J0=ft({},Ss,{data:0}),vf=mn(J0),e_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=n_[t])?!!e[t]:!1}function ad(){return i_}var r_=ft({},wo,{key:function(t){if(t.key){var e=e_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ea(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?t_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ad,charCode:function(t){return t.type==="keypress"?Ea(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ea(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),s_=mn(r_),o_=ft({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_f=mn(o_),a_=ft({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ad}),l_=mn(a_),c_=ft({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),u_=mn(c_),d_=ft({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),f_=mn(d_),h_=[9,13,27,32],ld=li&&"CompositionEvent"in window,$s=null;li&&"documentMode"in document&&($s=document.documentMode);var p_=li&&"TextEvent"in window&&!$s,Rm=li&&(!ld||$s&&8<$s&&11>=$s),xf=" ",yf=!1;function bm(t,e){switch(t){case"keyup":return h_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function m_(t,e){switch(t){case"compositionend":return Lm(e);case"keypress":return e.which!==32?null:(yf=!0,xf);case"textInput":return t=e.data,t===xf&&yf?null:t;default:return null}}function g_(t,e){if(Hr)return t==="compositionend"||!ld&&bm(t,e)?(t=Cm(),Ma=sd=Ti=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rm&&e.locale!=="ko"?null:e.data;default:return null}}var v_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!v_[t.type]:e==="textarea"}function Pm(t,e,n,i){lm(i),e=za(e,"onChange"),0<e.length&&(n=new od("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ks=null,co=null;function __(t){Gm(t,0)}function dl(t){var e=Wr(t);if(tm(e))return t}function x_(t,e){if(t==="change")return e}var Dm=!1;if(li){var Gl;if(li){var Vl="oninput"in document;if(!Vl){var Mf=document.createElement("div");Mf.setAttribute("oninput","return;"),Vl=typeof Mf.oninput=="function"}Gl=Vl}else Gl=!1;Dm=Gl&&(!document.documentMode||9<document.documentMode)}function Ef(){Ks&&(Ks.detachEvent("onpropertychange",Im),co=Ks=null)}function Im(t){if(t.propertyName==="value"&&dl(co)){var e=[];Pm(e,co,t,ed(t)),fm(__,e)}}function y_(t,e,n){t==="focusin"?(Ef(),Ks=e,co=n,Ks.attachEvent("onpropertychange",Im)):t==="focusout"&&Ef()}function S_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(co)}function M_(t,e){if(t==="click")return dl(e)}function E_(t,e){if(t==="input"||t==="change")return dl(e)}function T_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kn=typeof Object.is=="function"?Object.is:T_;function uo(t,e){if(kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bc.call(e,r)||!kn(t[r],e[r]))return!1}return!0}function Tf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wf(t,e){var n=Tf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tf(n)}}function Um(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Um(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Nm(){for(var t=window,e=Da();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Da(t.document)}return e}function cd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function w_(t){var e=Nm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Um(n.ownerDocument.documentElement,n)){if(i!==null&&cd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=wf(n,s);var o=wf(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var A_=li&&"documentMode"in document&&11>=document.documentMode,Gr=null,su=null,Zs=null,ou=!1;function Af(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ou||Gr==null||Gr!==Da(i)||(i=Gr,"selectionStart"in i&&cd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zs&&uo(Zs,i)||(Zs=i,i=za(su,"onSelect"),0<i.length&&(e=new od("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Gr)))}function Ho(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vr={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionend:Ho("Transition","TransitionEnd")},Wl={},Fm={};li&&(Fm=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function fl(t){if(Wl[t])return Wl[t];if(!Vr[t])return t;var e=Vr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fm)return Wl[t]=e[n];return t}var Om=fl("animationend"),km=fl("animationiteration"),zm=fl("animationstart"),Bm=fl("transitionend"),Hm=new Map,Cf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gi(t,e){Hm.set(t,e),xr(e,[t])}for(var jl=0;jl<Cf.length;jl++){var Xl=Cf[jl],C_=Xl.toLowerCase(),R_=Xl[0].toUpperCase()+Xl.slice(1);Gi(C_,"on"+R_)}Gi(Om,"onAnimationEnd");Gi(km,"onAnimationIteration");Gi(zm,"onAnimationStart");Gi("dblclick","onDoubleClick");Gi("focusin","onFocus");Gi("focusout","onBlur");Gi(Bm,"onTransitionEnd");ls("onMouseEnter",["mouseout","mouseover"]);ls("onMouseLeave",["mouseout","mouseover"]);ls("onPointerEnter",["pointerout","pointerover"]);ls("onPointerLeave",["pointerout","pointerover"]);xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),b_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xs));function Rf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,C0(i,e,void 0,t),t.currentTarget=null}function Gm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Rf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Rf(r,a,c),s=l}}}if(Ua)throw t=tu,Ua=!1,tu=null,t}function it(t,e){var n=e[du];n===void 0&&(n=e[du]=new Set);var i=t+"__bubble";n.has(i)||(Vm(e,t,2,!1),n.add(i))}function Yl(t,e,n){var i=0;e&&(i|=4),Vm(n,t,i,e)}var Go="_reactListening"+Math.random().toString(36).slice(2);function fo(t){if(!t[Go]){t[Go]=!0,Kp.forEach(function(n){n!=="selectionchange"&&(b_.has(n)||Yl(n,!1,t),Yl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Go]||(e[Go]=!0,Yl("selectionchange",!1,e))}}function Vm(t,e,n,i){switch(Am(e)){case 1:var r=V0;break;case 4:r=W0;break;default:r=rd}n=r.bind(null,e,n,t),r=void 0,!eu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ql(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ir(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}fm(function(){var c=s,d=ed(n),f=[];e:{var h=Hm.get(t);if(h!==void 0){var g=od,x=t;switch(t){case"keypress":if(Ea(n)===0)break e;case"keydown":case"keyup":g=s_;break;case"focusin":x="focus",g=Hl;break;case"focusout":x="blur",g=Hl;break;case"beforeblur":case"afterblur":g=Hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=l_;break;case Om:case km:case zm:g=K0;break;case Bm:g=u_;break;case"scroll":g=j0;break;case"wheel":g=f_;break;case"copy":case"cut":case"paste":g=Q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=_f}var _=(e&4)!==0,p=!_&&t==="scroll",u=_?h!==null?h+"Capture":null:h;_=[];for(var v=c,m;v!==null;){m=v;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,u!==null&&(S=so(v,u),S!=null&&_.push(ho(v,S,m)))),p)break;v=v.return}0<_.length&&(h=new g(h,x,null,n,d),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Qc&&(x=n.relatedTarget||n.fromElement)&&(ir(x)||x[ci]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=c,x=x?ir(x):null,x!==null&&(p=yr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=c),g!==x)){if(_=gf,S="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=_f,S="onPointerLeave",u="onPointerEnter",v="pointer"),p=g==null?h:Wr(g),m=x==null?h:Wr(x),h=new _(S,v+"leave",g,n,d),h.target=p,h.relatedTarget=m,S=null,ir(d)===c&&(_=new _(u,v+"enter",x,n,d),_.target=m,_.relatedTarget=p,S=_),p=S,g&&x)t:{for(_=g,u=x,v=0,m=_;m;m=Mr(m))v++;for(m=0,S=u;S;S=Mr(S))m++;for(;0<v-m;)_=Mr(_),v--;for(;0<m-v;)u=Mr(u),m--;for(;v--;){if(_===u||u!==null&&_===u.alternate)break t;_=Mr(_),u=Mr(u)}_=null}else _=null;g!==null&&bf(f,h,g,_,!1),x!==null&&p!==null&&bf(f,p,x,_,!0)}}e:{if(h=c?Wr(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var R=x_;else if(Sf(h))if(Dm)R=E_;else{R=S_;var C=y_}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=M_);if(R&&(R=R(t,c))){Pm(f,R,n,d);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Yc(h,"number",h.value)}switch(C=c?Wr(c):window,t){case"focusin":(Sf(C)||C.contentEditable==="true")&&(Gr=C,su=c,Zs=null);break;case"focusout":Zs=su=Gr=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,Af(f,n,d);break;case"selectionchange":if(A_)break;case"keydown":case"keyup":Af(f,n,d)}var w;if(ld)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else Hr?bm(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(Rm&&n.locale!=="ko"&&(Hr||U!=="onCompositionStart"?U==="onCompositionEnd"&&Hr&&(w=Cm()):(Ti=d,sd="value"in Ti?Ti.value:Ti.textContent,Hr=!0)),C=za(c,U),0<C.length&&(U=new vf(U,t,null,n,d),f.push({event:U,listeners:C}),w?U.data=w:(w=Lm(n),w!==null&&(U.data=w)))),(w=p_?m_(t,n):g_(t,n))&&(c=za(c,"onBeforeInput"),0<c.length&&(d=new vf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=w))}Gm(f,e)})}function ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function za(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=so(t,n),s!=null&&i.unshift(ho(t,s,r)),s=so(t,e),s!=null&&i.push(ho(t,s,r))),t=t.return}return i}function Mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bf(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=so(n,s),l!=null&&o.unshift(ho(n,l,a))):r||(l=so(n,s),l!=null&&o.push(ho(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var L_=/\r\n?/g,P_=/\u0000|\uFFFD/g;function Lf(t){return(typeof t=="string"?t:""+t).replace(L_,`
`).replace(P_,"")}function Vo(t,e,n){if(e=Lf(e),Lf(t)!==e&&n)throw Error(ne(425))}function Ba(){}var au=null,lu=null;function cu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uu=typeof setTimeout=="function"?setTimeout:void 0,D_=typeof clearTimeout=="function"?clearTimeout:void 0,Pf=typeof Promise=="function"?Promise:void 0,I_=typeof queueMicrotask=="function"?queueMicrotask:typeof Pf<"u"?function(t){return Pf.resolve(null).then(t).catch(U_)}:uu;function U_(t){setTimeout(function(){throw t})}function $l(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),lo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);lo(e)}function Pi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Df(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ms=Math.random().toString(36).slice(2),Vn="__reactFiber$"+Ms,po="__reactProps$"+Ms,ci="__reactContainer$"+Ms,du="__reactEvents$"+Ms,N_="__reactListeners$"+Ms,F_="__reactHandles$"+Ms;function ir(t){var e=t[Vn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ci]||n[Vn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Df(t);t!==null;){if(n=t[Vn])return n;t=Df(t)}return e}t=n,n=t.parentNode}return null}function Ao(t){return t=t[Vn]||t[ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function hl(t){return t[po]||null}var fu=[],jr=-1;function Vi(t){return{current:t}}function st(t){0>jr||(t.current=fu[jr],fu[jr]=null,jr--)}function nt(t,e){jr++,fu[jr]=t.current,t.current=e}var Bi={},Ht=Vi(Bi),en=Vi(!1),fr=Bi;function cs(t,e){var n=t.type.contextTypes;if(!n)return Bi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function Ha(){st(en),st(Ht)}function If(t,e,n){if(Ht.current!==Bi)throw Error(ne(168));nt(Ht,e),nt(en,n)}function Wm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,y0(t)||"Unknown",r));return ft({},n,i)}function Ga(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Bi,fr=Ht.current,nt(Ht,t),nt(en,en.current),!0}function Uf(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Wm(t,e,fr),i.__reactInternalMemoizedMergedChildContext=t,st(en),st(Ht),nt(Ht,t)):st(en),nt(en,n)}var ni=null,pl=!1,Kl=!1;function jm(t){ni===null?ni=[t]:ni.push(t)}function O_(t){pl=!0,jm(t)}function Wi(){if(!Kl&&ni!==null){Kl=!0;var t=0,e=Ke;try{var n=ni;for(Ke=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ni=null,pl=!1}catch(r){throw ni!==null&&(ni=ni.slice(t+1)),gm(td,Wi),r}finally{Ke=e,Kl=!1}}return null}var Xr=[],Yr=0,Va=null,Wa=0,_n=[],xn=0,hr=null,ri=1,si="";function Zi(t,e){Xr[Yr++]=Wa,Xr[Yr++]=Va,Va=t,Wa=e}function Xm(t,e,n){_n[xn++]=ri,_n[xn++]=si,_n[xn++]=hr,hr=t;var i=ri;t=si;var r=32-Fn(i)-1;i&=~(1<<r),n+=1;var s=32-Fn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ri=1<<32-Fn(e)+r|n<<r|i,si=s+t}else ri=1<<s|n<<r|i,si=t}function ud(t){t.return!==null&&(Zi(t,1),Xm(t,1,0))}function dd(t){for(;t===Va;)Va=Xr[--Yr],Xr[Yr]=null,Wa=Xr[--Yr],Xr[Yr]=null;for(;t===hr;)hr=_n[--xn],_n[xn]=null,si=_n[--xn],_n[xn]=null,ri=_n[--xn],_n[xn]=null}var fn=null,dn=null,at=!1,Dn=null;function Ym(t,e){var n=Mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Nf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,dn=Pi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hr!==null?{id:ri,overflow:si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,dn=null,!0):!1;default:return!1}}function hu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pu(t){if(at){var e=dn;if(e){var n=e;if(!Nf(t,e)){if(hu(t))throw Error(ne(418));e=Pi(n.nextSibling);var i=fn;e&&Nf(t,e)?Ym(i,n):(t.flags=t.flags&-4097|2,at=!1,fn=t)}}else{if(hu(t))throw Error(ne(418));t.flags=t.flags&-4097|2,at=!1,fn=t}}}function Ff(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function Wo(t){if(t!==fn)return!1;if(!at)return Ff(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cu(t.type,t.memoizedProps)),e&&(e=dn)){if(hu(t))throw qm(),Error(ne(418));for(;e;)Ym(t,e),e=Pi(e.nextSibling)}if(Ff(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dn=Pi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dn=null}}else dn=fn?Pi(t.stateNode.nextSibling):null;return!0}function qm(){for(var t=dn;t;)t=Pi(t.nextSibling)}function us(){dn=fn=null,at=!1}function fd(t){Dn===null?Dn=[t]:Dn.push(t)}var k_=hi.ReactCurrentBatchConfig;function Is(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function jo(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Of(t){var e=t._init;return e(t._payload)}function $m(t){function e(u,v){if(t){var m=u.deletions;m===null?(u.deletions=[v],u.flags|=16):m.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Ni(u,v),u.index=0,u.sibling=null,u}function s(u,v,m){return u.index=m,t?(m=u.alternate,m!==null?(m=m.index,m<v?(u.flags|=2,v):m):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,m,S){return v===null||v.tag!==6?(v=ic(m,u.mode,S),v.return=u,v):(v=r(v,m),v.return=u,v)}function l(u,v,m,S){var R=m.type;return R===Br?d(u,v,m.props.children,S,m.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===yi&&Of(R)===v.type)?(S=r(v,m.props),S.ref=Is(u,v,m),S.return=u,S):(S=La(m.type,m.key,m.props,null,u.mode,S),S.ref=Is(u,v,m),S.return=u,S)}function c(u,v,m,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==m.containerInfo||v.stateNode.implementation!==m.implementation?(v=rc(m,u.mode,S),v.return=u,v):(v=r(v,m.children||[]),v.return=u,v)}function d(u,v,m,S,R){return v===null||v.tag!==7?(v=ar(m,u.mode,S,R),v.return=u,v):(v=r(v,m),v.return=u,v)}function f(u,v,m){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ic(""+v,u.mode,m),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Uo:return m=La(v.type,v.key,v.props,null,u.mode,m),m.ref=Is(u,null,v),m.return=u,m;case zr:return v=rc(v,u.mode,m),v.return=u,v;case yi:var S=v._init;return f(u,S(v._payload),m)}if(Ws(v)||Rs(v))return v=ar(v,u.mode,m,null),v.return=u,v;jo(u,v)}return null}function h(u,v,m,S){var R=v!==null?v.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return R!==null?null:a(u,v,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Uo:return m.key===R?l(u,v,m,S):null;case zr:return m.key===R?c(u,v,m,S):null;case yi:return R=m._init,h(u,v,R(m._payload),S)}if(Ws(m)||Rs(m))return R!==null?null:d(u,v,m,S,null);jo(u,m)}return null}function g(u,v,m,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(m)||null,a(v,u,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Uo:return u=u.get(S.key===null?m:S.key)||null,l(v,u,S,R);case zr:return u=u.get(S.key===null?m:S.key)||null,c(v,u,S,R);case yi:var C=S._init;return g(u,v,m,C(S._payload),R)}if(Ws(S)||Rs(S))return u=u.get(m)||null,d(v,u,S,R,null);jo(v,S)}return null}function x(u,v,m,S){for(var R=null,C=null,w=v,U=v=0,M=null;w!==null&&U<m.length;U++){w.index>U?(M=w,w=null):M=w.sibling;var E=h(u,w,m[U],S);if(E===null){w===null&&(w=M);break}t&&w&&E.alternate===null&&e(u,w),v=s(E,v,U),C===null?R=E:C.sibling=E,C=E,w=M}if(U===m.length)return n(u,w),at&&Zi(u,U),R;if(w===null){for(;U<m.length;U++)w=f(u,m[U],S),w!==null&&(v=s(w,v,U),C===null?R=w:C.sibling=w,C=w);return at&&Zi(u,U),R}for(w=i(u,w);U<m.length;U++)M=g(w,u,U,m[U],S),M!==null&&(t&&M.alternate!==null&&w.delete(M.key===null?U:M.key),v=s(M,v,U),C===null?R=M:C.sibling=M,C=M);return t&&w.forEach(function(k){return e(u,k)}),at&&Zi(u,U),R}function _(u,v,m,S){var R=Rs(m);if(typeof R!="function")throw Error(ne(150));if(m=R.call(m),m==null)throw Error(ne(151));for(var C=R=null,w=v,U=v=0,M=null,E=m.next();w!==null&&!E.done;U++,E=m.next()){w.index>U?(M=w,w=null):M=w.sibling;var k=h(u,w,E.value,S);if(k===null){w===null&&(w=M);break}t&&w&&k.alternate===null&&e(u,w),v=s(k,v,U),C===null?R=k:C.sibling=k,C=k,w=M}if(E.done)return n(u,w),at&&Zi(u,U),R;if(w===null){for(;!E.done;U++,E=m.next())E=f(u,E.value,S),E!==null&&(v=s(E,v,U),C===null?R=E:C.sibling=E,C=E);return at&&Zi(u,U),R}for(w=i(u,w);!E.done;U++,E=m.next())E=g(w,u,U,E.value,S),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?U:E.key),v=s(E,v,U),C===null?R=E:C.sibling=E,C=E);return t&&w.forEach(function(K){return e(u,K)}),at&&Zi(u,U),R}function p(u,v,m,S){if(typeof m=="object"&&m!==null&&m.type===Br&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Uo:e:{for(var R=m.key,C=v;C!==null;){if(C.key===R){if(R=m.type,R===Br){if(C.tag===7){n(u,C.sibling),v=r(C,m.props.children),v.return=u,u=v;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===yi&&Of(R)===C.type){n(u,C.sibling),v=r(C,m.props),v.ref=Is(u,C,m),v.return=u,u=v;break e}n(u,C);break}else e(u,C);C=C.sibling}m.type===Br?(v=ar(m.props.children,u.mode,S,m.key),v.return=u,u=v):(S=La(m.type,m.key,m.props,null,u.mode,S),S.ref=Is(u,v,m),S.return=u,u=S)}return o(u);case zr:e:{for(C=m.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===m.containerInfo&&v.stateNode.implementation===m.implementation){n(u,v.sibling),v=r(v,m.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=rc(m,u.mode,S),v.return=u,u=v}return o(u);case yi:return C=m._init,p(u,v,C(m._payload),S)}if(Ws(m))return x(u,v,m,S);if(Rs(m))return _(u,v,m,S);jo(u,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,m),v.return=u,u=v):(n(u,v),v=ic(m,u.mode,S),v.return=u,u=v),o(u)):n(u,v)}return p}var ds=$m(!0),Km=$m(!1),ja=Vi(null),Xa=null,qr=null,hd=null;function pd(){hd=qr=Xa=null}function md(t){var e=ja.current;st(ja),t._currentValue=e}function mu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function rs(t,e){Xa=t,hd=qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function Tn(t){var e=t._currentValue;if(hd!==t)if(t={context:t,memoizedValue:e,next:null},qr===null){if(Xa===null)throw Error(ne(308));qr=t,Xa.dependencies={lanes:0,firstContext:t}}else qr=qr.next=t;return e}var rr=null;function gd(t){rr===null?rr=[t]:rr.push(t)}function Zm(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,gd(e)):(n.next=r.next,r.next=n),e.interleaved=n,ui(t,i)}function ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Si=!1;function vd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Di(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ui(t,n)}return r=i.interleaved,r===null?(e.next=e,gd(i)):(e.next=r.next,r.next=e),i.interleaved=e,ui(t,n)}function Ta(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nd(t,n)}}function kf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ya(t,e,n,i){var r=t.updateQueue;Si=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,_=a;switch(h=e,g=n,_.tag){case 1:if(x=_.payload,typeof x=="function"){f=x.call(g,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,h=typeof x=="function"?x.call(g,f,h):x,h==null)break e;f=ft({},f,h);break e;case 2:Si=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);mr|=o,t.lanes=o,t.memoizedState=f}}function zf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Co={},Xn=Vi(Co),mo=Vi(Co),go=Vi(Co);function sr(t){if(t===Co)throw Error(ne(174));return t}function _d(t,e){switch(nt(go,e),nt(mo,t),nt(Xn,Co),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$c(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$c(e,t)}st(Xn),nt(Xn,e)}function fs(){st(Xn),st(mo),st(go)}function Jm(t){sr(go.current);var e=sr(Xn.current),n=$c(e,t.type);e!==n&&(nt(mo,t),nt(Xn,n))}function xd(t){mo.current===t&&(st(Xn),st(mo))}var ut=Vi(0);function qa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zl=[];function yd(){for(var t=0;t<Zl.length;t++)Zl[t]._workInProgressVersionPrimary=null;Zl.length=0}var wa=hi.ReactCurrentDispatcher,Ql=hi.ReactCurrentBatchConfig,pr=0,dt=null,St=null,Rt=null,$a=!1,Qs=!1,vo=0,z_=0;function Nt(){throw Error(ne(321))}function Sd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kn(t[n],e[n]))return!1;return!0}function Md(t,e,n,i,r,s){if(pr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wa.current=t===null||t.memoizedState===null?V_:W_,t=n(i,r),Qs){s=0;do{if(Qs=!1,vo=0,25<=s)throw Error(ne(301));s+=1,Rt=St=null,e.updateQueue=null,wa.current=j_,t=n(i,r)}while(Qs)}if(wa.current=Ka,e=St!==null&&St.next!==null,pr=0,Rt=St=dt=null,$a=!1,e)throw Error(ne(300));return t}function Ed(){var t=vo!==0;return vo=0,t}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?dt.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function wn(){if(St===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Rt===null?dt.memoizedState:Rt.next;if(e!==null)Rt=e,St=t;else{if(t===null)throw Error(ne(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Rt===null?dt.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function _o(t,e){return typeof e=="function"?e(t):e}function Jl(t){var e=wn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((pr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,dt.lanes|=d,mr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,kn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,mr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ec(t){var e=wn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);kn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function eg(){}function tg(t,e){var n=dt,i=wn(),r=e(),s=!kn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,Td(rg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,xo(9,ig.bind(null,n,i,r,e),void 0,null),bt===null)throw Error(ne(349));pr&30||ng(n,e,r)}return r}function ng(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ig(t,e,n,i){e.value=n,e.getSnapshot=i,sg(e)&&og(t)}function rg(t,e,n){return n(function(){sg(e)&&og(t)})}function sg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kn(t,n)}catch{return!0}}function og(t){var e=ui(t,1);e!==null&&On(e,t,1,-1)}function Bf(t){var e=Hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:t},e.queue=t,t=t.dispatch=G_.bind(null,dt,t),[e.memoizedState,t]}function xo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ag(){return wn().memoizedState}function Aa(t,e,n,i){var r=Hn();dt.flags|=t,r.memoizedState=xo(1|e,n,void 0,i===void 0?null:i)}function ml(t,e,n,i){var r=wn();i=i===void 0?null:i;var s=void 0;if(St!==null){var o=St.memoizedState;if(s=o.destroy,i!==null&&Sd(i,o.deps)){r.memoizedState=xo(e,n,s,i);return}}dt.flags|=t,r.memoizedState=xo(1|e,n,s,i)}function Hf(t,e){return Aa(8390656,8,t,e)}function Td(t,e){return ml(2048,8,t,e)}function lg(t,e){return ml(4,2,t,e)}function cg(t,e){return ml(4,4,t,e)}function ug(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dg(t,e,n){return n=n!=null?n.concat([t]):null,ml(4,4,ug.bind(null,e,t),n)}function wd(){}function fg(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function hg(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function pg(t,e,n){return pr&21?(kn(n,e)||(n=xm(),dt.lanes|=n,mr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function B_(t,e){var n=Ke;Ke=n!==0&&4>n?n:4,t(!0);var i=Ql.transition;Ql.transition={};try{t(!1),e()}finally{Ke=n,Ql.transition=i}}function mg(){return wn().memoizedState}function H_(t,e,n){var i=Ui(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},gg(t))vg(e,n);else if(n=Zm(t,e,n,i),n!==null){var r=qt();On(n,t,i,r),_g(n,e,i)}}function G_(t,e,n){var i=Ui(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(gg(t))vg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,kn(a,o)){var l=e.interleaved;l===null?(r.next=r,gd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Zm(t,e,r,i),n!==null&&(r=qt(),On(n,t,i,r),_g(n,e,i))}}function gg(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function vg(t,e){Qs=$a=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _g(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nd(t,n)}}var Ka={readContext:Tn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},V_={readContext:Tn,useCallback:function(t,e){return Hn().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:Hf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Aa(4194308,4,ug.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Aa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Aa(4,2,t,e)},useMemo:function(t,e){var n=Hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Hn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=H_.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=Hn();return t={current:t},e.memoizedState=t},useState:Bf,useDebugValue:wd,useDeferredValue:function(t){return Hn().memoizedState=t},useTransition:function(){var t=Bf(!1),e=t[0];return t=B_.bind(null,t[1]),Hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=Hn();if(at){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),bt===null)throw Error(ne(349));pr&30||ng(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Hf(rg.bind(null,i,s,t),[t]),i.flags|=2048,xo(9,ig.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Hn(),e=bt.identifierPrefix;if(at){var n=si,i=ri;n=(i&~(1<<32-Fn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=vo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=z_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},W_={readContext:Tn,useCallback:fg,useContext:Tn,useEffect:Td,useImperativeHandle:dg,useInsertionEffect:lg,useLayoutEffect:cg,useMemo:hg,useReducer:Jl,useRef:ag,useState:function(){return Jl(_o)},useDebugValue:wd,useDeferredValue:function(t){var e=wn();return pg(e,St.memoizedState,t)},useTransition:function(){var t=Jl(_o)[0],e=wn().memoizedState;return[t,e]},useMutableSource:eg,useSyncExternalStore:tg,useId:mg,unstable_isNewReconciler:!1},j_={readContext:Tn,useCallback:fg,useContext:Tn,useEffect:Td,useImperativeHandle:dg,useInsertionEffect:lg,useLayoutEffect:cg,useMemo:hg,useReducer:ec,useRef:ag,useState:function(){return ec(_o)},useDebugValue:wd,useDeferredValue:function(t){var e=wn();return St===null?e.memoizedState=t:pg(e,St.memoizedState,t)},useTransition:function(){var t=ec(_o)[0],e=wn().memoizedState;return[t,e]},useMutableSource:eg,useSyncExternalStore:tg,useId:mg,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gl={isMounted:function(t){return(t=t._reactInternals)?yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Ui(t),s=ai(i,r);s.payload=e,n!=null&&(s.callback=n),e=Di(t,s,r),e!==null&&(On(e,t,r,i),Ta(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Ui(t),s=ai(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Di(t,s,r),e!==null&&(On(e,t,r,i),Ta(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=Ui(t),r=ai(n,i);r.tag=2,e!=null&&(r.callback=e),e=Di(t,r,i),e!==null&&(On(e,t,i,n),Ta(e,t,i))}};function Gf(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!uo(n,i)||!uo(r,s):!0}function xg(t,e,n){var i=!1,r=Bi,s=e.contextType;return typeof s=="object"&&s!==null?s=Tn(s):(r=tn(e)?fr:Ht.current,i=e.contextTypes,s=(i=i!=null)?cs(t,r):Bi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&gl.enqueueReplaceState(e,e.state,null)}function vu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},vd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Tn(s):(s=tn(e)?fr:Ht.current,r.context=cs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&gl.enqueueReplaceState(r,r.state,null),Ya(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function hs(t,e){try{var n="",i=e;do n+=x0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _u(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var X_=typeof WeakMap=="function"?WeakMap:Map;function yg(t,e,n){n=ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Qa||(Qa=!0,Ru=i),_u(t,e)},n}function Sg(t,e,n){n=ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){_u(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_u(t,e),typeof i!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Wf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new X_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ox.bind(null,t,e,n),e.then(t,t))}function jf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ai(-1,1),e.tag=2,Di(n,e,1))),n.lanes|=1),t)}var Y_=hi.ReactCurrentOwner,Jt=!1;function jt(t,e,n,i){e.child=t===null?Km(e,null,n,i):ds(e,t.child,n,i)}function Yf(t,e,n,i,r){n=n.render;var s=e.ref;return rs(e,r),i=Md(t,e,n,i,s,r),n=Ed(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,di(t,e,r)):(at&&n&&ud(e),e.flags|=1,jt(t,e,i,r),e.child)}function qf(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Id(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Mg(t,e,s,i,r)):(t=La(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(o,i)&&t.ref===e.ref)return di(t,e,r)}return e.flags|=1,t=Ni(s,i),t.ref=e.ref,t.return=e,e.child=t}function Mg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(uo(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,di(t,e,r)}return xu(t,e,n,i,r)}function Eg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Kr,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(Kr,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(Kr,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(Kr,cn),cn|=i;return jt(t,e,r,n),e.child}function Tg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xu(t,e,n,i,r){var s=tn(n)?fr:Ht.current;return s=cs(e,s),rs(e,r),n=Md(t,e,n,i,s,r),i=Ed(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,di(t,e,r)):(at&&i&&ud(e),e.flags|=1,jt(t,e,n,r),e.child)}function $f(t,e,n,i,r){if(tn(n)){var s=!0;Ga(e)}else s=!1;if(rs(e,r),e.stateNode===null)Ca(t,e),xg(e,n,i),vu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Tn(c):(c=tn(n)?fr:Ht.current,c=cs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Vf(e,o,i,c),Si=!1;var h=e.memoizedState;o.state=h,Ya(e,i,o,r),l=e.memoizedState,a!==i||h!==l||en.current||Si?(typeof d=="function"&&(gu(e,n,d,i),l=e.memoizedState),(a=Si||Gf(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Qm(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Ln(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Tn(l):(l=tn(n)?fr:Ht.current,l=cs(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Vf(e,o,i,l),Si=!1,h=e.memoizedState,o.state=h,Ya(e,i,o,r);var x=e.memoizedState;a!==f||h!==x||en.current||Si?(typeof g=="function"&&(gu(e,n,g,i),x=e.memoizedState),(c=Si||Gf(e,n,c,i,h,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return yu(t,e,n,i,s,r)}function yu(t,e,n,i,r,s){Tg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Uf(e,n,!1),di(t,e,s);i=e.stateNode,Y_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ds(e,t.child,null,s),e.child=ds(e,null,a,s)):jt(t,e,a,s),e.memoizedState=i.state,r&&Uf(e,n,!0),e.child}function wg(t){var e=t.stateNode;e.pendingContext?If(t,e.pendingContext,e.pendingContext!==e.context):e.context&&If(t,e.context,!1),_d(t,e.containerInfo)}function Kf(t,e,n,i,r){return us(),fd(r),e.flags|=256,jt(t,e,n,i),e.child}var Su={dehydrated:null,treeContext:null,retryLane:0};function Mu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ag(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(ut,r&1),t===null)return pu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xl(o,i,0,null),t=ar(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mu(n),e.memoizedState=Su,t):Ad(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return q_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ni(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ni(a,s):(s=ar(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Mu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Su,i}return s=t.child,t=s.sibling,i=Ni(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ad(t,e){return e=xl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xo(t,e,n,i){return i!==null&&fd(i),ds(e,t.child,null,n),t=Ad(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function q_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=tc(Error(ne(422))),Xo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=xl({mode:"visible",children:i.children},r,0,null),s=ar(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ds(e,t.child,null,o),e.child.memoizedState=Mu(o),e.memoizedState=Su,s);if(!(e.mode&1))return Xo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=tc(s,i,void 0),Xo(t,e,o,i)}if(a=(o&t.childLanes)!==0,Jt||a){if(i=bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ui(t,r),On(i,t,r,-1))}return Dd(),i=tc(Error(ne(421))),Xo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ax.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,dn=Pi(r.nextSibling),fn=e,at=!0,Dn=null,t!==null&&(_n[xn++]=ri,_n[xn++]=si,_n[xn++]=hr,ri=t.id,si=t.overflow,hr=e),e=Ad(e,i.children),e.flags|=4096,e)}function Zf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),mu(t.return,e,n)}function nc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Cg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(jt(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zf(t,n,e);else if(t.tag===19)Zf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&qa(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),nc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&qa(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}nc(e,!0,n,null,s);break;case"together":nc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ca(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Ni(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ni(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $_(t,e,n){switch(e.tag){case 3:wg(e),us();break;case 5:Jm(e);break;case 1:tn(e.type)&&Ga(e);break;case 4:_d(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(ja,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?Ag(t,e,n):(nt(ut,ut.current&1),t=di(t,e,n),t!==null?t.sibling:null);nt(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Cg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,Eg(t,e,n)}return di(t,e,n)}var Rg,Eu,bg,Lg;Rg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Eu=function(){};bg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,sr(Xn.current);var s=null;switch(n){case"input":r=jc(t,r),i=jc(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=qc(t,r),i=qc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ba)}Kc(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(io.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(io.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&it("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Lg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Us(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function K_(t,e,n){var i=e.pendingProps;switch(dd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return tn(e.type)&&Ha(),Ft(e),null;case 3:return i=e.stateNode,fs(),st(en),st(Ht),yd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Wo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(Pu(Dn),Dn=null))),Eu(t,e),Ft(e),null;case 5:xd(e);var r=sr(go.current);if(n=e.type,t!==null&&e.stateNode!=null)bg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Ft(e),null}if(t=sr(Xn.current),Wo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Vn]=e,i[po]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<Xs.length;r++)it(Xs[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":of(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":lf(i,s),it("invalid",i)}Kc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Vo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Vo(i.textContent,a,t),r=["children",""+a]):io.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":No(i),af(i,s,!0);break;case"textarea":No(i),cf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ba)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Vn]=e,t[po]=i,Rg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zc(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<Xs.length;r++)it(Xs[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":of(t,i),r=jc(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),it("invalid",t);break;case"textarea":lf(t,i),r=qc(t,i),it("invalid",t);break;default:r=i}Kc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?am(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&sm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ro(t,l):typeof l=="number"&&ro(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(io.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&Ku(t,s,l,o))}switch(n){case"input":No(t),af(t,i,!1);break;case"textarea":No(t),cf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+zi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?es(t,!!i.multiple,s,!1):i.defaultValue!=null&&es(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ba)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)Lg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=sr(go.current),sr(Xn.current),Wo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Vn]=e,(s=i.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:Vo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Vo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Vn]=e,e.stateNode=i}return Ft(e),null;case 13:if(st(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&dn!==null&&e.mode&1&&!(e.flags&128))qm(),us(),e.flags|=98560,s=!1;else if(s=Wo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Vn]=e}else us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else Dn!==null&&(Pu(Dn),Dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?Mt===0&&(Mt=3):Dd())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return fs(),Eu(t,e),t===null&&fo(e.stateNode.containerInfo),Ft(e),null;case 10:return md(e.type._context),Ft(e),null;case 17:return tn(e.type)&&Ha(),Ft(e),null;case 19:if(st(ut),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Us(s,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=qa(t),o!==null){for(e.flags|=128,Us(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>ps&&(e.flags|=128,i=!0,Us(s,!1),e.lanes=4194304)}else{if(!i)if(t=qa(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Us(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!at)return Ft(e),null}else 2*vt()-s.renderingStartTime>ps&&n!==1073741824&&(e.flags|=128,i=!0,Us(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=ut.current,nt(ut,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return Pd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function Z_(t,e){switch(dd(e),e.tag){case 1:return tn(e.type)&&Ha(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fs(),st(en),st(Ht),yd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xd(e),null;case 13:if(st(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(ut),null;case 4:return fs(),null;case 10:return md(e.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var Yo=!1,zt=!1,Q_=typeof WeakSet=="function"?WeakSet:Set,me=null;function $r(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function Tu(t,e,n){try{n()}catch(i){mt(t,e,i)}}var Qf=!1;function J_(t,e){if(au=Oa,t=Nm(),cd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lu={focusedElem:t,selectionRange:n},Oa=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,p=x.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:Ln(e.type,_),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return x=Qf,Qf=!1,x}function Js(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Tu(e,n,s)}r=r.next}while(r!==i)}}function vl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Pg(t){var e=t.alternate;e!==null&&(t.alternate=null,Pg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Vn],delete e[po],delete e[du],delete e[N_],delete e[F_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Dg(t){return t.tag===5||t.tag===3||t.tag===4}function Jf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Au(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ba));else if(i!==4&&(t=t.child,t!==null))for(Au(t,e,n),t=t.sibling;t!==null;)Au(t,e,n),t=t.sibling}function Cu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Cu(t,e,n),t=t.sibling;t!==null;)Cu(t,e,n),t=t.sibling}var Lt=null,Pn=!1;function pi(t,e,n){for(n=n.child;n!==null;)Ig(t,e,n),n=n.sibling}function Ig(t,e,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(cl,n)}catch{}switch(n.tag){case 5:zt||$r(n,e);case 6:var i=Lt,r=Pn;Lt=null,pi(t,e,n),Lt=i,Pn=r,Lt!==null&&(Pn?(t=Lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(Pn?(t=Lt,n=n.stateNode,t.nodeType===8?$l(t.parentNode,n):t.nodeType===1&&$l(t,n),lo(t)):$l(Lt,n.stateNode));break;case 4:i=Lt,r=Pn,Lt=n.stateNode.containerInfo,Pn=!0,pi(t,e,n),Lt=i,Pn=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tu(n,e,o),r=r.next}while(r!==i)}pi(t,e,n);break;case 1:if(!zt&&($r(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){mt(n,e,a)}pi(t,e,n);break;case 21:pi(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,pi(t,e,n),zt=i):pi(t,e,n);break;default:pi(t,e,n)}}function eh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Q_),e.forEach(function(i){var r=lx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function An(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Lt=a.stateNode,Pn=!1;break e;case 3:Lt=a.stateNode.containerInfo,Pn=!0;break e;case 4:Lt=a.stateNode.containerInfo,Pn=!0;break e}a=a.return}if(Lt===null)throw Error(ne(160));Ig(s,o,r),Lt=null,Pn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ug(e,t),e=e.sibling}function Ug(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(An(e,t),Bn(t),i&4){try{Js(3,t,t.return),vl(3,t)}catch(_){mt(t,t.return,_)}try{Js(5,t,t.return)}catch(_){mt(t,t.return,_)}}break;case 1:An(e,t),Bn(t),i&512&&n!==null&&$r(n,n.return);break;case 5:if(An(e,t),Bn(t),i&512&&n!==null&&$r(n,n.return),t.flags&32){var r=t.stateNode;try{ro(r,"")}catch(_){mt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&nm(r,s),Zc(a,o);var c=Zc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?am(r,f):d==="dangerouslySetInnerHTML"?sm(r,f):d==="children"?ro(r,f):Ku(r,d,f,c)}switch(a){case"input":Xc(r,s);break;case"textarea":im(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?es(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?es(r,!!s.multiple,s.defaultValue,!0):es(r,!!s.multiple,s.multiple?[]:"",!1))}r[po]=s}catch(_){mt(t,t.return,_)}}break;case 6:if(An(e,t),Bn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){mt(t,t.return,_)}}break;case 3:if(An(e,t),Bn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{lo(e.containerInfo)}catch(_){mt(t,t.return,_)}break;case 4:An(e,t),Bn(t);break;case 13:An(e,t),Bn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(bd=vt())),i&4&&eh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(c=zt)||d,An(e,t),zt=c):An(e,t),Bn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(me=t,d=t.child;d!==null;){for(f=me=d;me!==null;){switch(h=me,g=h.child,h.tag){case 0:case 11:case 14:case 15:Js(4,h,h.return);break;case 1:$r(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){mt(i,n,_)}}break;case 5:$r(h,h.return);break;case 22:if(h.memoizedState!==null){nh(f);continue}}g!==null?(g.return=h,me=g):nh(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=om("display",o))}catch(_){mt(t,t.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){mt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:An(e,t),Bn(t),i&4&&eh(t);break;case 21:break;default:An(e,t),Bn(t)}}function Bn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Dg(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ro(r,""),i.flags&=-33);var s=Jf(t);Cu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Jf(t);Au(t,a,o);break;default:throw Error(ne(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ex(t,e,n){me=t,Ng(t)}function Ng(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Yo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||zt;a=Yo;var c=zt;if(Yo=o,(zt=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?ih(r):l!==null?(l.return=o,me=l):ih(r);for(;s!==null;)me=s,Ng(s),s=s.sibling;me=r,Yo=a,zt=c}th(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):th(t)}}function th(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||vl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zf(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&lo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}zt||e.flags&512&&wu(e)}catch(h){mt(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function nh(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function ih(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vl(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{wu(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{wu(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var tx=Math.ceil,Za=hi.ReactCurrentDispatcher,Cd=hi.ReactCurrentOwner,En=hi.ReactCurrentBatchConfig,Ye=0,bt=null,xt=null,Dt=0,cn=0,Kr=Vi(0),Mt=0,yo=null,mr=0,_l=0,Rd=0,eo=null,Qt=null,bd=0,ps=1/0,ti=null,Qa=!1,Ru=null,Ii=null,qo=!1,wi=null,Ja=0,to=0,bu=null,Ra=-1,ba=0;function qt(){return Ye&6?vt():Ra!==-1?Ra:Ra=vt()}function Ui(t){return t.mode&1?Ye&2&&Dt!==0?Dt&-Dt:k_.transition!==null?(ba===0&&(ba=xm()),ba):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:Am(t.type)),t):1}function On(t,e,n,i){if(50<to)throw to=0,bu=null,Error(ne(185));To(t,n,i),(!(Ye&2)||t!==bt)&&(t===bt&&(!(Ye&2)&&(_l|=n),Mt===4&&Ei(t,Dt)),nn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(ps=vt()+500,pl&&Wi()))}function nn(t,e){var n=t.callbackNode;k0(t,e);var i=Fa(t,t===bt?Dt:0);if(i===0)n!==null&&ff(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ff(n),e===1)t.tag===0?O_(rh.bind(null,t)):jm(rh.bind(null,t)),I_(function(){!(Ye&6)&&Wi()}),n=null;else{switch(ym(i)){case 1:n=td;break;case 4:n=vm;break;case 16:n=Na;break;case 536870912:n=_m;break;default:n=Na}n=Vg(n,Fg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Fg(t,e){if(Ra=-1,ba=0,Ye&6)throw Error(ne(327));var n=t.callbackNode;if(ss()&&t.callbackNode!==n)return null;var i=Fa(t,t===bt?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=el(t,i);else{e=i;var r=Ye;Ye|=2;var s=kg();(bt!==t||Dt!==e)&&(ti=null,ps=vt()+500,or(t,e));do try{rx();break}catch(a){Og(t,a)}while(!0);pd(),Za.current=s,Ye=r,xt!==null?e=0:(bt=null,Dt=0,e=Mt)}if(e!==0){if(e===2&&(r=nu(t),r!==0&&(i=r,e=Lu(t,r))),e===1)throw n=yo,or(t,0),Ei(t,i),nn(t,vt()),n;if(e===6)Ei(t,i);else{if(r=t.current.alternate,!(i&30)&&!nx(r)&&(e=el(t,i),e===2&&(s=nu(t),s!==0&&(i=s,e=Lu(t,s))),e===1))throw n=yo,or(t,0),Ei(t,i),nn(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Qi(t,Qt,ti);break;case 3:if(Ei(t,i),(i&130023424)===i&&(e=bd+500-vt(),10<e)){if(Fa(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=uu(Qi.bind(null,t,Qt,ti),e);break}Qi(t,Qt,ti);break;case 4:if(Ei(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Fn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*tx(i/1960))-i,10<i){t.timeoutHandle=uu(Qi.bind(null,t,Qt,ti),i);break}Qi(t,Qt,ti);break;case 5:Qi(t,Qt,ti);break;default:throw Error(ne(329))}}}return nn(t,vt()),t.callbackNode===n?Fg.bind(null,t):null}function Lu(t,e){var n=eo;return t.current.memoizedState.isDehydrated&&(or(t,e).flags|=256),t=el(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&Pu(e)),t}function Pu(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function nx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ei(t,e){for(e&=~Rd,e&=~_l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fn(e),i=1<<n;t[n]=-1,e&=~i}}function rh(t){if(Ye&6)throw Error(ne(327));ss();var e=Fa(t,0);if(!(e&1))return nn(t,vt()),null;var n=el(t,e);if(t.tag!==0&&n===2){var i=nu(t);i!==0&&(e=i,n=Lu(t,i))}if(n===1)throw n=yo,or(t,0),Ei(t,e),nn(t,vt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qi(t,Qt,ti),nn(t,vt()),null}function Ld(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(ps=vt()+500,pl&&Wi())}}function gr(t){wi!==null&&wi.tag===0&&!(Ye&6)&&ss();var e=Ye;Ye|=1;var n=En.transition,i=Ke;try{if(En.transition=null,Ke=1,t)return t()}finally{Ke=i,En.transition=n,Ye=e,!(Ye&6)&&Wi()}}function Pd(){cn=Kr.current,st(Kr)}function or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,D_(n)),xt!==null)for(n=xt.return;n!==null;){var i=n;switch(dd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ha();break;case 3:fs(),st(en),st(Ht),yd();break;case 5:xd(i);break;case 4:fs();break;case 13:st(ut);break;case 19:st(ut);break;case 10:md(i.type._context);break;case 22:case 23:Pd()}n=n.return}if(bt=t,xt=t=Ni(t.current,null),Dt=cn=e,Mt=0,yo=null,Rd=_l=mr=0,Qt=eo=null,rr!==null){for(e=0;e<rr.length;e++)if(n=rr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}rr=null}return t}function Og(t,e){do{var n=xt;try{if(pd(),wa.current=Ka,$a){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}$a=!1}if(pr=0,Rt=St=dt=null,Qs=!1,vo=0,Cd.current=null,n===null||n.return===null){Mt=1,yo=e,xt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=jf(o);if(g!==null){g.flags&=-257,Xf(g,o,a,s,e),g.mode&1&&Wf(s,c,e),e=g,l=c;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){Wf(s,c,e),Dd();break e}l=Error(ne(426))}}else if(at&&a.mode&1){var p=jf(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Xf(p,o,a,s,e),fd(hs(l,a));break e}}s=l=hs(l,a),Mt!==4&&(Mt=2),eo===null?eo=[s]:eo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=yg(s,l,e);kf(s,u);break e;case 1:a=l;var v=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ii===null||!Ii.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Sg(s,a,e);kf(s,S);break e}}s=s.return}while(s!==null)}Bg(n)}catch(R){e=R,xt===n&&n!==null&&(xt=n=n.return);continue}break}while(!0)}function kg(){var t=Za.current;return Za.current=Ka,t===null?Ka:t}function Dd(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),bt===null||!(mr&268435455)&&!(_l&268435455)||Ei(bt,Dt)}function el(t,e){var n=Ye;Ye|=2;var i=kg();(bt!==t||Dt!==e)&&(ti=null,or(t,e));do try{ix();break}catch(r){Og(t,r)}while(!0);if(pd(),Ye=n,Za.current=i,xt!==null)throw Error(ne(261));return bt=null,Dt=0,Mt}function ix(){for(;xt!==null;)zg(xt)}function rx(){for(;xt!==null&&!b0();)zg(xt)}function zg(t){var e=Gg(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?Bg(t):xt=e,Cd.current=null}function Bg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Z_(n,e),n!==null){n.flags&=32767,xt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,xt=null;return}}else if(n=K_(n,e,cn),n!==null){xt=n;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);Mt===0&&(Mt=5)}function Qi(t,e,n){var i=Ke,r=En.transition;try{En.transition=null,Ke=1,sx(t,e,n,i)}finally{En.transition=r,Ke=i}return null}function sx(t,e,n,i){do ss();while(wi!==null);if(Ye&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(z0(t,s),t===bt&&(xt=bt=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qo||(qo=!0,Vg(Na,function(){return ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=En.transition,En.transition=null;var o=Ke;Ke=1;var a=Ye;Ye|=4,Cd.current=null,J_(t,n),Ug(n,t),w_(lu),Oa=!!au,lu=au=null,t.current=n,ex(n),L0(),Ye=a,Ke=o,En.transition=s}else t.current=n;if(qo&&(qo=!1,wi=t,Ja=r),s=t.pendingLanes,s===0&&(Ii=null),I0(n.stateNode),nn(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Qa)throw Qa=!1,t=Ru,Ru=null,t;return Ja&1&&t.tag!==0&&ss(),s=t.pendingLanes,s&1?t===bu?to++:(to=0,bu=t):to=0,Wi(),null}function ss(){if(wi!==null){var t=ym(Ja),e=En.transition,n=Ke;try{if(En.transition=null,Ke=16>t?16:t,wi===null)var i=!1;else{if(t=wi,wi=null,Ja=0,Ye&6)throw Error(ne(331));var r=Ye;for(Ye|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var d=me;switch(d.tag){case 0:case 11:case 15:Js(8,d,s)}var f=d.child;if(f!==null)f.return=d,me=f;else for(;me!==null;){d=me;var h=d.sibling,g=d.return;if(Pg(d),d===c){me=null;break}if(h!==null){h.return=g,me=h;break}me=g}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Js(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,me=u;break e}me=s.return}}var v=t.current;for(me=v;me!==null;){o=me;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,me=m;else e:for(o=v;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vl(9,a)}}catch(R){mt(a,a.return,R)}if(a===o){me=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,me=S;break e}me=a.return}}if(Ye=r,Wi(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(cl,t)}catch{}i=!0}return i}finally{Ke=n,En.transition=e}}return!1}function sh(t,e,n){e=hs(n,e),e=yg(t,e,1),t=Di(t,e,1),e=qt(),t!==null&&(To(t,1,e),nn(t,e))}function mt(t,e,n){if(t.tag===3)sh(t,t,n);else for(;e!==null;){if(e.tag===3){sh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ii===null||!Ii.has(i))){t=hs(n,t),t=Sg(e,t,1),e=Di(e,t,1),t=qt(),e!==null&&(To(e,1,t),nn(e,t));break}}e=e.return}}function ox(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,bt===t&&(Dt&n)===n&&(Mt===4||Mt===3&&(Dt&130023424)===Dt&&500>vt()-bd?or(t,0):Rd|=n),nn(t,e)}function Hg(t,e){e===0&&(t.mode&1?(e=ko,ko<<=1,!(ko&130023424)&&(ko=4194304)):e=1);var n=qt();t=ui(t,e),t!==null&&(To(t,e,n),nn(t,n))}function ax(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hg(t,n)}function lx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Hg(t,n)}var Gg;Gg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,$_(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,at&&e.flags&1048576&&Xm(e,Wa,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ca(t,e),t=e.pendingProps;var r=cs(e,Ht.current);rs(e,n),r=Md(null,e,i,t,r,n);var s=Ed();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,Ga(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,vd(e),r.updater=gl,e.stateNode=r,r._reactInternals=e,vu(e,i,t,n),e=yu(null,e,i,!0,s,n)):(e.tag=0,at&&s&&ud(e),jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ca(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ux(i),t=Ln(i,t),r){case 0:e=xu(null,e,i,t,n);break e;case 1:e=$f(null,e,i,t,n);break e;case 11:e=Yf(null,e,i,t,n);break e;case 14:e=qf(null,e,i,Ln(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),xu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),$f(t,e,i,r,n);case 3:e:{if(wg(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Qm(t,e),Ya(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=hs(Error(ne(423)),e),e=Kf(t,e,i,n,r);break e}else if(i!==r){r=hs(Error(ne(424)),e),e=Kf(t,e,i,n,r);break e}else for(dn=Pi(e.stateNode.containerInfo.firstChild),fn=e,at=!0,Dn=null,n=Km(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(us(),i===r){e=di(t,e,n);break e}jt(t,e,i,n)}e=e.child}return e;case 5:return Jm(e),t===null&&pu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,cu(i,r)?o=null:s!==null&&cu(i,s)&&(e.flags|=32),Tg(t,e),jt(t,e,o,n),e.child;case 6:return t===null&&pu(e),null;case 13:return Ag(t,e,n);case 4:return _d(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ds(e,null,i,n):jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Yf(t,e,i,r,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt(ja,i._currentValue),i._currentValue=o,s!==null)if(kn(s.value,o)){if(s.children===r.children&&!en.current){e=di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ai(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),mu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),mu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,rs(e,n),r=Tn(r),i=i(r),e.flags|=1,jt(t,e,i,n),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),qf(t,e,i,r,n);case 15:return Mg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Ca(t,e),e.tag=1,tn(i)?(t=!0,Ga(e)):t=!1,rs(e,n),xg(e,i,r),vu(e,i,r,n),yu(null,e,i,!0,t,n);case 19:return Cg(t,e,n);case 22:return Eg(t,e,n)}throw Error(ne(156,e.tag))};function Vg(t,e){return gm(t,e)}function cx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(t,e,n,i){return new cx(t,e,n,i)}function Id(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ux(t){if(typeof t=="function")return Id(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qu)return 11;if(t===Ju)return 14}return 2}function Ni(t,e){var n=t.alternate;return n===null?(n=Mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function La(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Id(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Br:return ar(n.children,r,s,e);case Zu:o=8,r|=8;break;case Hc:return t=Mn(12,n,e,r|2),t.elementType=Hc,t.lanes=s,t;case Gc:return t=Mn(13,n,e,r),t.elementType=Gc,t.lanes=s,t;case Vc:return t=Mn(19,n,e,r),t.elementType=Vc,t.lanes=s,t;case Jp:return xl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Zp:o=10;break e;case Qp:o=9;break e;case Qu:o=11;break e;case Ju:o=14;break e;case yi:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Mn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ar(t,e,n,i){return t=Mn(7,t,i,e),t.lanes=n,t}function xl(t,e,n,i){return t=Mn(22,t,i,e),t.elementType=Jp,t.lanes=n,t.stateNode={isHidden:!1},t}function ic(t,e,n){return t=Mn(6,t,null,e),t.lanes=n,t}function rc(t,e,n){return e=Mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kl(0),this.expirationTimes=kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ud(t,e,n,i,r,s,o,a,l){return t=new dx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vd(s),t}function fx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Wg(t){if(!t)return Bi;t=t._reactInternals;e:{if(yr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(tn(n))return Wm(t,n,e)}return e}function jg(t,e,n,i,r,s,o,a,l){return t=Ud(n,i,!0,t,r,s,o,a,l),t.context=Wg(null),n=t.current,i=qt(),r=Ui(n),s=ai(i,r),s.callback=e??null,Di(n,s,r),t.current.lanes=r,To(t,r,i),nn(t,i),t}function yl(t,e,n,i){var r=e.current,s=qt(),o=Ui(r);return n=Wg(n),e.context===null?e.context=n:e.pendingContext=n,e=ai(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Di(r,e,o),t!==null&&(On(t,r,o,s),Ta(t,r,o)),o}function tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function oh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nd(t,e){oh(t,e),(t=t.alternate)&&oh(t,e)}function hx(){return null}var Xg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fd(t){this._internalRoot=t}Sl.prototype.render=Fd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));yl(t,e,null,null)};Sl.prototype.unmount=Fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gr(function(){yl(null,t,null,null)}),e[ci]=null}};function Sl(t){this._internalRoot=t}Sl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Em();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Mi.length&&e!==0&&e<Mi[n].priority;n++);Mi.splice(n,0,t),n===0&&wm(t)}};function Od(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ah(){}function px(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=tl(o);s.call(c)}}var o=jg(e,i,t,0,null,!1,!1,"",ah);return t._reactRootContainer=o,t[ci]=o.current,fo(t.nodeType===8?t.parentNode:t),gr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=tl(l);a.call(c)}}var l=Ud(t,0,!1,null,null,!1,!1,"",ah);return t._reactRootContainer=l,t[ci]=l.current,fo(t.nodeType===8?t.parentNode:t),gr(function(){yl(e,l,n,i)}),l}function El(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=tl(o);a.call(l)}}yl(e,o,t,r)}else o=px(n,e,t,r,i);return tl(o)}Sm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=js(e.pendingLanes);n!==0&&(nd(e,n|1),nn(e,vt()),!(Ye&6)&&(ps=vt()+500,Wi()))}break;case 13:gr(function(){var i=ui(t,1);if(i!==null){var r=qt();On(i,t,1,r)}}),Nd(t,1)}};id=function(t){if(t.tag===13){var e=ui(t,134217728);if(e!==null){var n=qt();On(e,t,134217728,n)}Nd(t,134217728)}};Mm=function(t){if(t.tag===13){var e=Ui(t),n=ui(t,e);if(n!==null){var i=qt();On(n,t,e,i)}Nd(t,e)}};Em=function(){return Ke};Tm=function(t,e){var n=Ke;try{return Ke=t,e()}finally{Ke=n}};Jc=function(t,e,n){switch(e){case"input":if(Xc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=hl(i);if(!r)throw Error(ne(90));tm(i),Xc(i,r)}}}break;case"textarea":im(t,n);break;case"select":e=n.value,e!=null&&es(t,!!n.multiple,e,!1)}};um=Ld;dm=gr;var mx={usingClientEntryPoint:!1,Events:[Ao,Wr,hl,lm,cm,Ld]},Ns={findFiberByHostInstance:ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gx={bundleType:Ns.bundleType,version:Ns.version,rendererPackageName:Ns.rendererPackageName,rendererConfig:Ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=pm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ns.findFiberByHostInstance||hx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{cl=$o.inject(gx),jn=$o}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mx;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Od(e))throw Error(ne(200));return fx(t,e,null,n)};pn.createRoot=function(t,e){if(!Od(t))throw Error(ne(299));var n=!1,i="",r=Xg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ud(t,1,!1,null,null,n,!1,i,r),t[ci]=e.current,fo(t.nodeType===8?t.parentNode:t),new Fd(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=pm(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return gr(t)};pn.hydrate=function(t,e,n){if(!Ml(e))throw Error(ne(200));return El(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!Od(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Xg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=jg(e,null,t,1,n??null,r,!1,s,o),t[ci]=e.current,fo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Sl(e)};pn.render=function(t,e,n){if(!Ml(e))throw Error(ne(200));return El(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!Ml(t))throw Error(ne(40));return t._reactRootContainer?(gr(function(){El(null,null,t,!1,function(){t._reactRootContainer=null,t[ci]=null})}),!0):!1};pn.unstable_batchedUpdates=Ld;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ml(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return El(t,e,n,!1,i)};pn.version="18.3.1-next-f1338f8080-20240426";function Yg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yg)}catch(t){console.error(t)}}Yg(),Yp.exports=pn;var vx=Yp.exports,lh=vx;zc.createRoot=lh.createRoot,zc.hydrateRoot=lh.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kd="160",_x=0,ch=1,xx=2,qg=1,$g=2,ei=3,Hi=0,rn=1,ii=2,Fi=0,os=1,uh=2,dh=3,fh=4,yx=5,tr=100,Sx=101,Mx=102,hh=103,ph=104,Ex=200,Tx=201,wx=202,Ax=203,Du=204,Iu=205,Cx=206,Rx=207,bx=208,Lx=209,Px=210,Dx=211,Ix=212,Ux=213,Nx=214,Fx=0,Ox=1,kx=2,nl=3,zx=4,Bx=5,Hx=6,Gx=7,Kg=0,Vx=1,Wx=2,Oi=0,jx=1,Xx=2,Yx=3,Zg=4,qx=5,$x=6,Qg=300,ms=301,gs=302,Uu=303,Nu=304,Tl=306,Fu=1e3,Un=1001,Ou=1002,Xt=1003,mh=1004,sc=1005,yn=1006,Kx=1007,So=1008,ki=1009,Zx=1010,Qx=1011,zd=1012,Jg=1013,Ai=1014,Ci=1015,Mo=1016,ev=1017,tv=1018,lr=1020,Jx=1021,Nn=1023,ey=1024,ty=1025,cr=1026,vs=1027,ny=1028,nv=1029,iy=1030,iv=1031,rv=1033,oc=33776,ac=33777,lc=33778,cc=33779,gh=35840,vh=35841,_h=35842,xh=35843,sv=36196,yh=37492,Sh=37496,Mh=37808,Eh=37809,Th=37810,wh=37811,Ah=37812,Ch=37813,Rh=37814,bh=37815,Lh=37816,Ph=37817,Dh=37818,Ih=37819,Uh=37820,Nh=37821,uc=36492,Fh=36494,Oh=36495,ry=36283,kh=36284,zh=36285,Bh=36286,ov=3e3,ur=3001,sy=3200,oy=3201,av=0,ay=1,Sn="",Pt="srgb",fi="srgb-linear",Bd="display-p3",wl="display-p3-linear",il="linear",rt="srgb",rl="rec709",sl="p3",Er=7680,Hh=519,ly=512,cy=513,uy=514,lv=515,dy=516,fy=517,hy=518,py=519,Gh=35044,Vh="300 es",ku=1035,oi=2e3,ol=2001;class Es{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dc=Math.PI/180,zu=180/Math.PI;function Ro(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function my(t,e){return(t%e+e)%e}function fc(t,e,n){return(1-n)*t+n*e}function Wh(t){return(t&t-1)===0&&t!==0}function Bu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Fs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],g=i[5],x=i[8],_=r[0],p=r[3],u=r[6],v=r[1],m=r[4],S=r[7],R=r[2],C=r[5],w=r[8];return s[0]=o*_+a*v+l*R,s[3]=o*p+a*m+l*C,s[6]=o*u+a*S+l*w,s[1]=c*_+d*v+f*R,s[4]=c*p+d*m+f*C,s[7]=c*u+d*S+f*w,s[2]=h*_+g*v+x*R,s[5]=h*p+g*m+x*C,s[8]=h*u+g*S+x*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,g=c*s-o*l,x=n*f+i*h+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=f*_,e[1]=(r*c-d*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(d*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=g*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(hc.makeScale(e,n)),this}rotate(e){return this.premultiply(hc.makeRotation(-e)),this}translate(e,n){return this.premultiply(hc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hc=new Ve;function cv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function al(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function gy(){const t=al("canvas");return t.style.display="block",t}const jh={};function no(t){t in jh||(jh[t]=!0,console.warn(t))}const Xh=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yh=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ko={[fi]:{transfer:il,primaries:rl,toReference:t=>t,fromReference:t=>t},[Pt]:{transfer:rt,primaries:rl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[wl]:{transfer:il,primaries:sl,toReference:t=>t.applyMatrix3(Yh),fromReference:t=>t.applyMatrix3(Xh)},[Bd]:{transfer:rt,primaries:sl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Yh),fromReference:t=>t.applyMatrix3(Xh).convertLinearToSRGB()}},vy=new Set([fi,wl]),Qe={enabled:!0,_workingColorSpace:fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!vy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ko[e].toReference,r=Ko[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ko[t].primaries},getTransfer:function(t){return t===Sn?il:Ko[t].transfer}};function as(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function pc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Tr;class uv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Tr===void 0&&(Tr=al("canvas")),Tr.width=e.width,Tr.height=e.height;const i=Tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Tr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=al("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=as(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(as(n[i]/255)*255):n[i]=as(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _y=0;class dv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Ro(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mc(r[o].image)):s.push(mc(r[o]))}else s=mc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function mc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?uv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xy=0;class sn extends Es{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=Un,r=Un,s=yn,o=So,a=Nn,l=ki,c=sn.DEFAULT_ANISOTROPY,d=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Ro(),this.name="",this.source=new dv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(no("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===ur?Pt:Sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fu:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Ou:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fu:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Ou:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return no("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pt?ur:ov}set encoding(e){no("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ur?Pt:Sn}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Qg;sn.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,n=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],g=l[5],x=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+_)<.1&&Math.abs(x+p)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(c+1)/2,S=(g+1)/2,R=(u+1)/2,C=(d+h)/4,w=(f+_)/4,U=(x+p)/4;return m>S&&m>R?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=C/i,s=w/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=U/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=U/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-x)*(p-x)+(f-_)*(f-_)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(f-_)/v,this.z=(h-d)/v,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yy extends Es{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new lt(0,0,e,n),this.scissorTest=!1,this.viewport=new lt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(no("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ur?Pt:Sn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new dv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends yy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class fv extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sy extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],g=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=x,e[n+3]=_;return}if(f!==_||l!==h||c!==g||d!==x){let p=1-a;const u=l*h+c*g+d*x+f*_,v=u>=0?1:-1,m=1-u*u;if(m>Number.EPSILON){const R=Math.sqrt(m),C=Math.atan2(R,u*v);p=Math.sin(p*C)/R,a=Math.sin(a*C)/R}const S=a*v;if(l=l*p+h*S,c=c*p+g*S,d=d*p+x*S,f=f*p+_*S,p===1-a){const R=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=R,c*=R,d*=R,f*=R}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],g=s[o+2],x=s[o+3];return e[n]=a*x+d*f+l*g-c*h,e[n+1]=l*x+d*h+c*f-a*g,e[n+2]=c*x+d*g+a*h-l*f,e[n+3]=d*x-a*f-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*g*x,this._y=c*g*f-h*d*x,this._z=c*d*x+h*g*f,this._w=c*d*f-h*g*x;break;case"YXZ":this._x=h*d*f+c*g*x,this._y=c*g*f-h*d*x,this._z=c*d*x-h*g*f,this._w=c*d*f+h*g*x;break;case"ZXY":this._x=h*d*f-c*g*x,this._y=c*g*f+h*d*x,this._z=c*d*x+h*g*f,this._w=c*d*f-h*g*x;break;case"ZYX":this._x=h*d*f-c*g*x,this._y=c*g*f+h*d*x,this._z=c*d*x-h*g*f,this._w=c*d*f+h*g*x;break;case"YZX":this._x=h*d*f+c*g*x,this._y=c*g*f+h*d*x,this._z=c*d*x-h*g*f,this._w=c*d*f-h*g*x;break;case"XZY":this._x=h*d*f-c*g*x,this._y=c*g*f-h*d*x,this._z=c*d*x+h*g*f,this._w=c*d*f+h*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gc.copy(this).projectOnVector(e),this.sub(gc)}reflect(e){return this.sub(gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gc=new F,qh=new bo;class Lo{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Cn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Cn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Cn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zo.copy(i.boundingBox)),Zo.applyMatrix4(e.matrixWorld),this.union(Zo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),Qo.subVectors(this.max,Os),wr.subVectors(e.a,Os),Ar.subVectors(e.b,Os),Cr.subVectors(e.c,Os),mi.subVectors(Ar,wr),gi.subVectors(Cr,Ar),Yi.subVectors(wr,Cr);let n=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Yi.z,Yi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Yi.z,0,-Yi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Yi.y,Yi.x,0];return!vc(n,wr,Ar,Cr,Qo)||(n=[1,0,0,0,1,0,0,0,1],!vc(n,wr,Ar,Cr,Qo))?!1:(Jo.crossVectors(mi,gi),n=[Jo.x,Jo.y,Jo.z],vc(n,wr,Ar,Cr,Qo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $n=[new F,new F,new F,new F,new F,new F,new F,new F],Cn=new F,Zo=new Lo,wr=new F,Ar=new F,Cr=new F,mi=new F,gi=new F,Yi=new F,Os=new F,Qo=new F,Jo=new F,qi=new F;function vc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){qi.fromArray(t,s);const a=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),l=e.dot(qi),c=n.dot(qi),d=i.dot(qi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const My=new Lo,ks=new F,_c=new F;class Hd{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):My.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const n=ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ks,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(_c)),this.expandByPoint(ks.copy(e.center).sub(_c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new F,xc=new F,ea=new F,vi=new F,yc=new F,ta=new F,Sc=new F;class Ey{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Kn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,n),Kn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xc.copy(e).add(n).multiplyScalar(.5),ea.copy(n).sub(e).normalize(),vi.copy(this.origin).sub(xc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ea),a=vi.dot(this.direction),l=-vi.dot(ea),c=vi.lengthSq(),d=Math.abs(1-o*o);let f,h,g,x;if(d>0)if(f=o*l-a,h=o*a-l,x=s*d,f>=0)if(h>=-x)if(h<=x){const _=1/d;f*=_,h*=_,g=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xc).addScaledVector(ea,h),g}intersectSphere(e,n){Kn.subVectors(e.center,this.origin);const i=Kn.dot(this.direction),r=Kn.dot(Kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,n,i,r,s){yc.subVectors(n,e),ta.subVectors(i,e),Sc.crossVectors(yc,ta);let o=this.direction.dot(Sc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(ta.crossVectors(vi,ta));if(l<0)return null;const c=a*this.direction.dot(yc.cross(vi));if(c<0||l+c>o)return null;const d=-a*vi.dot(Sc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,s,o,a,l,c,d,f,h,g,x,_,p){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,g,x,_,p)}set(e,n,i,r,s,o,a,l,c,d,f,h,g,x,_,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=g,u[7]=x,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Rr.setFromMatrixColumn(e,0).length(),s=1/Rr.setFromMatrixColumn(e,1).length(),o=1/Rr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,g=o*f,x=a*d,_=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=g+x*c,n[5]=h-_*c,n[9]=-a*l,n[2]=_-h*c,n[6]=x+g*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,g=l*f,x=c*d,_=c*f;n[0]=h+_*a,n[4]=x*a-g,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=g*a-x,n[6]=_+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,g=l*f,x=c*d,_=c*f;n[0]=h-_*a,n[4]=-o*f,n[8]=x+g*a,n[1]=g+x*a,n[5]=o*d,n[9]=_-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,g=o*f,x=a*d,_=a*f;n[0]=l*d,n[4]=x*c-g,n[8]=h*c+_,n[1]=l*f,n[5]=_*c+h,n[9]=g*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*c,x=a*l,_=a*c;n[0]=l*d,n[4]=_-h*f,n[8]=x*f+g,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=g*f+x,n[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,g=o*c,x=a*l,_=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+_,n[5]=o*d,n[9]=g*f-x,n[2]=x*f-g,n[6]=a*d,n[10]=_*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ty,e,wy)}lookAt(e,n,i){const r=this.elements;return an.subVectors(e,n),an.lengthSq()===0&&(an.z=1),an.normalize(),_i.crossVectors(i,an),_i.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),_i.crossVectors(i,an)),_i.normalize(),na.crossVectors(an,_i),r[0]=_i.x,r[4]=na.x,r[8]=an.x,r[1]=_i.y,r[5]=na.y,r[9]=an.y,r[2]=_i.z,r[6]=na.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],g=i[13],x=i[2],_=i[6],p=i[10],u=i[14],v=i[3],m=i[7],S=i[11],R=i[15],C=r[0],w=r[4],U=r[8],M=r[12],E=r[1],k=r[5],K=r[9],J=r[13],I=r[2],V=r[6],W=r[10],q=r[14],P=r[3],b=r[7],N=r[11],Y=r[15];return s[0]=o*C+a*E+l*I+c*P,s[4]=o*w+a*k+l*V+c*b,s[8]=o*U+a*K+l*W+c*N,s[12]=o*M+a*J+l*q+c*Y,s[1]=d*C+f*E+h*I+g*P,s[5]=d*w+f*k+h*V+g*b,s[9]=d*U+f*K+h*W+g*N,s[13]=d*M+f*J+h*q+g*Y,s[2]=x*C+_*E+p*I+u*P,s[6]=x*w+_*k+p*V+u*b,s[10]=x*U+_*K+p*W+u*N,s[14]=x*M+_*J+p*q+u*Y,s[3]=v*C+m*E+S*I+R*P,s[7]=v*w+m*k+S*V+R*b,s[11]=v*U+m*K+S*W+R*N,s[15]=v*M+m*J+S*q+R*Y,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],g=e[14],x=e[3],_=e[7],p=e[11],u=e[15];return x*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*g-i*l*g)+_*(+n*l*g-n*c*h+s*o*h-r*o*g+r*c*d-s*l*d)+p*(+n*c*f-n*a*g-s*o*f+i*o*g+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],g=e[11],x=e[12],_=e[13],p=e[14],u=e[15],v=f*p*c-_*h*c+_*l*g-a*p*g-f*l*u+a*h*u,m=x*h*c-d*p*c-x*l*g+o*p*g+d*l*u-o*h*u,S=d*_*c-x*f*c+x*a*g-o*_*g-d*a*u+o*f*u,R=x*f*l-d*_*l-x*a*h+o*_*h+d*a*p-o*f*p,C=n*v+i*m+r*S+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=v*w,e[1]=(_*h*s-f*p*s-_*r*g+i*p*g+f*r*u-i*h*u)*w,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*u+i*l*u)*w,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*g-i*l*g)*w,e[4]=m*w,e[5]=(d*p*s-x*h*s+x*r*g-n*p*g-d*r*u+n*h*u)*w,e[6]=(x*l*s-o*p*s-x*r*c+n*p*c+o*r*u-n*l*u)*w,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*g+n*l*g)*w,e[8]=S*w,e[9]=(x*f*s-d*_*s-x*i*g+n*_*g+d*i*u-n*f*u)*w,e[10]=(o*_*s-x*a*s+x*i*c-n*_*c-o*i*u+n*a*u)*w,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*g-n*a*g)*w,e[12]=R*w,e[13]=(d*_*r-x*f*r+x*i*h-n*_*h-d*i*p+n*f*p)*w,e[14]=(x*a*r-o*_*r-x*i*l+n*_*l+o*i*p-n*a*p)*w,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,g=s*d,x=s*f,_=o*d,p=o*f,u=a*f,v=l*c,m=l*d,S=l*f,R=i.x,C=i.y,w=i.z;return r[0]=(1-(_+u))*R,r[1]=(g+S)*R,r[2]=(x-m)*R,r[3]=0,r[4]=(g-S)*C,r[5]=(1-(h+u))*C,r[6]=(p+v)*C,r[7]=0,r[8]=(x+m)*w,r[9]=(p-v)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Rr.set(r[0],r[1],r[2]).length();const o=Rr.set(r[4],r[5],r[6]).length(),a=Rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const c=1/s,d=1/o,f=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=d,Rn.elements[5]*=d,Rn.elements[6]*=d,Rn.elements[8]*=f,Rn.elements[9]*=f,Rn.elements[10]*=f,n.setFromRotationMatrix(Rn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=oi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let g,x;if(a===oi)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ol)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=oi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(o-s),h=(n+e)*c,g=(i+r)*d;let x,_;if(a===oi)x=(o+s)*f,_=-2*f;else if(a===ol)x=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Rr=new F,Rn=new yt,Ty=new F(0,0,0),wy=new F(1,1,1),_i=new F,na=new F,an=new F,$h=new yt,Kh=new bo;class Al{constructor(e=0,n=0,i=0,r=Al.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return $h.makeRotationFromQuaternion(e),this.setFromRotationMatrix($h,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Al.DEFAULT_ORDER="XYZ";class hv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ay=0;const Zh=new F,br=new bo,Zn=new yt,ia=new F,zs=new F,Cy=new F,Ry=new bo,Qh=new F(1,0,0),Jh=new F(0,1,0),ep=new F(0,0,1),by={type:"added"},Ly={type:"removed"};class Bt extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new F,n=new Al,i=new bo,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ve}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return br.setFromAxisAngle(e,n),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,n){return br.setFromAxisAngle(e,n),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(Qh,e)}rotateY(e){return this.rotateOnAxis(Jh,e)}rotateZ(e){return this.rotateOnAxis(ep,e)}translateOnAxis(e,n){return Zh.copy(e).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qh,e)}translateY(e){return this.translateOnAxis(Jh,e)}translateZ(e){return this.translateOnAxis(ep,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ia.copy(e):ia.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(zs,ia,this.up):Zn.lookAt(ia,zs,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),br.setFromRotationMatrix(Zn),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(by)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ly)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,Cy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Ry,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new F(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new F,Qn=new F,Mc=new F,Jn=new F,Lr=new F,Pr=new F,tp=new F,Ec=new F,Tc=new F,wc=new F;let ra=!1;class In{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),bn.subVectors(e,n),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){bn.subVectors(r,n),Qn.subVectors(i,n),Mc.subVectors(e,n);const o=bn.dot(bn),a=bn.dot(Qn),l=bn.dot(Mc),c=Qn.dot(Qn),d=Qn.dot(Mc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,g=(c*l-a*d)*h,x=(o*d-a*l)*h;return s.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getUV(e,n,i,r,s,o,a,l){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static isFrontFacing(e,n,i,r){return bn.subVectors(i,n),Qn.subVectors(e,n),bn.cross(Qn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),bn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return In.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),In.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return In.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Lr.subVectors(r,i),Pr.subVectors(s,i),Ec.subVectors(e,i);const l=Lr.dot(Ec),c=Pr.dot(Ec);if(l<=0&&c<=0)return n.copy(i);Tc.subVectors(e,r);const d=Lr.dot(Tc),f=Pr.dot(Tc);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Lr,o);wc.subVectors(e,s);const g=Lr.dot(wc),x=Pr.dot(wc);if(x>=0&&g<=x)return n.copy(s);const _=g*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Pr,a);const p=d*x-g*f;if(p<=0&&f-d>=0&&g-x>=0)return tp.subVectors(s,r),a=(f-d)/(f-d+(g-x)),n.copy(r).addScaledVector(tp,a);const u=1/(p+_+h);return o=_*u,a=h*u,n.copy(i).addScaledVector(Lr,o).addScaledVector(Pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Ac(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=my(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ac(o,s,e+1/3),this.g=Ac(o,s,e),this.b=Ac(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Pt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pt){const i=pv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}copyLinearToSRGB(e){return this.r=pc(e.r),this.g=pc(e.g),this.b=pc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Qe.fromWorkingColorSpace(kt.copy(this),e),Math.round(Yt(kt.r*255,0,255))*65536+Math.round(Yt(kt.g*255,0,255))*256+Math.round(Yt(kt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(kt.copy(this),n);const i=kt.r,r=kt.g,s=kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(kt.copy(this),n),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Pt){Qe.fromWorkingColorSpace(kt.copy(this),e);const n=kt.r,i=kt.g,r=kt.b;return e!==Pt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+n,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(xi),e.getHSL(sa);const i=fc(xi.h,sa.h,n),r=fc(xi.s,sa.s,n),s=fc(xi.l,sa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new We;We.NAMES=pv;let Py=0;class Ts extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=os,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Du,this.blendDst=Iu,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Du&&(i.blendSrc=this.blendSrc),this.blendDst!==Iu&&(i.blendDst=this.blendDst),this.blendEquation!==tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mv extends Ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new F,oa=new qe;class Yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Gh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)oa.fromBufferAttribute(this,n),oa.applyMatrix3(e),this.setXY(n,oa.x,oa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Fs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gh&&(e.usage=this.usage),e}}class gv extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class vv extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class dr extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Dy=0;const vn=new yt,Cc=new Bt,Dr=new F,ln=new Lo,Bs=new Lo,Ct=new F;class Sr extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cv(e)?vv:gv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,n,i){return vn.makeTranslation(e,n,i),this.applyMatrix4(vn),this}scale(e,n,i){return vn.makeScale(e,n,i),this.applyMatrix4(vn),this}lookAt(e){return Cc.lookAt(e),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(ln.min,Bs.min),ln.expandByPoint(Ct),Ct.addVectors(ln.max,Bs.max),ln.expandByPoint(Ct)):(ln.expandByPoint(Bs.min),ln.expandByPoint(Bs.max))}ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ct.fromBufferAttribute(a,c),l&&(Dr.fromBufferAttribute(e,c),Ct.add(Dr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let E=0;E<a;E++)c[E]=new F,d[E]=new F;const f=new F,h=new F,g=new F,x=new qe,_=new qe,p=new qe,u=new F,v=new F;function m(E,k,K){f.fromArray(r,E*3),h.fromArray(r,k*3),g.fromArray(r,K*3),x.fromArray(o,E*2),_.fromArray(o,k*2),p.fromArray(o,K*2),h.sub(f),g.sub(f),_.sub(x),p.sub(x);const J=1/(_.x*p.y-p.x*_.y);isFinite(J)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(g,-_.y).multiplyScalar(J),v.copy(g).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(J),c[E].add(u),c[k].add(u),c[K].add(u),d[E].add(v),d[k].add(v),d[K].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let E=0,k=S.length;E<k;++E){const K=S[E],J=K.start,I=K.count;for(let V=J,W=J+I;V<W;V+=3)m(i[V+0],i[V+1],i[V+2])}const R=new F,C=new F,w=new F,U=new F;function M(E){w.fromArray(s,E*3),U.copy(w);const k=c[E];R.copy(k),R.sub(w.multiplyScalar(w.dot(k))).normalize(),C.crossVectors(U,k);const J=C.dot(d[E])<0?-1:1;l[E*4]=R.x,l[E*4+1]=R.y,l[E*4+2]=R.z,l[E*4+3]=J}for(let E=0,k=S.length;E<k;++E){const K=S[E],J=K.start,I=K.count;for(let V=J,W=J+I;V<W;V+=3)M(i[V+0]),M(i[V+1]),M(i[V+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,d=new F,f=new F;if(e)for(let h=0,g=e.count;h<g;h+=3){const x=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,p),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let g=0,x=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?g=l[_]*a.data.stride+a.offset:g=l[_]*d;for(let u=0;u<d;u++)h[x++]=c[g++]}return new Yn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Sr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const g=c[f];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,g=f.length;h<g;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const np=new yt,$i=new Ey,aa=new Hd,ip=new F,Ir=new F,Ur=new F,Nr=new F,Rc=new F,la=new F,ca=new qe,ua=new qe,da=new qe,rp=new F,sp=new F,op=new F,fa=new F,ha=new F;class Wn extends Bt{constructor(e=new Sr,n=new mv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){la.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(Rc.fromBufferAttribute(f,e),o?la.addScaledVector(Rc,d):la.addScaledVector(Rc.sub(n),d))}n.add(la)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(s),$i.copy(e.ray).recast(e.near),!(aa.containsPoint($i.origin)===!1&&($i.intersectSphere(aa,ip)===null||$i.origin.distanceToSquared(ip)>(e.far-e.near)**2))&&(np.copy(s).invert(),$i.copy(e.ray).applyMatrix4(np),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,$i)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=h.length;x<_;x++){const p=h[x],u=o[p.materialIndex],v=Math.max(p.start,g.start),m=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let S=v,R=m;S<R;S+=3){const C=a.getX(S),w=a.getX(S+1),U=a.getX(S+2);r=pa(this,u,e,i,c,d,f,C,w,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),_=Math.min(a.count,g.start+g.count);for(let p=x,u=_;p<u;p+=3){const v=a.getX(p),m=a.getX(p+1),S=a.getX(p+2);r=pa(this,o,e,i,c,d,f,v,m,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=h.length;x<_;x++){const p=h[x],u=o[p.materialIndex],v=Math.max(p.start,g.start),m=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let S=v,R=m;S<R;S+=3){const C=S,w=S+1,U=S+2;r=pa(this,u,e,i,c,d,f,C,w,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let p=x,u=_;p<u;p+=3){const v=p,m=p+1,S=p+2;r=pa(this,o,e,i,c,d,f,v,m,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function Iy(t,e,n,i,r,s,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Hi,a),l===null)return null;ha.copy(a),ha.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ha);return c<n.near||c>n.far?null:{distance:c,point:ha.clone(),object:t}}function pa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ir),t.getVertexPosition(l,Ur),t.getVertexPosition(c,Nr);const d=Iy(t,e,n,i,Ir,Ur,Nr,fa);if(d){r&&(ca.fromBufferAttribute(r,a),ua.fromBufferAttribute(r,l),da.fromBufferAttribute(r,c),d.uv=In.getInterpolation(fa,Ir,Ur,Nr,ca,ua,da,new qe)),s&&(ca.fromBufferAttribute(s,a),ua.fromBufferAttribute(s,l),da.fromBufferAttribute(s,c),d.uv1=In.getInterpolation(fa,Ir,Ur,Nr,ca,ua,da,new qe),d.uv2=d.uv1),o&&(rp.fromBufferAttribute(o,a),sp.fromBufferAttribute(o,l),op.fromBufferAttribute(o,c),d.normal=In.getInterpolation(fa,Ir,Ur,Nr,rp,sp,op,new F),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new F,materialIndex:0};In.getNormal(Ir,Ur,Nr,f.normal),d.face=f}return d}class ws extends Sr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,g=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dr(c,3)),this.setAttribute("normal",new dr(d,3)),this.setAttribute("uv",new dr(f,2));function x(_,p,u,v,m,S,R,C,w,U,M){const E=S/w,k=R/U,K=S/2,J=R/2,I=C/2,V=w+1,W=U+1;let q=0,P=0;const b=new F;for(let N=0;N<W;N++){const Y=N*k-J;for(let Z=0;Z<V;Z++){const H=Z*E-K;b[_]=H*v,b[p]=Y*m,b[u]=I,c.push(b.x,b.y,b.z),b[_]=0,b[p]=0,b[u]=C>0?1:-1,d.push(b.x,b.y,b.z),f.push(Z/w),f.push(1-N/U),q+=1}}for(let N=0;N<U;N++)for(let Y=0;Y<w;Y++){const Z=h+Y+V*N,H=h+Y+V*(N+1),$=h+(Y+1)+V*(N+1),se=h+(Y+1)+V*N;l.push(Z,H,se),l.push(H,$,se),P+=6}a.addGroup(g,P,M),g+=P,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=_s(t[n]);for(const r in i)e[r]=i[r]}return e}function Uy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function _v(t){return t.getRenderTarget()===null?t.outputColorSpace:Qe.workingColorSpace}const Ny={clone:_s,merge:Wt};var Fy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends Ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fy,this.fragmentShader=Oy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=Uy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class xv extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=oi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class un extends xv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zu*2*Math.atan(Math.tan(dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(dc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fr=-90,Or=1;class ky extends Bt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(Fr,Or,e,n);r.layers=this.layers,this.add(r);const s=new un(Fr,Or,e,n);s.layers=this.layers,this.add(s);const o=new un(Fr,Or,e,n);o.layers=this.layers,this.add(o);const a=new un(Fr,Or,e,n);a.layers=this.layers,this.add(a);const l=new un(Fr,Or,e,n);l.layers=this.layers,this.add(l);const c=new un(Fr,Or,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class yv extends sn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:ms,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zy extends vr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(no("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ur?Pt:Sn),this.texture=new yv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ws(5,5,5),s=new _r({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Fi});s.uniforms.tEquirect.value=n;const o=new Wn(r,s),a=n.minFilter;return n.minFilter===So&&(n.minFilter=yn),new ky(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const bc=new F,By=new F,Hy=new Ve;class Ji{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=bc.subVectors(i,n).cross(By.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(bc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Hy.getNormalMatrix(e),r=this.coplanarPoint(bc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new Hd,ma=new F;class Gd{constructor(e=new Ji,n=new Ji,i=new Ji,r=new Ji,s=new Ji,o=new Ji){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],g=r[8],x=r[9],_=r[10],p=r[11],u=r[12],v=r[13],m=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,p-g,S-u).normalize(),i[1].setComponents(l+s,h+c,p+g,S+u).normalize(),i[2].setComponents(l+o,h+d,p+x,S+v).normalize(),i[3].setComponents(l-o,h-d,p-x,S-v).normalize(),i[4].setComponents(l-a,h-f,p-_,S-m).normalize(),n===oi)i[5].setComponents(l+a,h+f,p+_,S+m).normalize();else if(n===ol)i[5].setComponents(a,f,_,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ma.x=r.normal.x>0?e.max.x:e.min.x,ma.y=r.normal.y>0?e.max.y:e.min.y,ma.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Gy(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,h=c.usage,g=f.byteLength,x=t.createBuffer();t.bindBuffer(d,x),t.bufferData(d,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,d,f){const h=d.array,g=d._updateRange,x=d.updateRanges;if(t.bindBuffer(f,c),g.count===-1&&x.length===0&&t.bufferSubData(f,0,h),x.length!==0){for(let _=0,p=x.length;_<p;_++){const u=x[_];n?t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(f,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):t.bufferSubData(f,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,d),f.version=c.version}}return{get:o,remove:a,update:l}}class Cl extends Sr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,g=[],x=[],_=[],p=[];for(let u=0;u<d;u++){const v=u*h-o;for(let m=0;m<c;m++){const S=m*f-s;x.push(S,-v,0),_.push(0,0,1),p.push(m/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const m=v+c*u,S=v+c*(u+1),R=v+1+c*(u+1),C=v+1+c*u;g.push(m,S,C),g.push(S,R,C)}this.setIndex(g),this.setAttribute("position",new dr(x,3)),this.setAttribute("normal",new dr(_,3)),this.setAttribute("uv",new dr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$y=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zy=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Jy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_S=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xS="gl_FragColor = linearToOutputTexel( gl_FragColor );",yS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,SS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,MS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ES=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,PS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,DS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,US=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,FS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,OS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$S=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,KS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,rM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,sM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,oM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_M=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,wM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,RM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,FM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,HM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$M=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,KM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ZM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_E=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Vy,alphahash_pars_fragment:Wy,alphamap_fragment:jy,alphamap_pars_fragment:Xy,alphatest_fragment:Yy,alphatest_pars_fragment:qy,aomap_fragment:$y,aomap_pars_fragment:Ky,batching_pars_vertex:Zy,batching_vertex:Qy,begin_vertex:Jy,beginnormal_vertex:eS,bsdfs:tS,iridescence_fragment:nS,bumpmap_pars_fragment:iS,clipping_planes_fragment:rS,clipping_planes_pars_fragment:sS,clipping_planes_pars_vertex:oS,clipping_planes_vertex:aS,color_fragment:lS,color_pars_fragment:cS,color_pars_vertex:uS,color_vertex:dS,common:fS,cube_uv_reflection_fragment:hS,defaultnormal_vertex:pS,displacementmap_pars_vertex:mS,displacementmap_vertex:gS,emissivemap_fragment:vS,emissivemap_pars_fragment:_S,colorspace_fragment:xS,colorspace_pars_fragment:yS,envmap_fragment:SS,envmap_common_pars_fragment:MS,envmap_pars_fragment:ES,envmap_pars_vertex:TS,envmap_physical_pars_fragment:FS,envmap_vertex:wS,fog_vertex:AS,fog_pars_vertex:CS,fog_fragment:RS,fog_pars_fragment:bS,gradientmap_pars_fragment:LS,lightmap_fragment:PS,lightmap_pars_fragment:DS,lights_lambert_fragment:IS,lights_lambert_pars_fragment:US,lights_pars_begin:NS,lights_toon_fragment:OS,lights_toon_pars_fragment:kS,lights_phong_fragment:zS,lights_phong_pars_fragment:BS,lights_physical_fragment:HS,lights_physical_pars_fragment:GS,lights_fragment_begin:VS,lights_fragment_maps:WS,lights_fragment_end:jS,logdepthbuf_fragment:XS,logdepthbuf_pars_fragment:YS,logdepthbuf_pars_vertex:qS,logdepthbuf_vertex:$S,map_fragment:KS,map_pars_fragment:ZS,map_particle_fragment:QS,map_particle_pars_fragment:JS,metalnessmap_fragment:eM,metalnessmap_pars_fragment:tM,morphcolor_vertex:nM,morphnormal_vertex:iM,morphtarget_pars_vertex:rM,morphtarget_vertex:sM,normal_fragment_begin:oM,normal_fragment_maps:aM,normal_pars_fragment:lM,normal_pars_vertex:cM,normal_vertex:uM,normalmap_pars_fragment:dM,clearcoat_normal_fragment_begin:fM,clearcoat_normal_fragment_maps:hM,clearcoat_pars_fragment:pM,iridescence_pars_fragment:mM,opaque_fragment:gM,packing:vM,premultiplied_alpha_fragment:_M,project_vertex:xM,dithering_fragment:yM,dithering_pars_fragment:SM,roughnessmap_fragment:MM,roughnessmap_pars_fragment:EM,shadowmap_pars_fragment:TM,shadowmap_pars_vertex:wM,shadowmap_vertex:AM,shadowmask_pars_fragment:CM,skinbase_vertex:RM,skinning_pars_vertex:bM,skinning_vertex:LM,skinnormal_vertex:PM,specularmap_fragment:DM,specularmap_pars_fragment:IM,tonemapping_fragment:UM,tonemapping_pars_fragment:NM,transmission_fragment:FM,transmission_pars_fragment:OM,uv_pars_fragment:kM,uv_pars_vertex:zM,uv_vertex:BM,worldpos_vertex:HM,background_vert:GM,background_frag:VM,backgroundCube_vert:WM,backgroundCube_frag:jM,cube_vert:XM,cube_frag:YM,depth_vert:qM,depth_frag:$M,distanceRGBA_vert:KM,distanceRGBA_frag:ZM,equirect_vert:QM,equirect_frag:JM,linedashed_vert:eE,linedashed_frag:tE,meshbasic_vert:nE,meshbasic_frag:iE,meshlambert_vert:rE,meshlambert_frag:sE,meshmatcap_vert:oE,meshmatcap_frag:aE,meshnormal_vert:lE,meshnormal_frag:cE,meshphong_vert:uE,meshphong_frag:dE,meshphysical_vert:fE,meshphysical_frag:hE,meshtoon_vert:pE,meshtoon_frag:mE,points_vert:gE,points_frag:vE,shadow_vert:_E,shadow_frag:xE,sprite_vert:yE,sprite_frag:SE},ae={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Gn={basic:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new We(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Wt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Wt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new We(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Wt([ae.points,ae.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Wt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Wt([ae.common,ae.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Wt([ae.sprite,ae.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Wt([ae.common,ae.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Wt([ae.lights,ae.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Gn.physical={uniforms:Wt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const ga={r:0,b:0,g:0};function ME(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,d,f=null,h=0,g=null;function x(p,u){let v=!1,m=u.isScene===!0?u.background:null;m&&m.isTexture&&(m=(u.backgroundBlurriness>0?n:e).get(m)),m===null?_(a,l):m&&m.isColor&&(_(m,1),v=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===Tl)?(d===void 0&&(d=new Wn(new ws(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:_s(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=m,d.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=Qe.getTransfer(m.colorSpace)!==rt,(f!==m||h!==m.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,f=m,h=m.version,g=t.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new Wn(new Cl(2,2),new _r({name:"BackgroundMaterial",uniforms:_s(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(m.colorSpace)!==rt,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(f!==m||h!==m.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=m,h=m.version,g=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(ga,_v(t)),i.buffers.color.setClear(ga.r,ga.g,ga.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:x}}function EE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,d=!1;function f(I,V,W,q,P){let b=!1;if(o){const N=_(q,W,V);c!==N&&(c=N,g(c.object)),b=u(I,q,W,P),b&&v(I,q,W,P)}else{const N=V.wireframe===!0;(c.geometry!==q.id||c.program!==W.id||c.wireframe!==N)&&(c.geometry=q.id,c.program=W.id,c.wireframe=N,b=!0)}P!==null&&n.update(P,t.ELEMENT_ARRAY_BUFFER),(b||d)&&(d=!1,U(I,V,W,q),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(P).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function x(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function _(I,V,W){const q=W.wireframe===!0;let P=a[I.id];P===void 0&&(P={},a[I.id]=P);let b=P[V.id];b===void 0&&(b={},P[V.id]=b);let N=b[q];return N===void 0&&(N=p(h()),b[q]=N),N}function p(I){const V=[],W=[],q=[];for(let P=0;P<r;P++)V[P]=0,W[P]=0,q[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:W,attributeDivisors:q,object:I,attributes:{},index:null}}function u(I,V,W,q){const P=c.attributes,b=V.attributes;let N=0;const Y=W.getAttributes();for(const Z in Y)if(Y[Z].location>=0){const $=P[Z];let se=b[Z];if(se===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(se=I.instanceColor)),$===void 0||$.attribute!==se||se&&$.data!==se.data)return!0;N++}return c.attributesNum!==N||c.index!==q}function v(I,V,W,q){const P={},b=V.attributes;let N=0;const Y=W.getAttributes();for(const Z in Y)if(Y[Z].location>=0){let $=b[Z];$===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&($=I.instanceColor));const se={};se.attribute=$,$&&$.data&&(se.data=$.data),P[Z]=se,N++}c.attributes=P,c.attributesNum=N,c.index=q}function m(){const I=c.newAttributes;for(let V=0,W=I.length;V<W;V++)I[V]=0}function S(I){R(I,0)}function R(I,V){const W=c.newAttributes,q=c.enabledAttributes,P=c.attributeDivisors;W[I]=1,q[I]===0&&(t.enableVertexAttribArray(I),q[I]=1),P[I]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,V),P[I]=V)}function C(){const I=c.newAttributes,V=c.enabledAttributes;for(let W=0,q=V.length;W<q;W++)V[W]!==I[W]&&(t.disableVertexAttribArray(W),V[W]=0)}function w(I,V,W,q,P,b,N){N===!0?t.vertexAttribIPointer(I,V,W,P,b):t.vertexAttribPointer(I,V,W,q,P,b)}function U(I,V,W,q){if(i.isWebGL2===!1&&(I.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const P=q.attributes,b=W.getAttributes(),N=V.defaultAttributeValues;for(const Y in b){const Z=b[Y];if(Z.location>=0){let H=P[Y];if(H===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(H=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(H=I.instanceColor)),H!==void 0){const $=H.normalized,se=H.itemSize,de=n.get(H);if(de===void 0)continue;const fe=de.buffer,be=de.type,Ae=de.bytesPerElement,ye=i.isWebGL2===!0&&(be===t.INT||be===t.UNSIGNED_INT||H.gpuType===Jg);if(H.isInterleavedBufferAttribute){const Ue=H.data,z=Ue.stride,ot=H.offset;if(Ue.isInstancedInterleavedBuffer){for(let xe=0;xe<Z.locationSize;xe++)R(Z.location+xe,Ue.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let xe=0;xe<Z.locationSize;xe++)S(Z.location+xe);t.bindBuffer(t.ARRAY_BUFFER,fe);for(let xe=0;xe<Z.locationSize;xe++)w(Z.location+xe,se/Z.locationSize,be,$,z*Ae,(ot+se/Z.locationSize*xe)*Ae,ye)}else{if(H.isInstancedBufferAttribute){for(let Ue=0;Ue<Z.locationSize;Ue++)R(Z.location+Ue,H.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Ue=0;Ue<Z.locationSize;Ue++)S(Z.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,fe);for(let Ue=0;Ue<Z.locationSize;Ue++)w(Z.location+Ue,se/Z.locationSize,be,$,se*Ae,se/Z.locationSize*Ue*Ae,ye)}}else if(N!==void 0){const $=N[Y];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(Z.location,$);break;case 3:t.vertexAttrib3fv(Z.location,$);break;case 4:t.vertexAttrib4fv(Z.location,$);break;default:t.vertexAttrib1fv(Z.location,$)}}}}C()}function M(){K();for(const I in a){const V=a[I];for(const W in V){const q=V[W];for(const P in q)x(q[P].object),delete q[P];delete V[W]}delete a[I]}}function E(I){if(a[I.id]===void 0)return;const V=a[I.id];for(const W in V){const q=V[W];for(const P in q)x(q[P].object),delete q[P];delete V[W]}delete a[I.id]}function k(I){for(const V in a){const W=a[V];if(W[I.id]===void 0)continue;const q=W[I.id];for(const P in q)x(q[P].object),delete q[P];delete W[I.id]}}function K(){J(),d=!0,c!==l&&(c=l,g(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:K,resetDefaultState:J,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:k,initAttributes:m,enableAttribute:S,disableUnusedAttributes:C}}function TE(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,f){t.drawArrays(s,d,f),n.update(f,s,1)}function l(d,f,h){if(h===0)return;let g,x;if(r)g=t,x="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[x](s,d,f,h),n.update(f,s,h)}function c(d,f,h){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<h;x++)this.render(d[x],f[x]);else{g.multiDrawArraysWEBGL(s,d,0,f,0,h);let x=0;for(let _=0;_<h;_++)x+=f[_];n.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function wE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=h>0,S=o||e.has("OES_texture_float"),R=m&&S,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:m,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:C}}function AE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ji,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const g=f.length!==0||h||i!==0||r;return r=h,i=f.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,g){const x=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,u=t.get(f);if(!r||x===null||x.length===0||s&&!p)s?d(null):c();else{const v=s?0:i,m=v*4;let S=u.clippingState||null;l.value=S,S=d(x,h,m,g);for(let R=0;R!==m;++R)S[R]=n[R];u.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,g,x){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,x!==!0||p===null){const u=g+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let m=0,S=g;m!==_;++m,S+=4)o.copy(f[m]).applyMatrix4(v,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function CE(t){let e=new WeakMap;function n(o,a){return a===Uu?o.mapping=ms:a===Nu&&(o.mapping=gs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uu||a===Nu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zy(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Mv extends xv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Zr=4,ap=[.125,.215,.35,.446,.526,.582],nr=20,Lc=new Mv,lp=new We;let Pc=null,Dc=0,Ic=0;const er=(1+Math.sqrt(5))/2,kr=1/er,cp=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,er,kr),new F(0,er,-kr),new F(kr,0,er),new F(-kr,0,er),new F(er,kr,0),new F(-er,kr,0)];class up{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Pc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pc,Dc,Ic),e.scissorTest=!1,va(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Mo,format:Nn,colorSpace:fi,depthBuffer:!1},r=dp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RE(s)),this._blurMaterial=bE(s,e,n)}return r}_compileMaterial(e){const n=new Wn(this._lodPlanes[0],e);this._renderer.compile(n,Lc)}_sceneToCubeUV(e,n,i,r){const a=new un(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(lp),d.toneMapping=Oi,d.autoClear=!1;const g=new mv({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),x=new Wn(new ws,g);let _=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,_=!0):(g.color.copy(lp),_=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const m=this._cubeSize;va(r,v*m,u>2?m:0,m,m),d.setRenderTarget(r),_&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ms||e.mapping===gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Wn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;va(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Lc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=cp[(r-1)%cp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Wn(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*nr-1),_=s/x,p=isFinite(s)?1+Math.floor(d*_):nr;p>nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${nr}`);const u=[];let v=0;for(let w=0;w<nr;++w){const U=w/_,M=Math.exp(-U*U/2);u.push(M),w===0?v+=M:w<p&&(v+=2*M)}for(let w=0;w<u.length;w++)u[w]=u[w]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:m}=this;h.dTheta.value=x,h.mipInt.value=m-i;const S=this._sizeLods[r],R=3*S*(r>m-Zr?r-m+Zr:0),C=4*(this._cubeSize-S);va(n,R,C,3*S,2*S),l.setRenderTarget(n),l.render(f,Lc)}}function RE(t){const e=[],n=[],i=[];let r=t;const s=t-Zr+1+ap.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Zr?l=ap[o-t+Zr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,x=6,_=3,p=2,u=1,v=new Float32Array(_*x*g),m=new Float32Array(p*x*g),S=new Float32Array(u*x*g);for(let C=0;C<g;C++){const w=C%3*2/3-1,U=C>2?0:-1,M=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];v.set(M,_*x*C),m.set(h,p*x*C);const E=[C,C,C,C,C,C];S.set(E,u*x*C)}const R=new Sr;R.setAttribute("position",new Yn(v,_)),R.setAttribute("uv",new Yn(m,p)),R.setAttribute("faceIndex",new Yn(S,u)),e.push(R),r>Zr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function dp(t,e,n){const i=new vr(t,e,n);return i.texture.mapping=Tl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function va(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function bE(t,e,n){const i=new Float32Array(nr),r=new F(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function fp(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function hp(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Vd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Uu||l===Nu,d=l===ms||l===gs;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new up(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new up(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function PE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function DE(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const _=h.morphAttributes[x];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const x in g){const _=g[x];for(let p=0,u=_.length;p<u;p++)e.update(_[p],t.ARRAY_BUFFER)}}function c(f){const h=[],g=f.index,x=f.attributes.position;let _=0;if(g!==null){const v=g.array;_=g.version;for(let m=0,S=v.length;m<S;m+=3){const R=v[m+0],C=v[m+1],w=v[m+2];h.push(R,C,C,w,w,R)}}else if(x!==void 0){const v=x.array;_=x.version;for(let m=0,S=v.length/3-1;m<S;m+=3){const R=m+0,C=m+1,w=m+2;h.push(R,C,C,w,w,R)}}else return;const p=new(cv(h)?vv:gv)(h,1);p.version=_;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function d(f){const h=s.get(f);if(h){const g=f.index;g!==null&&h.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function IE(t,e,n,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function d(g,x){t.drawElements(s,x,a,g*l),n.update(x,s,1)}function f(g,x,_){if(_===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,x,a,g*l,_),n.update(x,s,_)}function h(g,x,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(g[u]/l,x[u]);else{p.multiDrawElementsWEBGL(s,x,0,a,g,0,_);let u=0;for(let v=0;v<_;v++)u+=x[v];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function UE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function NE(t,e){return t[0]-e[0]}function FE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function OE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new lt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let p=s.get(d);if(p===void 0||p.count!==_){let V=function(){J.dispose(),s.delete(d),d.removeEventListener("dispose",V)};var g=V;p!==void 0&&p.texture.dispose();const m=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let M=0;m===!0&&(M=1),S===!0&&(M=2),R===!0&&(M=3);let E=d.attributes.position.count*M,k=1;E>e.maxTextureSize&&(k=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const K=new Float32Array(E*k*4*_),J=new fv(K,E,k,_);J.type=Ci,J.needsUpdate=!0;const I=M*4;for(let W=0;W<_;W++){const q=C[W],P=w[W],b=U[W],N=E*k*4*W;for(let Y=0;Y<q.count;Y++){const Z=Y*I;m===!0&&(o.fromBufferAttribute(q,Y),K[N+Z+0]=o.x,K[N+Z+1]=o.y,K[N+Z+2]=o.z,K[N+Z+3]=0),S===!0&&(o.fromBufferAttribute(P,Y),K[N+Z+4]=o.x,K[N+Z+5]=o.y,K[N+Z+6]=o.z,K[N+Z+7]=0),R===!0&&(o.fromBufferAttribute(b,Y),K[N+Z+8]=o.x,K[N+Z+9]=o.y,K[N+Z+10]=o.z,K[N+Z+11]=b.itemSize===4?o.w:1)}}p={count:_,texture:J,size:new qe(E,k)},s.set(d,p),d.addEventListener("dispose",V)}let u=0;for(let m=0;m<h.length;m++)u+=h[m];const v=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=h===void 0?0:h.length;let _=i[d.id];if(_===void 0||_.length!==x){_=[];for(let S=0;S<x;S++)_[S]=[S,0];i[d.id]=_}for(let S=0;S<x;S++){const R=_[S];R[0]=S,R[1]=h[S]}_.sort(FE);for(let S=0;S<8;S++)S<x&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(NE);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const R=a[S],C=R[0],w=R[1];C!==Number.MAX_SAFE_INTEGER&&w?(p&&d.getAttribute("morphTarget"+S)!==p[C]&&d.setAttribute("morphTarget"+S,p[C]),u&&d.getAttribute("morphNormal"+S)!==u[C]&&d.setAttribute("morphNormal"+S,u[C]),r[S]=w,v+=w):(p&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),u&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),r[S]=0)}const m=d.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",m),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function kE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Ev extends sn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:cr,d!==cr&&d!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===cr&&(i=Ai),i===void 0&&d===vs&&(i=lr),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Tv=new sn,wv=new Ev(1,1);wv.compareFunction=lv;const Av=new fv,Cv=new Sy,Rv=new yv,pp=[],mp=[],gp=new Float32Array(16),vp=new Float32Array(9),_p=new Float32Array(4);function As(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=pp[r];if(s===void 0&&(s=new Float32Array(r),pp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Rl(t,e){let n=mp[e];n===void 0&&(n=new Int32Array(e),mp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function zE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function GE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function VE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(Et(n,i))return;_p.set(i),t.uniformMatrix2fv(this.addr,!1,_p),Tt(n,i)}}function WE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(Et(n,i))return;vp.set(i),t.uniformMatrix3fv(this.addr,!1,vp),Tt(n,i)}}function jE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(Et(n,i))return;gp.set(i),t.uniformMatrix4fv(this.addr,!1,gp),Tt(n,i)}}function XE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function YE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function qE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function KE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function QE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function JE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function e1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?wv:Tv;n.setTexture2D(e||s,r)}function t1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Cv,r)}function n1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Rv,r)}function i1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Av,r)}function r1(t){switch(t){case 5126:return zE;case 35664:return BE;case 35665:return HE;case 35666:return GE;case 35674:return VE;case 35675:return WE;case 35676:return jE;case 5124:case 35670:return XE;case 35667:case 35671:return YE;case 35668:case 35672:return qE;case 35669:case 35673:return $E;case 5125:return KE;case 36294:return ZE;case 36295:return QE;case 36296:return JE;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return t1;case 35680:case 36300:case 36308:case 36293:return n1;case 36289:case 36303:case 36311:case 36292:return i1}}function s1(t,e){t.uniform1fv(this.addr,e)}function o1(t,e){const n=As(e,this.size,2);t.uniform2fv(this.addr,n)}function a1(t,e){const n=As(e,this.size,3);t.uniform3fv(this.addr,n)}function l1(t,e){const n=As(e,this.size,4);t.uniform4fv(this.addr,n)}function c1(t,e){const n=As(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function u1(t,e){const n=As(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function d1(t,e){const n=As(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function f1(t,e){t.uniform1iv(this.addr,e)}function h1(t,e){t.uniform2iv(this.addr,e)}function p1(t,e){t.uniform3iv(this.addr,e)}function m1(t,e){t.uniform4iv(this.addr,e)}function g1(t,e){t.uniform1uiv(this.addr,e)}function v1(t,e){t.uniform2uiv(this.addr,e)}function _1(t,e){t.uniform3uiv(this.addr,e)}function x1(t,e){t.uniform4uiv(this.addr,e)}function y1(t,e,n){const i=this.cache,r=e.length,s=Rl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Tv,s[o])}function S1(t,e,n){const i=this.cache,r=e.length,s=Rl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Cv,s[o])}function M1(t,e,n){const i=this.cache,r=e.length,s=Rl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Rv,s[o])}function E1(t,e,n){const i=this.cache,r=e.length,s=Rl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Av,s[o])}function T1(t){switch(t){case 5126:return s1;case 35664:return o1;case 35665:return a1;case 35666:return l1;case 35674:return c1;case 35675:return u1;case 35676:return d1;case 5124:case 35670:return f1;case 35667:case 35671:return h1;case 35668:case 35672:return p1;case 35669:case 35673:return m1;case 5125:return g1;case 36294:return v1;case 36295:return _1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return y1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return M1;case 36289:case 36303:case 36311:case 36292:return E1}}class w1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=r1(n.type)}}class A1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=T1(n.type)}}class C1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Uc=/(\w+)(\])?(\[|\.)?/g;function xp(t,e){t.seq.push(e),t.map[e.id]=e}function R1(t,e,n){const i=t.name,r=i.length;for(Uc.lastIndex=0;;){const s=Uc.exec(i),o=Uc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){xp(n,c===void 0?new w1(a,t,e):new A1(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new C1(a),xp(n,f)),n=f}}}class Pa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);R1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function yp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const b1=37297;let L1=0;function P1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function D1(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===sl&&n===rl?i="LinearDisplayP3ToLinearSRGB":e===rl&&n===sl&&(i="LinearSRGBToLinearDisplayP3"),t){case fi:case wl:return[i,"LinearTransferOETF"];case Pt:case Bd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Sp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+P1(t.getShaderSource(e),o)}else return r}function I1(t,e){const n=D1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function U1(t,e){let n;switch(e){case jx:n="Linear";break;case Xx:n="Reinhard";break;case Yx:n="OptimizedCineon";break;case Zg:n="ACESFilmic";break;case $x:n="AgX";break;case qx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function N1(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qr).join(`
`)}function F1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Qr).join(`
`)}function O1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function k1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Qr(t){return t!==""}function Mp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ep(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hu(t){return t.replace(z1,H1)}const B1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function H1(t,e){let n=ke[e];if(n===void 0){const i=B1.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hu(n)}const G1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tp(t){return t.replace(G1,V1)}function V1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function W1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===qg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===$g?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function j1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case Tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function Y1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Kg:e="ENVMAP_BLENDING_MULTIPLY";break;case Vx:e="ENVMAP_BLENDING_MIX";break;case Wx:e="ENVMAP_BLENDING_ADD";break}return e}function q1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function $1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=W1(n),c=j1(n),d=X1(n),f=Y1(n),h=q1(n),g=n.isWebGL2?"":N1(n),x=F1(n),_=O1(s),p=r.createProgram();let u,v,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Qr).join(`
`),u.length>0&&(u+=`
`),v=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Qr).join(`
`),v.length>0&&(v+=`
`)):(u=[wp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),v=[g,wp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Oi?"#define TONE_MAPPING":"",n.toneMapping!==Oi?ke.tonemapping_pars_fragment:"",n.toneMapping!==Oi?U1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,I1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qr).join(`
`)),o=Hu(o),o=Mp(o,n),o=Ep(o,n),a=Hu(a),a=Mp(a,n),a=Ep(a,n),o=Tp(o),a=Tp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=m+u+o,R=m+v+a,C=yp(r,r.VERTEX_SHADER,S),w=yp(r,r.FRAGMENT_SHADER,R);r.attachShader(p,C),r.attachShader(p,w),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function U(K){if(t.debug.checkShaderErrors){const J=r.getProgramInfoLog(p).trim(),I=r.getShaderInfoLog(C).trim(),V=r.getShaderInfoLog(w).trim();let W=!0,q=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,C,w);else{const P=Sp(r,C,"vertex"),b=Sp(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+P+`
`+b)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(I===""||V==="")&&(q=!1);q&&(K.diagnostics={runnable:W,programLog:J,vertexShader:{log:I,prefix:u},fragmentShader:{log:V,prefix:v}})}r.deleteShader(C),r.deleteShader(w),M=new Pa(r,p),E=k1(r,p)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let E;this.getAttributes=function(){return E===void 0&&U(this),E};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(p,b1)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=L1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=w,this}let K1=0;class Z1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Q1(e),n.set(e,i)),i}}class Q1{constructor(e){this.id=K1++,this.code=e,this.usedTimes=0}}function J1(t,e,n,i,r,s,o){const a=new hv,l=new Z1,c=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,E,k,K,J){const I=K.fog,V=J.geometry,W=M.isMeshStandardMaterial?K.environment:null,q=(M.isMeshStandardMaterial?n:e).get(M.envMap||W),P=q&&q.mapping===Tl?q.image.height:null,b=x[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const N=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Y=N!==void 0?N.length:0;let Z=0;V.morphAttributes.position!==void 0&&(Z=1),V.morphAttributes.normal!==void 0&&(Z=2),V.morphAttributes.color!==void 0&&(Z=3);let H,$,se,de;if(b){const Gt=Gn[b];H=Gt.vertexShader,$=Gt.fragmentShader}else H=M.vertexShader,$=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),de=l.getFragmentShaderID(M);const fe=t.getRenderTarget(),be=J.isInstancedMesh===!0,Ae=J.isBatchedMesh===!0,ye=!!M.map,Ue=!!M.matcap,z=!!q,ot=!!M.aoMap,xe=!!M.lightMap,Ee=!!M.bumpMap,ge=!!M.normalMap,re=!!M.displacementMap,he=!!M.emissiveMap,A=!!M.metalnessMap,y=!!M.roughnessMap,B=M.anisotropy>0,Q=M.clearcoat>0,ee=M.iridescence>0,ie=M.sheen>0,Se=M.transmission>0,ue=B&&!!M.anisotropyMap,ve=Q&&!!M.clearcoatMap,Le=Q&&!!M.clearcoatNormalMap,ze=Q&&!!M.clearcoatRoughnessMap,te=ee&&!!M.iridescenceMap,Ze=ee&&!!M.iridescenceThicknessMap,je=ie&&!!M.sheenColorMap,Ie=ie&&!!M.sheenRoughnessMap,Te=!!M.specularMap,_e=!!M.specularColorMap,Oe=!!M.specularIntensityMap,$e=Se&&!!M.transmissionMap,ht=Se&&!!M.thicknessMap,He=!!M.gradientMap,oe=!!M.alphaMap,L=M.alphaTest>0,le=!!M.alphaHash,ce=!!M.extensions,Pe=!!V.attributes.uv1,we=!!V.attributes.uv2,Je=!!V.attributes.uv3;let et=Oi;return M.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(et=t.toneMapping),{isWebGL2:d,shaderID:b,shaderType:M.type,shaderName:M.name,vertexShader:H,fragmentShader:$,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:de,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Ae,instancing:be,instancingColor:be&&J.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:fi,map:ye,matcap:Ue,envMap:z,envMapMode:z&&q.mapping,envMapCubeUVHeight:P,aoMap:ot,lightMap:xe,bumpMap:Ee,normalMap:ge,displacementMap:h&&re,emissiveMap:he,normalMapObjectSpace:ge&&M.normalMapType===ay,normalMapTangentSpace:ge&&M.normalMapType===av,metalnessMap:A,roughnessMap:y,anisotropy:B,anisotropyMap:ue,clearcoat:Q,clearcoatMap:ve,clearcoatNormalMap:Le,clearcoatRoughnessMap:ze,iridescence:ee,iridescenceMap:te,iridescenceThicknessMap:Ze,sheen:ie,sheenColorMap:je,sheenRoughnessMap:Ie,specularMap:Te,specularColorMap:_e,specularIntensityMap:Oe,transmission:Se,transmissionMap:$e,thicknessMap:ht,gradientMap:He,opaque:M.transparent===!1&&M.blending===os,alphaMap:oe,alphaTest:L,alphaHash:le,combine:M.combine,mapUv:ye&&_(M.map.channel),aoMapUv:ot&&_(M.aoMap.channel),lightMapUv:xe&&_(M.lightMap.channel),bumpMapUv:Ee&&_(M.bumpMap.channel),normalMapUv:ge&&_(M.normalMap.channel),displacementMapUv:re&&_(M.displacementMap.channel),emissiveMapUv:he&&_(M.emissiveMap.channel),metalnessMapUv:A&&_(M.metalnessMap.channel),roughnessMapUv:y&&_(M.roughnessMap.channel),anisotropyMapUv:ue&&_(M.anisotropyMap.channel),clearcoatMapUv:ve&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Le&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:je&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(M.sheenRoughnessMap.channel),specularMapUv:Te&&_(M.specularMap.channel),specularColorMapUv:_e&&_(M.specularColorMap.channel),specularIntensityMapUv:Oe&&_(M.specularIntensityMap.channel),transmissionMapUv:$e&&_(M.transmissionMap.channel),thicknessMapUv:ht&&_(M.thicknessMap.channel),alphaMapUv:oe&&_(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ge||B),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:we,vertexUv3s:Je,pointsUvs:J.isPoints===!0&&!!V.attributes.uv&&(ye||oe),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:Z,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:et,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ye&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ii,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ce&&M.extensions.derivatives===!0,extensionFragDepth:ce&&M.extensions.fragDepth===!0,extensionDrawBuffers:ce&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const k in M.defines)E.push(k),E.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(v(E,M),m(E,M),E.push(t.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function v(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function m(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function S(M){const E=x[M.type];let k;if(E){const K=Gn[E];k=Ny.clone(K.uniforms)}else k=M.uniforms;return k}function R(M,E){let k;for(let K=0,J=c.length;K<J;K++){const I=c[K];if(I.cacheKey===E){k=I,++k.usedTimes;break}}return k===void 0&&(k=new $1(t,E,M,s),c.push(k)),k}function C(M){if(--M.usedTimes===0){const E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function w(M){l.remove(M)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:R,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:U}}function eT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function tT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ap(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Cp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,g,x,_,p){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:g,groupOrder:x,renderOrder:f.renderOrder,z:_,group:p},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=g,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=_,u.group=p),e++,u}function a(f,h,g,x,_,p){const u=o(f,h,g,x,_,p);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(f,h,g,x,_,p){const u=o(f,h,g,x,_,p);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||tT),i.length>1&&i.sort(h||Ap),r.length>1&&r.sort(h||Ap)}function d(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function nT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Cp,t.set(i,[o])):r>=s.length?(o=new Cp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function iT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new We};break;case"SpotLight":n={position:new F,direction:new F,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function rT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let sT=0;function oT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function aT(t,e){const n=new iT,i=rT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new F);const s=new F,o=new yt,a=new yt;function l(d,f){let h=0,g=0,x=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let _=0,p=0,u=0,v=0,m=0,S=0,R=0,C=0,w=0,U=0,M=0;d.sort(oT);const E=f===!0?Math.PI:1;for(let K=0,J=d.length;K<J;K++){const I=d[K],V=I.color,W=I.intensity,q=I.distance,P=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=V.r*W*E,g+=V.g*W*E,x+=V.b*W*E;else if(I.isLightProbe){for(let b=0;b<9;b++)r.probe[b].addScaledVector(I.sh.coefficients[b],W);M++}else if(I.isDirectionalLight){const b=n.get(I);if(b.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){const N=I.shadow,Y=i.get(I);Y.shadowBias=N.bias,Y.shadowNormalBias=N.normalBias,Y.shadowRadius=N.radius,Y.shadowMapSize=N.mapSize,r.directionalShadow[_]=Y,r.directionalShadowMap[_]=P,r.directionalShadowMatrix[_]=I.shadow.matrix,S++}r.directional[_]=b,_++}else if(I.isSpotLight){const b=n.get(I);b.position.setFromMatrixPosition(I.matrixWorld),b.color.copy(V).multiplyScalar(W*E),b.distance=q,b.coneCos=Math.cos(I.angle),b.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),b.decay=I.decay,r.spot[u]=b;const N=I.shadow;if(I.map&&(r.spotLightMap[w]=I.map,w++,N.updateMatrices(I),I.castShadow&&U++),r.spotLightMatrix[u]=N.matrix,I.castShadow){const Y=i.get(I);Y.shadowBias=N.bias,Y.shadowNormalBias=N.normalBias,Y.shadowRadius=N.radius,Y.shadowMapSize=N.mapSize,r.spotShadow[u]=Y,r.spotShadowMap[u]=P,C++}u++}else if(I.isRectAreaLight){const b=n.get(I);b.color.copy(V).multiplyScalar(W),b.halfWidth.set(I.width*.5,0,0),b.halfHeight.set(0,I.height*.5,0),r.rectArea[v]=b,v++}else if(I.isPointLight){const b=n.get(I);if(b.color.copy(I.color).multiplyScalar(I.intensity*E),b.distance=I.distance,b.decay=I.decay,I.castShadow){const N=I.shadow,Y=i.get(I);Y.shadowBias=N.bias,Y.shadowNormalBias=N.normalBias,Y.shadowRadius=N.radius,Y.shadowMapSize=N.mapSize,Y.shadowCameraNear=N.camera.near,Y.shadowCameraFar=N.camera.far,r.pointShadow[p]=Y,r.pointShadowMap[p]=P,r.pointShadowMatrix[p]=I.shadow.matrix,R++}r.point[p]=b,p++}else if(I.isHemisphereLight){const b=n.get(I);b.skyColor.copy(I.color).multiplyScalar(W*E),b.groundColor.copy(I.groundColor).multiplyScalar(W*E),r.hemi[m]=b,m++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=g,r.ambient[2]=x;const k=r.hash;(k.directionalLength!==_||k.pointLength!==p||k.spotLength!==u||k.rectAreaLength!==v||k.hemiLength!==m||k.numDirectionalShadows!==S||k.numPointShadows!==R||k.numSpotShadows!==C||k.numSpotMaps!==w||k.numLightProbes!==M)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=v,r.point.length=p,r.hemi.length=m,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=C+w-U,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=M,k.directionalLength=_,k.pointLength=p,k.spotLength=u,k.rectAreaLength=v,k.hemiLength=m,k.numDirectionalShadows=S,k.numPointShadows=R,k.numSpotShadows=C,k.numSpotMaps=w,k.numLightProbes=M,r.version=sT++)}function c(d,f){let h=0,g=0,x=0,_=0,p=0;const u=f.matrixWorldInverse;for(let v=0,m=d.length;v<m;v++){const S=d[v];if(S.isDirectionalLight){const R=r.directional[h];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),h++}else if(S.isSpotLight){const R=r.spot[x];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),x++}else if(S.isRectAreaLight){const R=r.rectArea[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(u),a.identity(),o.copy(S.matrixWorld),o.premultiply(u),a.extractRotation(o),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(u),g++}else if(S.isHemisphereLight){const R=r.hemi[p];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Rp(t,e){const n=new aT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function lT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Rp(t,e),n.set(s,[l])):o>=a.length?(l=new Rp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class cT extends Ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uT extends Ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hT(t,e,n){let i=new Gd;const r=new qe,s=new qe,o=new lt,a=new cT({depthPacking:oy}),l=new uT,c={},d=n.maxTextureSize,f={[Hi]:rn,[rn]:Hi,[ii]:ii},h=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:dT,fragmentShader:fT}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const x=new Sr;x.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Wn(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qg;let u=this.type;this.render=function(C,w,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const M=t.getRenderTarget(),E=t.getActiveCubeFace(),k=t.getActiveMipmapLevel(),K=t.state;K.setBlending(Fi),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const J=u!==ei&&this.type===ei,I=u===ei&&this.type!==ei;for(let V=0,W=C.length;V<W;V++){const q=C[V],P=q.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const b=P.getFrameExtents();if(r.multiply(b),s.copy(P.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/b.x),r.x=s.x*b.x,P.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/b.y),r.y=s.y*b.y,P.mapSize.y=s.y)),P.map===null||J===!0||I===!0){const Y=this.type!==ei?{minFilter:Xt,magFilter:Xt}:{};P.map!==null&&P.map.dispose(),P.map=new vr(r.x,r.y,Y),P.map.texture.name=q.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const N=P.getViewportCount();for(let Y=0;Y<N;Y++){const Z=P.getViewport(Y);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),K.viewport(o),P.updateMatrices(q,Y),i=P.getFrustum(),S(w,U,P.camera,q,this.type)}P.isPointLightShadow!==!0&&this.type===ei&&v(P,U),P.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(M,E,k)};function v(C,w){const U=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new vr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(w,null,U,h,_,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(w,null,U,g,_,null)}function m(C,w,U,M){let E=null;const k=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(k!==void 0)E=k;else if(E=U.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const K=E.uuid,J=w.uuid;let I=c[K];I===void 0&&(I={},c[K]=I);let V=I[J];V===void 0&&(V=E.clone(),I[J]=V,w.addEventListener("dispose",R)),E=V}if(E.visible=w.visible,E.wireframe=w.wireframe,M===ei?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:f[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const K=t.properties.get(E);K.light=U}return E}function S(C,w,U,M,E){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===ei)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const J=e.update(C),I=C.material;if(Array.isArray(I)){const V=J.groups;for(let W=0,q=V.length;W<q;W++){const P=V[W],b=I[P.materialIndex];if(b&&b.visible){const N=m(C,b,M,E);C.onBeforeShadow(t,C,w,U,J,N,P),t.renderBufferDirect(U,null,J,N,C,P),C.onAfterShadow(t,C,w,U,J,N,P)}}}else if(I.visible){const V=m(C,I,M,E);C.onBeforeShadow(t,C,w,U,J,V,null),t.renderBufferDirect(U,null,J,V,C,null),C.onAfterShadow(t,C,w,U,J,V,null)}}const K=C.children;for(let J=0,I=K.length;J<I;J++)S(K[J],w,U,M,E)}function R(C){C.target.removeEventListener("dispose",R);for(const U in c){const M=c[U],E=C.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function pT(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const le=new lt;let ce=null;const Pe=new lt(0,0,0,0);return{setMask:function(we){ce!==we&&!L&&(t.colorMask(we,we,we,we),ce=we)},setLocked:function(we){L=we},setClear:function(we,Je,et,wt,Gt){Gt===!0&&(we*=wt,Je*=wt,et*=wt),le.set(we,Je,et,wt),Pe.equals(le)===!1&&(t.clearColor(we,Je,et,wt),Pe.copy(le))},reset:function(){L=!1,ce=null,Pe.set(-1,0,0,0)}}}function s(){let L=!1,le=null,ce=null,Pe=null;return{setTest:function(we){we?Ae(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(we){le!==we&&!L&&(t.depthMask(we),le=we)},setFunc:function(we){if(ce!==we){switch(we){case Fx:t.depthFunc(t.NEVER);break;case Ox:t.depthFunc(t.ALWAYS);break;case kx:t.depthFunc(t.LESS);break;case nl:t.depthFunc(t.LEQUAL);break;case zx:t.depthFunc(t.EQUAL);break;case Bx:t.depthFunc(t.GEQUAL);break;case Hx:t.depthFunc(t.GREATER);break;case Gx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ce=we}},setLocked:function(we){L=we},setClear:function(we){Pe!==we&&(t.clearDepth(we),Pe=we)},reset:function(){L=!1,le=null,ce=null,Pe=null}}}function o(){let L=!1,le=null,ce=null,Pe=null,we=null,Je=null,et=null,wt=null,Gt=null;return{setTest:function(tt){L||(tt?Ae(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(tt){le!==tt&&!L&&(t.stencilMask(tt),le=tt)},setFunc:function(tt,Vt,zn){(ce!==tt||Pe!==Vt||we!==zn)&&(t.stencilFunc(tt,Vt,zn),ce=tt,Pe=Vt,we=zn)},setOp:function(tt,Vt,zn){(Je!==tt||et!==Vt||wt!==zn)&&(t.stencilOp(tt,Vt,zn),Je=tt,et=Vt,wt=zn)},setLocked:function(tt){L=tt},setClear:function(tt){Gt!==tt&&(t.clearStencil(tt),Gt=tt)},reset:function(){L=!1,le=null,ce=null,Pe=null,we=null,Je=null,et=null,wt=null,Gt=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,f=new WeakMap;let h={},g={},x=new WeakMap,_=[],p=null,u=!1,v=null,m=null,S=null,R=null,C=null,w=null,U=null,M=new We(0,0,0),E=0,k=!1,K=null,J=null,I=null,V=null,W=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,b=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(b=parseFloat(/^WebGL (\d)/.exec(N)[1]),P=b>=1):N.indexOf("OpenGL ES")!==-1&&(b=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),P=b>=2);let Y=null,Z={};const H=t.getParameter(t.SCISSOR_BOX),$=t.getParameter(t.VIEWPORT),se=new lt().fromArray(H),de=new lt().fromArray($);function fe(L,le,ce,Pe){const we=new Uint8Array(4),Je=t.createTexture();t.bindTexture(L,Je),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<ce;et++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(le,0,t.RGBA,1,1,Pe,0,t.RGBA,t.UNSIGNED_BYTE,we):t.texImage2D(le+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,we);return Je}const be={};be[t.TEXTURE_2D]=fe(t.TEXTURE_2D,t.TEXTURE_2D,1),be[t.TEXTURE_CUBE_MAP]=fe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(be[t.TEXTURE_2D_ARRAY]=fe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),be[t.TEXTURE_3D]=fe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ae(t.DEPTH_TEST),l.setFunc(nl),he(!1),A(ch),Ae(t.CULL_FACE),ge(Fi);function Ae(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function ye(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function Ue(L,le){return g[L]!==le?(t.bindFramebuffer(L,le),g[L]=le,i&&(L===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=le),L===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=le)),!0):!1}function z(L,le){let ce=_,Pe=!1;if(L)if(ce=x.get(le),ce===void 0&&(ce=[],x.set(le,ce)),L.isWebGLMultipleRenderTargets){const we=L.texture;if(ce.length!==we.length||ce[0]!==t.COLOR_ATTACHMENT0){for(let Je=0,et=we.length;Je<et;Je++)ce[Je]=t.COLOR_ATTACHMENT0+Je;ce.length=we.length,Pe=!0}}else ce[0]!==t.COLOR_ATTACHMENT0&&(ce[0]=t.COLOR_ATTACHMENT0,Pe=!0);else ce[0]!==t.BACK&&(ce[0]=t.BACK,Pe=!0);Pe&&(n.isWebGL2?t.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function ot(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const xe={[tr]:t.FUNC_ADD,[Sx]:t.FUNC_SUBTRACT,[Mx]:t.FUNC_REVERSE_SUBTRACT};if(i)xe[hh]=t.MIN,xe[ph]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(xe[hh]=L.MIN_EXT,xe[ph]=L.MAX_EXT)}const Ee={[Ex]:t.ZERO,[Tx]:t.ONE,[wx]:t.SRC_COLOR,[Du]:t.SRC_ALPHA,[Px]:t.SRC_ALPHA_SATURATE,[bx]:t.DST_COLOR,[Cx]:t.DST_ALPHA,[Ax]:t.ONE_MINUS_SRC_COLOR,[Iu]:t.ONE_MINUS_SRC_ALPHA,[Lx]:t.ONE_MINUS_DST_COLOR,[Rx]:t.ONE_MINUS_DST_ALPHA,[Dx]:t.CONSTANT_COLOR,[Ix]:t.ONE_MINUS_CONSTANT_COLOR,[Ux]:t.CONSTANT_ALPHA,[Nx]:t.ONE_MINUS_CONSTANT_ALPHA};function ge(L,le,ce,Pe,we,Je,et,wt,Gt,tt){if(L===Fi){u===!0&&(ye(t.BLEND),u=!1);return}if(u===!1&&(Ae(t.BLEND),u=!0),L!==yx){if(L!==v||tt!==k){if((m!==tr||C!==tr)&&(t.blendEquation(t.FUNC_ADD),m=tr,C=tr),tt)switch(L){case os:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case uh:t.blendFunc(t.ONE,t.ONE);break;case dh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case os:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case uh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case dh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,R=null,w=null,U=null,M.set(0,0,0),E=0,v=L,k=tt}return}we=we||le,Je=Je||ce,et=et||Pe,(le!==m||we!==C)&&(t.blendEquationSeparate(xe[le],xe[we]),m=le,C=we),(ce!==S||Pe!==R||Je!==w||et!==U)&&(t.blendFuncSeparate(Ee[ce],Ee[Pe],Ee[Je],Ee[et]),S=ce,R=Pe,w=Je,U=et),(wt.equals(M)===!1||Gt!==E)&&(t.blendColor(wt.r,wt.g,wt.b,Gt),M.copy(wt),E=Gt),v=L,k=!1}function re(L,le){L.side===ii?ye(t.CULL_FACE):Ae(t.CULL_FACE);let ce=L.side===rn;le&&(ce=!ce),he(ce),L.blending===os&&L.transparent===!1?ge(Fi):ge(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Pe=L.stencilWrite;c.setTest(Pe),Pe&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),B(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ae(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function he(L){K!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),K=L)}function A(L){L!==_x?(Ae(t.CULL_FACE),L!==J&&(L===ch?t.cullFace(t.BACK):L===xx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),J=L}function y(L){L!==I&&(P&&t.lineWidth(L),I=L)}function B(L,le,ce){L?(Ae(t.POLYGON_OFFSET_FILL),(V!==le||W!==ce)&&(t.polygonOffset(le,ce),V=le,W=ce)):ye(t.POLYGON_OFFSET_FILL)}function Q(L){L?Ae(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function ee(L){L===void 0&&(L=t.TEXTURE0+q-1),Y!==L&&(t.activeTexture(L),Y=L)}function ie(L,le,ce){ce===void 0&&(Y===null?ce=t.TEXTURE0+q-1:ce=Y);let Pe=Z[ce];Pe===void 0&&(Pe={type:void 0,texture:void 0},Z[ce]=Pe),(Pe.type!==L||Pe.texture!==le)&&(Y!==ce&&(t.activeTexture(ce),Y=ce),t.bindTexture(L,le||be[L]),Pe.type=L,Pe.texture=le)}function Se(){const L=Z[Y];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ue(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ze(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function je(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(L){se.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),se.copy(L))}function $e(L){de.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),de.copy(L))}function ht(L,le){let ce=f.get(le);ce===void 0&&(ce=new WeakMap,f.set(le,ce));let Pe=ce.get(L);Pe===void 0&&(Pe=t.getUniformBlockIndex(le,L.name),ce.set(L,Pe))}function He(L,le){const Pe=f.get(le).get(L);d.get(le)!==Pe&&(t.uniformBlockBinding(le,Pe,L.__bindingPointIndex),d.set(le,Pe))}function oe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},Y=null,Z={},g={},x=new WeakMap,_=[],p=null,u=!1,v=null,m=null,S=null,R=null,C=null,w=null,U=null,M=new We(0,0,0),E=0,k=!1,K=null,J=null,I=null,V=null,W=null,se.set(0,0,t.canvas.width,t.canvas.height),de.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ae,disable:ye,bindFramebuffer:Ue,drawBuffers:z,useProgram:ot,setBlending:ge,setMaterial:re,setFlipSided:he,setCullFace:A,setLineWidth:y,setPolygonOffset:B,setScissorTest:Q,activeTexture:ee,bindTexture:ie,unbindTexture:Se,compressedTexImage2D:ue,compressedTexImage3D:ve,texImage2D:Te,texImage3D:_e,updateUBOMapping:ht,uniformBlockBinding:He,texStorage2D:je,texStorage3D:Ie,texSubImage2D:Le,texSubImage3D:ze,compressedTexSubImage2D:te,compressedTexSubImage3D:Ze,scissor:Oe,viewport:$e,reset:oe}}function mT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,y){return g?new OffscreenCanvas(A,y):al("canvas")}function _(A,y,B,Q){let ee=1;if((A.width>Q||A.height>Q)&&(ee=Q/Math.max(A.width,A.height)),ee<1||y===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ie=y?Bu:Math.floor,Se=ie(ee*A.width),ue=ie(ee*A.height);f===void 0&&(f=x(Se,ue));const ve=B?x(Se,ue):f;return ve.width=Se,ve.height=ue,ve.getContext("2d").drawImage(A,0,0,Se,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Se+"x"+ue+")."),ve}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return Wh(A.width)&&Wh(A.height)}function u(A){return a?!1:A.wrapS!==Un||A.wrapT!==Un||A.minFilter!==Xt&&A.minFilter!==yn}function v(A,y){return A.generateMipmaps&&y&&A.minFilter!==Xt&&A.minFilter!==yn}function m(A){t.generateMipmap(A)}function S(A,y,B,Q,ee=!1){if(a===!1)return y;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ie=y;if(y===t.RED&&(B===t.FLOAT&&(ie=t.R32F),B===t.HALF_FLOAT&&(ie=t.R16F),B===t.UNSIGNED_BYTE&&(ie=t.R8)),y===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(ie=t.R8UI),B===t.UNSIGNED_SHORT&&(ie=t.R16UI),B===t.UNSIGNED_INT&&(ie=t.R32UI),B===t.BYTE&&(ie=t.R8I),B===t.SHORT&&(ie=t.R16I),B===t.INT&&(ie=t.R32I)),y===t.RG&&(B===t.FLOAT&&(ie=t.RG32F),B===t.HALF_FLOAT&&(ie=t.RG16F),B===t.UNSIGNED_BYTE&&(ie=t.RG8)),y===t.RGBA){const Se=ee?il:Qe.getTransfer(Q);B===t.FLOAT&&(ie=t.RGBA32F),B===t.HALF_FLOAT&&(ie=t.RGBA16F),B===t.UNSIGNED_BYTE&&(ie=Se===rt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function R(A,y,B){return v(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==Xt&&A.minFilter!==yn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function C(A){return A===Xt||A===mh||A===sc?t.NEAREST:t.LINEAR}function w(A){const y=A.target;y.removeEventListener("dispose",w),M(y),y.isVideoTexture&&d.delete(y)}function U(A){const y=A.target;y.removeEventListener("dispose",U),k(y)}function M(A){const y=i.get(A);if(y.__webglInit===void 0)return;const B=A.source,Q=h.get(B);if(Q){const ee=Q[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(A),Object.keys(Q).length===0&&h.delete(B)}i.remove(A)}function E(A){const y=i.get(A);t.deleteTexture(y.__webglTexture);const B=A.source,Q=h.get(B);delete Q[y.__cacheKey],o.memory.textures--}function k(A){const y=A.texture,B=i.get(A),Q=i.get(y);if(Q.__webglTexture!==void 0&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(B.__webglFramebuffer[ee]))for(let ie=0;ie<B.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(B.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(B.__webglFramebuffer[ee]);B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[ee])}else{if(Array.isArray(B.__webglFramebuffer))for(let ee=0;ee<B.__webglFramebuffer.length;ee++)t.deleteFramebuffer(B.__webglFramebuffer[ee]);else t.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ee=0;ee<B.__webglColorRenderbuffer.length;ee++)B.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[ee]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ee=0,ie=y.length;ee<ie;ee++){const Se=i.get(y[ee]);Se.__webglTexture&&(t.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(y[ee])}i.remove(y),i.remove(A)}let K=0;function J(){K=0}function I(){const A=K;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),K+=1,A}function V(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function W(A,y){const B=i.get(A);if(A.isVideoTexture&&re(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(B,A,y);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+y)}function q(A,y){const B=i.get(A);if(A.version>0&&B.__version!==A.version){se(B,A,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+y)}function P(A,y){const B=i.get(A);if(A.version>0&&B.__version!==A.version){se(B,A,y);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+y)}function b(A,y){const B=i.get(A);if(A.version>0&&B.__version!==A.version){de(B,A,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+y)}const N={[Fu]:t.REPEAT,[Un]:t.CLAMP_TO_EDGE,[Ou]:t.MIRRORED_REPEAT},Y={[Xt]:t.NEAREST,[mh]:t.NEAREST_MIPMAP_NEAREST,[sc]:t.NEAREST_MIPMAP_LINEAR,[yn]:t.LINEAR,[Kx]:t.LINEAR_MIPMAP_NEAREST,[So]:t.LINEAR_MIPMAP_LINEAR},Z={[ly]:t.NEVER,[py]:t.ALWAYS,[cy]:t.LESS,[lv]:t.LEQUAL,[uy]:t.EQUAL,[hy]:t.GEQUAL,[dy]:t.GREATER,[fy]:t.NOTEQUAL};function H(A,y,B){if(B?(t.texParameteri(A,t.TEXTURE_WRAP_S,N[y.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,N[y.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,N[y.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Y[y.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Y[y.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(y.wrapS!==Un||y.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,C(y.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,C(y.minFilter)),y.minFilter!==Xt&&y.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Z[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Xt||y.minFilter!==sc&&y.minFilter!==So||y.type===Ci&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Mo&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(t.texParameterf(A,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function $(A,y){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",w));const Q=y.source;let ee=h.get(Q);ee===void 0&&(ee={},h.set(Q,ee));const ie=V(y);if(ie!==A.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[ie].usedTimes++;const Se=ee[A.__cacheKey];Se!==void 0&&(ee[A.__cacheKey].usedTimes--,Se.usedTimes===0&&E(y)),A.__cacheKey=ie,A.__webglTexture=ee[ie].texture}return B}function se(A,y,B){let Q=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=t.TEXTURE_3D);const ee=$(A,y),ie=y.source;n.bindTexture(Q,A.__webglTexture,t.TEXTURE0+B);const Se=i.get(ie);if(ie.version!==Se.__version||ee===!0){n.activeTexture(t.TEXTURE0+B);const ue=Qe.getPrimaries(Qe.workingColorSpace),ve=y.colorSpace===Sn?null:Qe.getPrimaries(y.colorSpace),Le=y.colorSpace===Sn||ue===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const ze=u(y)&&p(y.image)===!1;let te=_(y.image,ze,!1,r.maxTextureSize);te=he(y,te);const Ze=p(te)||a,je=s.convert(y.format,y.colorSpace);let Ie=s.convert(y.type),Te=S(y.internalFormat,je,Ie,y.colorSpace,y.isVideoTexture);H(Q,y,Ze);let _e;const Oe=y.mipmaps,$e=a&&y.isVideoTexture!==!0&&Te!==sv,ht=Se.__version===void 0||ee===!0,He=R(y,te,Ze);if(y.isDepthTexture)Te=t.DEPTH_COMPONENT,a?y.type===Ci?Te=t.DEPTH_COMPONENT32F:y.type===Ai?Te=t.DEPTH_COMPONENT24:y.type===lr?Te=t.DEPTH24_STENCIL8:Te=t.DEPTH_COMPONENT16:y.type===Ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===cr&&Te===t.DEPTH_COMPONENT&&y.type!==zd&&y.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Ai,Ie=s.convert(y.type)),y.format===vs&&Te===t.DEPTH_COMPONENT&&(Te=t.DEPTH_STENCIL,y.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=lr,Ie=s.convert(y.type))),ht&&($e?n.texStorage2D(t.TEXTURE_2D,1,Te,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Te,te.width,te.height,0,je,Ie,null));else if(y.isDataTexture)if(Oe.length>0&&Ze){$e&&ht&&n.texStorage2D(t.TEXTURE_2D,He,Te,Oe[0].width,Oe[0].height);for(let oe=0,L=Oe.length;oe<L;oe++)_e=Oe[oe],$e?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,_e.width,_e.height,je,Ie,_e.data):n.texImage2D(t.TEXTURE_2D,oe,Te,_e.width,_e.height,0,je,Ie,_e.data);y.generateMipmaps=!1}else $e?(ht&&n.texStorage2D(t.TEXTURE_2D,He,Te,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,je,Ie,te.data)):n.texImage2D(t.TEXTURE_2D,0,Te,te.width,te.height,0,je,Ie,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){$e&&ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,Te,Oe[0].width,Oe[0].height,te.depth);for(let oe=0,L=Oe.length;oe<L;oe++)_e=Oe[oe],y.format!==Nn?je!==null?$e?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,_e.width,_e.height,te.depth,je,_e.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,Te,_e.width,_e.height,te.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,_e.width,_e.height,te.depth,je,Ie,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,Te,_e.width,_e.height,te.depth,0,je,Ie,_e.data)}else{$e&&ht&&n.texStorage2D(t.TEXTURE_2D,He,Te,Oe[0].width,Oe[0].height);for(let oe=0,L=Oe.length;oe<L;oe++)_e=Oe[oe],y.format!==Nn?je!==null?$e?n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,_e.width,_e.height,je,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,Te,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,_e.width,_e.height,je,Ie,_e.data):n.texImage2D(t.TEXTURE_2D,oe,Te,_e.width,_e.height,0,je,Ie,_e.data)}else if(y.isDataArrayTexture)$e?(ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,Te,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,je,Ie,te.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,te.width,te.height,te.depth,0,je,Ie,te.data);else if(y.isData3DTexture)$e?(ht&&n.texStorage3D(t.TEXTURE_3D,He,Te,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,je,Ie,te.data)):n.texImage3D(t.TEXTURE_3D,0,Te,te.width,te.height,te.depth,0,je,Ie,te.data);else if(y.isFramebufferTexture){if(ht)if($e)n.texStorage2D(t.TEXTURE_2D,He,Te,te.width,te.height);else{let oe=te.width,L=te.height;for(let le=0;le<He;le++)n.texImage2D(t.TEXTURE_2D,le,Te,oe,L,0,je,Ie,null),oe>>=1,L>>=1}}else if(Oe.length>0&&Ze){$e&&ht&&n.texStorage2D(t.TEXTURE_2D,He,Te,Oe[0].width,Oe[0].height);for(let oe=0,L=Oe.length;oe<L;oe++)_e=Oe[oe],$e?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,je,Ie,_e):n.texImage2D(t.TEXTURE_2D,oe,Te,je,Ie,_e);y.generateMipmaps=!1}else $e?(ht&&n.texStorage2D(t.TEXTURE_2D,He,Te,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,je,Ie,te)):n.texImage2D(t.TEXTURE_2D,0,Te,je,Ie,te);v(y,Ze)&&m(Q),Se.__version=ie.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function de(A,y,B){if(y.image.length!==6)return;const Q=$(A,y),ee=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+B);const ie=i.get(ee);if(ee.version!==ie.__version||Q===!0){n.activeTexture(t.TEXTURE0+B);const Se=Qe.getPrimaries(Qe.workingColorSpace),ue=y.colorSpace===Sn?null:Qe.getPrimaries(y.colorSpace),ve=y.colorSpace===Sn||Se===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Le=y.isCompressedTexture||y.image[0].isCompressedTexture,ze=y.image[0]&&y.image[0].isDataTexture,te=[];for(let oe=0;oe<6;oe++)!Le&&!ze?te[oe]=_(y.image[oe],!1,!0,r.maxCubemapSize):te[oe]=ze?y.image[oe].image:y.image[oe],te[oe]=he(y,te[oe]);const Ze=te[0],je=p(Ze)||a,Ie=s.convert(y.format,y.colorSpace),Te=s.convert(y.type),_e=S(y.internalFormat,Ie,Te,y.colorSpace),Oe=a&&y.isVideoTexture!==!0,$e=ie.__version===void 0||Q===!0;let ht=R(y,Ze,je);H(t.TEXTURE_CUBE_MAP,y,je);let He;if(Le){Oe&&$e&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ht,_e,Ze.width,Ze.height);for(let oe=0;oe<6;oe++){He=te[oe].mipmaps;for(let L=0;L<He.length;L++){const le=He[L];y.format!==Nn?Ie!==null?Oe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L,0,0,le.width,le.height,Ie,le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L,_e,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L,0,0,le.width,le.height,Ie,Te,le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L,_e,le.width,le.height,0,Ie,Te,le.data)}}}else{He=y.mipmaps,Oe&&$e&&(He.length>0&&ht++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ht,_e,te[0].width,te[0].height));for(let oe=0;oe<6;oe++)if(ze){Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,te[oe].width,te[oe].height,Ie,Te,te[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,_e,te[oe].width,te[oe].height,0,Ie,Te,te[oe].data);for(let L=0;L<He.length;L++){const ce=He[L].image[oe].image;Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L+1,0,0,ce.width,ce.height,Ie,Te,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L+1,_e,ce.width,ce.height,0,Ie,Te,ce.data)}}else{Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ie,Te,te[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,_e,Ie,Te,te[oe]);for(let L=0;L<He.length;L++){const le=He[L];Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L+1,0,0,Ie,Te,le.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L+1,_e,Ie,Te,le.image[oe])}}}v(y,je)&&m(t.TEXTURE_CUBE_MAP),ie.__version=ee.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function fe(A,y,B,Q,ee,ie){const Se=s.convert(B.format,B.colorSpace),ue=s.convert(B.type),ve=S(B.internalFormat,Se,ue,B.colorSpace);if(!i.get(y).__hasExternalTextures){const ze=Math.max(1,y.width>>ie),te=Math.max(1,y.height>>ie);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,ie,ve,ze,te,y.depth,0,Se,ue,null):n.texImage2D(ee,ie,ve,ze,te,0,Se,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),ge(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ee,i.get(B).__webglTexture,0,Ee(y)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ee,i.get(B).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(A,y,B){if(t.bindRenderbuffer(t.RENDERBUFFER,A),y.depthBuffer&&!y.stencilBuffer){let Q=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(B||ge(y)){const ee=y.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Ci?Q=t.DEPTH_COMPONENT32F:ee.type===Ai&&(Q=t.DEPTH_COMPONENT24));const ie=Ee(y);ge(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,Q,y.width,y.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,Q,y.width,y.height)}else t.renderbufferStorage(t.RENDERBUFFER,Q,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(y.depthBuffer&&y.stencilBuffer){const Q=Ee(y);B&&ge(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,y.width,y.height):ge(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const Q=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ee=0;ee<Q.length;ee++){const ie=Q[ee],Se=s.convert(ie.format,ie.colorSpace),ue=s.convert(ie.type),ve=S(ie.internalFormat,Se,ue,ie.colorSpace),Le=Ee(y);B&&ge(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,ve,y.width,y.height):ge(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,ve,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ve,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ae(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);const Q=i.get(y.depthTexture).__webglTexture,ee=Ee(y);if(y.depthTexture.format===cr)ge(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(y.depthTexture.format===vs)ge(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ye(A){const y=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ae(y.__webglFramebuffer,A)}else if(B){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]=t.createRenderbuffer(),be(y.__webglDepthbuffer[Q],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),be(y.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(A,y,B){const Q=i.get(A);y!==void 0&&fe(Q.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&ye(A)}function z(A){const y=A.texture,B=i.get(A),Q=i.get(y);A.addEventListener("dispose",U),A.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=y.version,o.memory.textures++);const ee=A.isWebGLCubeRenderTarget===!0,ie=A.isWebGLMultipleRenderTargets===!0,Se=p(A)||a;if(ee){B.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[ue]=[];for(let ve=0;ve<y.mipmaps.length;ve++)B.__webglFramebuffer[ue][ve]=t.createFramebuffer()}else B.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let ue=0;ue<y.mipmaps.length;ue++)B.__webglFramebuffer[ue]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ie)if(r.drawBuffers){const ue=A.texture;for(let ve=0,Le=ue.length;ve<Le;ve++){const ze=i.get(ue[ve]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ge(A)===!1){const ue=ie?y:[y];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ve=0;ve<ue.length;ve++){const Le=ue[ve];B.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ve]);const ze=s.convert(Le.format,Le.colorSpace),te=s.convert(Le.type),Ze=S(Le.internalFormat,ze,te,Le.colorSpace,A.isXRRenderTarget===!0),je=Ee(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,je,Ze,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,B.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),be(B.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),H(t.TEXTURE_CUBE_MAP,y,Se);for(let ue=0;ue<6;ue++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)fe(B.__webglFramebuffer[ue][ve],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ve);else fe(B.__webglFramebuffer[ue],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);v(y,Se)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){const ue=A.texture;for(let ve=0,Le=ue.length;ve<Le;ve++){const ze=ue[ve],te=i.get(ze);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),H(t.TEXTURE_2D,ze,Se),fe(B.__webglFramebuffer,A,ze,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,0),v(ze,Se)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ue=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ue,Q.__webglTexture),H(ue,y,Se),a&&y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)fe(B.__webglFramebuffer[ve],A,y,t.COLOR_ATTACHMENT0,ue,ve);else fe(B.__webglFramebuffer,A,y,t.COLOR_ATTACHMENT0,ue,0);v(y,Se)&&m(ue),n.unbindTexture()}A.depthBuffer&&ye(A)}function ot(A){const y=p(A)||a,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Q=0,ee=B.length;Q<ee;Q++){const ie=B[Q];if(v(ie,y)){const Se=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ue=i.get(ie).__webglTexture;n.bindTexture(Se,ue),m(Se),n.unbindTexture()}}}function xe(A){if(a&&A.samples>0&&ge(A)===!1){const y=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,Q=A.height;let ee=t.COLOR_BUFFER_BIT;const ie=[],Se=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(A),ve=A.isWebGLMultipleRenderTargets===!0;if(ve)for(let Le=0;Le<y.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Le=0;Le<y.length;Le++){ie.push(t.COLOR_ATTACHMENT0+Le),A.depthBuffer&&ie.push(Se);const ze=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(ze===!1&&(A.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ve&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[Le]),ze===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Se]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Se])),ve){const te=i.get(y[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,B,Q,0,0,B,Q,ee,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let Le=0;Le<y.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,ue.__webglColorRenderbuffer[Le]);const ze=i.get(y[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Ee(A){return Math.min(r.maxSamples,A.samples)}function ge(A){const y=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function re(A){const y=o.render.frame;d.get(A)!==y&&(d.set(A,y),A.update())}function he(A,y){const B=A.colorSpace,Q=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ku||B!==fi&&B!==Sn&&(Qe.getTransfer(B)===rt?a===!1?e.has("EXT_sRGB")===!0&&Q===Nn?(A.format=ku,A.minFilter=yn,A.generateMipmaps=!1):y=uv.sRGBToLinear(y):(Q!==Nn||ee!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}this.allocateTextureUnit=I,this.resetTextureUnits=J,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=P,this.setTextureCube=b,this.rebindTextures=Ue,this.setupRenderTarget=z,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ge}function gT(t,e,n){const i=n.isWebGL2;function r(s,o=Sn){let a;const l=Qe.getTransfer(o);if(s===ki)return t.UNSIGNED_BYTE;if(s===ev)return t.UNSIGNED_SHORT_4_4_4_4;if(s===tv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Zx)return t.BYTE;if(s===Qx)return t.SHORT;if(s===zd)return t.UNSIGNED_SHORT;if(s===Jg)return t.INT;if(s===Ai)return t.UNSIGNED_INT;if(s===Ci)return t.FLOAT;if(s===Mo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Jx)return t.ALPHA;if(s===Nn)return t.RGBA;if(s===ey)return t.LUMINANCE;if(s===ty)return t.LUMINANCE_ALPHA;if(s===cr)return t.DEPTH_COMPONENT;if(s===vs)return t.DEPTH_STENCIL;if(s===ku)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ny)return t.RED;if(s===nv)return t.RED_INTEGER;if(s===iy)return t.RG;if(s===iv)return t.RG_INTEGER;if(s===rv)return t.RGBA_INTEGER;if(s===oc||s===ac||s===lc||s===cc)if(l===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===oc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===oc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ac)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===gh||s===vh||s===_h||s===xh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===gh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_h)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===yh||s===Sh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===yh)return l===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Sh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Mh||s===Eh||s===Th||s===wh||s===Ah||s===Ch||s===Rh||s===bh||s===Lh||s===Ph||s===Dh||s===Ih||s===Uh||s===Nh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Mh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Eh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Th)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ah)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ch)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Rh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===bh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Lh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ph)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ih)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Uh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===uc||s===Fh||s===Oh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===uc)return l===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Fh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Oh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ry||s===kh||s===zh||s===Bh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===uc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===kh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===lr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class vT extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _a extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _T={type:"move"};class Nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _a,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _a,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _a,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),g=.02,x=.005;c.inputState.pinching&&h>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_T)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new _a;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class xT extends Es{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,g=null,x=null;const _=n.getContextAttributes();let p=null,u=null;const v=[],m=[],S=new qe;let R=null;const C=new un;C.layers.enable(1),C.viewport=new lt;const w=new un;w.layers.enable(2),w.viewport=new lt;const U=[C,w],M=new vT;M.layers.enable(1),M.layers.enable(2);let E=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let $=v[H];return $===void 0&&($=new Nc,v[H]=$),$.getTargetRaySpace()},this.getControllerGrip=function(H){let $=v[H];return $===void 0&&($=new Nc,v[H]=$),$.getGripSpace()},this.getHand=function(H){let $=v[H];return $===void 0&&($=new Nc,v[H]=$),$.getHandSpace()};function K(H){const $=m.indexOf(H.inputSource);if($===-1)return;const se=v[$];se!==void 0&&(se.update(H.inputSource,H.frame,c||o),se.dispatchEvent({type:H.type,data:H.inputSource}))}function J(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",I);for(let H=0;H<v.length;H++){const $=m[H];$!==null&&(m[H]=null,v[H].disconnect($))}E=null,k=null,e.setRenderTarget(p),g=null,h=null,f=null,r=null,u=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",J),r.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,$),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new vr(g.framebufferWidth,g.framebufferHeight,{format:Nn,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,se=null,de=null;_.depth&&(de=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=_.stencil?vs:cr,se=_.stencil?lr:Ai);const fe={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(fe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new vr(h.textureWidth,h.textureHeight,{format:Nn,type:ki,depthTexture:new Ev(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const be=e.properties.get(u);be.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(H){for(let $=0;$<H.removed.length;$++){const se=H.removed[$],de=m.indexOf(se);de>=0&&(m[de]=null,v[de].disconnect(se))}for(let $=0;$<H.added.length;$++){const se=H.added[$];let de=m.indexOf(se);if(de===-1){for(let be=0;be<v.length;be++)if(be>=m.length){m.push(se),de=be;break}else if(m[be]===null){m[be]=se,de=be;break}if(de===-1)break}const fe=v[de];fe&&fe.connect(se)}}const V=new F,W=new F;function q(H,$,se){V.setFromMatrixPosition($.matrixWorld),W.setFromMatrixPosition(se.matrixWorld);const de=V.distanceTo(W),fe=$.projectionMatrix.elements,be=se.projectionMatrix.elements,Ae=fe[14]/(fe[10]-1),ye=fe[14]/(fe[10]+1),Ue=(fe[9]+1)/fe[5],z=(fe[9]-1)/fe[5],ot=(fe[8]-1)/fe[0],xe=(be[8]+1)/be[0],Ee=Ae*ot,ge=Ae*xe,re=de/(-ot+xe),he=re*-ot;$.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(he),H.translateZ(re),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const A=Ae+re,y=ye+re,B=Ee-he,Q=ge+(de-he),ee=Ue*ye/y*A,ie=z*ye/y*A;H.projectionMatrix.makePerspective(B,Q,ee,ie,A,y),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function P(H,$){$===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices($.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;M.near=w.near=C.near=H.near,M.far=w.far=C.far=H.far,(E!==M.near||k!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,k=M.far);const $=H.parent,se=M.cameras;P(M,$);for(let de=0;de<se.length;de++)P(se[de],$);se.length===2?q(M,C,w):M.projectionMatrix.copy(C.projectionMatrix),b(H,M,$)};function b(H,$,se){se===null?H.matrix.copy($.matrixWorld):(H.matrix.copy(se.matrixWorld),H.matrix.invert(),H.matrix.multiply($.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=zu*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=H)};let N=null;function Y(H,$){if(d=$.getViewerPose(c||o),x=$,d!==null){const se=d.views;g!==null&&(e.setRenderTargetFramebuffer(u,g.framebuffer),e.setRenderTarget(u));let de=!1;se.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let fe=0;fe<se.length;fe++){const be=se[fe];let Ae=null;if(g!==null)Ae=g.getViewport(be);else{const Ue=f.getViewSubImage(h,be);Ae=Ue.viewport,fe===0&&(e.setRenderTargetTextures(u,Ue.colorTexture,h.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(u))}let ye=U[fe];ye===void 0&&(ye=new un,ye.layers.enable(fe),ye.viewport=new lt,U[fe]=ye),ye.matrix.fromArray(be.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(be.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),fe===0&&(M.matrix.copy(ye.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(ye)}}for(let se=0;se<v.length;se++){const de=m[se],fe=v[se];de!==null&&fe!==void 0&&fe.update(de,$,c||o)}N&&N(H,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),x=null}const Z=new Sv;Z.setAnimationLoop(Y),this.setAnimationLoop=function(H){N=H},this.dispose=function(){}}}function yT(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,_v(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,m,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&g(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),x(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,v,m):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===rn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===rn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const m=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*m,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,m){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=m*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===rn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ST(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,m){const S=m.program;i.uniformBlockBinding(v,S)}function c(v,m){let S=r[v.id];S===void 0&&(x(v),S=d(v),r[v.id]=S,v.addEventListener("dispose",p));const R=m.program;i.updateUBOMapping(v,R);const C=e.render.frame;s[v.id]!==C&&(h(v),s[v.id]=C)}function d(v){const m=f();v.__bindingPointIndex=m;const S=t.createBuffer(),R=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const m=r[v.id],S=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let C=0,w=S.length;C<w;C++){const U=Array.isArray(S[C])?S[C]:[S[C]];for(let M=0,E=U.length;M<E;M++){const k=U[M];if(g(k,C,M,R)===!0){const K=k.__offset,J=Array.isArray(k.value)?k.value:[k.value];let I=0;for(let V=0;V<J.length;V++){const W=J[V],q=_(W);typeof W=="number"||typeof W=="boolean"?(k.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,K+I,k.__data)):W.isMatrix3?(k.__data[0]=W.elements[0],k.__data[1]=W.elements[1],k.__data[2]=W.elements[2],k.__data[3]=0,k.__data[4]=W.elements[3],k.__data[5]=W.elements[4],k.__data[6]=W.elements[5],k.__data[7]=0,k.__data[8]=W.elements[6],k.__data[9]=W.elements[7],k.__data[10]=W.elements[8],k.__data[11]=0):(W.toArray(k.__data,I),I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,K,k.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,m,S,R){const C=v.value,w=m+"_"+S;if(R[w]===void 0)return typeof C=="number"||typeof C=="boolean"?R[w]=C:R[w]=C.clone(),!0;{const U=R[w];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return R[w]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function x(v){const m=v.uniforms;let S=0;const R=16;for(let w=0,U=m.length;w<U;w++){const M=Array.isArray(m[w])?m[w]:[m[w]];for(let E=0,k=M.length;E<k;E++){const K=M[E],J=Array.isArray(K.value)?K.value:[K.value];for(let I=0,V=J.length;I<V;I++){const W=J[I],q=_(W),P=S%R;P!==0&&R-P<q.boundary&&(S+=R-P),K.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=S,S+=q.storage}}}const C=S%R;return C>0&&(S+=R-C),v.__size=S,v.__cache={},this}function _(v){const m={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(m.boundary=4,m.storage=4):v.isVector2?(m.boundary=8,m.storage=8):v.isVector3||v.isColor?(m.boundary=16,m.storage=12):v.isVector4?(m.boundary=16,m.storage=16):v.isMatrix3?(m.boundary=48,m.storage=48):v.isMatrix4?(m.boundary=64,m.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),m}function p(v){const m=v.target;m.removeEventListener("dispose",p);const S=o.indexOf(m.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class bv{constructor(e={}){const{canvas:n=gy(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const g=new Uint32Array(4),x=new Int32Array(4);let _=null,p=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this._useLegacyLights=!1,this.toneMapping=Oi,this.toneMappingExposure=1;const m=this;let S=!1,R=0,C=0,w=null,U=-1,M=null;const E=new lt,k=new lt;let K=null;const J=new We(0);let I=0,V=n.width,W=n.height,q=1,P=null,b=null;const N=new lt(0,0,V,W),Y=new lt(0,0,V,W);let Z=!1;const H=new Gd;let $=!1,se=!1,de=null;const fe=new yt,be=new qe,Ae=new F,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return w===null?q:1}let z=i;function ot(T,O){for(let j=0;j<T.length;j++){const X=T[j],G=n.getContext(X,O);if(G!==null)return G}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kd}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",le,!1),z===null){const O=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&O.shift(),z=ot(O,T),z===null)throw ot(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let xe,Ee,ge,re,he,A,y,B,Q,ee,ie,Se,ue,ve,Le,ze,te,Ze,je,Ie,Te,_e,Oe,$e;function ht(){xe=new PE(z),Ee=new wE(z,xe,e),xe.init(Ee),_e=new gT(z,xe,Ee),ge=new pT(z,xe,Ee),re=new UE(z),he=new eT,A=new mT(z,xe,ge,he,Ee,_e,re),y=new CE(m),B=new LE(m),Q=new Gy(z,Ee),Oe=new EE(z,xe,Q,Ee),ee=new DE(z,Q,re,Oe),ie=new kE(z,ee,Q,re),je=new OE(z,Ee,A),ze=new AE(he),Se=new J1(m,y,B,xe,Ee,Oe,ze),ue=new yT(m,he),ve=new nT,Le=new lT(xe,Ee),Ze=new ME(m,y,B,ge,ie,h,l),te=new hT(m,ie,Ee),$e=new ST(z,re,Ee,ge),Ie=new TE(z,xe,re,Ee),Te=new IE(z,xe,re,Ee),re.programs=Se.programs,m.capabilities=Ee,m.extensions=xe,m.properties=he,m.renderLists=ve,m.shadowMap=te,m.state=ge,m.info=re}ht();const He=new xT(m,z);this.xr=He,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=xe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=xe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(V,W,!1))},this.getSize=function(T){return T.set(V,W)},this.setSize=function(T,O,j=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,W=O,n.width=Math.floor(T*q),n.height=Math.floor(O*q),j===!0&&(n.style.width=T+"px",n.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(V*q,W*q).floor()},this.setDrawingBufferSize=function(T,O,j){V=T,W=O,q=j,n.width=Math.floor(T*j),n.height=Math.floor(O*j),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(N)},this.setViewport=function(T,O,j,X){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,O,j,X),ge.viewport(E.copy(N).multiplyScalar(q).floor())},this.getScissor=function(T){return T.copy(Y)},this.setScissor=function(T,O,j,X){T.isVector4?Y.set(T.x,T.y,T.z,T.w):Y.set(T,O,j,X),ge.scissor(k.copy(Y).multiplyScalar(q).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(T){ge.setScissorTest(Z=T)},this.setOpaqueSort=function(T){P=T},this.setTransparentSort=function(T){b=T},this.getClearColor=function(T){return T.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(T=!0,O=!0,j=!0){let X=0;if(T){let G=!1;if(w!==null){const pe=w.texture.format;G=pe===rv||pe===iv||pe===nv}if(G){const pe=w.texture.type,Me=pe===ki||pe===Ai||pe===zd||pe===lr||pe===ev||pe===tv,Ce=Ze.getClearColor(),De=Ze.getClearAlpha(),Be=Ce.r,Ne=Ce.g,Fe=Ce.b;Me?(g[0]=Be,g[1]=Ne,g[2]=Fe,g[3]=De,z.clearBufferuiv(z.COLOR,0,g)):(x[0]=Be,x[1]=Ne,x[2]=Fe,x[3]=De,z.clearBufferiv(z.COLOR,0,x))}else X|=z.COLOR_BUFFER_BIT}O&&(X|=z.DEPTH_BUFFER_BIT),j&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",le,!1),ve.dispose(),Le.dispose(),he.dispose(),y.dispose(),B.dispose(),ie.dispose(),Oe.dispose(),$e.dispose(),Se.dispose(),He.dispose(),He.removeEventListener("sessionstart",Gt),He.removeEventListener("sessionend",tt),de&&(de.dispose(),de=null),Vt.stop()};function oe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=re.autoReset,O=te.enabled,j=te.autoUpdate,X=te.needsUpdate,G=te.type;ht(),re.autoReset=T,te.enabled=O,te.autoUpdate=j,te.needsUpdate=X,te.type=G}function le(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ce(T){const O=T.target;O.removeEventListener("dispose",ce),Pe(O)}function Pe(T){we(T),he.remove(T)}function we(T){const O=he.get(T).programs;O!==void 0&&(O.forEach(function(j){Se.releaseProgram(j)}),T.isShaderMaterial&&Se.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,j,X,G,pe){O===null&&(O=ye);const Me=G.isMesh&&G.matrixWorld.determinant()<0,Ce=Gv(T,O,j,X,G);ge.setMaterial(X,Me);let De=j.index,Be=1;if(X.wireframe===!0){if(De=ee.getWireframeAttribute(j),De===void 0)return;Be=2}const Ne=j.drawRange,Fe=j.attributes.position;let gt=Ne.start*Be,on=(Ne.start+Ne.count)*Be;pe!==null&&(gt=Math.max(gt,pe.start*Be),on=Math.min(on,(pe.start+pe.count)*Be)),De!==null?(gt=Math.max(gt,0),on=Math.min(on,De.count)):Fe!=null&&(gt=Math.max(gt,0),on=Math.min(on,Fe.count));const At=on-gt;if(At<0||At===1/0)return;Oe.setup(G,X,Ce,j,De);let qn,ct=Ie;if(De!==null&&(qn=Q.get(De),ct=Te,ct.setIndex(qn)),G.isMesh)X.wireframe===!0?(ge.setLineWidth(X.wireframeLinewidth*Ue()),ct.setMode(z.LINES)):ct.setMode(z.TRIANGLES);else if(G.isLine){let Ge=X.linewidth;Ge===void 0&&(Ge=1),ge.setLineWidth(Ge*Ue()),G.isLineSegments?ct.setMode(z.LINES):G.isLineLoop?ct.setMode(z.LINE_LOOP):ct.setMode(z.LINE_STRIP)}else G.isPoints?ct.setMode(z.POINTS):G.isSprite&&ct.setMode(z.TRIANGLES);if(G.isBatchedMesh)ct.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ct.renderInstances(gt,At,G.count);else if(j.isInstancedBufferGeometry){const Ge=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,bl=Math.min(j.instanceCount,Ge);ct.renderInstances(gt,At,bl)}else ct.render(gt,At)};function Je(T,O,j){T.transparent===!0&&T.side===ii&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,Do(T,O,j),T.side=Hi,T.needsUpdate=!0,Do(T,O,j),T.side=ii):Do(T,O,j)}this.compile=function(T,O,j=null){j===null&&(j=T),p=Le.get(j),p.init(),v.push(p),j.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),T!==j&&T.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(m._useLegacyLights);const X=new Set;return T.traverse(function(G){const pe=G.material;if(pe)if(Array.isArray(pe))for(let Me=0;Me<pe.length;Me++){const Ce=pe[Me];Je(Ce,j,G),X.add(Ce)}else Je(pe,j,G),X.add(pe)}),v.pop(),p=null,X},this.compileAsync=function(T,O,j=null){const X=this.compile(T,O,j);return new Promise(G=>{function pe(){if(X.forEach(function(Me){he.get(Me).currentProgram.isReady()&&X.delete(Me)}),X.size===0){G(T);return}setTimeout(pe,10)}xe.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let et=null;function wt(T){et&&et(T)}function Gt(){Vt.stop()}function tt(){Vt.start()}const Vt=new Sv;Vt.setAnimationLoop(wt),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(T){et=T,He.setAnimationLoop(T),T===null?Vt.stop():Vt.start()},He.addEventListener("sessionstart",Gt),He.addEventListener("sessionend",tt),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(O),O=He.getCamera()),T.isScene===!0&&T.onBeforeRender(m,T,O,w),p=Le.get(T,v.length),p.init(),v.push(p),fe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),H.setFromProjectionMatrix(fe),se=this.localClippingEnabled,$=ze.init(this.clippingPlanes,se),_=ve.get(T,u.length),_.init(),u.push(_),zn(T,O,0,m.sortObjects),_.finish(),m.sortObjects===!0&&_.sort(P,b),this.info.render.frame++,$===!0&&ze.beginShadows();const j=p.state.shadowsArray;if(te.render(j,T,O),$===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(_,T),p.setupLights(m._useLegacyLights),O.isArrayCamera){const X=O.cameras;for(let G=0,pe=X.length;G<pe;G++){const Me=X[G];Yd(_,T,Me,Me.viewport)}}else Yd(_,T,O);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(m,T,O),Oe.resetDefaultState(),U=-1,M=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function zn(T,O,j,X){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||H.intersectsSprite(T)){X&&Ae.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const Me=ie.update(T),Ce=T.material;Ce.visible&&_.push(T,Me,Ce,j,Ae.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||H.intersectsObject(T))){const Me=ie.update(T),Ce=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ae.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ae.copy(Me.boundingSphere.center)),Ae.applyMatrix4(T.matrixWorld).applyMatrix4(fe)),Array.isArray(Ce)){const De=Me.groups;for(let Be=0,Ne=De.length;Be<Ne;Be++){const Fe=De[Be],gt=Ce[Fe.materialIndex];gt&&gt.visible&&_.push(T,Me,gt,j,Ae.z,Fe)}}else Ce.visible&&_.push(T,Me,Ce,j,Ae.z,null)}}const pe=T.children;for(let Me=0,Ce=pe.length;Me<Ce;Me++)zn(pe[Me],O,j,X)}function Yd(T,O,j,X){const G=T.opaque,pe=T.transmissive,Me=T.transparent;p.setupLightsView(j),$===!0&&ze.setGlobalState(m.clippingPlanes,j),pe.length>0&&Hv(G,pe,O,j),X&&ge.viewport(E.copy(X)),G.length>0&&Po(G,O,j),pe.length>0&&Po(pe,O,j),Me.length>0&&Po(Me,O,j),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Hv(T,O,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const pe=Ee.isWebGL2;de===null&&(de=new vr(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Mo:ki,minFilter:So,samples:pe?4:0})),m.getDrawingBufferSize(be),pe?de.setSize(be.x,be.y):de.setSize(Bu(be.x),Bu(be.y));const Me=m.getRenderTarget();m.setRenderTarget(de),m.getClearColor(J),I=m.getClearAlpha(),I<1&&m.setClearColor(16777215,.5),m.clear();const Ce=m.toneMapping;m.toneMapping=Oi,Po(T,j,X),A.updateMultisampleRenderTarget(de),A.updateRenderTargetMipmap(de);let De=!1;for(let Be=0,Ne=O.length;Be<Ne;Be++){const Fe=O[Be],gt=Fe.object,on=Fe.geometry,At=Fe.material,qn=Fe.group;if(At.side===ii&&gt.layers.test(X.layers)){const ct=At.side;At.side=rn,At.needsUpdate=!0,qd(gt,j,X,on,At,qn),At.side=ct,At.needsUpdate=!0,De=!0}}De===!0&&(A.updateMultisampleRenderTarget(de),A.updateRenderTargetMipmap(de)),m.setRenderTarget(Me),m.setClearColor(J,I),m.toneMapping=Ce}function Po(T,O,j){const X=O.isScene===!0?O.overrideMaterial:null;for(let G=0,pe=T.length;G<pe;G++){const Me=T[G],Ce=Me.object,De=Me.geometry,Be=X===null?Me.material:X,Ne=Me.group;Ce.layers.test(j.layers)&&qd(Ce,O,j,De,Be,Ne)}}function qd(T,O,j,X,G,pe){T.onBeforeRender(m,O,j,X,G,pe),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(m,O,j,X,T,pe),G.transparent===!0&&G.side===ii&&G.forceSinglePass===!1?(G.side=rn,G.needsUpdate=!0,m.renderBufferDirect(j,O,X,G,T,pe),G.side=Hi,G.needsUpdate=!0,m.renderBufferDirect(j,O,X,G,T,pe),G.side=ii):m.renderBufferDirect(j,O,X,G,T,pe),T.onAfterRender(m,O,j,X,G,pe)}function Do(T,O,j){O.isScene!==!0&&(O=ye);const X=he.get(T),G=p.state.lights,pe=p.state.shadowsArray,Me=G.state.version,Ce=Se.getParameters(T,G.state,pe,O,j),De=Se.getProgramCacheKey(Ce);let Be=X.programs;X.environment=T.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(T.isMeshStandardMaterial?B:y).get(T.envMap||X.environment),Be===void 0&&(T.addEventListener("dispose",ce),Be=new Map,X.programs=Be);let Ne=Be.get(De);if(Ne!==void 0){if(X.currentProgram===Ne&&X.lightsStateVersion===Me)return Kd(T,Ce),Ne}else Ce.uniforms=Se.getUniforms(T),T.onBuild(j,Ce,m),T.onBeforeCompile(Ce,m),Ne=Se.acquireProgram(Ce,De),Be.set(De,Ne),X.uniforms=Ce.uniforms;const Fe=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=ze.uniform),Kd(T,Ce),X.needsLights=Wv(T),X.lightsStateVersion=Me,X.needsLights&&(Fe.ambientLightColor.value=G.state.ambient,Fe.lightProbe.value=G.state.probe,Fe.directionalLights.value=G.state.directional,Fe.directionalLightShadows.value=G.state.directionalShadow,Fe.spotLights.value=G.state.spot,Fe.spotLightShadows.value=G.state.spotShadow,Fe.rectAreaLights.value=G.state.rectArea,Fe.ltc_1.value=G.state.rectAreaLTC1,Fe.ltc_2.value=G.state.rectAreaLTC2,Fe.pointLights.value=G.state.point,Fe.pointLightShadows.value=G.state.pointShadow,Fe.hemisphereLights.value=G.state.hemi,Fe.directionalShadowMap.value=G.state.directionalShadowMap,Fe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Fe.spotShadowMap.value=G.state.spotShadowMap,Fe.spotLightMatrix.value=G.state.spotLightMatrix,Fe.spotLightMap.value=G.state.spotLightMap,Fe.pointShadowMap.value=G.state.pointShadowMap,Fe.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Ne,X.uniformsList=null,Ne}function $d(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Pa.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Kd(T,O){const j=he.get(T);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function Gv(T,O,j,X,G){O.isScene!==!0&&(O=ye),A.resetTextureUnits();const pe=O.fog,Me=X.isMeshStandardMaterial?O.environment:null,Ce=w===null?m.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:fi,De=(X.isMeshStandardMaterial?B:y).get(X.envMap||Me),Be=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ne=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Fe=!!j.morphAttributes.position,gt=!!j.morphAttributes.normal,on=!!j.morphAttributes.color;let At=Oi;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(At=m.toneMapping);const qn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ct=qn!==void 0?qn.length:0,Ge=he.get(X),bl=p.state.lights;if($===!0&&(se===!0||T!==M)){const gn=T===M&&X.id===U;ze.setState(X,T,gn)}let pt=!1;X.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==bl.state.version||Ge.outputColorSpace!==Ce||G.isBatchedMesh&&Ge.batching===!1||!G.isBatchedMesh&&Ge.batching===!0||G.isInstancedMesh&&Ge.instancing===!1||!G.isInstancedMesh&&Ge.instancing===!0||G.isSkinnedMesh&&Ge.skinning===!1||!G.isSkinnedMesh&&Ge.skinning===!0||G.isInstancedMesh&&Ge.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ge.instancingColor===!1&&G.instanceColor!==null||Ge.envMap!==De||X.fog===!0&&Ge.fog!==pe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ze.numPlanes||Ge.numIntersection!==ze.numIntersection)||Ge.vertexAlphas!==Be||Ge.vertexTangents!==Ne||Ge.morphTargets!==Fe||Ge.morphNormals!==gt||Ge.morphColors!==on||Ge.toneMapping!==At||Ee.isWebGL2===!0&&Ge.morphTargetsCount!==ct)&&(pt=!0):(pt=!0,Ge.__version=X.version);let ji=Ge.currentProgram;pt===!0&&(ji=Do(X,O,G));let Zd=!1,Cs=!1,Ll=!1;const Ut=ji.getUniforms(),Xi=Ge.uniforms;if(ge.useProgram(ji.program)&&(Zd=!0,Cs=!0,Ll=!0),X.id!==U&&(U=X.id,Cs=!0),Zd||M!==T){Ut.setValue(z,"projectionMatrix",T.projectionMatrix),Ut.setValue(z,"viewMatrix",T.matrixWorldInverse);const gn=Ut.map.cameraPosition;gn!==void 0&&gn.setValue(z,Ae.setFromMatrixPosition(T.matrixWorld)),Ee.logarithmicDepthBuffer&&Ut.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ut.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Cs=!0,Ll=!0)}if(G.isSkinnedMesh){Ut.setOptional(z,G,"bindMatrix"),Ut.setOptional(z,G,"bindMatrixInverse");const gn=G.skeleton;gn&&(Ee.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),Ut.setValue(z,"boneTexture",gn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Ut.setOptional(z,G,"batchingTexture"),Ut.setValue(z,"batchingTexture",G._matricesTexture,A));const Pl=j.morphAttributes;if((Pl.position!==void 0||Pl.normal!==void 0||Pl.color!==void 0&&Ee.isWebGL2===!0)&&je.update(G,j,ji),(Cs||Ge.receiveShadow!==G.receiveShadow)&&(Ge.receiveShadow=G.receiveShadow,Ut.setValue(z,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Xi.envMap.value=De,Xi.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Cs&&(Ut.setValue(z,"toneMappingExposure",m.toneMappingExposure),Ge.needsLights&&Vv(Xi,Ll),pe&&X.fog===!0&&ue.refreshFogUniforms(Xi,pe),ue.refreshMaterialUniforms(Xi,X,q,W,de),Pa.upload(z,$d(Ge),Xi,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Pa.upload(z,$d(Ge),Xi,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ut.setValue(z,"center",G.center),Ut.setValue(z,"modelViewMatrix",G.modelViewMatrix),Ut.setValue(z,"normalMatrix",G.normalMatrix),Ut.setValue(z,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const gn=X.uniformsGroups;for(let Dl=0,jv=gn.length;Dl<jv;Dl++)if(Ee.isWebGL2){const Qd=gn[Dl];$e.update(Qd,ji),$e.bind(Qd,ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ji}function Vv(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Wv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,O,j){he.get(T.texture).__webglTexture=O,he.get(T.depthTexture).__webglTexture=j;const X=he.get(T);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=j===void 0,X.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){const j=he.get(T);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,j=0){w=T,R=O,C=j;let X=!0,G=null,pe=!1,Me=!1;if(T){const De=he.get(T);De.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(z.FRAMEBUFFER,null),X=!1):De.__webglFramebuffer===void 0?A.setupRenderTarget(T):De.__hasExternalTextures&&A.rebindTextures(T,he.get(T.texture).__webglTexture,he.get(T.depthTexture).__webglTexture);const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Me=!0);const Ne=he.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?G=Ne[O][j]:G=Ne[O],pe=!0):Ee.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?G=he.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?G=Ne[j]:G=Ne,E.copy(T.viewport),k.copy(T.scissor),K=T.scissorTest}else E.copy(N).multiplyScalar(q).floor(),k.copy(Y).multiplyScalar(q).floor(),K=Z;if(ge.bindFramebuffer(z.FRAMEBUFFER,G)&&Ee.drawBuffers&&X&&ge.drawBuffers(T,G),ge.viewport(E),ge.scissor(k),ge.setScissorTest(K),pe){const De=he.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,De.__webglTexture,j)}else if(Me){const De=he.get(T.texture),Be=O||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,De.__webglTexture,j||0,Be)}U=-1},this.readRenderTargetPixels=function(T,O,j,X,G,pe,Me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=he.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){ge.bindFramebuffer(z.FRAMEBUFFER,Ce);try{const De=T.texture,Be=De.format,Ne=De.type;if(Be!==Nn&&_e.convert(Be)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ne===Mo&&(xe.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Ne!==ki&&_e.convert(Ne)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Ci&&(Ee.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-X&&j>=0&&j<=T.height-G&&z.readPixels(O,j,X,G,_e.convert(Be),_e.convert(Ne),pe)}finally{const De=w!==null?he.get(w).__webglFramebuffer:null;ge.bindFramebuffer(z.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(T,O,j=0){const X=Math.pow(2,-j),G=Math.floor(O.image.width*X),pe=Math.floor(O.image.height*X);A.setTexture2D(O,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,T.x,T.y,G,pe),ge.unbindTexture()},this.copyTextureToTexture=function(T,O,j,X=0){const G=O.image.width,pe=O.image.height,Me=_e.convert(j.format),Ce=_e.convert(j.type);A.setTexture2D(j,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment),O.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,X,T.x,T.y,G,pe,Me,Ce,O.image.data):O.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,X,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,Me,O.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,X,T.x,T.y,Me,Ce,O.image),X===0&&j.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(T,O,j,X,G=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=T.max.x-T.min.x+1,Me=T.max.y-T.min.y+1,Ce=T.max.z-T.min.z+1,De=_e.convert(X.format),Be=_e.convert(X.type);let Ne;if(X.isData3DTexture)A.setTexture3D(X,0),Ne=z.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)A.setTexture2DArray(X,0),Ne=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const Fe=z.getParameter(z.UNPACK_ROW_LENGTH),gt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),on=z.getParameter(z.UNPACK_SKIP_PIXELS),At=z.getParameter(z.UNPACK_SKIP_ROWS),qn=z.getParameter(z.UNPACK_SKIP_IMAGES),ct=j.isCompressedTexture?j.mipmaps[G]:j.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ct.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ct.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,T.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,T.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,T.min.z),j.isDataTexture||j.isData3DTexture?z.texSubImage3D(Ne,G,O.x,O.y,O.z,pe,Me,Ce,De,Be,ct.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ne,G,O.x,O.y,O.z,pe,Me,Ce,De,ct.data)):z.texSubImage3D(Ne,G,O.x,O.y,O.z,pe,Me,Ce,De,Be,ct),z.pixelStorei(z.UNPACK_ROW_LENGTH,Fe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,gt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,on),z.pixelStorei(z.UNPACK_SKIP_ROWS,At),z.pixelStorei(z.UNPACK_SKIP_IMAGES,qn),G===0&&X.generateMipmaps&&z.generateMipmap(Ne),ge.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){R=0,C=0,w=null,ge.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Bd?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===wl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pt?ur:ov}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ur?Pt:fi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class MT extends bv{}MT.prototype.isWebGL1Renderer=!0;class Wd{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=n,this.far=i}clone(){return new Wd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ET extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class TT extends sn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wT extends Ts{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new We(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class AT extends Ts{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=av,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class CT extends AT{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class jd extends Bt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Fc=new yt,bp=new F,Lp=new F;class Lv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gd,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;bp.setFromMatrixPosition(e.matrixWorld),n.position.copy(bp),Lp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Lp),n.updateMatrixWorld(),Fc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Pp=new yt,Hs=new F,Oc=new F;class RT extends Lv{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Hs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Hs),Oc.copy(i.position),Oc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Oc),i.updateMatrixWorld(),r.makeTranslation(-Hs.x,-Hs.y,-Hs.z),Pp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pp)}}class bT extends jd{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new RT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class LT extends Lv{constructor(){super(new Mv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dp extends jd{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new LT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class PT extends jd{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);function DT(t,e={}){const{bg:n="#F4ECE0",fg:i="#2A1A14",size:r=1024,font:s='400 64px "Instrument Serif", "Times New Roman", serif',sub:o="",subFont:a='500 22px "Inter", system-ui',accent:l="#A14B3D"}=e,c=r/512,d=document.createElement("canvas");d.width=d.height=r;const f=d.getContext("2d");f.fillStyle=n,f.fillRect(0,0,r,r);const h=f.createRadialGradient(r/2,r/2,50*c,r/2,r/2,r/1.2);h.addColorStop(0,"rgba(255,255,255,0.08)"),h.addColorStop(1,"rgba(0,0,0,0.18)"),f.fillStyle=h,f.fillRect(0,0,r,r),f.strokeStyle="rgba(0,0,0,0.07)",f.lineWidth=6*c,f.strokeRect(72*c,72*c,r-144*c,r-144*c),f.fillStyle=l,f.beginPath(),f.arc(90*c,90*c,5*c,0,Math.PI*2),f.fill(),f.fillStyle=i,f.font=s.replace("64px",Math.round(64*c)+"px"),f.textAlign="center",f.textBaseline="middle";const g=String(t).split(" "),x=[];let _="";const p=120*c,u=r-p*2,v=M=>{const E=f.measureText(M),k=E.actualBoundingBoxLeft??0,K=E.actualBoundingBoxRight??E.width;return Math.max(E.width,k+K)};for(const M of g){const E=_?_+" "+M:M;v(E)>u&&_?(x.push(_),_=M):_=E}_&&x.push(_);let m=Math.round(28*c);x.length>2&&(m=Math.round(24*c)),x.length>3&&(m=Math.round(20*c)),x.length===1&&x[0].length>7&&(m=Math.round(22*c)),f.font=s.replace("64px",m+"px");let S=0;for(const M of x)S=Math.max(S,v(M));const R=u*.7;if(S>R){const M=R/S;m=Math.max(Math.floor(m*M),Math.round(10*c)),f.font=s.replace("64px",m+"px"),S=0;for(const E of x)S=Math.max(S,v(E))}const C=m*1.15,w=x.length*C;x.forEach((M,E)=>{f.fillText(M,r/2,r/2-w/2+C/2+E*C)}),o&&(f.font=a.replace("22px",Math.round(22*c)+"px"),f.fillStyle="rgba(0,0,0,0.45)",f.fillText(o.toUpperCase(),r/2,r-95*c));const U=new TT(d);return U.anisotropy=8,U.needsUpdate=!0,U}function IT(t,e,n,i=.12,r=6){const s=new ws(t,e,n,r,r,r),o=s.attributes.position,a=new F;for(let l=0;l<o.count;l++){a.fromBufferAttribute(o,l);const c=Math.sign(a.x)*Math.max(Math.abs(a.x)-(t/2-i),0),d=Math.sign(a.y)*Math.max(Math.abs(a.y)-(e/2-i),0),f=Math.sign(a.z)*Math.max(Math.abs(a.z)-(n/2-i),0),h=Math.sqrt(c*c+d*d+f*f);if(h>0){const g=i/h;a.x=Math.sign(a.x)*(t/2-i)+c*g,a.y=Math.sign(a.y)*(e/2-i)+d*g,a.z=Math.sign(a.z)*(n/2-i)+f*g,o.setXYZ(l,a.x,a.y,a.z)}}return s.computeVertexNormals(),s}function UT(t,e){const{bg:n,fg:i,accent:r,label:s}=e,o=1.2,a=IT(o,o,o,.07,10),l=[0,1,2,3,4,5].map(d=>new CT({map:DT(t[d]||"—",{bg:n,fg:i,accent:r,sub:s}),roughness:.55,metalness:.05,clearcoat:.4,clearcoatRoughness:.5,sheen:.3,sheenColor:new We(r)})),c=new Wn(a,l);return c.castShadow=!0,c.receiveShadow=!0,c}const NT=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)];function FT(t){let e=2,n=-1/0;const i=new F;for(let r=0;r<6;r++)i.copy(NT[r]).applyEuler(t.rotation),i.y>n&&(n=i.y,e=r);return e}const OT=Re.forwardRef(function({dice:e,accent:n="#C97A5C",bg:i="#1B0E12",onSettled:r},s){const o=Re.useRef(r);Re.useEffect(()=>{o.current=r},[r]);const a=Re.useRef(null),l=Re.useRef({});return Re.useEffect(()=>{const c=a.current;if(!c)return;const d=c.clientWidth,f=c.clientHeight,h=new ET;h.background=null,h.fog=new Wd(i,8,18);const g=new un(35,d/f,.1,100);g.position.set(0,7,6),g.lookAt(0,0,0);const x=Math.hypot(7,6),_=3,p=35,u=60,v=W=>{if(W>=1)return p;const q=2*Math.atan(_/(x*W))*180/Math.PI;return Math.min(u,Math.max(p,q))};g.fov=v(d/f),g.updateProjectionMatrix();const m=new bv({antialias:!0,alpha:!0});m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.setSize(d,f),m.shadowMap.enabled=!0,m.shadowMap.type=$g,m.toneMapping=Zg,m.toneMappingExposure=1.05,c.appendChild(m.domElement),m.domElement.style.display="block";const S=new PT(16777215,.35);h.add(S);const R=new Dp(16767416,1.4);R.position.set(3,6,4),R.castShadow=!0,R.shadow.mapSize.set(2048,2048),R.shadow.camera.left=-5,R.shadow.camera.right=5,R.shadow.camera.top=5,R.shadow.camera.bottom=-5,R.shadow.bias=0,R.shadow.normalBias=.02,h.add(R);const C=new Dp(new We(n),.6);C.position.set(-4,2,-3),h.add(C);const w=new bT(16771788,.4,12);w.position.set(0,3,3),h.add(w);const U=new Cl(20,20),M=new wT({opacity:.35}),E=new Wn(U,M);E.rotation.x=-Math.PI/2,E.position.y=-.6,E.receiveShadow=!0,h.add(E);const k=e.map((W,q)=>{const P=UT(W.faces,W.palette),b=1.6,N=Math.min(e.length,3),Y=q%N,Z=Math.floor(q/N);return P.position.set((Y-(N-1)/2)*b,0,(Z-.5)*b),P.rotation.set(Math.floor(Math.random()*4)*(Math.PI/2),Math.floor(Math.random()*4)*(Math.PI/2),Math.floor(Math.random()*4)*(Math.PI/2)),P.userData.vel=new F,P.userData.angVel=new F,P.userData.restY=0,h.add(P),P});l.current={scene:h,camera:g,renderer:m,meshes:k,mount:c,settled:!0};let K,J=performance.now();const I=W=>{const q=Math.min((W-J)/1e3,.05);J=W;const P=l.current;if(k.forEach((b,N)=>{if(!P.settled&&!P.settling){b.userData.vel.y-=9.8*q,b.position.addScaledVector(b.userData.vel,q),b.rotation.x+=b.userData.angVel.x*q,b.rotation.y+=b.userData.angVel.y*q,b.rotation.z+=b.userData.angVel.z*q,b.position.y<b.userData.restY&&(b.position.y=b.userData.restY,b.userData.vel.y*=-.45,b.userData.vel.x*=.78,b.userData.vel.z*=.78,b.userData.angVel.multiplyScalar(.7),Math.abs(b.userData.vel.y)<.4&&(b.userData.vel.y=0)),b.userData.vel.x*=1-.4*q,b.userData.vel.z*=1-.4*q,b.userData.angVel.multiplyScalar(1-.5*q);const Y=2.4,Z=1.4;Math.abs(b.position.x)>Y&&(b.position.x=Math.sign(b.position.x)*Y,b.userData.vel.x*=-.5),b.position.z>Z&&(b.position.z=Z,b.userData.vel.z*=-.5),b.position.z<-2.6&&(b.position.z=-2.6,b.userData.vel.z*=-.5)}else if(P.settling){const Y=b.userData.targetRot,Z=1-Math.pow(8e-4,q);b.rotation.x+=(Y.x-b.rotation.x)*Z,b.rotation.y+=(Y.y-b.rotation.y)*Z,b.rotation.z+=(Y.z-b.rotation.z)*Z,b.position.y+=(b.userData.restY-b.position.y)*Z}}),!P.settled&&!P.settling)for(let Y=0;Y<k.length;Y++)for(let Z=Y+1;Z<k.length;Z++){const H=k[Y],$=k[Z],se=$.position.x-H.position.x,de=$.position.y-H.position.y,fe=$.position.z-H.position.z,be=se*se+de*de+fe*fe;if(be>=1.44*1.44||be<1e-6)continue;const Ae=Math.sqrt(be),ye=se/Ae,Ue=de/Ae,z=fe/Ae,ot=(1.44-Ae)*.5;H.position.x-=ye*ot,H.position.y-=Ue*ot,H.position.z-=z*ot,$.position.x+=ye*ot,$.position.y+=Ue*ot,$.position.z+=z*ot,H.position.y<H.userData.restY&&(H.position.y=H.userData.restY),$.position.y<$.userData.restY&&($.position.y=$.userData.restY);const xe=H.userData.vel,Ee=$.userData.vel,ge=(Ee.x-xe.x)*ye+(Ee.y-xe.y)*Ue+(Ee.z-xe.z)*z;if(ge<0){const re=-1.45*ge*.5;xe.x-=re*ye,xe.y-=re*Ue,xe.z-=re*z,Ee.x+=re*ye,Ee.y+=re*Ue,Ee.z+=re*z;const he=5*Math.min(1,-ge);H.userData.angVel.x+=(Math.random()-.5)*he,H.userData.angVel.y+=(Math.random()-.5)*he,H.userData.angVel.z+=(Math.random()-.5)*he,$.userData.angVel.x+=(Math.random()-.5)*he,$.userData.angVel.y+=(Math.random()-.5)*he,$.userData.angVel.z+=(Math.random()-.5)*he}}if(!P.settled&&!P.settling&&(k.some(N=>N.userData.vel.length()>.1||N.userData.angVel.length()>.1)||(P.settling=!0,k.forEach(N=>{const Y=N.rotation;N.userData.targetRot={x:Math.round(Y.x/(Math.PI/2))*(Math.PI/2),y:Math.round(Y.y/(Math.PI/2))*(Math.PI/2),z:Math.round(Y.z/(Math.PI/2))*(Math.PI/2)}}))),P.settling){let b=!0;for(const N of k){const Y=N.userData.targetRot;if(Math.abs(Y.x-N.rotation.x)>.008||Math.abs(Y.y-N.rotation.y)>.008||Math.abs(Y.z-N.rotation.z)>.008||Math.abs(N.userData.restY-N.position.y)>.003){b=!1;break}}if(b&&(k.forEach(N=>{const Y=N.userData.targetRot;N.rotation.set(Y.x,Y.y,Y.z),N.position.y=N.userData.restY}),P.settling=!1,P.settled=!0,o.current)){const N=k.map(FT);o.current(N)}}m.render(h,g),K=requestAnimationFrame(I)};K=requestAnimationFrame(I);const V=new ResizeObserver(()=>{const W=c.clientWidth,q=c.clientHeight;W===0||q===0||(g.aspect=W/q,g.fov=v(g.aspect),g.updateProjectionMatrix(),m.setSize(W,q))});return V.observe(c),()=>{cancelAnimationFrame(K),V.disconnect(),m.dispose(),k.forEach(W=>{W.geometry.dispose(),W.material.forEach(q=>{var P;(P=q.map)==null||P.dispose(),q.dispose()})}),c.contains(m.domElement)&&c.removeChild(m.domElement)}},[JSON.stringify(e.map(c=>({faces:c.faces,palette:c.palette}))),n,i]),Re.useImperativeHandle(s,()=>({throw(){const c=l.current;c.meshes&&(c.settled=!1,c.settling=!1,c.meshes.forEach(d=>{d.position.y=2.5+Math.random()*1.5,d.position.x=(Math.random()-.5)*2,d.position.z=(Math.random()-.5)*2,d.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),d.userData.vel.set((Math.random()-.5)*5,Math.random()*1.5,(Math.random()-.5)*5),d.userData.angVel.set((Math.random()-.5)*28,(Math.random()-.5)*28,(Math.random()-.5)*28)}))}})),D.jsx("div",{ref:a,style:{width:"100%",height:"100%",position:"absolute",inset:0}})});function xs(t,e){const n=t.replace("#",""),i=parseInt(n,16);let r=(i>>16)+e,s=(i>>8&255)+e,o=(i&255)+e;return r=Math.max(0,Math.min(255,r)),s=Math.max(0,Math.min(255,s)),o=Math.max(0,Math.min(255,o)),"#"+(r<<16|s<<8|o).toString(16).padStart(6,"0")}const kT="en",zT="en",BT="English",HT={title:"Interactive Couples Dice Game — Fun for Adults",description:"Enjoy an interactive 3D dice game for couples. Spice up your relationship with fun and excitement.",ogTitle:"Interactive Couples Dice Game — Fun for Adults",ogDescription:"Enjoy an interactive 3D dice game for couples. Spice up your relationship with fun and excitement.",ogSiteName:"Virtual Sex Dice",twitterTitle:"Interactive Couples Dice Game — Fun for Adults",twitterDescription:"Enjoy an interactive 3D dice game for couples. Spice up your relationship with fun and excitement.",schemaName:"Virtual Sex Dice",schemaDescription:"An interactive 3D dice game for couples. Spice up your relationship with fun and excitement."},GT={eyebrow:"Virtual Sex Dice",heading:"A Dice Game for Couples — Spice Things Up Together",lede:"An interactive 3D dice game for couples. Roll the dice and let them set the scene — an activity, a location, an intensity, a duration.",body:"A playful way to let chance lead the way tonight. Customize every face to suit the two of you, or jump straight in. Works on any modern device — phone, tablet, or laptop.",bullets:["Real 3D physics — dice actually tumble, collide, and settle","Customize every face to fit your relationship","Shake your phone to roll, or tap to throw","Available in English, Spanish, German, French, and Italian"],noscript:"This game needs JavaScript and WebGL to render the 3D dice. Enable JavaScript in your browser, or open virtualsexdice.com in a modern browser like Chrome, Safari, Firefox, or Edge."},VT={title:"Adults Only",body:"This site is intended for adults. By continuing, you confirm you are 18 years of age or older.",confirm:"I'm 18 or older",decline:"Leave"},WT={throw:"Throw",rolling:"Rolling…",settings:"Settings",back:"‹ Back",done:"Done",reset:"Reset",on:"On",off:"Off",edit:"Edit",noDiceSelected:"No dice selected. Open settings to choose.",shakeHint:"⤬  Shake to re-roll  ⤬",pickDiceToBegin:"Pick some dice to begin",resetConfirm:"Reset dice, accent, and background to defaults? Your customizations will be lost.",tabs:{dice:"Dice",look:"Look"},aria:{settings:"Settings",pauseTimer:"Pause timer",startTimer:"Start timer",resetTimer:"Reset timer",mute:"Mute",unmute:"Unmute"},timeOfDay:{morning:"This Morning's Roll",afternoon:"This Afternoon's Roll",evening:"This Evening's Roll",night:"Tonight's Roll"},panels:{activeDice:"Active Dice",facesCount:"{count} faces",activeCount:"{active} of {total} dice active",color:"Color",faces:"Faces",accent:"Accent",mood:"Mood",language:"Language"}},jT={rose:"Bisque",ember:"Ember",sage:"Sage",iris:"Iris",amber:"Amber"},XT={wine:"Wine",ink:"Ink",forest:"Forest",smoke:"Smoke"},YT=[{id:"activity_mf",label:"Activity (M/F)",group:"activity",active:!0,palette:"blush",faces:["Cowgirl","69","Eat her out","Missionary","Blowjob","Doggy"]},{id:"activity_mm",label:"Activity (M/M)",group:"activity",active:!1,palette:"ink",faces:["Doggy","69","Blowjob","Rimjob","Anal","Handjob"]},{id:"activity_ff",label:"Activity (F/F)",group:"activity",active:!1,palette:"iris",faces:["Scissor","69","Eat her out","Strap-on","Finger her","Grind"]},{id:"location",label:"Location",active:!1,palette:"sage",faces:["Counter","Bed","Kitchen","Bathroom","Couch","Floor"],phrases:["on a counter","in bed","in the kitchen","in the bathroom","on a couch","on the floor"]},{id:"intensity",label:"Intensity",active:!0,palette:"amber",faces:["Gently","Slowly","Teasingly","Intensely","Quickly","Roughly"]},{id:"duration",label:"Duration",active:!0,palette:"bone",faces:["30 sec","30 sec","60 sec","60 sec","90 sec","90 sec"],phrases:["for 30 seconds","for 30 seconds","for 60 seconds","for 60 seconds","for 90 seconds","for 90 seconds"]}],Pv={locale:kT,htmlLang:zT,name:BT,meta:HT,seoFallback:GT,ageGate:VT,ui:WT,accents:jT,moods:XT,dice:YT},qT="es",$T="es",KT="Español",ZT={title:"Juego de Dados Interactivo para Parejas — Diversión para Adultos",description:"Disfruta de un juego de dados 3D interactivo para parejas. Dale chispa a tu relación con diversión y emoción.",ogTitle:"Juego de Dados Interactivo para Parejas — Diversión para Adultos",ogDescription:"Disfruta de un juego de dados 3D interactivo para parejas. Dale chispa a tu relación con diversión y emoción.",ogSiteName:"Virtual Sex Dice",twitterTitle:"Juego de Dados Interactivo para Parejas — Diversión para Adultos",twitterDescription:"Disfruta de un juego de dados 3D interactivo para parejas. Dale chispa a tu relación con diversión y emoción.",schemaName:"Virtual Sex Dice",schemaDescription:"Un juego de dados 3D interactivo para parejas. Dale chispa a tu relación con diversión y emoción."},QT={eyebrow:"Virtual Sex Dice",heading:"Un Juego de Dados para Parejas — Dale Chispa Juntos",lede:"Un juego de dados 3D interactivo para parejas. Tira los dados y deja que ellos pongan el ambiente — una actividad, un lugar, una intensidad, una duración.",body:"Una forma divertida de dejar que el azar lleve la noche. Personaliza cada cara para adaptarlo a los dos, o simplemente tira y a ver qué pasa. Funciona en cualquier dispositivo moderno — móvil, tablet o portátil.",bullets:["Física 3D real — los dados realmente ruedan, chocan y se detienen","Personaliza cada cara para adaptarlo a tu relación","Agita el móvil para tirar, o toca para lanzar","Disponible en inglés, español, alemán, francés e italiano"],noscript:"Este juego necesita JavaScript y WebGL para renderizar los dados 3D. Activa JavaScript en tu navegador, o abre virtualsexdice.com en un navegador moderno como Chrome, Safari, Firefox o Edge."},JT={title:"Solo para adultos",body:"Este sitio está destinado a personas adultas. Al continuar, confirmas que tienes 18 años o más.",confirm:"Tengo 18 años o más",decline:"Salir"},ew={throw:"Tirar",rolling:"Tirando…",settings:"Ajustes",back:"‹ Volver",done:"Listo",reset:"Restablecer",on:"Sí",off:"No",edit:"Editar",noDiceSelected:"No hay dados seleccionados. Abre ajustes para elegir.",shakeHint:"⤬  Agita para tirar de nuevo  ⤬",pickDiceToBegin:"Elige algunos dados para comenzar",resetConfirm:"¿Restablecer dados, color y fondo a los valores por defecto? Se perderán tus personalizaciones.",tabs:{dice:"Dados",look:"Apariencia"},aria:{settings:"Ajustes",pauseTimer:"Pausar temporizador",startTimer:"Iniciar temporizador",resetTimer:"Reiniciar temporizador",mute:"Silenciar",unmute:"Activar sonido"},timeOfDay:{morning:"Tirada de la Mañana",afternoon:"Tirada de la Tarde",evening:"Tirada del Anochecer",night:"Tirada de Esta Noche"},panels:{activeDice:"Dados Activos",facesCount:"{count} caras",activeCount:"{active} de {total} dados activos",color:"Color",faces:"Caras",accent:"Acento",mood:"Ambiente",language:"Idioma"}},tw={rose:"Rosado",ember:"Brasa",sage:"Salvia",iris:"Iris",amber:"Ámbar"},nw={wine:"Vino",ink:"Tinta",forest:"Bosque",smoke:"Humo"},iw=[{id:"activity_mf",label:"Actividad (H/M)",group:"activity",active:!0,palette:"blush",faces:["Vaquera","69","Sexo oral","Misionero","Mamada","Perrito"]},{id:"activity_mm",label:"Actividad (H/H)",group:"activity",active:!1,palette:"ink",faces:["Perrito","69","Mamada","Anilingus","Anal","Paja"]},{id:"activity_ff",label:"Actividad (M/M)",group:"activity",active:!1,palette:"iris",faces:["Tijeras","69","Sexo oral","Arnés","Dedos","Frotarse"]},{id:"location",label:"Lugar",active:!1,palette:"sage",faces:["Encimera","Cama","Cocina","Baño","Sofá","Suelo"],phrases:["sobre la encimera","en la cama","en la cocina","en el baño","en el sofá","en el suelo"]},{id:"intensity",label:"Intensidad",active:!0,palette:"amber",faces:["Suave","Despacio","Provocando","Intenso","Rápido","Fuerte"]},{id:"duration",label:"Duración",active:!0,palette:"bone",faces:["30 s","30 s","60 s","60 s","90 s","90 s"],phrases:["durante 30 segundos","durante 30 segundos","durante 60 segundos","durante 60 segundos","durante 90 segundos","durante 90 segundos"]}],Dv={locale:qT,htmlLang:$T,name:KT,meta:ZT,seoFallback:QT,ageGate:JT,ui:ew,accents:tw,moods:nw,dice:iw},rw="de",sw="de",ow="Deutsch",aw={title:"Interaktives Würfelspiel für Paare — Spaß für Erwachsene",description:"Genießt ein interaktives 3D-Würfelspiel für Paare. Peppt eure Beziehung mit Spaß und Spannung auf.",ogTitle:"Interaktives Würfelspiel für Paare — Spaß für Erwachsene",ogDescription:"Genießt ein interaktives 3D-Würfelspiel für Paare. Peppt eure Beziehung mit Spaß und Spannung auf.",ogSiteName:"Virtual Sex Dice",twitterTitle:"Interaktives Würfelspiel für Paare — Spaß für Erwachsene",twitterDescription:"Genießt ein interaktives 3D-Würfelspiel für Paare. Peppt eure Beziehung mit Spaß und Spannung auf.",schemaName:"Virtual Sex Dice",schemaDescription:"Ein interaktives 3D-Würfelspiel für Paare. Peppt eure Beziehung mit Spaß und Spannung auf."},lw={eyebrow:"Virtual Sex Dice",heading:"Ein Würfelspiel für Paare — Peppt es gemeinsam auf",lede:"Ein interaktives 3D-Würfelspiel für Paare. Werft die Würfel und lasst sie die Stimmung setzen — eine Aktivität, ein Ort, eine Intensität, eine Dauer.",body:"Eine verspielte Art, den Zufall den Abend leiten zu lassen. Passt jede Seite an euch an oder legt einfach los. Funktioniert auf jedem modernen Gerät — Handy, Tablet oder Laptop.",bullets:["Echte 3D-Physik — Würfel rollen, stoßen und kommen wirklich zur Ruhe","Passt jede Seite an eure Beziehung an","Schüttelt das Handy zum Würfeln oder tippt zum Werfen","Verfügbar auf Englisch, Spanisch, Deutsch, Französisch und Italienisch"],noscript:"Dieses Spiel benötigt JavaScript und WebGL, um die 3D-Würfel zu rendern. Aktiviere JavaScript in deinem Browser oder öffne virtualsexdice.com in einem modernen Browser wie Chrome, Safari, Firefox oder Edge."},cw={title:"Nur für Erwachsene",body:"Diese Seite ist für Erwachsene bestimmt. Indem du fortfährst, bestätigst du, dass du 18 Jahre oder älter bist.",confirm:"Ich bin 18 oder älter",decline:"Verlassen"},uw={throw:"Würfeln",rolling:"Würfeln…",settings:"Einstellungen",back:"‹ Zurück",done:"Fertig",reset:"Zurücksetzen",on:"Ein",off:"Aus",edit:"Bearbeiten",noDiceSelected:"Keine Würfel ausgewählt. Öffne die Einstellungen, um auszuwählen.",shakeHint:"⤬  Schütteln zum Neuwerfen  ⤬",pickDiceToBegin:"Wähle Würfel aus, um zu beginnen",resetConfirm:"Würfel, Akzent und Hintergrund auf Standard zurücksetzen? Deine Anpassungen gehen verloren.",tabs:{dice:"Würfel",look:"Stil"},aria:{settings:"Einstellungen",pauseTimer:"Timer pausieren",startTimer:"Timer starten",resetTimer:"Timer zurücksetzen",mute:"Stummschalten",unmute:"Ton einschalten"},timeOfDay:{morning:"Wurf des Morgens",afternoon:"Wurf des Nachmittags",evening:"Wurf des Abends",night:"Wurf der Nacht"},panels:{activeDice:"Aktive Würfel",facesCount:"{count} Seiten",activeCount:"{active} von {total} Würfeln aktiv",color:"Farbe",faces:"Seiten",accent:"Akzent",mood:"Stimmung",language:"Sprache"}},dw={rose:"Rosé",ember:"Glut",sage:"Salbei",iris:"Iris",amber:"Bernstein"},fw={wine:"Wein",ink:"Tinte",forest:"Wald",smoke:"Rauch"},hw=[{id:"activity_mf",label:"Aktivität (M/W)",group:"activity",active:!0,palette:"blush",faces:["Reitstellung","69","Lecken","Missionar","Blasen","Doggy"]},{id:"activity_mm",label:"Aktivität (M/M)",group:"activity",active:!1,palette:"ink",faces:["Doggy","69","Blasen","Rimming","Anal","Handjob"]},{id:"activity_ff",label:"Aktivität (W/W)",group:"activity",active:!1,palette:"iris",faces:["Scheren","69","Lecken","Strap-On","Fingern","Reiben"]},{id:"location",label:"Ort",active:!1,palette:"sage",faces:["Theke","Bett","Küche","Bad","Sofa","Boden"],phrases:["auf der Theke","im Bett","in der Küche","im Bad","auf dem Sofa","auf dem Boden"]},{id:"intensity",label:"Intensität",active:!0,palette:"amber",faces:["Sanft","Langsam","Neckend","Intensiv","Schnell","Hart"]},{id:"duration",label:"Dauer",active:!0,palette:"bone",faces:["30 Sek","30 Sek","60 Sek","60 Sek","90 Sek","90 Sek"],phrases:["für 30 Sekunden","für 30 Sekunden","für 60 Sekunden","für 60 Sekunden","für 90 Sekunden","für 90 Sekunden"]}],Iv={locale:rw,htmlLang:sw,name:ow,meta:aw,seoFallback:lw,ageGate:cw,ui:uw,accents:dw,moods:fw,dice:hw},pw="fr",mw="fr",gw="Français",vw={title:"Jeu de Dés Interactif pour Couples — Divertissement pour Adultes",description:"Profitez d'un jeu de dés 3D interactif pour couples. Pimentez votre relation avec du plaisir et de l'excitation.",ogTitle:"Jeu de Dés Interactif pour Couples — Divertissement pour Adultes",ogDescription:"Profitez d'un jeu de dés 3D interactif pour couples. Pimentez votre relation avec du plaisir et de l'excitation.",ogSiteName:"Virtual Sex Dice",twitterTitle:"Jeu de Dés Interactif pour Couples — Divertissement pour Adultes",twitterDescription:"Profitez d'un jeu de dés 3D interactif pour couples. Pimentez votre relation avec du plaisir et de l'excitation.",schemaName:"Virtual Sex Dice",schemaDescription:"Un jeu de dés 3D interactif pour couples. Pimentez votre relation avec du plaisir et de l'excitation."},_w={eyebrow:"Virtual Sex Dice",heading:"Un Jeu de Dés pour Couples — Pimentez les Choses Ensemble",lede:"Un jeu de dés 3D interactif pour couples. Lancez les dés et laissez-les planter le décor — une activité, un lieu, une intensité, une durée.",body:"Une façon ludique de laisser le hasard mener la soirée. Personnalisez chaque face pour qu'elle vous ressemble, ou lancez-vous simplement. Fonctionne sur tout appareil moderne — téléphone, tablette ou ordinateur.",bullets:["Vraie physique 3D — les dés roulent, se heurtent et s'immobilisent réellement","Personnalisez chaque face pour coller à votre relation","Secouez le téléphone pour lancer, ou touchez pour jeter","Disponible en anglais, espagnol, allemand, français et italien"],noscript:"Ce jeu nécessite JavaScript et WebGL pour afficher les dés 3D. Active JavaScript dans ton navigateur, ou ouvre virtualsexdice.com dans un navigateur moderne comme Chrome, Safari, Firefox ou Edge."},xw={title:"Réservé aux adultes",body:"Ce site est destiné à un public adulte. En continuant, vous confirmez avoir 18 ans ou plus.",confirm:"J'ai 18 ans ou plus",decline:"Quitter"},yw={throw:"Lancer",rolling:"Lancement…",settings:"Paramètres",back:"‹ Retour",done:"Terminé",reset:"Réinitialiser",on:"Oui",off:"Non",edit:"Modifier",noDiceSelected:"Aucun dé sélectionné. Ouvre les paramètres pour choisir.",shakeHint:"⤬  Secoue pour relancer  ⤬",pickDiceToBegin:"Choisis des dés pour commencer",resetConfirm:"Réinitialiser les dés, l'accent et l'ambiance aux valeurs par défaut ? Tes personnalisations seront perdues.",tabs:{dice:"Dés",look:"Apparence"},aria:{settings:"Paramètres",pauseTimer:"Mettre en pause",startTimer:"Démarrer le minuteur",resetTimer:"Réinitialiser le minuteur",mute:"Couper le son",unmute:"Activer le son"},timeOfDay:{morning:"Lancer du Matin",afternoon:"Lancer de l'Après-midi",evening:"Lancer du Soir",night:"Lancer de la Nuit"},panels:{activeDice:"Dés Actifs",facesCount:"{count} faces",activeCount:"{active} sur {total} dés actifs",color:"Couleur",faces:"Faces",accent:"Accent",mood:"Ambiance",language:"Langue"}},Sw={rose:"Bisque",ember:"Braise",sage:"Sauge",iris:"Iris",amber:"Ambre"},Mw={wine:"Vin",ink:"Encre",forest:"Forêt",smoke:"Fumée"},Ew=[{id:"activity_mf",label:"Activité (H/F)",group:"activity",active:!0,palette:"blush",faces:["Amazone","69","Cunni","Missionnaire","Pipe","Levrette"]},{id:"activity_mm",label:"Activité (H/H)",group:"activity",active:!1,palette:"ink",faces:["Levrette","69","Pipe","Anulingus","Anal","Branlette"]},{id:"activity_ff",label:"Activité (F/F)",group:"activity",active:!1,palette:"iris",faces:["Ciseaux","69","Cunni","Gode-ceinture","Doigter","Frotter"]},{id:"location",label:"Lieu",active:!1,palette:"sage",faces:["Comptoir","Lit","Cuisine","Salle de bain","Canapé","Sol"],phrases:["sur le comptoir","au lit","dans la cuisine","dans la salle de bain","sur le canapé","par terre"]},{id:"intensity",label:"Intensité",active:!0,palette:"amber",faces:["Doucement","Lentement","Taquin","Intensément","Rapidement","Brutalement"]},{id:"duration",label:"Durée",active:!0,palette:"bone",faces:["30 s","30 s","60 s","60 s","90 s","90 s"],phrases:["pendant 30 secondes","pendant 30 secondes","pendant 60 secondes","pendant 60 secondes","pendant 90 secondes","pendant 90 secondes"]}],Uv={locale:pw,htmlLang:mw,name:gw,meta:vw,seoFallback:_w,ageGate:xw,ui:yw,accents:Sw,moods:Mw,dice:Ew},Tw="it",ww="it",Aw="Italiano",Cw={title:"Gioco di Dadi Interattivo per Coppie — Divertimento per Adulti",description:"Goditi un gioco di dadi 3D interattivo per coppie. Ravviva la tua relazione con divertimento ed emozione.",ogTitle:"Gioco di Dadi Interattivo per Coppie — Divertimento per Adulti",ogDescription:"Goditi un gioco di dadi 3D interattivo per coppie. Ravviva la tua relazione con divertimento ed emozione.",ogSiteName:"Virtual Sex Dice",twitterTitle:"Gioco di Dadi Interattivo per Coppie — Divertimento per Adulti",twitterDescription:"Goditi un gioco di dadi 3D interattivo per coppie. Ravviva la tua relazione con divertimento ed emozione.",schemaName:"Virtual Sex Dice",schemaDescription:"Un gioco di dadi 3D interattivo per coppie. Ravviva la tua relazione con divertimento ed emozione."},Rw={eyebrow:"Virtual Sex Dice",heading:"Un Gioco di Dadi per Coppie — Ravvivate le Cose Insieme",lede:"Un gioco di dadi 3D interattivo per coppie. Lanciate i dadi e lasciate che diano il tono — un'attività, un luogo, un'intensità, una durata.",body:"Un modo giocoso di lasciare che sia il caso a guidare la serata. Personalizzate ogni faccia per adattarla a voi due, o tuffatevi subito. Funziona su qualsiasi dispositivo moderno — telefono, tablet o portatile.",bullets:["Vera fisica 3D — i dadi rotolano, si scontrano e si fermano davvero","Personalizzate ogni faccia per adattarla alla vostra relazione","Scuoti il telefono per lanciare, o tocca per gettare","Disponibile in inglese, spagnolo, tedesco, francese e italiano"],noscript:"Questo gioco richiede JavaScript e WebGL per renderizzare i dadi 3D. Attiva JavaScript nel tuo browser, o apri virtualsexdice.com in un browser moderno come Chrome, Safari, Firefox o Edge."},bw={title:"Solo per adulti",body:"Questo sito è destinato a un pubblico adulto. Continuando, confermi di avere 18 anni o più.",confirm:"Ho 18 anni o più",decline:"Esci"},Lw={throw:"Lancia",rolling:"Lancio…",settings:"Impostazioni",back:"‹ Indietro",done:"Fatto",reset:"Reimposta",on:"Sì",off:"No",edit:"Modifica",noDiceSelected:"Nessun dado selezionato. Apri le impostazioni per scegliere.",shakeHint:"⤬  Scuoti per rilanciare  ⤬",pickDiceToBegin:"Scegli alcuni dadi per iniziare",resetConfirm:"Reimpostare dadi, accento e sfondo ai valori predefiniti? Le tue personalizzazioni saranno perse.",tabs:{dice:"Dadi",look:"Aspetto"},aria:{settings:"Impostazioni",pauseTimer:"Metti in pausa il timer",startTimer:"Avvia il timer",resetTimer:"Reimposta il timer",mute:"Silenzia",unmute:"Attiva l'audio"},timeOfDay:{morning:"Tirata del Mattino",afternoon:"Tirata del Pomeriggio",evening:"Tirata della Sera",night:"Tirata di Stanotte"},panels:{activeDice:"Dadi Attivi",facesCount:"{count} facce",activeCount:"{active} di {total} dadi attivi",color:"Colore",faces:"Facce",accent:"Accento",mood:"Atmosfera",language:"Lingua"}},Pw={rose:"Rosato",ember:"Brace",sage:"Salvia",iris:"Iris",amber:"Ambra"},Dw={wine:"Vino",ink:"Inchiostro",forest:"Bosco",smoke:"Fumo"},Iw=[{id:"activity_mf",label:"Attività (U/D)",group:"activity",active:!0,palette:"blush",faces:["Amazzone","69","Leccata","Missionario","Pompino","Pecorina"]},{id:"activity_mm",label:"Attività (U/U)",group:"activity",active:!1,palette:"ink",faces:["Pecorina","69","Pompino","Rimming","Anale","Sega"]},{id:"activity_ff",label:"Attività (D/D)",group:"activity",active:!1,palette:"iris",faces:["Forbici","69","Leccata","Strap-on","Ditalino","Strofinare"]},{id:"location",label:"Luogo",active:!1,palette:"sage",faces:["Bancone","Letto","Cucina","Bagno","Divano","Pavimento"],phrases:["sul bancone","a letto","in cucina","in bagno","sul divano","sul pavimento"]},{id:"intensity",label:"Intensità",active:!0,palette:"amber",faces:["Delicato","Lento","Provocando","Intenso","Rapido","Forte"]},{id:"duration",label:"Durata",active:!0,palette:"bone",faces:["30 s","30 s","60 s","60 s","90 s","90 s"],phrases:["per 30 secondi","per 30 secondi","per 60 secondi","per 60 secondi","per 90 secondi","per 90 secondi"]}],Nv={locale:Tw,htmlLang:ww,name:Aw,meta:Cw,seoFallback:Rw,ageGate:bw,ui:Lw,accents:Pw,moods:Dw,dice:Iw},Fv={en:Pv,es:Dv,de:Iv,fr:Uv,it:Nv},Gu="en",Uw=[{code:"en",name:Pv.name},{code:"es",name:Dv.name},{code:"de",name:Iv.name},{code:"fr",name:Uv.name},{code:"it",name:Nv.name}],Ov=Re.createContext(null);function Nw(){if(typeof window>"u")return Gu;const t=window.location.pathname.split("/").filter(Boolean)[0];return t&&Fv[t]?t:Gu}function Fw(t,e){return e.split(".").reduce((n,i)=>n==null?n:n[i],t)}function Ow(t,e){return typeof t!="string"||!e?t:t.replace(/\{(\w+)\}/g,(n,i)=>i in e?e[i]:`{${i}}`)}function kw({children:t}){const e=Nw(),n=Fv[e],i=Re.useMemo(()=>({locale:e,strings:n,t:(r,s)=>{const o=Fw(n,r);return o==null?r:Ow(o,s)}}),[e,n]);return D.jsx(Ov.Provider,{value:i,children:t})}function Xd(){const t=Re.useContext(Ov);if(!t)throw new Error("useI18n must be used inside <LocaleProvider>");return t}function kv(){return Xd().t}function zw(t){if(typeof window>"u")return;const e=t===Gu?"/":`/${t}/`;window.location.pathname!==e&&(window.location.href=e)}const Ip=Re.useState,Up=Re.useEffect,Bw=Re.useRef;function Hw({prompt:t,accentHex:e,rolling:n,sceneDice:i,sceneRef:r,bgFrom:s,results:o,dice:a,timer:l,timerTotal:c,timerRunning:d,muted:f,onToggleMute:h,onTimerToggle:g,onTimerReset:x,onThrow:_,onSettled:p,onOpenSettings:u,density:v}){const m=kv(),S=(()=>{const E=new Date().getHours();return E>=5&&E<12?m("ui.timeOfDay.morning"):E>=12&&E<17?m("ui.timeOfDay.afternoon"):E>=17&&E<21?m("ui.timeOfDay.evening"):m("ui.timeOfDay.night")})(),[R,C]=Ip(!1),[w,U]=Ip(()=>typeof window<"u"&&window.matchMedia("(max-width: 600px), (pointer: coarse)").matches),M=Bw(null);return Up(()=>{const E=window.matchMedia("(max-width: 600px), (pointer: coarse)"),k=()=>U(E.matches);return k(),E.addEventListener("change",k),()=>E.removeEventListener("change",k)},[]),Up(()=>{if(M.current&&clearTimeout(M.current),C(!1),!(n||!w))return M.current=setTimeout(()=>C(!0),8e3),()=>clearTimeout(M.current)},[n,i.length,w]),D.jsxs("div",{style:{width:"100%",height:"100dvh",display:"flex",flexDirection:"column",padding:"clamp(16px, 3vh, 48px) 24px",position:"relative",gap:"clamp(12px, 2.5vh, 32px)",overflow:"hidden"},children:[D.jsxs("div",{style:{width:"100%",maxWidth:720,margin:"0 auto",textAlign:"center",position:"relative",zIndex:5},children:[D.jsxs("div",{style:{fontFamily:'"Inter", system-ui',fontSize:11,letterSpacing:2.8,textTransform:"uppercase",color:"rgba(244,236,224,0.5)",marginBottom:16,display:"inline-flex",alignItems:"center",gap:10},children:[D.jsx("span",{style:{display:"inline-block",width:6,height:6,borderRadius:"50%",background:e}}),S,D.jsx("span",{style:{display:"inline-block",width:6,height:6,borderRadius:"50%",background:e}})]}),D.jsx("div",{style:{fontFamily:'"Instrument Serif", "Times New Roman", serif',fontSize:"clamp(28px, 4.2vw, 48px)",lineHeight:1.12,color:"#F4ECE0",letterSpacing:-.5,textWrap:"pretty",fontWeight:400,fontStyle:"italic"},children:t})]}),D.jsxs("div",{style:{flex:1,position:"relative",minHeight:0,width:"100%",maxWidth:880,margin:"0 auto"},children:[i.length>0&&D.jsx(OT,{ref:r,dice:i,accent:e,bg:s,onSettled:p}),i.length===0&&D.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(244,236,224,0.4)",fontSize:14},children:m("ui.noDiceSelected")}),w&&D.jsx("div",{style:{position:"absolute",left:0,right:0,bottom:8,textAlign:"center",fontSize:10,letterSpacing:1.6,textTransform:"uppercase",color:"rgba(244,236,224,0.5)",pointerEvents:"none",zIndex:6,opacity:R?1:0,transition:"opacity 1.2s ease-in",animation:R?"shakeHintPulse 2.4s ease-in-out infinite":"none"},children:m("ui.shakeHint")})]}),D.jsxs("div",{style:{width:"100%",maxWidth:520,margin:"0 auto",display:"flex",flexDirection:"column",position:"relative",zIndex:5},children:[D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:20},children:[D.jsxs("button",{onClick:_,disabled:n,style:{flex:1,height:64,borderRadius:999,border:"none",background:`linear-gradient(180deg, ${e}, ${xs(e,-25)})`,color:"#FFF8EC",fontFamily:'"Instrument Serif", serif',fontSize:22,fontStyle:"italic",letterSpacing:.3,cursor:"pointer",boxShadow:`0 2px 0 ${xs(e,-45)}, 0 12px 30px ${e}60, inset 0 1px 0 rgba(255,255,255,0.4)`,position:"relative",overflow:"hidden",transform:n?"scale(0.97)":"scale(1)",transition:"transform .15s",display:"flex",alignItems:"center",justifyContent:"center",gap:10},children:[D.jsx("div",{style:{position:"absolute",inset:0,borderRadius:999,background:"linear-gradient(180deg, rgba(255,255,255,0.25), transparent 45%)",pointerEvents:"none"}}),D.jsx(Vw,{size:20}),D.jsx("span",{children:m(n?"ui.rolling":"ui.throw")})]}),D.jsx("button",{onClick:u,style:Gw,"aria-label":m("ui.aria.settings"),children:D.jsx(Ww,{})})]}),D.jsxs("div",{style:{height:44,borderRadius:999,background:"rgba(244,236,224,0.06)",border:"1px solid rgba(244,236,224,0.10)",display:"flex",alignItems:"center",padding:"0 6px 0 16px",gap:10},children:[D.jsx("button",{onClick:g,"aria-label":m(d?"ui.aria.pauseTimer":"ui.aria.startTimer"),style:{width:32,height:32,borderRadius:"50%",border:"none",background:d?e:"rgba(244,236,224,0.12)",color:"#F4ECE0",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:d?D.jsx(qw,{}):D.jsx(Yw,{})}),D.jsxs("div",{style:{flex:1,display:"flex",alignItems:"center",gap:10},children:[D.jsxs("span",{style:{fontFamily:'"JetBrains Mono", "SF Mono", ui-monospace, monospace',fontSize:18,color:"#F4ECE0",fontVariantNumeric:"tabular-nums",letterSpacing:1},children:[String(Math.floor(l/60)).padStart(2,"0"),":",String(l%60).padStart(2,"0")]}),D.jsx("div",{style:{flex:1,height:3,borderRadius:2,background:"rgba(244,236,224,0.08)",overflow:"hidden"},children:D.jsx("div",{style:{height:"100%",width:`${c>0?l/c*100:0}%`,background:e,transition:"width 1s linear"}})})]}),D.jsx("button",{onClick:x,"aria-label":m("ui.aria.resetTimer"),style:{width:32,height:32,borderRadius:"50%",border:"none",background:"transparent",color:"rgba(244,236,224,0.6)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:D.jsx($w,{})}),D.jsx("button",{onClick:h,"aria-label":m(f?"ui.aria.unmute":"ui.aria.mute"),style:{width:32,height:32,borderRadius:"50%",border:"none",background:"transparent",color:"rgba(244,236,224,0.6)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:f?D.jsx(Xw,{}):D.jsx(jw,{})})]})]}),D.jsx("style",{children:`
        @keyframes shakeHintPulse {
          0%, 100% { transform: translateX(0); opacity: 0.35; }
          25% { transform: translateX(-2px); opacity: 0.7; }
          75% { transform: translateX(2px); opacity: 0.7; }
        }
      `})]})}const Gw={width:64,height:64,borderRadius:"50%",border:"none",background:"rgba(244,236,224,0.06)",border:"1px solid rgba(244,236,224,0.12)",color:"#F4ECE0",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(10px)"},Vw=({size:t=22})=>D.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[D.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"4",stroke:"currentColor",strokeWidth:"1.6"}),D.jsx("circle",{cx:"8",cy:"8",r:"1.4",fill:"currentColor"}),D.jsx("circle",{cx:"16",cy:"16",r:"1.4",fill:"currentColor"}),D.jsx("circle",{cx:"12",cy:"12",r:"1.4",fill:"currentColor"})]}),Ww=()=>D.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",children:[D.jsx("circle",{cx:"12",cy:"12",r:"3",stroke:"currentColor",strokeWidth:"1.6"}),D.jsx("path",{d:"M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1A1.7 1.7 0 004.6 9a1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9c.4.6 1 1 1.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z",stroke:"currentColor",strokeWidth:"1.4"})]}),jw=()=>D.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",children:[D.jsx("path",{d:"M11 5L6 9H2v6h4l5 4V5z",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"}),D.jsx("path",{d:"M15.5 8.5a5 5 0 010 7M19 5a10 10 0 010 14",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]}),Xw=()=>D.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",children:[D.jsx("path",{d:"M11 5L6 9H2v6h4l5 4V5z",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"}),D.jsx("path",{d:"M22 9l-6 6M16 9l6 6",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]}),Yw=()=>D.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:D.jsx("path",{d:"M6 4l14 8-14 8z"})}),qw=()=>D.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:[D.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),D.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}),$w=()=>D.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:[D.jsx("path",{d:"M21 12a9 9 0 11-3-6.7L21 8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),D.jsx("path",{d:"M21 3v5h-5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),Kw=Re.useState,Zw=Re.useRef,zv=Re.useEffect,Qw={rose:"#C97A5C",ember:"#D14B3D",sage:"#7A8F6A",iris:"#8478B8",amber:"#D4A24C"},Jw={wine:{from:"#1A0B11",to:"#2A1620"},ink:{from:"#0E0F1A",to:"#1A1C2E"},forest:{from:"#0E1612",to:"#1A2620"},smoke:{from:"#161210",to:"#26201E"}},Jr={bone:{bg:"#F4ECE0",fg:"#2A1A14"},blush:{bg:"#E8C5BD",fg:"#3A1F1A"},sage:{bg:"#C8D2BC",fg:"#23301E"},ink:{bg:"#2A2530",fg:"#F0E8DC"},amber:{bg:"#E8C885",fg:"#3A2810"},iris:{bg:"#C8C0E0",fg:"#221A38"}};function eA({style:t,tab:e,setTab:n,dice:i,setDice:r,accent:s,setAccent:o,bgMood:a,setBgMood:l,accentHex:c,editingDieId:d,setEditingDieId:f,pickerLayout:h,density:g,onReset:x,onClose:_}){const{t:p,locale:u}=Xd(),v=i.find(w=>w.id===d);zv(()=>{const w=U=>{U.key==="Escape"&&_()};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[]);const m=w=>{const U=i.find(E=>E.id===w);if(!U)return;const M=!U.active;r(i.map(E=>E.id===w?{...E,active:M}:M&&U.group&&E.group===U.group?{...E,active:!1}:E))},S=(w,U,M)=>{r(i.map(E=>{if(E.id!==w)return E;const k={...E,faces:E.faces.map((K,J)=>J===U?M:K)};return E.phrases&&(k.phrases=E.phrases.map((K,J)=>J===U?null:K)),k}))},R=(w,U)=>{r(i.map(M=>M.id===w?{...M,palette:U}:M))},C=tA(t);return D.jsxs(D.Fragment,{children:[D.jsx("div",{onClick:_,style:{position:"fixed",inset:0,zIndex:100,background:"rgba(0,0,0,0.55)",backdropFilter:"blur(8px)",animation:"fadeIn .2s"}}),D.jsxs("div",{style:{...C,zIndex:101,background:"linear-gradient(180deg, #1F1218, #150A0F)",border:"1px solid rgba(244,236,224,0.10)",boxShadow:"0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",color:"#F4ECE0",display:"flex",flexDirection:"column",animation:t==="sheet"?"slideUp .3s":"pop .25s",overflow:"hidden"},children:[t==="sheet"&&D.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:10,paddingBottom:4},children:D.jsx("div",{style:{width:36,height:4,borderRadius:2,background:"rgba(244,236,224,0.2)"}})}),D.jsxs("div",{style:{padding:"16px 20px 4px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[D.jsxs("div",{children:[v&&D.jsx("button",{onClick:()=>f(null),style:{background:"none",border:"none",color:"rgba(244,236,224,0.5)",fontSize:11,letterSpacing:1.5,textTransform:"uppercase",cursor:"pointer",padding:0,marginBottom:4,display:"flex",alignItems:"center",gap:4},children:p("ui.back")}),D.jsx("div",{style:{fontFamily:'"Instrument Serif", serif',fontSize:26,fontStyle:"italic",letterSpacing:-.3,lineHeight:1},children:v?v.label:p("ui.settings")})]}),D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[D.jsx(lA,{locale:u,accentHex:c}),D.jsx("button",{onClick:_,style:{width:36,height:36,borderRadius:"50%",border:"none",background:"rgba(244,236,224,0.08)",color:"#F4ECE0",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18},children:"×"})]})]}),!v&&D.jsx("div",{style:{display:"flex",gap:4,padding:"12px 20px 0",borderBottom:"1px solid rgba(244,236,224,0.08)"},children:[["dice",p("ui.tabs.dice")],["look",p("ui.tabs.look")]].map(([w,U])=>D.jsx("button",{onClick:()=>n(w),style:{background:"none",border:"none",cursor:"pointer",padding:"10px 12px",fontSize:13,fontWeight:500,color:e===w?"#F4ECE0":"rgba(244,236,224,0.5)",borderBottom:e===w?`2px solid ${c}`:"2px solid transparent",marginBottom:-1,fontFamily:"inherit",transition:"color .15s"},children:U},w))}),D.jsx("div",{style:{flex:1,overflow:"auto",padding:"16px 20px 20px"},children:v?D.jsx(oA,{die:v,accentHex:c,onEdit:(w,U)=>S(v.id,w,U),onPalette:w=>R(v.id,w),t:p}):D.jsxs(D.Fragment,{children:[e==="dice"&&D.jsx(nA,{dice:i,accentHex:c,layout:h,toggleDie:m,onEdit:f,t:p}),e==="look"&&D.jsx(sA,{accent:s,setAccent:o,bgMood:a,setBgMood:l,accentHex:c,t:p})]})}),!v&&D.jsxs("div",{style:{padding:"14px 20px",borderTop:"1px solid rgba(244,236,224,0.08)",display:"flex",gap:10},children:[D.jsx("div",{style:{flex:1,fontSize:11,color:"rgba(244,236,224,0.5)",display:"flex",alignItems:"center"},children:p("ui.panels.activeCount",{active:i.filter(w=>w.active).length,total:i.length})}),D.jsx("button",{onClick:()=>{window.confirm(p("ui.resetConfirm"))&&x()},style:{padding:"10px 14px",borderRadius:999,border:"1px solid rgba(244,236,224,0.14)",background:"transparent",color:"rgba(244,236,224,0.7)",fontWeight:500,fontSize:13,cursor:"pointer",fontFamily:"inherit"},children:p("ui.reset")}),D.jsx("button",{onClick:_,style:{padding:"10px 22px",borderRadius:999,border:"none",background:c,color:"#FFF8EC",fontWeight:600,fontSize:13,cursor:"pointer",letterSpacing:.2,boxShadow:`0 6px 16px ${c}50`},children:p("ui.done")})]})]}),D.jsx("style",{children:`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(100%) } to { transform: translateY(0) } }
        @keyframes pop { from { opacity: 0; transform: translate(-50%, -48%) scale(.96) } to { opacity: 1; transform: translate(-50%, -50%) scale(1) } }
      `})]})}function tA(t){switch(t){case"sheet":return{position:"fixed",left:"50%",bottom:0,top:80,transform:"translateX(-50%)",width:"min(100% - 24px, 560px)",borderRadius:"24px 24px 0 0"};case"drawer":return{position:"fixed",top:0,bottom:0,right:0,width:"min(88%, 440px)",borderRadius:"24px 0 0 24px"};case"centered":default:return{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"min(100% - 24px, 520px)",maxHeight:"min(100% - 80px, 760px)",borderRadius:24}}}function nA({dice:t,accentHex:e,layout:n,toggleDie:i,onEdit:r,t:s}){return D.jsxs("div",{children:[D.jsx("div",{style:{fontSize:12,letterSpacing:1.6,textTransform:"uppercase",color:"rgba(244,236,224,0.5)",marginBottom:12},children:s("ui.panels.activeDice")}),n==="list"?D.jsx(rA,{dice:t,accentHex:e,toggleDie:i,onEdit:r,t:s}):D.jsx(iA,{dice:t,accentHex:e,toggleDie:i,onEdit:r,t:s})]})}function iA({dice:t,accentHex:e,toggleDie:n,onEdit:i,t:r}){return D.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:t.map(s=>{const o=Jr[s.palette];return D.jsxs("div",{style:{borderRadius:16,padding:12,background:s.active?"rgba(244,236,224,0.06)":"rgba(244,236,224,0.025)",border:s.active?`1px solid ${e}55`:"1px solid rgba(244,236,224,0.08)",position:"relative",overflow:"hidden",transition:"all .2s"},children:[D.jsx("div",{style:{height:70,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:10},children:D.jsx(Bv,{palette:o,accentHex:e,active:s.active,face:s.faces[0]})}),D.jsx("div",{style:{fontFamily:'"Instrument Serif", serif',fontStyle:"italic",fontSize:18,marginBottom:2,color:s.active?"#F4ECE0":"rgba(244,236,224,0.5)"},children:s.label}),D.jsx("div",{style:{fontSize:10,color:"rgba(244,236,224,0.4)",marginBottom:10},children:r("ui.panels.facesCount",{count:s.faces.length})}),D.jsxs("div",{style:{display:"flex",gap:6},children:[D.jsx("button",{onClick:()=>n(s.id),style:{flex:1,padding:"7px 8px",borderRadius:8,border:"none",cursor:"pointer",fontSize:11,fontWeight:600,background:s.active?e:"rgba(244,236,224,0.1)",color:s.active?"#FFF8EC":"rgba(244,236,224,0.6)",fontFamily:"inherit"},children:s.active?r("ui.on"):r("ui.off")}),D.jsx("button",{onClick:()=>i(s.id),style:{width:32,padding:0,borderRadius:8,border:"1px solid rgba(244,236,224,0.12)",background:"transparent",color:"rgba(244,236,224,0.6)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:D.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",children:D.jsx("path",{d:"M12 20h9M16.5 3.5a2.1 2.1 0 113 3L7 19l-4 1 1-4z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]},s.id)})})}function rA({dice:t,accentHex:e,toggleDie:n,onEdit:i,t:r}){return D.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:t.map(s=>{const o=Jr[s.palette];return D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:10,borderRadius:12,background:"rgba(244,236,224,0.04)",border:"1px solid rgba(244,236,224,0.06)"},children:[D.jsx("div",{style:{width:40,height:40,borderRadius:8,background:o.bg,color:o.fg,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:'"Instrument Serif", serif',fontSize:11,padding:4,textAlign:"center",fontStyle:"italic"},children:s.faces[0]}),D.jsxs("div",{style:{flex:1},children:[D.jsx("div",{style:{fontSize:14,fontWeight:500},children:s.label}),D.jsxs("div",{style:{fontSize:11,color:"rgba(244,236,224,0.5)"},children:[s.faces.slice(0,3).join(" · ")," · …"]})]}),D.jsx("button",{onClick:()=>i(s.id),style:{padding:"6px 10px",borderRadius:8,fontSize:11,background:"transparent",border:"1px solid rgba(244,236,224,0.12)",color:"rgba(244,236,224,0.7)",cursor:"pointer"},children:r("ui.edit")}),D.jsx(aA,{on:s.active,onClick:()=>n(s.id),accentHex:e})]},s.id)})})}function Bv({palette:t,accentHex:e,active:n,face:i}){return D.jsx("div",{style:{filter:n?"none":"grayscale(0.5) opacity(0.5)",width:50,height:50},children:D.jsxs("div",{style:{width:50,height:50,position:"relative",transformStyle:"preserve-3d",transform:"rotateX(-25deg) rotateY(-30deg)"},children:[D.jsx("div",{style:{position:"absolute",width:50,height:50,background:`linear-gradient(135deg, ${t.bg}, ${xs(t.bg,-15)})`,transform:`rotateX(90deg) translateZ(${50/2}px)`,boxShadow:"inset 0 0 4px rgba(0,0,0,0.1)",borderRadius:4}}),D.jsx("div",{style:{position:"absolute",width:50,height:50,background:t.bg,color:t.fg,transform:`translateZ(${50/2}px)`,boxShadow:"inset 0 0 6px rgba(0,0,0,0.08)",borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:'"Instrument Serif", serif',fontStyle:"italic",fontSize:9,padding:4,textAlign:"center",lineHeight:1.1},children:i}),D.jsx("div",{style:{position:"absolute",width:50,height:50,background:xs(t.bg,-25),transform:`rotateY(90deg) translateZ(${50/2}px)`,borderRadius:4}}),D.jsx("div",{style:{position:"absolute",width:50*1.4,height:8,left:-50*.2,top:50*1.05,background:"radial-gradient(ellipse, rgba(0,0,0,0.4), transparent 70%)",filter:"blur(2px)"}})]})})}function sA({accent:t,setAccent:e,bgMood:n,setBgMood:i,accentHex:r,t:s}){return D.jsxs("div",{children:[D.jsxs("div",{style:{marginBottom:24},children:[D.jsx("div",{style:{fontSize:12,letterSpacing:1.6,textTransform:"uppercase",color:"rgba(244,236,224,0.5)",marginBottom:12},children:s("ui.panels.accent")}),D.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:Object.entries(Qw).map(([o,a])=>D.jsxs("button",{onClick:()=>e(o),style:{flex:"1 1 calc(33% - 6px)",minWidth:90,padding:"14px 8px",borderRadius:14,background:"rgba(244,236,224,0.04)",border:t===o?`2px solid ${a}`:"2px solid rgba(244,236,224,0.08)",cursor:"pointer",color:"#F4ECE0",display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[D.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:`radial-gradient(circle at 35% 30%, ${xs(a,30)}, ${a} 60%, ${xs(a,-30)})`,boxShadow:`0 4px 12px ${a}55, inset 0 1px 1px rgba(255,255,255,0.4)`}}),D.jsx("span",{style:{fontSize:11,color:"rgba(244,236,224,0.7)"},children:s(`accents.${o}`)})]},o))})]}),D.jsxs("div",{children:[D.jsx("div",{style:{fontSize:12,letterSpacing:1.6,textTransform:"uppercase",color:"rgba(244,236,224,0.5)",marginBottom:12},children:s("ui.panels.mood")}),D.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:Object.entries(Jw).map(([o,a])=>D.jsx("button",{onClick:()=>i(o),style:{padding:0,borderRadius:14,overflow:"hidden",border:n===o?`2px solid ${r}`:"2px solid rgba(244,236,224,0.08)",cursor:"pointer",height:70,position:"relative",background:`radial-gradient(ellipse at 30% 0%, ${a.to}, ${a.from})`},children:D.jsx("div",{style:{position:"absolute",bottom:8,left:12,color:"#F4ECE0",fontFamily:'"Instrument Serif", serif',fontStyle:"italic",fontSize:14},children:s(`moods.${o}`)})},o))})]})]})}function oA({die:t,accentHex:e,onEdit:n,onPalette:i,t:r}){return D.jsxs("div",{children:[D.jsx("div",{style:{height:130,marginBottom:18,display:"flex",alignItems:"center",justifyContent:"center"},children:D.jsx("div",{style:{transform:"scale(2.2)"},children:D.jsx(Bv,{palette:Jr[t.palette],accentHex:e,active:!0,face:t.faces[0]})})}),D.jsxs("div",{style:{marginBottom:18},children:[D.jsx("div",{style:{fontSize:11,letterSpacing:1.6,textTransform:"uppercase",color:"rgba(244,236,224,0.5)",marginBottom:8},children:r("ui.panels.color")}),D.jsx("div",{style:{display:"flex",gap:8},children:Object.entries(Jr).map(([s,o])=>D.jsx("button",{onClick:()=>i(s),style:{flex:1,height:36,borderRadius:10,background:o.bg,cursor:"pointer",border:t.palette===s?`2px solid ${e}`:"2px solid transparent",boxShadow:t.palette===s?"0 0 0 1px rgba(244,236,224,0.2)":"inset 0 0 0 1px rgba(0,0,0,0.1)"}},s))})]}),D.jsxs("div",{children:[D.jsx("div",{style:{fontSize:11,letterSpacing:1.6,textTransform:"uppercase",color:"rgba(244,236,224,0.5)",marginBottom:8},children:r("ui.panels.faces")}),D.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:t.faces.map((s,o)=>D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",borderRadius:10,background:"rgba(244,236,224,0.04)",border:"1px solid rgba(244,236,224,0.06)"},children:[D.jsx("div",{style:{width:22,height:22,borderRadius:6,background:Jr[t.palette].bg,color:Jr[t.palette].fg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:600,fontFamily:"inherit"},children:o+1}),D.jsx("input",{value:s,onChange:a=>n(o,a.target.value),style:{flex:1,background:"transparent",border:"none",outline:"none",color:"#F4ECE0",fontSize:14,fontFamily:"inherit",padding:"4px 0"}})]},o))})]})]})}function aA({on:t,onClick:e,accentHex:n}){return D.jsx("button",{onClick:e,style:{width:44,height:26,borderRadius:999,border:"none",background:t?n:"rgba(244,236,224,0.15)",position:"relative",cursor:"pointer",padding:0,transition:"background .2s"},children:D.jsx("div",{style:{width:22,height:22,borderRadius:"50%",background:"#F4ECE0",position:"absolute",top:2,left:t?20:2,transition:"left .2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})}function lA({locale:t,accentHex:e}){const[n,i]=Kw(!1),r=Zw(null);return zv(()=>{if(!n)return;const s=a=>{r.current&&!r.current.contains(a.target)&&i(!1)},o=a=>{a.key==="Escape"&&i(!1)};return document.addEventListener("mousedown",s),document.addEventListener("keydown",o),()=>{document.removeEventListener("mousedown",s),document.removeEventListener("keydown",o)}},[n]),D.jsxs("div",{ref:r,style:{position:"relative"},children:[D.jsxs("button",{onClick:()=>i(s=>!s),"aria-haspopup":"listbox","aria-expanded":n,style:{height:36,padding:"0 10px",borderRadius:18,background:"rgba(244,236,224,0.08)",border:"1px solid rgba(244,236,224,0.10)",color:"#F4ECE0",cursor:"pointer",display:"flex",alignItems:"center",gap:6,fontFamily:"inherit",fontSize:12,fontWeight:600,letterSpacing:.6,textTransform:"uppercase"},children:[t.toUpperCase(),D.jsx("svg",{width:"10",height:"10",viewBox:"0 0 12 12",fill:"none",style:{opacity:.7},children:D.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})]}),n&&D.jsx("div",{role:"listbox",style:{position:"absolute",top:"calc(100% + 6px)",right:0,minWidth:140,background:"linear-gradient(180deg, #24161C, #180C11)",border:"1px solid rgba(244,236,224,0.12)",borderRadius:10,boxShadow:"0 12px 32px rgba(0,0,0,0.5)",padding:4,zIndex:200},children:Uw.map(({code:s,name:o})=>{const a=s===t;return D.jsxs("button",{role:"option","aria-selected":a,onClick:()=>{i(!1),zw(s)},style:{display:"flex",alignItems:"center",gap:8,width:"100%",padding:"8px 10px",borderRadius:6,background:a?`${e}22`:"transparent",border:"none",cursor:"pointer",color:a?"#F4ECE0":"rgba(244,236,224,0.75)",fontFamily:"inherit",fontSize:13,textAlign:"left"},children:[D.jsx("span",{style:{fontSize:10,fontWeight:700,letterSpacing:.6,color:a?e:"rgba(244,236,224,0.4)",minWidth:22},children:s.toUpperCase()}),o]},s)})})]})}function cA({tweaks:t,updateTweak:e,open:n,setOpen:i}){return D.jsxs("div",{style:{position:"absolute",bottom:16,right:16,zIndex:200,fontFamily:'"Inter", system-ui, sans-serif'},children:[!n&&D.jsx("button",{onClick:()=>i(!0),style:{width:44,height:44,borderRadius:12,background:"rgba(20,10,15,0.85)",backdropFilter:"blur(20px)",border:"1px solid rgba(244,236,224,0.15)",color:"#F4ECE0",cursor:"pointer",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(0,0,0,0.4)"},children:"⚙"}),n&&D.jsxs("div",{style:{width:240,padding:14,background:"rgba(20,10,15,0.92)",backdropFilter:"blur(20px)",border:"1px solid rgba(244,236,224,0.15)",borderRadius:14,color:"#F4ECE0",boxShadow:"0 8px 30px rgba(0,0,0,0.5)"},children:[D.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[D.jsx("div",{style:{fontSize:11,letterSpacing:1.5,textTransform:"uppercase",color:"rgba(244,236,224,0.6)"},children:"Tweaks"}),D.jsx("button",{onClick:()=>i(!1),style:{background:"none",border:"none",color:"rgba(244,236,224,0.6)",cursor:"pointer",fontSize:16,padding:0},children:"×"})]}),D.jsx(Gs,{label:"Modal",children:["centered","sheet","drawer"].map(r=>D.jsx(kc,{active:t.modalStyle===r,onClick:()=>e("modalStyle",r),children:r},r))}),D.jsx(Gs,{label:"Picker",children:["gallery","list"].map(r=>D.jsx(kc,{active:t.pickerLayout===r,onClick:()=>e("pickerLayout",r),children:r},r))}),D.jsx(Gs,{label:"Density",children:["roomy","compact"].map(r=>D.jsx(kc,{active:t.density===r,onClick:()=>e("density",r),children:r},r))}),D.jsx(Gs,{label:"Accent",children:Object.entries({rose:"#C97A5C",ember:"#D14B3D",sage:"#7A8F6A",iris:"#8478B8",amber:"#D4A24C"}).map(([r,s])=>D.jsx("button",{onClick:()=>e("accent",r),style:{width:22,height:22,borderRadius:"50%",background:s,cursor:"pointer",border:t.accent===r?"2px solid #F4ECE0":"2px solid transparent",padding:0}},r))}),D.jsx(Gs,{label:"Mood",children:Object.entries({wine:["#1A0B11","#2A1620"],ink:["#0E0F1A","#1A1C2E"],forest:["#0E1612","#1A2620"],smoke:["#161210","#26201E"]}).map(([r,[s,o]])=>D.jsx("button",{onClick:()=>e("bgMood",r),style:{width:26,height:22,borderRadius:6,background:`radial-gradient(ellipse, ${o}, ${s})`,cursor:"pointer",padding:0,border:t.bgMood===r?"2px solid #F4ECE0":"2px solid transparent"}},r))})]})]})}function Gs({label:t,children:e}){return D.jsxs("div",{style:{marginBottom:10},children:[D.jsx("div",{style:{fontSize:9,letterSpacing:1.5,textTransform:"uppercase",color:"rgba(244,236,224,0.5)",marginBottom:6},children:t}),D.jsx("div",{style:{display:"flex",gap:4,flexWrap:"wrap"},children:e})]})}function kc({active:t,onClick:e,children:n}){return D.jsx("button",{onClick:e,style:{padding:"5px 9px",borderRadius:6,background:t?"rgba(244,236,224,0.15)":"rgba(244,236,224,0.04)",border:"1px solid "+(t?"rgba(244,236,224,0.25)":"rgba(244,236,224,0.08)"),color:t?"#F4ECE0":"rgba(244,236,224,0.6)",fontSize:11,cursor:"pointer",textTransform:"capitalize",fontFamily:"inherit"},children:n})}const Np="vsd-age-confirmed";function uA(){const t=kv(),[e,n]=Re.useState(!1);if(Re.useEffect(()=>{try{localStorage.getItem(Np)!=="1"&&n(!0)}catch{n(!0)}},[]),!e)return null;const i=()=>{try{localStorage.setItem(Np,"1")}catch{}n(!1)},r=()=>{window.location.href="https://www.google.com/"};return D.jsx("div",{role:"dialog","aria-modal":"true","aria-labelledby":"age-gate-title",style:{position:"fixed",inset:0,zIndex:1e3,background:"rgba(10, 6, 8, 0.92)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:D.jsxs("div",{style:{maxWidth:420,width:"100%",padding:"32px 28px",background:"#1A0B11",border:"1px solid rgba(244, 236, 224, 0.14)",borderRadius:16,color:"#F4ECE0",textAlign:"center",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},children:[D.jsx("h2",{id:"age-gate-title",style:{fontFamily:"'Instrument Serif', 'Times New Roman', serif",fontStyle:"italic",fontWeight:400,fontSize:32,letterSpacing:"-0.3px",margin:"0 0 16px"},children:t("ageGate.title")}),D.jsx("p",{style:{fontSize:15,lineHeight:1.55,color:"rgba(244, 236, 224, 0.78)",margin:"0 0 24px"},children:t("ageGate.body")}),D.jsx("button",{onClick:i,style:{display:"block",width:"100%",padding:"14px 20px",background:"#C97A5C",border:"none",borderRadius:10,color:"#1A0B11",fontSize:15,fontWeight:600,fontFamily:"inherit",cursor:"pointer",marginBottom:10},children:t("ageGate.confirm")}),D.jsx("button",{onClick:r,style:{display:"block",width:"100%",padding:"10px 20px",background:"transparent",border:"none",color:"rgba(244, 236, 224, 0.5)",fontSize:13,fontFamily:"inherit",cursor:"pointer"},children:t("ageGate.decline")})]})})}const dA=12,fA=500,hA=3,pA=1500;function mA(){return typeof window>"u"||typeof DeviceMotionEvent>"u"?"unavailable":typeof DeviceMotionEvent.requestPermission=="function"?"unknown":"granted"}function gA(t,e=!0){const[n,i]=Re.useState(mA),r=Re.useRef(t);Re.useEffect(()=>{r.current=t},[t]);const s=Re.useCallback(async()=>{if(typeof DeviceMotionEvent>"u")return i("unavailable"),"unavailable";if(typeof DeviceMotionEvent.requestPermission=="function")try{const o=await DeviceMotionEvent.requestPermission();return i(o),o}catch{return i("denied"),"denied"}return i("granted"),"granted"},[]);return Re.useEffect(()=>{if(!e||n!=="granted")return;let o=9.8;const a=[];let l=0;const c=d=>{var _;const f=d.accelerationIncludingGravity??d.acceleration;if(!f)return;const h=Math.hypot(f.x??0,f.y??0,f.z??0),g=Math.abs(h-o);if(o=h,g<dA)return;const x=Date.now();for(a.push(x);a.length&&a[0]<x-fA;)a.shift();a.length>=hA&&x-l>pA&&(l=x,a.length=0,(_=r.current)==null||_.call(r))};return window.addEventListener("devicemotion",c,{passive:!0}),()=>window.removeEventListener("devicemotion",c)},[e,n]),{permission:n,requestPermission:s}}const Vu={accent:"rose",modalStyle:"centered",pickerLayout:"gallery",density:"roomy",bgMood:"wine"},vA={rose:{hex:"#C97A5C",name:"Bisque"},ember:{hex:"#D14B3D",name:"Ember"},sage:{hex:"#7A8F6A",name:"Sage"},iris:{hex:"#8478B8",name:"Iris"},amber:{hex:"#D4A24C",name:"Amber"}},_A={wine:{from:"#1A0B11",to:"#2A1620",label:"Wine"},ink:{from:"#0E0F1A",to:"#1A1C2E",label:"Ink"},forest:{from:"#0E1612",to:"#1A2620",label:"Forest"},smoke:{from:"#161210",to:"#26201E",label:"Smoke"}},xA={bone:{bg:"#F4ECE0",fg:"#2A1A14",accent:"#A14B3D"},blush:{bg:"#E8C5BD",fg:"#3A1F1A",accent:"#8A3530"},sage:{bg:"#C8D2BC",fg:"#23301E",accent:"#5A6F4C"},ink:{bg:"#2A2530",fg:"#F0E8DC",accent:"#C97A5C"},amber:{bg:"#E8C885",fg:"#3A2810",accent:"#8A5A20"},iris:{bg:"#C8C0E0",fg:"#221A38",accent:"#5A4C8A"}},yA="dice-settings-v2";function SA(t){return{dice:t,accent:Vu.accent,bgMood:Vu.bgMood,muted:!1}}function MA(t,e){try{const n=localStorage.getItem(t);return n?{...e,...JSON.parse(n)}:e}catch{return e}}function EA(){const{t,locale:e,strings:n}=Xd(),i=`${yA}-${e}`,r=Re.useMemo(()=>SA(n.dice),[n.dice]),[s,o]=Re.useState(Vu),[a,l]=Re.useState(!1),[c,d]=Re.useState(!1),[f,h]=Re.useState(!1),[g,x]=Re.useState("dice"),[_,p]=Re.useState(null),[u,v]=Re.useState(()=>MA(i,r));Re.useEffect(()=>{try{localStorage.setItem(i,JSON.stringify(u))}catch{}},[u,i]);const m=re=>v(he=>({...he,...re})),S=()=>v(r),{dice:R,accent:C,bgMood:w,muted:U}=u,M=re=>m({dice:re}),E=re=>m({accent:re}),k=re=>m({bgMood:re}),K=()=>m({muted:!u.muted}),[J,I]=Re.useState(()=>u.dice.filter(re=>re.active).map(re=>{var he;return{id:re.id,value:re.faces[0],phrase:((he=re.phrases)==null?void 0:he[0])??re.faces[0]}})),[V,W]=Re.useState(!1),[q,P]=Re.useState(30),[b,N]=Re.useState(30),[Y,Z]=Re.useState(!1),H=Re.useRef(null),$=Re.useRef(null),se=Re.useRef(U);Re.useEffect(()=>{se.current=U},[U]),Re.useEffect(()=>{const re=new Audio("/sounds/done.mp3");re.preload="auto",$.current=re},[]),Re.useEffect(()=>{const re=he=>{var A,y;((A=he.data)==null?void 0:A.type)==="__activate_edit_mode"&&d(!0),((y=he.data)==null?void 0:y.type)==="__deactivate_edit_mode"&&(d(!1),l(!1))};return window.addEventListener("message",re),window.parent.postMessage({type:"__edit_mode_available"},"*"),()=>window.removeEventListener("message",re)},[]);const de=(re,he)=>{o(A=>({...A,[re]:he})),(re==="accent"||re==="bgMood")&&m({[re]:he}),window.parent.postMessage({type:"__edit_mode_set_keys",edits:{[re]:he}},"*")},fe=R.filter(re=>re.active),be=Re.useMemo(()=>fe.map(re=>({faces:re.faces,palette:{...xA[re.palette],label:re.label}})),[fe.map(re=>re.id+re.palette+re.faces.join("|")).join("|")]),Ae=vA[C].hex,ye=_A[w],Ue=()=>{var re;V||(W(!0),(re=H.current)==null||re.throw())},{permission:z,requestPermission:ot}=gA(Ue,!f),xe=()=>{z==="unknown"&&ot(),Ue()},Ee=re=>{const he=fe.map((y,B)=>{var ee;const Q=re[B];return{id:y.id,value:y.faces[Q]??y.faces[0],phrase:((ee=y.phrases)==null?void 0:ee[Q])??y.faces[Q]??y.faces[0]}});I(he),W(!1);const A=he.find(y=>y.id==="duration");if(A){const y=String(A.value).match(/\d+/),B=y?parseInt(y[0],10):NaN;Number.isFinite(B)&&(P(B),N(B),Z(!1))}};Re.useEffect(()=>{if(!Y)return;const re=setInterval(()=>{P(he=>he<=1?(Z(!1),!se.current&&$.current&&($.current.currentTime=0,$.current.play().catch(()=>{})),b):he-1)},1e3);return()=>clearInterval(re)},[Y,b]);const ge=Re.useMemo(()=>{if(!J.length)return t("ui.pickDiceToBegin");const re=Object.fromEntries(J.map(Q=>[Q.id,Q.phrase])),he=re.activity_mf||re.activity_mm||re.activity_ff||"",A=re.intensity?` ${re.intensity.toLowerCase()}`:"",y=re.location?` ${re.location}`:"",B=re.duration?` ${re.duration}`:"";return he?`${he}${A}${y}${B}`:J.map(Q=>Q.value).join(" · ")},[J,t]);return D.jsxs("main",{style:{width:"100vw",height:"100dvh",position:"relative",overflow:"hidden",background:`radial-gradient(ellipse at 30% 0%, ${ye.to} 0%, ${ye.from} 60%, #000 100%)`,color:"#F4ECE0",fontFamily:'"Inter", -apple-system, system-ui, sans-serif'},children:[D.jsx(uA,{}),D.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",opacity:.06,mixBlendMode:"overlay",backgroundImage:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' /></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/></svg>")`}}),D.jsx(Hw,{prompt:ge,accentHex:Ae,rolling:V,sceneDice:be,sceneRef:H,bgFrom:ye.from,results:J,dice:R,timer:q,timerTotal:b,timerRunning:Y,muted:U,onToggleMute:K,onTimerToggle:()=>Z(re=>!re),onTimerReset:()=>{P(b),Z(!1)},onThrow:xe,onSettled:Ee,onOpenSettings:()=>h(!0),density:s.density}),f&&D.jsx(eA,{style:s.modalStyle,tab:g,setTab:x,dice:R,setDice:M,accent:C,setAccent:E,bgMood:w,setBgMood:k,accentHex:Ae,editingDieId:_,setEditingDieId:p,pickerLayout:s.pickerLayout,density:s.density,onReset:S,onClose:()=>{h(!1),p(null)}}),c&&D.jsx(cA,{tweaks:s,updateTweak:de,open:a,setOpen:l})]})}zc.createRoot(document.getElementById("app")).render(D.jsx(kw,{children:D.jsx(EA,{})}));
