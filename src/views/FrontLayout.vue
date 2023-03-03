<template>
  <h1>你現在在前台頁面</h1><br>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/products">前台產品列表</router-link> |
  <router-link to="/cart">前台購物車</router-link>
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
