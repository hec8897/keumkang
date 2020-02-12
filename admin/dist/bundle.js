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
/* harmony import */ var _loc_newsbord_newsbord_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loc/newsbord/newsbord.js */ "./public/component/loc/newsbord/newsbord.js");
/* harmony import */ var _loc_newsbord_newview_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loc/newsbord/newview.js */ "./public/component/loc/newsbord/newview.js");
/* harmony import */ var _loc_newsbord_news_table_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loc/newsbord/news-table.js */ "./public/component/loc/newsbord/news-table.js");
/* harmony import */ var _loc_cosul_consul_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loc/cosul/consul.js */ "./public/component/loc/cosul/consul.js");
/* harmony import */ var _loc_cosul_consul_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loc/cosul/consul-view.js */ "./public/component/loc/cosul/consul-view.js");
/* harmony import */ var _loc_user_user_main_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loc/user/user.main.js */ "./public/component/loc/user/user.main.js");
/* harmony import */ var _loc_cosul_consil_table_share__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loc/cosul/consil-table-share */ "./public/component/loc/cosul/consil-table-share.js");
/* harmony import */ var _loc_login_login_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loc/login/login_page */ "./public/component/loc/login/login_page.js");












const router = new VueRouter({

  routes: [{
      path: '#/',
      component: _loc_login_login_page__WEBPACK_IMPORTED_MODULE_9__["default"]
    },
    {
      path: '/userview',
      component: _loc_user_user_main_js__WEBPACK_IMPORTED_MODULE_7__["default"]
    },
    {
      path: '/newsbord',
      component: _loc_newsbord_newsbord_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    },
    {
      path: '/newsbord/newbordview/:idx',
      component: _loc_newsbord_newview_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      props: true

    },
    {
      path: '/consul',
      component: _loc_cosul_consul_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    },
    {
      path: '/cflag',
      component: _loc_cosul_consil_table_share__WEBPACK_IMPORTED_MODULE_8__["default"]
    },
    {
      path: '/consul/consulview/:idx',
      component: _loc_cosul_consul_view_js__WEBPACK_IMPORTED_MODULE_6__["default"],
      props: true
    },
  ]
})


new Vue({
  router,
  components: {
    'component-header': _glc_header_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    'component-nav': _glc_nav_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    'news-bord': _loc_newsbord_news_table_js__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  template: `
  <div>
        <component-header></component-header>
        <component-nav></component-nav>
        <router-view></router-view>
  </div>
  `

}).$mount('#app')


/***/ }),

/***/ "./public/component/glc/del-modal.js":
/*!*******************************************!*\
  !*** ./public/component/glc/del-modal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventbus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventbus.js */ "./public/component/glc/eventbus.js");


const DelteModal = {
    props: ['tb'],
    template: `<div class="pop-window fade" id="modal-del">
                <div class="alert">
                    <div class="alert_con">
                        <i class="material-icons red">error_outline</i>
                        <p>{{ment}}</p>
                        <p>{{ment2}}</p>
                    </div>
                    <div class="modal_foot">
                        <span  class="b_red">확인</span>
                        <span v-on:click='ModalClose' class="b_sgrey">취소</span>
                    </div>
                </div>
            </div>`,
    data() {
        return {
            idx: null,
            thisTarget: null,
            Data: null,
            ment: '정말로 삭제 하시겠습니까?',
            ment2:'(삭제후엔 복구가 불가능합니다)'
        }
    },
    created() {
        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('News', (Data) => {
            this.ment = '보도자료를 삭제합니다'
            console.log(Data)
        })
        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('consul', (Data) => {
            this.ment = '상담내역을 삭제합니다'
            console.log('상담신청삭제' + Data)
        })
        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('NewsImg', (Data) => {
            this.ment = '메인 이미지를 삭제합니다'
            console.log('이미지삭제' + Data)
        })
        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('account_del', (Data) => {
            this.ment = '사용자 계정을 삭제합니다'

            console.log('사용자계정 삭제' + Data)
        })
        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('account_use', (Data) => {
            this.ment = '사용자 계정 접근을 중단합니다'
            this.ment2 = ''

            console.log('사용자 계정 비승인' + Data)
        })
    },
    methods: {
        ModalClose() {
            const Modal = document.getElementById('modal-del')
            Modal.style.opacity = '0';

            setTimeout(() => {
                Modal.style.display = 'none';
            }, 100);
        }

    }
}

/* harmony default export */ __webpack_exports__["default"] = (DelteModal);

/***/ }),

/***/ "./public/component/glc/etc-modal.js":
/*!*******************************************!*\
  !*** ./public/component/glc/etc-modal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventbus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventbus.js */ "./public/component/glc/eventbus.js");


const etcModal = {
    template: `<div class="pop-window fade" id="modal-etc">
                <div class="alert">
                    <div class="alert_con">
                        <i class="material-icons blue">error_outline</i>
                        <p>패스워드 변경</p>
                        <ul class='inputs' v-if="this.mode === 'chpw'">
                            <form>
                            <li>
                                <input type='password' id='reqpassword' placeholder='변경하실 패스워드'>
                            </li>
                            <li>
                                <input type='password' id='reqpassword_re' placeholder='변경하실 패스워드 확인'>
                            </li>
                            </form>
                        </ul>
                        <ul class='inputs' v-else-if="this.mode === 'cflag'">
                            <form>
                            <li>
                                <select disabled>
                                    <option>배정팀(비활성화)</option>
                                </select>
                            </li>
                            <li>
                         
                                <select>
                                    <option>배정할 상담사</option>
                                </select>
                            </li>
                         
                            </form>
                        </ul>
                    </div>

                    <div class="modal_foot">
                        <span class="b_blue" @click='PostData' v-if="mode === 'chpw'">확인</span>
                        <span class="b_blue" @click=' shareData' v-else-if="mode === 'cflag'">확인</span>
                        <span v-on:click='ModalClose' class="b_sgrey">취소</span>
                    </div>
                </div>
            </div>`,
    data() {
        return {
            idx: null,
            Data: null,
            mode: null
        }
    },
    created() {
        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('changePw', (Data) => {
            console.log('패스워드 변경')
            this.mode = 'chpw';
        })

        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('shareCflag', (Data) => {
            console.log('상담사배정')
            this.mode = 'cflag';
            console.log(Data)
        })


    },
  
    methods: {
        ModalClose() {
            const Modal = document.getElementById('modal-etc')
            Modal.style.opacity = '0';

            setTimeout(() => {
                Modal.style.display = 'none';
            }, 100);
        },
        shareData(){

        },
        PostData(a) {
            const reqPassword = document.getElementById('reqpassword')
            const reqPasswordRe = document.getElementById('reqpassword_re')
            if (reqPassword.value == reqPasswordRe.value) {
                console.log('일치2')
            } else {
                console.log('불일치')
            }
            // if(this.mode == 'user'){
            //     eventBus.$on('idx',(Data)=>{
            //         this.Data = Data.Data
            //     })
            // }
        },

    }
}

/* harmony default export */ __webpack_exports__["default"] = (etcModal);
2

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
                        
                    <router-link tag='li' to='/consul'>
                            <b class="caret fr"></b>
                            상담신청
                        </router-link>
                        
                        <router-link tag='li' to='/cflag'>
                            <b class="caret fr"></b>
                            배정받은상담
                        </router-link>
                        <router-link tag='li' to='/userview'>
                            <b class="caret fr"></b>
                            사용자관리
                        </router-link>
                        <router-link tag='li' to='/newsbord'>
                            <b class="caret fr"></b>
                            보도자료
                        </router-link>
                        <router-link tag='li' to='/1'>
                            <b class="caret fr"></b>
                            조감도관리
                        </router-link>

                        <router-link tag='li' to='/2'>
                            <b class="caret fr"></b>
                            엑셀파일 관리/입주의향서
                        </router-link>

                        <router-link tag='li' to='/4'>
                            <b class="caret fr"></b>
                            현장사진/드론영상
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

/***/ "./public/component/glc/save-modal.js":
/*!********************************************!*\
  !*** ./public/component/glc/save-modal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventbus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventbus.js */ "./public/component/glc/eventbus.js");


const saveModal = {
    template: `<div class="pop-window fade" id="modal-alert">
                <div class="alert">
                    <div class="alert_con">
                        <i class="material-icons blue">error_outline</i>
                        <p>{{ment}}</p>
                    </div>
                    <div class="modal_foot">
                        <span class="b_blue">확인</span>
                        <span v-on:click='ModalClose' class="b_sgrey">취소</span>
                    </div>
                </div>
            </div>`,
    data() {
        return {
            idx: null,
            Data:null,
            mode:null,
            ment:"보도자료를 등록 하시겠습니까?"
        }
    },
    mounted(){
        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('new',(Data)=>{
            this.ment = '보도자료를 등록 하시겠습니까?'
            this.mode = 'new'
        })
        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('updateNews',(Data)=>{
            this.ment = '보도자료를 수정 하시겠습니까?'
            this.mode = 'update'
        })
        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('account_use',(Data)=>{
            this.ment = '계정 사용을 승인합니다'
            this.mode = 'acc'
        })
       

    },

    methods: {
        ModalClose() {
            const Modal = document.getElementById('modal-alert')
            Modal.style.opacity = '0';

            setTimeout(() => {
                Modal.style.display = 'none';
            }, 100);
        },
        GetData(a) {
            // if(this.mode == 'user'){
            //     eventBus.$on('idx',(Data)=>{
            //         this.Data = Data.Data
            //     })
            // }
        },
        // PostData(){
        //     if(this.mode == 'user'){
        //         let baseURI = 'api/user.proc.php'

        //         axios.post(`${baseURI}`, {
        //             mode:'user_update',
        //             idx:this.Data.Idx,
        //             chId:this.Data.ChId,
        //             chPw:this.Data.ChPw,
        //             chPhone:this.Data.ChPhone
        //         })
        //         .then((result) => {
        //             if(result.data.phpResult == 'ok'){
        //                 alert('변경이완료되었습니다')
        //                 this.ModalClose();
        //                 eventBus.$emit('userInfo',"change")
        //             }
        //         })
        //         .catch(err => console.log('Login: ', err));
        //     }
        
        // }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (saveModal);

/***/ }),

/***/ "./public/component/loc/cosul/consil-table-share.js":
/*!**********************************************************!*\
  !*** ./public/component/loc/cosul/consil-table-share.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glc_list_numbering_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../glc/list-numbering.js */ "./public/component/glc/list-numbering.js");
/* harmony import */ var _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../glc/eventbus.js */ "./public/component/glc/eventbus.js");




const shareConsulView = {
    template: `
        <div class="con_wrap">
        <div class='content consul_bord'>
            <h2>배정된상담신청</h2>
    <div class='table_wrap consul_wrap'>
                <div class='filters'>
                    <span>배정자료</span><b>{{this.results.length}}건</b>
                    <select v-on:change="searchCate($event)">
                        <option value='전체'>전체</option>
                        <option value='삼성'>삼성</option>
                        <option value='천안'>천안</option>
                        <option value='부동산'>부동산</option>
                    </select>


                </div>
                <table class='consul_tb'>
                    <thead>
                        <tr>
                            <td></td>
                            <td>번호</td>
                            <td>분류</td>
                            <td>고객명</td>
                            <td>전화번호</td>
                            <td>소속</td>
                            <td>담당</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='(result,i) in results' v-if='i < limit && i >= start'>
                            <td><input type="checkbox" id="checkbox_1" value="" /></td>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{i+1}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.cate}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.reqName}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.reqPhone}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.Class}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.Cflag}}</router-link>
                        </tr>
                    </tbody>
                </table>
                <list-number v-bind:nowpage = 'this.limit-10' v-bind:DataLength='Math.ceil((this.results.length)/10)'></list-number>
            </div>
            <div>
            </div>
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
        this.lists = [{
                idx: 0,
                cate: '삼성',
                reqName: '개발자',
                reqPhone: '01023866487',
                Class: "금강",
                Cflag: '김다우'
            },
            {
                idx: 0,
                cate: '삼성',
                reqName: '개발자',
                reqPhone: '01023866487',
                Class: "금강",
                Cflag: '김다우'
            }
        ]

        // db에서 가져온데이터를 this.lists에 담아야함


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

/* harmony default export */ __webpack_exports__["default"] = (shareConsulView);

/***/ }),

/***/ "./public/component/loc/cosul/consul-table.js":
/*!****************************************************!*\
  !*** ./public/component/loc/cosul/consul-table.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glc_list_numbering_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../glc/list-numbering.js */ "./public/component/glc/list-numbering.js");
/* harmony import */ var _glc_etc_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../glc/etc-modal */ "./public/component/glc/etc-modal.js");
/* harmony import */ var _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../glc/eventbus.js */ "./public/component/glc/eventbus.js");




const ConsulView = {
    template: `<div class='table_wrap consul_wrap'>
                <share-modal></share-modal>
                <div class='filters'>
                    <span>상담신청 건</span><b>{{this.results.length}}건</b>
                    <select v-on:change="searchCate($event)">
                        <option value='전체'>전체</option>
                        <option value='삼성'>삼성</option>
                        <option value='천안'>천안</option>
                        <option value='부동산'>부동산</option>
                    </select>
                    <span class='share_btn b_blue' @click='OpenEtcModal'>상담사 배정</span>

                </div>
                <table class='consul_tb'>
                    <thead>
                        <tr>
                            <td></td>
                            <td>번호</td>
                            <td>분류</td>
                            <td>고객명</td>
                            <td>전화번호</td>
                            <td>소속</td>
                            <td>담당</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='(result,i) in results' v-if='i < limit && i >= start'>
                            <td><input type="checkbox" id="checkbox_1" v-on:click='SelectData($event,result.idx)' value="" /></td>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{i+1}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.cate}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.reqName}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.reqPhone}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.Class}}</router-link>
                            <router-link tag='td' class='tb_cursor' v-bind:to = "'consul/consulview/'+result.idx" >{{result.Cflag}}</router-link>
                        </tr>
                    </tbody>
                </table>
                <list-number v-bind:nowpage = 'this.limit-10' v-bind:DataLength='Math.ceil((this.results.length)/10)'></list-number>
            </div>`,
    components: {
        'list-number': _glc_list_numbering_js__WEBPACK_IMPORTED_MODULE_0__["default"],
        'share-modal': _glc_etc_modal__WEBPACK_IMPORTED_MODULE_1__["default"]
    },
    data() {
        return {
            lists: Array,
            results: Array,
            start: 0,
            limit: 10,
            SelectDataArray:[]
        }
    },

    created() {
        const baseURI = 'api/getdata.consult.php';
        axios.post(`${baseURI}`, {
            })
            .then((result) => {
                    if (result.data.phpResult == 'ok') {
                        this.lists = result.data.result
                        this.results = this.lists;
                    }
            })
            .catch(err => console.log('Login: ', err));
        // this.lists = [
        //     {
        //         idx:0,
        //         cate:'삼성',
        //         reqName:'개발자',
        //         reqPhone:'01023866487',
        //         Class:"금강",
        //         Cflag:'김다우'
        //     },
        //     {
        //         idx:1,
        //         cate:'삼성',
        //         reqName:'개발자',
        //         reqPhone:'01023866487',
        //         Class:"금강",
        //         Cflag:'김다우'
        //     }
        // ]
    },
    mounted() {
        // this.results = this.lists;
        _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["default"].$emit('UpdateList', {
            DataLength: Math.ceil((this.results.length) / 10),
            nowpage: this.limit - 10
        })
        _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["default"].$on('NextPage', (Data) => {
            this.start = Data * 10;
            this.limit = (Data * 10) + 10
        })
    },
    methods: {
        SelectData(event,Data){
            if(event.target.checked == true){
                this.SelectDataArray.push(Data)
            }else{
                this.SelectDataArray.splice(this.SelectDataArray.indexOf(Data),1);
            }
        },
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
            _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["default"].$emit('UpdateList', {
                DataLength: Math.ceil((this.results.length) / 10),
                nowpage: this.limit - 10
            })
        },
        OpenEtcModal() {
            if(this.SelectDataArray.length < 1){
                alert('자료를 선택해주세요')

            }
            else{
                const Modal = document.getElementById('modal-etc')
                Modal.style.display = 'block';
                setTimeout(() => {
                    Modal.style.opacity = '1';
                }, 100);
                _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["default"].$emit('shareCflag', this.SelectDataArray)
            }
        }

    }
}

/* harmony default export */ __webpack_exports__["default"] = (ConsulView);

/***/ }),

/***/ "./public/component/loc/cosul/consul-view.js":
/*!***************************************************!*\
  !*** ./public/component/loc/cosul/consul-view.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glc_del_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../glc/del-modal.js */ "./public/component/glc/del-modal.js");
/* harmony import */ var _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../glc/eventbus.js */ "./public/component/glc/eventbus.js");



const ConsulView = {
    props: ['idx'],
    template: `<div class="con_wrap">
            <div class='content'>
            <h2>상담신청</h2>
                    <delte-modal></delte-modal>
                    <div class="info_wrap">
                        <div class="order">
                            <table class='consul_tb'>
                            <tr>
                                    <th>분류</th>
                                    <td>{{list.cate}}</td>
                                </tr>
                                <tr>
                                    <th>상담신청일</th>
                                    <td>{{list.InsertDate}}</td>
                                </tr>
                                <tr>
                                    <th>성함</th>
                                    <td>{{list.reqName}}</td>
                                </tr>
                                <tr>
                                    <th>연락처</th>
                                    <td>{{list.reqPhone}}</td>
                                </tr>
                                <tr>
                                    <th>상담 내용</th>
                                    <td>{{list.reqMemo}}</td>
                                </tr>
                                <tr>
                                    <th>담당</th>
                                    <td>{{list.Class}}/{{list.Cflag}}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="btn_wrap">
                        <span class="b_red" v-on:click="OpenDelteModal(list.idx,'consul')">삭제</span>
                        <router-link to="/consul" class="b_sgrey" tag='span'>목록</router-link>
                    </div> 
                </div>
            </div>`,
    components: {
        'delte-modal': _glc_del_modal_js__WEBPACK_IMPORTED_MODULE_0__["default"]
    },
    data() {
        return {
            list:Array
            // list: {
            //     idx: 0,
            //     cate: '삼성',
            //     InsertDate: '2020-02-11',
            //     reqName: '개발자',
            //     reqPhone: '01023866487',
            //     reqMemo: '상담내용상담내영',
            //     Class: "금강",
            //     Cflag: '김다우'
            // }
        }
    },
    created() {
        const baseURI = 'api/getdata.consult.php';
        axios.post(`${baseURI}`, {
            idx:this.idx
            })
            .then((result) => {
                    if (result.data.phpResult == 'ok') {
                        this.list = result.data.result[0]
                    }
            })
            .catch(err => console.log('Login: ', err));
    },
    methods: {
        OpenDelteModal(Data, mode) {
            const Modal = document.getElementById('modal-del')
            Modal.style.display = 'block';
            setTimeout(() => {
                Modal.style.opacity = '1';
            }, 100);
            _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["default"].$emit(mode, Data)
        }
        // GetData() {
        //     const baseURI = 'api/consul.data.php';
        //     axios.post(`${baseURI}`, {
        //             mode: 'list',
        //             idx: this.idx
        //         })
        //         .then((result) => {

        //             const ResultData = result.data.result[0]
        //             if (result.data.phpResult == 'ok') {
        //                 this.list = ResultData;
        //             }

        //         })
        //         .catch(err => console.log('Login: ', err));

        // }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (ConsulView);

/***/ }),

/***/ "./public/component/loc/cosul/consul.js":
/*!**********************************************!*\
  !*** ./public/component/loc/cosul/consul.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consul_table_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consul-table.js */ "./public/component/loc/cosul/consul-table.js");


const Consul = {
    template:`
    <div class="con_wrap">
        <div class='content consul_bord'>
            <h2>상담신청</h2>
            <consul-table></consul-table>
            <div>
            </div>
        </div>
    </div>`,
    components:{
        'consul-table':_consul_table_js__WEBPACK_IMPORTED_MODULE_0__["default"]
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Consul);

/***/ }),

/***/ "./public/component/loc/login/login_page.js":
/*!**************************************************!*\
  !*** ./public/component/loc/login/login_page.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const LoginPage = {
    template:`<div>13</div>`
}

/* harmony default export */ __webpack_exports__["default"] = (LoginPage);

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
                            <td>
                                <img v-bind:src='result.img' v-if="result.img!=''" alt='미리보기'>
                                <img src='images/dev_img2.png' v-else alt='미리보기'>
                            </td>
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
        this.lists = [
            {
                idx: 0,
                img: "",
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "삼성",
                img: "images/dev_img.png"

            },
            {
                idx: 1,
                img: "",
                title: "인천 검단산업단지 안동포사거리 지하차도 착공",
                join: 340,
                cate: "천안",
                img: "images/dev_img.png"

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
        'news-bord' : _news_table_js__WEBPACK_IMPORTED_MODULE_0__["default"]
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
/* harmony import */ var _glc_save_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../glc/save-modal.js */ "./public/component/glc/save-modal.js");
/* harmony import */ var _glc_del_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../glc/del-modal.js */ "./public/component/glc/del-modal.js");
/* harmony import */ var _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../glc/eventbus.js */ "./public/component/glc/eventbus.js");




const NewsView = {
    props: ['id'],
    template: `
    <div class="con_wrap">
        <save-modal></save-modal>
        <delte-modal></delte-modal>
        <div class='content new_bord'>
            <h2 v-if = "id ==='new'">보도 자료 등록</h2>
            <h2 v-else>보도 자료</h2>
            <div class="panel mody">
            <ul>
                <li><h5>작성자</h5></li>
                <li class='harf'>
                    <input type='text' v-if="id === 'new' || list.writer === ''"/>
                    <input type='text' v-else v-bind:value='list.writer'/>
                </li>
                <li><h5>분류</h5></li>
                <li class='harf'>
                    <select v-if="id === 'new' || list.cate === ''">
                        <option value=''>분류</option>
                        <option value='삼성'>삼성</option>
                        <option value='천안'>천안</option>
                        <option value='부동산'>부동산</option>
                        <option value='기타'>기타</option>
                    </select>
                    <select v-else>
                        <option v-if="list.cate === ''" value='' selected>분류</option>
                        <option v-else value=''>분류</option>

                        <option v-if="list.cate === '삼성'" value='삼성' selected>삼성</option>
                        <option v-else value='삼성'>삼성</option>

                        <option v-if="list.cate === '천안'" value='천안' selected>천안</option>
                        <option v-else value='천안'>천안</option>

                        <option v-if="list.cate === '부동산'" value='부동산' selected>부동산</option>
                        <option v-else value='부동산'>부동산</option>

                        <option v-if="list.cate === '기타'" value='기타' selected>기타</option>
                        <option v-else value='기타'>기타</option>

                    </select>
                </li>
                <li><h5>제목</h5></li>
                <li>
                    <input type='text' v-if="id === 'new'" value=''/>
                    <input type='text' v-else v-bind:value='list.title'/>
                </li>
                <li><h5>링크</h5></li>
                <li>
                    <input type='text' v-if="id === 'new'" value=''/>
                    <input type='text' v-else v-bind:value='list.link'/>
                </li>
                <li><h5>대표이미지</h5></li>
                <li>
                <div class="input-file" v-if="id ==='new' || list.img === ''">
                    <input type="text" readonly="readonly" class="file-name" /> 
                    <label for="upload01" class="file-label">파일 업로드</label> 
                    <input type="file" name="" id="upload01" class="file-upload" ref="mainimg" />
                </div>

                <div class="input-file" v-else>
                    <a href='list.img' target='blank'>{{list.img}}</a>
                    <label for="upload01" class="file-label b_red" v-on:click="OpenDelteModal(list.idx,'NewsImg')">
                        파일 삭제
                    </label>
                </div>
                </li>
                <li><h5>내용</h5></li>
                <li>
                    <textarea>에디터활용해야함... 어떤거로할지</textarea>
                </li>
            </ul>
            </div>

            <div class="btn_wrap">
                <span class="b_red" v-if="id != 'new'" v-on:click="OpenDelteModal(list.idx,'News')">삭제</span>
                <span class="b_blue" v-if="id === 'new'" v-on:click="OpenSaveModal('new','new')">등록</span>
                <span class="b_blue" v-else v-on:click="OpenSaveModal(list.idx,'updateNews')">수정</span>
                <router-link tag='span' to='/newsbord' class="b_sgrey">목록</span>
            </div>

        </div>
    </div>`,
    components:{
        'save-modal':_glc_save_modal_js__WEBPACK_IMPORTED_MODULE_0__["default"],
        'delte-modal':_glc_del_modal_js__WEBPACK_IMPORTED_MODULE_1__["default"]
    },
    data() {
        return {
            list: {
                idx: 0,
                writer:"개발자",
                img: "images/dev_img.png",
                link:'http://123213',
                title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
                join: 340,
                cate: "천안",
                desc:""
            }

        }
    },
    created() {
        this.fileUploderStyle()

    },
    methods: {
        fileUploderStyle() {
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
                        function (ids) {
                            var $this = $fileBox.eq(ids),
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
        },
        OpenSaveModal(Data,mode) {
            const Modal = document.getElementById('modal-alert')
            Modal.style.display = 'block';
            setTimeout(() => {
                Modal.style.opacity = '1';
            }, 100);
            _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["default"].$emit(mode,Data)
        },

        OpenDelteModal(Data,mode) {
            const Modal = document.getElementById('modal-del')
            Modal.style.display = 'block';
            setTimeout(() => {
                Modal.style.opacity = '1';
            }, 100);
            _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_2__["default"].$emit(mode,Data)
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (NewsView);

/***/ }),

/***/ "./public/component/loc/user/component/user_info.js":
/*!**********************************************************!*\
  !*** ./public/component/loc/user/component/user_info.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glc_eventbus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../glc/eventbus */ "./public/component/glc/eventbus.js");

const userInfo = {
    props:['userData','dataIndex'],
    template:`
    <tr class='user_info'>
        <td><input type='checkbox' class='user_tool_check' v-on:click="PostDataUserTool($event,this.value)"></td>
        <td>{{list.userName}}</td>
        <td>{{list.userId}}</td>
        <td>{{list.Class}}</td>
        <td>{{list.userPhone}}</td>
        <td>{{list.DataCount}}</td>
        <td v-if="list.Activation === 1">정상</td>
        <td v-else>비승인</td>
    </tr>`,
    data(){
        return{
            list:Array,
        }
    },
    created(){
        this.list = this.userData;
    },
    methods:{
        PostDataUserTool(event,thisValue){
            let CheckedValue = event.target.checked;
            const userToolCheck = document.querySelectorAll('.user_tool_check')
            if(CheckedValue == true){
                _glc_eventbus__WEBPACK_IMPORTED_MODULE_0__["default"].$emit('GetUsertool', this.list)
                for(let i = 0; i<userToolCheck.length; i++){
                    userToolCheck[i].checked = false
                }
                event.target.checked = true
            }
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (userInfo);

/***/ }),

/***/ "./public/component/loc/user/component/user_tool.js":
/*!**********************************************************!*\
  !*** ./public/component/loc/user/component/user_tool.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glc_eventbus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../glc/eventbus */ "./public/component/glc/eventbus.js");
/* harmony import */ var _glc_del_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../glc/del-modal */ "./public/component/glc/del-modal.js");
/* harmony import */ var _glc_etc_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../glc/etc-modal */ "./public/component/glc/etc-modal.js");
/* harmony import */ var _glc_save_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../glc/save-modal */ "./public/component/glc/save-modal.js");






const userTool = {
    props:['userData'],
    template:`<div class='user_tool'>
        <del-modal></del-modal>
        <etc-modal></etc-modal>
        <save-modal></save-modal>
        <h4>선택된데이터 </h4>
        <ul>
            <li>이름:  <span>{{list.userName}}</span></li>
            <li>연락처 <span>{{list.userPhone}}</span></li>
            <li>소속: <span>{{list.Class}}</span></li>
            <li>아이디: <span>{{list.userId}}</span></li>
            <li>상태: <span v-if="list.Activation === 1">정상</span><span v-else-if ="list.Activation===0">비승인</span></li>

        </ul>
        <div class='tb_box'>
            <table>
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>고객명</td>
                        <td>연락처</td>
                        <td>분류</td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>성함</td>
                        <td>성함</td>
                        <td>성함</td>
                        <td>성함</td>
                    </tr>
                    <tr>
                        <td>성함</td>
                        <td>성함</td>
                        <td>성함</td>
                        <td>성함</td>
                    </tr>
                    <tr>
                        <td>성함</td>
                        <td>성함</td>
                        <td>성함</td>
                        <td>성함</td>
                    </tr>
                    <tr>
                        <td>성함</td>
                        <td>성함</td>
                        <td>성함</td>
                        <td>성함</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class='btns'>
            <span class='b_blue'@click="OpenEtcModal(this.idx,'account_del')">패스워드 변경</span>

            <span class='b_red' v-if="list.Activation === 1" @click="OpenDelteModal(this.idx,'account_beactive')">계정 접속 제한</span>
            <span class='b_blue' v-else-if ="list.Activation === 0" @click="OpenSaveModal(this.idx,'account_use')">계정 접속 승인</span>

            <span class='b_red' @click="OpenDelteModal(this.idx,'account_del')">계정 삭제</span>

        </div>

    </div>`,
    components:{
        'del-modal':_glc_del_modal__WEBPACK_IMPORTED_MODULE_1__["default"],
        'etc-modal':_glc_etc_modal__WEBPACK_IMPORTED_MODULE_2__["default"],
        'save-modal':_glc_save_modal__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    data(){
        return{
            list:Array
        }
    },
    created(){
        _glc_eventbus__WEBPACK_IMPORTED_MODULE_0__["default"].$on('GetUsertool', (Data)=>{
            this.list = Data
        })
    },
    methods:{
        OpenSaveModal(Data, mode) {
            if(this.list.length == 1){
                alert('계정을 선택해주세요')
            }
            else{
                const Modal = document.getElementById('modal-alert')
                Modal.style.display = 'block';
                setTimeout(() => {
                    Modal.style.opacity = '1';
                }, 100);
                _glc_eventbus__WEBPACK_IMPORTED_MODULE_0__["default"].$emit(mode, Data)
            }
        },
        OpenDelteModal(Data, mode) {
            if(this.list.length == 1){
                alert('계정을 선택해주세요')
            }
            else{

                const Modal = document.getElementById('modal-del')
                Modal.style.display = 'block';
                setTimeout(() => {
                    Modal.style.opacity = '1';
                }, 100);
                _glc_eventbus__WEBPACK_IMPORTED_MODULE_0__["default"].$emit(mode, Data)
            }
        },
        OpenEtcModal(Data) {
            if(this.list.length == 1){
                alert('계정을 선택해주세요')
            }
            else{
                const Modal = document.getElementById('modal-etc')
                Modal.style.display = 'block';
                setTimeout(() => {
                    Modal.style.opacity = '1';
                }, 100);
                _glc_eventbus__WEBPACK_IMPORTED_MODULE_0__["default"].$emit('changePw', this.list.idx)
            }
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (userTool);

/***/ }),

/***/ "./public/component/loc/user/user.main.js":
/*!************************************************!*\
  !*** ./public/component/loc/user/user.main.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_user_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/user_info */ "./public/component/loc/user/component/user_info.js");
/* harmony import */ var _component_user_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/user_tool */ "./public/component/loc/user/component/user_tool.js");
/* harmony import */ var _glc_list_numbering__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../glc/list-numbering */ "./public/component/glc/list-numbering.js");




const userMain = {
    template: `<div class="con_wrap">
    <div class='content user_bord'>
        <h2>사용자관리</h2>
        <user-tool></user-tool>
        <table class='user_tb'>
        <thead>
            <tr>
                <td></td>
                <td>이름</td>
                <td>아이디</td>
                <td>소속</td>
                <td>연락처</td>
                <td>배분건수</td>
                <td>상태</td>
            </tr>
        </thead>
        <tbody>
        <user-info v-for = 'list in lists' v-bind:userData='list'></user-info>
        </tbody>
        </table>
        <list-number v-bind:nowpage = 'this.limit-10' v-bind:DataLength='Math.ceil((this.results.length)/10)'></list-number>

        <div>
        </div>
    </div>
</div>`,
    components: {
        'user-info': _component_user_info__WEBPACK_IMPORTED_MODULE_0__["default"],
        'user-tool':_component_user_tool__WEBPACK_IMPORTED_MODULE_1__["default"],
        'list-number': _glc_list_numbering__WEBPACK_IMPORTED_MODULE_2__["default"],

    },
    mounted(){
        this.results = this.lists;
    },
    data(){
        return{
            start: 0,
            limit: 10,
            results:Array,
            lists:[
                {
                    idx:0,
                    userId:'hec8897',
                    userName:'김다운',
                    userPhone:'01000000000',
                    Class:'금강',
                    DataCount:2,
                    Activation:0
                },
                {
                    idx:0,
                    userId:'hec8897',
                    userName:'김다운22',
                    userPhone:'01000000000',
                    Class:'금강',
                    DataCount:2,
                    Activation:1

                }
            ]
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (userMain);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map