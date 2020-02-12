import HeaderComponent from './glc/header.js';
import NavComponent from './glc/nav.js';
import NewsBord from './loc/newsbord/newsbord.js';
import NewsView from './loc/newsbord/newview.js';
import newsTable from './loc/newsbord/news-table.js';
import Consul from './loc/cosul/consul.js';
import ConsulView from './loc/cosul/consul-view.js';
import userMain from './loc/user/user.main.js'
import shareConsulView from './loc/cosul/consil-table-share'
import Login from './loc/login/login_page'


const router = new VueRouter({

  routes: [{
      path: '#/',
      component: Login
    },
    {
      path: '/userview',
      component: userMain
    },
    {
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
      path: '/cflag',
      component: shareConsulView
    },
    {
      path: '/consul/consulview/:idx',
      component: ConsulView,
      props: true
    },
  ]
})


new Vue({
  router,
  components: {
    'component-header': HeaderComponent,
    'component-nav': NavComponent,
    'news-bord': newsTable
  },
  template: `
  <div>
        <component-header></component-header>
        <component-nav></component-nav>
        <router-view></router-view>
  </div>
  `

}).$mount('#app')
