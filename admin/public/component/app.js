import HeaderComponent from './glc/header.js';
import NavComponent from './glc/nav.js';
import Consul from './loc/cosul/consul.js';
import NewsBord from './loc/newsbord/newsbord.js';
import NewsView from './loc/newsbord/newview.js';
import newsTable from './loc/newsbord/news-table.js';


const router = new VueRouter({
  routes: [{
      path: '/newsbord',
      component: NewsBord,
    },
    {
      path: '/newsbord/newbordview/:id',
      component: NewsView,
      props:true
    },
    {
      path: '/consul',
      component: Consul,
    }
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
