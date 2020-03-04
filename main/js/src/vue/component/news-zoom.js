import eventBus from './eventbus'

const newsZoom = {
    props: ['idx'],
    template: `        
    <div class="news_zoom">
            <div class="head_line">
                <!-- <div class="head blue">삼성</br>뉴스</div> -->
                <div class="head blue" v-if="list.cate =='삼성'">삼성</br>뉴스</div>
                <div class="head green" v-else-if="list.cate =='천안'">천안</br>아산</div>
                <div class="head ameral" v-else-if="list.cate =='부동산'">부동산</br>이슈</div>
                <div class="title">
                    <span class="mo blue" v-if="list.cate =='삼성'">삼성</span> 
                    <span class="mo green" v-else-if="list.cate =='천안'">천안,아산</span>
                    <span class="mo ameral" v-else-if="list.cate =='부동산'">부동산</span>
                    <h5>{{list.title}}</h5>
                    <p>등록일 : {{list.insertDate}}<span>|</span> 조회 : {{list.join}}</p>
                </div>
            </div>
            <div class="desc_area">
                <a class='link' v-bind:href='list.link' v-if="list.link!=''">기사원문 : <span>{{list.link}}</span></a>
                <div v-html="list.desc"></div>
            </div>
        </div>`
        ,
    created() {
        this.getdata(this.idx)
            eventBus.$on('prevPage',(Data)=>{
            this.getdata(Data.prevIdx)
            eventBus.$emit('thisChange',Data.prevIdx)
            })
    
            eventBus.$on('NextPage',(Data)=>{
            this.getdata(Data.nextIdx)
            eventBus.$emit('thisChange',Data.nextIdx)

            })
    },
    data() {
        return {
            list: []
        }
    },
    methods: {
        getdata(idx) {
            const baseURI = 'api/getdata.news.php';
            axios.post(`${baseURI}`, {
                    idx: idx
                })
                .then((result) => {
                    if (result.data.phpResult == 'ok') {
                        this.list = result.data.result[0]

                    } else {
                        this.list = [{
                            idx: 0,
                            cate: '삼성',
                            title: 'dummy천안 북부지역 개발의 선두 천안 성거산업단지 올해 첫삽',
                            subTitle: 'sub_title1111',
                            img: 'images/con4-panel1.png',
                            desc: '천안은 6년 이상 산업단지 공급이 없어, 제조공장을 찾는 기업체들의 아쉬움이 많았다. 그런데, 2020년 새해 시작부터 천안지역에 ',
                            join: 10
                        }]
                    }

                })
                .catch(err => console.log('Login: ', err));

        }
    }
}

export default newsZoom