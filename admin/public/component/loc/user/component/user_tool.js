import eventBus from '../../../glc/eventbus';
import DelteModal from '../../../glc/del-modal';
import etcModal from '../../../glc/etc-modal';
import saveModal from '../../../glc/save-modal';


const userTool = {
    props:['userData'],
    template:`<div class='user_tool'>
        <del-modal></del-modal>
        <etc-modal></etc-modal>
        <save-modal></save-modal>
        <h4>선택된데이터 </h4>
        <ul>
            <li>이름:  <span>{{list.userName}}</span></li>
            <li>연락처 <span>{{list.userPhone}}</span></li>
            <li>소속: <span>{{list.Class}}</span></li>
            <li>아이디: <span>{{list.userId}}</span></li>
            <li>상태: <span v-if="list.Activation === '1'">정상</span><span v-else-if ="list.Activation==='0'">비승인</span></li>

        </ul>
        <div class='tb_box'>
            <table>
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>고객명</td>
                        <td>연락처</td>
                        <td>분류</td>
                    </tr>
                </thead>
                <tbody>
         
                </tbody>
            </table>
        </div>
        <div class='btns'>
            <span class='b_blue'@click="OpenEtcModal(this.idx,'account_del')">패스워드 변경</span>

            <span class='b_red' v-if="list.Activation === '1'" @click="OpenDelteModal(list.idx,'account_beactive')">계정 접속 제한</span>
            <span class='b_blue' v-else-if ="list.Activation === '0'" @click="OpenSaveModal(list.idx,'account_use')">계정 접속 승인</span>

            <span class='b_red' @click="OpenDelteModal(this.idx,'account_del')">계정 삭제</span>

        </div>

    </div>`,
    components:{
        'del-modal':DelteModal,
        'etc-modal':etcModal,
        'save-modal':saveModal
    },
    data(){
        return{
            list:Array
        }
    },
    created(){
        eventBus.$on('GetUsertool', (Data)=>{
            this.list = Data
        })
    },
    mounted(){
    },
    methods:{
        OpenSaveModal(Data, mode) {
            if(this.list.length == 1){
                alert('계정을 선택해주세요')
            }
            else{
                const Modal = document.getElementById('modal-alert')
                Modal.style.display = 'block';
                setTimeout(() => {
                    Modal.style.opacity = '1';
                }, 100);
                eventBus.$emit(mode, Data)
            }
        },
        OpenDelteModal(Data, mode) {
            if(this.list.length == 1){
                alert('계정을 선택해주세요')
            }
            else{

                const Modal = document.getElementById('modal-del')
                Modal.style.display = 'block';
                setTimeout(() => {
                    Modal.style.opacity = '1';
                }, 100);
                eventBus.$emit(mode, Data)
            }
        },
        OpenEtcModal(Data) {
            if(this.list.length == 1){
                alert('계정을 선택해주세요')
            }
            else{
                const Modal = document.getElementById('modal-etc')
                Modal.style.display = 'block';
                setTimeout(() => {
                    Modal.style.opacity = '1';
                }, 100);
                eventBus.$emit('changePw', this.list.idx)
            }
        }
    }
}

export default userTool;