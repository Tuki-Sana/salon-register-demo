import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/MainView.vue'),
      meta: { title: 'Azure - 料金計算' },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { title: 'Azure - ログイン' },
    },
  ],
})

router.beforeEach((to) => {
  if (to.meta?.title) {
    document.title = to.meta.title
  }
})

export default router
