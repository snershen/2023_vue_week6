import{a as e}from"./api-k_3w9GrI.js";import{_ as r,c as i,a as t,t as o,o as n}from"./index-CItsR2hm.js";const a={data(){return{product:{}}},props:["id"],methods:{async getSingleProduct(){const c=await e(this.id);this.product=c.data.product}},created(){this.getSingleProduct()}},d={class:"container"},l={class:"row py-5"},p={class:"col-lg-6"},_=["src"],u={class:"col-lg-6"},g={class:"opacity-50"};function h(c,m,f,v,s,y){return n(),i("main",null,[t("div",d,[t("div",l,[t("div",p,[t("img",{src:s.product.imageUrl,alt:"",class:"img-fluid"},null,8,_)]),t("div",u,[t("h2",null,o(s.product.title),1),t("p",g,o(s.product.content),1),t("p",null,o(s.product.description),1)])])])])}const x=r(a,[["render",h],["__scopeId","data-v-f72979f0"]]);export{x as default};