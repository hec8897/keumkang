import eventBus from './eventbus.js';

const saveModal = {
    template: `<div class="pop-window fade" id="modal-alert">
                <div class="alert">
                    <div class="alert_con">
                        <i class="material-icons blue">error_outline</i>
                        <p>{{ment}}</p>
                    </div>
                    <div class="modal_foot">
                        <span class="b_blue" @click='PostData(FnMode)'>확인</span>
                        <span v-on:click='ModalClose' class="b_sgrey">취소</span>
                    </div>
                </div>
            </div>`,
    data() {
        return {
            idx: null,
            Data:null,
            FnMode:null,
            ment:"보도자료를 등록 하시겠습니까?"
        }
    },
    mounted(){
        eventBus.$on('new',(Data)=>{
            this.ment = '보도자료를 등록 하시겠습니까?'
            this.FnMode = 'new'
        })
        eventBus.$on('mp4',(Data)=>{
            this.ment = '드론영상을 등록하시겠습니까?'
            this.FnMode = 'mp4'
        })
        eventBus.$on('updateNews',(Data)=>{
            this.ment = '보도자료를 수정 하시겠습니까?'
            this.FnMode = 'update'
        })
        eventBus.$on('account_use',(Data)=>{
            this.ment = '계정 사용을 승인합니다'
            this.Data = Data
            this.FnMode = 'Active'
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
        PostData(mode){
            let baseURI;
            let Data;
            if(mode == 'Active'){
                baseURI = 'api/user_fn.php';
                Data = {
                    mode:this.FnMode,
                    idx:this.Data
                }
            }
            else{
                baseURI = '123';
            }
            axios.post(`${baseURI}`, {Data})
            .then((result) => {
                if (result.data.phpResult == 'ok') {
                    this.ModalClose()
                    location.reload()
                } 
            })
            .catch(err => console.log('Login: ', err));
        }
    }
}

export default saveModal;