(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),c=n(645),a=n.n(c)()(r());a.push([e.id,"body {\n    display: flex;\n    flex-direction: column;\n}",""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&a[u[0]]||(void 0!==c&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=c),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},a=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],u=c[d]||0,l="".concat(d," ").concat(u);c[d]=u+1;var p=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=i,t.splice(i,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var s=o(e,r),d=0;d<c.length;d++){var u=n(c[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}c=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),c=n(569),a=n.n(c),i=n(565),s=n.n(i),d=n(216),u=n.n(d),l=n(589),p=n.n(l),f=n(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=u(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,document.querySelector("#categoryBtn").addEventListener("click",(()=>{console.log("categoryBtn event listener works!"),function(){const e=prompt("Please type category name of to-do list:");v.createCategory(e)}()}));const v=(()=>{const e=[];return{createCategory:function(t){const n=document.querySelector("#categoryDiv"),o=document.createElement("div"),r=t.replace(/\s/g);o.innerText=t,o.classList.add(r),n.appendChild(o);const c=y(n,o);n.appendChild(c),function(e,t){e.addEventListener("click",(()=>{console.log(e+" has been selected!"),function(e){const t=document.querySelector("#todoBtn");(function(e){const t=document.querySelector("#todoDiv"),n=h.todoArray.filter((e=>undefined!==e.category));n&&n.forEach((e=>{t.removeChild(e.element)}))})(),function(e){const t=document.querySelector("#todoDiv"),n=h.todoArray.filter((t=>t.category===e));n&&n.forEach((e=>{t.appendChild(e.element)}))}(e),t.addEventListener("click",(()=>{console.log("todoBtn event listener works!"),function(e){const t=prompt("Please type the title of your to-do: "),n=prompt("Please type the description of this to-do:"),o=prompt("When do you plan to-do this? "),r=prompt("Is this to-do a low, moderate, or high priorty? ");h.createToDo(e,t,n,o,r)}(e)}))}(t)}))}(o,r);const a={name:r,element:o};return e.push(a),o}}})(),h=(()=>{const e=[];return{createToDo:function(t,n,o,r,c){const a=document.querySelector("#todoDiv"),i=document.createElement("div"),s=document.createElement("p");s.innerText=n,i.appendChild(s);const d=document.createElement("p");d.innerText=o,i.appendChild(d);const u=document.createElement("p");u.innerText=r,i.appendChild(u);const l=document.createElement("p");l.innerText=c,i.appendChild(l);const p=y(a,i);i.appendChild(p),i.classList.add(t),a.appendChild(i);const f={category:t,title:n,description:o,dueDate:r,priority:c,element:i};e.push(f)},todoArray:e}})();function y(e,t){const n=document.createElement("button");return n.innerText="X",n.addEventListener("click",(()=>{e.removeChild(t)})),n}})()})();