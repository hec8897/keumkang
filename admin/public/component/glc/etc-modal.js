import eventBus from './eventbus.js';

const etcModal = {
    template: `<div class="pop-window fade" id="modal-etc">
                <div class="alert">
                    <div class="alert_con">
                        <i class="material-icons blue">error_outline</i>
                        <p>{{ment}}</p>
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
                                <select disabled id='selectclass'>
                                    <option value='금강'>배정팀(비활성화)</option>
                                </select>
                            </li>
                            <li>
                                <select id='selectcflag'>
                                    <option value=''>상담사선택</option>
                                    <option value='none'>회수</option>
                                    <option v-for = 'list in lists' v-bind:value="list.userName">
                                    {{list.userName}}({{list.Class}})
                                    </option>
                                </select>
                            </li>
                            </form>
                        </ul>
                        <ul class='inputs' v-else-if="this.mode === 'spotImg'">
                            <form>
                            <li>
                                <input type='text' class='file_input' placeholder='현장사진 제목' id='reqtit'>
                            </li>
                            <li>
                                <input type='text' class='file_input' placeholder='시공일자 (ex 2020.01.01)' id='reqdate'>
                            </li>
                            <li>
                                <select id='reqstandard'>
                                    <option value="" disabled selected>분류</option>
                                    <option value='삼성'>삼성</option>
                                    <option value='천안'>천안,아산</option>
                                    <option value='부동산'>부동산</option>
                                </select>
                            </li>
                            <li>
                            <div class="input-file">
                            <label for="upload1" class="file-label">파일 선택</label> 
                            <input type="text" id='files_popup' readonly="readonly" class="file-name" placeholder='현장사진(1MB이내)'/> 
                            <input type="file" id="upload1" class="file-upload" ref="filed_photo" @change='fileChange($event.target.value)'/>
                             </div>
                            </li>
                         
                            </form>
                        </ul>
                    </div>

                    <div class="modal_foot">
                        <span class="b_blue" @click='PostData' v-if="mode === 'chpw'">확인</span>
                        <span class="b_blue" @click='shareData' v-else-if="mode === 'cflag'">확인</span>
                        <span class="b_blue" @click='uploadSpot' v-else-if="mode === 'spotImg'">확인</span>
                        <span v-on:click='ModalClose' class="b_sgrey">취소</span>
                    </div>
                </div>
            </div>`,
    data() {
        return {
            idx: null,
            Data: null,
            mode: null,
            lists: Array,
            SelectDatas: null,
            ment: String,
            refFile:null
        }
    },
    created() {
        this.getCflagData();
        this.lists = this.SelectDatas;
        eventBus.$on('changePw', (Data) => {
            this.idx = Data;
            this.mode = 'chpw';
            this.ment = '패스워드 변경'
        })
        eventBus.$on('shareCflag', (Data) => {
            this.mode = 'cflag';
            this.Data = Data;
            this.ment = '상담사 배정'
        })
        eventBus.$on('spotImg', (Data) => {
            this.mode = 'spotImg';
            this.Data = Data;
            this.ment = '현장사진 등록'
        })
    },
    methods: {
        ModalClose() {
            const inputs = document.querySelectorAll('input')
            for(let i = 0; i<inputs.length; i++){
                inputs[i].value=''
            }
            this.refFile = null;

            const Modal = document.getElementById('modal-etc')
            Modal.style.opacity = '0';
            setTimeout(() => {
                Modal.style.display = 'none';
            }, 100);
        },
        shareData() {
            const SelectClass = document.getElementById('selectclass');
            const SelectCflag = document.getElementById('selectcflag');
            if (SelectCflag.value == "") {
                alert('배정할 상담사를 선택해주세요')
            } else {
                let Data = {
                    mode: this.mode,
                    SelectIdx: this.Data,
                    Class: SelectClass.value,
                    cflag: SelectCflag.value
                }
                const baseURI = 'api/user_fn.php';
                axios.post(`${baseURI}`, {
                        Data
                    })
                    .then((result) => {
                        if (result.data.phpResult == 'ok') {
                            alert('변경되었습니다')
                            this.ModalClose();
                            location.reload();
                        } else {
                            alert('변경에 실패하였습니다')
                        }
                    })
                    .catch(err => console.log('Login: ', err));
            }

        },
        getCflagData() {
            const baseURI = 'api/getdata.user.php';
            axios.post(`${baseURI}`, {})
                .then((result) => {
                    if (result.data.phpResult == 'ok') {
                        this.lists = result.data.result;
                    }
                })
                .catch(err => console.log('Login: ', err));

        },
        fileChange(thisValue){
            const File =this.$refs.filed_photo.files[0] 
            if(File.size > 2000000){
                alert('파일사이즈가 너무 큽니다.')
            }
            else if(File.type !='image/png' && File.type !='image/jpeg'){
                alert('지원하지 않는파일형식입니다.')
            }
            else{
                const filesPopup = document.getElementById('files_popup')
                filesPopup.value = thisValue;
                this.refFile = File
            }
        },
        PostData() {
            const reqPassword = document.getElementById('reqpassword')
            const reqPasswordRe = document.getElementById('reqpassword_re')
            if (reqPassword.value.length > 8) {
                if (reqPassword.value == reqPasswordRe.value) {
                    const baseURI = 'api/user_fn.php';
                    let Data = {
                        mode: this.mode,
                        idx: this.idx,
                        ChPw: reqPassword.value
                    }
                    axios.post(`${baseURI}`, {
                            Data
                        })
                        .then((result) => {
                            if (result.data.phpResult == 'ok') {
                                alert('변경되었습니다')
                                this.ModalClose()
                            } else {
                                alert('변경에 실패하였습니다')
                            }
                        })
                        .catch(err => console.log('Login: ', err));
                } else {
                    alert('패스워드가 다릅니다')
                    reqPassword.focus();
                }
            } else {
                alert('패스워드는 9자이상 입니다')
            }
        },
        uploadSpot(){
            const reqTit = document.getElementById('reqtit')
            const reqDate = document.getElementById('reqdate')
            const reqStandard = document.getElementById('reqstandard')

            const File = this.refFile;

            if(File == null){
                alert('업로드할 파일은 선택해주세요')                
            }
            else if(reqTit.value == ""){
                alert('제목을 입력해주세요')    
                reqTit.focus()            
            }
            else if(reqDate.value == ""){
                alert('시공날짜를 선택해주세요')                
                reqDate.focus()
            }
            else if(reqStandard.value == ""){
                alert('분류를 선택해주세요')                
                reqStandard.focus()
            }
            else{
                const baseURI = 'api/spot.upload.php';

                let InsertData = new FormData();

                InsertData.append('reqtit',reqTit.value)
                InsertData.append('reqDate',reqDate.value)
                InsertData.append('reqStandard',reqStandard.value)
                InsertData.append('reqFile',File)


                axios.post(`${baseURI}`, 
                    InsertData
                    )
                    .then((result) => {
                        if(result.data.phpResult == 'ok'){
                            alert('등록되었습니다')
                            this.ModalClose()
                        }
                    })
                    .catch(err => console.log('Login: ', err));
            }
        }
    }
}

export default etcModal;