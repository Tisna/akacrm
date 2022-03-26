(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1010:function(t,e,o){"use strict";o.r(e);o(59),o(24),o(242),o(12),o(4);var n={name:"MasterUser",layout:"dashboard",data:function(){return{totalData:0,editedIndex:-1,loadNewBtn:!1,submitLoad:!1,singleSelect:!1,statusProcessing:"insert",show:!1,dialog:!1,message:!1,loading:!0,loadingSync:!1,searchItem:"",searchRole:"",search:"",searchStatus:"",allData:[],itemRole:[],itemApps:[],itemSearch:[],documentStatus:[],options:{},entries:[],dataUser:{},dataCompany:{},sub_id:{},searchUsername:null,form:{id:null,enabled:!1,is_superuser:"No",username:null,role:[],apps:[],division:[],whs:[],item_group:[],work_location:[],sub_role:[]},defaultForm:{id:null,is_superuser:"No",enabled:!1,username:null,role:[],apps:[],division:[],whs:[],item_group:[],work_location:[],sub_role:[]},headers:[{text:"Username",value:"username"},{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Enabled",value:"enabled"},{text:"Role",value:"role"},{text:"Action",value:"Action",align:"end"}]}},head:function(){return{title:"Master Users"}},computed:{formTitle:function(){return-1===this.editedIndex?"New User":"Edit User"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0},searchUsername:function(t){this.getDataEmployee()}},mounted:function(){var t=this;setTimeout((function(){t.refreshData()}),500)},methods:{emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.getDataFromApi()},refreshData:function(){this.getDataFromApi(),this.getRole()},getRole:function(){var t=this;this.$axios.get("/api/master/roles").then((function(e){t.itemRole=e.data.data.simple})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getDataFromApi:function(){var t=this;this.loading=!0;var e=this;this.$axios.get("/api/master/users",{params:{options:e.options,searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search}}).then((function(e){t.loading=!1,t.allData=e.data.rows,t.totalData=e.data.total,t.itemSearch=e.data.filter,t.itemWorkLocation=e.data.work_location})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},newData:function(){var t=this;this.$refs.dialogForm.openDialog(),setTimeout((function(){t.form=Object.assign({},t.defaultForm),t.editedIndex=-1}),300),this.statusProcessing="insert"},editItem:function(t){var e=t;e.role=JSON.parse(e.role),this.statusProcessing="update",this.editedIndex=this.allData.indexOf(t),this.form=Object.assign({},e),this.$refs.dialogForm.openDialog(),this.dataUser=t,this.insert=!1},copyItem:function(t){var e=t;e.role=JSON.parse(e.role),this.statusProcessing="copy",this.editedIndex=this.allData.indexOf(t),this.form=Object.assign({},e),this.$refs.dialogForm.openDialog(),this.dataUser=t,this.insert=!1},close:function(){var t=this;this.statusProcessing="insert",this.dialog=!1,setTimeout((function(){t.form=Object.assign({},t.defaultForm),t.editedIndex=-1}),300)},save:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=this,form=this.form,o=this.statusProcessing,data={form:form,status:o};e.submitLoad=!0,"insert"===o||"copy"===o?this.store("post","/api/master/users",data,"insert",t):"update"===o&&this.store("put","/api/master/users/"+this.form.id,data,"update",t)},store:function(t,e,data,o){var n=this,r=this;r.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){"Error"===t.data.status?n.$swal({type:"error",title:"Error",text:t.data.message}):(n.dialog=!1,n.message=t.data.message,setTimeout((function(){return n.message=!1}),8e3),n.$swal({type:"success",title:"Success!",text:t.data.message}),n.$refs.dialogForm.closeDialog(),n.getDataFromApi()),r.submitLoad=!1})).catch((function(t){n.$swal({type:"error",title:"Error",text:t.response.data.message}),r.submitLoad=!1}))}}},r=n,l=o(64),d=o(74),c=o.n(d),m=o(597),h=o(250),v=(o(11),o(9),o(13),o(10),o(14),o(2)),f=(o(866),o(780)),x=o(25),D=o(5);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=Object(D.a)(f.a,x.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return _(_({},f.a.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,_({},f.a.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}}),P=o(1007),O=o(548),$=o(565),k=o(226),S=o(596),j=o(533),V=o(991),C=o(514),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",[o("v-flex",{attrs:{sm12:""}},[o("div",{staticClass:"mt-0"},[o("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"mx-auto",attrs:{type:"table"}}),t._v(" "),o("v-data-table",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[o("LazyMainToolbar",{staticClass:"has-border-bottom",attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:"Users","title-button":"User"},on:{emitData:t.emitData,newData:t.newData}})]},proxy:!0},{key:"item.Action",fn:function(e){var n=e.item;return[o("v-btn-toggle",{attrs:{color:"deep-blue accent-3",group:"",dense:"",tile:""}},[o("v-btn",{attrs:{value:"left"},on:{click:function(e){return t.editItem(n)}}},[o("v-icon",{attrs:{left:""}},[t._v("\n                mdi-pencil-circle\n              ")]),t._v(" "),o("span",{staticClass:"hidden-sm-and-down"},[t._v("Edit")])],1),t._v(" "),o("v-btn",{attrs:{value:"center"},on:{click:function(e){return t.copyItem(n)}}},[o("v-icon",{attrs:{left:""}},[t._v("\n                mdi-content-copy\n              ")]),t._v(" "),o("span",{staticClass:"hidden-sm-and-down"},[t._v("Copy")])],1),t._v(" "),o("v-btn",{attrs:{value:"right"},on:{click:function(e){return t.$refs.dialogPermission.openDialogPermission(n,"Direct Permissions")}}},[o("v-icon",{attrs:{left:""}},[t._v("\n                mdi-playlist-edit\n              ")]),t._v(" "),o("span",{staticClass:"hidden-sm-and-down"},[t._v("Permissions")])],1)],1)]}}],null,!0)})],1)]),t._v(" "),o("DialogForm",{ref:"dialogForm",attrs:{"max-width":"700px","dialog-title":t.formTitle,"button-title":"Save"},scopedSlots:t._u([{key:"content",fn:function(){return[o("v-form",[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[o("v-text-field",{attrs:{label:"Name",placeholder:"Name",outlined:"",dense:"",clearable:"","hide-details":"auto"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[o("v-text-field",{attrs:{label:"Username",placeholder:"Username",outlined:"",dense:"",clearable:"","hide-details":"auto"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[o("v-text-field",{attrs:{label:"E-mail",placeholder:"E-mail",outlined:"",dense:"",clearable:"","hide-details":"auto"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[o("v-autocomplete",{attrs:{items:t.itemRole,chips:"","deletable-chips":"","hide-no-data":"","small-chips":"",label:"Role",multiple:"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.role,callback:function(e){t.$set(t.form,"role",e)},expression:"form.role"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[o("v-switch",{attrs:{inset:"",label:"Enabled"},model:{value:t.form.enabled,callback:function(e){t.$set(t.form,"enabled",e)},expression:"form.enabled"}})],1)],1)],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[o("v-btn",{attrs:{color:"green darken-1",small:"",dark:"",loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n        Save\n      ")])]},proxy:!0}])}),t._v(" "),o("MasterDialogPermission",{ref:"dialogPermission"})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{DialogForm:o(552).default,MasterDialogPermission:o(734).default}),c()(component,{VAutocomplete:m.a,VBtn:h.a,VBtnToggle:y,VDataTable:P.a,VFlex:O.a,VForm:$.a,VIcon:k.a,VLayout:S.a,VSkeletonLoader:j.a,VSwitch:V.a,VTextField:C.a})},552:function(t,e,o){"use strict";o.r(e);var n={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},r=o(64),l=o(74),d=o.n(l),c=o(250),m=o(510),h=o(509),v=o(566),f=o(518),x=o(226),D=o(534),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{"no-click-animation":"",persistent:"",origin:t.original,"max-width":t.maxWidth,transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return t.closeDialog()}}},[o("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),o("v-divider"),t._v(" "),t._t("content"),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[t._t("addLine"),t._v(" "),o("v-spacer"),t._v(" "),t._t("saveData")],2)],2)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:c.a,VCard:m.a,VCardActions:h.a,VCardTitle:h.d,VDialog:v.a,VDivider:f.a,VIcon:x.a,VSpacer:D.a})},565:function(t,e,o){"use strict";var n=o(2),r=(o(39),o(58),o(196),o(12),o(4),o(10),o(59),o(108),o(11),o(9),o(13),o(14),o(5)),l=o(90),d=o(111);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(r.a)(l.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},o={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?o.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(o.valid=e(input)))})):o.valid=e(input),o},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:m({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},734:function(t,e,o){"use strict";o.r(e);o(4);var n={name:"DialogPermission",data:function(){return{loadingPermission:!1,dialogPermission:!1,dialogTitle:"",role:"",userRole:[],form:{},canAddData:!1,type:""}},mounted:function(){this.getPermissionList()},methods:{getPermissionList:function(){var t=this;this.$axios.get("/api/master/permissions").then((function(e){t.$auth.$storage.setLocalStorage("permission_list",e.data.data.simple)}))},openDialogPermission:function(t,title){this.dialogTitle=title,this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},t),this.canAddData=!0,this.getPermissionUser(t),this.type="user"},getPermissionUser:function(t){var e=this;this.userRole=null,this.$axios.get("/api/master/user/permission",{params:{form:t}}).then((function(t){e.$refs.childDetails.setDataToDetails(t.data.data.rows)})).finally((function(t){e.loadingPermission=!1}))},closeDialogPermission:function(){this.dialogPermission=!1,this.userRole=[],this.canAddData=!1},openRolePermissions:function(t,title,e){var o=this,n=this;this.type=e,this.dialogTitle=title,this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},t);var r="";"user"===e?r="/api/master/user/roles":(this.canAddData=!0,r="/api/master/permission-role"),this.$axios.get(r,{params:{form:this.form}}).then((function(t){n.$refs.childDetails.setDataToDetails(t.data.data.rows),o.loadingPermission=!1})).finally((function(t){o.loadingPermission=!1}))},changeTab:function(t){var e=this;this.loadingPermission=!0,this.$axios.post("/api/master/permission-role",{form:t}).then((function(t){e.$refs.childDetails.setDataToDetails(t.data.data.rows)})).finally((function(t){e.loadingPermission=!1}))},getRolePermissionUser:function(t){var e=this;this.$axios.post("/api/master/user/role-permission",{item:t}).then((function(t){e.$refs.childDetails.setDataToDetails(t.data.data.rows)})).finally((function(t){e.loadingPermission=!1}))},getPermissionRole:function(t){var e=this;this.$axios.post("/api/master/permission-role",{form:this.form}).then((function(t){e.$refs.childDetails.setDataToDetails(t.data.data.rows)})).finally((function(t){e.loadingPermission=!1}))},saveRolePermission:function(){var t=this;this.loadingPermission=!0;var details=this.$refs.childDetails.getAddData(),e="";e="user"===this.type?"/api/master/user/permission":"/api/master/permission-role",this.$axios.post(e,{details:details,form:this.form}).then((function(e){t.$swal({icon:"success",title:"Success",text:e.data.message}),"user"===t.type?t.getPermissionUser(t.form):t.getPermissionRole(t.form)})).catch((function(e){t.$swal({icon:"error",title:"Error",text:e.response.data.message})})).finally((function(e){t.loadingPermission=!1}))}}},r=o(64),l=o(74),d=o.n(l),c=o(250),m=o(510),h=o(509),v=o(566),f=o(226),x=o(534),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{persistent:"","max-width":"1000px",transition:"dialog-bottom-transition"},model:{value:t.dialogPermission,callback:function(e){t.dialogPermission=e},expression:"dialogPermission"}},[o("v-card",{attrs:{loading:t.loadingPermission}},[o("v-card-title",[o("span",{staticClass:"subtitle-2"},[t._v("\n        "+t._s(t.dialogTitle)+"\n      ")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"red darken-1",dark:"",icon:"",small:""},on:{click:t.closeDialogPermission}},[o("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),o("v-card-text",[o("div",{staticClass:"scroll-container"},[o("LazyMasterPermissionList",{ref:"childDetails"})],1)]),t._v(" "),o("v-card-actions",[t.canAddData?o("v-btn",{staticClass:"white--text",attrs:{small:"",color:"orange darken-1"},on:{click:function(e){return t.$refs.childDetails.addLine()}}},[t._v("\n        Add Line\n      ")]):t._e(),t._v(" "),o("v-spacer"),t._v(" "),t.canAddData?o("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:t.loadingPermission},on:{click:function(e){return t.saveRolePermission()}}},[t._v("\n        Save\n      ")]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:c.a,VCard:m.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VDialog:v.a,VIcon:f.a,VSpacer:x.a})},780:function(t,e,o){"use strict";var n=o(158);e.a=n.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return n.a.options.computed.classes.call(this)}},methods:{genData:n.a.options.methods.genData}})},866:function(t,e,o){var content=o(867);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("01907af4",content,!0,{sourceMap:!1})},867:function(t,e,o){var n=o(15)(!1);n.push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12) !important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(255,255,255,.12) !important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(255,255,255,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child){border-left-width:0}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle .v-btn.v-btn.v-size--default{min-width:48px;min-height:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent !important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),t.exports=n}}]);