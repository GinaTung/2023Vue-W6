import{_ as d,o as i,c as n,a as e,d as t,t as s,F as l}from"./index-79b0f50a.js";const{VITE_APP_URL:p,VITE_APP_PATH:_}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"yuling202202",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},u={data(){return{product:[]}},methods:{getProduct(){console.log(this.$route);const{id:r}=this.$route.params;this.$http.get(`${p}/api/${_}/product/${r}`).then(c=>{console.log(c),this.product=c.data.product})}},mounted(){this.getProduct()}},a=["src"],h={class:"card-body"},g={class:"card-title"},m={class:"badge bg-primary ms-2"},P={class:"card-text"},x={class:"card-text"},f={class:"d-flex"},E={class:"card-text me-2"},V={class:"card-text text-secondary"};function A(r,c,T,y,o,v){return i(),n(l,null,[e(" 這是單一產品頁面 "),t("h2",null,s(o.product.title),1),t("img",{src:o.product.imageUrl,class:"img-fluid",alt:""},null,8,a),t("div",h,[t("h5",g,[e(s(o.product.title)+" ",1),t("span",m,s(o.product.category),1)]),t("p",P,"商品描述："+s(o.product.description),1),t("p",x,"商品內容："+s(o.product.content),1),t("div",f,[t("p",E,s(o.product.price),1),t("p",V,[t("del",null,s(o.product.origin_price),1)]),e(" "+s(o.product.unit)+" / 元 ",1)])])],64)}const D=d(u,[["render",A]]);export{D as default};
