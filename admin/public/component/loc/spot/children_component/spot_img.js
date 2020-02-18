import DelteModal from '../../../glc/del-modal.js';
import saveModal from '../../../glc/save-modal.js';
import eventBus from '../../../glc/eventbus.js';
const spotImg = {
    template: `<div class='table_wrap'>
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
            <tr class='new_view_tr'v-for='(result,i) in results' v-if='i < limit && i >= start'>
                <td><input type='checkbox'></td>
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
        <a href='javascript:void()' class="b_add b_blue">등록</a>
    </div>

</div>`,
data(){

    return {
        lists: Array,
        results: Array,
        start: 0,
        limit: 10
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

        }
    ]
},
mounted(){
    this.results = this.lists
}


}
export default spotImg;