import ListNumber from '../../glc/list-numbering.js';
import eventBus from '../../glc/eventbus.js'

const newsTable = {
    template: `<div class='table_wrap'>
                <div class='filters'>
                    <span>총 게시물 수</span><b>{{this.results.length}}건</b>
                    <select v-on:change="searchCate($event)">
                        <option value='전체'>전체</option>
                        <option value='삼성'>삼성</option>
                        <option value='천안'>천안</option>
                        <option value='부동산'>부동산</option>
                    </select>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>번호</td>
                            <td>분류</td>
                            <td>작성일자</td>
                            <td>제목</td>
                            <td>조회</td>
                        </tr>
                    </thead>
                    <tbody>
                        <router-link class='new_view_tr' tag='tr' v-for='(result,i) in results' v-bind:to = "'/newsbord/newbordview/'+result.idx" v-if='i < limit && i >= start'>
                            <td>{{i+1}}</td>
                            <td>{{result.cate}}</td>
                            <td>{{result.insertdate}}</td>
                            <td>{{result.title}}</td>
                            <td>{{result.join}}</td>
                        </router-link>
                    </tbody>
                </table>
                <list-number v-bind:nowpage = 'this.limit-10' v-bind:DataLength='Math.ceil((this.results.length)/10)'></list-number>
                <div class="foot_btn">
                    <router-link to='newsbord/newbordview/new' class="b_add b_blue">등록</router-link>
                </div>

            </div>`,
    components: {
        'list-number': ListNumber,
    },
    data() {
        return {
            lists: Array,
            results: Array,
            start: 0,
            limit: 10
        }
    },
    created() {
        this.getData()
        eventBus.$on('updateNews', ()=>{
            this.getData()
        })

    },
    mounted() {
        this.results = this.lists;
        eventBus.$emit('UpdateList', {
            DataLength: Math.ceil((this.results.length) / 10),
            nowpage: this.limit - 10
        })
        eventBus.$on('NextPage', (Data) => {
            this.start = Data * 10;
            this.limit = (Data * 10) + 10
        })
    },
    methods: {
        getData(){
            const baseURI = 'api/getdata.news.php';
            axios.get(`${baseURI}`
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
                            img: "",
                            title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                            join: 340,
                            cate: "삼성",
                            img: "images/dev_img.png"
                        }]
                        
                    this.results = this.lists
                }
                eventBus.$emit('UpdateList', {
                    DataLength: Math.ceil((this.results.length) / 10),
                    nowpage: this.limit - 10
                })
    
            })
            .catch(err => console.log('Login: ', err));
        },
        searchCate(event) {
            const lists = this.lists;
            const targetData = event.target.value;
            const result = lists.filter((x) => {
                return x.cate == targetData
            })
            this.results = result;
            if (targetData == '전체') {
                this.results = this.lists;
            }
            this.start = 0;
            this.limit = 10;
            eventBus.$emit('UpdateList', {
                DataLength: Math.ceil((this.results.length) / 10),
                nowpage: this.limit - 10
            })
        }

    }
}

export default newsTable;