!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){(function(t){!function(n,r){"use strict";var o={};n.PubSub=o;var i=n.define;!function(t){var e={},n=-1;function r(t){var e;for(e in t)if(t.hasOwnProperty(e))return!0;return!1}function o(t,e,n){try{t(e,n)}catch(t){setTimeout(function(t){return function(){throw t}}(t),0)}}function i(t,e,n){t(e,n)}function u(t,n,r,u){var c,s=e[n],a=u?i:o;if(e.hasOwnProperty(n))for(c in s)s.hasOwnProperty(c)&&a(s[c],t,r)}function c(t,n,o,i){var c=function(t,e,n){return function(){var r=String(t),o=r.lastIndexOf(".");for(u(t,t,e,n);-1!==o;)o=(r=r.substr(0,o)).lastIndexOf("."),u(t,r,e,n)}}(t="symbol"==typeof t?t.toString():t,n,i);return!!function(t){for(var n=String(t),o=Boolean(e.hasOwnProperty(n)&&r(e[n])),i=n.lastIndexOf(".");!o&&-1!==i;)i=(n=n.substr(0,i)).lastIndexOf("."),o=Boolean(e.hasOwnProperty(n)&&r(e[n]));return o}(t)&&(!0===o?c():setTimeout(c,0),!0)}t.publish=function(e,n){return c(e,n,!1,t.immediateExceptions)},t.publishSync=function(e,n){return c(e,n,!0,t.immediateExceptions)},t.subscribe=function(t,r){if("function"!=typeof r)return!1;t="symbol"==typeof t?t.toString():t,e.hasOwnProperty(t)||(e[t]={});var o="uid_"+String(++n);return e[t][o]=r,o},t.subscribeOnce=function(e,n){var r=t.subscribe(e,(function(){t.unsubscribe(r),n.apply(this,arguments)}));return t},t.clearAllSubscriptions=function(){e={}},t.clearSubscriptions=function(t){var n;for(n in e)e.hasOwnProperty(n)&&0===n.indexOf(t)&&delete e[n]},t.countSubscriptions=function(t){var n,r=0;for(n in e)e.hasOwnProperty(n)&&0===n.indexOf(t)&&r++;return r},t.getSubscriptions=function(t){var n,r=[];for(n in e)e.hasOwnProperty(n)&&0===n.indexOf(t)&&r.push(n);return r},t.unsubscribe=function(n){var r,o,i,u="string"==typeof n&&(e.hasOwnProperty(n)||function(t){var n;for(n in e)if(e.hasOwnProperty(n)&&0===n.indexOf(t))return!0;return!1}(n)),c=!u&&"string"==typeof n,s="function"==typeof n,a=!1;if(!u){for(r in e)if(e.hasOwnProperty(r)){if(o=e[r],c&&o[n]){delete o[n],a=n;break}if(s)for(i in o)o.hasOwnProperty(i)&&o[i]===n&&(delete o[i],a=!0)}return a}t.clearSubscriptions(n)}}(o),"function"==typeof i&&i.amd?i((function(){return o})):(void 0!==t&&t.exports&&(e=t.exports=o),e.PubSub=o,t.exports=e=o)}("object"==typeof window&&window||this)}).call(this,n(1)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";n.r(e);n(0);const r=(()=>{const t=document.querySelector(".menu-wrapper"),e=()=>{t.classList.contains("inactive")?(t.classList.add("active"),t.classList.remove("inactive")):(t.classList.add("inactive"),t.classList.remove("active"))};return{menuButtonToggle:()=>{document.querySelector("#menu-button").addEventListener("click",e)}}})(),o=(()=>{const t=()=>{const t=document.querySelector(".form-wrapper");t.classList.contains("inactive")?(t.classList.add("active"),t.classList.remove("inactive")):(t.classList.add("inactive"),t.classList.remove("active"))},e=()=>{const t=document.querySelectorAll(".form-text-data");console.log(t)};return{addTodo:()=>{document.querySelector("#add-todo-button").addEventListener("click",t)},addForm:()=>{document.querySelector(".form-add-button").addEventListener("click",e)}}})(),i=r.menuButtonToggle,u=o.addTodo,c=o.addForm;i(),u(),c()}]);