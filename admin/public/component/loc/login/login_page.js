import router from "../../router"
import eventBus from '../../glc/eventbus'
import joinModal from '../../glc/join_modal'

const LoginPage = {
    template: `  <div class="con_wrap login_page">
    <div class="login_wrap">
    <join-modal></join-modal>
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
                    <button type="submit" id="" class="btn_admin" v-on:click="loginAcc">관리자로그인</button>
                    <button type="submit" id="" class="btn_pw" @click='OpenjoinModal'>사용자등록</button>
                </div>
            </div>
        </div>
</div>`,
    components:{
        'join-modal':joinModal
    },
    created(){
        if(sessionStorage.length == 0){
            router.push({path:'/'}).catch (err => {})
        }
        else{
            console.log(sessionStorage)
            router.push({path:'/consul'}).catch (err => {})
        }
        },
    methods: {
        OpenjoinModal() {
                const Modal = document.getElementById('modal-join')
                Modal.style.display = 'block';
                setTimeout(() => {
                    Modal.style.opacity = '1';
                }, 100);
                eventBus.$emit('shareCflag', this.SelectDataArray)
        },
        loginAcc(){
        //개발버전
            this.$store.state.id = 'ceomaker';
            this.$store.state.idx = 6;
            this.$store.state.Name = '김다운';
            this.$store.state.Class = '금강';
            this.$store.state.Activation = 1;
            this.$store.state.comcode = 1;
            this.$store.state.userPhone = '01023866487';
                       
           sessionStorage.setItem("ID",  this.$store.state.id);
           sessionStorage.setItem("idx",  this.$store.state.idx);
           sessionStorage.setItem("name", this.$store.state.Name);
           sessionStorage.setItem("Class",  this.$store.state.Class);
           sessionStorage.setItem("Activation",  this.$store.state.Activation);
           sessionStorage.setItem("comcode",  this.$store.state.comcode);
           sessionStorage.setItem("userPhone", this.$store.state.userPhone);

           if(sessionStorage.comcode == 100){
               alert('어서오세요'+this.$store.state.Name+'님')
               router.push({name:'cflag' ,path:'/cflag'})
               .catch (err => {})
           }
           else{
               alert('어서오세요'+this.$store.state.Name+'님')
               router.push({name:'consul' ,path:'/consul'})
               .catch (err => {})
           }
        eventBus.$emit('nav',sessionStorage.comcode)
        //개발버전

            // const userId = document.getElementById('login_id')
            // const userPw = document.getElementById('login_pw')
            // if(userId.value == ""){
            //     alert('아이디를 입력세요')
            //     userId.focus()
            // }
            // else if(userPw.value == ""){
            //     alert('패스워드를 입력해주세요')
            //     userPw.focus()
            // }
            // else{
            // const baseURI = 'api/login.php';
            //     axios.post(`${baseURI}`, {
            //             userId:userId.value,
            //             userPw:userPw.value
            //         })
            //         .then((result) => {
            //             if(result.data.result == 'idno'){
            //                 alert('존재하지 않는 아이디 입니다.')
            //             }
            //             else if(result.data.result == 'pwno'){
            //                 alert('패스워드가 잘못되었습니다')
            //             }
            //             else{
            //                 if(result.data.result.activation == '0'){
            //                     alert('승인되지 않은 계정입니다 관리자에게 문의 해주세요')
            //                 }
            //                 else{
            //                      this.$store.state.id = result.data.result.user_id;
            //                      this.$store.state.idx = result.data.result.idx;
            //                      this.$store.state.Name = result.data.result.user_name;
            //                      this.$store.state.Class = result.data.result.class;
            //                      this.$store.state.Activation = result.data.result.activation;
            //                      this.$store.state.comcode = result.data.result.comcode;
            //                      this.$store.state.userPhone = result.data.result.user_phone;
                                            
            //                     sessionStorage.setItem("ID",  this.$store.state.id);
            //                     sessionStorage.setItem("idx",  this.$store.state.idx);
            //                     sessionStorage.setItem("name", this.$store.state.Name);
            //                     sessionStorage.setItem("Class",  this.$store.state.Class);
            //                     sessionStorage.setItem("Activation",  this.$store.state.Activation);
            //                     sessionStorage.setItem("comcode",  this.$store.state.comcode);
            //                     sessionStorage.setItem("userPhone", this.$store.state.userPhone);

            //                     if(sessionStorage.comcode == 100){
            //                         alert('어서오세요'+this.$store.state.Name+'님')
            //                         router.push({name:'cflag' ,path:'/cflag'})
            //                         .catch (err => {})
                    
            //                     }
            //                     else{
            //                         alert('어서오세요'+this.$store.state.Name+'님')
            //                         router.push({name:'consul' ,path:'/consul'})
            //                         .catch (err => {})
            //                     }
            //                    eventBus.$emit('nav',sessionStorage.comcode)
            //                 }
            //             }
            //         })
            //         .catch(err => console.log('Login: ', err));
            // }
         
        }

    }
}

export default LoginPage;