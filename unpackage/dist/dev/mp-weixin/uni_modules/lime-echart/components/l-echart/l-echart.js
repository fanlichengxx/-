(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uni_modules/lime-echart/components/l-echart/l-echart"],{

/***/ 189:
/*!*************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/jianshan/uni_modules/lime-echart/components/l-echart/l-echart.vue ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _l_echart_vue_vue_type_template_id_52a46d79___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./l-echart.vue?vue&type=template&id=52a46d79& */ 190);
/* harmony import */ var _l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./l-echart.vue?vue&type=script&lang=js& */ 192);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _l_echart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./l-echart.vue?vue&type=style&index=0&lang=css& */ 196);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _l_echart_vue_vue_type_template_id_52a46d79___WEBPACK_IMPORTED_MODULE_0__["render"],
  _l_echart_vue_vue_type_template_id_52a46d79___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _l_echart_vue_vue_type_template_id_52a46d79___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uni_modules/lime-echart/components/l-echart/l-echart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 190:
/*!********************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/jianshan/uni_modules/lime-echart/components/l-echart/l-echart.vue?vue&type=template&id=52a46d79& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_template_id_52a46d79___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./l-echart.vue?vue&type=template&id=52a46d79& */ 191);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_template_id_52a46d79___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_template_id_52a46d79___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_template_id_52a46d79___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_template_id_52a46d79___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 191:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Lenovo/Desktop/jianshan/uni_modules/lime-echart/components/l-echart/l-echart.vue?vue&type=template&id=52a46d79& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var s0 = _vm.canvasId ? _vm.__get_style([_vm.customStyle]) : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        s0: s0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 192:
/*!**************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/jianshan/uni_modules/lime-echart/components/l-echart/l-echart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./l-echart.vue?vue&type=script&lang=js& */ 193);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 193:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Lenovo/Desktop/jianshan/uni_modules/lime-echart/components/l-echart/l-echart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 61));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 63));
var _canvas = __webpack_require__(/*! ./canvas */ 194);
var _utils = __webpack_require__(/*! ./utils */ 195);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// @ts-nocheck

var charts = {};
var echartsObj = {};

/**
 * LimeChart 图表
 * @description 全端兼容的eCharts
 * @tutorial https://ext.dcloud.net.cn/plugin?id=4899

 * @property {String} customStyle 自定义样式
 * @property {String} type 指定 canvas 类型
 * @value 2d 使用canvas 2d，部分小程序支持
 * @value '' 使用原生canvas，会有层级问题
 * @value bottom right	不缩放图片，只显示图片的右下边区域
 * @property {Boolean} isDisableScroll	 
 * @property {number} beforeDelay = [30]  延迟初始化 (毫秒)
 * @property {Boolean} enableHover PC端使用鼠标悬浮

 * @event {Function} finished 加载完成触发
 */
var _default = {
  name: 'lime-echart',
  props: {
    type: {
      type: String,
      default: '2d'
    },
    customStyle: String,
    isDisableScroll: Boolean,
    isClickable: {
      type: Boolean,
      default: true
    },
    enableHover: Boolean,
    beforeDelay: {
      type: Number,
      default: 30
    },
    landscape: Boolean
  },
  data: function data() {
    return {
      use2dCanvas: true,
      ariaLabel: '图表',
      width: null,
      height: null,
      nodeWidth: null,
      nodeHeight: null,
      // canvasNode: null,
      config: {},
      inited: false,
      finished: false,
      file: '',
      platform: '',
      isPC: false,
      isDown: false,
      isOffscreenCanvas: false,
      offscreenWidth: 0,
      offscreenHeight: 0
    };
  },
  computed: {
    rootStyle: function rootStyle() {
      if (this.landscape) {
        return "transform: translate(-50%,-50%) rotate(90deg); top:50%; left:50%;";
      }
    },
    canvasId: function canvasId() {
      return "lime-echart".concat(this._ && this._.uid || this._uid);
    },
    offscreenCanvasId: function offscreenCanvasId() {
      return "".concat(this.canvasId, "_offscreen");
    },
    offscreenStyle: function offscreenStyle() {
      return "width:".concat(this.offscreenWidth, "px;height: ").concat(this.offscreenHeight, "px; position: fixed; left: 99999px; background: red");
    },
    canvasStyle: function canvasStyle() {
      return this.rootStyle + (this.width && this.height ? 'width:' + this.width + 'px;height:' + this.height + 'px' : '');
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.clear();
    this.dispose();
  },
  created: function created() {
    var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),
      platform = _uni$getSystemInfoSyn.platform;
    this.isPC = /windows/i.test(platform);
    this.use2dCanvas = this.type === '2d' && (0, _utils.canIUseCanvas2d)();
  },
  mounted: function mounted() {
    var _this = this;
    this.$nextTick(function () {
      _this.$emit('finished');
    });
  },
  methods: {
    setChart: function setChart(callback) {
      if (!this.chart) {
        console.warn("\u7EC4\u4EF6\u8FD8\u672A\u521D\u59CB\u5316\uFF0C\u8BF7\u5148\u4F7F\u7528 init");
        return;
      }
      if (typeof callback === 'function' && this.chart) {
        callback(this.chart);
      }
    },
    setOption: function setOption() {
      var _this$chart;
      if (!this.chart || !this.chart.setOption) {
        console.warn("\u7EC4\u4EF6\u8FD8\u672A\u521D\u59CB\u5316\uFF0C\u8BF7\u5148\u4F7F\u7528 init");
        return;
      }
      (_this$chart = this.chart).setOption.apply(_this$chart, arguments);
    },
    showLoading: function showLoading() {
      if (this.chart) {
        var _this$chart2;
        (_this$chart2 = this.chart).showLoading.apply(_this$chart2, arguments);
      }
    },
    hideLoading: function hideLoading() {
      if (this.chart) {
        this.chart.hideLoading();
      }
    },
    clear: function clear() {
      if (this.chart) {
        this.chart.clear();
      }
    },
    dispose: function dispose() {
      if (this.chart) {
        this.chart.dispose();
      }
    },
    resize: function resize(size) {
      var _this2 = this;
      if (size && size.width && size.height) {
        this.height = size.height;
        this.width = size.width;
        if (this.chart) {
          this.chart.resize(size);
        }
      } else {
        this.$nextTick(function () {
          uni.createSelectorQuery().in(_this2).select(".lime-echart").boundingClientRect().exec(function (res) {
            if (res) {
              var _res$ = res[0],
                width = _res$.width,
                height = _res$.height;
              _this2.width = width = width || 300;
              _this2.height = height = height || 300;
              _this2.chart.resize({
                width: width,
                height: height
              });
            }
          });
        });
      }
    },
    canvasToTempFilePath: function canvasToTempFilePath() {
      var _this3 = this;
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var use2dCanvas = this.use2dCanvas,
        canvasId = this.canvasId;
      return new Promise(function (resolve, reject) {
        var copyArgs = Object.assign({
          canvasId: canvasId,
          success: resolve,
          fail: reject
        }, args);
        if (use2dCanvas) {
          delete copyArgs.canvasId;
          copyArgs.canvas = _this3.canvasNode;
        }
        uni.canvasToTempFilePath(copyArgs, _this3);
      });
    },
    init: function init(echarts) {
      var _arguments = arguments,
        _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _len, args, _key, theme, opts, callback, config;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                for (_len = _arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = _arguments[_key];
                }
                if (!(args && args.length == 0 && !echarts)) {
                  _context.next = 4;
                  break;
                }
                console.error('缺少参数：init(echarts, theme?:string, opts?: object, callback?: function)');
                return _context.abrupt("return");
              case 4:
                theme = null, opts = {};
                Array.from(_arguments).forEach(function (item) {
                  if (typeof item === 'function') {
                    callback = item;
                  }
                  if (['string'].includes((0, _typeof2.default)(item))) {
                    theme = item;
                  }
                  if ((0, _typeof2.default)(item) === 'object') {
                    opts = item;
                  }
                });
                if (!_this4.beforeDelay) {
                  _context.next = 9;
                  break;
                }
                _context.next = 9;
                return (0, _utils.sleep)(_this4.beforeDelay);
              case 9:
                _context.next = 11;
                return _this4.getContext();
              case 11:
                config = _context.sent;
                (0, _canvas.setCanvasCreator)(echarts, config);
                _context.prev = 13;
                _this4.chart = echarts.init(config.canvas, theme, Object.assign({}, config, opts));
                if (!(typeof callback === 'function')) {
                  _context.next = 19;
                  break;
                }
                callback(_this4.chart);
                _context.next = 20;
                break;
              case 19:
                return _context.abrupt("return", _this4.chart);
              case 20:
                _context.next = 26;
                break;
              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](13);
                console.error(_context.t0.messges);
                return _context.abrupt("return", null);
              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[13, 22]]);
      }))();
    },
    getContext: function getContext() {
      var _this5 = this;
      return (0, _utils.getRect)("#".concat(this.canvasId), {
        context: this,
        type: this.use2dCanvas ? 'fields' : 'boundingClientRect'
      }).then(function (res) {
        if (res) {
          var dpr = _utils.devicePixelRatio;
          var width = res.width,
            height = res.height,
            node = res.node;
          var canvas;
          _this5.width = width = width || 300;
          _this5.height = height = height || 300;
          if (node) {
            var ctx = node.getContext('2d');
            canvas = new _canvas.Canvas(ctx, _this5, true, node);
            _this5.canvasNode = node;
          } else {
            dpr = _this5.isPC ? _utils.devicePixelRatio : 1;
            _this5.rect = res;
            _this5.nodeWidth = width * dpr;
            _this5.nodeHeight = height * dpr;
            var _ctx = uni.createCanvasContext(_this5.canvasId, _this5);
            canvas = new _canvas.Canvas(_ctx, _this5, false);
          }
          return {
            canvas: canvas,
            width: width,
            height: height,
            devicePixelRatio: dpr,
            node: node
          };
        } else {
          return {};
        }
      });
    },
    getRelative: function getRelative(e, touches) {
      var clientX = e.clientX,
        clientY = e.clientY;
      if (!(clientX && clientY) && touches && touches[0]) {
        clientX = touches[0].clientX;
        clientY = touches[0].clientY;
      }
      return {
        x: clientX - this.rect.left,
        y: clientY - this.rect.top,
        wheelDelta: e.wheelDelta || 0
      };
    },
    getTouch: function getTouch(e, touches) {
      var _ref = touches && touches[0] || {},
        x = _ref.x;
      var touch = x ? touches[0] : this.getRelative(e, touches);
      if (this.landscape) {
        var _ref2 = [touch.y, this.height - touch.x];
        touch.x = _ref2[0];
        touch.y = _ref2[1];
      }
      return touch;
    },
    touchStart: function touchStart(e) {
      var _this6 = this;
      this.isDown = true;
      var next = function next() {
        var touches = (0, _utils.convertTouchesToArray)(e.touches);
        if (_this6.chart) {
          var touch = _this6.getTouch(e, touches);
          _this6.startX = touch.x;
          _this6.startY = touch.y;
          _this6.startT = new Date();
          var handler = _this6.chart.getZr().handler;
          _canvas.dispatch.call(handler, 'mousedown', touch);
          _canvas.dispatch.call(handler, 'mousemove', touch);
          handler.processGesture((0, _utils.wrapTouch)(e), 'start');
          clearTimeout(_this6.endTimer);
        }
      };
      if (this.isPC) {
        (0, _utils.getRect)("#".concat(this.canvasId), {
          context: this
        }).then(function (res) {
          _this6.rect = res;
          next();
        });
        return;
      }
      next();
    },
    touchMove: function touchMove(e) {
      if (this.isPC && this.enableHover && !this.isDown) {
        this.isDown = true;
      }
      var touches = (0, _utils.convertTouchesToArray)(e.touches);
      if (this.chart && this.isDown) {
        var handler = this.chart.getZr().handler;
        _canvas.dispatch.call(handler, 'mousemove', this.getTouch(e, touches));
        handler.processGesture((0, _utils.wrapTouch)(e), 'change');
      }
    },
    touchEnd: function touchEnd(e) {
      this.isDown = false;
      if (this.chart) {
        var touches = (0, _utils.convertTouchesToArray)(e.changedTouches);
        var _ref3 = touches && touches[0] || {},
          x = _ref3.x;
        var touch = (x ? touches[0] : this.getRelative(e, touches)) || {};
        if (this.landscape) {
          var _ref4 = [touch.y, this.height - touch.x];
          touch.x = _ref4[0];
          touch.y = _ref4[1];
        }
        var handler = this.chart.getZr().handler;
        var isClick = Math.abs(touch.x - this.startX) < 10 && new Date() - this.startT < 200;
        _canvas.dispatch.call(handler, 'mouseup', touch);
        handler.processGesture((0, _utils.wrapTouch)(e), 'end');
        if (isClick) {
          _canvas.dispatch.call(handler, 'click', touch);
        } else {
          this.endTimer = setTimeout(function () {
            _canvas.dispatch.call(handler, 'mousemove', {
              x: 999999999,
              y: 999999999
            });
            _canvas.dispatch.call(handler, 'mouseup', {
              x: 999999999,
              y: 999999999
            });
          }, 50);
        }
      }
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 196:
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/jianshan/uni_modules/lime-echart/components/l-echart/l-echart.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./l-echart.vue?vue&type=style&index=0&lang=css& */ 197);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 197:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Lenovo/Desktop/jianshan/uni_modules/lime-echart/components/l-echart/l-echart.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/lime-echart/components/l-echart/l-echart.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/lime-echart/components/l-echart/l-echart-create-component',
    {
        'uni_modules/lime-echart/components/l-echart/l-echart-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(189))
        })
    },
    [['uni_modules/lime-echart/components/l-echart/l-echart-create-component']]
]);
