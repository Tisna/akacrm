(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1108:function(e,t,r){"use strict";r.r(t);var n={name:"DataHelp",data:function(){return{form:{},errors:{},loading:!1,dialog:!1,itemReason:[],itemYesNo:[{text:"Ya",value:"Y"},{text:"Tidak",value:"N"}]}},methods:{getData:function(e){var t=this;this.dialog=!0,this.loading=!0,this.getPipReason(),this.$axios.get("/api/student-data-help/"+e.id).then((function(e){t.errors=Object.assign({},e.data.default),t.form=Object.assign({},e.data.rows),t.loading=!1}))},getPipReason:function(){var e=this;this.$axios.get("/api/master/pip-reason").then((function(t){e.itemReason=t.data.rows}))},getRegistrationData:function(){var e=this;this.$axios.get("/api/student-data-help").then((function(t){e.errors=Object.assign({},t.data.rows),e.form=Object.assign({},t.data.rows)}))},register:function(){var e=this;this.loading=!0,this.$axios.post("/api/student-data-help",this.form).then((function(t){e.loading=!1,e.$swal(t.data.message),t.data.error?e.errors=t.data.message:e.close()}))},close:function(){this.$emit("closeAction")}}},o=r(64),c=r(74),l=r.n(c),d=r(250),f=r(510),v=r(509),m=r(530),h=r(548),_=r(565),y=r(226),O=r(227),j=r(556),w=r(587),k=r(534),P=r(514),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register.apply(null,arguments)}}},[r("v-flex",{attrs:{xs12:""}},[r("v-card",[r("v-card-title",{attrs:{"primary-title":""}},[e.loading?[r("v-progress-linear",{attrs:{height:"10",indeterminate:""}})]:e._e(),e._v("\n\n        Data Bantuan\n        "),r("hr")],2),e._v(" "),r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{"error-messages":e.errors.kps_no,filled:"",dense:"",label:"Nomor Kartu Kelurga Sejahtera",required:""},model:{value:e.form.kps_no,callback:function(t){e.$set(e.form,"kps_no",t)},expression:"form.kps_no"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-select",{attrs:{"error-messages":e.errors.is_kps_receiver,items:e.itemYesNo,filled:"",dense:"",label:"Penerima KPS/ PKH",required:""},model:{value:e.form.is_kps_receiver,callback:function(t){e.$set(e.form,"is_kps_receiver",t)},expression:"form.is_kps_receiver"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{"error-messages":e.errors.kps_no,filled:"",dense:"",label:"No KPS/PKH",required:""},model:{value:e.form.kps_no,callback:function(t){e.$set(e.form,"kps_no",t)},expression:"form.kps_no"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-select",{attrs:{"error-messages":e.errors.is_pip_worthy,items:e.itemYesNo,filled:"",dense:"",label:"Usulan dari Sekolah (Layak PIP)",required:""},model:{value:e.form.is_pip_worthy,callback:function(t){e.$set(e.form,"is_pip_worthy",t)},expression:"form.is_pip_worthy"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-select",{attrs:{"error-messages":e.errors.pip_worthy_reason,items:e.itemReason,filled:"",dense:"",label:"Alasan Layak (PIP)","item-text":"name","item-value":"id",required:""},model:{value:e.form.pip_worthy_reason,callback:function(t){e.$set(e.form,"pip_worthy_reason",t)},expression:"form.pip_worthy_reason"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-select",{attrs:{"error-messages":e.errors.is_kip_receiver,items:e.itemYesNo,filled:"",dense:"",label:"Penerima KIP",required:""},model:{value:e.form.is_kip_receiver,callback:function(t){e.$set(e.form,"is_kip_receiver",t)},expression:"form.is_kip_receiver"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-select",{attrs:{"error-messages":e.errors.is_kip_physical_receiver,items:e.itemYesNo,filled:"",dense:"",label:"Penerima Fisik KIP",required:""},model:{value:e.form.is_kip_physical_receiver,callback:function(t){e.$set(e.form,"is_kip_physical_receiver",t)},expression:"form.is_kip_physical_receiver"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{"error-messages":e.errors.pip_no,filled:"",dense:"",label:"Nomor PIP",required:""},model:{value:e.form.pip_no,callback:function(t){e.$set(e.form,"pip_no",t)},expression:"form.pip_no"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{"error-messages":e.errors.pip_name,filled:"",dense:"",label:"Nama di PIP",required:""},model:{value:e.form.pip_name,callback:function(t){e.$set(e.form,"pip_name",t)},expression:"form.pip_name"}})],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"red darken-1",dark:"",small:""},on:{click:e.close}},[e._v(" Tutup ")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"white--text ml-1",attrs:{small:"",loading:e.loading,elevation:"3",color:"success"},on:{click:e.register}},[r("v-icon",{attrs:{left:""}},[e._v(" mdi-file-document-box ")]),e._v("\n          Ubah\n        ")],1)],1)],1)],1)],1)}),[],!1,null,"e0abd1c4",null);t.default=component.exports;l()(component,{VBtn:d.a,VCard:f.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VCol:m.a,VFlex:h.a,VForm:_.a,VIcon:y.a,VProgressLinear:O.a,VRow:j.a,VSelect:w.a,VSpacer:k.a,VTextField:P.a})},509:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return d})),r.d(t,"d",(function(){return f}));var n=r(510),o=r(0),c=Object(o.j)("v-card__actions"),l=Object(o.j)("v-card__subtitle"),d=Object(o.j)("v-card__text"),f=Object(o.j)("v-card__title");n.a},548:function(e,t,r){"use strict";r(240);var n=r(241);t.a=Object(n.a)("flex")},556:function(e,t,r){"use strict";r(9),r(12),r(13),r(14);var n=r(2),o=(r(4),r(39),r(58),r(29),r(11),r(24),r(65),r(325),r(37),r(327),r(328),r(329),r(330),r(331),r(332),r(333),r(334),r(335),r(336),r(337),r(338),r(339),r(42),r(10),r(243),r(1)),c=r(70),l=r(0);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=["sm","md","lg","xl"],m=["start","end","center"];function h(e,t){return v.reduce((function(r,n){return r[e+Object(l.H)(n)]=t(),r}),{})}var _=function(e){return[].concat(m,["baseline","stretch"]).includes(e)},y=h("align",(function(){return{type:String,default:null,validator:_}})),O=function(e){return[].concat(m,["space-between","space-around"]).includes(e)},j=h("justify",(function(){return{type:String,default:null,validator:O}})),w=function(e){return[].concat(m,["space-between","space-around","stretch"]).includes(e)},k=h("alignContent",(function(){return{type:String,default:null,validator:w}})),P={align:Object.keys(y),justify:Object.keys(j),alignContent:Object.keys(k)},x={align:"align",justify:"justify",alignContent:"align-content"};function $(e,t,r){var n=x[e];if(null!=r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var V=new Map;t.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_}},y),{},{justify:{type:String,default:null,validator:O}},j),{},{alignContent:{type:String,default:null,validator:w}},k),render:function(e,t){var r=t.props,data=t.data,o=t.children,l="";for(var d in r)l+=String(r[d]);var f=V.get(l);return f||function(){var e,t;for(t in f=[],P)P[t].forEach((function(e){var n=r[e],o=$(t,e,n);o&&f.push(o)}));f.push((e={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(e,"align-".concat(r.align),r.align),Object(n.a)(e,"justify-".concat(r.justify),r.justify),Object(n.a)(e,"align-content-".concat(r.alignContent),r.alignContent),e)),V.set(l,f)}(),e(r.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},565:function(e,t,r){"use strict";var n=r(2),o=(r(39),r(58),r(196),r(12),r(4),r(10),r(59),r(108),r(11),r(9),r(13),r(14),r(5)),c=r(90),l=r(111);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})}}]);