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
                            <input type="file" id="upload01" class="file-upload" ref="mainimg" />
                    </div>
                    
                    <div class="input-file" v-else>
                        <a href='' target='blank'>{{mp4FileRoute}}</a>
                        <label for="upload01" class="file-label b_red" @click='OpenDelteModal()'>
                            파일 삭제
                        </label>
                    </div>
               </div>`,
    created() {
        this.fileUploderStyle()
    },
    components:{
        'del-modal':DelteModal,
        'save-modal':saveModal
    },
    data() {
        return {
            mp4FileRoute: ''
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
                                    Dron.methods.OpenSaveModal('','mp4up')
                            })
                            $btnUpload.on('focusin focusout',
                                function (e) {
                                    e.type == 'focusin' ? $label.addClass('file-focus') : $label.removeClass('file-focus');
                                })
                        })
                }
            })(jQuery);
        },
        OpenSaveModal(Data,mode) {
            const Modal = document.getElementById('modal-alert')
            Modal.style.display = 'block';
            setTimeout(() => {
                Modal.style.opacity = '1';
            }, 100);
            eventBus.$emit('mp4',Data)
        },
        OpenDelteModal(Data,mode) {
            const Modal = document.getElementById('modal-del')
            Modal.style.display = 'block';
            setTimeout(() => {
                Modal.style.opacity = '1';
            }, 100);

            eventBus.$emit(mode,Data)
        }
    }

}
export default Dron;