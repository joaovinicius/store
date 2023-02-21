export default {
  path: '/',
  name: 'Store',
  meta: { template: 'store' },
  redirect: { name: 'PageStoreHome' },
  children: [
    {
      path: 'home',
      name: 'PageStoreHome',
      component: () => import('components/pages/store/PageStoreHome.vue'),
    }
    // home
    // category/:slug
    // tags/:slug
    // product/:uid
    // page/:slug
    // contact
  ]
}