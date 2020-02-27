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
                <td>시공일자</td>

            </tr>
        </thead>
        <tbody>
            <tr class='new_view_tr'v-for='(result,i) in results' v-if='i < limit && i >= start'>
                <td><input type='checkbox' @click='checkboxEv(event,result.idx)' class='checkbox_1'></td>
                <td>{{i+1}}</td>
                <td>{{result.cate}}</td>
                <td>
                    <img v-bind:src='result.img' v-if="result.img!=''" alt='미리보기'>
                    <img src='images/dev_img2.png' v-else alt='미리보기'>
                </td>
                <td>{{result.title}}</td>
                <td>{{result.Date}}</td>

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
        lists: [],
        results: Array,
        start: 0,
        limit: 10,
        SelectData:[]
    }
},
created(){
   this.getData()
   eventBus.$on('spotUpdate',(Data)=>{
    this.getData()
   })
},
mounted() {
    eventBus.$on('NextPage', (Data) => {
        this.start = Data * 10;
        this.limit = (Data * 10) + 10

        this.SelectData = [];

        const CheckBox =document.querySelectorAll('.checkbox_1');
        // 체크박스 초기화
        for(let i = 0; i< CheckBox.length; i++){
            CheckBox[i].checked = false
        }

    })
},
methods:{
    getData(){
        const baseURI = 'api/getdata.spot.php';
        axios.post(`${baseURI}`,{} 
        )
        .then((result) => {
            if(result.data.phpResult == 'ok'){
                this.lists = result.data.result
                this.results = this.lists
            }
            else{
                this.lists = [
                    {
                        idx: 0,
                        title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                        cate: "삼성",
                        img: "images/dev_img.png",
                        Date:""
            
                    },
                    {
                        idx: 1,
                        title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                        cate: "삼성",
                        img: "images/dev_img.png",
                        Date:""
                    }
                ]
                this.results = this.lists
    
            }
            eventBus.$emit('UpdateList', {
                DataLength: Math.ceil((this.results.length) / 10),
                nowpage: this.limit - 10
            })

        })
        .catch(err => console.log('Login: ', err));
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