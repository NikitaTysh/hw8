function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),s=Object.prototype.toString,d=Math.max,g=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var o,r,i,a,l,u,f=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,f=t,a=e.apply(i,n)}function S(e){return f=e,l=setTimeout(T,t),c?b(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-f>=i}function T(){var e=m();if(O(e))return h(e);l=setTimeout(T,function(e){var n=t-(e-u);return s?g(n,i-(e-f)):n}(e))}function h(e){return l=void 0,p&&o?b(e):(o=r=void 0,a)}function j(){var e=m(),n=O(e);if(o=arguments,r=this,u=e,n){if(void 0===l)return S(u);if(s)return l=setTimeout(T,t),b(u)}return void 0===l&&(l=setTimeout(T,t)),a}return t=y(t)||0,v(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),j.cancel=function(){void 0!==l&&clearTimeout(l),f=0,o=u=r=l=void 0},j.flush=function(){return void 0===l?a:h(m())},j}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?l(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})},console.log("start 3th file");const b=document.querySelector(".feedback-form");document.querySelector(".feedback-form button").addEventListener("click",(function(e){e.preventDefault(),b.reset(),console.log(`email : ${JSON.parse(localStorage.getItem("data")).email}`),console.log(`message : ${JSON.parse(localStorage.getItem("data")).message}`),localStorage.clear()}));const S={};if(null!==localStorage.getItem("data")){const e=JSON.parse(localStorage.getItem("data"));b.elements.email.value=e.email,b.elements.message.value=e.message}b.addEventListener("input",e(t)((function(e){S.email=e.currentTarget.elements.email.value,S.message=e.currentTarget.elements.message.value,localStorage.setItem("data",JSON.stringify(S))}),50));
//# sourceMappingURL=03-feedback.6c6640a2.js.map