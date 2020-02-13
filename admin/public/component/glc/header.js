import router from '../router'

const HeaderComponent = {
    template: `<header class="head_wrap">
    <div class="head_bi">
        <h1>금강관리자 프로토타임</h1>
        </div>
            <div class="head_info">
                <span class="btn_out" v-on:click="DestorySessionData">로그아웃</span>
            </div>
</header>`,
    methods:{
        DestorySessionData(){
            var y = confirm("로그아웃 하시겠습니까?");
            if (y == true) {
                sessionStorage.clear();
                router.push({
                    path: '/',
                    name: 'login'
                  })
            }
        }
    }

}

export default HeaderComponent;