import DelteModal from '../../glc/del-modal.js';
import eventBus from '../../glc/eventbus.js';

const ConsulView = {
    props: ['idx'],
    template: `<div class="con_wrap">
            <div class='content'>
            <h2>상담신청</h2>
                    <delte-modal></delte-modal>
                    <div class="info_wrap">
                        <div class="order">
                            <table class='consul_tb'>
                            <tr>
                                    <th>분류</th>
                                    <td>{{list.cate}}</td>
                                </tr>
                                <tr>
                                    <th>상담신청일</th>
                                    <td>{{list.InsertDate}}</td>
                                </tr>
                                <tr>
                                    <th>성함</th>
                                    <td>{{list.reqName}}</td>
                                </tr>
                                <tr>
                                    <th>연락처</th>
                                    <td>{{list.reqPhone}}</td>
                                </tr>
                                <tr>
                                    <th>상담 내용</th>
                                    <td>{{list.reqMemo}}</td>
                                </tr>
                                <tr>
                                    <th>담당</th>
                                    <td>{{list.Class}}/{{list.Cflag}}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="btn_wrap">
                        <span class="b_red" v-on:click="OpenDelteModal(list.idx,'consul')">삭제</span>
                        <router-link v-if = "comcode>1" to="/cflag" class="b_sgrey" tag='span'>목록</router-link>
                        <router-link v-else to="/consul" class="b_sgrey" tag='span'>목록</router-link>


                    </div> 
                </div>
            </div>`,
    components: {
        'delte-modal': DelteModal
    },
    data() {
        return {
            list:Array,
            comcode:this.$store.state.comcode
        }
    },
    created() {
        console.log(this.comcode)
        const baseURI = 'api/getdata.consult.php';
        axios.post(`${baseURI}`, {
            idx:this.idx
            })
            .then((result) => {
                    if (result.data.phpResult == 'ok') {
                        this.list = result.data.result[0]
                    }
            })
            .catch(err => console.log('Login: ', err));
    },
    methods: {
        OpenDelteModal(Data, mode) {
            const Modal = document.getElementById('modal-del')
            Modal.style.display = 'block';
            setTimeout(() => {
                Modal.style.opacity = '1';
            }, 100);
            eventBus.$emit(mode, Data)
        }
        // GetData() {
        //     const baseURI = 'api/consul.data.php';
        //     axios.post(`${baseURI}`, {
        //             mode: 'list',
        //             idx: this.idx
        //         })
        //         .then((result) => {

        //             const ResultData = result.data.result[0]
        //             if (result.data.phpResult == 'ok') {
        //                 this.list = ResultData;
        //             }

        //         })
        //         .catch(err => console.log('Login: ', err));

        // }
    }
}

export default ConsulView;