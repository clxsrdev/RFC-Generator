import{r as i,b as o,c as m,d as h,e as s,f as e}from"./index-953a914a.js";const p={class:"grid"},f={class:"col-12 md:col-6"},u={class:"card p-fluid"},v=s("h5",null,"Vertical",-1),b={class:"field"},y=s("label",{for:"name1"},"Name",-1),x={class:"field"},g=s("label",{for:"email1"},"Email",-1),O={class:"field"},V=s("label",{for:"age1"},"Age",-1),w={class:"card p-fluid"},B=s("h5",null,"Vertical Grid",-1),E={class:"formgrid grid"},I={class:"field col"},L=s("label",{for:"name2"},"Name",-1),N={class:"field col"},T=s("label",{for:"email2"},"Email",-1),F={class:"col-12 md:col-6"},z={class:"card p-fluid"},A=s("h5",null,"Horizontal",-1),S={class:"field grid"},k=s("label",{for:"name3",class:"col-12 mb-2 md:col-2 md:mb-0"},"Name",-1),C={class:"col-12 md:col-10"},D={class:"field grid"},H=s("label",{for:"email3",class:"col-12 mb-2 md:col-2 md:mb-0"},"Email",-1),U={class:"col-12 md:col-10"},G={class:"card"},Z=s("h5",null,"Inline",-1),j={class:"formgroup-inline"},q={class:"field"},J=s("label",{for:"firstname1",class:"p-sr-only"},"Firstname",-1),K={class:"field"},M=s("label",{for:"lastname1",class:"p-sr-only"},"Lastname",-1),P={class:"card"},Q=s("h5",null,"Help Text",-1),R={class:"field p-fluid"},W=s("label",{for:"username"},"Username",-1),X=s("small",null,"Enter your username to reset your password.",-1),Y={class:"col-12"},$={class:"card"},ss=s("h5",null,"Advanced",-1),es={class:"p-fluid formgrid grid"},ts={class:"field col-12 md:col-6"},os=s("label",{for:"firstname2"},"Firstname",-1),ls={class:"field col-12 md:col-6"},ds=s("label",{for:"lastname2"},"Lastname",-1),is={class:"field col-12"},cs=s("label",{for:"address"},"Address",-1),as={class:"field col-12 md:col-6"},ns=s("label",{for:"city"},"City",-1),_s={class:"field col-12 md:col-3"},rs=s("label",{for:"state"},"State",-1),ms={class:"field col-12 md:col-3"},hs=s("label",{for:"zip"},"Zip",-1),vs={__name:"FormLayout",setup(ps){const c=i([{name:"Option 1",code:"Option 1"},{name:"Option 2",code:"Option 2"},{name:"Option 3",code:"Option 3"}]),l=i(null);return(fs,d)=>{const t=o("InputText"),a=o("Button"),n=o("Textarea"),_=o("Dropdown");return m(),h("div",p,[s("div",f,[s("div",u,[v,s("div",b,[y,e(t,{id:"name1",type:"text"})]),s("div",x,[g,e(t,{id:"email1",type:"text"})]),s("div",O,[V,e(t,{id:"age1",type:"text"})])]),s("div",w,[B,s("div",E,[s("div",I,[L,e(t,{id:"name2",type:"text"})]),s("div",N,[T,e(t,{id:"email2",type:"text"})])])])]),s("div",F,[s("div",z,[A,s("div",S,[k,s("div",C,[e(t,{id:"name3",type:"text"})])]),s("div",D,[H,s("div",U,[e(t,{id:"email3",type:"text"})])])]),s("div",G,[Z,s("div",j,[s("div",q,[J,e(t,{id:"firstname1",type:"text",placeholder:"Firstname"})]),s("div",K,[M,e(t,{id:"lastname1",type:"text",placeholder:"Lastname"})]),e(a,{label:"Submit"})])]),s("div",P,[Q,s("div",R,[W,e(t,{id:"username",type:"text"}),X])])]),s("div",Y,[s("div",$,[ss,s("div",es,[s("div",ts,[os,e(t,{id:"firstname2",type:"text"})]),s("div",ls,[ds,e(t,{id:"lastname2",type:"text"})]),s("div",is,[cs,e(n,{id:"address",rows:"4"})]),s("div",as,[ns,e(t,{id:"city",type:"text"})]),s("div",_s,[rs,e(_,{id:"state",modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=r=>l.value=r),options:c.value,optionLabel:"name",placeholder:"Select One"},null,8,["modelValue","options"])]),s("div",ms,[hs,e(t,{id:"zip",type:"text"})])])])])])}}};export{vs as default};
