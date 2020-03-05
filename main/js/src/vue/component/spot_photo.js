import listNumber from './list-numbering';
import SpotPopup from './spot-popup'
import eventBus from './eventbus.js';

const SpotPhoto = {
    template:`<div class="wrap">
                    <spot-popup></spot-popup>
                    <h3>현장사진</h3>
                    <ul>
                        <li v-for = "(list,i) in lists" v-if='i < limit && start <= i'>
                                <div class="photo" v-bind:style="{backgroundImage:'url(' +list.img+')'}">
                                    <div @click="popupOpen(list.img)">
                                        <img src="images/plus.png" alt="plus">
                                    </div>
                                </div>
                                <div class="tit">
                                    <p>
                                 {{list.title}}
                                        <span>{{list.Date}}</span>
                                    </p>
                                </div>
                            </li>
                    </ul>
                <list-number v-bind:nowpage = 'this.limit-10' v-bind:DataLength='Math.ceil((this.results.length)/10)'></list-number>

            </div>`,
            components:{
                'list-number':listNumber,
                'spot-popup':SpotPopup
            },
            data(){
                return{
                    lists:[],
                    results:[],
                    start:0,
                    limit:10
                }
            },
            created(){
                   const baseURI = 'api/getdata.spot.php';
                    axios.post(`${baseURI}`, {
                    })
                    .then((result) => {
                    if (result.data.phpResult == 'ok') {
                        this.lists = result.data.result
                        this.results = this.lists;
                        eventBus.$emit('UpdateList', {
                            DataLength: Math.ceil((this.results.length) / 10),
                            nowpage: this.limit - 10
                        })
                        // this.lists = result.data.result                      
                    }
                    else{

                        this.lists = [
                            {
                                idx:1,
                                title:'V부지 파일사업(분양완료)',
                                cate:'삼성',
                                img:'images/filed-con3-photo1.jpg',
                                Date:'2020.03.17'
                            },
                            {
                                idx:2,
                                title:'V부지 파일사업(분양완료)',
                                cate:'삼성',
                                img:'images/filed-con3-photo1.jpg',
                                Date:'2020.03.17'
                            },       {
                                idx:0,
                                title:'V부지 파일사업(분양완료)123',
                                cate:'삼성',
                                img:'images/filed-con3-photo1.jpg',
                                Date:'2020.03.12'
                            },
                            {
                                idx:1,
                                title:'V부지 파일사업(분양완료)',
                                cate:'삼성',
                                img:'images/filed-con3-photo1.jpg',
                                Date:'2020.03.17'
                            },
                            {
                                idx:2,
                                title:'V부지 파일사업(분양완료)',
                                cate:'삼성',
                                img:'images/filed-con3-photo1.jpg',
                                Date:'2020.03.17'
                            }
                        ]

                        this.results = this.lists;
                        eventBus.$emit('UpdateList', {
                            DataLength: Math.ceil((this.results.length) / 10),
                            nowpage: this.limit - 10
                        })
                       
                    }

                    this.results = this.lists

                    eventBus.$emit('UpdateList', {
                        DataLength: Math.ceil((this.results.length) / 10),
                        nowpage: this.limit - 10
                    })

                   
            })
            .catch(err => console.log('Login: ', err));
            },
            mounted() {
                eventBus.$on('NextPage', (Data) => {
                    this.start = Data * 10-1;
                    this.limit = (Data * 10) + 9
                })
            },
            methods:{
                popupOpen(listImg){
                    const popupBg = document.getElementById('popup_bg')
                    popupBg.style.display='block'
                    setTimeout(() => {
                        popupBg.style.opacity='1.0'
                    }, 100);
                    eventBus.$emit('imgPopup',listImg)
                }
            }
        }

export default SpotPhoto;

