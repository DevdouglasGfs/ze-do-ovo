import{u as l}from"./activeElement.store-9d9d54b2.js";import{d as m,s as r,a as _,u,c as f,e as t,g,n,h as C,b as p,_ as w}from"./index-ab5b4864.js";const d=m({__name:"LogOutConfirm",emits:["confirmLogout","cancelLogout"],setup(E,{emit:i}){const e=l();r(()=>{e.setActiveElement("logout-confirmation")});const s=()=>{e.resetActiveElement(),i("confirmLogout")},c=()=>{e.resetActiveElement(),i("cancelLogout")};return(o,$)=>{const a=_("font-awesome-icon");return u(e).checkIfIsActive("logout-confirmation")?(p(),f("div",{key:0,class:n(o.$style.logoutConfirmation)},[t("span",{onClick:c,class:n(o.$style.cancel)},[g(a,{icon:["fas","close"]})],2),t("h3",{class:n(o.$style.logoutConfirmationTitle)},"Deseja sair?",2),t("div",{class:n(o.$style.logoutConfirmationActions)},[t("button",{onClick:s,type:"button"},"Sim"),t("button",{onClick:c,class:n(o.$style.cancel),type:"button"}," Não ",2)],2)],2)):C("",!0)}}}),L="_logout-confirmation_omwx0_1",y="_showLogoutConfirmationCard_omwx0_1",v="_cancel_omwx0_16",A="_logout-confirmation__title_omwx0_26",h="_logout-confirmation__actions_omwx0_31",k={"logout-confirmation":"_logout-confirmation_omwx0_1",logoutConfirmation:L,showLogoutConfirmationCard:y,cancel:v,"logout-confirmation__title":"_logout-confirmation__title_omwx0_26",logoutConfirmationTitle:A,"logout-confirmation__actions":"_logout-confirmation__actions_omwx0_31",logoutConfirmationActions:h},x={$style:k},N=w(d,[["__cssModules",x]]);export{N as L};
