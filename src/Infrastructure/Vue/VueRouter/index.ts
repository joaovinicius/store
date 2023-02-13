import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Page/store/index.vue'

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
