import { RouteLocationNormalized } from 'vue-router'

export default {
  path: '/admin/',
  name: 'Admin',
  redirect: { name: 'PageAdminDashboard' },
  meta: { template: 'admin' },
  beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    console.log(to, from)
    // reject the navigation
    return true
  },
  children: [
    {
      path: 'dashboard',
      name: 'PageAdminDashboard',
      component: () => import('src/Infrastructure/Vue/Quasar/Components/Pages/Admin/Dashboard.vue'),
    }
  ]
}