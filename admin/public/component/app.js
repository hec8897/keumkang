const router = new VueRouter({
  routes: [
      {
          path: '/newsbord',
          component: NewsBord,
      },
      {
        path: '/consul',
        component: Consul,
    }
  ]
})

const app = new Vue({
    router,
    components: {
        'component-header': header,
        'component-nav':Nav
      }
}).$mount('#app')
