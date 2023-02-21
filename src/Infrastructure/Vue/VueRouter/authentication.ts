import { RouteLocationNormalized } from 'vue-router'

export default {
  path: '/authentication/',
  name: 'Authentication',
  component: () => import('components/pages/authentication/index.vue'),
  meta: { template: 'authentication' },
  beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    console.log(to, from)
    // reject the navigation
    return true
  },
  children: [
    {
      path: 'login',
      name: 'PageAuthenticationLogin',
      component: () => import('components/pages/authentication/PageAuthenticationLogin.vue'),
    }
    // login
    // logout
    // forgot password
    // reset password
    // update password
    // email verification
    // create account
    // connnect social
  ]
}