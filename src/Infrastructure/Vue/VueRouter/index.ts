import { createRouter, createWebHistory } from 'vue-router'
import admin from './admin'
import authentication from './authentication'
import store from './store'

export default createRouter({
  history: createWebHistory(),
  routes: [
    authentication,
    admin,
    store,
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('components/pages/PageError.vue'),
    },
  ],
})
