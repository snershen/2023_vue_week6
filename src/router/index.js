import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '首頁',
      component: () => import('../views/user/User.vue'),
      children: [
        {
          path: '',
          name: '首頁',
          component: () => import('../views/user/Index.vue')
        },
        {
          path: 'products',
          name: '密室主題',
          component: () => import('../views/user/Product.vue')
        },
        {
          path: 'products/:id',
          component: () => import('../views/user/ProductDetail.vue'),
          props: (route) => {
            return {
              id: route.params.id
            }
          }
        },
        {
          path: 'about',
          name: '關於我們',
          component: () => import('../views/user/About.vue')
        },
        {
          path: 'question',
          name: '常見問題',
          component: () => import('../views/user/Question.vue')
        }
      ]
    },
    {
      path: '/login',
      name: '登入',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/admin',
      name: '後台首頁',
      component: () => import('../views/admin/Dashboard.vue')
    }
  ]
})

export default router
