(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1060:function(e,t,n){"use strict";n.r(t);n(59);var j=n(793),r=n(762);n(799);Object(r.a)();var o={name:"PermissionList",components:{HotTable:j.a},data:function(){return{settings:{licenseKey:"non-commercial-and-evaluation"},detailsRoot:"detailsRoot"}},created:function(){this.setInstance()},methods:{setInstance:function(){window.details=this},addLine:function(){var e=this.$refs.details.hotInstance.countRows();this.$refs.details.hotInstance.alter("insert_row",e+1)},updateTableSettings:function(){var e=this;this.$refs.details.hotInstance.updateSettings({colHeaders:["Permission","Index","Store","Edits","Erase"],currentRowClassName:"currentRow",currentColClassName:"currentCol",startRows:0,manualColumnFreeze:!0,currData:{},rowHeaders:!0,manualColumnResize:!0,manualRowResize:!0,filters:!0,autoRowSize:!1,autoColumnSize:!1,viewportRowRenderingOffset:1e3,viewportColumnRenderingOffset:100,colWidths:80,dropdownMenu:!0,columnSorting:!0,persistentState:!0,width:"100%",stretchH:"all",columns:[{type:"autocomplete",data:"permission",width:150,strict:!1,filter:!0,height:26,wordWrap:!1,source:function(t,n){n(e.$auth.$storage.getLocalStorage("permission_list"))}},{data:"index",width:50,type:"checkbox",checkedTemplate:"Y",uncheckedTemplate:"N"},{data:"store",width:50,type:"checkbox",checkedTemplate:"Y",uncheckedTemplate:"N"},{data:"edits",width:50,type:"checkbox",checkedTemplate:"Y",uncheckedTemplate:"N"},{data:"erase",width:50,type:"checkbox",checkedTemplate:"Y",uncheckedTemplate:"N"}]})},setDataToDetails:function(data){this.updateTableSettings();var e=this;setTimeout((function(){e.$refs.details.hotInstance.loadData(data)}),300)},getAddData:function(){return this.$refs.details.hotInstance.getSourceData()}}},l=n(64),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("hot-table",{ref:"details",attrs:{root:e.detailsRoot,settings:e.settings}})}),[],!1,null,null,null);t.default=component.exports},794:function(e,t,n){var map={"./af":607,"./af.js":607,"./ar":608,"./ar-dz":609,"./ar-dz.js":609,"./ar-kw":610,"./ar-kw.js":610,"./ar-ly":611,"./ar-ly.js":611,"./ar-ma":612,"./ar-ma.js":612,"./ar-sa":613,"./ar-sa.js":613,"./ar-tn":614,"./ar-tn.js":614,"./ar.js":608,"./az":615,"./az.js":615,"./be":616,"./be.js":616,"./bg":617,"./bg.js":617,"./bm":618,"./bm.js":618,"./bn":619,"./bn.js":619,"./bo":620,"./bo.js":620,"./br":621,"./br.js":621,"./bs":622,"./bs.js":622,"./ca":623,"./ca.js":623,"./cs":624,"./cs.js":624,"./cv":625,"./cv.js":625,"./cy":626,"./cy.js":626,"./da":627,"./da.js":627,"./de":628,"./de-at":629,"./de-at.js":629,"./de-ch":630,"./de-ch.js":630,"./de.js":628,"./dv":631,"./dv.js":631,"./el":632,"./el.js":632,"./en-SG":633,"./en-SG.js":633,"./en-au":634,"./en-au.js":634,"./en-ca":635,"./en-ca.js":635,"./en-gb":636,"./en-gb.js":636,"./en-ie":637,"./en-ie.js":637,"./en-il":638,"./en-il.js":638,"./en-nz":639,"./en-nz.js":639,"./eo":640,"./eo.js":640,"./es":641,"./es-do":642,"./es-do.js":642,"./es-us":643,"./es-us.js":643,"./es.js":641,"./et":644,"./et.js":644,"./eu":645,"./eu.js":645,"./fa":646,"./fa.js":646,"./fi":647,"./fi.js":647,"./fo":648,"./fo.js":648,"./fr":649,"./fr-ca":650,"./fr-ca.js":650,"./fr-ch":651,"./fr-ch.js":651,"./fr.js":649,"./fy":652,"./fy.js":652,"./ga":653,"./ga.js":653,"./gd":654,"./gd.js":654,"./gl":655,"./gl.js":655,"./gom-latn":656,"./gom-latn.js":656,"./gu":657,"./gu.js":657,"./he":658,"./he.js":658,"./hi":659,"./hi.js":659,"./hr":660,"./hr.js":660,"./hu":661,"./hu.js":661,"./hy-am":662,"./hy-am.js":662,"./id":663,"./id.js":663,"./is":664,"./is.js":664,"./it":665,"./it-ch":666,"./it-ch.js":666,"./it.js":665,"./ja":667,"./ja.js":667,"./jv":668,"./jv.js":668,"./ka":669,"./ka.js":669,"./kk":670,"./kk.js":670,"./km":671,"./km.js":671,"./kn":672,"./kn.js":672,"./ko":673,"./ko.js":673,"./ku":674,"./ku.js":674,"./ky":675,"./ky.js":675,"./lb":676,"./lb.js":676,"./lo":677,"./lo.js":677,"./lt":678,"./lt.js":678,"./lv":679,"./lv.js":679,"./me":680,"./me.js":680,"./mi":681,"./mi.js":681,"./mk":682,"./mk.js":682,"./ml":683,"./ml.js":683,"./mn":684,"./mn.js":684,"./mr":685,"./mr.js":685,"./ms":686,"./ms-my":687,"./ms-my.js":687,"./ms.js":686,"./mt":688,"./mt.js":688,"./my":689,"./my.js":689,"./nb":690,"./nb.js":690,"./ne":691,"./ne.js":691,"./nl":692,"./nl-be":693,"./nl-be.js":693,"./nl.js":692,"./nn":694,"./nn.js":694,"./pa-in":695,"./pa-in.js":695,"./pl":696,"./pl.js":696,"./pt":697,"./pt-br":698,"./pt-br.js":698,"./pt.js":697,"./ro":699,"./ro.js":699,"./ru":700,"./ru.js":700,"./sd":701,"./sd.js":701,"./se":702,"./se.js":702,"./si":703,"./si.js":703,"./sk":704,"./sk.js":704,"./sl":705,"./sl.js":705,"./sq":706,"./sq.js":706,"./sr":707,"./sr-cyrl":708,"./sr-cyrl.js":708,"./sr.js":707,"./ss":709,"./ss.js":709,"./sv":710,"./sv.js":710,"./sw":711,"./sw.js":711,"./ta":712,"./ta.js":712,"./te":713,"./te.js":713,"./tet":714,"./tet.js":714,"./tg":715,"./tg.js":715,"./th":716,"./th.js":716,"./tl-ph":717,"./tl-ph.js":717,"./tlh":718,"./tlh.js":718,"./tr":719,"./tr.js":719,"./tzl":720,"./tzl.js":720,"./tzm":721,"./tzm-latn":722,"./tzm-latn.js":722,"./tzm.js":721,"./ug-cn":723,"./ug-cn.js":723,"./uk":724,"./uk.js":724,"./ur":725,"./ur.js":725,"./uz":726,"./uz-latn":727,"./uz-latn.js":727,"./uz.js":726,"./vi":728,"./vi.js":728,"./x-pseudo":729,"./x-pseudo.js":729,"./yo":730,"./yo.js":730,"./zh-cn":731,"./zh-cn.js":731,"./zh-hk":732,"./zh-hk.js":732,"./zh-tw":733,"./zh-tw.js":733};function j(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}j.keys=function(){return Object.keys(map)},j.resolve=r,e.exports=j,j.id=794}}]);