import eventBus from './eventbus.js'

const DelteModal =  {
    props:['tb'],
    template: `<div class="pop-window fade" id="modal-del">
                <div class="alert">
                    <div class="alert_con">
                        <i class="material-icons red">error_outline</i>
                        <p>정말로 삭제 하시겠습니까?</p>
                            <p>(삭제후엔 복구가 불가능합니다)</p>
                    </div>
                    <div class="modal_foot">
                        <span  class="b_red">확인</span>
                        <span v-on:click='ModalClose' class="b_sgrey">취소</span>
                    </div>
                </div>
            </div>`,
    data(){
        return{
            idx:null,
            thisTarget:null,
            Data:null
        }
    },
    created(){
        eventBus.$on('News',(Data)=>{
            console.log(Data)
        })
        eventBus.$on('consul',(Data)=>{
            console.log('상담신청삭제'+Data)
        })
        eventBus.$on('NewsImg',(Data)=>{
            console.log('이미지삭제'+Data)
        })
    },
    methods:{
        ModalClose() {
            const Modal = document.getElementById('modal-del')
            Modal.style.opacity='0';

            setTimeout(() => {
                Modal.style.display='none';
            }, 100);
        }

    }
}

export default DelteModal;