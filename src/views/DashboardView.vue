<template>
    <div class="container text-center pt-3">
  <h1>你現在在後台頁面</h1><br>
  <router-link to="/admin/products">後台產品列表</router-link> |
  <router-link to="/admin/orders">後臺訂單列表</router-link> |
  <router-link to="/">回前台</router-link> |
  <a href="#" @click.prevent="logout">登出</a>
</div>
  <hr>
  <RouterView></RouterView>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView
  },
  methods: {
    logout () {
      document.cookie = `hexToken=; expeires=${new Date()};`
      this.$router.push('/login')
    }
  }
}
</script>
