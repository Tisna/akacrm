(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1062:function(t,e,o){"use strict";o.r(e);o(59);var n=o(744),r=o.n(n),l=(o(745),{name:"FormProduct",components:{Dropzone:r.a},props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{logo:"",dialog:!1,submitLoad:!1,form:this.formData,selectedItem:1,itemCategory:[],itemUnit:[],itemAccounts:[],itemTax:[],images:[],statusProcessing:"insert",valueWhenIsEmpty:"0",temp_image:null,url:"/api/inventory/items",moneyOptions:{suffix:"",length:11,precision:2},options:{url:"/api/files",timeout:9e9,addRemoveLinks:!0,withCredentials:!0,thumbnailWidth:50,thumbnailHeight:50,acceptedFiles:"image/*",dictDefaultMessage:"<span class='mdi mdi-cloud-upload'></span> UPLOAD HERE",headers:{"X-XSRF-TOKEN":this.$cookies.get("XSRF-TOKEN")}}}},mounted:function(){this.getItemCategory(),this.getItemUnit(),this.getAccounts(),this.getTaxes()},methods:{newData:function(form){this.$refs.dialogForm.openDialog(),this.statusProcessing="insert",this.form=Object.assign({},form),this.getFiles()},editItem:function(t,e){var o=t;o.category=JSON.parse(o.category),this.form=Object.assign({},o),this.statusProcessing="update",this.$refs.dialogForm.openDialog(),this.getFiles()},getItemCategory:function(){var t=this;this.$axios.get("/api/master/categories",{params:{type:"Item Category"}}).then((function(e){t.itemCategory=e.data.data.simple})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getTaxes:function(){var t=this;this.$axios.get("/api/financial/taxes",{params:{type:"Item Category"}}).then((function(e){t.itemTax=e.data.data.row_simple})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getItemUnit:function(){var t=this;this.$axios.get("/api/inventory/item-units",{params:{type:"Item Category"}}).then((function(e){t.itemUnit=e.data.data.simple})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getAccounts:function(){var t=this;this.$axios.get("/api/financial/accounts",{params:{type:"All"}}).then((function(e){t.itemAccounts=e.data.data.rows})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},sendingParams:function(t,e,o){var n=this.form.id?this.form.id:this.form.temp_id;o.append("temp_id",n),o.append("type","item")},handleError:function(t,e,o){this.$swal({type:"error",title:"Error...",text:e.message})},reloadAttachment:function(t,e){var o=this;e.errors?this.$swal({type:"error",title:"Oops...",text:e.message}):(this.$emit("eventCountAttachment",{total:e.data.count,row:this.row}),setTimeout((function(){o.getFiles()}),300),this.$swal({type:"success",title:"Success...",text:"Attachment uploaded!"}))},getFiles:function(){var t=this;this.showLoadingAttachment=!0;var e=this,o=this.form.id?this.form.id:this.form.temp_id;this.$axios.get("/api/files",{params:{type:"item",temp_id:o}}).then((function(t){e.images=t.data.data.rows,e.total=t.data.data.total,e.showLoadingAttachment=!1})).catch((function(e){t.showLoadingAttachment=!1,t.$swal({type:"error",title:"Oops...",text:e.response.message})}))},returnData:function(data){"Item Category"===data.type?this.itemCategory=data.item:"Item Unit"===data.type&&(this.itemUnit=data.item)},close:function(){var t=this;this.$refs.dialogForm.closeDialog(),this.statusProcessing="insert",setTimeout((function(){t.form=Object.assign({},t.defaultItem)}),300)},save:function(){var t=this.statusProcessing;"insert"===t?(this.store("post",this.url,this.form),this.submitLoad=!1):"update"===t&&(this.store("put",this.url+"/"+this.form.id,this.form),this.submitLoad=!1)},store:function(t,e,data){var o=this,n=this;n.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){o.$refs.dialogForm.closeDialog(),o.$emit("getDataFromApi")})).catch((function(t){o.$swal({type:"error",title:"Error",text:t.response.data.message}),n.submitLoad=!1}))}}}),c=o(64),m=o(74),d=o.n(m),f=o(597),v=o(250),h=o(530),_=o(527),y=o(567),x=o(226),C=o(228),$=o(148),k=o(40),I=o(231),w=o(558),D=o(591),T=o(520),V=o(514),A=o(802),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("DialogForm",{ref:"dialogForm",attrs:{"max-width":"700px","dialog-title":t.formTitle,"button-title":"Save"},scopedSlots:t._u([{key:"content",fn:function(){return[o("v-form",[o("v-container",[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"4"}},[o("span",[t._v("Image")]),t._v(" "),o("dropzone",{ref:"attachment",attrs:{id:"attachment",options:t.options,"destroy-dropzone":!0},on:{"vdropzone-sending":function(e,o,n){return t.sendingParams(e,o,n)},"vdropzone-success":function(e,o){return t.reloadAttachment(e,o)},"vdropzone-error":function(e,o,n){return t.handleError(e,o,n)}}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"8"}},[o("v-list",{attrs:{dense:""}},[o("v-subheader",[t._v("Images")]),t._v(" "),o("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.images,(function(e,i){return o("v-list-item",{key:i},[o("v-list-item-content",[o("v-list-item-title",[o("a",{attrs:{href:e.directory,target:"_blank"}},[t._v(t._s(e.filename))])])],1)],1)})),1)],1)],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Name",placeholder:"Name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[o("v-select",{attrs:{items:t.itemCategory,label:"Category",placeholder:"Category",outlined:"",multiple:"","persistent-hint":"",dense:"",hint:"Exp. Component, Services, Design","hide-details":"auto"},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("v-btn",{attrs:{small:"",icon:""}},[o("v-icon",{attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.formMaster.openForm("/api/master/categories","Item Category","Item Category","400px")}}},[t._v("\n                        mdi-arrow-right-bold\n                      ")])],1)]},proxy:!0}]),model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[o("v-select",{attrs:{items:t.itemUnit,label:"Unit",placeholder:"Unit",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("v-btn",{attrs:{small:"",icon:""}},[o("v-icon",{attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.formMaster.openForm("/api/inventory/item-units","Item Unit","Item Unit","400px")}}},[t._v("\n                        mdi-arrow-right-bold\n                      ")])],1)]},proxy:!0}]),model:{value:t.form.unit,callback:function(e){t.$set(t.form,"unit",e)},expression:"form.unit"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[o("v-textarea",{attrs:{label:"Descriptions",outlined:"",dense:"",rows:"2"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"12"}},[o("span",[t._v("Buy Price")]),t._v(" "),o("hr")]),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"4"}},[o("vuetify-money",{attrs:{valueWhenIsEmpty:t.valueWhenIsEmpty,options:t.moneyOptions,label:"Buy Unit Price",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.purchase_price,callback:function(e){t.$set(t.form,"purchase_price",e)},expression:"form.purchase_price"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"4"}},[o("v-autocomplete",{attrs:{items:t.itemAccounts,"item-text":"name","item-value":"id",label:"Buy Account",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.buy_account_id,callback:function(e){t.$set(t.form,"buy_account_id",e)},expression:"form.buy_account_id"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"4"}},[o("v-select",{attrs:{items:t.itemTax,"item-text":"name","item-value":"id",label:"Default Buy Tax",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.buy_tax_id,callback:function(e){t.$set(t.form,"buy_tax_id",e)},expression:"form.buy_tax_id"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"12"}},[o("span",[t._v("Sell Price")]),t._v(" "),o("hr")]),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"4"}},[o("vuetify-money",{attrs:{valueWhenIsEmpty:t.valueWhenIsEmpty,options:t.moneyOptions,label:"Buy Unit Price",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.sale_price,callback:function(e){t.$set(t.form,"sale_price",e)},expression:"form.sale_price"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"4"}},[o("v-autocomplete",{attrs:{items:t.itemAccounts,"item-text":"name","item-value":"id",label:"Sell Account",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.sell_account_id,callback:function(e){t.$set(t.form,"sell_account_id",e)},expression:"form.sell_account_id"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"4"}},[o("v-select",{attrs:{items:t.itemTax,"item-text":"name","item-value":"id",label:"Default Sell Tax",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.sell_tax_id,callback:function(e){t.$set(t.form,"sell_tax_id",e)},expression:"form.sell_tax_id"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"12"}},[o("span",[t._v("Track Stock for This Item")]),t._v(" "),o("hr")]),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"4"}},[o("vuetify-money",{attrs:{valueWhenIsEmpty:t.valueWhenIsEmpty,options:t.moneyOptions,label:"Minimum Stock Quantity",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.minimum_stock,callback:function(e){t.$set(t.form,"minimum_stock",e)},expression:"form.minimum_stock"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"8"}},[o("v-autocomplete",{attrs:{items:t.itemAccounts,"item-text":"name","item-value":"id",label:"Default Inventory Account",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.inventory_account,callback:function(e){t.$set(t.form,"inventory_account",e)},expression:"form.inventory_account"}})],1)],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[o("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n          "+t._s(t.buttonTitle)+"\n        ")])]},proxy:!0}])}),t._v(" "),o("LazyInventoryFormMaster",{ref:"formMaster",on:{returnData:t.returnData}})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{DialogForm:o(552).default}),d()(component,{VAutocomplete:f.a,VBtn:v.a,VCol:h.a,VContainer:_.a,VForm:y.a,VIcon:x.a,VList:C.a,VListItem:$.a,VListItemContent:k.a,VListItemGroup:I.a,VListItemTitle:k.c,VRow:w.a,VSelect:D.a,VSubheader:T.a,VTextField:V.a,VTextarea:A.a})},552:function(t,e,o){"use strict";o.r(e);var n={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},r=o(64),l=o(74),c=o.n(l),m=o(250),d=o(510),f=o(509),v=o(568),h=o(518),_=o(226),y=o(534),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{"no-click-animation":"",persistent:"",origin:t.original,"max-width":t.maxWidth,transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return t.closeDialog()}}},[o("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),o("v-divider"),t._v(" "),t._t("content"),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[t._t("addLine"),t._v(" "),o("v-spacer"),t._v(" "),t._t("saveData")],2)],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:m.a,VCard:d.a,VCardActions:f.a,VCardTitle:f.d,VDialog:v.a,VDivider:h.a,VIcon:_.a,VSpacer:y.a})}}]);