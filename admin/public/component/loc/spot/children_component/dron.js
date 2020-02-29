import DelteModal from '../../../glc/del-modal.js';
import saveModal from '../../../glc/save-modal.js';
import eventBus from '../../../glc/eventbus.js';

const Dron = {
    template: `<div class='mp4_upload'>
                <del-modal></del-modal>
                <save-modal></save-modal>
                <h3>드론영상 업로드</h3>
                    <div class="input-file" v-if="mp4FileRoute == ''">
                        <label for="upload01" class="file-label">파일 선택</label> 
                            <input type="text" readonly="readonly" class="file-name" placeholder='홈페이지에 표시될 드론영상'/> 
                            <input type="file" id="upload01" class="file-upload" ref="up_mp4" @change='OpenSaveModal'/>
                    </div>
                    <div class="input-file" v-else>
                        <a href='mp4/dron.mp4' target='blank'>파일보기</a>
                        <label for="upload01" class="file-label b_red" @click='OpenDelteModal'>
                            파일 삭제
                        </label>
                    </div>
               </div>`,
    created() {
        this.fileUploderStyle();
        this.getData();
        
        eventBus.$on('upload_mp4',(Data)=>{
            console.log(this.refMp4)
            this.postMp4Data()
           })
        eventBus.$on('Update',(Data)=>{
            this.getData()
           })
    },
    components:{
        'del-modal':DelteModal,
        'save-modal':saveModal
    },
    data() {
        return {
            mp4FileRoute: '',
            refMp4:''
        }
    },
    methods: {
        fileUploderStyle() {
            (function ($) {
                var $fileBox = null;
                $(function () {
                    init();
                })

                function init() {
                    $fileBox = $('.input-file');
                    fileLoad();
                }

                function fileLoad() {
                    $.each($fileBox,
                        function (ids) {
                            var $this = $fileBox.eq(ids),
                                $btnUpload = $this.find('[type="file"]'),
                                $label = $this.find('.file-label');
                            $btnUpload.on('change', function () {
                                var $target = $(this),
                                    fileName = $target.val(),
                                    $fileText = $target.siblings('.file-name');
                                    $fileText.val(fileName);
                                    // Dron.methods.OpenSaveModal('','mp4up')
                            })
                            $btnUpload.on('focusin focusout',
                                function (e) {
                                    e.type == 'focusin' ? $label.addClass('file-focus') : $label.removeClass('file-focus');
                                })
                        })
                }
            })(jQuery);
        },
        OpenSaveModal() {
            const File = this.$refs.up_mp4.files[0]
            if(File.size > 50000000){
                alert('파일사이즈가 너무 큽니다.(4MB 이내로 올려주세요)')
            }
            else if(File.type !='video/mp4' && File.type !='video/avi'){
                alert('지원하지 않는파일형식입니다.(mp4,avi형식만지원)')
            }
            else{
                const Modal = document.getElementById('modal-alert')
                Modal.style.display = 'block';
                setTimeout(() => {
                    Modal.style.opacity = '1';
                }, 100);
                this.refMp4 = File
                eventBus.$emit('mp4','ok')
        }

        },
        OpenDelteModal() {
            const Modal = document.getElementById('modal-del')
            Modal.style.display = 'block';
            setTimeout(() => {
                Modal.style.opacity = '1';
            }, 100);

            eventBus.$emit('del_mp4',this.mp4FileRoute)
        },
        DelteFile(FileName){
            const baseURI = 'api/get.mp4.php';
            axios.post(`${baseURI}`,{FileName} 
            )
            .then((result) => {
                console.log(result)
            })
            .catch(err => console.log('Login: ', err));
        },
        postMp4Data(){
            let InsertData = new FormData()
            InsertData.append('mode','uploadmp4')
            InsertData.append('mp4',this.refMp4)
            console.log(this.refMp4)
            const baseURI = 'api/mp4.upload.php';
            axios.post(`${baseURI}`,InsertData
            )
            .then((result) => {
                if (result.data.phpResult == 'ok') {
                    location.reload()
                }
                else{
                    alert('등록에 실패하였습니다')
                }
            })
            .catch(err => console.log('Login: ', err));
        },
        getData(){
            const baseURI = 'api/getdata.mp4.php';
            axios.get(`${baseURI}`,{} 
            )
            .then((result) => {
                console.log(result)
                // if(result.data.result !=null ){
                //     this.mp4FileRoute = result.data.result
                // }
                // else{
                //     this.mp4FileRoute = ''
                // }
            })
            .catch(err => console.log('Login: ', err));
        },
    }

}
export default Dron;