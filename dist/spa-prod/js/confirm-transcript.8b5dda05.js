"use strict";(globalThis["webpackChunkTranscription"]=globalThis["webpackChunkTranscription"]||[]).push([[433],{3354:(a,l,n)=>{n.r(l),n.d(l,{default:()=>Q});n(9665);var i=n(9835),s=n(499),e=n(6970),t=(n(4016),n(8853),n(8339)),o=n(6950),r=n(9120),d=(n(4170),n(5676)),p=n(6928),c=(n(3878),n(1410)),u=n(3508);const _=a=>((0,i.dD)("data-v-01ecd08c"),a=a(),(0,i.Cn)(),a),m={class:"q-pa-md main-wrapper"},g=["onClick"],h={class:"paient_trans_head"},w={class:"left"},f={class:"right"},v={class:"hospital_name"},k={class:"date_time"},y=["innerHTML"],b={class:"text-center"},T=_((()=>(0,i._)("i",{class:"las la-exclamation-triangle"},null,-1))),q=_((()=>(0,i._)("h5",null,"Data Not Found",-1))),C={class:"row justify-center q-my-md"},Z={style:{display:"none"}},D={__name:"confirmTranscription",setup(a){const l=(0,i.RC)((()=>Promise.all([n.e(64),n.e(241)]).then(n.bind(n,4051)))),_=(0,t.tv)(),D=(0,t.yj)(),z=(0,d.z)(),H=(0,p.t)(),U=(0,c.T)(),L=(0,s.iH)(null),S=(0,s.iH)(1),P=(0,s.iH)(6),j=(0,s.iH)(!0),I=(0,i.Fl)((()=>z.getTranscriptionList));(0,i.Fl)((()=>H.getUser)),(0,s.iH)({hospitalId:D.params.slug.split("/")[0],statusId:D.params.slug.split("/")[1]});function F(a,l){Q().then((a=>{a.success&&a.data.data.length>0?(S.value=S.value+1,l()):(j.value=!1,l(!0))})).catch((a=>{l(!0)})).finally((()=>{o.Z.hide()}))}function Q(){const a={hospitalId:D.params.slug.split("/")[0],statusId:D.params.slug.split("/")[1],limit:P.value,page:S.value};return z.fetchTranscriptionList(a)}function W(a){a.hospital_id=D.params.slug.split("/")[0],a.isNew=1==D.params.slug.split("/")[1],z.data=a,_.push({name:"confirm-script",params:{slug:a.id}})}o.Z.show({spinner:r.Z,message:"Loading..."});const x=(0,s.iH)(!1);async function M(a){o.Z.show({spinner:r.Z,spinnerSize:140,spinnerColor:"primary"}),U.pdfData=a,x.value=!0,2===a.hospital_id?setTimeout((()=>{o.Z.hide(),(0,u.$)("downloadPDF",`${a.patient_name}`)}),2e3):(_.push({name:"transcription-pdf"}),o.Z.hide())}return(0,t.iS)(((a,l,n)=>{console.log("leave"),z.resetList(),n()})),(a,n)=>{const t=(0,i.up)("q-chip"),o=(0,i.up)("q-btn"),r=(0,i.up)("q-card"),d=(0,i.up)("q-spinner-dots"),p=(0,i.up)("q-infinite-scroll");return(0,i.wg)(),(0,i.iD)("div",m,[(0,i.Wm)(p,{onLoad:F,offset:250,"scroll-target":"body",ref_key:"scrollList",ref:L},{loading:(0,i.w5)((()=>[(0,i._)("div",C,[(0,i.Wm)(d,{color:"primary",size:"40px"})])])),default:(0,i.w5)((()=>[0!==(0,s.SU)(I).length?((0,i.wg)(),(0,i.j4)(r,{key:0,class:"q-pa-lg"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,s.SU)(I),(a=>((0,i.wg)(),(0,i.iD)("div",{class:"patient_trans_list_bg",key:a},[(0,i._)("div",{class:"patient_trans_list",onClick:l=>"Confirmed"==a.name||"Published"==a.name?null:W(a)},[(0,i._)("div",h,[(0,i._)("div",w,[(0,i._)("h2",null,[(0,i.Uk)((0,e.zw)(a.patient_name)+" ",1),(0,i.Wm)(t,{dense:"",color:"primary","text-color":"white"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,e.zw)(a.gender),1)])),_:2},1024)]),(0,i._)("h6",null,(0,e.zw)(a.TSType_name),1)]),(0,i._)("div",f,[(0,i._)("div",v,(0,e.zw)(a.hospital_name),1),(0,i._)("ul",k,[(0,i._)("li",null,["Published"==a.name?((0,i.wg)(),(0,i.j4)(o,{key:0,round:"",color:"primary",icon:"las la-download",class:"q-ml-sm",padding:"sm",onClick:l=>M(a),title:"Report Download"},null,8,["onClick"])):(0,i.kq)("",!0)]),(0,i._)("li",null,[(0,i.Wm)(t,{color:"Confirmed"==a.name||"Published"==a.name?"green":"Pending"==a.name?"red":"yellow",label:a.name},null,8,["color","label"])]),(0,i._)("li",null,[(0,i.Uk)(" Duration: "),(0,i._)("b",null,(0,e.zw)(a.audio_duration),1)]),(0,i._)("li",null,[(0,i.Uk)(" Updated at: "),(0,i._)("b",null,(0,e.zw)(a.updated_at.split("T")[0]),1)])])])]),(0,i._)("p",{class:"paient_trans_para",innerHTML:a.transcription},null,8,y)],8,g)])))),128))])),_:1})):j.value?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(r,{key:1,class:"q-pa-lg"},{default:(0,i.w5)((()=>[(0,i._)("div",b,[(0,i.Wm)(o,{class:"not_found_icon",outline:"",color:"primary"},{default:(0,i.w5)((()=>[T])),_:1}),q])])),_:1}))])),_:1},512),(0,i._)("div",Z,[x.value?((0,i.wg)(),(0,i.j4)((0,s.SU)(l),{key:0,id:"downloadPDF"})):(0,i.kq)("",!0)])])}}};var z=n(1639),H=n(6870),U=n(4458),L=n(7691),S=n(8879),P=n(7501),j=n(9984),I=n.n(j);const F=(0,z.Z)(D,[["__scopeId","data-v-01ecd08c"]]),Q=F;I()(D,"components",{QInfiniteScroll:H.Z,QCard:U.Z,QChip:L.Z,QBtn:S.Z,QSpinnerDots:P.Z})}}]);