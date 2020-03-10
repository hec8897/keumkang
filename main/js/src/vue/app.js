import '@babel/polyfill'
import SpotPhoto from './component/spot_photo'
import router from './router'
import Maincon5 from './component/main-con5'


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

new Vue({
  router,
  template: `  <section class="con5" id='main-con5'>
              <main-con5></main-con5>
              </section>`,
  components: {
    'main-con5': Maincon5
  }
}).$mount('#main-con5')