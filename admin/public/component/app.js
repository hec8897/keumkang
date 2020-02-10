const router = new VueRouter({
  routes: [
      {
          path: '/newsbord',
          component: NewsBord,
          children:[
            {path:'/newbordview:id',component:NewsView,props:true}
          ]
      },
      {
        path: '/consul',
        component: Consul,
    }
  ]
})
const eventBus = new Vue();

const app = new Vue({
    router,
    components: {
        'component-header': header,
        'component-nav':Nav
      }
}).$mount('#app')
