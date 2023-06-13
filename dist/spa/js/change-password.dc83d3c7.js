"use strict";(globalThis["webpackChunkTranscription"]=globalThis["webpackChunkTranscription"]||[]).push([[21],{7798:(e,a,s)=>{s.r(a),s.d(a,{default:()=>Z});s(9665);var r=s(9835),l=s(1957),o=s(6970),n=s(499),t=(s(3703),s(9587)),i=s(2057),d=s(6928),u=s(8339);const c={class:"q-pa-md login_form"},p={class:"authentication-container auth-content"},m={class:"align-center-box"},w={class:"user_account_header"},v={class:"title q-my-sm"},_={key:0,class:"log-alert-msg"},b={class:"alert-txt"},h={class:"q-mb-none q-ml-sm"},g={class:"user_account_body"},f={class:"q-mb-md"},q={class:"lable-text"},y={class:"q-mb-md"},P={class:"lable-text"},U={class:"q-mb-md"},S={class:"lable-text"},k={class:"text-right q-pt-lg mob-action-btn"},V={__name:"ChangePassword",setup(e){const a=(0,n.iH)(""),s=(0,n.iH)(!0),V=(0,n.iH)(!0),x=(0,n.iH)(!0),C=(0,u.tv)(),$=(0,d.t)(),H=(0,r.Fl)((()=>$.getUser)),{errors:W,serverValidationError:z}=(0,i.Z)(),T=(0,n.iH)({current_password:"",password:"",password_confirmation:""});function Z(){if(T.value.password!==T.value.password_confirmation)return"Please Type Same Password"}function Q(){var e={currentPassword:T.value.current_password,newPassword:T.value.password_confirmation};$.changePassword(e).then((e=>{1==e.success?(t["default"].success(e.message),3==H.value.user_type_id?C.push({name:"writer-dashboard"}):2==H.value.user_type_id?C.push({name:"doctor-dashboard"}):C.push({name:"home"})):0==e.success&&(a.value=e.message)})).catch((e=>{e.response&&(W.value=e.response.message)}))}function F(){history.go(-1)}return(e,t)=>{const i=(0,r.up)("q-icon"),d=(0,r.up)("q-input"),u=(0,r.up)("q-btn"),C=(0,r.up)("q-form");return(0,r.wg)(),(0,r.j4)(C,{onSubmit:t[6]||(t[6]=(0,l.iM)((e=>Q()),["prevent"]))},{default:(0,r.w5)((()=>[(0,r._)("div",c,[(0,r._)("div",p,[(0,r._)("div",m,[(0,r._)("div",w,[(0,r._)("h3",v,(0,o.zw)(e.$q.lang.authentication.changePassword.title),1)]),a.value?((0,r.wg)(),(0,r.iD)("div",_,[(0,r._)("div",b,[(0,r._)("p",h,(0,o.zw)(a.value),1)])])):(0,r.kq)("",!0),(0,r._)("div",g,[(0,r._)("div",f,[(0,r._)("label",q,(0,o.zw)(e.$q.lang.authentication.changePassword.current_Password.label),1),(0,r.Wm)(d,{outlined:"","hide-bottom-space":"",modelValue:T.value.current_password,"onUpdate:modelValue":t[1]||(t[1]=e=>T.value.current_password=e),placeholder:e.$q.lang.authentication.changePassword.current_Password.placeHolder,dense:e.dense,debounce:"500",type:x.value?"password":"text",rules:[a=>e.required(a,"current password"),a=>e.validatePassword(a)],error:!!(0,n.SU)(W)["currentPassword"],"error-message":(0,n.SU)(z)((0,n.SU)(W),"currentPassword")},{append:(0,r.w5)((()=>[(0,r._)("div",null,[(0,r.Wm)(i,{class:"geet-icon",name:x.value?"visibility_off":"visibility",onClick:t[0]||(t[0]=e=>x.value=!x.value)},null,8,["name"])])])),_:1},8,["modelValue","placeholder","dense","type","rules","error","error-message"])]),(0,r._)("div",y,[(0,r._)("label",P,(0,o.zw)(e.$q.lang.authentication.changePassword.password.label),1),(0,r.Wm)(d,{outlined:"","hide-bottom-space":"",modelValue:T.value.password,"onUpdate:modelValue":t[3]||(t[3]=e=>T.value.password=e),placeholder:e.$q.lang.authentication.changePassword.password.placeHolder,dense:e.dense,debounce:"500",type:s.value?"password":"text",rules:[a=>e.required(a,"password"),a=>e.validatePassword(a),a=>e.min(a,6,"password")],error:!!(0,n.SU)(W)["data.password"],"error-message":(0,n.SU)(z)((0,n.SU)(W),"data.password")},{append:(0,r.w5)((()=>[(0,r._)("div",null,[(0,r.Wm)(i,{class:"geet-icon",name:s.value?"visibility_off":"visibility",onClick:t[2]||(t[2]=e=>s.value=!s.value)},null,8,["name"])])])),_:1},8,["modelValue","placeholder","dense","type","rules","error","error-message"])]),(0,r._)("div",U,[(0,r._)("label",S,(0,o.zw)(e.$q.lang.authentication.changePassword.confirm_password.label),1),(0,r.Wm)(d,{outlined:"","hide-bottom-space":"",modelValue:T.value.password_confirmation,"onUpdate:modelValue":t[5]||(t[5]=e=>T.value.password_confirmation=e),placeholder:e.$q.lang.authentication.changePassword.confirm_password.placeHolder,type:V.value?"password":"text",dense:e.dense,debounce:"500",rules:[a=>e.required(a,"Confirm Password"),e=>Z(e),a=>e.min(a,6,"Confirm Password")],error:!!(0,n.SU)(W)["data.password_confirmation"],"error-message":(0,n.SU)(z)((0,n.SU)(W),"data.password_confirmation")},{append:(0,r.w5)((()=>[(0,r._)("div",null,[(0,r.Wm)(i,{class:"geet-icon",name:V.value?"visibility_off":"visibility",onClick:t[4]||(t[4]=e=>V.value=!V.value)},null,8,["name"])])])),_:1},8,["modelValue","placeholder","type","dense","rules","error","error-message"])]),(0,r._)("div",k,[(0,r.Wm)(u,{outline:"",onClick:F,color:"primary",label:e.$q.lang.user.edit_profile.cancel_btn,class:"edit-pro-btn"},null,8,["label"]),(0,r.Wm)(u,{color:"primary",label:e.$q.lang.user.edit_profile.submit_btn,type:"submit",class:"edit-pro-btn q-ml-sm"},null,8,["label"])])])])])])])),_:1})}}};var x=s(8326),C=s(6611),$=s(2857),H=s(8879),W=s(9984),z=s.n(W);const T=V,Z=T;z()(V,"components",{QForm:x.Z,QInput:C.Z,QIcon:$.Z,QBtn:H.Z})}}]);