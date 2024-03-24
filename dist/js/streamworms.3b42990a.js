(()=>{"use strict";const e=Object.freeze({DefaultMinMinutes:30,DefaultMaxMinutes:90,DefaultMaxHeight:"25",DefaultMaxWidth:"25",ZeroMediaDurationWarning:"Unable to calculate media duration for the requested media. Please set the media duration (in seconds) via the `mediaDuration` parameter. Parameter supports decimal values.",ContentTypeNotFoundError:"Unable to determine content type of from media URL. Defaulting to `img` tag",ContentTypeNotSupportedError:'Content type not yet supported. Defaulting to `img` tag". Content type found: `{0}`',FetchImageError:"Error fetching image from URL '{0}'. Error status: '{1}'"}),t={getMediaCoordinateStyles:function(e,t,a){let n,i,r,o,l,s=.5*window.innerHeight,m=.5*window.innerWidth;do{l=Math.floor(4*Math.random())}while(l===e);do{r=Math.floor(Math.random()*m)}while(r+a>m);do{o=Math.floor(Math.random()*s)}while(o+t>s);return n=l%2==0?r:m+r,i=l<2?o:s+o,{quadrant:l,left:`${n}px`,top:`${i}px`}},randomIntFromInterval:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}},a=60*e.DefaultMinMinutes*1e3,n=60*e.DefaultMaxMinutes*1e3,i=document.getElementById("media-div");let r,o,l,s,m=!0;function u(e){let a=t.randomIntFromInterval(s.minDelay,s.maxDelay);m&&(a=0,m=!1),setTimeout((()=>{"img"===o?(e.src="",e.src=s.mediaUrl):(e.currentTime=0,e.play()),i.style.visibility="visible",setTimeout((()=>{i.style.visibility="hidden",function(e){let a=t.getMediaCoordinateStyles(r,e.height,e.width);r=a.quadrant,e.style.left=a.left,e.style.top=a.top}(e),u(e)}),s.mediaDuration)}),a)}function d(e,t,a){return e?0:c(t)?60*t*1e3:a}function c(e){return!isNaN(e)&&!isNaN(parseFloat(e))&&parseFloat(e)>0}(async function(){let t=new Proxy(new URLSearchParams(window.location.search),{get:(e,t)=>e.get(t||"")}),i="true"===t.skipDelay,r=d(i,t.max,n),o=d(i,t.min,a),l=c(t.maxHeight)?t.maxHeight:e.DefaultMaxHeight,s=c(t.maxWidth)?t.maxWidth:e.DefaultMaxWidth,m=await async function(e){return e||((await fetch("/js/resources/media.json",{mode:"cors"}).then((e=>e.ok?e.json():Promise.reject(e))).catch((e=>{console.log(e)}))).mediaPath||"/media/worms.gif")}(t.mediaUrl),u=await async function(t){let a,n=await fetch(t,{mode:"cors"}).then((e=>e.ok?(a=e.headers.get("Content-Type"),Promise.resolve(e)):Promise.reject(e))).then((e=>e.arrayBuffer())).then((e=>function(e){let t=0;for(let a=0,n=e.length;a<n;a++)if(33===e[a]&&249===e[a+1]&&4===e[a+2]&&0===e[a+7]){const n=e[a+5]<<8|255&e[a+4];t+=n<2?10:n}return 10*t}(new Uint8Array(e)))).catch((a=>{throw new Error(e.FetchImageError.replace("{0}",t).replace("{1}",`${a.status} - ${a.statusText}`))}));return{contentType:a,duration:n}}(m);return function(t){if(t.maxDelayMillis<t.minDelayMillis&&(t.maxDelayMillis=n,t.minDelayMillis=a),0===t.mediaDuration)throw new Error(e.ZeroMediaDurationWarning);return t}({skipDelay:i,maxDelay:r,minDelay:o,maxHeight:l,maxWidth:s,mediaUrl:m,mediaDuration:c(t.mediaDuration)?1e3*t.mediaDuration:u.duration||0,contentType:u.contentType})})().then((t=>{s=t,o=function(t){switch(t){case"image/avif":case"image/gif":case"image/jpeg":case"image/png":case"image/svg+xml":case"image/webp":case t.startsWith("image/"):return"img";case"video/webm":case t.startsWith("video/"):return"video";default:return t?console.warn(e.ContentTypeNotSupportedError.replace("{0}",t)):console.warn(e.ContentTypeNotFoundError),"img"}}(s.contentType),l=function(e,t){let a=document.createElement(e);switch(a.id="rendered-media",a.style.objectFit="contain",a.style.maxHeight=t.maxHeight+"%",a.style.maxWidth=t.maxWidth+"%",a.style.position="absolute",a.style.top="0",a.style.left="0",a.alt="Just a lil' worm guy",e){case"img":return a;case"video":return function(e,t){let a=document.createElement("source");return a.src=t.mediaUrl,a.type=t.contentType,e.autoplay=!0,e.appendChild(a),e}(a,t);default:throw new Error(`Tag name ${e} not recognized`)}}(o,s)})).then((()=>{i.appendChild(l),u(l)}))})();
//# sourceMappingURL=streamworms.3b42990a.js.map