import eventBus from './eventbus.js';

const SpotPopup = {
    props:['img'],
    template:`<div class='popup_bg' id='popup_bg' @click="closePopup">
    <div class='popup'>
        <img v-bind:src = 'this.imgUrl'>
    </div>
    </div>`,
    data(){
        return{
            imgUrl:''
        }
    },
    created(){
        eventBus.$on('imgPopup',(Data)=>{
            this.imgUrl = Data
        })
    },
    methods:{
        closePopup(){
            const popupBg = document.getElementById('popup_bg')
            popupBg.style.opacity='0.0'
                    setTimeout(() => {
                        popupBg.style.display='none'
                    }, 100);
        }
    }
}

export default SpotPopup;