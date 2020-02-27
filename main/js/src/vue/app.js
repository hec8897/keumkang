import '@babel/polyfill'
import SpotPhoto from './component/spot_photo'
new Vue({

  template: `<section class='sub filed con3' id='filed_photo'>
                    <spot-photo></spot-photo>
            </section>`,
  components:{
      'spot-photo':SpotPhoto
  },
  created(){
  }
}).$mount('#filed_photo')
