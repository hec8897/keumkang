import NewsSearch from './component/news-search'
import NewsNav from './component/news-nav'
import eventBus from './component/eventbus'

const newsViewMain = {
    props:['idx'],
    template:` 
    <div>
        <news-search></news-search>
        <div class="news_list">
            <news-nav></news-nav>
            뉴스보기
        </div>
    </div>
    `,
      components: {
        'news-search': NewsSearch,
        'news-nav': NewsNav,
      },
      created() {
          console.log(this.idx)
        // const baseURI = 'api/getdata.news.php';
        // axios.post(`${baseURI}`, {})
        //   .then((result) => {
        //     if (result.data.phpResult == 'ok') {
        //       this.lists = result.data.result
        //       this.results = this.lists;
        //     } else {
    
        //       this.lists = [{
        //           idx: 0,
        //           cate: '삼성',
        //           title: '1천안 북부지역 개발의 선두 천안 성거산업단지 올해 첫삽',
        //           subTitle: 'sub_title1111',
        //           img: 'images/con4-panel1.png',
        //           desc: '천안은 6년 이상 산업단지 공급이 없어, 제조공장을 찾는 기업체들의 아쉬움이 많았다. 그런데, 2020년 새해 시작부터 천안지역에 ',
        //           join: 10
        //         },
        //         {
        //           idx: 0,
        //           cate: '삼성',
        //           title: '1천안 북부지역 개발의 선두 천안 성거산업단지 올해 첫삽',
        //           subTitle: 'sub_title1111',
        //           img: 'images/con4-panel1.png',
        //           desc: '천안은 6년 이상 산업단지 공급이 없어, 제조공장을 찾는 기업체들의 아쉬움이 많았다. 그런데, 2020년 새해 시작부터 천안지역에 ',
        //           join: 10
        //         },
        //         {
        //           idx: 0,
        //           cate: '삼성',
        //           title: '1천안 북부지역 개발의 선두 천안 성거산업단지 올해 첫삽',
        //           subTitle: 'sub_title1111',
        //           img: 'images/con4-panel1.png',
        //           desc: '천안은 6년 이상 산업단지 공급이 없어, 제조공장을 찾는 기업체들의 아쉬움이 많았다. 그런데, 2020년 새해 시작부터 천안지역에 ',
        //           join: 10
        //         }
        //       ]
    
        //       this.results = this.lists;
        //     }
        //     eventBus.$emit('listUpadate', this.lists)
        //   })
        //   .catch(err => console.log('Login: ', err));
        // eventBus.$on('seachCate', (Data) => {
        //   if (Data.cate == 'all') {
        //     this.results = this.lists;
        //   } else {
        //     this.results = this.lists.filter((x) => {
        //       return x.cate == Data.cate;
        //     })
        //   }
        //   eventBus.$emit('cateChange', this.results)
    
        // })
        // eventBus.$on('seachTitle', (Data) => {
        //   console.log(Data)
        // })
    
      },
      data() {
        return {
          lists: [],
          results: []
        }
      }

}

export default newsViewMain;