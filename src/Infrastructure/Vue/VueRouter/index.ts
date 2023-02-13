import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Quasar/components/pages/store/index.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
})
