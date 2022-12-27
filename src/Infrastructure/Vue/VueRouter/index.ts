import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Page/Store/index.vue'

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
