<template>
    <div class="container">
      <h1>登入畫面.</h1>
      <form id="form" class="form-signin">
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="username" v-model="user.username"
                placeholder="name@example.com" required autofocus>
            <label for="username">Email address</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" id="password" v-model="user.password"
                placeholder="Password" required>
            <label for="password">Password</label>
        </div>
        <button class="btn btn-lg btn-primary w-100 mt-3" type="button" @click="login">
            登入
        </button>
    </form>
    </div>
  </template>

<script>
const { VITE_APP_URL } = import.meta.env
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      console.log(this.user)
      const url = `${VITE_APP_URL}/admin/signin`
      this.$http.post(url, this.user).then((res) => {
        const { expired, token } = res.data
        // console.log(expired, token)
        document.cookie = `hexToken=${token}; expeires=${new Date(expired)};`
        // 轉址
        this.$router.push('/admin/products')
      })
        // 切換network->Ferch/XHR:可看到錯誤回傳
        .catch((err) => {
          console.log(err)
        })
    },
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      // console.log(`${site}/api/user/check`);
      const url = `${VITE_APP_URL}/api/user/check`
      this.$http.post(url).then((res) => {
        console.log(res)
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
        .catch((err) => {
          console.log(err)
          alert(`${err.data.message}`)
        })
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
