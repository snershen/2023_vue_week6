import{c as m,d as g}from"./api-k_3w9GrI.js";import{_ as l,o as i,c as d,a as t,b as o,w as r,d as c,h as f,r as p,p as k,f as $,F as x}from"./index-p2MvTB9z.js";const w={methods:{async logout(){const a=await m();this.$router.push("/login"),alert(a.data.message)}}},_=a=>(k("data-v-5841e124"),a=a(),$(),a),N={class:"navbar navbar-expand-lg vh-100 w-25 border-end"},L={class:"container-fluid flex-column align-items-start h-100"},y=_(()=>t("a",{class:"navbar-brand mb-3 ms-3",href:"#"},"LOGO",-1)),C=_(()=>t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1)),I={class:"collapse navbar-collapse align-items-start w-100",id:"navbarNavAltMarkup"},M={class:"navbar-nav flex-column w-100"};function A(a,s,u,v,h,n){const e=p("RouterLink");return i(),d("nav",N,[t("div",L,[y,C,t("div",I,[t("div",M,[o(e,{class:"nav-link p-3 mb-1 active","aria-current":"page",to:"#"},{default:r(()=>[c("密室主題")]),_:1}),o(e,{class:"nav-link p-3 mb-1",to:"#"},{default:r(()=>[c("文章")]),_:1}),o(e,{class:"nav-link p-3 mb-1",to:"#"},{default:r(()=>[c("優惠券")]),_:1})])]),t("a",{class:"nav-link p-3",href:"#",onClick:s[0]||(s[0]=f((...b)=>n.logout&&n.logout(...b),["prevent"]))},"登出")])])}const B=l(w,[["render",A],["__scopeId","data-v-5841e124"]]),S={components:{Navbar:B},methods:{async checkLogin(){var s;const a=await g();(s=a==null?void 0:a.data)!=null&&s.success?alert("驗證成功"):(this.$router.push("/login"),alert("驗證失敗"))}},created(){this.checkLogin()}},V=t("div",{class:"container py-5"},[t("h2",null,"後台")],-1);function F(a,s,u,v,h,n){const e=p("Navbar");return i(),d(x,null,[o(e),V],64)}const T=l(S,[["render",F]]);export{T as default};