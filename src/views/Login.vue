<template>
  <div class="login-bg vh-100 text-white">
    <div class="container d-flex justify-content-center align-items-start flex-column h-100">
      <div class="login-content w-100 rounded overflow-hidden">
        <div class="row">
          <div class="col-lg-7 d-none d-lg-block">
            <div class="banner"></div>
          </div>
          <div class="col-lg-5">
            <div class="px-5 py-5">
              <h1 class="mb-4 fs-3 fw-bold text-center text-lg-start">登入後台</h1>
              <form action="">
                <div class="mb-3">
                  <label for="admin-email" class="form-label">帳號</label>
                  <input
                    type="email"
                    class="form-control"
                    id="admin-email"
                    placeholder="請輸入信箱"
                    v-model="loginData.username"
                  />
                </div>
                <div class="mb-3">
                  <label for="admin-password" class="form-label">密碼</label>
                  <input
                    type="password"
                    class="form-control"
                    id="admin-password"
                    placeholder="請輸入密碼"
                    v-model="loginData.password"
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-light mt-lg-5 mt-3 py-2 w-100 fw-bold"
                  :class="{ disabled: !loginData.username || !loginData.password }"
                  @click="login"
                >
                  登入
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <RouterLink to="/#" class="btn btn-outline-light mt-5">回到前台</RouterLink>
    </div>
  </div>
</template>

<script>
import { adminLogin } from '@/assets/js/api.js'
export default {
  data() {
    return {
      loginData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      const username = this.loginData.username.trim()
      const password = this.loginData.password
      if (username && password) {
        const res = await adminLogin(this.loginData)
        if (res?.data?.success) {
          const { token, expired } = res.data
          document.cookie = `escaperoom=${token}; expires=${new Date(expired)}`
          this.$router.push('/admin')
        } else {
          alert('登入失敗')
        }
      }
    }
  }
}
</script>

<style lang="scss">
.login-bg {
  background: linear-gradient(45deg, rgb(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
    url('https://images.unsplash.com/photo-1621755313473-b9d6703e3291?q=80&w=2954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
}

.login-content {
  background: rgba(77, 58, 58, 0.5);
  border: solid 1px #3f3f3f;
}

.banner {
  background-image: url('https://images.unsplash.com/photo-1621755313473-b9d6703e3291?q=80&w=2954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center right;
  height: 100%;
}
</style>
