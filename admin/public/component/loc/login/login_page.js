import router from "../../router"
import eventBus from '../../glc/eventbus'


const LoginPage = {
    template: `  <div class="con_wrap login_page">
    <div class="login_wrap">
        <!-- Login area -->
        <div class="login_box">
            <div class="login_bi">
                <h1>금강로그인페이지</h1></div>
            <div class="login_input">
                <div class="mb10">
                    <i class="material-icons">person</i>
                    <input type="text" placeholder="아이디" id='login_id'>
                </div>
                <div>
                    <i class="material-icons">lock</i>
                    <input type="password" placeholder="비밀번호" id='login_pw'>
                </div>
                <div class="mt40">
                    <button type="submit" id="" class="btn_admin" v-on:click="loginAcc">관리자
                        로그인</button>
                    <button type="submit" id="" class="btn_pw">비밀번호 찾기</button>
                </div>
            </div>
        </div>
</div>`,
    created(){
        if(sessionStorage.length == 0){
            console.log(this.$store.state.id)
            router.push({path:'/'}).catch (err => {})
        }
        else{
            console.log(sessionStorage)
            router.push({path:'/consul'}).catch (err => {})
        }
        },
    methods: {
        loginAcc(){
            const userId = document.getElementById('login_id')
            const userPw = document.getElementById('login_pw')
            // if(userId.value == ""){
            //     alert('아이디를 입력세요')
            //     userId.focus()
            // }
            // else if(userPw.value == ""){
            //     alert('패스워드를 입력해주세요')
            //     userPw.focus()
            // }
            this.$store.state.id = 'testAcc123'
            this.$store.state.Name = '개발자'
            this.$store.state.Class = '금강'
            this.$store.state.Activation = '1'
            this.$store.state.comcode = 100

            sessionStorage.setItem("name", this.$store.state.Name);
            sessionStorage.setItem("ID",  this.$store.state.id);
            sessionStorage.setItem("Class",  this.$store.state.Class);
            sessionStorage.setItem("Activation",  this.$store.state.Activation);
            sessionStorage.setItem("comcode",  this.$store.state.comcode);


            // sessionStorage.setItem("userPhone", result.data.userPhone);

            // console.log(this.$store.state.id)
            //로그인세션
            if(sessionStorage.comcode == 100){
                router.push({name:'cflag' ,path:'/cflag'})
                .catch (err => {})

            }
            else{
                router.push({name:'consul' ,path:'/consul'})
                .catch (err => {})
            }
           eventBus.$emit('nav',sessionStorage.comcode)
        


        }

    }
}

export default LoginPage;