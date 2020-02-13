import router from './router'
import { store } from './store';
import HeaderComponent from './glc/header.js';
import NavComponent from './glc/nav.js';
import newsTable from './loc/newsbord/news-table.js';

// import 'es6-promise/auto'
new Vue({
  store,
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
  `,
 

}).$mount('#app')
