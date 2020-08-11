<template>
  <div>
    <h2>進入後台</h2>
    <div>
      <img class="img-fluid rounded" width="100%" height="500px" src="https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: []
      // token: ''
    }
  },
  props: ['token'],
  created () {
    // 使用token做驗證
    // this.token = document.cookie.replace(/(?:(?:^|.*;\s*)iscookie\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`
    const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products`
    this.$http.get(url).then((res) => {
      this.products = res.data.data
    })
  }
}
</script>
