import '@babel/polyfill'
import SpotPhoto from './component/spot_photo'
import router from './router'


new Vue({

  template: `<section class='sub filed con3' id='filed_photo'>
                    <spot-photo></spot-photo>
            </section>`,
  components: {
    'spot-photo': SpotPhoto
  },
  created() {}
}).$mount('#filed_photo')


new Vue({
  router,
  template: `<section class="sub news con2" id='news'>
                <h3>보도자료</h3>
                <router-view></router-view>
            </section>`
}).$mount('#news')