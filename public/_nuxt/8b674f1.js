(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1008:function(t,e,n){"use strict";n.r(e);var r=[["#222"],["#42b3f4"],["red","orange","yellow"],["purple","violet"],["#00c6ff","#F0F","#FF0"],["#f72047","#ffd200","#1feaea"]],o={name:"DashboardPage",layout:"dashboard",data:function(){return{loading:!0,width:2,radius:10,padding:8,lineCap:"round",gradient:r[5],value:[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0],labels:["12am","3am","6am","9am","12pm","3pm","6pm","9pm"],gradientDirection:"top",gradients:r,fill:!1,type:"trend",autoLineWidth:!1}}},l=n(64),c=n(74),h=n.n(c),d=n(250),f=n(510),v=n(509),m=n(530),y=n(527),x=n(518),j=n(226),w=n(556),O=n(61),_=n(2),S=n(20),C=(n(21),n(39),n(66),n(342),n(4),n(71),n(29),n(43),n(11),n(9),n(12),n(13),n(10),n(14),n(25)),k=n(5),D=n(49);function L(t,e){var n=e.minX,r=e.maxX,o=e.minY,l=e.maxY,c=t.length,h=Math.max.apply(Math,Object(D.a)(t)),d=Math.min.apply(Math,Object(D.a)(t)),f=(r-n)/(c-1),v=(l-o)/(h-d||1);return t.map((function(t,e){return{x:n+e*f,y:l-(t-d)*v,value:t}}))}function P(t,e){var n=e.minX,r=e.maxX,o=e.minY,l=e.maxY,c=t.length,h=Math.max.apply(Math,Object(D.a)(t)),d=Math.min.apply(Math,Object(D.a)(t));d>0&&(d=0),h<0&&(h=0);var f=r/c,v=(l-o)/(h-d||1),m=l-Math.abs(d*v);return t.map((function(t,e){var r=Math.abs(v*t);return{x:n+e*f,y:m-r+ +(t<0)*r,height:r,value:t}}))}n(103);function $(t){return parseInt(t,10)}function E(t,e,n){return $(t.x+n.x)===$(2*e.x)&&$(t.y+n.y)===$(2*e.y)}function M(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function V(t,e,n){var r=t.x-e.x,o=t.y-e.y,l=Math.sqrt(r*r+o*o),c=r/l,h=o/l;return{x:e.x+c*n,y:e.y+h*n}}function W(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75,o=t.shift(),l=t[t.length-1];return(n?"M".concat(o.x," ").concat(r-o.x+2," L").concat(o.x," ").concat(o.y):"M".concat(o.x," ").concat(o.y))+t.map((function(n,r){var l=t[r+1],c=t[r-1]||o,h=l&&E(l,n,c);if(!l||h)return"L".concat(n.x," ").concat(n.y);var d=Math.min(M(c,n),M(l,n)),f=d/2<e?d/2:e,v=V(c,n,f),m=V(l,n,f);return"L".concat(v.x," ").concat(v.y,"S").concat(n.x," ").concat(n.y," ").concat(m.x," ").concat(m.y)})).join("")+(n?"L".concat(l.x," ").concat(r-o.x+2," Z"):"")}function B(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function z(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var N=Object(k.a)(C.a).extend({name:"VSparkline",inheritAttrs:!1,props:{autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},autoLineWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"},fill:{type:Boolean,default:!1},gradient:{type:Array,default:function(){return[]}},gradientDirection:{type:String,validator:function(t){return["top","bottom","left","right"].includes(t)},default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:function(){return[]}},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:{type:[Boolean,Number,String],default:!1},type:{type:String,default:"trend",validator:function(t){return["trend","bar"].includes(t)}},value:{type:Array,default:function(){return[]}},width:{type:[Number,String],default:300}},data:function(){return{lastLength:0}},computed:{parsedPadding:function(){return Number(this.padding)},parsedWidth:function(){return Number(this.width)},parsedHeight:function(){return parseInt(this.height,10)},parsedLabelSize:function(){return parseInt(this.labelSize,10)||7},totalHeight:function(){var t=this.parsedHeight;return this.hasLabels&&(t+=1.5*parseInt(this.labelSize,10)),t},totalWidth:function(){var t=this.parsedWidth;return"bar"===this.type&&(t=Math.max(this.value.length*this._lineWidth,t)),t},totalValues:function(){return this.value.length},_lineWidth:function(){if(this.autoLineWidth&&"trend"!==this.type){var t=this.parsedPadding*(this.totalValues+1);return(this.parsedWidth-t)/this.totalValues}return parseFloat(this.lineWidth)||4},boundary:function(){if("bar"===this.type)return{minX:0,maxX:this.totalWidth,minY:0,maxY:this.parsedHeight};var t=this.parsedPadding;return{minX:t,maxX:this.totalWidth-t,minY:t,maxY:this.parsedHeight-t}},hasLabels:function(){return Boolean(this.showLabels||this.labels.length>0||this.$scopedSlots.label)},parsedLabels:function(){for(var t=[],e=this._values,n=e.length,i=0;t.length<n;i++){var r=e[i],o=this.labels[i];o||(o="object"===Object(S.a)(r)?r.value:r),t.push({x:r.x,value:String(o)})}return t},normalizedValues:function(){return this.value.map((function(t){return"number"==typeof t?t:t.value}))},_values:function(){return"trend"===this.type?L(this.normalizedValues,this.boundary):P(this.normalizedValues,this.boundary)},textY:function(){var t=this.parsedHeight;return"trend"===this.type&&(t-=4),t},_radius:function(){return!0===this.smooth?8:Number(this.smooth)}},watch:{value:{immediate:!0,handler:function(){var t=this;this.$nextTick((function(){if(t.autoDraw&&"bar"!==t.type&&t.$refs.path){var path=t.$refs.path,e=path.getTotalLength();t.fill?(path.style.transformOrigin="bottom center",path.style.transition="none",path.style.transform="scaleY(0)",path.getBoundingClientRect(),path.style.transition="transform ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),path.style.transform="scaleY(1)"):(path.style.transition="none",path.style.strokeDasharray=e+" "+e,path.style.strokeDashoffset=Math.abs(e-(t.lastLength||0)).toString(),path.getBoundingClientRect(),path.style.transition="stroke-dashoffset ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),path.style.strokeDashoffset="0"),t.lastLength=e}}))}}},methods:{genGradient:function(){var t=this,e=this.gradientDirection,n=this.gradient.slice();n.length||n.push("");var r=Math.max(n.length-1,1),o=n.reverse().map((function(e,n){return t.$createElement("stop",{attrs:{offset:n/r,"stop-color":e||"currentColor"}})}));return this.$createElement("defs",[this.$createElement("linearGradient",{attrs:{id:this._uid,gradientUnits:"userSpaceOnUse",x1:"left"===e?"100%":"0",y1:"top"===e?"100%":"0",x2:"right"===e?"100%":"0",y2:"bottom"===e?"100%":"0"}},o)])},genG:function(t){return this.$createElement("g",{style:{fontSize:"8",textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},t)},genPath:function(){var t=L(this.normalizedValues,this.boundary);return this.$createElement("path",{attrs:{d:W(t,this._radius,this.fill,this.parsedHeight),fill:this.fill?"url(#".concat(this._uid,")"):"none",stroke:this.fill?"none":"url(#".concat(this._uid,")")},ref:"path"})},genLabels:function(t){var e=this,n=this.parsedLabels.map((function(n,i){return e.$createElement("text",{attrs:{x:n.x+t+e._lineWidth/2,y:e.textY+.75*e.parsedLabelSize,"font-size":Number(e.labelSize)||7}},[e.genLabel(n,i)])}));return this.genG(n)},genLabel:function(t,e){return this.$scopedSlots.label?this.$scopedSlots.label({index:e,value:t.value}):t.value},genBars:function(){if(this.value&&!(this.totalValues<2)){var t=P(this.normalizedValues,this.boundary),e=(Math.abs(t[0].x-t[1].x)-this._lineWidth)/2;return this.$createElement("svg",{attrs:{display:"block",viewBox:"0 0 ".concat(this.totalWidth," ").concat(this.totalHeight)}},[this.genGradient(),this.genClipPath(t,e,this._lineWidth,"sparkline-bar-"+this._uid),this.hasLabels?this.genLabels(e):void 0,this.$createElement("g",{attrs:{"clip-path":"url(#sparkline-bar-".concat(this._uid,"-clip)"),fill:"url(#".concat(this._uid,")")}},[this.$createElement("rect",{attrs:{x:0,y:0,width:this.totalWidth,height:this.height}})])])}},genClipPath:function(t,e,n,r){var o=this,l="number"==typeof this.smooth?this.smooth:this.smooth?2:0;return this.$createElement("clipPath",{attrs:{id:"".concat(r,"-clip")}},t.map((function(t){return o.$createElement("rect",{attrs:{x:t.x+e,y:t.y,width:n,height:t.height,rx:l,ry:l}},[o.autoDraw?o.$createElement("animate",{attrs:{attributeName:"height",from:0,to:t.height,dur:"".concat(o.autoDrawDuration,"ms"),fill:"freeze"}}):void 0])})))},genTrend:function(){return this.$createElement("svg",this.setTextColor(this.color,{attrs:z(z({},this.$attrs),{},{display:"block","stroke-width":this._lineWidth||1,viewBox:"0 0 ".concat(this.width," ").concat(this.totalHeight)})}),[this.genGradient(),this.hasLabels&&this.genLabels(-this._lineWidth/2),this.genPath()])}},render:function(t){if(!(this.totalValues<2))return"trend"===this.type?this.genTrend():this.genBars()}}),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-card",{staticClass:"mx-auto text-center",attrs:{color:"green",dark:""}},[n("v-card-text",[n("v-sheet",{attrs:{color:"rgba(0, 0, 0, .12)"}},[n("v-sparkline",{attrs:{value:t.value,color:"rgba(255, 255, 255, .7)",height:"100",padding:"24","stroke-linecap":"round",smooth:""},scopedSlots:t._u([{key:"label",fn:function(e){return[t._v("\n                  $"+t._s(e.value)+"\n                ")]}}])})],1)],1),t._v(" "),n("v-card-text",[n("div",{staticClass:"text-h6"},[t._v("\n              Sales Last 24h\n            ")])]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",{staticClass:"justify-center"},[n("v-btn",{attrs:{block:"",text:""}},[t._v("\n              Go to Report\n            ")])],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-card",{staticClass:"mx-auto text-center",attrs:{color:"primary",dark:""}},[n("v-card-text",[n("v-sheet",{attrs:{color:"rgba(0, 0, 0, .12)"}},[n("v-sparkline",{attrs:{value:t.value,color:"rgba(255, 255, 255, .7)",height:"100",padding:"24","stroke-linecap":"round",smooth:""},scopedSlots:t._u([{key:"label",fn:function(e){return[t._v("\n                  $"+t._s(e.value)+"\n                ")]}}])})],1)],1),t._v(" "),n("v-card-text",[n("div",{staticClass:"text-h6"},[t._v("\n              Sales Last 24h\n            ")])]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",{staticClass:"justify-center"},[n("v-btn",{attrs:{block:"",text:""}},[t._v("\n              Go to Report\n            ")])],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-card",{staticClass:"mt-4 mx-auto"},[n("v-sheet",{staticClass:"v-sheet--offset mx-auto",attrs:{color:"cyan",elevation:"12","max-width":"calc(100% - 32px)"}},[n("v-sparkline",{attrs:{labels:t.labels,value:t.value,color:"white","line-width":"2",padding:"24"}})],1),t._v(" "),n("v-card-text",{staticClass:"pt-0"},[n("div",{staticClass:"text-h6 font-weight-light mb-2"},[t._v("\n              User Registrations\n            ")]),t._v(" "),n("div",{staticClass:"subheading font-weight-light grey--text"},[t._v("\n              Last Campaign Performance\n            ")]),t._v(" "),n("v-divider",{staticClass:"my-2"}),t._v(" "),n("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n              mdi-clock\n            ")]),t._v(" "),n("span",{staticClass:"text-caption grey--text font-weight-light"},[t._v("last registration 26 minutes ago")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:d.a,VCard:f.a,VCardActions:v.a,VCardText:v.c,VCol:m.a,VContainer:y.a,VDivider:x.a,VIcon:j.a,VRow:w.a,VSheet:O.a,VSparkline:N})},509:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return d}));var r=n(510),o=n(0),l=Object(o.j)("v-card__actions"),c=Object(o.j)("v-card__subtitle"),h=Object(o.j)("v-card__text"),d=Object(o.j)("v-card__title");r.a},556:function(t,e,n){"use strict";n(9),n(12),n(13),n(14);var r=n(2),o=(n(4),n(39),n(58),n(29),n(11),n(24),n(65),n(325),n(37),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(42),n(10),n(243),n(1)),l=n(70),c=n(0);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],v=["start","end","center"];function m(t,e){return f.reduce((function(n,r){return n[t+Object(c.H)(r)]=e(),n}),{})}var y=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},x=m("align",(function(){return{type:String,default:null,validator:y}})),j=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},w=m("justify",(function(){return{type:String,default:null,validator:j}})),O=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},_=m("alignContent",(function(){return{type:String,default:null,validator:O}})),S={align:Object.keys(x),justify:Object.keys(w),alignContent:Object.keys(_)},C={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var r=C[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var D=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},x),{},{justify:{type:String,default:null,validator:j}},w),{},{alignContent:{type:String,default:null,validator:O}},_),render:function(t,e){var n=e.props,data=e.data,o=e.children,c="";for(var h in n)c+=String(n[h]);var d=D.get(c);return d||function(){var t,e;for(e in d=[],S)S[e].forEach((function(t){var r=n[t],o=k(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),D.set(c,d)}(),t(n.tag,Object(l.a)(data,{staticClass:"row",class:d}),o)}})}}]);