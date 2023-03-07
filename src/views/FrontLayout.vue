<template>
    <div class="container text-center pt-3">
  <h1>你現在在前台頁面</h1><br>
  <router-link to="/">Home</router-link> |
  <router-link to="/products">前台產品列表</router-link> |
  <router-link to="/cart">前台購物車</router-link> |
  <router-link to="/admin">後臺購物車列表</router-link>
</div>
  <hr>
  <RouterView></RouterView>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView
  }
}
</script>
