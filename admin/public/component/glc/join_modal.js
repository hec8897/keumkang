import eventBus from './eventbus.js';

const joinModal = {
    template: `<div class="pop-window fade" id="modal-join">
                <div class="alert">
                    <div class="alert_con">
                        <i class="material-icons">error_outline</i>
                        <h3>사용자등록</h3>
                        <ul class='inputs'>
                            <form>
                            <li>
                                <input type='text' id='user_id' placeholder='사용하실 ID'>
                            </li>
                            <li>
                                <input type='password' id='user_pw_re' placeholder='패스워드'>
                            </li>
                            <li>
                                <input type='password' id='user_pw' placeholder='패스워드 확인'>
                            </li>
                            <li>
                                <input type='text' id='user_class' placeholder='' readonly value='금강' style='color:#444'>
                            </li>
                            <li>
                                <input type='text' id='user_name' placeholder='성함'>
                            </li>
                            <li>
                                <input type='text' id='user_phone' placeholder='연락처'>
                            </li>
                            </form>
                        </ul>
                    </div>

                    <div class="modal_foot">
                        <span  class="b_red" v-on:click='insertData'>확인</span>
                        <span v-on:click='ModalClose' class="b_sgrey">취소</span>
                    </div>
                </div>
            </div>`,
    methods: {
        ModalClose() {
            const Modal = document.getElementById('modal-join')
            Modal.style.opacity = '0';
            setTimeout(() => {
                Modal.style.display = 'none';
            }, 100);
        },
        insertData(){
            const userId = document.getElementById('user_id')

            const userpwRe = document.getElementById('user_pw_re')
            const userpw = document.getElementById('user_pw')

            const userClass = document.getElementById('user_class')
            const userPhone = document.getElementById('user_phone')
            const userName =  document.getElementById('user_name')
            if(userId.value.length < 8){
                alert('id는 8자 이상으로 작성해주세요')
                userId.focus()
            }
            else if(userpw.value < 10){
                alert('패스워드는 10자 이상 작성해주세요')
                userpw.focus()

            }
            else if(userpwRe.value != userpw.value){
                alert('패스워드가 다릅니다')
                userpwRe.focus()
            }
            else if(userClass.value ==""){
                alert('소속에러')
                userClass.focus()
            }
            else if(userName.value < 2){
                alert('성함을 입력해주세요')
            }
            else if(userPhone.value < 2){
                alert('성함을 입력해주세요')
            }
            else{
                const baseURI = 'api/join.user.php';
                axios.post(`${baseURI}`, {
                        userId:userId.value,
                        userPw:userpw.value,
                        userClass:userClass.value,
                        userName:userName.value,
                        userPhone:userPhone.value
                    })
                    .then((result) => {
                        if(result.data.result == 'idno'){
                            alert('존재하는 아이디입니다 다시입력세요')
                            userId.focus()
                        }
                        else{
                            if(result.data.phpResult == 'ok'){
                                alert('사용자등록신청이 되었습니다 관리자 승인후 사용할수있습니다.')
                                // this.ModalClose();
                                location.reload();
                            }
                            else{
                                alert('데이터 전송오류')
                            }
                        }

                           
                    })
                    .catch(err => console.log('Login: ', err));
            }
           
        }

    }

}

export default joinModal;