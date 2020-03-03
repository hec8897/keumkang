import '@babel/polyfill'
import SpotPhoto from './component/spot_photo'
import NewsSearch from './component/news-search'
import NewsNav from './component/news-nav'
import NewsTable from './component/news-table'
import eventBus from './component/eventbus'
import EventBus from './component/eventbus'

new Vue({

  template: `<section class='sub filed con3' id='filed_photo'>
                    <spot-photo></spot-photo>
            </section>`,
  components: {
    'spot-photo': SpotPhoto
  },
  created() {}
}).$mount('#filed_photo')


new Vue({

  template: `<section class="sub news con2" id='news'>
                <h3>보도자료</h3>
                <news-search></news-search>
              <div class="news_list">
                <news-nav></news-nav>
                <news-table v-bind:propsdatas='this.results'></news-table>
              </div>
            </section>`,
  components: {
    'news-search': NewsSearch,
    'news-nav': NewsNav,
    'news-table': NewsTable
  },
  created(){
    const baseURI = 'api/getdata.news.php';
    axios.post(`${baseURI}`, {
    })
    .then((result) => {
      console.log(result)
    if (result.data.phpResult == 'ok') {
        this.lists = result.data.result
        this.results = this.lists;
        // this.lists = result.data.result                      
    }
    else{

        this.lists = [
          {idx:0,cate:'삼성',title:'1천안 북부지역 개발의 선두 천안 성거산업단지 올해 첫삽',img:'images/con4-panel1.png',desc:'천안은 6년 이상 산업단지 공급이 없어, 제조공장을 찾는 기업체들의 아쉬움이 많았다. 그런데, 2020년 새해 시작부터 천안지역에 ',join:10},
          {idx:1,cate:'천안',title:'2천안 북부지역 개발의 선두 천안 성거산업단지 올해 첫삽',img:'images/con4-panel2.png',desc:'천안은 6년 이상 산업단지 공급이 없어, 제조공장을 찾는 기업체들의 아쉬움이 많았다. 그런데, 2020년 새해 시작부터 천안지역에 ',join:10},
          {idx:2,cate:'부동산',title:'3천안 북부지역 개발의 선두 천안 성거산업단지 올해 첫삽',img:'images/con4-panel3.png',desc:'천안은 6년 이상 산업단지 공급이 없어, 제조공장을 찾는 기업체들의 아쉬움이 많았다. 그런데, 2020년 새해 시작부터 천안지역에 ',join:10},
          {idx:3,cate:'삼성',title:'4천안 북부지역 개발의 선두 천안 성거산업단지 올해 첫삽',img:'images/con4-panel1.png',desc:'천안은 6년 이상 산업단지 공급이 없어, 제조공장을 찾는 기업체들의 아쉬움이 많았다. 그런데, 2020년 새해 시작부터 천안지역에 ',join:10},
          {idx:4,cate:'천안',title:'5천안 북부지역 개발의 선두 천안 성거산업단지 올해 첫삽',img:'images/con4-panel2.png',desc:'천안은 6년 이상 산업단지 공급이 없어, 제조공장을 찾는 기업체들의 아쉬움이 많았다. 그런데, 2020년 새해 시작부터 천안지역에 ',join:10},
          {idx:5,cate:'삼성',title:'6천안 북부지역 개발의 선두 천안 성거산업단지 올해 첫삽',img:'images/con4-panel3.png',desc:'천안은 6년 이상 산업단지 공급이 없어, 제조공장을 찾는 기업체들의 아쉬움이 많았다. 그런데, 2020년 새해 시작부터 천안지역에 ',join:10},
          {idx:6,cate:'부동산',title:'7천안 북부지역 개발의 선두 천안 성거산업단지 올해 첫삽',img:'images/con4-panel1.png',desc:'천안은 6년 이상 산업단지 공급이 없어, 제조공장을 찾는 기업체들의 아쉬움이 많았다. 그런데, 2020년 새해 시작부터 천안지역에 ',join:10},
          {idx:7,cate:'삼성',title:'8천안 북부지역 개발의 선두 천안 성거산업단지 올해 첫삽',img:'images/con4-panel2.png',desc:"<img src='images/con4-panel2.png'>천안은 6년 이상 산업단지 공급이 없어, 제조공장을 찾는 기업체들의 아쉬움이 많았다. 그런데, 2020년 새해 시작부터 천안지역에",join:10},
          {idx:8,cate:'부동산',title:'9천안 북부지역 개발의 선두 천안 성거산업단지 올해 첫삽',img:'images/con4-panel1.png',desc:'천안은 6년 이상 산업단지 공급이 없어, 제조공장을 찾는 기업체들의 아쉬움이 많았다. 그런데, 2020년 새해 시작부터 천안지역에 ',join:10},
          {idx:9,cate:'부동산',title:'10천안 북부지역 개발의 선두 천안 성거산업단지 올해 첫삽',img:'images/con4-panel1.png',desc:'천안은 6년 이상 산업단지 공급이 없어, 제조공장을 찾는 기업체들의 아쉬움이 많았다. 그런데, 2020년 새해 시작부터 천안지역에 ',join:10},
          {idx:10,cate:'부동산',title:'11천안 북부지역 개발의 선두 천안 성거산업단지 올해 첫삽',img:'images/con4-panel1.png',desc:'천안은 6년 이상 산업단지 공급이 없어, 제조공장을 찾는 기업체들의 아쉬움이 많았다. 그런데, 2020년 새해 시작부터 천안지역에 ',join:10},
          {idx:11,cate:'부동산',title:'12천안 북부지역 개발의 선두 천안 성거산업단지 올해 첫삽',img:'images/con4-panel1.png',desc:'천안은 6년 이상 산업단지 공급이 없어, 제조공장을 찾는 기업체들의 아쉬움이 많았다. 그런데, 2020년 새해 시작부터 천안지역에 ',join:10},
          {idx:12,cate:'부동산',title:'13천안 북부지역 개발의 선두 천안 성거산업단지 올해 첫삽',img:'images/con4-panel1.png',desc:'천안은 6년 이상 산업단지 공급이 없어, 제조공장을 찾는 기업체들의 아쉬움이 많았다. 그런데, 2020년 새해 시작부터 천안지역에 ',join:10}
        ]

        this.results = this.lists;
    }

    console.log(this.lists)

    eventBus.$emit('listUpadate',this.lists)
   
})
.catch(err => console.log('Login: ', err));
    eventBus.$on('seachCate',(Data)=>{
      if(Data.cate =='all'){
        this. results = this.lists;
      }
      else{
        this.results = this.lists.filter((x) => {
          return x.cate == Data.cate;
        })
      }
    eventBus.$emit('cateChange',this.results)

    })
    eventBus.$on('seachTitle',(Data)=>{
      console.log(Data)
    })

  },
  data(){
    return{
      lists:[],
      results:[]
    }
  }

}).$mount('#news')
