!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(1),a=r.n(o);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52.4 39.97"},Object(n.createElement)("g",{id:"Layer_2","data-name":"Layer 2"},Object(n.createElement)("g",{id:"Layer_1-2","data-name":"Layer 1"},Object(n.createElement)("path",a()({},e.color?{fill:"#62ACDF"}:{},{class:"cls-1",d:"M11.66,7.76A9.27,9.27,0,0,0,2.2,6.64,9.07,9.07,0,0,0,0,8,11.67,11.67,0,0,1,11.3,0H52.4L27,19.64Z"})),Object(n.createElement)("path",a()({},e.color?{fill:"#1256A1"}:{},{class:"cls-2",d:"M4.28,10.78a4.13,4.13,0,0,1,4.26.51l3.31,2.57L25.46,24.38a2.56,2.56,0,0,0,3.1,0L48.28,9.13l3.83-3v25C52.11,36,47.92,40,42.79,40H11.3C6.16,40,2,36,2,31.21v-17A3.68,3.68,0,0,1,4.28,10.78Z"})))))}var l=wp.blocks.registerBlockType,i=wp.i18n.__,s=wp.components,u=s.SelectControl,m=s.PanelBody,f=wp.element,d=f.RawHTML,p=f.Fragment,b=wp.editor.InspectorControls;l("wemail/forms",{title:i("weMail"),description:i("Here you can add your weMail form."),category:"common",icon:c,keywords:[i("forms"),i("mail")],attributes:{formId:{type:"string"},shortcode:{type:"string"}},edit:function(e){function t(t){e.setAttributes({shortcode:function(e){return'[wemail_form id="'.concat(e,'"]')}(t),formId:t})}function r(e){var t=e.target;t.removeAttribute("height"),t.height=t.contentWindow.document.body.offsetHeight}var o=[{label:i("Select your form"),value:"",disabled:!0}];return weMailData.forms.forEach(function(e){o.push({label:e.name,value:e.id})}),Object(n.createElement)("div",{className:"wemail-block"},Object(n.createElement)(b,null,Object(n.createElement)(m,{title:i("Forms")},Object(n.createElement)(u,{label:i("Select your form"),value:e.attributes.formId,onChange:t,options:o}))),e.attributes.formId?function(e){return Object(n.createElement)("div",{height:"500px",class:"wemail-block-form-preview"},Object(n.createElement)("div",{class:"wemail-block-overlay"}),Object(n.createElement)("iframe",{onLoad:r,width:"100%",src:"".concat(window.origin,"/wp-admin/admin-ajax.php?action=wemail_preview&form_id=").concat(e.attributes.formId),frameBorder:"0",scrolling:"no"}))}(e):function(e,r){return Object(n.createElement)(p,null,Object(n.createElement)("div",{className:"icon"},c({color:!0})),Object(n.createElement)("h4",{className:"title"},i("weMail Form")),Object(n.createElement)(u,{value:e.attributes.formId,onChange:t,label:i("Forms"),options:r}))}(e,o))},save:function(e){return Object(n.createElement)(d,null,e.attributes.shortcode)}})}]);