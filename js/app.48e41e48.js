(function(t){function e(e){for(var i,a,l=e[0],n=e[1],c=e[2],d=0,u=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&u.push(o[a][0]),o[a]=0;for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);v&&v(e);while(u.length)u.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],i=!0,l=1;l<s.length;l++){var n=s[l];0!==o[n]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=s[0]))}return t}var i={},o={app:0},r=[];function a(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=i,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(s,i,function(e){return t[e]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vuetify-test/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var v=n;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{id:"app"}},[s("v-main",[s("v-container",[s("h1",[t._v("Inputs")]),s("h2",[t._v("Text fields")]),s("v-row",{staticClass:"mt-6"},[s("v-col",[s("v-text-field",{attrs:{"append-icon":"mdi-image",dense:"",height:"52px",label:"Название инпута",messages:"Текст под инпутом",outlined:"",suffix:"RUB"}})],1),s("v-col",[s("v-text-field",{attrs:{"append-icon":"mdi-alert-circle",dense:"",error:"","error-messages":"Текст ошибки",height:"52px",label:"Название инпута",outlined:"",suffix:"RUB"}})],1),s("v-col",[s("v-text-field",{attrs:{"append-icon":"mdi-close-circle",dense:"",disabled:"",height:"52px",label:"Название инпута",messages:"Текст под инпутом",outlined:"",suffix:"RUB"}})],1)],1),s("v-row",{staticClass:"mt-6"},[s("v-col",[s("v-autocomplete",{attrs:{items:t.items,dense:"",height:"52px",label:"Название списка",messages:"Текст под инпутом",outlined:""}})],1),s("v-col",[s("v-autocomplete",{attrs:{items:t.itemsWithIcons,dense:"",height:"52px",label:"Название списка",messages:"Текст под инпутом",outlined:"","prepend-inner-icon":"mdi-image"},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item;return[s("div",{staticClass:"d-flex align-center"},[s("v-icon",{staticClass:"mr-2"},[t._v(t._s(i.icon))]),s("div",[t._v(t._s(i.title))])],1)]}},{key:"selection",fn:function(e){var i=e.item;return[s("div",{staticClass:"d-flex align-center"},[s("v-icon",{staticClass:"mr-2"},[t._v(t._s(i.icon))]),s("div",{},[t._v(t._s(i.title))])],1)]}}])})],1),s("v-col",[s("v-autocomplete",{attrs:{items:t.itemsWithIcons,dense:"",error:"","error-messages":"Текст ошибки",height:"52px",label:"Название списка",outlined:"","prepend-inner-icon":"mdi-image"},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item;return[s("div",{staticClass:"d-flex align-center"},[s("v-icon",{staticClass:"mr-2"},[t._v(t._s(i.icon))]),s("div",[t._v(t._s(i.title))])],1)]}},{key:"selection",fn:function(e){var i=e.item;return[s("div",{staticClass:"d-flex align-center"},[s("v-icon",{staticClass:"mr-2"},[t._v(t._s(i.icon))]),s("div",{},[t._v(t._s(i.title))])],1)]}}])})],1),s("v-col",[s("v-autocomplete",{attrs:{items:t.itemsWithIcons,dense:"",disabled:"",error:"","error-messages":"Текст ошибки",height:"52px",label:"Название списка",outlined:"","prepend-inner-icon":"mdi-image"},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item;return[s("div",{staticClass:"d-flex align-center"},[s("v-icon",{staticClass:"mr-2"},[t._v(t._s(i.icon))]),s("div",[t._v(t._s(i.title))])],1)]}},{key:"selection",fn:function(e){var i=e.item;return[s("div",{staticClass:"d-flex align-center"},[s("v-icon",{staticClass:"mr-2"},[t._v(t._s(i.icon))]),s("div",{},[t._v(t._s(i.title))])],1)]}}])})],1)],1),s("v-row",{staticClass:"mt-6"},[s("v-col",[s("v-text-field",{attrs:{dense:"",height:"52px",label:"Название инпута",messages:"Текст под инпутом",outlined:""},scopedSlots:t._u([{key:"append",fn:function(){return[s("v-select",{attrs:{items:t.items,"background-color":"grey lighten-4",color:"grey",dense:"",flat:"",solo:""}})]},proxy:!0}])})],1),s("v-col",[s("v-text-field",{attrs:{dense:"",error:"","error-messages":"Текст ошибки",height:"52px",label:"Название инпута",outlined:""},scopedSlots:t._u([{key:"append",fn:function(){return[s("v-select",{attrs:{items:t.items,"background-color":"grey lighten-4",color:"grey",dense:"",flat:"",solo:""}})]},proxy:!0}])})],1),s("v-col",[s("v-text-field",{attrs:{dense:"",disabled:"",height:"52px",label:"Название инпута",messages:"Текст под инпутом",outlined:""},scopedSlots:t._u([{key:"append",fn:function(){return[s("v-select",{attrs:{items:t.items,"background-color":"grey lighten-4",color:"grey",dense:"",flat:"",solo:""}})]},proxy:!0}])})],1)],1),s("v-row",{staticClass:"mt-6"},[s("v-col",[s("v-text-field",{attrs:{dense:"",height:"52px",label:"Название инпута",messages:"Текст под инпутом",outlined:""},scopedSlots:t._u([{key:"prepend-inner",fn:function(){return[s("v-select",{attrs:{items:t.phoneSuffixWithIcons,"item-text":function(t){return t.title},color:"grey",dense:"",flat:"",solo:"",value:t.phoneSuffixWithIcons[0]},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item;return[s("div",{staticClass:"d-flex align-center"},[s("v-icon",{staticClass:"mr-2"},[t._v(t._s(i.icon))]),s("div",[t._v(t._s(i.title))])],1)]}},{key:"selection",fn:function(e){var i=e.item;return[s("div",{staticClass:"d-flex align-center"},[s("v-icon",{staticClass:"mr-2"},[t._v(t._s(i.icon))]),s("div",{},[t._v(t._s(i.title))])],1)]}}])})]},proxy:!0}])})],1)],1),s("h2",{staticClass:"mt-12"},[t._v("Text area")]),s("v-row",{staticClass:"mt-6"},[s("v-col",[s("v-textarea",{attrs:{counter:"25",label:"Оставьте комментарий",outlined:""}})],1)],1),s("h2",{staticClass:"mt-12"},[t._v("Bottom controls")]),s("v-row",{staticClass:"mt-6"},[s("v-col",[s("v-text-field",{attrs:{dense:"",height:"52px","hide-details":"",label:"Название инпута",outlined:""}}),s("div",{staticClass:"ml-3",staticStyle:{"font-size":"0.75rem"}},[t._v(" Текст под инпутом ")])],1),s("v-col",[s("v-text-field",{attrs:{dense:"",height:"52px","hide-details":"",label:"Название инпута",outlined:""}}),s("div",{staticClass:"ml-3",staticStyle:{"font-size":"0.75rem"}},[t._v(" Код №121 выслан на "),s("a",{attrs:{href:""}},[t._v("crypto_robert@gmail.com")])])],1)],1),s("h1",{staticClass:"mt-12"},[t._v("Buttons")]),s("h2",[t._v("Standard")]),s("v-row",{staticClass:"mt-6"},[s("v-col",[s("v-btn",{staticClass:"body-1 font-weight-medium text-none",attrs:{color:"primary",depressed:"",height:"52px"}},[t._v("Текст кнопки")])],1),s("v-col",[s("v-btn",{staticClass:"body-1 font-weight-medium text-none",attrs:{color:"primary",depressed:"",disabled:"",height:"52px"}},[t._v("Текст кнопки")])],1),s("v-col",[s("v-btn",{staticClass:"body-1 font-weight-medium text-none",attrs:{color:"primary",depressed:"",height:"52px"},scopedSlots:t._u([{key:"default",fn:function(){return[s("div",{staticClass:"d-flex align-center"},[s("v-icon",{staticClass:"mr-2"},[t._v("mdi-image")]),s("div",[t._v("Текст кнопки")])],1)]},proxy:!0}])})],1),s("v-col",[s("v-btn",{staticClass:"body-1 font-weight-medium text-none",attrs:{color:"grey lighten-2",depressed:"",height:"52px",outlined:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("div",{staticClass:"d-flex align-center"},[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary"}},[t._v("mdi-image")]),s("div",{staticClass:"primary--text"},[t._v("Текст кнопки")])],1)]},proxy:!0}])})],1),s("v-col",[s("div",{staticClass:"d-flex"},[s("v-btn",{staticClass:"body-1 font-weight-medium text-none",attrs:{color:"primary",depressed:"",height:"52px"},scopedSlots:t._u([{key:"default",fn:function(){return[s("div",{staticClass:"d-block"},[s("div",{},[t._v("Перейти в корзину")]),s("div",{staticClass:"caption"},[t._v("В корзине 1 шт.")])])]},proxy:!0}])}),s("v-btn",{staticClass:"body-1 font-weight-medium text-none",attrs:{color:"grey lighten-2",depressed:"",height:"52px",outlined:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("div",{staticClass:"d-flex align-center"},[s("div",{staticClass:"primary--text"},[t._v("+1 шт.")])])]},proxy:!0}])})],1)])],1),s("h1",{staticClass:"mt-12"},[t._v("Text Buttons")]),s("h2",[t._v("Text Buttons")]),s("v-row",{staticClass:"mt-6"},[s("v-col",[s("v-btn",{staticClass:"body-1 font-weight-medium text-none",attrs:{color:"primary",text:"",height:"52px"},scopedSlots:t._u([{key:"default",fn:function(){return[s("div",{staticClass:"d-flex align-center"},[s("div",{staticClass:"mr-3",staticStyle:{"border-bottom":"1px dashed"}},[t._v("Текст копируемой кнопки")]),s("v-icon",[t._v("mdi-image")])],1)]},proxy:!0}])})],1),s("v-col",[s("v-btn",{staticClass:"body-1 font-weight-medium text-none",attrs:{color:"primary",text:"",height:"52px"},scopedSlots:t._u([{key:"default",fn:function(){return[s("div",{staticClass:"d-flex align-center"},[s("v-icon",{staticClass:"mr-2"},[t._v("mdi-image")]),s("div",[t._v("Текст кнопки")])],1)]},proxy:!0}])})],1),s("v-col",[s("v-btn",{staticClass:"body-1 font-weight-medium text-none",attrs:{color:"primary",text:"",disabled:"",height:"52px"},scopedSlots:t._u([{key:"default",fn:function(){return[s("div",{staticClass:"d-flex align-center"},[s("v-icon",{staticClass:"mr-2"},[t._v("mdi-image")]),s("div",[t._v("Текст кнопки")])],1)]},proxy:!0}])})],1),s("v-col",[s("v-btn",{attrs:{color:"primary",icon:""}},[s("v-icon",[t._v("mdi-close")])],1)],1),s("v-col",[s("v-btn",{attrs:{color:"primary",icon:"",disabled:""}},[s("v-icon",[t._v("mdi-close")])],1)],1)],1),s("h1",{staticClass:"mt-12"},[t._v("Dropdown")]),s("v-row",{staticClass:"mt-6"},[s("v-col",[t._v(" ??? ")])],1),s("h1",{staticClass:"mt-12"},[t._v("Mobile progress bar")]),s("v-row",{staticClass:"mt-6"},[s("v-col",[s("v-progress-circular",{attrs:{rotate:-90,size:40,width:2,value:60,color:"primary"}},[s("span",{staticClass:"caption text-  -disabled"},[t._v("6/10")])])],1),s("v-col",[s("v-progress-circular",{attrs:{rotate:-90,size:40,width:2,value:100,color:"primary"}},[s("v-icon",{attrs:{color:"primary"}},[t._v("mdi-check")])],1)],1),s("v-col",[s("v-progress-circular",{attrs:{rotate:-90,size:40,width:2,value:100,color:"error"}},[s("v-icon",{attrs:{color:"error"}},[t._v("mdi-close")])],1)],1)],1),s("h1",{staticClass:"mt-12"},[t._v("Dropdown")]),s("v-row",{staticClass:"mt-6"},[s("v-col",[s("v-stepper",[s("v-stepper-header",[s("v-stepper-step",{attrs:{complete:!0,step:"1"}},[t._v(" Название шага ")]),s("v-divider"),s("v-stepper-step",{attrs:{complete:!1,step:"2"}},[t._v(" Название шага ")]),s("v-divider"),s("v-stepper-step",{attrs:{step:"3"}},[t._v(" Название шага ")])],1)],1)],1)],1),s("h1",{staticClass:"mt-12"},[t._v("Radio Button")]),s("v-row",{staticClass:"mt-6"},[s("v-col",[s("v-radio-group",{attrs:{column:""}},[s("v-radio",{attrs:{color:"primary",value:"primary1"},scopedSlots:t._u([{key:"label",fn:function(){return[t._v(" Адрес получателя "),s("v-icon",{staticClass:"ml-2",attrs:{color:"primary"}},[t._v("mdi-help-circle-outline")])]},proxy:!0}])}),s("v-radio",{attrs:{label:"Адрес получателя",color:"primary",value:"primary2"}}),s("v-radio",{attrs:{label:"Адрес получателя",color:"primary",value:"primary3"}})],1)],1)],1),s("h1",{staticClass:"mt-12"},[t._v("Checkbox")]),s("v-row",{staticClass:"mt-6"},[s("v-col",[s("v-checkbox",{scopedSlots:t._u([{key:"label",fn:function(){return[t._v(" Адрес получателя "),s("v-icon",{staticClass:"ml-2",attrs:{color:"primary"}},[t._v("mdi-help-circle-outline")])]},proxy:!0}])})],1)],1),s("h1",{staticClass:"mt-12"},[t._v("Switch")]),s("v-row",{staticClass:"mt-6"},[s("v-col",[s("v-sheet",{staticClass:"pa-5"},[s("v-switch",{attrs:{inset:"",label:"Switch 1"}}),s("v-switch",{attrs:{inset:"",label:"Switch 2"}})],1)],1)],1),s("h1",{staticClass:"mt-12"},[t._v("Tabs")]),s("v-row",{staticClass:"mt-6"},[s("v-col",[s("v-tabs",[s("v-tab",[t._v("Обмен")]),s("v-tab",[t._v("Статус заявки")]),s("v-tab",[t._v("Обмен")])],1)],1)],1),s("h1",{staticClass:"mt-12"},[t._v("Segmented controls")]),s("v-row",{staticClass:"mt-6"},[s("v-col",[s("v-btn-toggle",{attrs:{color:"primary"}},[s("v-btn",{attrs:{value:"left"}},[t._v(" Left ")]),s("v-btn",{attrs:{value:"center"}},[t._v(" Center ")]),s("v-btn",{attrs:{value:"right"}},[t._v(" Right ")]),s("v-btn",{attrs:{value:"justify"}},[t._v(" Justify ")])],1),s("v-card",{staticClass:"pa-1 mt-6",attrs:{outlined:""}},[s("v-btn",{staticClass:"body-1 font-weight-medium text-none",attrs:{color:"primary",text:"",height:"52px"},scopedSlots:t._u([{key:"default",fn:function(){return[t._v(" Текст кнопки ")]},proxy:!0}])}),s("v-btn",{staticClass:"body-1 font-weight-medium text-none",attrs:{color:"disabled",text:"",height:"52px"},scopedSlots:t._u([{key:"default",fn:function(){return[t._v(" Текст кнопки ")]},proxy:!0}])})],1)],1)],1),s("h1",{staticClass:"mt-12"},[t._v("Tags")]),s("v-row",{staticClass:"mt-6"},[s("v-col",[s("v-btn",{staticClass:"body-1 font-weight-medium text-none",attrs:{color:"blue lighten-5",height:"52px",rounded:"",depressed:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("div",{staticClass:"d-flex align-center"},[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary"}},[t._v("mdi-image")]),s("div",{staticClass:"primary--text"},[t._v("Текст кнопки")])],1)]},proxy:!0}])})],1),s("v-col",[s("v-btn",{staticClass:"body-1 font-weight-medium text-none",attrs:{color:"grey",height:"52px",rounded:"",outlined:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("div",{staticClass:"d-flex align-center"},[s("v-icon",{staticClass:"mr-2",attrs:{color:"disabled"}},[t._v("mdi-image")]),s("div",{staticClass:"disabled--text"},[t._v("Текст кнопки")])],1)]},proxy:!0}])})],1)],1)],1)],1)],1)},r=[],a={name:"App",data:function(){return{items:["Foo","Bar","Fizz","Buzz"],itemsWithIcons:[{title:"Foo",icon:"mdi-account-check-outline"},{title:"Bar",icon:"mdi-toilet"}],phoneSuffixWithIcons:[{title:"+7",icon:"mdi-account-check-outline"},{title:"+8",icon:"mdi-toilet"}]}},components:{}},l=a,n=s("2877"),c=Object(n["a"])(l,o,r,!1,null,null,null),v=c.exports,d=s("ce5b"),u=s.n(d);s("bf40");i["default"].use(u.a);var p={theme:{options:{customProperties:!0}}},m=new u.a(p);i["default"].config.productionTip=!1,new i["default"]({vuetify:m,render:function(t){return t(v)}}).$mount("#app")}});
//# sourceMappingURL=app.48e41e48.js.map