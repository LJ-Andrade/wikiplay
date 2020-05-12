(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/PaginationComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/PaginationComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['pagination'],
  data: function data() {
    return {// pagination: {
      // 	'total': 0,
      // 	'current_page': 0,
      // 	'per_page': 0,
      // 	'last_page': 0,
      // 	'from': 0,
      // 	'to': 0,
      // },
    };
  },
  methods: {},
  created: function created() {},
  mounted: function mounted() {// this.pagination = this.paginationData;
    // console.info(this.paginationData)
  },
  computed: {
    // Pagination
    // ---------- 
    isActive: function isActive() {
      return this.pagination.current_page;
    },
    pagesNumber: function pagesNumber() {
      if (!this.pagination.to) return [];
      var offset = 2;
      var from = this.pagination.current_page - offset;
      if (from < 1) from = 1;
      var to = from + offset * 2;
      if (to >= this.pagination.last_page) to = this.pagination.last_page;
      var pagesArray = [];

      while (from <= to) {
        pagesArray.push(from);
        from++;
      }

      return pagesArray;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/PaginationComponent.vue?vue&type=template&id=5ac9404c&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/PaginationComponent.vue?vue&type=template&id=5ac9404c& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "ul",
      { staticClass: "pagination" },
      [
        _c(
          "li",
          {
            class: {
              "page-item": true,
              disabled: _vm.pagination.current_page == 1
            }
          },
          [
            _c(
              "a",
              {
                staticClass: "page-link",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.$emit(
                      "changePage",
                      _vm.pagination.current_page - 1
                    )
                  }
                }
              },
              [_vm._v(" Atras ")]
            )
          ]
        ),
        _vm._v(" "),
        _vm._l(_vm.pagesNumber, function(page, index) {
          return _c(
            "li",
            {
              key: index,
              class: { "page-item": true, active: page === _vm.isActive }
            },
            [
              _c(
                "a",
                {
                  staticClass: "page-link",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.$emit("changePage", page)
                    }
                  }
                },
                [_vm._v(" " + _vm._s(page) + " ")]
              )
            ]
          )
        }),
        _vm._v(" "),
        _c(
          "li",
          {
            class: {
              "page-item": true,
              disabled: _vm.pagination.current_page == _vm.pagination.last_page
            }
          },
          [
            _c(
              "a",
              {
                staticClass: "page-link",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.$emit(
                      "changePage",
                      _vm.pagination.current_page + 1
                    )
                  }
                }
              },
              [_vm._v(" Adelante ")]
            )
          ]
        )
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/core/components/PaginationComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/core/components/PaginationComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaginationComponent_vue_vue_type_template_id_5ac9404c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginationComponent.vue?vue&type=template&id=5ac9404c& */ "./resources/js/core/components/PaginationComponent.vue?vue&type=template&id=5ac9404c&");
/* harmony import */ var _PaginationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationComponent.vue?vue&type=script&lang=js& */ "./resources/js/core/components/PaginationComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaginationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaginationComponent_vue_vue_type_template_id_5ac9404c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaginationComponent_vue_vue_type_template_id_5ac9404c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/core/components/PaginationComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/core/components/PaginationComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/core/components/PaginationComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/PaginationComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/core/components/PaginationComponent.vue?vue&type=template&id=5ac9404c&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/core/components/PaginationComponent.vue?vue&type=template&id=5ac9404c& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_template_id_5ac9404c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationComponent.vue?vue&type=template&id=5ac9404c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/PaginationComponent.vue?vue&type=template&id=5ac9404c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_template_id_5ac9404c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_template_id_5ac9404c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvcmUvY29tcG9uZW50cy9QYWdpbmF0aW9uQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29yZS9jb21wb25lbnRzL1BhZ2luYXRpb25Db21wb25lbnQudnVlPzYwOGYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvcmUvY29tcG9uZW50cy9QYWdpbmF0aW9uQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29yZS9jb21wb25lbnRzL1BhZ2luYXRpb25Db21wb25lbnQudnVlPzJmZTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvcmUvY29tcG9uZW50cy9QYWdpbmF0aW9uQ29tcG9uZW50LnZ1ZT9hNmNiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBLHVCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBLFlBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUEsR0FiQTtBQWNBLGFBZEE7QUFnQkEsU0FoQkEscUJBZ0JBLENBQ0EsQ0FqQkE7QUFrQkEsU0FsQkEscUJBa0JBLENBQ0E7QUFDQTtBQUNBLEdBckJBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxBO0FBTUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBMUJBO0FBdEJBLEc7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sNEJBQTRCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixZQUFZO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFBQTtBQUFBO0FBQUE7QUFBa0c7QUFDM0I7QUFDTDs7O0FBR2xFO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQXlNLENBQWdCLCtQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTdOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDx1bCBjbGFzcz1cInBhZ2luYXRpb25cIj5cblx0XHRcdDxsaSB2LWJpbmQ6Y2xhc3M9XCJ7J3BhZ2UtaXRlbSc6dHJ1ZSwgJ2Rpc2FibGVkJzoocGFnaW5hdGlvbi5jdXJyZW50X3BhZ2UgPT0gMSl9XCI+XG5cdFx0XHRcdDxhIGNsYXNzPVwicGFnZS1saW5rXCIgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudD1cIiRlbWl0KCdjaGFuZ2VQYWdlJywgcGFnaW5hdGlvbi5jdXJyZW50X3BhZ2UgLSAxKVwiPiBBdHJhcyA8L2E+XG5cdFx0XHQ8L2xpPlxuXHRcdFx0PGxpIHYtZm9yPVwiKHBhZ2UsIGluZGV4KSBpbiBwYWdlc051bWJlclwiIDprZXk9XCJpbmRleFwiIHYtYmluZDpjbGFzcz1cInsncGFnZS1pdGVtJzp0cnVlLCAnYWN0aXZlJzoocGFnZSA9PT0gaXNBY3RpdmUpfVwiPlxuXHRcdFx0XHQ8YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCIkZW1pdCgnY2hhbmdlUGFnZScsIHBhZ2UpXCI+IHt7IHBhZ2UgfX0gPC9hPlxuXHRcdFx0PC9saT5cblx0XHRcdDxsaSB2LWJpbmQ6Y2xhc3M9XCJ7J3BhZ2UtaXRlbSc6dHJ1ZSwgJ2Rpc2FibGVkJzoocGFnaW5hdGlvbi5jdXJyZW50X3BhZ2UgPT0gcGFnaW5hdGlvbi5sYXN0X3BhZ2UpfVwiPlxuXHRcdFx0XHQ8YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCIkZW1pdCgnY2hhbmdlUGFnZScsIHBhZ2luYXRpb24uY3VycmVudF9wYWdlICsgMSlcIj4gQWRlbGFudGUgPC9hPlxuXHRcdFx0PC9saT5cblx0XHQ8L3VsPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRwcm9wczogWyAncGFnaW5hdGlvbicgXSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQvLyBwYWdpbmF0aW9uOiB7XG5cdFx0XHRcdFx0Ly8gXHQndG90YWwnOiAwLFxuXHRcdFx0XHRcdC8vIFx0J2N1cnJlbnRfcGFnZSc6IDAsXG5cdFx0XHRcdFx0Ly8gXHQncGVyX3BhZ2UnOiAwLFxuXHRcdFx0XHRcdC8vIFx0J2xhc3RfcGFnZSc6IDAsXG5cdFx0XHRcdFx0Ly8gXHQnZnJvbSc6IDAsXG5cdFx0XHRcdFx0Ly8gXHQndG8nOiAwLFxuXHRcdFx0XHRcdC8vIH0sXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XHRcblx0XHR9LFxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHR9LFxuXHRcdG1vdW50ZWQoKSB7XG5cdFx0XHQvLyB0aGlzLnBhZ2luYXRpb24gPSB0aGlzLnBhZ2luYXRpb25EYXRhO1xuXHRcdFx0Ly8gY29uc29sZS5pbmZvKHRoaXMucGFnaW5hdGlvbkRhdGEpXG5cdFx0fSxcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0Ly8gUGFnaW5hdGlvblxuXHRcdFx0Ly8gLS0tLS0tLS0tLSBcblx0XHRcdGlzQWN0aXZlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50X3BhZ2U7XG5cdFx0XHR9LFxuXHRcdFx0cGFnZXNOdW1iZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFxuXHRcdFx0XHRpZighdGhpcy5wYWdpbmF0aW9uLnRvKSByZXR1cm4gW107XG5cdFx0XG5cdFx0XHRcdGxldCBvZmZzZXQgPSAyO1xuXHRcdFxuXHRcdFx0XHRsZXQgZnJvbSA9IHRoaXMucGFnaW5hdGlvbi5jdXJyZW50X3BhZ2UgLSBvZmZzZXQ7XG5cdFx0XHRcdGlmIChmcm9tIDwgMSkgZnJvbSA9IDE7XG5cdFx0XG5cdFx0XHRcdGxldCB0byA9IGZyb20gKyAob2Zmc2V0ICogMik7XG5cdFx0XHRcdGlmICh0byA+PSB0aGlzLnBhZ2luYXRpb24ubGFzdF9wYWdlKSB0byA9IHRoaXMucGFnaW5hdGlvbi5sYXN0X3BhZ2U7XG5cdFx0XHRcdFxuXHRcdFx0XHRsZXQgcGFnZXNBcnJheSA9IFtdO1xuXHRcdFxuXHRcdFx0XHR3aGlsZSAoZnJvbSA8PSB0bykge1xuXHRcdFx0XHRcdHBhZ2VzQXJyYXkucHVzaChmcm9tKTtcblx0XHRcdFx0XHRmcm9tKys7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gcGFnZXNBcnJheTtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRcblx0fVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcInVsXCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb25cIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgXCJwYWdlLWl0ZW1cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5wYWdpbmF0aW9uLmN1cnJlbnRfcGFnZSA9PSAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdlLWxpbmtcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGFuZ2VQYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2luYXRpb24uY3VycmVudF9wYWdlIC0gMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiIEF0cmFzIFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbChfdm0ucGFnZXNOdW1iZXIsIGZ1bmN0aW9uKHBhZ2UsIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICBjbGFzczogeyBcInBhZ2UtaXRlbVwiOiB0cnVlLCBhY3RpdmU6IHBhZ2UgPT09IF92bS5pc0FjdGl2ZSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdlLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiY2hhbmdlUGFnZVwiLCBwYWdlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKHBhZ2UpICsgXCIgXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgIFwicGFnZS1pdGVtXCI6IHRydWUsXG4gICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0ucGFnaW5hdGlvbi5jdXJyZW50X3BhZ2UgPT0gX3ZtLnBhZ2luYXRpb24ubGFzdF9wYWdlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdlLWxpbmtcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGFuZ2VQYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2luYXRpb24uY3VycmVudF9wYWdlICsgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiIEFkZWxhbnRlIFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGFnaW5hdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWFjOTQwNGMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGFnaW5hdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BhZ2luYXRpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS92YWdyYW50L1Byb2plY3RzL3ZhZG1pbjIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWFjOTQwNGMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWFjOTQwNGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWFjOTQwNGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BhZ2luYXRpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVhYzk0MDRjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVhYzk0MDRjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29yZS9jb21wb25lbnRzL1BhZ2luYXRpb25Db21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdpbmF0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdpbmF0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdpbmF0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YWM5NDA0YyZcIiJdLCJzb3VyY2VSb290IjoiIn0=