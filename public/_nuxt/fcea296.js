(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{548:function(t,e,r){"use strict";r(240);var n=r(241);e.a=Object(n.a)("flex")},767:function(t,e,r){"use strict";r.r(e);r(24),r(65),r(255),r(4),r(71),r(242),r(12);var n={name:"TableItem",props:{viewData:{type:Boolean,default:!1},showAddBtn:{type:Boolean,default:!0}},data:function(){return{selected:[],totalData:0,url:"",editedIndex:-1,loading:!0,allData:[],showAdd:this.showAddBtn,documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},headers:[]}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"},buttonTitle:function(){return-1===this.editedIndex?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},mounted:function(){this.mappingHeader()},methods:{formatPrice:function(t){return(t/1).toFixed(2).replace(".",",").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},setEmptyToSelected:function(){this.selected=[]},newData:function(){this.editedIndex=-1,this.$refs.formData.newData(this.form)},parseJson:function(t){return Array.isArray(JSON.parse(t))?JSON.parse(t).toString():t},editItem:function(t){this.editedIndex=this.allData.indexOf(t),this.$refs.formData.editItem(t,this.url)},emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var e=this;this.$axios.get("/api/inventory/items",{params:{options:e.options,searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search}}).then((function(e){t.loading=!1,t.allData=e.data.data.rows,t.totalData=e.data.data.total,t.itemSearch=e.data.filter,t.form=Object.assign({},e.data.data.form),t.defaultItem=Object.assign({},e.data.data.form),t.url=e.data.data.url})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},returnSelected:function(){return this.selected},mappingHeader:function(){this.viewData?this.headers=[{text:"Item Code",value:"code"},{text:"Item Name",value:"name"},{text:"Item Category",value:"categories"},{text:"Unit",value:"unit"}]:this.headers=[{text:"Item Code",value:"code"},{text:"Item Name",value:"name"},{text:"Item Category",value:"categories"},{text:"Minimum Stock",value:"minimum_stock",align:"right",sortable:!1,filterable:!1},{text:"Unit",value:"unit"},{text:"Average Price",value:"average_price",align:"right"},{text:"Last Buy Price",value:"last_buy_price",align:"right"},{text:"Buy Price",value:"purchase_price",align:"right"},{text:"Sell Price",value:"sale_price",align:"right"},{text:"Action",value:"ACTIONS",align:"center"}]}}},o=r(64),c=r(74),l=r.n(c),m=r(1052),d=r(548),h=r(226),f=r(598),v=r(533),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",[r("v-flex",{attrs:{sm12:""}},[r("div",{staticClass:"mt-0"},[r("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"mx-auto",attrs:{type:"table"}}),t._v(" "),r("v-data-table",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"item-key":"id","show-select":"",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[r("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,"show-add":t.showAdd,title:"Items"},on:{emitData:t.emitData,newData:t.newData}})]},proxy:!0},{key:"item.ACTIONS",fn:function(e){var n=e.item;return[r("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.editItem(n)}}},[t._v("\n            mdi-pencil-circle\n          ")])]}},{key:"item.categories",fn:function(e){var r=e.item;return[t._v("\n          "+t._s(t.parseJson(r.categories))+"\n        ")]}},{key:"item.sale_price",fn:function(e){var r=e.item;return[t._v("\n          "+t._s(t.formatPrice(r.sale_price))+"\n        ")]}},{key:"item.purchase_price",fn:function(e){var r=e.item;return[t._v("\n          "+t._s(t.formatPrice(r.purchase_price))+"\n        ")]}},{key:"item.last_buy_price",fn:function(e){var r=e.item;return[t._v("\n          "+t._s(t.formatPrice(r.last_buy_price))+"\n        ")]}},{key:"item.average_price",fn:function(e){var r=e.item;return[t._v("\n          "+t._s(t.formatPrice(r.average_price))+"\n        ")]}},{key:"item.minimum_stock",fn:function(e){var r=e.item;return[t._v("\n          "+t._s(t.formatPrice(r.minimum_stock))+"\n        ")]}}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)]),t._v(" "),t.viewData?t._e():r("LazyInventoryFormItem",{ref:"formData",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle},on:{getDataFromApi:t.getDataFromApi}})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VDataTable:m.a,VFlex:d.a,VIcon:h.a,VLayout:f.a,VSkeletonLoader:v.a})}}]);