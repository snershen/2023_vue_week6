<template>
  <Navbar />
  <div class="container py-5">
    <h2>後台</h2>
  </div>
</template>

<script>
import { adminCheckLogin } from '@/assets/js/api.js'
import Navbar from '@/components/admin/Navbar.vue'
export default {
  components: { Navbar },
  methods: {
    async checkLogin() {
      const res = await adminCheckLogin()
      if (!res?.data?.success) {
        this.$router.push('/login')
        alert('驗證失敗')
      } else {
        alert('驗證成功')
      }
    }
  },
  created() {
    this.checkLogin()
  }
}
</script>
