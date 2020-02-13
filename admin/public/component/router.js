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
      component: LoginPage,
      name: 'login'
    },
    {
      path: '/userview',
      component: userMain,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.length == 0) {
          console.log(to)
          router.push({
            path: '/',
            component: LoginPage,
            name: 'login'
          })
        } else {
          if(sessionStorage.comcode == 1){
            next()
          }
        }
      }
    },
    {
      path: '/newsbord',
      component: NewsBord,
        beforeEnter: (to, from, next) => {
        if (sessionStorage.length == 0) {
          router.push({
            path: '/',
            component: LoginPage,
            name: 'login'
          })
        } else {
          if(sessionStorage.comcode == 1){
            next()
          }
        }
      }
    },
    {
      path: '/newsbord/newbordview/:idx',
      component: NewsView,
      props: true,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.length == 0) {
          router.push({
            path: '/',
            component: LoginPage,
            name: 'login'
          })
        } else {
          if(sessionStorage.comcode == 1){
            next()
          }
        }
      }
    },
    {
      name: 'consul',
      path: '/consul',
      component: Consul,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.length == 0) {
          router.push({
            path: '/',
            component: LoginPage,
            name: 'login'
          })
        } else {
          if(sessionStorage.comcode == 1){
            next()
          }
        }
      }
    },
    {
      name: 'cflag',
      path: '/cflag',
      component: shareConsulView,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.length == 0) {
          router.push({
            path: '/',
            component: LoginPage,
            name: 'login'
          })
        } else {
          next()
        }
      }
    },
    {
      path: '/consul/consulview/:idx',
      component: ConsulView,
      props: true,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.length == 0) {
          router.push({
            path: '/',
            component: LoginPage,
            name: 'login'
          })
        } else {
            next()
        }
      }
    },
  ]
})



export default router;