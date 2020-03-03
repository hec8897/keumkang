import eventBus from './eventbus.js';

const NewsSearch = {
    template: `<div class="search_ui">
                    <select name="" id="" @change='findCate($event)'>
                        <option value="all">전체</option>
                        <option value="삼성">삼성</option>
                        <option value="천안">천안아산</option>
                        <option value="부동산">부동산</option>
                    </select><input type="text" id='search_tit' placeholder='제목을 입력해주세요'>
                    <div class="btn" @click="findTitle">검색</div>
                </div>`,
    methods: {
        findCate(event) {
            console.log(event.target.value)
            eventBus.$emit('seachCate', {
                cate: event.target.value
            })
        },
        findTitle(){
            const searchTit = document.getElementById('search_tit')
            if(searchTit.value == ""){
                alert('제목을 입력해주세요')
            }
            else{
                eventBus.$emit('seachTitle', {
                    title: searchTit.value
                })
            }
            console.log(searchTit.value)

        }
    }


}

export default NewsSearch