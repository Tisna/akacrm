(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1104:function(t,e,n){"use strict";n.r(e);var o={name:"ListDocument",data:function(){return{headers:[{text:"Tahap Pengidisian",value:"step_desc"},{text:"Status",value:"status"},{text:"Aksi",value:"actions"}],allData:[],options:{},totalData:0,loading:!1}},methods:{openAction:function(t,e){}}},l=n(64),r=n(74),c=n.n(r),d=n(250),v=n(1044),f=n(548),m=n(226),_=n(598),x=n(535),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",{attrs:{sm12:""}},[n("div",{staticClass:"mt-2"},[n("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"body",fn:function(e){var o=e.items;return[n("tbody",t._l(o,(function(e){return n("tr",{key:e.id,staticClass:"test-tr",style:{backgroundColor:e.Color}},[n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.step))]),t._v(" "),n("td",{staticClass:"d-flex"},[n("v-btn",{attrs:{color:"error",fab:"",small:"",dark:""}},["Y"===e.status?n("v-icon",[t._v("mdi-check-circle")]):n("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),n("td",{staticClass:"d-flex"},[n("v-tooltip",{staticStyle:{"margin-top":"4px"},attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var l=o.on,r=o.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),l),[n("v-icon",{attrs:{small:""},on:{click:function(n){return t.openAction("edit",e)}}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Edit")])])],1)])})),0)]}},{key:"footer",fn:function(){},proxy:!0}])})],1)])],1)}),[],!1,null,"72878b86",null);e.default=component.exports;c()(component,{VBtn:d.a,VDataTable:v.a,VFlex:f.a,VIcon:m.a,VLayout:_.a,VTooltip:x.a})},548:function(t,e,n){"use strict";n(240);var o=n(241);e.a=Object(o.a)("flex")}}]);