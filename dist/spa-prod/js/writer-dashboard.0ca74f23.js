"use strict";(globalThis["webpackChunkTranscription"]=globalThis["webpackChunkTranscription"]||[]).push([[93],{1279:(e,l,a)=>{a.r(l),a.d(l,{default:()=>E});a(9665);var s=a(9835),t=a(6970),i=a(499),n=a(6928),u=a(6950),o=a(9120),r=(a(4170),a(3703),a(5531)),d=a(8339);const c={class:"home_user_header"},_={class:"comman-title"},m={class:"name"},p={class:"q-pa-md main-wrapper"},w={class:"row col_spacing_row"},v={class:"white_card_box"},h={class:"header"},g={class:"title_info"},f={class:"doctor_name"},b={class:"hospital_name"},y={class:"number_counter_row"},Z={class:"number_counter_item bg1"},k=(0,s._)("p",null,"New",-1),q={class:"number_counter_item bg2"},W=(0,s._)("p",null,"Pending",-1),z=["onClick"],H=(0,s._)("p",null,"Published",-1),Q={class:"row justify-center q-my-md"},C={__name:"writer-dashboard",setup(e){const l=(0,n.t)(),a=(0,d.tv)(),C=(0,r.b)(),S=(0,s.Fl)((()=>l.getUser)),U=(0,i.iH)(null),L=(0,i.iH)(1),D=(0,i.iH)(6),V=(0,i.iH)(!0),T=(0,i.iH)(!1),P=(0,i.iH)(null),x=(0,s.Fl)((()=>C.getList));function B(e,l){Y().then((e=>{e.success&&e.data.data.length>0?(L.value=L.value+1,l()):(V.value=!1,l(!0))})).catch((e=>{l(!0)})).finally((()=>{u.Z.hide()}))}u.Z.show({spinner:o.Z,message:"Loading..."});const F=(e,l)=>{a.push({name:"audio-list",params:{slug:l.user_id+"/"+e}}),l.hospital_id.split(",").forEach(((e,a)=>{C.wrtHospitals.push({label:l.hospital_name.split(",")[a],value:e})}))};function Y(){P.value,P.value,D.value,L.value;return C.fetchList()}function j(){u.Z.show({spinner:o.Z,message:"Loading..."}),L.value=1,V.value=!0,C.list=[],B()}return(0,d.iS)(((e,l,a)=>{C.resetList(),a()})),(e,l)=>{const a=(0,s.up)("q-badge"),n=(0,s.up)("router-link"),u=(0,s.up)("q-spinner-dots"),o=(0,s.up)("q-infinite-scroll"),r=(0,s.up)("q-card-section"),d=(0,s.up)("q-card"),C=(0,s.up)("q-btn"),L=(0,s.up)("q-date"),D=(0,s.up)("q-dialog"),V=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",null,[(0,s._)("div",c,[(0,s._)("h3",_,[(0,s.Uk)(" Welcome, "),(0,s._)("span",m,(0,t.zw)((0,i.SU)(S).first_name)+" "+(0,t.zw)((0,i.SU)(S).last_name),1)])]),(0,s._)("div",p,[(0,s.Wm)(d,{flat:"",bordered:"",class:"my-card bg-grey-1"},{default:(0,s.w5)((()=>[(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Wm)(o,{onLoad:B,offset:250,"scroll-target":"body",ref_key:"scrollList",ref:U},{loading:(0,s.w5)((()=>[(0,s._)("div",Q,[(0,s.Wm)(u,{color:"primary",size:"40px"})])])),default:(0,s.w5)((()=>[(0,s._)("div",w,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,i.SU)(x),(e=>((0,s.wg)(),(0,s.iD)("div",{class:"col-md-4 q-mb-lg",key:e},[(0,s._)("div",v,[(0,s._)("div",h,[(0,s._)("div",g,[(0,s._)("h6",f,(0,t.zw)(e.user_name),1),(0,s._)("h5",b,(0,t.zw)(e.hospital_name),1)]),(0,s.Wm)(a,{class:"date_counter",rounded:"",color:"primary"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Total: "+(0,t.zw)(e.total??0),1)])),_:2},1024)]),(0,s._)("div",y,[(0,s._)("div",Z,[(0,s.Wm)(n,{to:{name:"audio-list",params:{slug:e.user_id+"/1"}}},{default:(0,s.w5)((()=>[k,(0,s._)("h6",null,(0,t.zw)(e.new_status??0),1)])),_:2},1032,["to"])]),(0,s._)("div",q,[(0,s.Wm)(n,{to:{name:"audio-list",params:{slug:e.user_id+"/2"}}},{default:(0,s.w5)((()=>[W,(0,s._)("h6",null,(0,t.zw)(e.verify_status??0),1)])),_:2},1032,["to"])]),(0,s._)("div",{class:"number_counter_item bg3",onClick:l=>F(3,e)},[H,(0,s._)("h6",null,(0,t.zw)(e.confirm_status??0),1)],8,z)])])])))),128))])])),_:1},512)])),_:1})])),_:1})])]),(0,s.Wm)(D,{modelValue:T.value,"onUpdate:modelValue":l[1]||(l[1]=e=>T.value=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(L,{modelValue:P.value,"onUpdate:modelValue":l[0]||(l[0]=e=>P.value=e),range:""},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(C,{label:"Submit",onClick:j,type:"submit",color:"primary"},null,512),[[V]])])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])],64)}}};var S=a(8879),U=a(4458),L=a(3190),D=a(6870),V=a(990),T=a(7501),P=a(3706),x=a(6711),B=a(2146),F=a(9984),Y=a.n(F);const j=C,E=j;Y()(C,"components",{QBtn:S.Z,QCard:U.Z,QCardSection:L.Z,QInfiniteScroll:D.Z,QBadge:V.Z,QSpinnerDots:T.Z,QDialog:P.Z,QDate:x.Z}),Y()(C,"directives",{ClosePopup:B.Z})}}]);