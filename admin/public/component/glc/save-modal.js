import eventBus from './eventbus.js';

const saveModal = {
    template: `<div class="pop-window fade" id="modal-alert">
                <div class="alert">
                    <div class="alert_con">
                        <i class="material-icons blue">error_outline</i>
                        <p v-if="mode==='new'">보도자료를 등록 하시겠습니까?</p>
                        <p v-else>보도자료를 수정 하시겠습니까?</p>
                    </div>
                    <div class="modal_foot">
                        <span class="b_blue">확인</span>
                        <span v-on:click='ModalClose' class="b_sgrey">취소</span>
                    </div>
                </div>
            </div>`,
    data() {
        return {
            idx: null,
            Data:null,
            mode:null
        }
    },
    mounted(){
        eventBus.$on('updateNews',(Data)=>{
            this.mode = 'update'
        })
        eventBus.$on('new',(Data)=>{
            this.mode = 'new'
        })

    },

    methods: {
        ModalClose() {
            const Modal = document.getElementById('modal-alert')
            Modal.style.opacity = '0';

            setTimeout(() => {
                Modal.style.display = 'none';
            }, 100);
        },
        GetData(a) {
            // if(this.mode == 'user'){
            //     eventBus.$on('idx',(Data)=>{
            //         this.Data = Data.Data
            //     })
            // }
        },
        // PostData(){
        //     if(this.mode == 'user'){
        //         let baseURI = 'api/user.proc.php'

        //         axios.post(`${baseURI}`, {
        //             mode:'user_update',
        //             idx:this.Data.Idx,
        //             chId:this.Data.ChId,
        //             chPw:this.Data.ChPw,
        //             chPhone:this.Data.ChPhone
        //         })
        //         .then((result) => {
        //             if(result.data.phpResult == 'ok'){
        //                 alert('변경이완료되었습니다')
        //                 this.ModalClose();
        //                 eventBus.$emit('userInfo',"change")
        //             }
        //         })
        //         .catch(err => console.log('Login: ', err));
        //     }
        
        // }
    }
}

export default saveModal;