"use strict";(globalThis["webpackChunkTranscription"]=globalThis["webpackChunkTranscription"]||[]).push([[433],{1360:(a,l,n)=>{n.r(l),n.d(l,{default:()=>Q});n(9665);var e=n(9835),i=n(499),t=n(6970),s=(n(4016),n(8853),n(8339)),o=n(6950),r=n(9120),u=n(4170),d=n(5676),c=n(6928),p=(n(3878),n(3129)),m=n.n(p);const _=a=>((0,e.dD)("data-v-d5281380"),a=a(),(0,e.Cn)(),a),g={class:"q-pa-md main-wrapper"},h=["onClick"],f={class:"paient_trans_head"},w={class:"left"},v={class:"right"},y={class:"hospital_name"},k={class:"date_time"},b=["innerHTML"],q={class:"text-center"},D=_((()=>(0,e._)("i",{class:"las la-exclamation-triangle"},null,-1))),T=_((()=>(0,e._)("h5",null,"Data Not Found",-1))),Z={class:"row justify-center q-my-md"},C={style:{display:"none"}},H={__name:"confirmTranscription",setup(a){const l=(0,e.RC)((()=>n.e(979).then(n.bind(n,7979)))),p=(0,i.iH)(!1),_=(0,i.iH)([]),H=(0,s.tv)(),L=(0,s.yj)(),U=(0,d.z)(),j=(0,c.t)(),z=(0,i.iH)(null),P=(0,i.iH)(1),I=(0,i.iH)(6),S=(0,i.iH)(!0),F=(0,e.Fl)((()=>U.getTranscriptionList));(0,e.Fl)((()=>j.getUser)),(0,i.iH)({hospitalId:L.params.slug.split("/")[0],statusId:L.params.slug.split("/")[1]});function Y(a,l){Q().then((a=>{a.success&&a.data.data.length>0?(P.value=P.value+1,l()):(S.value=!1,l(!0))})).catch((a=>{l(!0)})).finally((()=>{o.Z.hide()}))}function Q(){const a={hospitalId:L.params.slug.split("/")[0],statusId:L.params.slug.split("/")[1],limit:I.value,page:P.value};return U.fetchTranscriptionList(a)}function W(a){console.log(a),a.hospital_id=L.params.slug.split("/")[0],a.isNew=1==L.params.slug.split("/")[1],U.data=a,H.push({name:"confirm-script",params:{slug:a.id}})}async function x(a){o.Z.show({message:"Loading...",spinner:r.Z}),p.value=!0,M(a)}async function M(a){_.value=a,setTimeout((()=>{R(document.getElementById("downloadPDF")),o.Z.hide()}),4e3)}function R(a){m()(a,{margin:0,filename:`${_.value.patient_name}_${u.ZP.formatDate(_.value.date_of_service,"DD-MM-YYYY")}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:1,letterRendering:!0},jsPDF:{unit:"in",format:"a4",orientation:"portrait"}})}return o.Z.show({spinner:r.Z,message:"Loading..."}),(0,s.iS)(((a,l,n)=>{console.log("leave"),U.resetList(),n()})),(a,n)=>{const s=(0,e.up)("q-chip"),o=(0,e.up)("q-btn"),r=(0,e.up)("q-card"),u=(0,e.up)("q-spinner-dots"),d=(0,e.up)("q-infinite-scroll");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("div",g,[(0,e.Wm)(d,{onLoad:Y,offset:250,"scroll-target":"body",ref_key:"scrollList",ref:z},{loading:(0,e.w5)((()=>[(0,e._)("div",Z,[(0,e.Wm)(u,{color:"primary",size:"40px"})])])),default:(0,e.w5)((()=>[0!==(0,i.SU)(F).length?((0,e.wg)(),(0,e.j4)(r,{key:0,class:"q-pa-lg"},{default:(0,e.w5)((()=>[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)((0,i.SU)(F),(a=>((0,e.wg)(),(0,e.iD)("div",{class:"patient_trans_list_bg",key:a},[(0,e._)("div",{class:"patient_trans_list",onClick:l=>"Confirmed"==a.name||"Published"==a.name?null:W(a)},[(0,e._)("div",f,[(0,e._)("div",w,[(0,e._)("h2",null,[(0,e.Uk)((0,t.zw)(a.patient_name)+" ",1),(0,e.Wm)(s,{dense:"",color:"primary","text-color":"white"},{default:(0,e.w5)((()=>[(0,e.Uk)((0,t.zw)(a.gender),1)])),_:2},1024)]),(0,e._)("h6",null,(0,t.zw)(a.TSType_name),1)]),(0,e._)("div",v,[(0,e._)("div",y,(0,t.zw)(a.hospital_name),1),(0,e._)("ul",k,[(0,e._)("li",null,["Published"==a.name?((0,e.wg)(),(0,e.j4)(o,{key:0,round:"",color:"primary",icon:"las la-download",class:"q-ml-sm",padding:"sm",onClick:l=>x(a),title:"Report Download"},null,8,["onClick"])):(0,e.kq)("",!0)]),(0,e._)("li",null,[(0,e.Wm)(s,{color:"Confirmed"==a.name||"Published"==a.name?"green":"Pending"==a.name?"red":"yellow",label:a.name},null,8,["color","label"])]),(0,e._)("li",null,[(0,e.Uk)(" Duration: "),(0,e._)("b",null,(0,t.zw)(a.audio_duration),1)]),(0,e._)("li",null,[(0,e.Uk)(" Updated at: "),(0,e._)("b",null,(0,t.zw)(a.updated_at.split("T")[0]),1)])])])]),(0,e._)("p",{class:"paient_trans_para",innerHTML:a.transcription},null,8,b)],8,h)])))),128))])),_:1})):S.value?(0,e.kq)("",!0):((0,e.wg)(),(0,e.j4)(r,{key:1,class:"q-pa-lg"},{default:(0,e.w5)((()=>[(0,e._)("div",q,[(0,e.Wm)(o,{class:"not_found_icon",outline:"",color:"primary"},{default:(0,e.w5)((()=>[D])),_:1}),T])])),_:1}))])),_:1},512)]),(0,e._)("div",C,[p.value?((0,e.wg)(),(0,e.j4)((0,i.SU)(l),{key:0,items:_.value,id:"downloadPDF"},null,8,["items"])):(0,e.kq)("",!0)])],64)}}};var L=n(1639),U=n(6870),j=n(4458),z=n(7691),P=n(8879),I=n(7501),S=n(9984),F=n.n(S);const Y=(0,L.Z)(H,[["__scopeId","data-v-d5281380"]]),Q=Y;F()(H,"components",{QInfiniteScroll:U.Z,QCard:j.Z,QChip:z.Z,QBtn:P.Z,QSpinnerDots:I.Z})}}]);