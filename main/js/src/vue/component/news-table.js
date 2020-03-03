import listNumber from './news-list-numbering';
import eventBus from './eventbus.js';
const NewsTable = {
    props:['propsdatas'],
    template:`
    <div class="news_lists" >
        <ul>
            <li v-for ="(list,i) in lists" v-if='i < limit && start <= i'>

                <a v-bind:href="'news_view.html?idx='+list.idx">
                <div class="head blue" v-if="list.cate =='삼성'">삼성</br>뉴스</div>
                <div class="head green" v-else-if="list.cate =='천안'">천안</br>아산</div>
                <div class="head ameral" v-else-if="list.cate =='부동산'">부동산</br>이슈</div>

                <div class="prev_img" v-bind:style="{ backgroundImage: 'url(' + list.img + ')' }"></div>
                <div class="prev_desc">
                    <span class="mo blue" v-if="list.cate =='삼성'">삼성</span>
                    <span class="mo green" v-else-if="list.cate =='천안'">천안,아산</span>
                    <span class="mo ameral" v-else-if="list.cate =='부동산'">부동산</span>
                    <h4>{{list.title}}</h4>
                    <p class='news_desc' v-html="list.desc"></p>
                </div>
                <div class="join">
                    {{list.join}}건
                </div>
            </a>
            </li>
          
        </ul>

        <list-number v-bind:nowpage = 'this.limit-10' v-bind:DataLength='Math.ceil((this.lists.length)/10)'></list-number>
      
    </div>

</div>`,
components:{
    'list-number':listNumber

},
created(){
    this.lists = this.propsdatas;
    eventBus.$emit('UpdateNews', {
        DataLength: Math.ceil((this.lists.length) / 10),
        nowpage: this.limit - 10
    })

    eventBus.$on('cateChange', (Data)=>{
        this.lists = Data
        this.start = 0
        this.limit = 10
        eventBus.$emit('UpdateNews', {
            DataLength: Math.ceil((this.lists.length) / 10),
            nowpage: this.limit - 10
        })
    })

},
mounted() {
    eventBus.$on('NextPage', (Data) => {
        this.start = Data * 10-1;
        this.limit = (Data * 10) + 9
    })
},
data(){
    return{
        lists:[],
        start:0,
        limit:10
    }
}
}

export default NewsTable;