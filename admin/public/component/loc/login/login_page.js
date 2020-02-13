

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
                    <input type="text" placeholder="아이디" id='reqid' id='login_id'>
                </div>
                <div>
                    <i class="material-icons">lock</i>
                    <input type="password" placeholder="비밀번호" id='reqpw' id='login_pw'>
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
        }
        },
    methods: {
        loginAcc(){
            const userId = document.getElementById
            this.$store.state.id = '123'
            // console.log(this.$store.state.id)
            //로그인세션

        }

    }
}

export default LoginPage;