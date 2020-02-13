import VueRouter from 'vue-router';
import LoginPage from './loc/login/login_page'
import NewsBord from './loc/newsbord/newsbord.js';
import NewsView from './loc/newsbord/newview.js';
import Consul from './loc/cosul/consul.js';
import ConsulView from './loc/cosul/consul-view.js';
import userMain from './loc/user/user.main.js'
import shareConsulView from './loc/cosul/consil-table-share';

const router = new VueRouter({

    routes: [{
        path: '/',
        component: LoginPage
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
  
  // router.beforeEach(function (to, from, next) {
  //   const i = 1;
  //   if(i == 1){
  //     console.log('login');
  //     next()
  //   }
  //   else{
  //     console.log('login_fail');
  //   }
  // });

  export default router;