import ListNumber from '../../glc/list-numbering.js';
import etcModal from '../../glc/etc-modal'
import eventBus from '../../glc/eventbus.js'

const ConsulView = {
    template: `<div class='table_wrap consul_wrap'>
                <share-modal></share-modal>
                <div class='filters'>
                    <span>상담신청 건</span><b>{{this.results.length}}건</b>
                    <select v-on:change="searchCate($event)">
                        <option value='전체'>전체</option>
                        <option value='삼성'>삼성</option>
                        <option value='천안'>천안</option>
                        <option value='부동산'>부동산</option>
                    </select>
                    <span class='share_btn b_blue' @click='OpenEtcModal'>상담사 배정</span>

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
                            <td><input type="checkbox" id="checkbox_1" v-on:click='SelectData($event,result.idx)' value="" /></td>
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
            </div>`,
    components: {
        'list-number': ListNumber,
        'share-modal': etcModal
    },
    data() {
        return {
            lists: Array,
            results: Array,
            start: 0,
            limit: 10,
            SelectDataArray:[]
        }
    },

    created() {
        const baseURI = 'api/getdata.consult.php';
        axios.post(`${baseURI}`, {
            })
            .then((result) => {
                    if (result.data.phpResult == 'ok') {
                        this.lists = result.data.result
                        this.results = this.lists;
                    }
            })
            .catch(err => console.log('Login: ', err));
        // this.lists = [
        //     {
        //         idx:0,
        //         cate:'삼성',
        //         reqName:'개발자',
        //         reqPhone:'01023866487',
        //         Class:"금강",
        //         Cflag:'김다우'
        //     },
        //     {
        //         idx:1,
        //         cate:'삼성',
        //         reqName:'개발자',
        //         reqPhone:'01023866487',
        //         Class:"금강",
        //         Cflag:'김다우'
        //     }
        // ]
    },
    mounted() {
        // this.results = this.lists;
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
        SelectData(event,Data){
            if(event.target.checked == true){
                this.SelectDataArray.push(Data)
            }else{
                this.SelectDataArray.splice(this.SelectDataArray.indexOf(Data),1);
            }
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
        },
        OpenEtcModal() {
            if(this.SelectDataArray.length < 1){
                alert('자료를 선택해주세요')

            }
            else{
                const Modal = document.getElementById('modal-etc')
                Modal.style.display = 'block';
                setTimeout(() => {
                    Modal.style.opacity = '1';
                }, 100);
                eventBus.$emit('shareCflag', this.SelectDataArray)
            }
        }

    }
}

export default ConsulView;