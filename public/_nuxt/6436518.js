(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{509:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return v}));var n=r(510),c=r(0),o=Object(c.j)("v-card__actions"),d=Object(c.j)("v-card__subtitle"),l=Object(c.j)("v-card__text"),v=Object(c.j)("v-card__title");n.a},782:function(e,t,r){var content=r(783);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("b1bed018",content,!0,{sourceMap:!1})},783:function(e,t,r){var n=r(15)(!1);n.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(255,255,255,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(even){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li{font-size:16px}.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=n},828:function(e,t,r){"use strict";r.r(t);var n={name:"FormWindow",props:{breadcrumb:{type:Array,default:function(){return[]}}},methods:{getDataFromApi:function(){this.$emit("getDataFromApi")}}},c=r(64),o=r(74),d=r.n(o),l=(r(11),r(9),r(12),r(4),r(13),r(10),r(14),r(2)),v=(r(103),r(782),r(79)),m=r(5);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=Object(m.a)(v.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(l.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,h(h({},data),{},{attrs:h(h({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),_=r(0),j=Object(_.j)("v-breadcrumbs__divider","li"),y=r(19);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var w=Object(m.a)(y.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(j,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(O,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}}),P=r(250),D=r(510),k=r(509),S=r(518),$=r(226),C=r(534),V=r(62),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-toolbar",{staticClass:"toolbar-content",staticStyle:{height:"32px"},attrs:{flat:"",color:"grey lighten-2",dense:""}},[r("v-breadcrumbs",{attrs:{items:e.breadcrumb,divider:"/"}}),e._v(" "),r("v-spacer",{staticClass:"hidden-xs-only"}),e._v(" "),r("v-btn",{attrs:{color:"green",small:"",dark:"",outlined:""},on:{click:e.getDataFromApi}},[e._v("\n      refresh\n      "),r("v-icon",[e._v("mdi-refresh-circle")])],1)],1),e._v(" "),e._t("content"),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[e._t("action"),e._v(" "),r("v-spacer"),e._v(" "),e._t("saveData")],2)],2)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBreadcrumbs:w,VBtn:P.a,VCard:D.a,VCardActions:k.a,VDivider:S.a,VIcon:$.a,VSpacer:C.a,VToolbar:V.a})}}]);