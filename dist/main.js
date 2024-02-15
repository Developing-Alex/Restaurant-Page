(()=>{"use strict";var e={904:(e,n,t)=>{t.d(n,{c:()=>m});var r=t(500),o=t.n(r),i=t(312),a=t.n(i),c=t(536),s=t.n(c),u=new URL(t(992),t.b),p=new URL(t(116),t.b),l=a()(o()),d=s()(u),f=s()(p);l.push([e.id,`:root {\n  font-size: 16px;\n}\n\n@font-face {\n  font-family: 'Limelight';\n  src: url(${d}) format('truetype');\n  font-weight: 400;\n  font-style: normal;\n}\n\nbody {\n  background-image: url(${f});\n  background-position: center;\n  background-size: cover;\n  margin: 0;\n  height: 100vh;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  background-color: rgba(255, 0, 0, 0.614);\n  color: whitesmoke;\n  justify-content: center;\n  align-items: center;\n  height: 150px;\n  gap: 15px;\n}\n\nnav {\n  display: flex;\n  gap: 30px;\n}\n\n#title {\n  font-family: 'Limelight';\n  font-size: 2.5rem;\n  margin-bottom: 0;\n  margin-top: 15px;\n}\n\nbutton {\n  background-color: rgba(255, 0, 0, 0);\n  font-size: 1.5rem;\n  font-family: 'Limelight';\n  color: whitesmoke;\n  border: none;\n  border-bottom: 3px whitesmoke solid;\n  height: 45px;\n  width: 120px;\n  margin-top: 0;\n  margin-bottom: 15px;\n  cursor: pointer;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#content-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(255, 0, 0, 0.5);\n  width: 600px;\n  height: 500px;\n  border-radius: 50px;\n  margin-top: 40px;\n  border: 2px solid whitesmoke;\n}\n\n#heading {\n  color: whitesmoke;\n  margin: 0;\n  padding-top: 15px;\n}\n\n#about {\n  font-weight: bold;\n  font-size: 1.3rem;\n  color: whitesmoke;\n  text-align: center;\n  width: 550px;\n  margin: 0;\n  padding: 15px;\n}\n\n#chef-image {\n  border-radius: 49%;\n  width: 200px;\n  border: whitesmoke solid 2px;\n}`,""]);const m=l},312:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},536:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],p=i[u]||0,l="".concat(u," ").concat(p);i[u]=p+1;var d=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),u=0;u<i.length;u++){var p=t(i[u]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}i=s}}},176:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},120:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},936:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},992:(e,n,t)=>{e.exports=t.p+"3776a5b3985bb9da2ea7.ttf"},116:(e,n,t)=>{e.exports=t.p+"c7aee42b81b5fbe16790.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"60424b0cf8e7e4bb6983.jpg";var n=t(596),r=t.n(n),o=t(520),i=t.n(o),a=t(176),c=t.n(a),s=t(120),u=t.n(s),p=t(808),l=t.n(p),d=t(936),f=t.n(d),m=t(904),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),r()(m.c,h),m.c&&m.c.locals&&m.c.locals,document.querySelector("header").prepend((()=>{const e=document.createElement("h1");return e.innerText="Bishop's Birdhouse",e.id="title",e})()),document.getElementById("content").appendChild((()=>{const n=document.createElement("div");n.id="content-container";const t=document.createElement("h2");t.textContent="Best Chicken in America!",t.id="heading";const r=document.createElement("p");r.textContent="Voted Best Chicken in America three times in a row! We at Bishop's Birdhouse strive to bring you the best finger lickin' chicken experience the country has to offer!",r.id="about";const o=new Image;return o.src=e,o.id="chef-image",[t,r,o].forEach((e=>n.appendChild(e))),n})())})()})();