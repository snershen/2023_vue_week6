import{g}from"./api-k_3w9GrI.js";import{_ as i,o as e,c,a as t,t as n,b as l,w as f,d as m,r as _,n as L,F as v,e as y,p as x,f as w}from"./index-p2MvTB9z.js";const $={props:{product:{type:Object,default:{}}}},b={class:"card"},P=["src","alt"],C={class:"card-body"},k={class:"card-title"},I={class:"card-text text-overflow"},j={class:"d-flex gap-2"};function S(s,u,o,p,a,h){const d=_("RouterLink");return e(),c("div",b,[t("img",{src:o.product.imageUrl,class:"card-img-top",alt:o.product.title},null,8,P),t("div",C,[t("h5",k,n(o.product.title),1),t("p",I,n(o.product.description),1),t("div",j,[l(d,{to:`/products/${o.product.id}`,class:"btn btn-secondary"},{default:f(()=>[m("詳細資訊")]),_:1},8,["to"])])])])}const B=i($,[["render",S],["__scopeId","data-v-2f072147"]]),N={data(){return{productList:{},isLoading:!0}},components:{ProductCard:B},methods:{async getProduct(){this.isLoading=!0,console.log(this.isLoading);const s=await g();console.log(s),this.productList=s.data.products,this.isLoading=!1,console.log(this.isLoading)}},created(){this.getProduct()}},V=s=>(x("data-v-043b67a7"),s=s(),w(),s),F={class:"container py-5"},R={class:"h-100 d-flex justify-content-center align-items-center"},U=V(()=>t("span",{class:"visually-hidden"},"Loading...",-1)),z=[U],D={class:"row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4 justify-content-lg-start justify-content-center"};function E(s,u,o,p,a,h){const d=_("ProductCard");return e(),c("div",F,[t("div",R,[t("div",{class:L(["spinner-border",{"d-none":!a.isLoading}]),role:"status"},z,2)]),t("ul",D,[(e(!0),c(v,null,y(a.productList,r=>(e(),c("li",{class:"col",key:r.id},[l(d,{product:r},null,8,["product"])]))),128))])])}const q=i(N,[["render",E],["__scopeId","data-v-043b67a7"]]);export{q as default};