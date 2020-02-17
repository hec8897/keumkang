import eventBus from './eventbus.js'

const DelteModal = {
    props: ['tb'],
    template: `<div class="pop-window fade" id="modal-del">
                <div class="alert">
                    <div class="alert_con">
                        <i class="material-icons red">error_outline</i>
                        <p>{{ment}}</p>
                        <p>{{ment2}}</p>
                    </div>
                    <div class="modal_foot">
                        <span  class="b_red" @click='PostData(FnMode)'>확인</span>
                        <span v-on:click='ModalClose' class="b_sgrey">취소</span>
                    </div>
                </div>
            </div>`,
    data() {
        return {
            idx: null,
            thisTarget: null,
            Data: null,
            FnMode:String,
            ment: '정말로 삭제 하시겠습니까?',
            ment2:'(삭제후엔 복구가 불가능합니다)'
        }
    },
    created() {
        eventBus.$on('News', (Data) => {
            this.ment = '보도자료를 삭제합니다'
            this.FnMode = 'News';
            console.log(Data)
        })
        eventBus.$on('consul', (Data) => {
            this.ment = '상담내역을 삭제합니다'
            this.FnMode = 'ImgConsul';

            console.log('상담신청삭제' + Data)
        })
        eventBus.$on('NewsImg', (Data) => {
            this.ment = '메인 이미지를 삭제합니다'
            this.FnMode = 'ImgDelte';

            console.log('이미지삭제' + Data)
        })
        eventBus.$on('account_del', (Data) => {
            this.ment = '사용자 계정을 삭제합니다'
            this.FnMode = 'DeleteAcc';

            console.log('사용자계정 삭제' + Data)
        })
        eventBus.$on('account_beactive', (Data) => {
            this.ment = '사용자 계정 접근을 중단합니다';
            this.ment2 = '';
            this.Data = Data
            this.FnMode = 'baActive';

        })
    },
    methods: {
        ModalClose() {
            const Modal = document.getElementById('modal-del')
            Modal.style.opacity = '0';

            setTimeout(() => {
                Modal.style.display = 'none';
            }, 100);
        },
        PostData(mode){
            let baseURI;
            let Data;
            if(mode == 'baActive'){
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

export default DelteModal;