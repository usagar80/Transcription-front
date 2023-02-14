"use strict";(globalThis["webpackChunkTranscription"]=globalThis["webpackChunkTranscription"]||[]).push([[343],{8147:(l,a,e)=>{e.r(a),e.d(a,{default:()=>O});e(9665);var i=e(9835),n=e(499),o=e(6970),s=(e(826),e(4016)),t=e(8853),u=e(8339),d=e(5531),c=e(6950),r=e(9120),m=e(4170),_=e(3703),p=(e(3878),e(3129)),v=e.n(p);const g={class:"q-pa-md main-wrapper"},f={class:"datefilter_box"},h=(0,i._)("div",{class:"audio_list_head"},[(0,i._)("div",{class:"col1"},[(0,i._)("div",{class:"td_col1"},"Audio Name"),(0,i._)("div",{class:"td_col2"},"Patient Name")]),(0,i._)("div",{class:"col2"},"Action")],-1),w={class:"audio_list_body"},y={class:"audio_list_item"},b={class:"audio_list_col1"},k={class:"audioplayer_col"},Z=(0,i._)("span",{class:"play_icon"},[(0,i._)("i",{class:"las la-play"})],-1),q={class:"audio_info"},D={class:"audio_heading"},C={class:"audio_meta"},P={class:"audio_meta_list"},j={class:"audo_patient_name"},L={class:"audio_list_action"},W={class:"text-center"},H=(0,i._)("i",{class:"las la-exclamation-triangle"},null,-1),U=(0,i._)("h5",null,"Data Not Found",-1),S={class:"row justify-center q-my-md"},Q={style:{display:"none"}},A={__name:"audioList",setup(l){const a=(0,i.RC)((()=>e.e(979).then(e.bind(e,7979)))),p=(0,u.tv)(),A=(0,u.yj)(),V=(0,n.iH)(!1),F=(0,n.iH)([]),Y=(0,n.iH)(!1),z=(0,n.iH)(null),T=(0,d.b)();console.log(A.params.slug),c.Z.show({spinner:r.Z,message:"Loading..."});const x=(0,i.Fl)((()=>T.getAudioList)),N=(0,n.iH)(null),E=(0,n.iH)(1),B=(0,n.iH)(6),I=(0,n.iH)(!0);function M(){const l={from_date:z.value?.from,to_date:z.value?.to,limit:B.value,page:E.value,user_id:A.params.slug};return T.fetchAudioList(l)}function O(l,a){M().then((l=>{l.success&&l.data.data.length>0?(E.value=E.value+1,a()):(I.value=!1,a(!0))})).catch((l=>{a(!0)})).finally((()=>{c.Z.hide()}))}function R(l){T.draft=l.draft,T.data=l,_.Z.set("data",l),p.push({name:"write-script",params:{slug:l.id}})}function $(l){c.Z.show({spinner:r.Z,message:"Loading..."}),s.Z.post(s.Z.resolveApiUrl(t.jU.SAVE,{id:l.id}),{status_id:"4"}).then((a=>{console.log(a),x.value.forEach(((a,e,i)=>{a.id==l.id&&(a.name="Published")}))})).catch((l=>{console.log(l)})).finally((()=>{c.Z.hide()}))}function K(l){c.Z.show({spinner:r.Z,message:"Loading..."}),s.Z.getWithParam(t.PZ.DOWNLOAD,{id:l}).then((l=>{l.success&&(console.log(l),V.value=!0,G(l))})).catch((l=>console.log(l))).finally((()=>c.Z.hide()))}async function G(l){F.value=l.data,setTimeout((()=>{J(document.getElementById("downloadPDF")),c.Z.hide()}),4e3)}function J(l){v()(l,{margin:0,filename:`${F.value[0].patient_name}_${Date.now()}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:1,letterRendering:!0},jsPDF:{unit:"in",format:"a4",orientation:"portrait"}})}function X(){E.value=1,T.audioList=[],O(),console.log("Date Filter",z.value)}function ll(){z.value=null,T.audioList=[],E.value=1,N.value.reset(),N.value.resume(),N.value.trigger()}return(l,e)=>{const s=(0,i.up)("q-btn"),t=(0,i.up)("q-chip"),u=(0,i.up)("q-card"),d=(0,i.up)("q-spinner-dots"),c=(0,i.up)("q-infinite-scroll"),r=(0,i.up)("q-date"),_=(0,i.up)("q-dialog"),p=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",g,[(0,i._)("div",f,[(0,i.Wm)(s,{color:"primary",onClick:e[0]||(e[0]=l=>Y.value=!0),label:z.value?.from?z.value.from+" to "+z.value.to:z.value??"Select Date"},null,8,["label"]),z.value?((0,i.wg)(),(0,i.j4)(s,{key:0,onClick:ll,icon:"la la-times"})):(0,i.kq)("",!0)]),(0,i.Wm)(c,{onLoad:O,offset:250,"scroll-target":"body",ref_key:"scrollList",ref:N},{loading:(0,i.w5)((()=>[(0,i._)("div",S,[(0,i.Wm)(d,{color:"primary",size:"40px"})])])),default:(0,i.w5)((()=>[0!==(0,n.SU)(x).length?((0,i.wg)(),(0,i.j4)(u,{key:0,class:"q-pa-lg"},{default:(0,i.w5)((()=>[h,(0,i._)("div",w,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,n.SU)(x),(l=>((0,i.wg)(),(0,i.iD)("div",{class:"audio_list_bg caption",key:l},[(0,i._)("div",y,[(0,i._)("div",b,[(0,i._)("div",k,[Z,(0,i._)("div",q,[(0,i._)("p",D,(0,o.zw)(l.audio_name),1),(0,i._)("div",C,[(0,i._)("ul",P,[(0,i._)("li",null,[(0,i.Uk)(" Duration: "),(0,i._)("b",null,(0,o.zw)(l.audio_duration),1)]),(0,i._)("li",null,[(0,i.Uk)(" Created at: "),(0,i._)("b",null,(0,o.zw)((0,n.SU)(m.ZP).formatDate(l.created_at,"DD-MM-YYYY")),1)])])])]),(0,i._)("div",j,[(0,i._)("p",null,[(0,i._)("b",null,(0,o.zw)(l.patient_name),1)])])])]),(0,i._)("div",L,["Published"==l.name?((0,i.wg)(),(0,i.j4)(s,{key:0,round:"",color:"primary",icon:"las la-download",class:"q-ml-sm",padding:"sm",onClick:a=>K(l.id)},null,8,["onClick"])):(0,i.kq)("",!0),"Confirmed"==l.name?((0,i.wg)(),(0,i.j4)(s,{key:1,color:"green",label:"Publish",class:"q-ml-sm",onClick:a=>$(l)},null,8,["onClick"])):(0,i.kq)("",!0),(0,i.Wm)(t,{color:"Confirmed"==l.name||"Published"==l.name?"green":"Pending"==l.name?"red":"yellow",label:l.name},null,8,["color","label"]),(0,i.Wm)(s,{round:"",color:"secondary",icon:"las la-edit",class:"q-ml-sm",padding:"sm",disable:"Pending"!==l.name,onClick:a=>R(l)},null,8,["disable","onClick"])])])])))),128))])])),_:1})):I.value?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(u,{key:1,class:"q-pa-lg"},{default:(0,i.w5)((()=>[(0,i._)("div",W,[(0,i.Wm)(s,{class:"not_found_icon",outline:"",color:"primary"},{default:(0,i.w5)((()=>[H])),_:1}),U])])),_:1}))])),_:1},512)]),(0,i._)("div",Q,[V.value?((0,i.wg)(),(0,i.j4)((0,n.SU)(a),{key:0,items:F.value,id:"downloadPDF"},null,8,["items"])):(0,i.kq)("",!0)]),(0,i.Wm)(_,{modelValue:Y.value,"onUpdate:modelValue":e[2]||(e[2]=l=>Y.value=l)},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{modelValue:z.value,"onUpdate:modelValue":e[1]||(e[1]=l=>z.value=l),range:""},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(s,{label:"Submit",onClick:X,type:"submit",color:"primary"},null,512),[[p]])])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])],64)}}};var V=e(8879),F=e(6870),Y=e(4458),z=e(7691),T=e(7501),x=e(2074),N=e(6711),E=e(2146),B=e(9984),I=e.n(B);const M=A,O=M;I()(A,"components",{QBtn:V.Z,QInfiniteScroll:F.Z,QCard:Y.Z,QChip:z.Z,QSpinnerDots:T.Z,QDialog:x.Z,QDate:N.Z}),I()(A,"directives",{ClosePopup:E.Z})}}]);