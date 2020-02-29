import Dron from './children_component/dron.js'
import spotImg from './children_component/spot_img.js'
const Spot = {
    template:`
    <div class="con_wrap">
        <div class='content spot_bord'>
            <!-- <h2>드론 영상</h2> -->
            <!-- <dron-controller></dron-controller> -->
            <h2 class='sec_tit'>현장 사진</h2>
            <spot-controller></spot-controller>
        </div>
    </div>`,
    components:{
        'dron-controller':Dron,
        'spot-controller':spotImg
    }
  
    // components:{
        // 'news-bord':newsTable
    // }
}

export default Spot;


