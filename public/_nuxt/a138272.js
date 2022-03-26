(window.webpackJsonp=window.webpackJsonp||[]).push([[29,16,34],{1060:function(t,e,n){"use strict";n.r(e);n(59);var o={name:"DialogItem",props:{viewData:{type:Boolean,default:!0},showAddBtn:{type:Boolean,default:!0}},data:function(){return{row:null}},methods:{openDialog:function(t){var e=this;this.$refs.dialogForm.openDialog(),setTimeout((function(){e.$refs.tableItem.setEmptyToSelected()}),150),this.row=t},selectData:function(){this.$emit("selectItems",{row:this.row,selected:this.$refs.tableItem.returnSelected()}),this.$refs.dialogForm.closeDialog()}}},r=n(64),c=n(74),l=n.n(c),d=n(250),h=n(226),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("DialogForm",{ref:"dialogForm",attrs:{"max-width":"800px","dialog-title":"Item List","button-title":"Save",original:"top"},scopedSlots:t._u([{key:"content",fn:function(){return[n("InventoryTableItem",{ref:"tableItem",attrs:{"view-data":t.viewData,"show-add-btn":t.showAddBtn}})]},proxy:!0},{key:"saveData",fn:function(){return[n("v-btn",{attrs:{color:"green darken-1",dark:"",small:""},on:{click:t.selectData}},[t._v("\n        Select Item\n        "),n("v-icon",[t._v("mdi-arrow-down-right")])],1)]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{InventoryTableItem:n(765).default,DialogForm:n(552).default}),l()(component,{VBtn:d.a,VIcon:h.a})},509:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return h}));var o=n(510),r=n(0),c=Object(r.j)("v-card__actions"),l=Object(r.j)("v-card__subtitle"),d=Object(r.j)("v-card__text"),h=Object(r.j)("v-card__title");o.a},548:function(t,e,n){"use strict";n(240);var o=n(241);e.a=Object(o.a)("flex")},549:function(t,e,n){var content=n(550);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("2065bca8",content,!0,{sourceMap:!1})},550:function(t,e,n){var o=n(15)(!1);o.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(0.25, 0.8, 0.25, 1);width:100%;z-index:inherit;box-shadow:0px 11px 15px -7px rgba(0,0,0,.2),0px 24px 38px 3px rgba(0,0,0,.14),0px 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__text{padding:0 24px 15px}.v-dialog>.v-card>.v-card__subtitle{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(0.25, 0.8, 0.25, 1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{animation-duration:.15s;animation-name:animate-dialog;animation-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0 !important;padding:0 !important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}100%{transform:scale(1)}}",""]),t.exports=o},552:function(t,e,n){"use strict";n.r(e);var o={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},r=n(64),c=n(74),l=n.n(c),d=n(250),h=n(510),m=n(509),v=n(568),f=n(518),x=n(226),_=n(534),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"no-click-animation":"",persistent:"",origin:t.original,"max-width":t.maxWidth,transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return t.closeDialog()}}},[n("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),t._t("content"),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[t._t("addLine"),t._v(" "),n("v-spacer"),t._v(" "),t._t("saveData")],2)],2)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCardActions:m.a,VCardTitle:m.d,VDialog:v.a,VDivider:f.a,VIcon:x.a,VSpacer:_.a})},568:function(t,e,n){"use strict";var o=n(49),r=n(2),c=(n(21),n(75),n(59),n(39),n(58),n(4),n(108),n(11),n(9),n(12),n(13),n(10),n(14),n(549),n(508)),l=n(104),d=n(110),h=n(246),m=n(248),v=n(247),f=n(245),x=n(44),_=n(157),y=n(5),w=n(8),O=n(0);function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var I=Object(y.a)(l.a,d.a,h.a,m.a,v.a,f.a,x.a);e.a=I.extend({name:"v-dialog",directives:{ClickOutside:_.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(r.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(t,"v-dialog--active",this.isActive),Object(r.a)(t,"v-dialog--persistent",this.persistent),Object(r.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(t,"v-dialog--scrollable",this.scrollable),Object(r.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(w.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):m.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.$refs.content.contains(document.activeElement)||(t.previousActiveElement=document.activeElement,t.$refs.content.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===O.z.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(t){return!t.hasAttribute("disabled")}));r&&r.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:k({role:"dialog",tabindex:t.isActive?0:void 0,"aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=k(k({},data.style),{},{maxWidth:Object(O.h)(this.maxWidth),width:Object(O.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},765:function(t,e,n){"use strict";n.r(e);n(24),n(66),n(255),n(4),n(71),n(242),n(12);var o={name:"TableItem",props:{viewData:{type:Boolean,default:!1},showAddBtn:{type:Boolean,default:!0}},data:function(){return{selected:[],totalData:0,url:"",editedIndex:-1,loading:!0,allData:[],showAdd:this.showAddBtn,documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},headers:[]}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"},buttonTitle:function(){return-1===this.editedIndex?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},mounted:function(){this.mappingHeader()},methods:{formatPrice:function(t){return(t/1).toFixed(2).replace(".",",").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},setEmptyToSelected:function(){this.selected=[]},newData:function(){this.editedIndex=-1,this.$refs.formData.newData(this.form)},parseJson:function(t){return Array.isArray(JSON.parse(t))?JSON.parse(t).toString():t},editItem:function(t){this.editedIndex=this.allData.indexOf(t),this.$refs.formData.editItem(t,this.url)},emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var e=this;this.$axios.get("/api/inventory/items",{params:{options:e.options,searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search}}).then((function(e){t.loading=!1,t.allData=e.data.data.rows,t.totalData=e.data.data.total,t.itemSearch=e.data.filter,t.form=Object.assign({},e.data.data.form),t.defaultItem=Object.assign({},e.data.data.form),t.url=e.data.data.url})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},returnSelected:function(){return this.selected},mappingHeader:function(){this.viewData?this.headers=[{text:"Item Code",value:"code"},{text:"Item Name",value:"name"},{text:"Item Category",value:"categories"},{text:"Unit",value:"unit"}]:this.headers=[{text:"Item Code",value:"code"},{text:"Item Name",value:"name"},{text:"Item Category",value:"categories"},{text:"Minimum Stock",value:"minimum_stock",align:"right",sortable:!1,filterable:!1},{text:"Unit",value:"unit"},{text:"Average Price",value:"average_price",align:"right"},{text:"Last Buy Price",value:"last_buy_price",align:"right"},{text:"Buy Price",value:"purchase_price",align:"right"},{text:"Sell Price",value:"sale_price",align:"right"},{text:"Action",value:"ACTIONS",align:"center"}]}}},r=n(64),c=n(74),l=n.n(c),d=n(1008),h=n(548),m=n(226),v=n(596),f=n(533),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",{attrs:{sm12:""}},[n("div",{staticClass:"mt-0"},[n("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"mx-auto",attrs:{type:"table"}}),t._v(" "),n("v-data-table",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"item-key":"id","show-select":"",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[n("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,"show-add":t.showAdd,title:"Items"},on:{emitData:t.emitData,newData:t.newData}})]},proxy:!0},{key:"item.ACTIONS",fn:function(e){var o=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.editItem(o)}}},[t._v("\n            mdi-pencil-circle\n          ")])]}},{key:"item.categories",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(t.parseJson(n.categories))+"\n        ")]}},{key:"item.sale_price",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(t.formatPrice(n.sale_price))+"\n        ")]}},{key:"item.purchase_price",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(t.formatPrice(n.purchase_price))+"\n        ")]}},{key:"item.last_buy_price",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(t.formatPrice(n.last_buy_price))+"\n        ")]}},{key:"item.average_price",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(t.formatPrice(n.average_price))+"\n        ")]}},{key:"item.minimum_stock",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(t.formatPrice(n.minimum_stock))+"\n        ")]}}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)]),t._v(" "),t.viewData?t._e():n("LazyInventoryFormItem",{ref:"formData",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle},on:{getDataFromApi:t.getDataFromApi}})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VDataTable:d.a,VFlex:h.a,VIcon:m.a,VLayout:v.a,VSkeletonLoader:f.a})}}]);