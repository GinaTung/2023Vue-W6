<template>
    <h2 class="text-center">This is 產品列表頁面</h2>
    <table class="table">
      <tbody class="text-center">
        <tr v-for="product in products" :key="product.id">
        <td class="align-middle">{{ product.title }}</td>
        <td><img :src="product.imageUrl" width="200" alt=""></td>
        <td class="align-middle"><RouterLink :to="`/product/${product.id}`" class="btn btn-outline-secondary">產品明細</RouterLink>
        <button type="button" class="btn btn-outline-primary" @click="addToCart(product.id)">加入購物車</button>
        </td>
      </tr>
      </tbody>
    </table>
</template>

<script>
import { RouterLink } from 'vue-router'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts () {
      this.$http.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`).then(res => {
        console.log(res)
        this.products = res.data.products
      })
        .catch((err) => {
          console.log(err.data.message)
        })
    },
    addToCart (id) {
      const data = {
        product_id: id,
        qty: 1
      }
      this.$http.post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data }).then(res => {
        console.log(res)
      })
    }
  },
  components: {
    RouterLink
  },
  mounted () {
    this.getProducts()
  }
}
</script>
