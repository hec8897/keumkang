import eventBus from './eventbus.js';

const NewsNav = {
    template:`     <div class="nav">
    <ul>
        <li class="navs active" @click="findCate($event,'all')">전체보기</li>
        <li class="navs" @click="findCate($event,'삼성')">삼성관련</li>
        <li class="navs" @click="findCate($event,'천안')">천안아산</li>
        <li class="navs" @click="findCate($event,'부동산')">부동산이슈</li>
    </ul>
</div>`,
methods:{
    findCate(event,value){
        const Navs = document.querySelectorAll('.navs')
        for (let i = 0; i<Navs.length; i++){
            Navs[i].className = 'navs'
        }
        event.target.className = 'navs active'
        eventBus.$emit('seachCate',{
            cate:value
        })
    }
}
}

export default NewsNav