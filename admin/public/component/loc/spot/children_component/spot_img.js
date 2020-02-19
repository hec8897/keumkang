import DelteModal from '../../../glc/del-modal.js';
import etcModal from '../../../glc/etc-modal.js';
import eventBus from '../../../glc/eventbus.js';
import listNumber from '../../../glc/list-numbering';

const spotImg = {
    template: `<div class='table_wrap'>
        <save-modal></save-modal>
        <del-modal></del-modal>
    <div class='filters'>
        <span>총 게시물수</span><b>1건</b>
    </div>
    <table>
        <thead>
            <tr>
                <td></td>
                <td>번호</td>
                <td>분류</td>
                <td>미리보기</td>
                <td>제목</td>
            </tr>
        </thead>
        <tbody>
            <tr class='new_view_tr'v-for='(result,i) in results' v-if='i < limit && i >= start' @click='prevImg(event)'>
                <td><input type='checkbox' @click='checkboxEv(event,result.idx)'></td>
                <td>{{i+1}}</td>
                <td>{{result.cate}}</td>
                <td>
                    <img v-bind:src='result.img' v-if="result.img!=''" alt='미리보기'>
                    <img src='images/dev_img2.png' v-else alt='미리보기'>
                </td>
                <td>{{result.title}}</td>
        </tr>
        </tbody>
    </table>
    <list-number v-bind:nowpage = 'this.limit-10' v-bind:DataLength='Math.ceil((this.results.length)/10)'></list-number>
    <div class="foot_btn">
        <span @click='OpenEtcModal' class="b_add b_blue">등록</span>
        <span @click='OpenDelModal' class="b_add b_red">삭제</span>
    </div>


</div>`,
components:{
    'list-number':listNumber,
    'save-modal':etcModal,
    'del-modal':DelteModal
},
data(){
    return {
        lists: Array,
        results: Array,
        start: 0,
        limit: 10,
        SelectData:[]
    }
},
created(){
    this.lists = [
        {
            idx: 0,
            img: "",
            title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
            join: 340,
            cate: "삼성",
            img: "images/dev_img.png"

        },
        {
            idx: 1,
            img: "",
            title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
            join: 340,
            cate: "삼성",
            img: "images/dev_img.png"

        }
    ]
},
mounted(){
    this.results = this.lists
},
methods:{
    prevImg(){
        alert(1)
    },
    checkboxEv(event,idx){
        event.stopPropagation();
        if(event.target.checked == true){
            this.SelectData.push(idx)
        }
        else{
            this.SelectData.splice(this.SelectData.indexOf(idx),1);
        }
    },
    OpenEtcModal() {
            const Modal = document.getElementById('modal-etc')
            Modal.style.display = 'block';
            setTimeout(() => {
                Modal.style.opacity = '1';
            }, 100);
            eventBus.$emit('spotImg', 0)
    },
    OpenDelModal() {
        if(this.SelectData.length>0){
            const Modal = document.getElementById('modal-del')
            Modal.style.display = 'block';
            setTimeout(() => {
                Modal.style.opacity = '1';
            }, 100);
            eventBus.$emit('spotImgDel', this.SelectData)
        }
        else{
            alert('삭제를원하는 목록을 선택해주세요')

        }
     
}
}


}
export default spotImg;