(globalThis["webpackChunkTranscription"]=globalThis["webpackChunkTranscription"]||[]).push([[64],{8853:(e,t,a)=>{"use strict";a.d(t,{Lj:()=>u,PZ:()=>p,jU:()=>d,pF:()=>m,rz:()=>h,xR:()=>c});const s="/user",l="/hospital",i="/writer",r="/doctor",n="/receptionist",o="/admin/transcript-list",c={LIST:s,SAVE:s,UPDATE:`${s}/:id`,SHOW:`${s}/:id`,DELETE:`${s}/:id`},u={LIST:`${l}/hospital-list`,SAVE:l,UPDATE:`${l}/:id`,SHOW:`${l}/:id`,DELETE:`${l}/:id`,ASSIGN:`${l}/assign-list`},d={LIST:`${i}/dashboard`,LIST_AUDIO:`${i}/list`,SAVE:`${i}/:id`,UPDATE:`${i}/:id`,SHOW:`${i}/:id`,DELETE:`${i}/:id`,AUDIO_Delete:"/doctor/:id",TS_TYPE:`${i}/transcript-type-list`},p={LIST:r,LIST_HOSPITAL:`${r}/status-data`,LIST_SCRIPT:`${r}/list`,CONFIRM:`${r}/confirmed-transcripting/:id`,DOWNLOAD:`${r}/pdf-data`,SAVE:`${r}/:id`,UPDATE:`${r}/:id`,SHOW:`${r}/:id`,DELETE:`${r}/:id`},m={LIST_HOSPITAL:`${n}/hospital-list`,LIST_SCRIPT:`${n}/:id`,DOWNLOAD:`${n}/pdf-data`},h={LIST:o}},2057:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var s=a(499);function l(){const e=(0,s.iH)([]),t=(e,t)=>{let a="";return 0!==e.length&&e.forEach((e=>{e.field===t&&(a=e.field===t&&e.message)})),a};return{errors:e,serverValidationError:t}}},3508:(e,t,a)=>{"use strict";function s(e,t=""){var a="<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export Doc</title></head><body>",s="</body></html>",l=a+document.getElementById(e).innerHTML+s,i=new Blob(["\ufeff",l],{type:"application/msword"}),r="data:application/vnd.ms-word;charset=utf-8,"+encodeURIComponent(l);t=t?t+".doc":"document.doc";var n=document.createElement("a");document.body.appendChild(n),navigator.msSaveOrOpenBlob?navigator.msSaveOrOpenBlob(i,t):(n.href=r,n.download=t,n.click()),document.body.removeChild(n)}a.d(t,{$:()=>s})},5676:(e,t,a)=>{"use strict";a.d(t,{z:()=>n});var s=a(3746),l=a(3703),i=a(4016),r=a(8853);a(9587);const n=(0,s.Q_)("doctor",{state:()=>({data:l.Z.getItem("data")??[],draft:"",list:[],transcriptionList:[]}),getters:{getData(){return this.data},getList(){return this.list},getTranscriptionList(){return this.transcriptionList}},actions:{async fetchList(e){return new Promise(((t,a)=>{i.Z.getWithParam(r.PZ.LIST_HOSPITAL,e).then((e=>{if(e.success){const a=this.getList,s=a.concat(...e.data);this.list=s,t(e)}t(e)})).catch((e=>{a(e)}))}))},async fetchTranscriptionList(e){return new Promise(((t,a)=>{i.Z.getWithParam(r.PZ.LIST_SCRIPT,e).then((e=>{if(e.success){const a=this.getTranscriptionList,s=a.concat(...e.data.data);this.transcriptionList=s,t(e)}t(e)})).catch((e=>{a(e)}))}))},async resetList(){this.list=[],this.transcriptionList=[]}}})},4059:(e,t,a)=>{"use strict";a.d(t,{L:()=>n});a(9665);var s=a(3746),l=(a(3703),a(4016)),i=a(8853),r=a(9587);const n=(0,s.Q_)("hospital",{state:()=>({serviceList:[],hospitalList:[]}),getters:{getHospital(){return this.currentHospital},getHospitalList(){let e=[];return this.hospitalList.forEach((t=>{e.push({value:t.id,label:t.name})})),e}},actions:{async fetchHospitalList(){return new Promise(((e,t)=>{l.Z.getWithParam(i.Lj.LIST).then((t=>{t.success&&(this.hospitalList=t.data,e(t)),e(t)})).catch((e=>{t(e)}))}))},async saveNewHospital(e){return new Promise(((t,a)=>{l.Z.post(i.Lj.SAVE,e).then((e=>{e.success&&(this.hospitalList.push(e.data),t(e)),t(e)})).catch((e=>{a(e)}))}))},async updateHospital(e,t){return new Promise(((a,s)=>{l.Z.post(l.Z.resolveApiUrl(i.Lj.UPDATE,{id:t}),e).then((e=>{e.success&&(this.hospitalList.push(e.data),a(e)),a(e)})).catch((e=>{s(e)}))}))},async deleteHospital(e){return new Promise(((t,a)=>{l.Z.delete(l.Z.resolveApiUrl(i.Lj.DELETE,{id:e})).then((e=>{e.success&&r["default"].success(e.message||"hospital has been deleted"),t(e)})).catch((e=>{r["default"].success(e.message),a(e)}))}))},async fetchHospital(e){return new Promise(((t,a)=>{l.Z.get(l.Z.resolveApiUrl(i.Lj.SHOW,{id:e})).then((e=>{e.success&&(this.currentHospital=e.data,t(e)),t(e)})).catch((e=>{a(e)}))}))},async fetchHospitalAssign(e){return new Promise(((t,a)=>{l.Z.getWithParam(i.Lj.ASSIGN,{id:e}).then((e=>{e.success&&(this.currentHospital=e.data,t(e)),t(e)})).catch((e=>{a(e)}))}))}}})},4577:(e,t,a)=>{"use strict";a.d(t,{H:()=>n});a(9665);var s=a(3746),l=(a(3703),a(4016)),i=a(8853),r=a(9587);const n=(0,s.Q_)("user",{state:()=>({serviceList:[],userList:[],userType:[],currentUser:{},userCounter:[]}),getters:{getUser(){return this.currentUser},getUserType(){let e=[{label:"All",value:""}];return this.userType.forEach((t=>{e.push({label:t.name,value:t.id})})),e}},actions:{async fetchUserList(e){return new Promise(((e,t)=>{l.Z.get(i.xR.LIST).then((t=>{t.success&&(this.userList=t.data,e(t)),e(t)})).catch((e=>{t(e)}))}))},async saveNewUser(e){return new Promise(((t,a)=>{l.Z.post(i.xR.SAVE,e).then((e=>{e.success&&(this.userList.push(e.data),t(e)),t(e)})).catch((e=>{a(e)}))}))},async updateUser(e,t){return new Promise(((a,s)=>{l.Z.post(l.Z.resolveApiUrl(i.xR.UPDATE,{id:t}),e).then((e=>{e.success&&(this.userList.push(e.data),a(e)),a(e)})).catch((e=>{s(e)}))}))},async deleteUser(e){return new Promise(((t,a)=>{l.Z.delete(l.Z.resolveApiUrl(i.xR.DELETE,{id:e})).then((e=>{e.success&&r["default"].success(e.message||"user has been deleted"),t(e)})).catch((e=>{r["default"].success(e.message),a(e)}))}))},async fetchUser(e){return new Promise(((t,a)=>{l.Z.get(l.Z.resolveApiUrl(i.xR.SHOW,{id:e})).then((e=>{e.success&&(this.currentUser=e.data,t(e)),t(e)})).catch((e=>{a(e)}))}))},async fetchUserTypeList(e){return new Promise(((e,t)=>{l.Z.get("/userType").then((t=>{t.success&&(this.userType=t.data),e(t)})).catch((e=>{t(e)}))}))}}})},5531:(e,t,a)=>{"use strict";a.d(t,{b:()=>o});a(9665);var s=a(3746),l=a(3703),i=a(4016),r=a(8853),n=a(9587);const o=(0,s.Q_)("writer",{state:()=>({data:l.Z.getItem("data")??[],draft:"",audioList:[],list:[],tsType:l.Z.getItem("ts-type")??[],wrtHospitals:[],selectHospital:[],dateRange:null}),getters:{getData(){return this.data},getDraftStatus(){return this.draft},getAudioList(){return this.audioList},getList(){return this.list},getTsTypeList(){return this.tsType},getWrtHospitals(){return this.wrtHospitals}},actions:{async fetchList(){return new Promise(((e,t)=>{i.Z.getWithParam(r.jU.LIST).then((t=>{if(t.success){const a=this.getList,s=a.concat(...t.data);this.list=s,e(t)}e(t)})).catch((e=>{t(e)}))}))},async fetchAudioList(e){return new Promise(((t,a)=>{i.Z.getWithParam(r.jU.LIST_AUDIO,e).then((e=>{if(e.success){const a=this.getAudioList,s=a.concat(...e.data.data);this.audioList=s,t(e)}t(e)})).catch((e=>{a(e)}))}))},async deleteAudio(e){return new Promise(((t,a)=>{i.Z.delete(i.Z.resolveApiUrl(r.jU.AUDIO_Delete,{id:e})).then((e=>{e.success&&n["default"].success(e.message||"Audio has been deleted"),t(e)})).catch((e=>{n["default"].success(e.message),a(e)}))}))},async saveTranscription(e,t){return new Promise(((a,s)=>{i.Z.post(i.Z.resolveApiUrl(r.jU.SAVE,{id:t}),e).then((e=>{e.success&&a(e),a(e)})).catch((e=>{s(e)}))}))},async fetchTranscription(e){return new Promise(((t,a)=>{i.Z.get(i.Z.resolveApiUrl(r.jU.SAVE,{id:e})).then((e=>{e.success&&t(e),t(e)})).catch((e=>{a(e)}))}))},async fetchTsType(){return new Promise(((e,t)=>{i.Z.getWithParam(r.jU.TS_TYPE).then((t=>{t.success&&(t.data.forEach((e=>{this.tsType.push({value:e.id,label:e.name})})),this.tsType.push({value:"other",label:"other"}),e(t)),e(t)})).catch((e=>{t(e)}))}))},async resetList(){this.audioList=[],this.list=[],this.tsType=[]}}})},4051:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>P});a(9665);var s=a(9835),l=a(499),i=a(6970),r=a(1410),n=a(4170);const o={id:"downloadPDF",class:"dialogpdf",style:{width:"100%",height:"100%",display:"inline-block","background-color":"white"}},c={key:0},u=["innerHTML"],d={key:1,style:{margin:"0 auto",width:"100%","z-index":"1",position:"relative",height:"100%"}},p={style:{display:"flex",height:"100%",width:"100%","flex-direction":"column"}},m={class:"pdf_header"},h=["src"],g={border:"0",style:{margin:"0",width:"100%",padding:"0","font-size":"12px",color:"#000","font-family":"Arial, Helvetica, sans-serif","font-weight":"normal","border-collapse":"collapse",border:"none","vertical-align":"top"}},v={style:{"vertical-align":"top",height:"800px"}},f={colspan:"2",style:{"padding-top":"5px","vertical-align":"text-top"}},y=["innerHTML"],j=(0,s._)("br",null,null,-1),w={key:0},_=["src"],b=(0,s._)("br",null,null,-1),k={style:{"padding-bottom":"10px",display:"inline-block"}},S=(0,s._)("br",null,null,-1),U={class:"pdf_footer"},T=["src"],D={__name:"dowloadPDF",setup(e){const t=(0,r.T)(),a=(0,s.Fl)((()=>t.pdfData)),D=(0,s.Fl)((()=>a.value.first_name?a.value.first_name+" "+a.value.last_name:a.value.doctorname.first_name+" "+a.value.doctorname.last_name)),L=(0,l.iH)(a.value?.patient_name??""),P=(0,l.iH)(a.value?.header_file??a.value?.hospitalname?.header_file),Z=(0,l.iH)(a.value?.footer_file??a.value?.hospitalname?.footer_file),H=(0,l.iH)(a.value?.water_mark??a.value?.hospitalname?.water_mark),A=(0,l.iH)(a.value?.signature??a.value?.doctorname?.signature),x=(0,l.iH)(a.value?.speciality??a.value?.doctorname?.speciality),E=(0,s.Fl)((()=>{const e=a.value.transcription,t=[];let s="";const l=1020,i=20,r=Math.floor(l/i),n=e.split("\n");let o=0;return n.forEach((e=>{o+1>r&&(t.push(s),s="",o=0),s+=e,o++})),s&&t.push(s),t}));return setTimeout((()=>{if(2!==a.value.hospital_id){var e=document.title;document.title=`${L.value}_${n.ZP.formatDate(a.value?.date_of_service,"DD-MM-YYYY")}`,window.print(),document.title=e}}),2e3),(e,t)=>((0,s.wg)(),(0,s.iD)("div",o,[2===(0,l.SU)(a).hospital_id?((0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("span",{innerHTML:(0,l.SU)(a).transcription},null,8,u)])):((0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("div",p,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,l.SU)(E),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{style:(0,i.j5)([{width:"100%",padding:"38px 60px 0 60px"},{backgroundImage:`url(${H.value})`}]),key:t,class:"page water_mark split_content_loop"},[(0,s._)("div",m,[P.value?((0,s.wg)(),(0,s.iD)("img",{key:0,style:{width:"100%"},src:P.value,alt:"header image"},null,8,h)):(0,s.kq)("",!0)]),(0,s._)("table",g,[(0,s._)("tbody",v,[(0,s._)("tr",null,[(0,s._)("td",f,[(0,s._)("div",{innerHTML:e},null,8,y),j,t===(0,l.SU)(E).length-1?((0,s.wg)(),(0,s.iD)("div",w,[A.value?((0,s.wg)(),(0,s.iD)("img",{key:0,src:A.value,style:{width:"100px"},alt:"signature"},null,8,_)):(0,s.kq)("",!0),b,(0,s._)("span",k,[(0,s.Uk)((0,i.zw)((0,l.SU)(D)),1),S,(0,s.Uk)(" "+(0,i.zw)(x.value),1)])])):(0,s.kq)("",!0)])])])]),(0,s._)("div",U,[Z.value?((0,s.wg)(),(0,s.iD)("img",{key:0,src:Z.value,alt:"footer image",style:{width:"100%","margin-bottom":"40px"}},null,8,T)):(0,s.kq)("",!0)])],4)))),128))])]))]))}},L=D,P=L},7390:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Q});a(9665);var s=a(9835),l=a(499),i=a(6970),r=a(4016),n=a(8339),o=a(4577),c=(a(9587),a(1410)),u=a(6928),d=a(4170),p=a(6950),m=a(9120),h=a(3878),g=a.n(h),v=a(3703),f=a(5531),y=a(3508);const j={class:""},w={class:"table_add_btn"},_=["href"],b={class:"alert-popup-content create_project_popup q_custum_popup new_common_popup_btn"},k={class:"img-area"},S={class:"close-top-posi"},U={class:"las la-times"},T={class:"text-center"},D=(0,s._)("h5",{class:"q-my-sm"},"Are You Sure!",-1),L={class:"del-item"},P={style:{display:"none"}},Z={__name:"table-component",props:{columns:Array,apiUrl:String,title:String,rowKey:String,createUrl:String,selectionType:String,selectedItem:Object,extraFilter:Object,type:Object,reportData:Object,orgId:Object,reportType:Object,isPdfDownload:Boolean},emits:["delete","edit","selected","view","lock"],setup(e,{expose:t,emit:h}){const Z=e,H=(0,s.RC)((()=>Promise.all([a.e(64),a.e(338)]).then(a.bind(a,4051)))),A=(0,u.t)(),x=(0,f.b)(),E=(0,s.Fl)((()=>A.getUser)),I=new Date,q=(0,n.tv)(),$=new Date(I.getFullYear(),I.getMonth(),1),z=new Date(I.getFullYear(),I.getMonth()+1,0),C=(0,l.iH)(!1),W=(0,n.yj)(),O=(0,o.H)(),Y=(0,s.Fl)((()=>O.getUserType)),V=(0,l.iH)({label:"All",value:null}),M=(0,l.iH)(),R=(0,l.iH)([]),Q=(0,l.iH)(null),F=(0,l.iH)(!1),N=(0,l.iH)(!1),B=(0,l.iH)(1),K=(0,l.iH)(),G=(0,l.iH)(),J=(0,l.iH)({descending:!0,page:1,rowsPerPage:25,rowsNumber:0}),X=(0,c.T)(),ee=(0,l.iH)([{id:3}]);function te(e){ne()}async function ae(e){x.data=e,q.push({name:"script-view"})}async function se(e){p.Z.show({spinner:m.Z}),X.pdfData=e,C.value=!0,2===e.hospital_id?setTimeout((()=>{p.Z.hide(),(0,y.$)("downloadPDF",`${e.patient_name}`)}),2e3):(q.push({name:"transcription-pdf"}),p.Z.hide())}async function le(e){const{page:t,rowsPerPage:a,sortBy:s,descending:l}=e.pagination,i=e.filter;F.value=!0;const n=0===a?J.value.rowsNumber:a,o={org_id:Z.orgId,page:t,limit:n,q:i};if("user-dashboard"!==W.name&&"hospital-dashboard"!==W.name&&(o.order="date_of_service",o.direction=l?"desc":"asc"),"user-dashboard"==W.name?o.type=V.value.value:"/assign-doctor"==W.path?o.type=2:"/assign-receptionist"==W.path?o.type=4:"/assign-writer"==W.path&&(o.type=3),Z.extraFilter)for(let[r,c]of Object.entries(Z.extraFilter))o[r]=Z.extraFilter[r];B.value=1!=t?t*a+1-a:1,"report"==Z.type?await r.Z.postWithParam(Z.apiUrl,Z.reportData??{from_date:g()($).format("YYYY-MM-DD"),to_date:g()(z).format("YYYY-MM-DD")},o).then((e=>{R.value.splice(0,R.value.length,...e.data.data??e.data.data.data??e.data.res.data),K.value=e.data.meta.total??e.data.data.meta.total,R.value.forEach((e=>{e.index=B.value,B.value++})),G.value=e.meta.total??e.data.meta.total??e.data.data.meta.total,J.value.page=t,J.value.rowsPerPage=a,J.value.sortBy=s,J.value.descending=l,J.value.rowsNumber=e.meta.total??e.data.meta.total??e.data.data.meta.total,F.value=!1})).catch((e=>{F.value=!1})):(o.from_date=d.ZP.formatDate(Z.reportData?.from_date,"YYYY-MM-DD"),o.to_date=d.ZP.formatDate(Z.reportData?.to_date,"YYYY-MM-DD"),await r.Z.getWithParam(Z.apiUrl,o).then((e=>{R.value.splice(0,R.value.length,...e.data.data??e.data),R.value.forEach((e=>{e.index=B.value,B.value++})),J.value.page=t,J.value.rowsPerPage=a,J.value.sortBy=s,J.value.descending=l,J.value.rowsNumber=e.meta.total??e.data.meta.total??e.data.data.meta.total,F.value=!1})).catch((e=>{F.value=!1})))}function ie(){return 0===ee.value.length?"":`${ee.value.length} record${ee.value.length>1?"s":""} selected of ${R.value.length}`}function re({rows:e,added:t}){h("selected",e,t)}function ne(){M.value.requestServerInteraction()}function oe(e,t){X.data=e,v.Z.set("data",X.data),"assign-hospital"==t?q.push({name:"component",params:{slug:"assign-hospital"}}):"assign-doctor"==t?q.push({name:"component",params:{slug:"assign-doctor"}}):"assign-receptionist"==t?q.push({name:"component",params:{slug:"assign-receptionist"}}):"assign-writer"==t&&q.push({name:"component",params:{slug:"assign-writer"}})}(0,s.bv)((()=>{ne(),ee.value=Z.selectedItem??[]})),t({refresh:ne});const ce=(0,l.iH)("");function ue(e){ce.value=e,N.value=!0}return(t,a)=>{const r=(0,s.up)("q-select"),n=(0,s.up)("q-btn"),o=(0,s.up)("q-icon"),c=(0,s.up)("q-input"),u=(0,s.up)("q-img"),d=(0,s.up)("q-td"),p=(0,s.up)("q-table"),m=(0,s.up)("q-card-actions"),h=(0,s.up)("q-card-section"),g=(0,s.up)("q-card"),v=(0,s.up)("q-dialog"),f=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",j,[(0,s.Wm)(p,{ref_key:"tableRef",ref:M,title:e.title,rows:R.value,columns:e.columns,"row-key":e.rowKey,pagination:J.value,"onUpdate:pagination":a[3]||(a[3]=e=>J.value=e),loading:F.value,filter:Q.value,"binary-state-sort":"",onRequest:le,selection:e.selectionType,selected:ee.value,"onUpdate:selected":a[4]||(a[4]=e=>ee.value=e),"selected-rows-label":ie,onSelection:re},{"top-right":(0,s.w5)((()=>[(0,s._)("div",w,[(0,s._)("div",null,["user-dashboard"==(0,l.SU)(W).name?((0,s.wg)(),(0,s.j4)(r,{key:0,modelValue:V.value,"onUpdate:modelValue":[a[0]||(a[0]=e=>V.value=e),a[1]||(a[1]=e=>te(V.value))],options:(0,l.SU)(Y)},null,8,["modelValue","options"])):(0,s.kq)("",!0)]),(0,s._)("div",null,[e.createUrl&&1==(0,l.SU)(E).user_type_id?((0,s.wg)(),(0,s.j4)(n,{key:0,dense:"",color:"primary",icon:"las la-plus",label:t.$q.lang.button.create,to:e.createUrl,"no-caps":""},null,8,["label","to"])):(0,s.kq)("",!0)]),(0,s.WI)(t.$slots,"filter")])])),"top-left":(0,s.w5)((()=>[(0,s.Wm)(c,{borderless:"",dense:"",debounce:"300",modelValue:Q.value,"onUpdate:modelValue":a[2]||(a[2]=e=>Q.value=e),placeholder:"Search"},{append:(0,s.w5)((()=>[(0,s.Wm)(o,{name:"search"})])),_:1},8,["modelValue"])])),"body-cell-image":(0,s.w5)((e=>[(0,s.Wm)(d,{key:"image",props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{style:{height:"80px","max-width":"80px"},src:e.row.image??e.row.category_icon??e.row.icon??e.row.quote_img??e.row.platform.icon},null,8,["src"])])),_:2},1032,["props"])])),"body-cell-emoji":(0,s.w5)((e=>[(0,s.Wm)(d,{key:"emoji",props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{style:{height:"80px","max-width":"80px"},src:e.row.emoji},null,8,["src"])])),_:2},1032,["props"])])),"body-cell-url":(0,s.w5)((e=>[(0,s.Wm)(d,{key:"url",props:e},{default:(0,s.w5)((()=>[(0,s._)("a",{class:"text-black",href:e.row.url,target:"_blank"},(0,i.zw)(e.row.url),9,_)])),_:2},1032,["props"])])),"body-cell-actions":(0,s.w5)((e=>[(0,s.Wm)(d,{key:"actions",props:e},{default:(0,s.w5)((()=>["user-dashboard"==(0,l.SU)(W).name&&2==V.value.value||4==V.value.value?((0,s.wg)(),(0,s.j4)(n,{key:0,color:"primary",label:"Assign Hospital",size:"sm","no-caps":"",onClick:t=>oe(e.row,"assign-hospital")},null,8,["onClick"])):(0,s.kq)("",!0),"hospital-dashboard"==(0,l.SU)(W).name||3==V.value.value?((0,s.wg)(),(0,s.j4)(n,{key:1,color:"primary",label:"Assign Doctor",size:"sm","no-caps":"",onClick:t=>oe(e.row,"assign-doctor")},null,8,["onClick"])):(0,s.kq)("",!0),"hospital-dashboard"==(0,l.SU)(W).name?((0,s.wg)(),(0,s.j4)(n,{key:2,color:"primary",label:"Assign Receptionist",size:"sm","no-caps":"",onClick:t=>oe(e.row,"assign-receptionist")},null,8,["onClick"])):(0,s.kq)("",!0),"user-dashboard"==(0,l.SU)(W).name&&2==V.value.value?((0,s.wg)(),(0,s.j4)(n,{key:3,color:"primary",label:"Assign Writer",size:"sm","no-caps":"",onClick:t=>oe(e.row,"assign-writer")},null,8,["onClick"])):(0,s.kq)("",!0),1==(0,l.SU)(E).user_type_id&&"transcription-dashboard"!==(0,l.SU)(W).name?((0,s.wg)(),(0,s.j4)(n,{key:4,color:"secondary",icon:"las la-pen",onClick:a=>t.$emit("edit",e.row),size:"sm","no-caps":""},null,8,["onClick"])):(0,s.kq)("",!0),1==(0,l.SU)(E).user_type_id&&"transcription-dashboard"!==(0,l.SU)(W).name?((0,s.wg)(),(0,s.j4)(n,{key:5,color:"red",icon:"las la-trash-alt",onClick:t=>ue(e.row),size:"sm","no-caps":""},null,8,["onClick"])):(0,s.kq)("",!0),2==(0,l.SU)(E).user_type_id?((0,s.wg)(),(0,s.j4)(n,{key:6,color:"primary",label:"Transcription",to:{name:"confirm-transcript",params:{slug:e.row?.hospital_id}},size:"sm","no-caps":""},null,8,["to"])):(0,s.kq)("",!0),4==(0,l.SU)(E).user_type_id&&"transcription-list"!==(0,l.SU)(W).name?((0,s.wg)(),(0,s.j4)(n,{key:7,color:"primary",label:"Transcription",size:"sm","no-caps":"",to:{name:"transcription-list",params:{slug:e.row?.hospital_id}}},null,8,["to"])):(0,s.kq)("",!0),1==(0,l.SU)(E).user_type_id&&"transcription-dashboard"==(0,l.SU)(W).name?((0,s.wg)(),(0,s.j4)(n,{key:8,color:"primary",label:"View",onClick:t=>ae(e.row),size:"sm","no-caps":""},null,8,["onClick"])):(0,s.kq)("",!0),4==(0,l.SU)(E).user_type_id&&"transcription-list"==(0,l.SU)(W).name||1==(0,l.SU)(E).user_type_id&&"transcription-dashboard"==(0,l.SU)(W).name?((0,s.wg)(),(0,s.j4)(n,{key:9,color:"secondary",icon:"las la-download",onClick:t=>se(e.row),size:"sm","no-caps":"",title:"Report Download"},null,8,["onClick"])):(0,s.kq)("",!0)])),_:2},1032,["props"])])),"body-cell-download":(0,s.w5)((e=>[(0,s.Wm)(d,{key:"actions",props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(n,{color:"secondary",icon:"las la-download",onClick:t=>se(e.row),size:"sm","no-caps":"",title:"Report Download"},null,8,["onClick"])])),_:2},1032,["props"])])),_:3},8,["title","rows","columns","row-key","pagination","loading","filter","selection","selected"])]),(0,s.Wm)(v,{modelValue:N.value,"onUpdate:modelValue":a[6]||(a[6]=e=>N.value=e),class:"alert-popup text-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{class:"comman-close-popup"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{class:""},{default:(0,s.w5)((()=>[(0,s._)("div",b,[(0,s._)("div",k,[(0,s._)("div",S,[(0,s.wy)((0,s._)("i",U,null,512),[[f]])])]),(0,s._)("div",T,[D,(0,s._)("p",L,[(0,s.Uk)(" Want To Delete This "),(0,s._)("b",null,(0,i.zw)(ce.value.name)+"?",1)])]),(0,s.Wm)(m,{align:"center",class:"bg-white text-teal"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(n,{outline:"",color:"primary",label:"Cancel"},null,512),[[f]]),(0,s.wy)((0,s.Wm)(n,{color:"primary",label:"Yes Delete It!",onClick:a[5]||(a[5]=e=>t.$emit("delete",ce.value))},null,512),[[f]])])),_:1})])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s._)("div",P,[C.value?((0,s.wg)(),(0,s.j4)((0,l.SU)(H),{key:0,id:"downloadPDF"})):(0,s.kq)("",!0)])],64)}}};var H=a(1463),A=a(2259),x=a(8879),E=a(6611),I=a(2857),q=a(7220),$=a(335),z=a(3706),C=a(4458),W=a(3190),O=a(1821),Y=a(2146),V=a(9984),M=a.n(V);const R=Z,Q=R;M()(Z,"components",{QTable:H.Z,QSelect:A.Z,QBtn:x.Z,QInput:E.Z,QIcon:I.Z,QTd:q.Z,QImg:$.Z,QDialog:z.Z,QCard:C.Z,QCardSection:W.Z,QCardActions:O.Z}),M()(Z,"directives",{ClosePopup:Y.Z})},1454:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var s=a(9835),l=a(499),i=(a(8853),a(8339)),r=a(4170);const n={class:"q-pa-md main-wrapper"},o={class:"custom-tabel-box"},c={__name:"listScript",setup(e){const t=(0,l.iH)(),c=(0,s.RC)((()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,7390)))),u=(0,i.yj)(),d=(0,l.iH)(!1),p=(0,l.iH)(null),m=[{name:"id",key:"id",label:"NO.",field:"index",align:"left"},{name:"Patient Name",key:"patient_name",required:!0,label:"Name",align:"left",field:e=>e.patient_name,format:e=>`${e}`},{name:"type",key:"type",align:"center",label:"Type",field:e=>e.TSType_name,format:e=>`${e}`},{name:"audio name",key:"audio_name",required:!0,label:"Audio Name",align:"left",field:e=>e.audio_name,format:e=>`${e}`},{name:"duration",key:"duration",required:!0,label:"Duration",align:"left",field:e=>e.audio_duration,format:e=>`${e}`},{name:"date_of_service",key:"date",required:!0,label:"Date of Service",align:"left",field:e=>r.ZP.formatDate(e.date_of_service,"DD-MM-YYYY"),format:e=>`${e}`},{name:"actions",key:"actions",label:"Actions",field:"actions"}];function h(){v()}const g=(0,l.iH)();function v(){g.value={from_date:p.value?.from??p.value,to_date:p.value?.to??p.value},t.value.refresh()}function f(){p.value=null,g.value={},t.value.refresh()}return(e,a)=>{const i=(0,s.up)("q-btn"),r=(0,s.up)("q-date"),v=(0,s.up)("q-dialog"),y=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",null,[(0,s._)("div",n,[(0,s._)("div",o,[(0,s.Wm)((0,l.SU)(c),{ref_key:"userTableComponent",ref:t,apiUrl:"receptionist/"+(0,l.SU)(u).params.slug,columns:m,rowKey:"id",title:"List",onDelete:e.deleteItem,onEdit:e.editItem,reportData:g.value,onView:e.showItem,onLock:e.lockUser,"extra-filter":{accountStatus:e.status,group:e.userGroup}},{filter:(0,s.w5)((()=>[(0,s.Wm)(i,{color:"primary",onClick:a[0]||(a[0]=e=>d.value=!0),label:p.value?.from?p.value.from+" to "+p.value.to:p.value??"Select Date"},null,8,["label"]),p.value?((0,s.wg)(),(0,s.j4)(i,{key:0,onClick:f,icon:"la la-times"})):(0,s.kq)("",!0)])),_:1},8,["apiUrl","onDelete","onEdit","reportData","onView","onLock","extra-filter"])])])]),(0,s.Wm)(v,{modelValue:d.value,"onUpdate:modelValue":a[2]||(a[2]=e=>d.value=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{modelValue:p.value,"onUpdate:modelValue":a[1]||(a[1]=e=>p.value=e),range:""},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(i,{label:"Submit",onClick:h,type:"submit",color:"primary"},null,512),[[y]])])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])],64)}}};var u=a(8879),d=a(3706),p=a(6711),m=a(2146),h=a(9984),g=a.n(h);const v=c,f=v;g()(c,"components",{QBtn:u.Z,QDialog:d.Z,QDate:p.Z}),g()(c,"directives",{ClosePopup:m.Z})},6700:(e,t,a)=>{var s={"./af":202,"./af.js":202,"./ar":6314,"./ar-dz":5666,"./ar-dz.js":5666,"./ar-kw":6591,"./ar-kw.js":6591,"./ar-ly":7900,"./ar-ly.js":7900,"./ar-ma":5667,"./ar-ma.js":5667,"./ar-sa":4092,"./ar-sa.js":4092,"./ar-tn":1379,"./ar-tn.js":1379,"./ar.js":6314,"./az":1699,"./az.js":1699,"./be":8988,"./be.js":8988,"./bg":7437,"./bg.js":7437,"./bm":7947,"./bm.js":7947,"./bn":2851,"./bn-bd":4905,"./bn-bd.js":4905,"./bn.js":2851,"./bo":7346,"./bo.js":7346,"./br":1711,"./br.js":1711,"./bs":4974,"./bs.js":4974,"./ca":112,"./ca.js":112,"./cs":6406,"./cs.js":6406,"./cv":1853,"./cv.js":1853,"./cy":9766,"./cy.js":9766,"./da":6836,"./da.js":6836,"./de":9320,"./de-at":4904,"./de-at.js":4904,"./de-ch":6710,"./de-ch.js":6710,"./de.js":9320,"./dv":3274,"./dv.js":3274,"./el":286,"./el.js":286,"./en-au":143,"./en-au.js":143,"./en-ca":237,"./en-ca.js":237,"./en-gb":2428,"./en-gb.js":2428,"./en-ie":3349,"./en-ie.js":3349,"./en-il":3764,"./en-il.js":3764,"./en-in":7809,"./en-in.js":7809,"./en-nz":9851,"./en-nz.js":9851,"./en-sg":5594,"./en-sg.js":5594,"./eo":4483,"./eo.js":4483,"./es":2184,"./es-do":5777,"./es-do.js":5777,"./es-mx":9356,"./es-mx.js":9356,"./es-us":8496,"./es-us.js":8496,"./es.js":2184,"./et":7578,"./et.js":7578,"./eu":2092,"./eu.js":2092,"./fa":5927,"./fa.js":5927,"./fi":171,"./fi.js":171,"./fil":2416,"./fil.js":2416,"./fo":9937,"./fo.js":9937,"./fr":5172,"./fr-ca":8249,"./fr-ca.js":8249,"./fr-ch":7541,"./fr-ch.js":7541,"./fr.js":5172,"./fy":7907,"./fy.js":7907,"./ga":6361,"./ga.js":6361,"./gd":2282,"./gd.js":2282,"./gl":2630,"./gl.js":2630,"./gom-deva":680,"./gom-deva.js":680,"./gom-latn":6220,"./gom-latn.js":6220,"./gu":6272,"./gu.js":6272,"./he":5540,"./he.js":5540,"./hi":6067,"./hi.js":6067,"./hr":9669,"./hr.js":9669,"./hu":3396,"./hu.js":3396,"./hy-am":6678,"./hy-am.js":6678,"./id":4812,"./id.js":4812,"./is":4193,"./is.js":4193,"./it":7863,"./it-ch":959,"./it-ch.js":959,"./it.js":7863,"./ja":1809,"./ja.js":1809,"./jv":8657,"./jv.js":8657,"./ka":3290,"./ka.js":3290,"./kk":8418,"./kk.js":8418,"./km":7687,"./km.js":7687,"./kn":1375,"./kn.js":1375,"./ko":2641,"./ko.js":2641,"./ku":3518,"./ku.js":3518,"./ky":5459,"./ky.js":5459,"./lb":1978,"./lb.js":1978,"./lo":6915,"./lo.js":6915,"./lt":8948,"./lt.js":8948,"./lv":2548,"./lv.js":2548,"./me":8608,"./me.js":8608,"./mi":333,"./mi.js":333,"./mk":1876,"./mk.js":1876,"./ml":999,"./ml.js":999,"./mn":4098,"./mn.js":4098,"./mr":6111,"./mr.js":6111,"./ms":3717,"./ms-my":265,"./ms-my.js":265,"./ms.js":3717,"./mt":8980,"./mt.js":8980,"./my":6895,"./my.js":6895,"./nb":5348,"./nb.js":5348,"./ne":1493,"./ne.js":1493,"./nl":4419,"./nl-be":5576,"./nl-be.js":5576,"./nl.js":4419,"./nn":6907,"./nn.js":6907,"./oc-lnc":2321,"./oc-lnc.js":2321,"./pa-in":9239,"./pa-in.js":9239,"./pl":7627,"./pl.js":7627,"./pt":5703,"./pt-br":1623,"./pt-br.js":1623,"./pt.js":5703,"./ro":2747,"./ro.js":2747,"./ru":4420,"./ru.js":4420,"./sd":2148,"./sd.js":2148,"./se":2461,"./se.js":2461,"./si":2783,"./si.js":2783,"./sk":3306,"./sk.js":3306,"./sl":341,"./sl.js":341,"./sq":2768,"./sq.js":2768,"./sr":2451,"./sr-cyrl":3371,"./sr-cyrl.js":3371,"./sr.js":2451,"./ss":7977,"./ss.js":7977,"./sv":3820,"./sv.js":3820,"./sw":3615,"./sw.js":3615,"./ta":2869,"./ta.js":2869,"./te":2044,"./te.js":2044,"./tet":5861,"./tet.js":5861,"./tg":6999,"./tg.js":6999,"./th":1772,"./th.js":1772,"./tk":7443,"./tk.js":7443,"./tl-ph":9786,"./tl-ph.js":9786,"./tlh":2812,"./tlh.js":2812,"./tr":6952,"./tr.js":6952,"./tzl":9573,"./tzl.js":9573,"./tzm":5990,"./tzm-latn":6961,"./tzm-latn.js":6961,"./tzm.js":5990,"./ug-cn":2610,"./ug-cn.js":2610,"./uk":9498,"./uk.js":9498,"./ur":3970,"./ur.js":3970,"./uz":9006,"./uz-latn":26,"./uz-latn.js":26,"./uz.js":9006,"./vi":9962,"./vi.js":9962,"./x-pseudo":8407,"./x-pseudo.js":8407,"./yo":1962,"./yo.js":1962,"./zh-cn":8909,"./zh-cn.js":8909,"./zh-hk":4014,"./zh-hk.js":4014,"./zh-mo":996,"./zh-mo.js":996,"./zh-tw":6327,"./zh-tw.js":6327};function l(e){var t=i(e);return a(t)}function i(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}l.keys=function(){return Object.keys(s)},l.resolve=i,e.exports=l,l.id=6700},4152:(e,t,a)=>{e.exports=a.p+"img/logo.d7c71524.png"}}]);