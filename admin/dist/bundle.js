function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./public/component/app.js");
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./public/component/app.js":
  /*!*********************************!*\
    !*** ./public/component/app.js ***!
    \*********************************/

  /*! no exports provided */

  /***/
  function publicComponentAppJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _glc_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./glc/header.js */
    "./public/component/glc/header.js");
    /* harmony import */


    var _glc_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./glc/nav.js */
    "./public/component/glc/nav.js");
    /* harmony import */


    var _loc_cosul_consul_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./loc/cosul/consul.js */
    "./public/component/loc/cosul/consul.js");
    /* harmony import */


    var _loc_newsbord_newsbord_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./loc/newsbord/newsbord.js */
    "./public/component/loc/newsbord/newsbord.js");
    /* harmony import */


    var _loc_newsbord_newview_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./loc/newsbord/newview.js */
    "./public/component/loc/newsbord/newview.js");
    /* harmony import */


    var _loc_newsbord_news_table_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./loc/newsbord/news-table.js */
    "./public/component/loc/newsbord/news-table.js");

    var router = new VueRouter({
      routes: [{
        path: '/newsbord',
        component: _loc_newsbord_newsbord_js__WEBPACK_IMPORTED_MODULE_3__["default"],
        children: [{
          path: '/newbordview:id',
          component: _loc_newsbord_newview_js__WEBPACK_IMPORTED_MODULE_4__["default"],
          props: true
        }]
      }, {
        path: '/consul',
        component: _loc_cosul_consul_js__WEBPACK_IMPORTED_MODULE_2__["default"]
      }]
    });
    var app = new Vue({
      router: router,
      components: {
        'component-header': _glc_header_js__WEBPACK_IMPORTED_MODULE_0__["default"],
        'component-nav': _glc_nav_js__WEBPACK_IMPORTED_MODULE_1__["default"],
        'news-bord': _loc_newsbord_news_table_js__WEBPACK_IMPORTED_MODULE_5__["default"]
      }
    }).$mount('#app');
    /***/
  },

  /***/
  "./public/component/glc/eventbus.js":
  /*!******************************************!*\
    !*** ./public/component/glc/eventbus.js ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function publicComponentGlcEventbusJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    var EventBus = new Vue();
    /* harmony default export */

    __webpack_exports__["default"] = EventBus;
    /***/
  },

  /***/
  "./public/component/glc/header.js":
  /*!****************************************!*\
    !*** ./public/component/glc/header.js ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function publicComponentGlcHeaderJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    var HeaderComponent = {
      template: "<header>\n                <h1>\uAE08\uAC15 \uAD00\uB9AC\uC790 \uD504\uB85C\uD1A0\uD0C0\uC785</h1>\n                </header>",
      data: function data() {
        return {};
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = HeaderComponent;
    /***/
  },

  /***/
  "./public/component/glc/list-numbering.js":
  /*!************************************************!*\
    !*** ./public/component/glc/list-numbering.js ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function publicComponentGlcListNumberingJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _eventbus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./eventbus.js */
    "./public/component/glc/eventbus.js");

    var listNumber = {
      props: ['DataLength', 'nowpage'],
      template: "<div class=\"page\">\n                <span class=\"none\" v-if=\"start === 1\"><i class=\"material-icons vam\">navigate_before</i></span>\n                <span v-else v-on:click='FrontList'><i class=\"material-icons vam\">navigate_before</i></span>\n\n                <span class=\"nobtn\" v-for = \"j in limit\" v-if = 'j <= limit && j >= start' v-on:click='NextPage(j,j+1)'>{{j}}</span>\n\n                <span v-on:click='NextList' v-if='DataLength > 10 && limit < DataLength '><i class=\"material-icons vam\">navigate_next</i></span>\n                <span class='none' v-else><i class=\"material-icons vam\">navigate_next</i></span>\n\n            </div>",
      data: function data() {
        return {
          thisNumber: null,
          thisIndex: 0,
          start: 1,
          limit: 10,
          lists: null
        };
      },
      created: function created() {
        var _this = this;

        this.thisNumber = this.DataLength;

        if (this.DataLength <= 10) {
          this.limit = this.DataLength;
        }

        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('ListLength', function (Data) {});

        _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('UpdateList', function (Data) {
          _this.limit = Data.DataLength;
          _this.thisNumber = Data.nowpage;
        });
      },
      mounted: function mounted() {
        this.thisNumber = this.nowpage;
        var NoBtn = document.querySelectorAll('.nobtn');

        if (NoBtn.length > 0) {
          NoBtn[0].className = 'nobtn on';
        }
      },
      updated: function updated() {
        var NoBtn = document.querySelectorAll('.nobtn');

        if (NoBtn.length > 0) {
          NoBtn[0].className = 'nobtn on';
        }
      },
      methods: {
        ActivationBtn: function ActivationBtn(j) {
          var NoBtn = document.querySelectorAll('.nobtn');
          var LimitNo = this.limit - 10;

          for (var i = 0; i < NoBtn.length; i++) {
            NoBtn[i].className = 'nobtn';
          }

          if (this.limit == this.DataLength) {
            NoBtn[j % 10 - 1].className = 'nobtn on';
          } else {
            NoBtn[j - 1 - LimitNo].className = 'nobtn on';
          }
        },
        NextPage: function NextPage(i, ThisIndex) {
          if (this.thisIndex + 1 < ThisIndex) {
            this.thisNumber += 10;
            this.thisIndex = i;
            this.ActivationBtn(i);
          } else if (this.thisIndex + 1 > ThisIndex) {
            this.thisNumber -= 10;
            this.thisIndex = i;
            this.ActivationBtn(i);
          }

          _eventbus_js__WEBPACK_IMPORTED_MODULE_0__["default"].$emit('NextPage', i - 1);
        },
        NextList: function NextList() {
          this.start += 10;

          if (this.limit + 10 > this.DataLength) {
            this.limit = this.DataLength;
          } else {
            this.limit += 10;
            this.ActivationBtn(this.start);
          }

          this.NextPage(this.start, this.start + 1);
        },
        FrontList: function FrontList() {
          this.start -= 10;
          this.limit = Math.ceil((this.limit - 10) / 10) * 10;

          if (this.start == 1) {
            this.limit = 10;
          }

          this.NextPage(this.start, this.start + 1);
          this.ActivationBtn(this.start);
        }
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = listNumber;
    /***/
  },

  /***/
  "./public/component/glc/nav.js":
  /*!*************************************!*\
    !*** ./public/component/glc/nav.js ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function publicComponentGlcNavJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    var NavComponent = {
      template: "<nav>\n                    <ul>\n                        <router-link tag='li' to='/0'>\n                            <b class=\"caret fr\"></b>\n                            \uC0AC\uC6A9\uC790\uAD00\uB9AC\n                        </router-link>\n                        <router-link tag='li' to='/1'>\n                            <b class=\"caret fr\"></b>\n                            \uC870\uAC10\uB3C4\uAD00\uB9AC\n                        </router-link>\n\n                        <router-link tag='li' to='/2'>\n                            <b class=\"caret fr\"></b>\n                            \uC5D1\uC140\uD30C\uC77C \uAD00\uB9AC\n                        </router-link>\n\n                        <router-link tag='li' to='/3'>\n                            <b class=\"caret fr\"></b>\n                            \uC785\uC8FC\uC758\uD5A5\uC11C\n                        </router-link>\n\n                        <router-link tag='li' to='/4'>\n                            <b class=\"caret fr\"></b>\n                            \uD604\uC7A5\uC0AC\uC9C4/\uB4DC\uB860\uC601\uC0C1\n                        </router-link>\n\n                        <router-link tag='li' to='/newsbord'>\n                            <b class=\"caret fr\"></b>\n                            \uBCF4\uB3C4\uC790\uB8CC\n                        </router-link>\n\n                        <router-link tag='li' to='/Consul'>\n                            <b class=\"caret fr\"></b>\n                            \uC0C1\uB2F4\uC2E0\uCCAD\n                        </router-link>\n                    </ul>\n                </nav>",
      data: function data() {
        return {};
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = NavComponent;
    /***/
  },

  /***/
  "./public/component/loc/cosul/consul.js":
  /*!**********************************************!*\
    !*** ./public/component/loc/cosul/consul.js ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function publicComponentLocCosulConsulJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    var Consul = {
      template: "\n    <div class=\"con_wrap\">\n        <div class='content new_bord'>\n            <h2>\uC0C1\uB2F4\uC2E0\uCCAD</h2>\n            <div class='filter'></div>\n            <div>\n            </div>\n        </div>\n    </div>"
    };
    /* harmony default export */

    __webpack_exports__["default"] = Consul;
    /***/
  },

  /***/
  "./public/component/loc/newsbord/news-table.js":
  /*!*****************************************************!*\
    !*** ./public/component/loc/newsbord/news-table.js ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function publicComponentLocNewsbordNewsTableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _glc_list_numbering_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../glc/list-numbering.js */
    "./public/component/glc/list-numbering.js");
    /* harmony import */


    var _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../glc/eventbus.js */
    "./public/component/glc/eventbus.js");

    var newsTable = {
      template: "<div class='table_wrap'>\n                <div class='filters'>\n                    <span>\uCD1D \uAC8C\uC2DC\uBB3C\uC218</span><b>{{this.results.length}}\uAC74</b>\n                    <select v-on:change=\"searchCate($event)\">\n                        <option value='\uC804\uCCB4'>\uC804\uCCB4</option>\n                        <option value='\uC0BC\uC131'>\uC0BC\uC131</option>\n                        <option value='\uCC9C\uC548'>\uCC9C\uC548</option>\n                        <option value='\uBD80\uB3D9\uC0B0'>\uBD80\uB3D9\uC0B0</option>\n                    </select>\n                </div>\n                <table>\n                    <thead>\n                        <tr>\n                            <td>\uBC88\uD638</td>\n                            <td>\uBD84\uB958</td>\n                            <td>\uBBF8\uB9AC\uBCF4\uAE30</td>\n                            <td>\uC81C\uBAA9</td>\n                            <td>\uC870\uD68C</td>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <router-link class='new_view_tr' tag='tr' v-for='(result,i) in results' v-bind:to = \"'/newsbord/newbordview/'+result.idx\" v-if='i < limit && i >= start'>\n                            <td>{{i+1}}</td>\n                            <td>{{result.cate}}</td>\n                            <td>{{result.img}}</td>\n                            <td>{{result.title}}</td>\n                            <td>{{result.join}}</td>\n                        </router-link>\n                    </tbody>\n                </table>\n                <list-number v-bind:nowpage = 'this.limit-10' v-bind:DataLength='Math.ceil((this.results.length)/10)'></list-number>\n\n            </div>",
      components: {
        'list-number': _glc_list_numbering_js__WEBPACK_IMPORTED_MODULE_0__["default"]
      },
      data: function data() {
        return {
          lists: Array,
          results: Array,
          start: 0,
          limit: 10
        };
      },
      created: function created() {
        // db에서 가져온데이터를 this.lists에 담아야함
        this.lists = [{
          idx: 0,
          img: "",
          title: '천안 북부지역 개발의 선두 천안성거산업단지 올해 첫 삽 뜬다',
          join: 340,
          cate: "삼성"
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
        }, {
          idx: 1,
          img: "",
          title: "인천 검단산업단지 안동포사거리 지하차도 착공",
          join: 340,
          cate: "천안"
        }, {
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
        }, {
          idx: 1,
          img: "",
          title: "인천 검단산업단지 안동포사거리 지하차도 착공",
          join: 340,
          cate: "천안"
        }, {
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
        }, {
          idx: 1,
          img: "",
          title: "인천 검단산업단지 안동포사거리 지하차도 착공",
          join: 340,
          cate: "천안"
        }, {
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
        }, {
          idx: 1,
          img: "",
          title: "인천 검단산업단지 안동포사거리 지하차도 착공",
          join: 340,
          cate: "천안"
        }, {
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
        }, {
          idx: 1,
          img: "",
          title: "인천 검단산업단지 안동포사거리 지하차도 착공",
          join: 340,
          cate: "천안"
        }, {
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
        }, {
          idx: 1,
          img: "",
          title: "인천 검단산업단지 안동포사거리 지하차도 착공",
          join: 340,
          cate: "천안"
        }, {
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
        }, {
          idx: 1,
          img: "",
          title: "인천 검단산업단지 안동포사거리 지하차도 착공",
          join: 340,
          cate: "천안"
        }, {
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
        }, {
          idx: 1,
          img: "",
          title: "인천 검단산업단지 안동포사거리 지하차도 착공",
          join: 340,
          cate: "천안"
        }, {
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
        }, {
          idx: 1,
          img: "",
          title: "인천 검단산업단지 안동포사거리 지하차도 착공",
          join: 340,
          cate: "천안"
        }, {
          idx: 1,
          img: "",
          title: "인천 검단산업단지 안동포사거리 지하차도",
          join: 340,
          cate: "부동산"
        }];
      },
      mounted: function mounted() {
        var _this2 = this;

        this.results = this.lists;

        _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('UpdateList', {
          DataLength: Math.ceil(this.results.length / 10),
          nowpage: this.limit - 10
        });

        _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["default"].$on('NextPage', function (Data) {
          _this2.start = Data * 10;
          _this2.limit = Data * 10 + 10;
        });
      },
      methods: {
        searchCate: function searchCate(event) {
          var lists = this.lists;
          var targetData = event.target.value;
          var result = lists.filter(function (x) {
            return x.cate == targetData;
          });
          this.results = result;

          if (targetData == '전체') {
            this.results = this.lists;
          }

          this.start = 0;
          this.limit = 10;

          _glc_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('UpdateList', {
            DataLength: Math.ceil(this.results.length / 10),
            nowpage: this.limit - 10
          });
        }
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = newsTable;
    /***/
  },

  /***/
  "./public/component/loc/newsbord/newsbord.js":
  /*!***************************************************!*\
    !*** ./public/component/loc/newsbord/newsbord.js ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function publicComponentLocNewsbordNewsbordJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _news_table_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./news-table.js */
    "./public/component/loc/newsbord/news-table.js");

    var NewsBord = {
      template: "\n    <div class=\"con_wrap\">\n        <div class='content new_bord'>\n            <h2>\uBCF4\uB3C4 \uC790\uB8CC</h2>\n                <news-bord></news-bord>\n        </div>\n    </div>",
      components: {
        'news-bord': _news_table_js__WEBPACK_IMPORTED_MODULE_0__["default"]
      } // components:{
      // 'news-bord':newsTable
      // }

    };
    /* harmony default export */

    __webpack_exports__["default"] = NewsBord;
    /***/
  },

  /***/
  "./public/component/loc/newsbord/newview.js":
  /*!**************************************************!*\
    !*** ./public/component/loc/newsbord/newview.js ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function publicComponentLocNewsbordNewviewJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    var NewsView = {
      template: "\n    <div class=\"con_wrap\">\n        <div class='content new_bord'>\n            <h2>\uBCF4\uB3C4 \uC790\uB8CC</h2>\n        </div>\n    </div>"
    };
    /* harmony default export */

    __webpack_exports__["default"] = NewsView;
    /***/
  }
  /******/

});