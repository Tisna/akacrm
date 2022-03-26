(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{569:function(t,e,l){"use strict";var o=l(91),n=l(1);e.a=n.a.extend({name:"rippleable",directives:{ripple:o.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}})},573:function(t,e,l){var content=l(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(16).default)("2e2bc7da",content,!0,{sourceMap:!1})},574:function(t,e,l){"use strict";l.d(e,"b",(function(){return d}));l(4),l(71),l(12);var o=l(80),n=l(569),r=l(252),c=l(5);function d(t){t.preventDefault()}e.a=Object(c.a)(o.a,n.a,r.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(l){return t.valueComparator(l,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=o.a.options.methods.genLabel.call(this);return label?(label.data.on={click:d},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var l=input.length;(input=input.filter((function(l){return!t.valueComparator(l,e)}))).length===l&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})},577:function(t,e,l){var o=l(15)(!1);o.push([t.i,'.v-input--selection-controls{margin-top:4px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1);transition-property:transform;width:24px;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(0.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=o},773:function(t,e,l){"use strict";l.r(e);var o={name:"EmailSetup",props:{form:{type:Object,default:function(){return{}}}},data:function(){return{paperSize:["A4 Portrait","A4 Landscape","Letter Portrait","Letter Landscape"]}},methods:{getForm:function(){return this.form},setForm:function(form){this.form=Object.assign({},form)}}},n=l(64),r=l(74),c=l.n(r),d=l(530),v=l(518),h=l(913),m=l(831),f=l(832),_=l(556),C=l(590),x=l(520),V=l(514),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-row",{attrs:{"no-gutters":""}},[l("v-col",{staticClass:"pr-md-3 pl-md-3",attrs:{cols:"12",md:"6"}},[l("v-subheader",[t._v("General")]),t._v(" "),l("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[l("v-divider")],1),t._v(" "),l("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[l("v-text-field",{attrs:{label:"Font Size",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),t._v(" "),l("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[l("v-text-field",{attrs:{label:"Logo",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),t._v(" "),l("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[l("v-text-field",{attrs:{label:"Logo Width",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),t._v(" "),l("v-subheader",[t._v("Signature")]),t._v(" "),l("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[l("v-divider")],1),t._v(" "),l("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[l("v-radio-group",{attrs:{dense:"",row:"",label:"Show PDF Signature on Invoice"}},[l("v-radio",{attrs:{label:"Option 1",value:"radio-1"}}),t._v(" "),l("v-radio",{attrs:{label:"Option 2",value:"radio-2"}})],1)],1),t._v(" "),l("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[l("v-file-input",{attrs:{accept:"image/*",label:"Logo",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),t._v(" "),l("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[l("v-text-field",{attrs:{label:"Logo Width",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),t._v(" "),l("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[l("v-text-field",{attrs:{label:"Mail From Address",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1)],1),t._v(" "),l("v-col",{staticClass:"pr-md-3 pl-md-3",attrs:{cols:"12",md:"6"}},[l("v-subheader",[t._v("Document Format")]),t._v(" "),l("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[l("v-divider")],1),t._v(" "),l("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[l("v-select",{attrs:{items:t.paperSize,label:"Invoice",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),t._v(" "),l("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[l("v-select",{attrs:{items:t.paperSize,label:"Estimate",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),t._v(" "),l("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[l("v-select",{attrs:{items:t.paperSize,label:"Proposal",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),t._v(" "),l("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[l("v-select",{attrs:{items:t.paperSize,label:"Payment",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),t._v(" "),l("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[l("v-select",{attrs:{items:t.paperSize,label:"Credit Note",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),t._v(" "),l("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[l("v-select",{attrs:{items:t.paperSize,label:"Statement",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),t._v(" "),l("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[l("v-select",{attrs:{items:t.paperSize,label:"Contract",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:d.a,VDivider:v.a,VFileInput:h.a,VRadio:m.a,VRadioGroup:f.a,VRow:_.a,VSelect:C.a,VSubheader:x.a,VTextField:V.a})}}]);