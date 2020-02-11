const NewsView = {
    props: ['id'],
    template: `
    <div class="con_wrap">
        <div class='content new_bord'>
            <h2 v-if = "id ==='new'">보도 자료 등록</h2>
            <h2 v-else>보도 자료</h2>
            <div class="panel mody">
            <ul>
                <li><h5>작성자</h5></li>
                <li class='harf'>
                    <input type='text'/>
                </li>
                <li><h5>분류</h5></li>
                <li class='harf'>
                    <select>
                        <option>분류</option>
                        <option>삼성</option>
                        <option>천안</option>
                        <option>부동산</option>
                        <option>기타</option>
                    </select>
                </li>
                <li><h5>제목</h5></li>
                <li>
                    <input type='text'/>
                </li>
                <li><h5>링크</h5></li>
                <li>
                    <input type='text'/>
                </li>
                <li><h5>대표이미지</h5></li>
                <li>
                <div class="input-file"> <input type="text" readonly="readonly" class="file-name" /> <label for="upload01" class="file-label">파일 업로드</label> <input type="file" name="" id="upload01" class="file-upload" /> </div>
                </li>
                <li><h5>내용</h5></li>
                <li>
                    <textarea>
                        에디터활용해야함... 어떤거로할지 고민
                    </textarea>
                </li>
            </ul>
            </div>

            <div class="btn_wrap">
                <span class="b_red" v-if="id != 'new'">삭제</span>
                <span class="b_blue" v-if="id === 'new'">등록</span>
                <span class="b_blue" v-else>수정</span>
                <router-link tag='span' to='/newsbord' class="b_sgrey">목록</span>
            </div>

        </div>
    </div>`,
    created(){
        this.fileUploderStyle()

    },
    methods:{
        fileUploderStyle(){
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
                        function (idx) {
                            var $this = $fileBox.eq(idx),
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
        }
    }
}

export default NewsView;