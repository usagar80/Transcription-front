(globalThis["webpackChunkTranscription"]=globalThis["webpackChunkTranscription"]||[]).push([[620],{4391:(e,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>se});l(9665);var s=l(9835),r=l(1957),t=l(6970),i=l(499),o=l(205),n=l.n(o),m=l(796),d=l(5054),u=l(8853),c=l(4577),p=l(9587),v=l(6950),g=l(9120),b=l(1910),h=l(2057),_=l(8339),f=l(4016),q=l(6928);const U={class:"container"},Z={class:"profile-sec q-mb-md"},w={class:"home_user_header"},y={class:"comman-title"},S={class:"q-pa-md main-wrapper"},H={class:"profile-card"},V={class:"text-center"},k={class:"profile-head edit-pro-head mob-pro-head"},C={class:"profile-avtar"},W=["src"],x={key:1,src:n(),alt:""},F={class:"avtar-edit-icon"},T=["accept"],L={class:"row q-col-gutter-lg q-mt-sm edit-avtar-field"},Q={class:"col-md-6 col-sm-12 col-12 edit-field mob-edit-pa"},$=(0,s._)("label",{class:"lable-text q-mb-sm q-ml-sm q-mr-sm"},"Select User Type",-1),D={class:"col-md-6 col-sm-12 col-12 edit-field mob-edit-pa"},E=(0,s._)("label",{class:"lable-text q-mb-sm q-ml-sm q-mr-sm"},"First Name",-1),N={class:"col-md-6 col-sm-12 col-12 edit-field mob-edit-pa"},P=(0,s._)("label",{class:"lable-text q-mb-sm q-ml-sm q-mr-sm"},"Last Name",-1),A={class:"col-md-6 col-sm-12 col-12 edit-field mob-edit-pa"},R=(0,s._)("label",{class:"lable-text q-mb-sm q-ml-sm q-mr-sm"},"Email",-1),z={key:0,class:"col-md-6 col-sm-12 col-12 edit-field mob-edit-pa mob_digit"},j={class:"pass-feild"},I=(0,s._)("label",{class:"lable-text q-mb-sm q-ml-sm q-mr-sm",for:""},"Password ",-1),M={class:"text-right q-pt-lg mob-action-btn"},B={__name:"CreateUserPage",setup(e){(0,s.RC)((()=>Promise.all([l.e(736),l.e(64)]).then(l.bind(l,2742))));const{errors:a,serverValidationError:o}=(0,h.Z)(),n=(0,c.H)();n.fetchUserTypeList();const B=(0,_.tv)(),G=(0,_.yj)(),O=(0,i.iH)(!1),J=(0,q.t)(),K=((0,s.Fl)((()=>J.isSuperUser)),(0,s.Fl)((()=>n.getUserType))),X=((0,i.iH)(null),(0,i.iH)([]),(0,i.iH)(""),(0,i.iH)("a-z,A-Z,0-9,#"),(0,i.iH)(12),(0,i.iH)("")),Y=(0,i.iH)(""),ee=(0,i.iH)(""),ae=(0,i.iH)(""),le=(0,i.iH)("");function se(){const e=new b(/[A-Z]{1}/gm).gen(),a=new b(/[a-z]{3,5}/gm).gen(),l=new b(/[@#$%^&*!]{1}/gm).gen(),s=new b(/[0-9]{3,5}/gm).gen();le.value=e+a+l+s,(0,d.Z)(le.value)}const re=(0,i.iH)(null),te=(0,i.iH)(null),ie=((0,i.iH)([]),(0,i.iH)("")),oe=(0,i.iH)("");function ne(){ie.value.click()}async function me(e){v.Z.show({spinner:g.Z,message:"Loading..."});const a=e.target.files[0],l=new FileReader;l.onloadend=()=>{oe.value=l.result,v.Z.hide()},l.readAsDataURL(a)}function de(){history.go(-1)}async function ue(){v.Z.show({message:"Loading...",spinner:g.Z});const e=new FormData;if(e.append("user_type_id",X.value.value),e.append("first_name",Y.value),e.append("last_name",ee.value),e.append("email",ae.value),le.value&&e.append("password",le.value),oe.value?.startsWith("https://"))e.append("avtar",oe.value);else if(oe.value){const a=await fetch(oe.value),l=await a.blob(),s=new File([l],`image${(0,m.Z)()}.png`);e.append("avtar",s,`image${(0,m.Z)()}.png`)}"edit-user"==G.name?n.updateUser(e,te.value).then((e=>{1==e.success?(p["default"].success(e.message?e.message:"User Edited Successfully !"),B.push({name:"user-dashboard"}),v.Z.hide()):0==e.success&&(p["default"].error(e.message),v.Z.hide())})).finally((()=>{v.Z.hide()})):n.saveNewUser(e).then((e=>{1==e.success?(p["default"].success(e.message?e.message:"User Created Successfully !"),B.push({name:"user-dashboard"}),v.Z.hide()):(console.log(e),a.value=e.errors)})).catch((e=>{e.response&&(a.value=e.response.data.errors)})).finally((()=>{v.Z.hide()}))}return"edit-user"==G.name&&(v.Z.show({message:"Loading...",spinner:g.Z}),re.value=G.params.slug,f.Z.get(f.Z.resolveApiUrl(u.xR.SHOW,{id:re.value})).then((e=>{1==e.success?(te.value=e.data[0].id,X.value={label:e.data[0].usertype.name,value:e.data[0].usertype.id},Y.value=e.data[0].first_name,ee.value=e.data[0].last_name,ae.value=e.data[0].email,oe.value=e.data[0].avtar,v.Z.hide()):0==e.success&&(p["default"].error(e.message),v.Z.hide())})).catch((e=>{console.log(e),v.Z.hide()})).finally((()=>{O.value=!0,v.Z.hide()}))),(0,s.bv)((()=>{"edit-user"!==G.name&&(O.value=!0)})),(e,l)=>{const n=(0,s.up)("q-btn"),m=(0,s.up)("q-select"),d=(0,s.up)("q-input"),u=(0,s.up)("q-form");return(0,s.wg)(),(0,s.j4)(u,{onSubmit:l[6]||(l[6]=(0,r.iM)((e=>ue()),["prevent"]))},{default:(0,s.w5)((()=>[(0,s._)("div",U,[(0,s._)("section",Z,[(0,s._)("div",w,[(0,s._)("h3",y,(0,t.zw)(re.value?"Update":"Create")+" User",1)]),(0,s._)("div",S,[(0,s._)("div",H,[(0,s._)("div",V,[(0,s._)("div",k,[(0,s._)("div",C,[oe.value?((0,s.wg)(),(0,s.iD)("img",{key:0,src:oe.value,alt:"user"},null,8,W)):((0,s.wg)(),(0,s.iD)("img",x))]),(0,s._)("div",F,[(0,s._)("input",{style:{display:"none"},ref_key:"imgInput",ref:ie,type:"file",name:"image",accept:e.accept,onChange:me},null,40,T),(0,s.Wm)(n,{color:"primary",icon:"las la-pen",class:"edit-pro-btn-avtar",onClick:(0,r.iM)(ne,["prevent"])},null,8,["onClick"])])])]),(0,s._)("div",L,[(0,s._)("div",Q,[$,(0,s.Wm)(m,{outlined:"","hide-bottom-space":"",dense:e.dense,class:"q-ml-sm q-mr-sm",modelValue:X.value,"onUpdate:modelValue":l[0]||(l[0]=e=>X.value=e),options:(0,i.SU)(K),error:(0,i.SU)(a).length>0,"error-message":(0,i.SU)(o)((0,i.SU)(a),"user_type_id")},null,8,["dense","modelValue","options","error","error-message"])]),(0,s._)("div",D,[E,(0,s.Wm)(d,{outlined:"","hide-bottom-space":"",modelValue:Y.value,"onUpdate:modelValue":l[1]||(l[1]=e=>Y.value=e),dense:e.dense,class:"q-ml-sm q-mr-sm",rules:[a=>e.required(a,"First Name")],error:(0,i.SU)(a).length>0,"error-message":(0,i.SU)(o)((0,i.SU)(a),"first_name")},null,8,["modelValue","dense","rules","error","error-message"])]),(0,s._)("div",N,[P,(0,s.Wm)(d,{outlined:"","hide-bottom-space":"",modelValue:ee.value,"onUpdate:modelValue":l[2]||(l[2]=e=>ee.value=e),dense:e.dense,placeholder:e.$q.lang.user.edit_profile.name.placeHolder,rules:[a=>e.required(a,"Last Name")],error:(0,i.SU)(a).length>0,"error-message":(0,i.SU)(o)((0,i.SU)(a),"last_name"),class:"q-ml-sm q-mr-sm"},null,8,["modelValue","dense","placeholder","rules","error","error-message"])]),(0,s._)("div",A,[R,(0,s.Wm)(d,{outlined:"","hide-bottom-space":"",modelValue:ae.value,"onUpdate:modelValue":l[3]||(l[3]=e=>ae.value=e),dense:e.dense,class:"q-ml-sm q-mr-sm",rules:[a=>e.required(a,"Email"),a=>e.isEmail(a)],error:(0,i.SU)(a).length>0,"error-message":(0,i.SU)(o)((0,i.SU)(a),"email")},null,8,["modelValue","dense","rules","error","error-message"])]),re.value?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",z,[(0,s._)("div",j,[I,(0,s.Wm)(n,{label:"Generate",onClick:l[4]||(l[4]=e=>se())})]),(0,s.Wm)(d,{outlined:"","hide-bottom-space":"",modelValue:le.value,"onUpdate:modelValue":l[5]||(l[5]=e=>le.value=e),dense:e.dense,rules:[a=>e.required(a,"Password"),a=>e.validatePassword(a)],error:(0,i.SU)(a).length>0,"error-message":(0,i.SU)(o)((0,i.SU)(a),"password"),class:"q-ml-sm q-mr-sm"},null,8,["modelValue","dense","rules","error","error-message"])]))]),(0,s._)("div",M,[(0,s.Wm)(n,{outline:"",onClick:de,color:"primary",label:e.$q.lang.user.edit_profile.cancel_btn,class:"edit-pro-btn"},null,8,["label"]),(0,s.Wm)(n,{color:"primary",label:e.$q.lang.user.edit_profile.submit_btn,type:"submit",class:"edit-pro-btn q-ml-sm"},null,8,["label"])])])])])])])),_:1})}}};var G=l(8326),O=l(8879),J=l(2259),K=l(6611),X=l(1463),Y=l(8149),ee=l(9984),ae=l.n(ee);const le=B,se=le;ae()(B,"components",{QForm:G.Z,QBtn:O.Z,QSelect:J.Z,QInput:K.Z,QTable:X.Z,QField:Y.Z})},205:(e,a,l)=>{e.exports=l.p+"img/user-avtart-img.f9e2707e.png"}}]);