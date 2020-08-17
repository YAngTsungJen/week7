<template>
    <div>
      <!-- Modal -->
      <div class="modal fade" id="couponModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                <span v-if="isNew">新增優惠券</span>
                <span w-else>修改優惠券</span>
                </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="title">標題</label>
                <input type="text" class="form-control" id="title" v-modal="tempCoupon.title" placeholder="請輸入標題">
              </div>
              <div class="form-group">
                <label for="code">折扣碼</label>
                <input type="text" class="form-control" id="code" v-modal="tempCoupon.code" placeholder="請輸入折扣碼">
              </div>
              <div class="form-group">
                <label for="precent">折扣百分比</label>
                <input type="text" class="form-control" id="precent" v-modal="tempCoupon.precent" placeholder="請輸入折扣百分比">
              </div>
              <div class="form-group">
                <label for="deadline_at">到期日</label>
                <input type="text" class="form-control" id="deadline_at" v-modal="tempCoupon.deadline_at" placeholder="請輸入到期日">
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input"
                        type="checkbox"
                        :true-value="true"
                        :false-value="false"
                        v-model="tempCoupon.enabled"
                        id="is_enabled" />
                  <label class="form-check-label"
                        for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary" @click.prevent= "updateCoupon" >確認</button>
            </div>
          </div>
        </div>
      </div>
        <h1>123</h1>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      tempCoupon: {
        title: '',
        code: '',
        precent: 100,
        enabled: false,
        deadline_at: ''
      },
      due_date: '',
      due_time: ''
    }
  },
  props: {
    isNew: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    getCoupon (id) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon/${id}`
      this.$http.get(url).then((res) => {
        console.log(res)
        this.tempCoupon = res.data.data
        $('#couponModal').modal('show')
        const kt = this.tempCoupon.deadline.datetime.split(' ');
        [this.due_date, this.due_time] = kt
      })
        .catch((error) => {
          console.log(error)
        })
    },
    updateCoupon () {
      let url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon`
      let http = 'post'
      if (!this.isNew) {
        url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.tempCoupon.id}`
        http = 'patch'
      }
      this.tempCoupon.deadline_at = `${this.due_date} ${this.due_time}`
      this.$http[http](url, this.tempCoupon).then((res) => {
        $('#couponModal').modal('hide')
        this.$emit('update')
        this.due_date = ''
        this.due_time = ''
      }).catch(() => {
        $('#couponModal').modal('hide')
      })
    }
  }
}
</script>
