import{s as N}from"./index-BVhdwYF6.js";import{s as V}from"./index-la2fEKOQ.js";import{s as M}from"./index-DZxp_wY0.js";import{s as P}from"./index-BkBcl6jt.js";import{s as Y}from"./index-DRlvieUk.js";import{u as j,r,w as q,o as F,c as y,a as t,b as l,e as s,d as o,t as n,g as O,F as R,f as k,k as U}from"./app-BTf9-ai_.js";import{d as z,h as E}from"./moment-CQ1ixRO1.js";import"./index-C0ODo9Cv.js";import"./index-CQKq0pW0.js";import"./index-CFeuG2SP.js";import"./index-7YR6PSei.js";import"./index-BFN9GocW.js";import"./index-CxUVlT2R.js";import"./index-B136gTNq.js";import"./index-B8j82Sw8.js";import"./index-DJmDEk1T.js";import"./index-BYhaYc51.js";import"./index-Bq4RKSB8.js";import"./index-DY3rV8CR.js";import"./index-BnyLwSUA.js";import"./index-DbUcpvGf.js";import"./index-G_yWys-5.js";import"./index-D1OREvqQ.js";import"./index-WcRpi5QP.js";import"./index-CI6UmhJ7.js";const H={key:0,class:"flex flex-col md:flex-row gap-12 min-h-screen items-center justify-center"},I={class:"w-full"},Q={class:"flex flex-col gap-4 text-center"},A={key:1,class:"flex flex-col md:flex-row gap-12"},G={class:"w-full"},K={class:"card flex flex-col gap-4"},L={class:"w-full"},De={__name:"ShowStockTransfers",setup(W){const m=U(),p=j();r(null);const c=r(!0),f=r(!1);let x=r(null);const b=r(""),a=r(null),S=r(1);r(15),r(0);const v=r(!1);r([]);function w(){m&&m.back()}const D=()=>{v.value=!1},C=async(d=1)=>{axios.get(`/api/stocktransfers/${m.currentRoute.value.params.id}?page=${d}`,{params:{query:b.value}}).then(e=>{a.value=e.data,c.value=!1}).catch(e=>{c.value=!1,p.add({severity:"error",summary:`${e}`,detail:"Message Detail",life:3e3}),w()})},h=()=>{f.value=!0,axios.delete(`/api/stocktransfers/${x.value}`).then(()=>{a.value.data=a.value.data.filter(d=>d.id!==x.value),D(),p.add({severity:"success",summary:"Sucesso",detail:"Sucesso ao apagar",life:3e3})}).catch(d=>{p.add({severity:"error",summary:"Erro",detail:`${d}`,life:3e3}),f.value=!1}).finally(()=>{f.value=!1})},_=z(()=>{C(S.value)},300);return q(b,_),F(()=>{C()}),(d,e)=>{const $=Y,g=P,u=M,B=V,T=N;return k(),y(R,null,[c.value?(k(),y("div",H,[t("div",I,[t("div",Q,[l($,{style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"var(--surface-ground)",animationDuration:".5s","aria-label":"Custom ProgressSpinner"}),e[1]||(e[1]=t("p",null,"Por Favor Aguarde...",-1))])])])):(k(),y("div",A,[t("div",G,[t("div",K,[t("div",L,[l(g,{label:"Voltar",class:"mr-2 mb-2",onClick:w},{default:s(()=>e[2]||(e[2]=[t("i",{class:"pi pi-angle-left"},null,-1),o(" Voltar")])),_:1})]),e[11]||(e[11]=t("div",{class:"font-semibold text-xl"},"Transferência de Centro de Stock",-1)),t("p",null,[e[3]||(e[3]=t("strong",null,"Referência:",-1)),o(" "+n(a.value.ref),1)]),t("p",null,[e[4]||(e[4]=t("strong",null,"Centro de Stock de Origem:",-1)),o(" "+n(a.value.stockcenterorigin.name),1)]),t("p",null,[e[5]||(e[5]=t("strong",null,"Centro de Stock de Origem:",-1)),o(" "+n(a.value.stockcenterdestination.name),1)]),t("p",null,[e[6]||(e[6]=t("strong",null,"Data:",-1)),o(" "+n(O(E)(a.value.transfer_date).format("DD-MM-YYYY H:mm")),1)]),t("p",null,[e[7]||(e[7]=t("strong",null,"Usuário:",-1)),o(" "+n(a.value.user.name),1)]),e[12]||(e[12]=t("hr",null,null,-1)),l(B,{value:a.value.itens,dataKey:"id",rowHover:!0,showGridlines:""},{header:s(()=>e[8]||(e[8]=[])),empty:s(()=>e[9]||(e[9]=[o("Nenhuma registro encontrado. ")])),loading:s(()=>e[10]||(e[10]=[o(" Carregando, por favor espere. ")])),default:s(()=>[l(u,{header:"ID",style:{"min-width":"12rem"}},{body:s(({data:i})=>[o(n(i.id),1)]),_:1}),l(u,{header:"Nome",style:{"min-width":"12rem"}},{body:s(({data:i})=>[o(n(i.product.name),1)]),_:1}),l(u,{header:"Stock Centro Origem",style:{"min-width":"12rem"}},{body:s(({data:i})=>[o(n(a.value.stockcenterorigin.name),1)]),_:1}),l(u,{header:"Stock Centro Destino",style:{"min-width":"12rem"}},{body:s(({data:i})=>[o(n(a.value.stockcenterdestination.name),1)]),_:1}),l(u,{header:"Quantidade Transferida",style:{"min-width":"12rem"}},{body:s(({data:i})=>[o(n(i.quantity),1)]),_:1})]),_:1},8,["value"])])])])),l(T,{header:"Confirmação",visible:v.value,"onUpdate:visible":e[0]||(e[0]=i=>v.value=i),style:{width:"350px"},modal:!0},{footer:s(()=>[l(g,{label:"Não",icon:"pi pi-times",onClick:D,class:"p-button-text"}),l(g,{label:"Sim",icon:"pi pi-check",onClick:h,class:"p-button-text",autofocus:""})]),default:s(()=>[e[13]||(e[13]=t("div",{class:"flex align-items-center justify-content-center"},[t("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}}),t("span",null,"Tem certeza que deseja proceder?")],-1))]),_:1},8,["visible"])],64)}}};export{De as default};
