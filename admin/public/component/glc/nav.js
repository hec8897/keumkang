import eventBus from './eventbus';
const NavComponent = {
    props:['comcode'],
    template: `<nav>
                    <ul>
                        <router-link tag='li' to='/consul' v-if="comcodeData==='1'">
                            <b class="caret fr"></b>
                            <i class="material-icons">assignment_late</i>
                            상담신청
                        </router-link>
                        
                        <router-link tag='li' to='/cflag' v-if="comcodeData==='100'">
                            <b class="caret fr"></b>
                            <i class="material-icons">assignment_late</i>
                            배정받은상담
                        </router-link>
                        <router-link tag='li' to='/userview' v-if="comcodeData==='1'">
                            <b class="caret fr"></b>
                            <i class="material-icons">group</i>
                            사용자관리
                        </router-link>
                        <router-link tag='li' to='/newsbord' v-if="comcodeData==='1'">
                            <b class="caret fr"></b>
                            <i class="material-icons">web</i>
                            보도자료
                        </router-link>
                        <router-link tag='li' to='/spot' v-if="comcodeData==='1'">
                            <b class="caret fr"></b>
                            <i class="material-icons">subscriptions</i>
                            현장사진/드론영상
                        </router-link>
                    </ul>
                </nav>`,
    data() {
        return {
            comcodeData:sessionStorage.comcode
        }
    },
    created(){
        eventBus.$on('nav',(Data)=>{
            this.comcodeData = Data
        })
    }
   
}

export default NavComponent;