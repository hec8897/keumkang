import ListNumber from '../../glc/list-numbering.js';
import eventBus from '../../glc/eventbus.js'


const shareConsulView = {
    template: `
        <div class="con_wrap">
        <div class='content consul_bord'>
            <h2>배정된상담신청</h2>
        <div class='table_wrap consul_wrap'>
                <div class='filters'>
                    <span>배정자료</span><b>{{this.results.length}}건</b>
                    <select v-on:change="searchCate($event)">
                        <option value='전체'>전체</option>
                        <option value='삼성'>삼성</option>
                        <option value='천안'>천안</option>
                        <option value='부동산'>부동산</option>
                    </select>
                </div>
                <table class='consul_tb'>
                    <thead>
                        <tr>
                            <td></td>
                            <td>번호</td>
                            <td>분류</td>
                            <td>고객명</td>
                            <td>전화번호</td>
                            <td>소속</td>
                            <td>담당</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='(result,i) in results' v-if='i < limit && i >= start'>
                            <td><input type="checkbox" id="checkbox_1" value="" /></td>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{i+1}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.cate}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.reqName}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.reqPhone}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.Class}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.Cflag}}</router-link>
                        </tr>
                    </tbody>
                </table>
                <list-number v-bind:nowpage = 'this.limit-10' v-bind:DataLength='Math.ceil((this.results.length)/10)'></list-number>
            </div>
            <div>
            </div>
        </div>
    </div>`,
    components: {
        'list-number': ListNumber,
    },
    data() {
        return {
            lists: Array,
            results: Array,
            idx: sessionStorage.idx,
            start: 0,
            limit: 10
        }
    },

    created() {
        const baseURI = 'api/getdata.consult.php';
        let Data = {
            Cflag: sessionStorage.name,
            Class: sessionStorage.Class
        }
        axios.post(`${baseURI}`, {
                Mode:'normalList',
                Data
            })
            .then((result) => {
                if (result.data.phpResult == 'ok') {
                    this.lists = result.data.result
                    this.results = this.lists;
                } else {
                    this.lists = [{
                            idx: 0,
                            cate: '삼성',
                            reqName: '개발자',
                            reqPhone: '01023866487',
                            Class: "금강",
                            Cflag: '김다우'
                        },
                        {
                            idx: 0,
                            cate: '삼성',
                            reqName: '개발자',
                            reqPhone: '01023866487',
                            Class: "금강",
                            Cflag: '김다우'
                        }
                    ]
                }
            })
            .catch(err => console.log('Login: ', err));


        // db에서 가져온데이터를 this.lists에 담아야함


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

export default shareConsulView;