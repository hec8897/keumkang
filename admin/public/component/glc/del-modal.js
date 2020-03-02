import eventBus from './eventbus.js'
import router from '../router.js'

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
            FnMode: String,
            ment: '정말로 삭제 하시겠습니까?',
            ment2: '(삭제후엔 복구가 불가능합니다)'
        }
    },
    created() {
        eventBus.$on('delte_news', (Data) => {
            this.ment = '보도자료를 삭제합니다'
            this.FnMode = 'delte_news';
            this.Data = Data;
            console.log(Data)
        })

        eventBus.$on('new_news', (Data) => {
            this.ment = '저장 되지 않은 내용입니다 삭제하시겠습니까?'
            this.FnMode = 'new_news_del';
            this.Data = Data;
        })
        eventBus.$on('consul', (Data) => {
            this.ment = '상담내역을 삭제합니다'
            this.Data = Data;
            this.FnMode = 'ConsulDel';
        })
        eventBus.$on('NewsImg', (Data) => {
            this.ment = '메인 이미지를 삭제합니다'
            console.log(Data)
            this.FnMode = 'NewsImg_del';
            this.Data = Data
        })
        eventBus.$on('del_mp4', (Data) => {
            this.ment = '드론영상을 삭제합니다';
            this.ment2 = '(삭제 후 새로 등록할수 있습니다.)';
            this.Data = Data;
            this.FnMode = 'del_mp4';
            //여기까지했음
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
        eventBus.$on('spotImgDel',(Data)=>{
            this.ment = '현장사진을 삭제합니다'
            this.FnMode = 'spotImgDel';
            this.Data = Data
            console.log(this.Data)
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
        PostData(mode) {
            let baseURI;
            let Data;
            if (mode == 'baActive') {
                baseURI = 'api/user_fn.php';
                Data = {
                    mode: this.FnMode,
                    idx: this.Data
                }
            } else if (mode == 'ConsulDel') {
                baseURI = 'api/consul_fn.php';
                Data = {
                    mode: this.FnMode,
                    idx: this.Data
                }
            } else if(mode == 'spotImgDel'){
                baseURI = 'api/spot.upload.php';
                Data = {
                    mode: this.FnMode,
                    idx: this.Data
                }
            }
            else if(mode == 'del_mp4'){
                baseURI = 'api/mp4.fn.php';
                Data = {
                    mode: this.FnMode,
                    file: this.Data
                }
            }
            else if(mode == 'new_news'){
                baseURI = 'api/news.save.fn.php';
                Data = {
                    mode: this.FnMode,
                    file: this.Data
                }
            }
            else if(mode == 'delte_news'){
                baseURI = 'api/news.save.fn.php';
                Data = {
                    mode: this.FnMode,
                    idx:this.Data
                }

            }
            else if(mode == 'NewsImg_del' ){
                baseURI = 'api/news.save.fn.php';
                Data = {
                    mode: this.FnMode,
                    file: this.Data.Data,
                    idx:this.Data.idx
                }
            }
            else {
                baseURI = '123';
            }


            axios.post(`${baseURI}`, {
                    Data  
                })
                .then((result) => {
                    console.log(result)
                    if (result.data.phpResult == 'ok') {
                        this.ModalClose()

                        if (this.FnMode == 'ConsulDel') {
                            router.push({
                                name: 'consul',
                                path: '/consul',
                            })
                        }
                        else if(this.FnMode == 'new_news'){
                            router.push({
                                name:'newbord',
                                path: '/newsbord',
                            })
                        }
                        else if(this.FnMode == 'NewsImg_del'){
                            router.push({
                                name:'newbord',
                                path: '/newsbord',
                            })
                        }
                        
                        else{
                            eventBus.$emit('Update', {result:result.data.phpResult})
                        }
                       
                    }
                })
                .catch(err => console.log('Login: ', err));
        }
    }
}

export default DelteModal;