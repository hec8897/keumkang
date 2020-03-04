import VueRouter from 'vue-router';
import newTableMain from './news-table-main';
import newsViewMain from './news-view';

const router = new VueRouter({
  routes: [
      {
          path:'/',
          name:'new-table',
          component:newTableMain
      },
      {
        path:'/newstb/:cate',
        props:true,
        name:'new-table',
        component:newTableMain,
        beforeRouteUpdate(){
          location.reload()
          console.log(1)
        }
    },
      {
          path:'/news/:idx',
          props:true,
          name:'news-view',
          component:newsViewMain
      }
    ]
})



export default router;