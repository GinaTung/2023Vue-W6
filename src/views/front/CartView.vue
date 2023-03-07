<template>
  <div class="container">
    <h2 class="text-center">This is 購物車頁面</h2>
    <!-- 購物車列表 -->
    <div class="text-end">
        <button class="btn btn-outline-danger" type="button" @click="deleteAllCarts">清空購物車</button>
    </div>
    <table class="table align-middle">
        <thead>
            <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 150px">數量/單位</th>
                <th>單價</th>
            </tr>
        </thead>
        <tbody>
            <template v-if="cart.carts">
                <tr v-for="item in cart.carts" :key="item.id">
                    <td>
                        <button type="button" class="btn btn-outline-danger btn-sm"  @click="deleteItem(item)">
                            <i class="fas fa-spinner fa-pulse"
                                :disabled="item.id === loadingItem"></i>
                            x
                        </button>
                    </td>
                    <td>
                        {{ item.product.title}}
                        <!-- <div class="text-success">
                            已套用優惠券
                        </div> -->
                    </td>
                    <td>
                        <div class="input-group input-group-sm">
                            <!-- <div class="input-group mb-3">
                                <input min="1" type="number" class="form-control">
                                <span class="input-group-text" id="basic-addon2">{{ }}</span>
                            </div> -->
                            <select name='' id='' class="form-select" v-model="item.qty"
                                :disabled="item.id === loadingItem" @change="updataCartItem(item)">
                                <option :value="i" v-for="i in 20 " :key="`${i}12345`">{{i}}</option>
                            </select>
                        </div>
                    </td>
                    <td class="text-end">
                        <!-- <small class="text-success">折扣價：</small> -->
                        {{ item.total}}
                    </td>
                </tr>
            </template>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{cart.total }}</td>
            </tr>
            <tr>
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{cart.final_total }}</td>
            </tr>
        </tfoot>
    </table>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      productId: '',
      cart: '',
      // 修正(讀取效果，wach錯誤)
      loadingItem: '' // 存ID
    }
  },
  methods: {
    getCarts () {
      this.$http.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          console.log('購物車:', res.data)
          this.cart = res.data.data
        })
        .catch((err) => {
          console.log(err.data.message)
        })
    },
    updataCartItem (item) {
      // 帶入購物車id、產品id
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      // console.log(data, item.id)
      this.loadingItem = item.id
      this.$http
        .put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`, { data }).then((res) => {
          console.log('更新購物車:', res.data)
          this.getCarts()
          this.loadingItem = ''
        })
        .catch((err) => {
          console.log(err.data.message)
        })
    },
    deleteItem (item) {
      this.loadingItem = item.id
      this.$http
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`).then((res) => {
          console.log('刪除購物車:', res.data)
          alert(`刪除購物車商品:${item.product.title}`)
          this.getCarts()
          this.loadingItem = ''
        })
        .catch((err) => {
          console.log(err.data.message)
        })
    },
    deleteAllCarts () {
      this.$http
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/carts`).then((res) => {
          console.log('清除購物車全部商品:', res.data.message)
          alert('清除購物車全部商品已完成')
          this.getCarts()
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
