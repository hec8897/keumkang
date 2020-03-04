import NewsSearch from './component/news-search'
import NewsNav from './component/news-nav';
import NewsZoom from './component/news-zoom';
import NewsNaxt from './component/news-next'
import eventBus from './component/eventbus'
import router from './router'


const newsViewMain = {
    props:['idx'],
    template:` 
    <div>
        <news-search></news-search>
        <div class="news_list">
            <news-nav></news-nav>
            <news-zoom v-bind:idx='this.idx'></news-zoom>
            <news-next v-bind:idx='this.idx'></news-next>
        </div>
    </div>
    `,
      components: {
        'news-search': NewsSearch,
        'news-nav': NewsNav,
        'news-zoom':NewsZoom,
        'news-next':NewsNaxt
      },
      created() {
        eventBus.$on('prevPage',(Data)=>{
          router.push({
            name:'news-view',
            path:'/news/:'+Data.prevIdx
          })
        })

        eventBus.$on('NextPage',(Data)=>{
          router.push({
              name:'news-view',
            path:'/news/:'+Data.nextIdx
          })
          
        })
      },
      data() {
        return {
          lists: [],
          results: []
        }
      }

}

export default newsViewMain;