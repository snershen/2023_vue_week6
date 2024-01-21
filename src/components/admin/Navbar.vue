<template>
  <nav class="navbar navbar-expand-lg vh-100 w-25 border-end">
    <div class="container-fluid flex-column align-items-start h-100">
      <a class="navbar-brand mb-3 ms-3" href="#">LOGO</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse align-items-start w-100" id="navbarNavAltMarkup">
        <div class="navbar-nav flex-column w-100">
          <RouterLink class="nav-link p-3 mb-1 active" aria-current="page" to="#"
            >密室主題</RouterLink
          >
          <RouterLink class="nav-link p-3 mb-1" to="#">文章</RouterLink>
          <RouterLink class="nav-link p-3 mb-1" to="#">優惠券</RouterLink>
        </div>
      </div>
      <a class="nav-link p-3" href="#" @click.prevent="logout">登出</a>
    </div>
  </nav>
</template>

<script>
import { adminLogout } from '@/assets/js/api.js'
export default {
  methods: {
    async logout() {
      const res = await adminLogout()
      this.$router.push('/login')
      alert(res.data.message)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-link:hover,
.nav-link.active {
  background: #eee;
  border-radius: 12px;
}
</style>
