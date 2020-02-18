import SaveModal from '../../glc/save-modal.js';
import DelteModal from '../../glc/del-modal.js';
import eventBus from '../../glc/eventbus.js';

const NewsView = {
    props: ['id'],
    template: `
    <div class="con_wrap">
        <save-modal></save-modal>
        <delte-modal></delte-modal>
        <div class='content new_bord'>
            <h2 v-if = "id ==='new'">보도 자료 등록</h2>
            <h2 v-else>보도 자료</h2>
            <div class="panel mody">
            <ul>
                <li><h5>작성자</h5></li>
                <li class='harf'>
                    <input type='text' v-if="id === 'new' || list.writer === ''"/>
                    <input type='text' v-else v-bind:value='list.writer'/>
                </li>
                <li><h5>분류</h5></li>
                <li class='harf'>
                    <select v-if="id === 'new' || list.cate === ''">
                        <option value=''>분류</option>
                        <option value='삼성'>삼성</option>
                        <option value='천안'>천안</option>
                        <option value='부동산'>부동산</option>
                        <option value='기타'>기타</option>
                    </select>
                    <select v-else>
                        <option v-if="list.cate === ''" value='' selected>분류</option>
                        <option v-else value=''>분류</option>

                        <option v-if="list.cate === '삼성'" value='삼성' selected>삼성</option>
                        <option v-else value='삼성'>삼성</option>

                        <option v-if="list.cate === '천안'" value='천안' selected>천안</option>
                        <option v-else value='천안'>천안</option>

                        <option v-if="list.cate === '부동산'" value='부동산' selected>부동산</option>
                        <option v-else value='부동산'>부동산</option>

                        <option v-if="list.cate === '기타'" value='기타' selected>기타</option>
                        <option v-else value='기타'>기타</option>

                    </select>
                </li>
                <li><h5>제목</h5></li>
                <li>
                    <input type='text' v-if="id === 'new'" value=''/>
                    <input type='text' v-else v-bind:value='list.title'/>
                </li>
                <li><h5>링크</h5></li>
                <li>
                    <input type='text' v-if="id === 'new'" value=''/>
                    <input type='text' v-else v-bind:value='list.link'/>
                </li>
                <li><h5>대표이미지</h5></li>
                <li>
                <div class="input-file" v-if="id ==='new' || list.img === ''">
                    <input type="text" readonly="readonly" class="file-name" /> 
                    <label for="upload01" class="file-label">파일 업로드</label> 
                    <input type="file" name="" id="upload01" class="file-upload" ref="mainimg" />
                </div>

                <div class="input-file" v-else>
                    <a href='list.img' target='blank'>{{list.img}}</a>
                    <label for="upload01" class="file-label b_red" v-on:click="OpenDelteModal(list.idx,'NewsImg')">
                        파일 삭제
                    </label>
                </div>
                </li>
                <li><h5>내용</h5></li>
                <li>
                    <textarea>에디터활용해야함... 어떤거로할지</textarea>
                </li>
            </ul>
            </div>

            <div class="btn_wrap">
                <span class="b_red" v-if="id != 'new'" v-on:click="OpenDelteModal(list.idx,'News')">삭제</span>
                <span class="b_blue" v-if="id === 'new'" v-on:click="OpenSaveModal('new','new')">등록</span>
                <span class="b_blue" v-else v-on:click="OpenSaveModal(list.idx,'updateNews')">수정</span>
                <router-link tag='span' to='/newsbord' class="b_sgrey">목록</span>
            </div>

        </div>
    </div>`,
    components:{
        'save-modal':SaveModal,
        'delte-modal':DelteModal
    },
    data() {
        return {
            list: {
                idx: 0,
                writer:"개발자",
                img: "",
                link:'http://123213',
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "천안",
                desc:""
            }

        }
    },
    created() {
        this.fileUploderStyle()

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
            eventBus.$emit(mode,Data)
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

export default NewsView;