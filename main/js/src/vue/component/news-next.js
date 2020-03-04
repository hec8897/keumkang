import eventBus from '../component/eventbus'
import router from '../router'

const NewsNaxt = {
    props:['idx'],
    template: `
    <div class='next_news'>
        <img src="images/left-news.png" alt="left" class='left' @click='prevPage'>
        <router-link tag='div' class='btn' to="/">목록보기</router-link>
        <img src="images/right-news.png" alt="right" class='right' @click='NextPage'>
    </div>
    `,
    created(){
        this.getData(this.idx)
        eventBus.$on('thisChange',(Data)=>{
            this.getData(Data)
        })

    },
   
    data(){
        return{
            ListArray:[],
            thisPage:'',
            nextPage:'',
            PrevPage:''
        }
    },
    methods:{
      
        prevPage(){
            eventBus.$emit('prevPage', {
                prevIdx: this.PrevPage
            })
        },
        NextPage(){
            eventBus.$emit('NextPage', {
                nextIdx: this.nextPage
            })

        },
        getData(idx){
            const baseURI = 'api/getdata.news.php';
            axios.post(`${baseURI}`, {
                    idx: idx,
                    mode:'nextPage'
                })
                .then((result) => {
                    if (result.data.phpResult == 'ok') {
                        for(let i = 0; i<result.data.result.length; i++){
                            this.ListArray.push(result.data.result[i][0])
                        }
                        
                    } else {
                        this.ListArray = [0,1,2]
                    }

                    const thisIndex = this.ListArray.indexOf(idx)
                    if(this.ListArray[0] == this.ListArray[thisIndex]){
                        this.nextPage = this.ListArray[thisIndex+1]
                        this.PrevPage = this.ListArray[this.ListArray.length-1]
                    }
                    else if(this.ListArray[this.ListArray.length-1] == this.ListArray[thisIndex]){
                        this.nextPage = this.ListArray[0]
                        this.PrevPage = this.ListArray[thisIndex-1]
                    }
                    else{
                        this.nextPage = this.ListArray[thisIndex+1]
                        this.PrevPage = this.ListArray[thisIndex-1]
                    }
                    

                })
                .catch(err => console.log('Login: ', err));
        }
    }
}

export default NewsNaxt