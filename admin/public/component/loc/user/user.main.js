import userInfo from './component/user_info'
import userTool from './component/user_tool'
const userMain = {
    template: `<div class="con_wrap">
    <div class='content user_bord'>
        <h2>사용자관리</h2>
        <user-tool></user-tool>
        <table class='user_tb'>
        <thead>
            <tr>
                <td></td>
                <td>이름</td>
                <td>아이디</td>
                <td>소속</td>
                <td>연락처</td>
                <td>배분건수</td>
                <td>상태</td>
            </tr>
        </thead>
        <tbody>
        <user-info v-for = 'list in lists' v-bind:userData='list'></user-info>
        </tbody>
        </table>
        <div>
        </div>
    </div>
</div>`,
    components: {
        'user-info': userInfo,
        'user-tool':userTool
    },
    data(){
        return{
            lists:[
                {
                    idx:0,
                    userId:'hec8897',
                    userName:'김다운',
                    userPhone:'01000000000',
                    Class:'금강',
                    DataCount:2,
                    Activation:0
                },
                {
                    idx:0,
                    userId:'hec8897',
                    userName:'김다운22',
                    userPhone:'01000000000',
                    Class:'금강',
                    DataCount:2,
                    Activation:1

                }
            ]
        }
    }
}

export default userMain;
