import{_ as d,o as p,c as h,a as o,h as l,i as c}from"./index-399c0a00.js";const{VITE_APP_URL:u}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"yuling202202",BASE_URL:"/2023Vue-W6",MODE:"production",DEV:!1,PROD:!0},m={data(){return{user:{username:"",password:""}}},methods:{login(){console.log(this.user);const n=`${u}/admin/signin`;this.$http.post(n,this.user).then(s=>{const{expired:e,token:i}=s.data;document.cookie=`hexToken=${i}; expeires=${new Date(e)};`,this.$router.push("/admin/products")}).catch(s=>{console.log(s)})},checkLogin(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=n;const s=`${u}/api/user/check`;this.$http.post(s).then(e=>{console.log(e),e.data.success||this.$router.push("/login")}).catch(e=>{console.log(e),alert(`${e.data.message}`)})}},mounted(){this.checkLogin()}},_={class:"container"},f=o("h1",null,"登入畫面.",-1),g={id:"form",class:"form-signin"},k={class:"form-floating mb-3"},w=o("label",{for:"username"},"Email address",-1),$={class:"form-floating"},x=o("label",{for:"password"},"Password",-1);function P(n,s,e,i,r,a){return p(),h("div",_,[f,o("form",g,[o("div",k,[l(o("input",{type:"email",class:"form-control",id:"username","onUpdate:modelValue":s[0]||(s[0]=t=>r.user.username=t),placeholder:"name@example.com",required:"",autofocus:""},null,512),[[c,r.user.username]]),w]),o("div",$,[l(o("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":s[1]||(s[1]=t=>r.user.password=t),placeholder:"Password",required:""},null,512),[[c,r.user.password]]),x]),o("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"button",onClick:s[2]||(s[2]=(...t)=>a.login&&a.login(...t))}," 登入 ")])])}const b=d(m,[["render",P]]);export{b as default};
