const NavComponent = {
    template: `<nav>
                    <ul>
                        
                    <router-link tag='li' to='/consul'>
                            <b class="caret fr"></b>
                            상담신청
                        </router-link>
                        
                        <router-link tag='li' to='/cflag'>
                            <b class="caret fr"></b>
                            배정받은상담
                        </router-link>
                        <router-link tag='li' to='/userview'>
                            <b class="caret fr"></b>
                            사용자관리
                        </router-link>
                        <router-link tag='li' to='/newsbord'>
                            <b class="caret fr"></b>
                            보도자료
                        </router-link>
                        <router-link tag='li' to='/1'>
                            <b class="caret fr"></b>
                            조감도관리
                        </router-link>

                        <router-link tag='li' to='/2'>
                            <b class="caret fr"></b>
                            엑셀파일 관리/입주의향서
                        </router-link>

                        <router-link tag='li' to='/4'>
                            <b class="caret fr"></b>
                            현장사진/드론영상
                        </router-link>

                  

                    </ul>
                </nav>`,
    data() {
        return {

        }
    }

}

export default NavComponent;