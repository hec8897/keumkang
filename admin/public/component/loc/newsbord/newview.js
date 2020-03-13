import SaveModal from '../../glc/save-modal.js';
import DelteModal from '../../glc/del-modal.js';
import eventBus from '../../glc/eventbus.js';
import router from '../../router'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import CKEditor from 'ckeditor4-vue';

Vue.use(CKEditor);

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
                    <input type='text' v-if="id === 'new' || list.writer === ''" placeholder='작성자' id='writer'/>
                    <input type='text' v-else v-bind:value='list.writer' id='writer'/>
                </li>
                <li><h5>분류</h5></li>
                <li class='harf'>
                    <select v-if="id === 'new' || list.cate === ''" id='standard'>
                        <option value=''>분류</option>
                        <option value='삼성'>삼성</option>
                        <option value='천안'>천안</option>
                        <option value='부동산'>부동산</option>
                    </select>
                    <select v-else id='standard'>
                        <option v-if="list.cate === ''" value='' selected>분류</option>
                        <option v-else value=''>분류</option>

                        <option v-if="list.cate === '삼성'" value='삼성' selected>삼성</option>
                        <option v-else value='삼성'>삼성</option>

                        <option v-if="list.cate === '천안'" value='천안' selected>천안</option>
                        <option v-else value='천안'>천안</option>

                        <option v-if="list.cate === '부동산'" value='부동산' selected>부동산</option>
                        <option v-else value='부동산'>부동산</option>

            

                    </select>
                </li>
                <li><h5>제목</h5></li>
                <li>
                    <input type='text' v-if="id === 'new'" value='' placeholder='제목을 입력해주세요' id='title'/>
                    <input type='text' v-else v-bind:value='list.title' id='title'/>
                </li>
                <li><h5>부제목</h5></li>
                <li>
                    <input type='text' v-if="id === 'new'" value='' placeholder='부제목을 입력해주세요' id='sub_title'/>
                    <input type='text' v-else v-bind:value='list.subTitle' id='sub_title'/>
                </li>
                <li><h5>링크</h5></li>
                <li>
                    <input type='text' v-if="id === 'new'" value='' placeholder='바로가기 링크주소를 입력해주세요' id='link'/>
                    <input type='text' v-else v-bind:value='list.link' id='link'/>
                </li>
                <li><h5>대표이미지</h5></li>
                <li>
                <div class="input-file" v-if="id ==='new' || list.img === '' || list.img === 'none.jpg'">
                    <input type="text" readonly="readonly" class="file-name" id='file_input' placeholder='2MB 이내 파일로 업로드해주세요'/> 
                    <label for="upload01" class="file-label">파일 업로드</label> 
                    <input type="file" name="" id="upload01" class="file-upload" ref="mainimg" @change='fileChange'/>
                </div>

                <div class="input-file" v-else>
                    <a v-bind:href="'news/main/'+list.img" target='blank'>이미지보기</a>
                    <label for="upload01" class="file-label b_red" @click="OpenDelteModal(list.img,'NewsImg')">
                        파일 삭제
                    </label>
                </div>
                </li>
                <li><h5>내용</h5></li>
                <li>
                    <!-- <textarea name="content" id="editor"></textarea> -->
                    <ckeditor type="classic" v-model="editorData" :config="editorConfig"></ckeditor>
                    <!-- <iframe src="summernote.html" id='summernote_iframe'></iframe> -->
                </li>
            </ul>
            </div>

            <div class="btn_wrap">
                <span class="b_red" v-if="id == 'new'" v-on:click="OpenDelteModal(0,'new_news')">삭제</span>
                <span class="b_red" v-else v-on:click="OpenDelteModal(list.idx,'delte_news')">삭제</span>
                <span class="b_blue" v-if="id === 'new'" v-on:click="PostData('new')">등록</span>
                <span class="b_blue" v-else v-on:click="PostData('update')">수정</span>
                <span class="b_sgrey" v-on:click="backPage">목록</span>
            </div>

        </div>
    </div>`,
    components: {
        'save-modal': SaveModal,
        'delte-modal': DelteModal,
        'ckeditor': CKEditor.component
    },
    data() {
        return {
            idx: '',
            list: '',
            descImgArray: '',
            refFile: '',
            editorData: '<p>Content of the editor.</p>',
            editors: {
                // classic: ClassicEditor
            },
            removePlugins: 'image2',
            editorConfig: {
                extraPlugins: 'image2,uploadimage,colorbutton,font',
                language: 'ko',
                filebrowserImageUploadUrl: 'api/test.php?command=QuickUpload&type=Files',
                uploadUrl: 'api/test.php?command=QuickUpload&type=Files',
                format_tags: 'p;h1;h2;h3;pre',
                removeDialogTabs: 'image:advanced;link:advanced',
                height: 650
            }
        }
    },
    created() {
        this.fileUploderStyle()
        if (this.id != 'new') {
            this.getData()
        }
    },
    mounted() {

    },
    methods: {
        PostData(mode) {
            const sumNote = document.getElementById('summernote_iframe').contentWindow.document.getElementById("summernote");
            const sumNoteImgs = $('#summernote_iframe').get(0).contentWindow.ImgArray;

            const Wirte = document.getElementById('writer');
            const Standard = document.getElementById('standard');
            const title = document.getElementById('title');
            const subTitle = document.getElementById('sub_title');

            const link = document.getElementById('link');

            const mainImg = this.refFile;
            const noteDescImg = sumNoteImgs;
            const noteDesc = sumNote.value

            if (Wirte.value == '') {
                alert('작성자를 입력해주세요')
            } else if (Standard.value == "") {
                alert('분류를 입력해주세요')
            } else {
                this.OpenSaveModal(mode, 'new')

                let idx = this.id;

                eventBus.$on('newUpload', function () {
                    let InsertData = new FormData;
                    InsertData.append('mode', mode)
                    InsertData.append('idx', idx)
                    InsertData.append('wirter', Wirte.value)
                    InsertData.append('title', title.value)
                    InsertData.append('sub_title', subTitle.value)

                    InsertData.append('standard', Standard.value)
                    InsertData.append('link', link.value)

                    InsertData.append('mainImg', mainImg)
                    InsertData.append('noteDescImg', noteDescImg)
                    InsertData.append('noteDesc', noteDesc)

                    const baseURI = 'api/news.save.fn.php'
                    axios.post(`${baseURI}`,
                            InsertData
                        )
                        .then((result) => {
                            if (result.data.phpResult == 'ok') {
                                if (result.data.mode == 'new') {
                                    eventBus.$emit('updateNews', 'ok')
                                    router.push({
                                        name: 'newbord',
                                        path: '/newsbord',
                                    })
                                    location.reload()
                                } else {
                                    location.reload()
                                }
                            } else {
                                alert('다시 시도 해주세요')
                            }
                        })
                        .catch(err => console.log('Login: ', err));
                })
            }
        },
        getData() {
            const baseURI = 'api/getdata.news.php';
            axios.post(`${baseURI}`, {
                    idx: this.id,
                    mode: 'view'
                })
                .then((result) => {
                    if (result.data.phpResult == 'ok') {
                        console.log(result)

                        this.list = result.data.result[0]
                        let DescImg = this.list.descImg.split(',')
                        $('#summernote_iframe').load(function () {
                            $('#summernote_iframe').get(0).contentWindow.InsertDesc(result.data.result[0].desc)
                            $('#summernote_iframe').get(0).contentWindow.ImgArray = DescImg

                        })
                    } else {
                        this.list = [{
                            idx: 0,
                            writer: "개발자",
                            img: "",
                            link: 'http://123213',
                            title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                            subTitle: '부제목 천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                            join: 340,
                            cate: "천안",
                            desc: "",
                            descImg: ""
                        }]
                    }
                })
                .catch(err => console.log('Login: ', err));
        },
        fileChange() {
            const File = this.$refs.mainimg.files[0]
            const FileInput = document.getElementById('file_input');
            if (File.size > 1000000) {
                alert('파일사이즈가 너무 큽니다.')
                FileInput.value = ''
            } else if (File.type != 'image/png' && File.type != 'image/jpeg') {
                alert('지원하지 않는파일형식입니다.')
                FileInput.value = ''
            } else {
                this.refFile = File
                FileInput.value = File.name
            }
        },
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
                            // $btnUpload.on('change', function () {
                            //     var $target = $(this),
                            //         fileName = $target.val(),
                            //         $fileText = $target.siblings('.file-name');
                            //     $fileText.val(fileName);
                            // })
                            $btnUpload.on('focusin focusout',
                                function (e) {
                                    e.type == 'focusin' ? $label.addClass('file-focus') : $label.removeClass('file-focus');
                                })
                        })
                }
            })(jQuery);
        },
        OpenSaveModal(Data, mode) {
            const Modal = document.getElementById('modal-alert')
            Modal.style.display = 'block';
            setTimeout(() => {
                Modal.style.opacity = '1';
            }, 100);

            eventBus.$emit(mode, Data)
        },
        OpenDelteModal(Data, mode) {
            const Modal = document.getElementById('modal-del')
            Modal.style.display = 'block';
            setTimeout(() => {
                Modal.style.opacity = '1';
            }, 100);
            if (mode == 'new_news') {
                const sumNoteImgs = $('#summernote_iframe').get(0).contentWindow.ImgArray
                eventBus.$emit(mode, sumNoteImgs)
            } else if (mode == 'delte_news') {
                let DescImg = this.list.descImg
                let PostData = {
                    mainImg: this.list.img,
                    descImg: DescImg.split(","),
                    idx: this.id
                }
                eventBus.$emit(mode, PostData)
            } else {
                let PostData = {
                    Data,
                    idx: this.id
                }
                eventBus.$emit(mode, PostData)
            }
        },
        backPage() {
            const Modal = document.getElementById('modal-alert')
            Modal.style.display = 'block';
            setTimeout(() => {
                Modal.style.opacity = '1';
            }, 100);

            eventBus.$emit('backpage', '0')
        }
    }
}

export default NewsView;