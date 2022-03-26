(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1087:function(e,t,o){"use strict";o.r(t);o(24),o(242),o(59),o(4),o(31);var r={name:"MasterPermission",layout:"dashboard",data:function(){return{totalData:0,editedIndex:-1,loadNewBtn:!1,submitLoad:!1,dialogWindow:!1,statusProcessing:"insert",dialog:!1,dialogPermission:!1,message:!1,loading:!0,insertDivision:!0,insert:!0,documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",loadingPermission:!0,allData:[],dataParent:[],itemApps:[],itemRole:[],department:{},form:{id:null,is_crud:"N",order_line:null,has_route:"N",has_child:"N",route_name:"N",icon:null,menu_name:null,parent_name:null,app_name:null,name:null,old_name:null,index:"Y",store:"",edits:"",erase:"",role:[]},defaultItem:{id:null,is_crud:"N",order_line:null,has_route:"N",has_child:"N",route_name:"N",icon:null,menu_name:null,parent_name:null,app_name:null,name:null,old_name:null,index:"Y",store:"",edits:"",erase:"",role:[]},options:{},headers:[{text:"Name",value:"menu_name"},{text:"Parent Name",value:"parent_name"},{text:"Icon",value:"icon"},{text:"Route",value:"route_name"},{text:"Has Child",value:"has_child"},{text:"Has Route",value:"has_route"},{text:"Is CRUD",value:"is_crud"},{text:"Order Line",value:"order_line"},{text:"Index",value:"index",align:"center"},{text:"Store",value:"store",align:"center"},{text:"Edits",value:"edits",align:"center"},{text:"Erase",value:"erase",align:"center"},{text:"Action",value:"ACTIONS",align:"center"}]}},head:function(){return{title:"Master Permissions"}},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},mounted:function(){this.getDataFromApi(),this.getRole()},methods:{getRole:function(){var e=this;this.$axios.get("/api/master/roles").then((function(t){e.itemRole=t.data.data.simple}))},emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.getDataFromApi()},getDataFromApi:function(){var e=this;this.loading=!0;this.$axios.get("/api/master/permissions",{params:{options:this.options}}).then((function(t){e.loading=!1,e.allData=t.data.data.rows,e.totalData=t.data.data.total,e.dataParent=t.data.data.parent})).catch((function(t){e.loading=!1,e.$swal({type:"error",title:"Error",text:t.response.data.message})}))},newData:function(){this.dialog=!0,this.statusProcessing="insert",this.form=Object.assign({},this.defaultItem),this.message=!1},editItem:function(e){var t=this;this.editedIndex=this.allData.indexOf(e),this.form=Object.assign({},e),this.statusProcessing="update",this.$axios.get("/api/master/permissions/"+this.form.parent_id,{params:{menu_name:this.form.menu_name}}).then((function(e){var form=Object.assign({},e.data.data.rows);form.old_name=e.data.data.rows.menu_name,form.role=JSON.parse(e.data.data.rows.role_name),setTimeout((function(){return t.form=Object.assign({},form)}),150)})),this.dialog=!0,this.insert=!1},openDialogPermission:function(e){this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},e),this.getPermissionRole(e)},getPermissionRole:function(e){var t=this;this.$axios.get("/api/master/permission-role",{params:{role:e.name}}).then((function(e){t.$refs.childDetails.setDataToDetails(e.data.data.rows)})).finally((function(e){t.loadingPermission=!1}))},saveRolePermission:function(){var e=this;this.loadingPermission=!0;var details=this.$refs.childDetails.getAddData();this.$axios.post("/api/master/permission-role",{details:details,role:this.form.name}).then((function(t){e.$swal({icon:"success",title:"Success",text:t.data.message}),e.getPermissionRole(e.form)})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message})})).finally((function(t){e.loadingPermission=!1}))},close:function(){var e=this;this.dialog=!1,this.statusProcessing="insert",setTimeout((function(){e.form=Object.assign({},e.defaultItem),e.editedIndex=-1}),300)},save:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=this,form=this.form,o=this.statusProcessing,data={form:form,status:o};"insert"===o?(this.store("post","/api/master/permissions",data,"insert",e),t.submitLoad=!1):"update"===o&&(this.store("put","/api/master/permissions/"+this.form.parent_id,data,"update",e),t.submitLoad=!1)},store:function(e,t,data,o){var r=this,n=this;n.submitLoad=!0,this.$axios({method:e,url:t,data:data}).then((function(e){"Error"===e.data.status?(r.$swal({type:"error",title:"Error",text:e.data.message}),n.submitLoad=!1):(r.dialog=!1,r.message=e.data.message,setTimeout((function(){return r.message=!1}),8e3),r.$nuxt.$emit("getMenu","nice payload"),r.getDataFromApi())})).catch((function(e){r.$swal({type:"error",title:"Error",text:e.response.data.message}),n.submitLoad=!1}))},changeCrud:function(e){"Y"===e?(this.form.index="Y",this.form.store="Y",this.form.edits="Y",this.form.erase="Y"):(this.form.index="",this.form.store="",this.form.edits="",this.form.erase="")}}},n=r,l=o(64),d=o(74),m=o.n(d),c=o(250),v=o(510),h=o(509),f=o(753),x=o(1052),_=o(566),k=o(518),w=o(548),C=o(565),P=o(226),D=o(598),y=o(831),$=o(832),N=o(590),S=o(533),I=o(534),R=o(514),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-layout",[o("v-flex",{attrs:{sm12:""}},[o("div",{staticClass:"mt-0"},[o("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"mx-auto",attrs:{type:"table"}}),e._v(" "),o("v-data-table",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:e.headers,items:e.allData,"items-per-page":20,options:e.options,"server-items-length":e.totalData,loading:e.loading,"footer-props":{"items-per-page-options":[20,50,100,-1]},dense:""},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"top",fn:function(){return[o("LazyMainToolbar",{attrs:{"document-status":e.documentStatus,"search-status":e.searchStatus,"item-search":e.itemSearch,"search-item":e.searchItem,search:e.search,title:"Master Permissions"},on:{emitData:e.emitData,newData:e.newData}})]},proxy:!0},{key:"item.ACTIONS",fn:function(t){var r=t.item;return[o("v-btn",{attrs:{"x-small":"",dark:"",color:"green"},on:{click:function(t){return e.editItem(r)}}},[o("v-icon",{staticClass:"mr-2",attrs:{left:""}},[e._v("\n              mdi-pencil-circle\n            ")]),e._v("\n            Edit\n          ")],1)]}}],null,!0)})],1)]),e._v(" "),o("v-dialog",{attrs:{persistent:"","max-width":"600px",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("LazyToolbarTitle",{attrs:{title:e.formTitle}}),e._v(" "),o("v-spacer"),e._v(" "),o("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(t){e.dialog=!1}}},[o("v-icon",[e._v("mdi-close-circle")])],1)],1),e._v(" "),o("v-divider"),e._v(" "),o("v-card-text",[o("v-form",[o("v-layout",{attrs:{wrap:""}},[e.message?o("v-flex",{attrs:{xs12:""}},[o("div",{staticClass:"red darken-2 text-xs-center"},[o("span",{staticClass:"white--text"},[e._v(e._s(e.message))])])]):e._e(),e._v(" "),o("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{staticClass:"pa-1 mt-1",attrs:{xs12:""}},[o("v-select",{attrs:{items:e.itemRole,chips:"","deletable-chips":"","small-chips":"",label:"Role",multiple:"",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}})],1),e._v(" "),o("v-flex",{staticClass:"pa-1 mt-1",attrs:{xs12:""}},[o("v-select",{attrs:{items:e.dataParent,label:"Parent Name",outlined:"",dense:"","hide-details":"auto",clearable:""},model:{value:e.form.parent_name,callback:function(t){e.$set(e.form,"parent_name",t)},expression:"form.parent_name"}})],1),e._v(" "),o("v-flex",{staticClass:"pa-1 mt-1",attrs:{md12:""}},[o("v-text-field",{attrs:{label:"Name",placeholder:"Name",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.menu_name,callback:function(t){e.$set(e.form,"menu_name",t)},expression:"form.menu_name"}})],1),e._v(" "),o("v-flex",{staticClass:"pa-1 mt-1",attrs:{md12:""}},[o("v-text-field",{attrs:{label:"Icon",placeholder:"Icon",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}})],1),e._v(" "),o("v-flex",{staticClass:"pa-1 mt-1",attrs:{md12:""}},[o("v-text-field",{attrs:{label:"Order Line",placeholder:"Order Line",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.order_line,callback:function(t){e.$set(e.form,"order_line",t)},expression:"form.order_line"}})],1),e._v(" "),o("v-flex",{staticClass:"pa-1 mt-1",attrs:{xs12:""}},[o("v-radio-group",{attrs:{row:"","hide-details":"auto",label:"Has Route"},model:{value:e.form.has_route,callback:function(t){e.$set(e.form,"has_route",t)},expression:"form.has_route"}},[o("v-radio",{attrs:{label:"Yes",value:"Y",color:"primary"}}),e._v(" "),o("v-radio",{attrs:{label:"No",value:"N",color:"primary"}})],1)],1),e._v(" "),"Y"===e.form.has_route?o("v-flex",{staticClass:"pa-1",attrs:{md12:""}},[o("v-text-field",{attrs:{label:"Route Name",placeholder:"Route Name",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.route_name,callback:function(t){e.$set(e.form,"route_name",t)},expression:"form.route_name"}})],1):e._e(),e._v(" "),o("v-flex",{staticClass:"pa-1",attrs:{xs12:""}},[o("v-radio-group",{attrs:{row:"","hide-details":"auto",label:"Has Child"},model:{value:e.form.has_child,callback:function(t){e.$set(e.form,"has_child",t)},expression:"form.has_child"}},[o("v-radio",{attrs:{label:"Yes",value:"Y",color:"primary"}}),e._v(" "),o("v-radio",{attrs:{label:"No",value:"N",color:"primary"}})],1)],1),e._v(" "),o("v-flex",{staticClass:"pa-1",attrs:{xs12:""}},[o("v-radio-group",{attrs:{row:"","hide-details":"auto",label:"Is CRUD"},model:{value:e.form.is_crud,callback:function(t){e.$set(e.form,"is_crud",t)},expression:"form.is_crud"}},[o("v-radio",{attrs:{label:"Yes",value:"Y",color:"primary"},on:{change:function(t){return e.changeCrud("Y")}}}),e._v(" "),o("v-radio",{attrs:{label:"No",value:"N",color:"primary"},on:{change:function(t){return e.changeCrud("N")}}})],1)],1),e._v(" "),o("v-flex",{staticClass:"pa-1 d-flex",attrs:{xs12:""}},[o("span",{staticClass:"font-weight-medium"},[e._v("Ability")])]),e._v(" "),o("v-flex",{staticClass:"pa-1 d-flex",attrs:{xs12:""}},[o("v-checkbox",{attrs:{value:e.form.index,label:"Index",color:"primary","hide-details":""},model:{value:e.form.index,callback:function(t){e.$set(e.form,"index",t)},expression:"form.index"}}),e._v(" "),o("v-checkbox",{attrs:{value:e.form.store,label:"Store",color:"primary","hide-details":""},model:{value:e.form.store,callback:function(t){e.$set(e.form,"store",t)},expression:"form.store"}}),e._v(" "),o("v-checkbox",{attrs:{value:e.form.edits,label:"Edits",color:"primary","hide-details":""},model:{value:e.form.edits,callback:function(t){e.$set(e.form,"edits",t)},expression:"form.edits"}}),e._v(" "),o("v-checkbox",{attrs:{value:e.form.erase,label:"Erase",color:"primary","hide-details":""},model:{value:e.form.erase,callback:function(t){e.$set(e.form,"erase",t)},expression:"form.erase"}})],1)],1)],1)],1)],1)],1),e._v(" "),o("v-divider"),e._v(" "),o("v-card-actions",[o("v-spacer"),e._v(" "),o("v-btn",{attrs:{color:"blue darken-1",dark:"",small:"",loading:e.submitLoad},on:{click:function(t){return e.save()}}},[e._v("\n          Save\n        ")])],1)],1)],1),e._v(" "),o("v-dialog",{attrs:{persistent:"","max-width":"1000px"},model:{value:e.dialogPermission,callback:function(t){e.dialogPermission=t},expression:"dialogPermission"}},[o("v-card",{attrs:{loading:e.loadingPermission}},[o("v-card-title",[o("span",{staticClass:"font-weight-medium"},[e._v("Role Permission")])]),e._v(" "),o("v-card-text",[o("div",{staticClass:"scroll-container"},[o("LazyMasterPermissionList",{ref:"childDetails"})],1)]),e._v(" "),o("v-card-actions",[o("v-btn",{staticClass:"white--text",attrs:{small:"",color:"blue darken-1"},on:{click:function(t){return e.$refs.childDetails.addLine()}}},[o("v-icon",{attrs:{small:""}},[e._v(" mdi-plus ")])],1),e._v(" "),o("v-spacer"),e._v(" "),o("v-btn",{attrs:{color:"red darken-1",dark:"",small:""},on:{click:function(t){e.dialogPermission=!1}}},[e._v("\n          close\n        ")]),e._v(" "),o("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:e.loadingPermission},on:{click:function(t){return e.saveRolePermission()}}},[e._v("\n          Save\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:c.a,VCard:v.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VCheckbox:f.a,VDataTable:x.a,VDialog:_.a,VDivider:k.a,VFlex:w.a,VForm:C.a,VIcon:P.a,VLayout:D.a,VRadio:y.a,VRadioGroup:$.a,VSelect:N.a,VSkeletonLoader:S.a,VSpacer:I.a,VTextField:R.a})}}]);