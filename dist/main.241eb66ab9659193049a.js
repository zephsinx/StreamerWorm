(()=>{var e={279:(e,t)=>{t.DefaultMinMinutes=30,t.DefaultMaxMinutes=90,t.DefaultMaxHeight="25",t.DefaultMaxWidth="25"},21:(e,t)=>{t.MediaList=[{path:"media/worms-transparent.gif",durationMillis:4410}]}},t={};function a(i){var s=t[i];if(void 0!==s)return s.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,a),n.exports}(()=>{"use strict";const e=a(279),t=a(21),i=60*e.DefaultMinMinutes*1e3,s=60*e.DefaultMaxMinutes*1e3;let n=u(0,3);const l=function(){let t=new Proxy(new URLSearchParams(window.location.search),{get:(e,t)=>e.get(t||"")}),a="true"===t.skipDelay;return function(e){return e.maxDelayMillis<e.minDelayMillis&&(e.maxDelayMillis=s,e.minDelayMillis=i),e}({maxDelay:m(a,t.max,s),minDelay:m(a,t.min,i),maxHeight:d(t.maxHeight)?t.maxHeight:e.DefaultMaxHeight,maxWidth:d(t.maxWidth)?t.maxWidth:e.DefaultMaxWidth})}(),r=t.MediaList[0],o=function(e){let t,a=e.slice((Math.max(0,e.lastIndexOf("."))||1/0)+1);switch(a){case"apng":case"avif":case"gif":case"jpg":case"jpeg":case"jpe":case"jif":case"png":case"svg":case"jfif":case"webp":t="img";break;case"webm":t="video";break;default:throw"File extension ."+a+" is not yet supported"}return t}(r.path),c=function(e,t){let a=document.createElement(e);switch(a.id="rendered-media",a.style.objectFit="contain",a.style.maxHeight=t.maxHeight+"%",a.style.maxWidth=t.maxWidth+"%",a.style.position="absolute",e){case"img":return a;case"video":return function(e){let t=document.createElement("source");return t.src=r.path,t.type="video/webm",e.autoplay=!0,e.appendChild(t),e}(a);default:throw"Tag name "+e+" not recognized"}}(o,l);function u(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function m(e,t,a){return e?0:d(t)?60*t*1e3:a}function d(e){return!isNaN(e)&&!isNaN(parseFloat(e))&&parseFloat(e)>0}document.getElementById("media-div").appendChild(c),function e(t){let a=u(l.minDelay,l.maxDelay);setTimeout((()=>{"img"===o?(t.src="",t.src=r.path):(t.currentTime=0,t.play()),t.style.visibility="visible",setTimeout((()=>{t.style.visibility="hidden",function(e){let t=u(0,3);for(;n===t;)t=u(0,3);switch(n=t,e.style.top="",e.style.bottom="",e.style.left="",e.style.right="",t){case 0:e.style.top="0px",e.style.left="0px";break;case 1:e.style.top="0px",e.style.right="0px";break;case 2:e.style.bottom="0px",e.style.right="0px";break;case 3:e.style.bottom="0px",e.style.left="0px"}}(t),e(t)}),r.durationMillis)}),a)}(c)})()})();
//# sourceMappingURL=main.241eb66ab9659193049a.js.map