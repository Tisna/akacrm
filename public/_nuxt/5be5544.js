(window.webpackJsonp=window.webpackJsonp||[]).push([[81,24],{1040:function(t,e,o){"use strict";o.r(e);var n={name:"SalesQuote",layout:"dashboard",head:function(){return{title:"Sales Quotation"}}},r=o(64),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("DocumentTableDocument",{attrs:{"type-document":"SQ"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DocumentTableDocument:o(559).default})},548:function(t,e,o){"use strict";o(240);var n=o(241);e.a=Object(n.a)("flex")},559:function(t,e,o){"use strict";o.r(e);o(24),o(242),o(12),o(4);var n={name:"TableDocument",props:{typeDocument:{type:String,default:""}},data:function(){return{totalData:0,editedIndex:-1,loading:!0,company:[],allData:[],documentStatus:[],itemSearch:[],toolbarTitle:"",searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},headers:[{text:"Number",value:"document_number"},{text:"Customer",value:"contact_name"},{text:"Date",value:"issued_at"},{text:"Due Date",value:"due_at"},{text:"Status",value:"status",align:"center"},{text:"Balance Due",value:"balance_due",align:"right"},{text:"Total",value:"amount",align:"right"}]}},computed:{formTitle:function(){return-1===this.editedIndex?"New "+this.typeDocument:"Edit "+ +this.typeDocument},buttonTitle:function(){return-1===this.editedIndex?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.mappingDocument()},methods:{newData:function(){this.$router.push({path:"/dashboard/documents/form",query:{id:0,status:"save",type:this.typeDocument}})},statusColor:function(t){switch(t.status){case"open":case"partial":return"warning";case"paid":return"green";case"overdue":return"red"}},editItem:function(t){this.$router.push({path:"/dashboard/documents/form",query:{id:t.id,status:"update",type:this.typeDocument}})},mappingDocument:function(){switch(this.typeDocument){case"PQ":this.toolbarTitle="Purchase Quotation";break;case"PO":this.toolbarTitle="Purchase Order";break;case"PD":this.toolbarTitle="Goods Receipt";break;case"PI":this.toolbarTitle="A/P Invoice";break;case"PP":this.toolbarTitle="Outgoing Payment";break;case"PN":this.toolbarTitle="Goods Return";break;case"SQ":this.toolbarTitle="Sales Quotation";break;case"SO":this.toolbarTitle="Sales Order";break;case"SD":this.toolbarTitle="Sales Delivery";break;case"SI":this.toolbarTitle="A/R Invoice";break;case"SP":this.toolbarTitle="Incoming Payment";break;case"SR":this.toolbarTitle="Sales Return"}},emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var e=this;this.$axios.get("/api/documents",{params:{options:e.options,searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search,type:this.typeDocument}}).then((function(e){t.loading=!1,t.allData=e.data.data.rows,t.totalData=e.data.data.total,t.itemSearch=e.data.filter,t.form=Object.assign({},e.data.data.form),t.defaultItem=Object.assign({},e.data.data.form),t.company=t.$auth.$storage.getState("company")})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))}}},r=o(64),c=o(74),l=o.n(c),m=o(250),d=o(1008),h=o(548),f=o(226),v=o(596),D=o(533),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",[o("v-flex",{attrs:{sm12:""}},[o("div",{staticClass:"mt-0"},[o("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"mx-auto",attrs:{type:"table"}}),t._v(" "),o("v-data-table",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[o("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:t.toolbarTitle},on:{emitData:t.emitData,newData:t.newData}})]},proxy:!0},{key:"item.document_number",fn:function(e){var n=e.item;return[o("a",{domProps:{textContent:t._s(n.document_number)},on:{click:function(e){return t.editItem(n)}}})]}},{key:"item.status",fn:function(e){var n=e.item;return[o("v-btn",{attrs:{text:"",small:""}},[o("v-icon",{attrs:{color:t.statusColor(n),left:""}},[t._v("\n              mdi-circle\n            ")]),t._v("\n            "+t._s(n.status)+"\n          ")],1)]}},{key:"item.balance_due",fn:function(e){var o=e.item;return[t._v("\n          "+t._s(t.form.default_currency_symbol+" "+t.$formatter.formatPrice(o.balance_due))+"\n        ")]}},{key:"item.amount",fn:function(e){var o=e.item;return[t._v("\n          "+t._s(t.form.default_currency_symbol+" "+t.$formatter.formatPrice(o.amount))+"\n        ")]}}],null,!0)})],1)])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:m.a,VDataTable:d.a,VFlex:h.a,VIcon:f.a,VLayout:v.a,VSkeletonLoader:D.a})}}]);