import{K as _,ar as b,J as a,d as m,Z as S,b as $,c as I,n as w,p as P,j as C,e as x,l as u,a6 as E,r as j,O as r}from"./entry.30128233.js";import D from"./ComponentPlaygroundData.f5cc1150.js";import"./TabsHeader.de939e9f.js";import"./ComponentPlaygroundProps.c347ca52.js";import"./ProseH4.6c00c85e.js";import"./ProseCodeInline.3d6ce673.js";import"./Badge.ccecce9a.js";import"./ContentSlot.a9d22050.js";import"./ProseP.36e0fe18.js";import"./ComponentPlaygroundSlots.vue.017641d8.js";import"./ComponentPlaygroundTokens.vue.1343c003.js";async function z(n){const e=_(n);{const{data:o}=await b(`nuxt-component-meta${e?`-${e}`:""}`,()=>$fetch(`/api/component-meta${e?`/${e}`:""}`));return a(()=>o.value)}}const B=n=>(P("data-v-a2bd7d25"),n=n(),C(),n),N=B(()=>x("div",{class:"ellipsis-item"},null,-1)),O=[N],V=m({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(n){const e=n,o=a(()=>((t=e)=>t.top)()),s=a(()=>((t=e)=>t.left)()),c=a(()=>((t=e)=>t.right)()),i=a(()=>((t=e)=>t.zIndex)()),f=a(()=>((t=e)=>t.width)()),g=a(()=>((t=e)=>t.height)()),y=a(()=>((t=e)=>`blur(${t.blur})`)()),h=a(()=>((t=e)=>{var l,d,p;return`linear-gradient(97.62deg, ${(l=t==null?void 0:t.colors)==null?void 0:l[0]} 2.27%, ${(d=t==null?void 0:t.colors)==null?void 0:d[1]} 50.88%, ${(p=t==null?void 0:t.colors)==null?void 0:p[2]} 98.48%)`})()),{$pinceau:v}=S(e,void 0,{_cCN_top:o,_eih_insetInlineStart:s,_IfB_insetInlineEnd:c,_SsE_zIndex:i,_wj8_maxWidth:f,_t33_height:g,_Jfd_filter:y,_yUj_background:h});return(t,l)=>($(),I("div",{class:w(["ellipsis",[_(v)]])},O,2))}});const k=u(V,[["__scopeId","data-v-a2bd7d25"]]),q=m({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(n){const e=a(()=>E(n.component)),o=j({...n.props}),s=await z(n.component);return{as:e,formProps:o,componentData:s}},render(n){const e=Object.entries(this.$slots).reduce((o,[s,c])=>{if(s.startsWith("component-")){const i=s.replace("component-","");o[i]=c}return o},{});return r("div",{class:"component-playground"},[r("div",{class:"component-playground-wrapper"},[r(k,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),r(n.as,{...n.formProps,class:"component-playground-component"},{...e})]),r(D,{modelValue:n.formProps,componentData:n.componentData,"onUpdate:modelValue":o=>n.formProps=o})])}});const L=u(q,[["__scopeId","data-v-ffdff82a"]]);export{L as default};
