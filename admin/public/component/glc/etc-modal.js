import eventBus from './eventbus.js';

const etcModal = {
    template: `<div class="pop-window fade" id="modal-etc">
                <div class="alert">
                    <div class="alert_con">
                        <i class="material-icons blue">error_outline</i>
                        <p>패스워드 변경</p>
                        <ul class='inputs' v-if="this.mode === 'chpw'">
                            <form>
                            <li>
                                <input type='password' id='reqpassword' placeholder='변경하실 패스워드'>
                            </li>
                            <li>
                                <input type='password' id='reqpassword_re' placeholder='변경하실 패스워드 확인'>
                            </li>
                            </form>
                        </ul>
                        <ul class='inputs' v-else-if="this.mode === 'cflag'">
                            <form>
                            <li>
                                <select disabled>
                                    <option>배정팀(비활성화)</option>
                                </select>
                            </li>
                            <li>
                         
                                <select>
                                    <option>배정할 상담사</option>
                                </select>
                            </li>
                         
                            </form>
                        </ul>
                    </div>

                    <div class="modal_foot">
                        <span class="b_blue" @click='PostData' v-if="mode === 'chpw'">확인</span>
                        <span class="b_blue" @click=' shareData' v-else-if="mode === 'cflag'">확인</span>
                        <span v-on:click='ModalClose' class="b_sgrey">취소</span>
                    </div>
                </div>
            </div>`,
    data() {
        return {
            idx: null,
            Data: null,
            mode: null
        }
    },
    created() {
        eventBus.$on('changePw', (Data) => {
            console.log('패스워드 변경')
            this.mode = 'chpw';
        })

        eventBus.$on('shareCflag', (Data) => {
            console.log('상담사배정')
            this.mode = 'cflag';
        })


    },
  
    methods: {
        ModalClose() {
            const Modal = document.getElementById('modal-etc')
            Modal.style.opacity = '0';

            setTimeout(() => {
                Modal.style.display = 'none';
            }, 100);
        },
        shareData(){

        },
        PostData(a) {
            const reqPassword = document.getElementById('reqpassword')
            const reqPasswordRe = document.getElementById('reqpassword_re')
            if (reqPassword.value == reqPasswordRe.value) {
                console.log('일치2')
            } else {
                console.log('불일치')
            }
            // if(this.mode == 'user'){
            //     eventBus.$on('idx',(Data)=>{
            //         this.Data = Data.Data
            //     })
            // }
        },

    }
}

export default etcModal;
2