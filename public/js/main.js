var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){if(n.get||n.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=n.value)},$jscomp.getGlobal=function(t){return"undefined"!=typeof window&&window===t?t:"undefined"!=typeof global&&null!=global?global:t},$jscomp.global=$jscomp.getGlobal(this),$jscomp.SYMBOL_PREFIX="jscomp_symbol_",$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){},$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)},$jscomp.symbolCounter_=0,$jscomp.Symbol=function(t){return $jscomp.SYMBOL_PREFIX+(t||"")+$jscomp.symbolCounter_++},$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var t=$jscomp.global.Symbol.iterator;t||(t=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator")),"function"!=typeof Array.prototype[t]&&$jscomp.defineProperty(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}}),$jscomp.initSymbolIterator=function(){}},$jscomp.arrayIterator=function(t){var e=0;return $jscomp.iteratorPrototype(function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}})},$jscomp.iteratorPrototype=function(t){return $jscomp.initSymbolIterator(),t={next:t},t[$jscomp.global.Symbol.iterator]=function(){return this},t},$jscomp.array=$jscomp.array||{},$jscomp.iteratorFromArray=function(t,e){$jscomp.initSymbolIterator(),t instanceof String&&(t+="");var n=0,r={next:function(){if(n<t.length){var o=n++;return{value:e(o,t[o]),done:!1}}return r.next=function(){return{done:!0,value:void 0}},r.next()}};return r[Symbol.iterator]=function(){return r},r},$jscomp.polyfill=function(t,e,n,r){if(e){for(n=$jscomp.global,t=t.split("."),r=0;r<t.length-1;r++){var o=t[r];o in n||(n[o]={}),n=n[o]}t=t[t.length-1],r=n[t],e=e(r),e!=r&&null!=e&&$jscomp.defineProperty(n,t,{configurable:!0,writable:!0,value:e})}},$jscomp.polyfill("Array.prototype.keys",function(t){return t?t:function(){return $jscomp.iteratorFromArray(this,function(t){return t})}},"es6-impl","es3");var $jscomp$this=this;!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():t.anime=e()}(this,function(){function t(t){if(!Y.col(t))try{return document.querySelectorAll(t)}catch(t){}}function e(t,e){for(var n=t.length,r=2<=arguments.length?arguments[1]:void 0,o=[],a=0;a<n;a++)if(a in t){var i=t[a];e.call(r,i,a,t)&&o.push(i)}return o}function n(t){return t.reduce(function(t,e){return t.concat(Y.arr(e)?n(e):e)},[])}function r(e){return Y.arr(e)?e:(Y.str(e)&&(e=t(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function o(t,e){return t.some(function(t){return t===e})}function a(t){var e={},n;for(n in t)e[n]=t[n];return e}function i(t,e){var n=a(t),r;for(r in t)n[r]=e.hasOwnProperty(r)?e[r]:t[r];return n}function u(t,e){var n=a(t),r;for(r in e)n[r]=Y.und(t[r])?e[r]:t[r];return n}function s(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,n,r){return e+e+n+n+r+r});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);t=parseInt(e[1],16);var n=parseInt(e[2],16),e=parseInt(e[3],16);return"rgba("+t+","+n+","+e+",1)"}function c(t){function e(t,e,n){return 0>n&&(n+=1),1<n&&--n,n<1/6?t+6*(e-t)*n:.5>n?e:n<2/3?t+(e-t)*(2/3-n)*6:t}var n=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);t=parseInt(n[1])/360;var r=parseInt(n[2])/100,o=parseInt(n[3])/100,n=n[4]||1;if(0==r)o=r=t=o;else{var a=.5>o?o*(1+r):o+r-o*r,i=2*o-a,o=e(i,a,t+1/3),r=e(i,a,t);t=e(i,a,t-1/3)}return"rgba("+255*o+","+255*r+","+255*t+","+n+")"}function f(t){if(t=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))return t[2]}function l(t){return-1<t.indexOf("translate")||"perspective"===t?"px":-1<t.indexOf("rotate")||-1<t.indexOf("skew")?"deg":void 0}function p(t,e){return Y.fnc(t)?t(e.target,e.id,e.total):t}function d(t,e){if(e in t.style)return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function m(t,e){return Y.dom(t)&&o(N,e)?"transform":Y.dom(t)&&(t.getAttribute(e)||Y.svg(t)&&t[e])?"attribute":Y.dom(t)&&"transform"!==e&&d(t,e)?"css":null!=t[e]?"object":void 0}function g(t,n){var r=l(n),r=-1<n.indexOf("scale")?1:0+r;if(t=t.style.transform,!t)return r;for(var o=[],a=[],i=[],u=/(\w+)\((.+?)\)/g;o=u.exec(t);)a.push(o[1]),i.push(o[2]);return t=e(i,function(t,e){return a[e]===n}),t.length?t[0]:r}function y(t,e){switch(m(t,e)){case"transform":return g(t,e);case"css":return d(t,e);case"attribute":return t.getAttribute(e)}return t[e]||0}function h(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var r=f(t)||0;switch(e=parseFloat(e),t=parseFloat(t.replace(n[0],"")),n[0][0]){case"+":return e+t+r;case"-":return e-t+r;case"*":return e*t+r}}function v(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function b(t){t=t.points;for(var e=0,n,r=0;r<t.numberOfItems;r++){var o=t.getItem(r);0<r&&(e+=v(n,o)),n=o}return e}function j(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return 2*Math.PI*t.getAttribute("r");case"rect":return 2*t.getAttribute("width")+2*t.getAttribute("height");case"line":return v({x:t.getAttribute("x1"),y:t.getAttribute("y1")},{x:t.getAttribute("x2"),y:t.getAttribute("y2")});case"polyline":return b(t);case"polygon":var e=t.points;return b(t)+v(e.getItem(e.numberOfItems-1),e.getItem(0))}}function x(t,e){function n(n){return n=void 0===n?0:n,t.el.getPointAtLength(1<=e+n?e+n:0)}var r=n(),o=n(-1),a=n(1);switch(t.property){case"x":return r.x;case"y":return r.y;case"angle":return 180*Math.atan2(a.y-o.y,a.x-o.x)/Math.PI}}function w(t,e){var n=/-?\d*\.?\d+/g,r;if(r=Y.pth(t)?t.totalLength:t,Y.col(r))if(Y.rgb(r)){var o=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);r=o?"rgba("+o[1]+",1)":r}else r=Y.hex(r)?s(r):Y.hsl(r)?c(r):void 0;else o=(o=f(r))?r.substr(0,r.length-o.length):r,r=e&&!/\s/g.test(r)?o+e:o;return r+="",{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:Y.str(t)||e?r.split(n):[]}}function A(t){return t=t?n(Y.arr(t)?t.map(r):r(t)):[],e(t,function(t,e,n){return n.indexOf(t)===e})}function I(t){var e=A(t);return e.map(function(t,n){return{target:t,id:n,total:e.length}})}function M(t,e){var n=a(e);if(Y.arr(t)){var o=t.length;2!==o||Y.obj(t[0])?Y.fnc(e.duration)||(n.duration=e.duration/o):t={value:t}}return r(t).map(function(t,n){return n=n?0:e.delay,t=Y.obj(t)&&!Y.pth(t)?t:{value:t},Y.und(t.delay)&&(t.delay=n),t}).map(function(t){return u(t,n)})}function S(t,e){var n={},r;for(r in t){var o=p(t[r],e);Y.arr(o)&&(o=o.map(function(t){return p(t,e)}),1===o.length&&(o=o[0])),n[r]=o}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function O(t){return Y.arr(t)?_.apply(this,t):V[t]}function P(t,e){var n;return t.tweens.map(function(r){r=S(r,e);var o=r.value,a=y(e.target,t.name),i=n?n.to.original:a,i=Y.arr(o)?o[0]:i,u=h(Y.arr(o)?o[1]:o,i),a=f(u)||f(i)||f(a);return r.from=w(i,a),r.to=w(u,a),r.start=n?n.end:t.offset,r.end=r.start+r.delay+r.duration,r.easing=O(r.easing),r.elasticity=(1e3-Math.min(Math.max(r.elasticity,1),999))/1e3,r.isPath=Y.pth(o),r.isColor=Y.col(r.from.original),r.isColor&&(r.round=1),n=r})}function k(t,r){return e(n(t.map(function(t){return r.map(function(e){var n=m(t.target,e.name);if(n){var r=P(e,t);e={type:n,property:e.name,animatable:t,tweens:r,duration:r[r.length-1].end,delay:r[0].delay}}else e=void 0;return e})})),function(t){return!Y.und(t)})}function C(t,e,n,r){var o="delay"===t;return e.length?(o?Math.min:Math.max).apply(Math,e.map(function(e){return e[t]})):o?r.delay:n.offset+r.delay+r.duration}function F(t){var e=i(L,t),n=i(T,t),r=I(t.targets),o=[],a=u(e,n),s;for(s in t)a.hasOwnProperty(s)||"targets"===s||o.push({name:s,offset:a.offset,tweens:M(t[s],n)});return t=k(r,o),u(e,{children:[],animatables:r,animations:t,duration:C("duration",t,e,n),delay:C("delay",t,e,n)})}function E(t){function n(){return window.Promise&&new Promise(function(t){return l=t})}function r(t){return m.reversed?m.duration-t:t}function o(t){for(var n=0,r={},o=m.animations,a=o.length;n<a;){var i=o[n],u=i.animatable,s=i.tweens,c=s.length-1,f=s[c];c&&(f=e(s,function(e){return t<e.end})[0]||f);for(var s=Math.min(Math.max(t-f.start-f.delay,0),f.duration)/f.duration,l=isNaN(s)?1:f.easing(s,f.elasticity),s=f.to.strings,p=f.round,c=[],g=void 0,g=f.to.numbers.length,y=0;y<g;y++){var h=void 0,h=f.to.numbers[y],v=f.from.numbers[y],h=f.isPath?x(f.value,l*h):v+l*(h-v);p&&(f.isColor&&2<y||(h=Math.round(h*p)/p)),c.push(h)}if(f=s.length)for(g=s[0],l=0;l<f;l++)p=s[l+1],y=c[l],isNaN(y)||(g=p?g+(y+p):g+(y+" "));else g=c[0];Z[i.type](u.target,i.property,g,r,u.id),i.currentValue=g,n++}if(n=Object.keys(r).length)for(o=0;o<n;o++)X||(X=d(document.body,"transform")?"transform":"-webkit-transform"),m.animatables[o].target.style[X]=r[o].join(" ");m.currentTime=t,m.progress=t/m.duration*100}function a(t){m[t]&&m[t](m)}function i(){m.remaining&&!0!==m.remaining&&m.remaining--}function u(t){var e=m.duration,u=m.offset,d=u+m.delay,g=m.currentTime,y=m.reversed,h=r(t);if(m.children.length){var v=m.children,b=v.length;if(h>=m.currentTime)for(var j=0;j<b;j++)v[j].seek(h);else for(;b--;)v[b].seek(h)}(h>=d||!e)&&(m.began||(m.began=!0,a("begin")),a("run")),h>u&&h<e?o(h):(h<=u&&0!==g&&(o(0),y&&i()),(h>=e&&g!==e||!e)&&(o(e),y||i())),a("update"),t>=e&&(m.remaining?(c=s,"alternate"===m.direction&&(m.reversed=!m.reversed)):(m.pause(),m.completed||(m.completed=!0,a("complete"),"Promise"in window&&(l(),p=n()))),f=0)}t=void 0===t?{}:t;var s,c,f=0,l=null,p=n(),m=F(t);return m.reset=function(){var t=m.direction,e=m.loop;for(m.currentTime=0,m.progress=0,m.paused=!0,m.began=!1,m.completed=!1,m.reversed="reverse"===t,m.remaining="alternate"===t&&1===e?2:e,o(0),t=m.children.length;t--;)m.children[t].reset()},m.tick=function(t){s=t,c||(c=s),u((f+s-c)*E.speed)},m.seek=function(t){u(r(t))},m.pause=function(){var t=q.indexOf(m);-1<t&&q.splice(t,1),m.paused=!0},m.play=function(){m.paused&&(m.paused=!1,c=0,f=r(m.currentTime),q.push(m),z||B())},m.reverse=function(){m.reversed=!m.reversed,c=0,f=r(m.currentTime)},m.restart=function(){m.pause(),m.reset(),m.play()},m.finished=p,m.reset(),m.autoplay&&m.play(),m}var L={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},T={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},N="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),X,Y={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},pth:function(t){return Y.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||Y.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return"undefined"==typeof t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return Y.hex(t)||Y.rgb(t)||Y.hsl(t)}},_=function(){function t(t,e,n){return(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t}return function(e,n,r,o){if(0<=e&&1>=e&&0<=r&&1>=r){var a=new Float32Array(11);if(e!==n||r!==o)for(var i=0;11>i;++i)a[i]=t(.1*i,e,r);return function(i){if(e===n&&r===o)return i;if(0===i)return 0;if(1===i)return 1;for(var u=0,s=1;10!==s&&a[s]<=i;++s)u+=.1;--s;var s=u+(i-a[s])/(a[s+1]-a[s])*.1,c=3*(1-3*r+3*e)*s*s+2*(3*r-6*e)*s+3*e;if(.001<=c){for(u=0;4>u&&(c=3*(1-3*r+3*e)*s*s+2*(3*r-6*e)*s+3*e,0!==c);++u)var f=t(s,e,r)-i,s=s-f/c;i=s}else if(0===c)i=s;else{var s=u,u=u+.1,l=0;do f=s+(u-s)/2,c=t(f,e,r)-i,0<c?u=f:s=f;while(1e-7<Math.abs(c)&&10>++l);i=f}return t(i,n,o)}}}}(),V=function(){function t(t,e){return 0===t||1===t?t:-Math.pow(2,10*(t-1))*Math.sin(2*(t-1-e/(2*Math.PI)*Math.asin(1))*Math.PI/e)}var e="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),n={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],t],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(e,n){return 1-t(1-e,n)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(e,n){return.5>e?t(2*e,n)/2:1-t(-2*e+2,n)/2}]},r={linear:_(.25,.25,.75,.75)},o={},a;for(a in n)o.type=a,n[o.type].forEach(function(t){return function(n,o){r["ease"+t.type+e[o]]=Y.fnc(n)?n:_.apply($jscomp$this,n)}}(o)),o={type:o.type};return r}(),Z={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,r,o){r[o]||(r[o]=[]),r[o].push(e+"("+n+")")}},q=[],z=0,B=function(){function t(){z=requestAnimationFrame(e)}function e(e){var n=q.length;if(n){for(var r=0;r<n;)q[r]&&q[r].tick(e),r++;t()}else cancelAnimationFrame(z),z=0}return t}();return E.version="2.2.0",E.speed=1,E.running=q,E.remove=function(t){t=A(t);for(var e=q.length;e--;)for(var n=q[e],r=n.animations,a=r.length;a--;)o(t,r[a].animatable.target)&&(r.splice(a,1),r.length||n.pause())},E.getValue=y,E.path=function(e,n){var r=Y.str(e)?t(e)[0]:e,o=n||100;return function(t){return{el:r,property:t,totalLength:j(r)*(o/100)}}},E.setDashoffset=function(t){var e=j(t);return t.setAttribute("stroke-dasharray",e),e},E.bezier=_,E.easings=V,E.timeline=function(t){var e=E(t);return e.pause(),e.duration=0,e.add=function(n){return e.children.forEach(function(t){t.began=!0,t.completed=!0}),r(n).forEach(function(n){var r=u(n,i(T,t||{}));r.targets=r.targets||t.targets,n=e.duration;var o=r.offset;r.autoplay=!1,r.direction=e.direction,r.offset=Y.und(o)?n:h(o,n),e.began=!0,e.completed=!0,e.seek(r.offset),r=E(r),r.began=!0,r.completed=!0,r.duration>n&&(e.duration=r.duration),e.children.push(r)}),e.seek(0),e.reset(),e.autoplay&&e.restart(),e},e},E.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},E}),$(function(){function t(t){t.each(function(){var t=$(this).closest(".text-input");$(this).val()||t.addClass("error")})}$("[data-form]").on("submit",function(e){var n=$(this);if(e.preventDefault(),t(n.find("input[type=text]")),t(n.find("input[type=email]")),t(n.find("textarea")),!n.find(".text-input.error").length){var r={url:"index.php",type:n.attr("method"),data:n.serialize()};n.find("button[type=submit]").prop("disabled",!0),n.find(".text-input").addClass("disabled"),$.ajax(r).done(function(){n.find("button[type=submit]").prop("disabled",!1).addClass("success").text("Отправлено!")})}}),$("[data-form]").on("focus","input",function(){$(this).closest(".text-input").removeClass("error")}),$("[data-form]").on("focus","textarea",function(){$(this).closest(".text-input").removeClass("error")}),$("[data-form]").on("click",".text-input",function(){$(this).find("input").focus()})}),$(function(){anime({targets:"#data-countdown",countdown:23,duration:3e3,round:1,easing:"easeInOutExpo"})});