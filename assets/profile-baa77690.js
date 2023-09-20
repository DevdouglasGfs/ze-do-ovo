import{a as $}from"./axios-82afda87.js";import{u as k}from"./activeElement.store-9d9d54b2.js";import{d as B,r as C,s as S,c as m,e,n,j as l,b as c,_ as z,k as A,a as N,u as o,i as w,y as I,h as v,g as D,t as R,F,H as G}from"./index-ab5b4864.js";const T={for:"image"},V=B({__name:"ChangeImage",emits:["imageSent","cancelChange"],setup(P,{emit:i}){const g=C(!1),t=k();S(()=>{t.setActiveElement("change-image")});function s(r){const u=r.files?r.files[0]:null;if(u){g.value=!0;let p=new FormData;p.append("avatar",u),alert("hum");const d={headers:{"content-type":"multipart/form-data"}};$.post("/profile-image",p,d).then(()=>{console.log("Sent"),i("imageSent")}).catch(y=>{console.error(y.message)}),t.resetActiveElement()}else g.value=!1}function h(){i("cancelChange"),t.resetActiveElement()}return(r,u)=>(c(),m("div",{class:n(r.$style.changeProfileImage)},[e("span",{onClick:h,class:n(r.$style.close)},"x",2),e("h3",{class:n(r.$style.title)},"Escolher uma foto de perfil",2),e("form",{class:n(r.$style.changeImage)},[e("label",T,[l(" Escolha uma imagem "),g.value?(c(),m("input",{key:1,id:"image",type:"file",accept:"image/jpeg,image/png",onChange:u[1]||(u[1]=p=>s(p.target)),placeholder:"Escolha uma imagem"},null,32)):(c(),m("input",{key:0,id:"image",type:"file",accept:"image/jpeg,image/png",onChange:u[0]||(u[0]=p=>s(p.target)),placeholder:"Escolha uma imagem"},null,32))])],2)],2))}}),W="_change-profile-image_dwau5_1",j="_close_dwau5_20",U="_title_dwau5_28",O="_change-image_dwau5_31",J={"change-profile-image":"_change-profile-image_dwau5_1",changeProfileImage:W,close:j,title:U,"change-image":"_change-image_dwau5_31",changeImage:O},q={$style:J},H=z(V,[["__cssModules",q]]),L=["src"],K=["disabled"],Q={for:"user-first-name"},X=["value"],Y={for:"user-last-name"},Z=["value"],x={for:"user-phone"},ee=["value"],oe={for:"user-email"},ae=["value"],te={for:"user-cpf"},ne=["value"],se={for:"user-cep"},le=["value"],ie={for:"user-uf"},re=["value"],ue=G('<option value="AC">Acre</option><option value="AL">Alagoas</option><option value="AP">Amapá</option><option value="AM">Amazonas</option><option value="BA">Bahia</option><option value="CE">Ceará</option><option value="DF">Distrito Federal</option><option value="ES">Espírito Santo</option><option value="GO">Goiás</option><option value="MA">Maranhão</option><option value="MT">Mato Grosso</option><option value="MS">Mato Grosso do Sul</option><option value="MG">Minas Gerais</option><option value="PA">Pará</option><option value="PB">Paraíba</option><option value="PR">Paraná</option><option value="PE">Pernambuco</option><option value="PI">Piauí</option><option value="RJ">Rio de Janeiro</option><option value="RN">Rio Grande do Norte</option><option value="RS">Rio Grande do Sul</option><option value="RO">Rondônia</option><option value="RR">Roraima</option><option value="SC">Santa Catarina</option><option value="SP">São Paulo</option><option value="SE">Sergipe</option><option value="TO">Tocantins</option>',27),pe=[ue],ce={for:"user-city"},me=["value"],de={for:"user-neighborhood"},_e=["value"],fe={for:"user-address"},ge=["value"],ve={for:"user-house-number"},he=["value"],ye=B({__name:"profile",setup(P){S(()=>{});let i=C(!0),t=A({firstName:"Douglas",lastName:"Silva",imageUrl:"assets/images/background/user-background.jpg",email:"devdouglassilva@gmail.com",phone:"38999392757",cpf:1234567891123,cep:39103e3,uf:"MG",city:"Diamantina",neighborhood:"Guinda",address1:"Rua Egidio Arcebispo Silva",address2:"",houseNumber:6}),s=C(!1);const h=()=>{s.value=!s.value},r=()=>{i.value=!i.value},u=()=>{},p=()=>{i.value=!i.value},d=()=>{document.getElementById("user-address1").value="",document.getElementById("user-neighborhood").value="",document.getElementById("user-city").value="",document.getElementById("user-uf").value=""};function y(a){console.log(a),"erro"in a?(d(),alert("CEP não encontrado.")):(document.getElementById("user-address1").value=a.logradouro,document.getElementById("user-neighborhood").value=a.bairro,document.getElementById("user-city").value=a.localidade,document.getElementById("user-uf").querySelector(`option[value='${a.uf.toUpperCase()}']`).selected=!0)}async function M(a){const f=a.target.value.replace(/\D/g,"");f!=""?/^[0-9]{8}$/.test(f)?(document.getElementById("user-address1").value="...",document.getElementById("user-neighborhood").value="...",document.getElementById("user-city").value="...",document.getElementById("user-uf").value="...",$(`https://viacep.com.br/ws/${f}/json/`).then(b=>{y(b.data)}).catch(b=>console.error(b))):(d(),alert("Formato de CEP inválido.")):d()}return(a,_)=>{const f=N("font-awesome-icon");return c(),m(F,null,[o(s)?(c(),w(H,{key:0,onCancelChange:_[0]||(_[0]=E=>I(s)?s.value=!o(s):s=!o(s)),onImageSent:_[1]||(_[1]=E=>I(s)?s.value=!o(s):s=!o(s))})):v("",!0),e("div",{class:n(a.$style.profile)},[e("div",{class:n(a.$style.profileWrapperImage)},[e("div",{class:n(a.$style.profileWrapper)},[e("img",{src:o(t).imageUrl,alt:"Sua foto de perfil",class:n(a.$style.profileImage)},null,10,L),e("button",{onClick:h,type:"button",class:n(a.$style.profileEditImage),title:"Trocar foto de perfil"},[D(f,{icon:["fas","camera"]})],2)],2),e("h2",{class:n(a.$style.name)},R(`${o(t).firstName} ${o(t).lastName}`),3)],2),e("div",{class:n(a.$style.profileData)},[e("h2",{class:n(a.$style.title)},"Dados pessoais",2),e("form",{action:"/",class:n(a.$style.profileDataForm)},[e("fieldset",{disabled:o(i)},[e("label",Q,[l("Nome "),e("input",{value:o(t).firstName,type:"text",name:"user-first-name",id:"user-first-name"},null,8,X)]),e("label",Y,[l("Sobrenome "),e("input",{value:o(t).lastName,type:"text",name:"user-last-name",id:"user-last-name"},null,8,Z)]),e("label",x,[l("Telefone "),e("input",{value:o(t).phone,type:"phone",name:"user-phone",id:"user-phone"},null,8,ee)]),e("label",oe,[l("Email "),e("input",{value:o(t).email,type:"email",name:"user-email",id:"user-email"},null,8,ae)]),e("label",te,[l("CPF "),e("input",{value:o(t).cpf,type:"number",minlength:"13",maxlength:"13",name:"user-cpf",id:"user-cpf"},null,8,ne)]),e("label",se,[l("CEP "),e("input",{value:o(t).cep,type:"number",name:"user-cep",id:"user-cep",onBlur:M},null,40,le)]),e("label",ie,[l("UF "),e("select",{value:o(t).uf,name:"user-uf",id:"user-uf",disabled:""},pe,8,re)]),e("label",ce,[l("Cidade "),e("input",{value:o(t).city,type:"text",name:"user-city",id:"user-city"},null,8,me)]),e("label",de,[l("Bairro "),e("input",{value:o(t).neighborhood,type:"text",name:"user-neighborhood",id:"user-neighborhood"},null,8,_e)]),e("label",fe,[l("Endereço "),e("input",{value:o(t).address1,type:"text",name:"user-address1",id:"user-address1"},null,8,ge)]),e("label",ve,[l(" Número "),e("input",{value:o(t).houseNumber,type:"number",name:"user-house-number",id:"user-house-number"},null,8,he)])],8,K),e("div",{class:n(a.$style.profileManagementButtons)},[o(i)?(c(),m("button",{key:0,onClick:r,class:n(a.$style.editCta),type:"button"}," Editar ",2)):v("",!0),o(i)===!1?(c(),m("button",{key:1,onClick:u,class:n(a.$style.confirm),type:"submit"}," Confirmar Alterações ",2)):v("",!0),o(i)===!1?(c(),m("button",{key:2,onClick:p,class:n(a.$style.cancel),type:"button"}," Cancelar ",2)):v("",!0)],2)],2)],2)],2)],64)}}}),be="_profile_md9z6_1",Ce="_profile-wrapper-image_md9z6_4",Ee="_profile-wrapper_md9z6_4",Ie="_profile-image_md9z6_14",$e="_name_md9z6_39",Be="_profile__data_md9z6_42",Se="_profile__data_md9z6_42",ze="_title_md9z6_49",Pe="_profile__data-form_md9z6_59",Me="_profile__management-buttons_md9z6_86",ke="_confirm_md9z6_102",Ae="_edit-cta_md9z6_110",Ne="_cancel_md9z6_118",we={profile:be,"profile-wrapper-image":"_profile-wrapper-image_md9z6_4",profileWrapperImage:Ce,"profile-wrapper":"_profile-wrapper_md9z6_4",profileWrapper:Ee,"profile-image":"_profile-image_md9z6_14",profileImage:Ie,name:$e,profile__data:Be,profileData:Se,title:ze,"profile__data-form":"_profile__data-form_md9z6_59",profileDataForm:Pe,"profile__management-buttons":"_profile__management-buttons_md9z6_86",profileManagementButtons:Me,confirm:ke,"edit-cta":"_edit-cta_md9z6_110",editCta:Ae,cancel:Ne},De={$style:we},Te=z(ye,[["__cssModules",De]]);export{Te as default};
