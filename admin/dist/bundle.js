/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/component/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/component/app.js":
/*!*********************************!*\
  !*** ./public/component/app.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glc_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glc/header.js */ "./public/component/glc/header.js");
/* harmony import */ var _glc_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glc/nav.js */ "./public/component/glc/nav.js");
/* harmony import */ var _loc_cosul_consul_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loc/cosul/consul.js */ "./public/component/loc/cosul/consul.js");
/* harmony import */ var _loc_newsbord_newsbord_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loc/newsbord/newsbord.js */ "./public/component/loc/newsbord/newsbord.js");
/* harmony import */ var _loc_newsbord_newview_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loc/newsbord/newview.js */ "./public/component/loc/newsbord/newview.js");
/* harmony import */ var _loc_newsbord_news_table_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loc/newsbord/news-table.js */ "./public/component/loc/newsbord/news-table.js");








const router = new VueRouter({
  routes: [{
      path: '/newsbord',
      component: _loc_newsbord_newsbord_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    },
    {
      path: '/newsbord/newbordview/:id',
      component: _loc_newsbord_newview_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      props:true
    },
    {
      path: '/consul',
      component: _loc_cosul_consul_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    }
  ]
})

new Vue({
  router,
  components: {
    'component-header': _glc_header_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    'component-nav': _glc_nav_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    'news-bord': _loc_newsbord_news_table_js__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
}).$mount('#app')


/***/ }),

/***/ "./public/component/glc/eventbus.js":
/*!******************************************!*\
  !*** ./public/component/glc/eventbus.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const EventBus = new Vue();
/* harmony default export */ __webpack_exports__["default"] = (EventBus);

/***/ }),

/***/ "./public/component/glc/header.js":
/*!****************************************!*\
  !*** ./public/component/glc/header.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const HeaderComponent = {
    template: `<header>
                <h1>금강 관리자 프로토타입</h1>
                </header>`,
    data(){
        return{
           
        }
    }

}

/* harmony default export */ __webpack_exports__["default"] = (HeaderComponent);

/***/ }),

/***/ "./public/component/glc/list-numbering.js":
/*!************************************************!*\
  !*** ./public/component/glc/list-numbering.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventbus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventbus.js */ "./public/component/glc/eventbus.js");



const listNumber = {
    props: ['DataLength','nowpage'],
    template: `<div class="page">
                <span class="none" v-if="start === 1"><i class="material-icons vam">navigate_before</i></span>
                <span v-else v-on:click='FrontList'><i class="material-icons vam">navigate_before</i></span>

                <span class="nobtn" v-for = "j in limit" v-if = 'j <= limit && j >= start' v-on:click='NextPage(j,j+1)'>{{j}}</span>

                <span v-on:click='NextList' v-if='DataLength > 10 && limit < DataLength '><i class="material-icons vam">navigate_next</i></span>
                <span class='none' v-else><i class="material-icons vam">navigate_next</i></span>

            </div>`,
    data(){
        return{
            thisNumber:null,
            thisIndex:0,
            start:1,
            limit:10,
            lists:null              
        }
    },
    created(){

        this.thisNumber = this.DataLength
        if(this.DataLength <= 10){
            this.limit = this.DataLength
        }
        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('ListLength',(Data)=>{
        })

        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('UpdateList',(Data)=>{
            this.limit = Data.DataLength;
            this.thisNumber = Data.nowpage
        })

    },
    mounted(){
        this.thisNumber = this.nowpage
        const NoBtn = document.querySelectorAll('.nobtn')
        if(NoBtn.length>0){
            NoBtn[0].className = 'nobtn on'
        }
    },
    updated(){
        const NoBtn = document.querySelectorAll('.nobtn')
        if(NoBtn.length>0){
            NoBtn[0].className = 'nobtn on'
        }

    },
    methods:{
        ActivationBtn(j){

            const NoBtn = document.querySelectorAll('.nobtn')
            const LimitNo = this.limit - 10;
            for(let i = 0; i < NoBtn.length; i++){
                NoBtn[i].className = 'nobtn'
            }

            if(this.limit == this.DataLength){
                NoBtn[j%10-1].className = 'nobtn on'
            }
            
            else{
                NoBtn[j-1-LimitNo].className = 'nobtn on'
            }
        },
        NextPage(i,ThisIndex){
            if(this.thisIndex+1 < ThisIndex){
                this.thisNumber+=10;
                this.thisIndex = i
                this.ActivationBtn(i)
            }
            else if(this.thisIndex+1 > ThisIndex){
                this.thisNumber-=10;
                this.thisIndex = i
                this.ActivationBtn(i)
            }
            _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$emit('NextPage',i-1)    

        },
        NextList(){
            this.start+=10;
            if(this.limit+10 > this.DataLength){
                this.limit = this.DataLength
                
            }
            else{
                this.limit+=10;
                this.ActivationBtn(this.start)
            }
            this.NextPage(this.start,this.start+1)

        },
        FrontList(){
            
            this.start-=10;
            this.limit = Math.ceil((this.limit-10)/10)*10

            if(this.start == 1){
                this.limit = 10;
            }

            this.NextPage(this.start,this.start+1)
            this.ActivationBtn(this.start)

        }

    }
  
}

/* harmony default export */ __webpack_exports__["default"] = (listNumber);

/***/ }),

/***/ "./public/component/glc/nav.js":
/*!*************************************!*\
  !*** ./public/component/glc/nav.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const NavComponent = {
    template: `<nav>
                    <ul>
                        <router-link tag='li' to='/0'>
                            <b class="caret fr"></b>
                            사용자관리
                        </router-link>
                        <router-link tag='li' to='/1'>
                            <b class="caret fr"></b>
                            조감도관리
                        </router-link>

                        <router-link tag='li' to='/2'>
                            <b class="caret fr"></b>
                            엑셀파일 관리
                        </router-link>

                        <router-link tag='li' to='/3'>
                            <b class="caret fr"></b>
                            입주의향서
                        </router-link>

                        <router-link tag='li' to='/4'>
                            <b class="caret fr"></b>
                            현장사진/드론영상
                        </router-link>

                        <router-link tag='li' to='/newsbord'>
                            <b class="caret fr"></b>
                            보도자료
                        </router-link>

                        <router-link tag='li' to='/Consul'>
                            <b class="caret fr"></b>
                            상담신청
                        </router-link>
                    </ul>
                </nav>`,
    data() {
        return {

        }
    }

}

/* harmony default export */ __webpack_exports__["default"] = (NavComponent);

/***/ }),

/***/ "./public/component/loc/cosul/consul.js":
/*!**********************************************!*\
  !*** ./public/component/loc/cosul/consul.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Consul = {
    template:`
    <div class="con_wrap">
        <div class='content new_bord'>
            <h2>상담신청</h2>
            <div class='filter'></div>
            <div>
            </div>
        </div>
    </div>`,
}

/* harmony default export */ __webpack_exports__["default"] = (Consul);

/***/ }),

/***/ "./public/component/loc/newsbord/news-table.js":
/*!*****************************************************!*\
  !*** ./public/component/loc/newsbord/news-table.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glc_list_numbering_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../glc/list-numbering.js */ "./public/component/glc/list-numbering.js");
/* harmony import */ var _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../glc/eventbus.js */ "./public/component/glc/eventbus.js");




const newsTable = {
    template: `<div class='table_wrap'>
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
                        <router-link class='new_view_tr' tag='tr' v-for='(result,i) in results' v-bind:to = "'/newsbord/newbordview/'+result.idx" v-if='i < limit && i >= start'>
                            <td>{{i+1}}</td>
                            <td>{{result.cate}}</td>
                            <td>{{result.img}}</td>
                            <td>{{result.title}}</td>
                            <td>{{result.join}}</td>
                        </router-link>
                    </tbody>
                </table>
                <list-number v-bind:nowpage = 'this.limit-10' v-bind:DataLength='Math.ceil((this.results.length)/10)'></list-number>
                <div class="foot_btn">
                    <router-link to='newsbord/newbordview/new' class="b_add b_blue">등록</router-link>
                </div>

            </div>`,
    components: {
        'list-number': _glc_list_numbering_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    },
    data() {
        return {
            lists: Array,
            results: Array,
            start: 0,
            limit: 10
        }
    },

    created() {

        // db에서 가져온데이터를 this.lists에 담아야함
        this.lists = [{
                idx: 0,
                img: "",
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "삼성"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            }, {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            }, {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            }, {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도",
                join: 340,
                cate: "부동산"
            },
            {
                idx: 0,
                img: "",
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "삼성"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도",
                join: 340,
                cate: "부동산"
            },
            {
                idx: 0,
                img: "",
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "삼성"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도",
                join: 340,
                cate: "부동산"
            },
            {
                idx: 0,
                img: "",
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "삼성"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도",
                join: 340,
                cate: "부동산"
            },
            {
                idx: 0,
                img: "",
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "삼성"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도",
                join: 340,
                cate: "부동산"
            },
            {
                idx: 0,
                img: "",
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "삼성"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도",
                join: 340,
                cate: "부동산"
            },
            {
                idx: 0,
                img: "",
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "삼성"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도",
                join: 340,
                cate: "부동산"
            }, {
                idx: 0,
                img: "",
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "삼성"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도",
                join: 340,
                cate: "부동산"
            },
            {
                idx: 0,
                img: "",
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "삼성"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안"
            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도",
                join: 340,
                cate: "부동산"
            }
        ]

    },
    mounted() {
        this.results = this.lists;
        _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('UpdateList', {
            DataLength: Math.ceil((this.results.length) / 10),
            nowpage: this.limit - 10
        })
        _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["default"].$on('NextPage', (Data) => {
            this.start = Data * 10;
            this.limit = (Data * 10) + 10
        })
    },
    methods: {
        searchCate(event) {
            const lists = this.lists;
            const targetData = event.target.value;
            const result = lists.filter((x) => {
                return x.cate == targetData
            })

            this.results = result;
            if (targetData == '전체') {
                this.results = this.lists;
            }

            this.start = 0;
            this.limit = 10;
            _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('UpdateList', {
                DataLength: Math.ceil((this.results.length) / 10),
                nowpage: this.limit - 10
            })
        }

    }
}

/* harmony default export */ __webpack_exports__["default"] = (newsTable);

/***/ }),

/***/ "./public/component/loc/newsbord/newsbord.js":
/*!***************************************************!*\
  !*** ./public/component/loc/newsbord/newsbord.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _news_table_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-table.js */ "./public/component/loc/newsbord/news-table.js");

const NewsBord = {
    template:`
    <div class="con_wrap">
        <div class='content new_bord'>
            <h2>보도 자료</h2>
                <news-bord></news-bord>
        </div>
    </div>`,
    components:{
        'news-bord':_news_table_js__WEBPACK_IMPORTED_MODULE_0__["default"]
    }
    // components:{
        // 'news-bord':newsTable
    // }
}

/* harmony default export */ __webpack_exports__["default"] = (NewsBord);




/***/ }),

/***/ "./public/component/loc/newsbord/newview.js":
/*!**************************************************!*\
  !*** ./public/component/loc/newsbord/newview.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const NewsView = {
    props: ['id'],
    template: `
    <div class="con_wrap">
        <div class='content new_bord'>
            <h2 v-if = "id ==='new'">보도 자료 등록</h2>
            <h2 v-else>보도 자료</h2>
            <div class="panel mody">
            <ul>
                <li><h5>작성자</h5></li>
                <li class='harf'>
                    <input type='text'/>
                </li>
                <li><h5>분류</h5></li>
                <li class='harf'>
                    <select>
                        <option>분류</option>
                        <option>삼성</option>
                        <option>천안</option>
                        <option>부동산</option>
                        <option>기타</option>
                    </select>
                </li>
                <li><h5>제목</h5></li>
                <li>
                    <input type='text'/>
                </li>
                <li><h5>링크</h5></li>
                <li>
                    <input type='text'/>
                </li>
                <li><h5>대표이미지</h5></li>
                <li>
                <div class="input-file"> <input type="text" readonly="readonly" class="file-name" /> <label for="upload01" class="file-label">파일 업로드</label> <input type="file" name="" id="upload01" class="file-upload" /> </div>
                </li>
                <li><h5>내용</h5></li>
                <li>
                    <textarea>
                        에디터활용해야함... 어떤거로할지 고민
                    </textarea>
                </li>
            </ul>
            </div>

            <div class="btn_wrap">
                <span class="b_red" v-if="id != 'new'">삭제</span>
                <span class="b_blue" v-if="id === 'new'">등록</span>
                <span class="b_blue" v-else>수정</span>
                <router-link tag='span' to='/newsbord' class="b_sgrey">목록</span>
            </div>

        </div>
    </div>`,
    created(){
        this.fileUploderStyle()

    },
    methods:{
        fileUploderStyle(){
            (function ($) {
                var $fileBox = null;
                $(function () {
                    init();
                })
    
                function init() {
                    $fileBox = $('.input-file');
                    fileLoad();
                }
                function fileLoad() {
                    $.each($fileBox,
                        function (idx) {
                            var $this = $fileBox.eq(idx),
                                $btnUpload = $this.find('[type="file"]'),
                                $label = $this.find('.file-label');
                            $btnUpload.on('change', function () {
                                var $target = $(this),
                                    fileName = $target.val(),
                                    $fileText = $target.siblings('.file-name');
                                $fileText.val(fileName);
                            })
                            $btnUpload.on('focusin focusout',
                                function (e) {
                                    e.type == 'focusin' ? $label.addClass('file-focus') : $label.removeClass('file-focus');
                                })
                        })
                }
            })(jQuery);
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (NewsView);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map