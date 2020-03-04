import NewsSearch from './component/news-search'
import NewsNav from './component/news-nav'
import NewsTable from './component/news-table'
import eventBus from './component/eventbus'

const newsTableMain = {
  props: ['cate'],
  template: ` 
    <div>
        <news-search></news-search>
        <div class="news_list">
            <news-nav v-bind:cate='cate'></news-nav>
            <news-table v-bind:propsdatas='this.results'></news-table>
        </div>
    </div>
    `,
  components: {
    'news-search': NewsSearch,
    'news-nav': NewsNav,
    'news-table': NewsTable
  },
  created() {
    let postcate = this.cate == undefined ? 'all' : this.cate;

    this.getdata(postcate)

    eventBus.$on('seachCate', (Data) => {
      this.getdata(Data.cate)
      eventBus.$emit('cateChange', this.results)
    })
    eventBus.$on('seachTitle', (Data) => {
      console.log(Data)
    })
  },
  methods: {

    getdata(cate) {
      const baseURI = 'api/getdata.news.php';
      axios.post(`${baseURI}`, {
          cate: cate
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
                join: 10
              },
              {
                idx: 1,
                cate: '천안',
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
                join: 10
              }
            ]
          }

          this.results = this.lists;
          eventBus.$emit('listUpadate', this.lists)
        })
        .catch(err => console.log('Login: ', err));

    }
  },
  data() {
    return {
      lists: [],
      results: []
    }
  }

}

export default newsTableMain;