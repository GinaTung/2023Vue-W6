<template>
    這是單一產品頁面
    <h2>{{ product.title }}</h2>
    <img :src="product.imageUrl" class="img-fluid" alt="">
    <div class="card-body">
          <h5 class="card-title">
            {{ product.title }}
            <span class="badge bg-primary ms-2">{{
              product.category
            }}</span>
          </h5>
          <p class="card-text">商品描述：{{ product.description }}</p>
          <p class="card-text">商品內容：{{ product.content }}</p>
          <div class="d-flex">
            <p class="card-text me-2">{{ product.price }}</p>
            <p class="card-text text-secondary">
              <del>{{ product.origin_price }}</del>
            </p>
            {{ product.unit }} / 元
          </div>
      </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      product: []
    }
  },
  methods: {
    getProduct () {
      // $router 方法
      // $route 物件->取值
      console.log(this.$route)
      const { id } = this.$route.params
      this.$http.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${id}`).then(res => {
        console.log(res)
        this.product = res.data.product
      })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
