import '@babel/polyfill'
import router from './router'
import { store } from './store';
import HeaderComponent from './glc/header.js';
import NavComponent from './glc/nav.js';
new Vue({
  store,
  router,
  components: {
    'component-header': HeaderComponent,
    'component-nav': NavComponent,
  },
  template: `
  <div>
        <component-header></component-header>
        <component-nav v-bind:comcode='this.$store.state.comcode'></component-nav>
        <router-view></router-view>
  </div>
  `,
  created(){
      this.$store.state.id = sessionStorage.ID;
      this.$store.state.Name = sessionStorage.name;
      this.$store.state.Class = sessionStorage.Class;
      this.$store.state.Activation = sessionStorage.Activation;
      this.$store.state.comcode = sessionStorage.comcode;
      this.$store.state.userPhone = sessionStorage.userPhone;
      this.$store.state.idx = sessionStorage.idx
  }
}).$mount('#app')
