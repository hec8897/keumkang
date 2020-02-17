import eventBus from '../../../glc/eventbus';
const userInfo = {
    props:['userData','dataIndex'],
    template:`
    <tr class='user_info'>
        <td><input type='checkbox' class='user_tool_check' v-on:click="PostDataUserTool($event,this.value)"></td>
        <td>{{list.userName}}</td>
        <td>{{list.userId}}</td>
        <td>{{list.Class}}</td>
        <td>{{list.userPhone}}</td>
        <td>{{list.DataCount}}</td>
        <td v-if="list.Activation === '1'">정상</td>
        <td v-else>비승인</td>
    </tr>`,
    data(){
        return{
            list:Array,
        }
    },
    created(){
        this.list = this.userData;
    },
    methods:{
        PostDataUserTool(event,thisValue){
            let CheckedValue = event.target.checked;
            const userToolCheck = document.querySelectorAll('.user_tool_check')
            if(CheckedValue == true){
                eventBus.$emit('GetUsertool', this.list)
                for(let i = 0; i<userToolCheck.length; i++){
                    userToolCheck[i].checked = false
                }
                event.target.checked = true
            }
        }
    }
}
export default userInfo;