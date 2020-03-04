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


// new Vue({
//   template: `<section class="sub news con2" id='news_view'>
//   <h3>보도자료</h3>
//   <news-search></news-search>
// <div class="news_list">
//   <news-nav></news-nav>
// </div>
// </section>`,
//   components: {
//     'news-search': NewsSearch,
//     'news-nav': NewsNav,
//   }
// }).$mount('#news_view')