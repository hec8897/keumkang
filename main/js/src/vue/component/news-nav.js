import eventBus from './eventbus.js';
import router from '../router'
const NewsNav = {
    props: ['cate'],
    template: `<div class="nav">
                    <ul>
                        <li class="navs active" @click="findCate($event,'all')">전체보기</li>
                        <li class="navs" @click="findCate($event,'삼성')">삼성관련</li>
                        <li class="navs" @click="findCate($event,'천안')">천안아산</li>
                        <li class="navs" @click="findCate($event,'부동산')">부동산이슈</li>
                    </ul>
</div>`,
    mounted() {
        if (this.cate != undefined) {
            const Navs = document.querySelectorAll('.navs')
            for (let i = 0; i < Navs.length; i++) {
                Navs[i].className = 'navs'
            }
            if (this.cate == 'all') {
                Navs[0].className = 'navs active'
            }
            else if(this.cate == '삼성'){
                Navs[1].className = 'navs active'
            }
            else if(this.cate == '천안'){
                Navs[2].className = 'navs active'
            }
            else if(this.cate == '부동산'){
                Navs[3].className = 'navs active'
            }
        }
    },
    methods: {
        findCate(event, value) {
            const Navs = document.querySelectorAll('.navs')
            for (let i = 0; i < Navs.length; i++) {
                Navs[i].className = 'navs'
            }
            router.push({
                path: `/newstb/${value}`
            })
            event.target.className = 'navs active'
            eventBus.$emit('seachCate', {
                cate: value
            })


        }
    }
}

export default NewsNav