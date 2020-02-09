Vue.component('news-bord',{
    template:`<div class='table_wrap'>
                <div class='filters'>
                    <span>총 게시물수</span><b>{{this.results.length}}건</b>
                    <select v-on:change="searchCate($event)">
                        <option value='전체'>전체</option>
                        <option value='삼성'>삼성</option>
                        <option value='천안'>천안</option>
                        <option value='부동산'>부동산</option>
                    </select>

                </div>
                <table>
                    <thead>
                        <tr>
                            <td>번호</td>
                            <td>분류</td>
                            <td>미리보기</td>
                            <td>제목</td>
                            <td>조회</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='(result,i) in results'>
                            <td>{{i+1}}</td>
                            <td>{{result.cate}}</td>
                            <td>{{result.img}}</td>
                            <td>{{result.title}}</td>
                            <td>{{result.join}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>`,
            data(){
                return{
                    lists:null,
                    results:undefined,
                }
            },
            created(){
                // db에서 가져온데이터를 this.lists에 담아야함
                this.lists = [
                    {
                        idx:0,
                        img:"",
                        title:'천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                        join:340,
                        cate:"삼성"
                    },
                    {
                        idx:1,
                        img:"",
                        title:"인천 검단산업단지 안동포사거리 지하차도 착공",
                        join:340,
                        cate:"천안"
                    },
                    {
                        idx:1,
                        img:"",
                        title:"인천 검단산업단지 안동포사거리 지하차도",
                        join:340,
                        cate:"부동산"
                    }
                ]
                
            },
            mounted() {
                this.results = this.lists;
            },
            methods: {
                searchCate(event){
                    const lists = this.lists;
                    const targetData = event.target.value;

                    const result = lists.filter((x)=>{
                        return x.cate == targetData
                    })

                    this.results = result;
                    if(targetData == '전체'){
                        this.results = this.lists;
                    }
                }
                
            },
})
