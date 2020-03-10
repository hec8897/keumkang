const Maincon5 = {
    template: `  <div class="wrap">
    <h3>NEWS</h3>
    <h4>금강이앤씨에서 새로운 소식을 알려드립니다.</h4>
    <ul class="news_section">
        <a v-bind:href="result.link" v-for="(result,i) in results" v-if="i<3" target="blank">
        <li>
            <div class='header_new sam' v-if="result.cate=='삼성'">삼성</br>뉴스</div>
            <div class='header_new cheon' v-if="result.cate=='천안'">천안</br>아산</div>
            <div class='header_new bus' v-if="result.cate=='부동산'">부동산</br> 이슈</div>
            <div class='tits_new'>
                <h5>{{result.title}}</h5>
                <p>{{result.subTitle}}</p>
            </div>
        </li>
</a>
    </ul>

</div>`,
    data() {
        return {
            lists: [],
            results: []
        }
    },
    created() {
        this.getdata()
    },
    methods: {
        getdata() {
            const baseURI = 'api/getdata.news.php';
            axios.get(`${baseURI}`, {
                    // title: Data.title,
                    // cate: Data.cate
                })
                .then((result) => {
                    if (result.data.phpResult == 'ok') {
                        this.lists = result.data.result
                    } else {
                        this.lists = [{
                                idx: 0,
                                cate: '삼성',
                                title: 'dummy천안 북부지역 개발의 선두 천안 성거산업단지 올해 첫삽',
                                subTitle: 'sub_title1111',
                                img: 'images/con4-panel1.png',
                                desc: '천안은 6년 이상 산업단지 공급이 없어, 제조공장을 찾는 기업체들의 아쉬움이 많았다. 그런데, 2020년 새해 시작부터 천안지역에 ',
                                join: 10,
                                link:'test'
                            },
                            {
                                idx: 1,
                                cate: '천안',
                                title: 'dummy천안 북부지역 개발의 선두 천안 성거산업단지 올해 첫삽',
                                subTitle: 'sub_title1111',
                                img: 'images/con4-panel1.png',
                                desc: '천안은 6년 이상 산업단지 공급이 없어, 제조공장을 찾는 기업체들의 아쉬움이 많았다. 그런데, 2020년 새해 시작부터 천안지역에 ',
                                join: 10,
                                link:'test'

                            },
                            {
                                idx: 2,
                                cate: '부동산',
                                title: 'dummy천안 북부지역 개발의 선두 천안 성거산업단지 올해 첫삽',
                                subTitle: 'sub_title1111',
                                img: 'images/con4-panel1.png',
                                desc: '천안은 6년 이상 산업단지 공급이 없어, 제조공장을 찾는 기업체들의 아쉬움이 많았다. 그런데, 2020년 새해 시작부터 천안지역에 ',
                                join: 10
                            },
                            {
                                idx: 2,
                                cate: '부동산',
                                title: 'dummy천안 북부지역 개발의 선두 천안 성거산업단지 올해 첫삽',
                                subTitle: 'sub_title1111',
                                img: 'images/con4-panel1.png',
                                desc: '천안은 6년 이상 산업단지 공급이 없어, 제조공장을 찾는 기업체들의 아쉬움이 많았다. 그런데, 2020년 새해 시작부터 천안지역에 ',
                                join: 10,
                                link:'test'

                            }
                        ]
                    }
                    this.results = this.lists;
                })
                .catch(err => console.log('Login: ', err));
        }
    }

}

export default Maincon5;