import eventBus from './eventbus.js';
import router from '../router'

const saveModal = {
    template: `<div class="pop-window fade" id="modal-alert">
                <div class="alert">
                    <div class="alert_con">
                        <i class="material-icons blue">error_outline</i>
                        <p>{{ment}}</p>
                    </div>
                    <div class="modal_foot">
                        <span class="b_blue" v-if="FnMode === 'mp4upload'" @click='uploadMp4'>등록</span>
                        <span class="b_blue" v-else-if="FnMode === 'news'" @click='newUpload'>기사등록</span>
                        <span class="b_blue" v-else-if="FnMode === 'backpage'" @click='backpage'>확인</span>
                        <span class="b_blue" v-else  @click='PostData(FnMode)'>확인</span>
                        <span v-on:click='ModalClose' class="b_sgrey">취소</span>
                    </div>
                </div>
            </div>`,
    data() {
        return {
            idx: null,
            Data:null,
            FnMode:null,
            ment:"보도자료를 등록 하시겠습니까?",
            Data:''
        }
    },
    mounted(){
        eventBus.$on('new',(Data)=>{
            if(Data == 'update'){
                this.ment = '보도자료를 수정 하시겠습니까?'
            }
            else{
                this.ment = '보도자료를 등록 하시겠습니까?'
            }
            this.FnMode = 'news'
        })
        eventBus.$on('mp4',(Data)=>{
            this.ment = '드론영상을 등록하시겠습니까?'
            this.FnMode = 'mp4upload'
            this.Data = Data
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

        eventBus.$on('backpage',(Data)=>{
            this.ment = '저장되지 않았습니다 목록으로 나가시겠습니까?'
            this.Data = Data
            this.FnMode = 'backpage'
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
        uploadMp4(){
            eventBus.$emit('upload_mp4','ok')
        },
        newUpload(){
            eventBus.$emit('newUpload','ok')
        },
        backpage(){
            router.push({
                name:'newbord',
                path: '/newsbord',
            })
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
          
        
            axios.post(`${baseURI}`, {Data})
            .then((result) => {
                console.log(result)

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