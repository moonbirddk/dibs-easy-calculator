!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t,i){window,e.exports=function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=3)}([function(e,t,i){"use strict";var n=function(e){return"number"==typeof e&&!isNaN(e)};e.exports=function(e,t){var i=(t=t||t.currentTarget).getBoundingClientRect(),a=e.originalEvent||e,s=0,r=0;return e.touches&&e.touches.length?n(e.touches[0].pageX)&&n(e.touches[0].pageY)?(s=e.touches[0].pageX,r=e.touches[0].pageY):n(e.touches[0].clientX)&&n(e.touches[0].clientY)&&(s=a.touches[0].clientX,r=a.touches[0].clientY):n(e.pageX)&&n(e.pageY)?(s=e.pageX,r=e.pageY):e.currentPoint&&n(e.currentPoint.x)&&n(e.currentPoint.y)&&(s=e.currentPoint.x,r=e.currentPoint.y),{x:s-i.left,y:r-i.top}}},function(e,t,i){(function(t){var i=t.CustomEvent;e.exports=function(){try{var e=new i("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?i:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(e,t){var i=document.createEvent("CustomEvent");return t?i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):i.initCustomEvent(e,!1,!1,void 0),i}:function(e,t){var i=document.createEventObject();return i.type=e,t?(i.bubbles=Boolean(t.bubbles),i.cancelable=Boolean(t.cancelable),i.detail=t.detail):(i.bubbles=!1,i.cancelable=!1,i.detail=void 0),i}}).call(this,i(2))},function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n);function s(e){return 0===e.offsetWidth||0===e.offsetHeight||!1===e.open}window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;var r=Number.isNaN||function(e){return e!=e},o=Number.isFinite||function(e){return!("number"!=typeof e||r(e)||e===1/0||e===-1/0)},c=function(){var e=[],t=!1;function i(){t||(t=!0,window.requestAnimationFrame?window.requestAnimationFrame(n):setTimeout(n,66))}function n(){e.forEach((function(e){e()})),t=!1}return{add:function(t){!e.length&&window.addEventListener("resize",i),function(t){t&&e.push(t)}(t)}}}(),l={emit:function(e,t,i){e.dispatchEvent(new a.a(t,i))},isFiniteNumber:o,getFirstNumberLike:function(){if(!arguments.length)return null;for(var e=0,t=arguments.length;e<t;e++)if(i=arguments[e],o(parseFloat(i))||o(i))return arguments[e];var i},getDimension:function(e,t){var i,n=function(e){for(var t=[],i=e.parentNode;i&&s(i);)t.push(i),i=i.parentNode;return t}(e),a=n.length,r=[],o=e[t],c=0;function l(e){void 0!==e.open&&(e.open=!e.open)}if(a){for(c=0;c<a;c++)i=n[c].style,r[c]=i.display,i.display="block",i.height="0",i.overflow="hidden",i.visibility="hidden",l(n[c]);for(o=e[t],c=0;c<a;c++)i=n[c].style,l(n[c]),i.display=r[c],i.height="",i.overflow="",i.visibility=""}return o},insertAfter:function(e,t){e.parentNode.insertBefore(t,e.nextSibling)},forEachAncestorsAndSelf:function(e,t){for(t(e);e.parentNode&&!t(e);)e=e.parentNode;return e},clamp:function(e,t,i){return t<i?e<t?t:e>i?i:e:e<i?i:e>t?t:e},optimizedResize:c},u=i(0),d=i.n(u),_={MIN_DEFAULT:0,MAX_DEFAULT:100,RANGE_CLASS:"rangeslider",FILL_CLASS:"rangeslider__fill",FILL_BG_CLASS:"rangeslider__fill__bg",HANDLE_CLASS:"rangeslider__handle",DISABLED_CLASS:"rangeslider--disabled",STEP_DEFAULT:1,START_EVENTS:["mousedown","touchstart","pointerdown"],MOVE_EVENTS:["mousemove","touchmove","pointermove"],END_EVENTS:["mouseup","touchend","pointerup"],PLUGIN_NAME:"rangeslider-js"};function h(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var v=function(e){var t=document&&document.createElement("div");return t.classList.add(e),t},f=function(e){return"".concat(e).replace(".","").length-1},m=function(){function e(t,i){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i=i||{},this.element=t,this.options=i,this.onSlideEventsCount=-1,this.isInteracting=!1,this.needTriggerEvents=!1,this.constructor.count=this.constructor.count||0,this.identifier="js-".concat(_.PLUGIN_NAME,"-").concat(this.constructor.count++),this.min=l.getFirstNumberLike(i.min,parseFloat(t.getAttribute("min")),_.MIN_DEFAULT),this.max=l.getFirstNumberLike(i.max,parseFloat(t.getAttribute("max")),_.MAX_DEFAULT),this.value=l.getFirstNumberLike(i.value,parseFloat(t.getAttribute("value")),this.min+(this.max-this.min)/2),this.step=l.getFirstNumberLike(i.step,parseFloat(t.getAttribute("step")),_.STEP_DEFAULT),this.percent=null,this._updatePercentFromValue(),this.toFixed=f(this.step),this.range=v(_.RANGE_CLASS),this.range.id=this.identifier,this.fillBg=v(_.FILL_BG_CLASS),this.fill=v(_.FILL_CLASS),this.handle=v(_.HANDLE_CLASS),["fillBg","fill","handle"].forEach((function(e){return n.range.appendChild(n[e])})),["min","max","step"].forEach((function(e){return t.setAttribute(e,"".concat(n[e]))})),this._setValue(this.value),l.insertAfter(t,this.range),t.style.position="absolute",t.style.width="1px",t.style.height="1px",t.style.overflow="hidden",t.style.opacity="0",["_update","_handleDown","_handleMove","_handleEnd","_startEventListener","_changeEventListener"].forEach((function(e){n[e]=n[e].bind(n)})),this._init(),l.optimizedResize.add(this._update),_.START_EVENTS.forEach((function(e){return n.range.addEventListener(e,n._startEventListener)})),t.addEventListener("change",this._changeEventListener)}var t,i;return t=e,(i=[{key:"_init",value:function(){this._update(),this.options.onInit&&this.options.onInit.call(this,this.value,this.percent,this.position)}},{key:"_updatePercentFromValue",value:function(){this.percent=(this.value-this.min)/(this.max-this.min)}},{key:"_startEventListener",value:function(e){var t=e.target,i=this.identifier,n=!1;l.forEachAncestorsAndSelf(t,(function(e){return n=e.id===i&&!e.classList.contains(_.DISABLED_CLASS)})),n&&this._handleDown(e)}},{key:"_changeEventListener",value:function(e,t){(t&&t.origin)!==this.identifier&&this._setPosition(this._getPositionFromValue(e.target.value))}},{key:"_update",value:function(){this.handleWidth=l.getDimension(this.handle,"offsetWidth"),this.rangeWidth=l.getDimension(this.range,"offsetWidth"),this.maxHandleX=this.rangeWidth-this.handleWidth,this.grabX=this.handleWidth/2,this.position=this._getPositionFromValue(this.value),this.range.classList[this.element.disabled?"add":"remove"](_.DISABLED_CLASS),this._setPosition(this.position),this._updatePercentFromValue(),this._emit("change")}},{key:"_listen",value:function(e){var t=this,i="".concat(e?"add":"remove","EventListener");_.MOVE_EVENTS.forEach((function(e){return document&&document[i](e,t._handleMove)})),_.END_EVENTS.forEach((function(e){document&&document[i](e,t._handleEnd),t.range[i](e,t._handleEnd)}))}},{key:"_handleDown",value:function(e){if(e.preventDefault(),this.isInteracting=!0,this._listen(!0),!e.target.classList.contains(_.HANDLE_CLASS)){var t=d()(e,this.range).x,i=this.range.getBoundingClientRect().left,n=this.handle.getBoundingClientRect().left-i;this._setPosition(t-this.grabX),t>=n&&t<n+this.handleWidth&&(this.grabX=t-n),this._updatePercentFromValue()}}},{key:"_handleMove",value:function(e){this.isInteracting=!0,e.preventDefault();var t=d()(e,this.range).x;this._setPosition(t-this.grabX)}},{key:"_handleEnd",value:function(e){e.preventDefault(),this._listen(!1),this._emit("change"),(this.isInteracting||this.needTriggerEvents)&&this.options.onSlideEnd&&this.options.onSlideEnd.call(this,this.value,this.percent,this.position),this.onSlideEventsCount=0,this.isInteracting=!1}},{key:"_setPosition",value:function(e){var t=this.isInteracting?this._getValueFromPosition(l.clamp(e,0,this.maxHandleX)):this.value,i=this._getPositionFromValue(t);this.fill.style.width=i+this.grabX+"px",this.handle.style.webkitTransform=this.handle.style.transform="translate(".concat(i,"px, -50%)"),this._setValue(t),this.position=i,this.value=t,this._updatePercentFromValue(),(this.isInteracting||this.needTriggerEvents)&&(this.options.onSlideStart&&0===this.onSlideEventsCount&&this.options.onSlideStart.call(this,this.value,this.percent,this.position),this.options.onSlide&&this.options.onSlide.call(this,this.value,this.percent,this.position)),this.onSlideEventsCount++}},{key:"_getPositionFromValue",value:function(e){return(e-this.min)/(this.max-this.min)*this.maxHandleX}},{key:"_getValueFromPosition",value:function(e){var t=e/(this.maxHandleX||1),i=this.step*Math.round(t*(this.max-this.min)/this.step)+this.min;return Number(i.toFixed(this.toFixed))}},{key:"_setValue",value:function(e){(e=l.clamp(e,this.min,this.max))===this.value&&e===this.element.value||(this.value=this.element.value=e,this._emit("input"))}},{key:"_emit",value:function(e){l.emit(this.element,e,{origin:this.identifier})}},{key:"update",value:function(e,t){return e=e||{},Object.keys(e).forEach((function(t){return"string"==typeof e[t]&&(e[t]=parseFloat(e[t]))})),this.needTriggerEvents=t,l.isFiniteNumber(e.min)&&(this.element.setAttribute("min","".concat(e.min)),this.min=e.min),l.isFiniteNumber(e.max)&&(this.element.setAttribute("max","".concat(e.max)),this.max=e.max),l.isFiniteNumber(e.step)&&(this.element.setAttribute("step","".concat(e.step)),this.step=e.step,this.toFixed=f(e.step)),l.isFiniteNumber(e.value)&&this._setValue(e.value),this._update(),this.onSlideEventsCount=0,this.needTriggerEvents=!1,this}},{key:"destroy",value:function(){var e=this;"undefined"!=typeof window&&window.removeEventListener("resize",this._update,!1),_.START_EVENTS.forEach((function(t){return e.range.removeEventListener(t,e._startEventListener)})),this.element.removeEventListener("change",this._changeEventListener),this.element.style.cssText="",delete this.element[_.PLUGIN_NAME],this.range.parentNode.removeChild(this.range)}}])&&h(t.prototype,i),e}();t.default={RangeSlider:m,utils:l,create:function(e,t){function i(e){e[_.PLUGIN_NAME]=e[_.PLUGIN_NAME]||new m(e,t)}e&&(e.length?Array.prototype.slice.call(e).forEach((function(e){return i(e)})):i(e))}}}]).default},function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),s=document.getElementById("ac-easy-calculator-widget");if(s){var r=s.getAttribute("data-currency")||"USD",o=parseInt(s.getAttribute("data-min"))||0,c=parseInt(s.getAttribute("data-max"))||1e4,l=parseInt(s.getAttribute("data-start-value"))||.1*c,u=parseInt(s.getAttribute("data-step"))||1e3,d=s.getAttribute("data-month-label")||"per month",_=s.getAttribute("data-year-label")||"per year",h=s.getAttribute("data-percent-revenue-per-month")||"10",v=s.getAttribute("data-title-slider")||"Your revenue per month",f=s.getAttribute("data-title-visual")||"With Easy you increase your revenue with";s.innerHTML=function(e,t,i,n){return'<div class="ac-easy-calculator"><div class="ac-easy-calculator__slider-container"><div class="ac-easy-calculator__slider-container__title">'+i+'</div><div class="ac-easy-calculator__slider"><input type="range" name="asd" id="ac-easy-calculator-widget-range-slider"><div class="ac-easy-calculator__slider-label" id="ac-easy-calculator__slider-label"></div></div></div><div class="ac-easy-calculator__visual-container" id="ac-easy-calculator__visual-container"><div class="ac-easy-calculator__visual-container__title">'+n+'<span id="ac-easy-extra"></span></div><div class="ac-easy-calculator__visual ac-easy-calculator__visual--1"><div class="ac-easy-calculator__visual__message" id="ac-easy-calculator__visual__message-1"><div class="ac-easy-calculator__visual__message__head"></div><div class="ac-easy-calculator__visual__message__body">'+e+'</div></div><div class="ac-easy-calculator__visual__coins" id="ac-easy-calculator__visual__coins-1"><div class="ac-easy-calculator__visual__coin"><img src="/coin.svg"></div><div class="ac-easy-calculator__visual__coin"><img src="/coin.svg"></div><div class="ac-easy-calculator__visual__coin"><img src="/coin.svg"></div><div class="ac-easy-calculator__visual__coin"><img src="/coin.svg"></div><div class="ac-easy-calculator__visual__coin"><img src="/coin.svg"></div><div class="ac-easy-calculator__visual__coin"><img src="/coin.svg"></div></div></div><div class="ac-easy-calculator__visual ac-easy-calculator__visual--2"><div class="ac-easy-calculator__visual__message" id="ac-easy-calculator__visual__message-2"><div class="ac-easy-calculator__visual__message__head"></div><div class="ac-easy-calculator__visual__message__body">'+t+'</div></div><div class="ac-easy-calculator__visual__coins" id="ac-easy-calculator__visual__coins-2"><div class="ac-easy-calculator__visual__coin"><img src="/coin.svg"></div><div class="ac-easy-calculator__visual__coin"><img src="/coin.svg"></div><div class="ac-easy-calculator__visual__coin"><img src="/coin.svg"></div><div class="ac-easy-calculator__visual__coin"><img src="/coin.svg"></div><div class="ac-easy-calculator__visual__coin"><img src="/coin.svg"></div><div class="ac-easy-calculator__visual__coin"><img src="/coin.svg"></div><div class="ac-easy-calculator__visual__coin"><img src="/coin.svg"></div><div class="ac-easy-calculator__visual__coin"><img src="/coin.svg"></div><div class="ac-easy-calculator__visual__coin"><img src="/coin.svg"></div><div class="ac-easy-calculator__visual__coin"><img src="/coin.svg"></div><div class="ac-easy-calculator__visual__coin"><img src="/coin.svg"></div><div class="ac-easy-calculator__visual__coin"><img src="/coin.svg"></div></div></div></div></div>'}(d,_,v,f);var m=s.querySelector("#ac-easy-calculator__slider-label"),g=s.querySelector("#ac-easy-calculator-widget-range-slider"),p=s.querySelector("#ac-easy-calculator__visual__coins-1").querySelectorAll(".ac-easy-calculator__visual__coin"),y=s.querySelector("#ac-easy-calculator__visual__coins-2").querySelectorAll(".ac-easy-calculator__visual__coin"),b=document.getElementById("ac-easy-calculator__visual__message-1"),E=document.getElementById("ac-easy-calculator__visual__message-2"),S=b.querySelector(".ac-easy-calculator__visual__message__head"),A=E.querySelector(".ac-easy-calculator__visual__message__head"),L={min:o,max:c,value:l,step:u,onSlide:N,onInit:N};a.a.create(g,L);var x=document.querySelector(".ac-easy-calculator-widget-popup-readmore");if(x){var w=document.querySelector(".ac-easy-calculator-widget-popup-readmore__icon-container"),F=document.querySelector(".ac-easy-calculator-widget-popup-readmore__close-link");document.getElementById("ac-easy-extra").appendChild(x),w.addEventListener("click",P),F.addEventListener("click",P.bind(w))}}function N(e,t,i){window.requestAnimationFrame(function(){!function(e){for(var t=100/p.length,i=Math.floor(100*e/t),n=Math.max(0,p.length-1-i),a=100/y.length,s=Math.floor(100*e/a),r=Math.max(0,y.length-1-s),o=0;o<p.length;o++)p[o].classList.remove("is-active");for(o=0;o<y.length;o++)y[o].classList.remove("is-active");p[n].classList.add("is-active"),y[r].classList.add("is-active"),function(e,t){e<=p.length&&b.setAttribute("style","transform: translateY(-"+9*(e+2)+"px);");t<=y.length&&E.setAttribute("style","transform: translateY(-"+9*(t+2)+"px);")}(i,s)}(t),function(e,t,i){m.innerHTML=e.toLocaleString("da")+" "+r,t<m.clientWidth/2-25?m.setAttribute("style","transform: translateX(0);"):t>i-(m.clientWidth/2-28)?m.setAttribute("style","transform: translateX("+(i-m.clientWidth/2-28)+"px);"):m.setAttribute("style","transform: translateX("+(t-m.clientWidth/2+25)+"px)")}(e,i,this.maxHandleX),function(e){S.innerHTML=function(e){return e*(h/100)}(e).toLocaleString("da")+" "+r,A.innerHTML=function(e){return e*(h/100)*12}(e).toLocaleString("da")+" "+r}(e)}.bind(this))}function P(){this.classList.toggle("is-active")}}]);