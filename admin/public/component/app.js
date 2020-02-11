import HeaderComponent from './glc/header.js';
import NavComponent from './glc/nav.js';
import NewsBord from './loc/newsbord/newsbord.js';
import NewsView from './loc/newsbord/newview.js';
import newsTable from './loc/newsbord/news-table.js';
import Consul from './loc/cosul/consul.js';
import ConsulView from './loc/cosul/consul-view.js';


const router = new VueRouter({
  routes: [{
      path: '/newsbord',
      component: NewsBord,
    },
    {
      path: '/newsbord/newbordview/:idx',
      component: NewsView,
      props: true
    },
    {
      path: '/consul',
      component: Consul,
    },
    {
      path: '/consul/consulview/:idx',
      component: ConsulView,
    },
  ]
})


new Vue({
  router,
  components: {
    'component-header': HeaderComponent,
    'component-nav': NavComponent,
    'news-bord': newsTable
  }
}).$mount('#app')
