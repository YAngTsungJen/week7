<template>
  <div>
    <div id="nav">
      <router-link to="/admin/products">後台首頁</router-link> |
      <router-link to="/admin/product">新房子列表</router-link> |
      <router-link to="/admin/coupons">優惠活動</router-link> |
      <router-link to="/admin/order">預購列表</router-link> |
      <router-link to="/">回到前台</router-link>
    </div>
    <router-view :token="token" v-if="checkSuccess" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      token: '',
      checkSuccess: false
    }
  },
  created () {
    // 使用token做驗證
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      this.token = document.cookie.replace(
        /(?:(?:^|.*;\s*)iscookie\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`
      const api = `${process.env.VUE_APP_APIPATH}auth/check`
      this.$http
        .post(api, {
          api_token: this.token
        })
        .then((res) => {
          this.checkSuccess = true
        })
        .catch((error) => {
          console.log(error.response)
          this.$router.push('/login')
        })
    }
  }
}
</script>
