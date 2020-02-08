Vue.component('news-bord',{
    template:`<table>
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>미리보기</td>
                        <td>제목</td>
                        <td>조회</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for='(list,i) in lists' v-if="list.cate === '부동산'">
                        <td>{{list.idx}}</td>
                        <td>{{list.img}}</td>
                        <td>{{list.title}}</td>
                        <td>{{list.join}}</td>
                    </tr>
                </tbody>
            </table>`,
            data(){
                return{
                    getCate:'all',
                    lists:[
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
             
                }
            }
})
