webpackHotUpdate_N_E("pages/index",{

/***/ "./components/HeaderMenu/index.tsx":
/*!*****************************************!*\
  !*** ./components/HeaderMenu/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.css */ \"./components/HeaderMenu/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/jack/Desktop/code/serverless-demo/echo/components/HeaderMenu/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar POPUP_WIDTH = 100;\n\nvar HeaderMenu = function HeaderMenu(_ref) {\n  var children = _ref.children;\n  return __jsx(\"div\", {\n    style: {\n      margin: '22px 0px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, children);\n};\n\n_c = HeaderMenu;\n\nvar Item = function Item(props) {\n  _s();\n\n  var children = props.children,\n      popup = props.popup,\n      popupOffset = props.popupOffset;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      popupVisible = _useState[0],\n      setPopupVisible = _useState[1];\n\n  var itemRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__[\"motion\"].button, {\n    ref: itemRef,\n    whileTap: {\n      scale: 0.9\n    },\n    style: {\n      fontSize: 22,\n      margin: 8,\n      cursor: 'pointer',\n      backgroundColor: 'transparent',\n      // backgroundColor: 'blue',\n      border: 'none',\n      outline: 'none'\n    },\n    onClick: function onClick() {\n      setPopupVisible(true);\n    },\n    onBlur: function onBlur() {\n      setPopupVisible(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, children), popup && popupVisible && __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__[\"motion\"].div, {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.popup,\n    style: {\n      position: 'absolute',\n      width: POPUP_WIDTH,\n      zIndex: 0,\n      boxShadow: '0 2px 12px -2px rgba(0,0,0,0.2)',\n      top: itemRef.current.offsetTop + itemRef.current.offsetHeight + popupOffset[0],\n      left: itemRef.current.offsetLeft - (POPUP_WIDTH - itemRef.current.offsetWidth) + popupOffset[1]\n    },\n    initial: {\n      y: 3\n    },\n    animate: {\n      y: 0\n    },\n    onMouseDown: function onMouseDown(e) {\n      e.preventDefault();\n      setPopupVisible(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }, popup));\n};\n\n_s(Item, \"I2ajrgT7jrbWFb3gwX2lO906MG8=\");\n\n_c2 = Item;\nHeaderMenu.Item = Item;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderMenu);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"HeaderMenu\");\n$RefreshReg$(_c2, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXJNZW51L2luZGV4LnRzeD9hOWQ4Il0sIm5hbWVzIjpbIlBPUFVQX1dJRFRIIiwiSGVhZGVyTWVudSIsImNoaWxkcmVuIiwibWFyZ2luIiwiSXRlbSIsInByb3BzIiwicG9wdXAiLCJwb3B1cE9mZnNldCIsInVzZVN0YXRlIiwicG9wdXBWaXNpYmxlIiwic2V0UG9wdXBWaXNpYmxlIiwiaXRlbVJlZiIsInVzZVJlZiIsInNjYWxlIiwiZm9udFNpemUiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJvdXRsaW5lIiwic3R5bGUiLCJwb3NpdGlvbiIsIndpZHRoIiwiekluZGV4IiwiYm94U2hhZG93IiwidG9wIiwiY3VycmVudCIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsImxlZnQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJ5IiwiZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxHQUFwQjs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNqQyxTQUNJO0FBQ0ksU0FBSyxFQUFFO0FBQ0hDLFlBQU0sRUFBRTtBQURMLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtLRCxRQUxMLENBREo7QUFTSCxDQVZEOztLQUFNRCxVOztBQWtCTixJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQXNCO0FBQUE7O0FBQUEsTUFDdkJILFFBRHVCLEdBQ1VHLEtBRFYsQ0FDdkJILFFBRHVCO0FBQUEsTUFDYkksS0FEYSxHQUNVRCxLQURWLENBQ2JDLEtBRGE7QUFBQSxNQUNOQyxXQURNLEdBQ1VGLEtBRFYsQ0FDTkUsV0FETTs7QUFBQSxrQkFFU0Msc0RBQVEsQ0FBQyxLQUFELENBRmpCO0FBQUEsTUFFeEJDLFlBRndCO0FBQUEsTUFFVkMsZUFGVTs7QUFHL0IsTUFBTUMsT0FBTyxHQUFHQyxvREFBTSxFQUF0QjtBQUNBLFNBQ0ksbUVBQ0ksTUFBQyxvREFBRCxDQUFRLE1BQVI7QUFDSSxPQUFHLEVBQUVELE9BRFQ7QUFFSSxZQUFRLEVBQUU7QUFDTkUsV0FBSyxFQUFFO0FBREQsS0FGZDtBQUtJLFNBQUssRUFBRTtBQUNIQyxjQUFRLEVBQUUsRUFEUDtBQUVIWCxZQUFNLEVBQUUsQ0FGTDtBQUdIWSxZQUFNLEVBQUUsU0FITDtBQUlIQyxxQkFBZSxFQUFFLGFBSmQ7QUFLSDtBQUNBQyxZQUFNLEVBQUUsTUFOTDtBQU9IQyxhQUFPLEVBQUU7QUFQTixLQUxYO0FBY0ksV0FBTyxFQUFFLG1CQUFNO0FBQ1hSLHFCQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0gsS0FoQkw7QUFpQkksVUFBTSxFQUFFLGtCQUFNO0FBQ1ZBLHFCQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0gsS0FuQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXFCS1IsUUFyQkwsQ0FESixFQXdCS0ksS0FBSyxJQUFJRyxZQUFULElBQ0csTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDSSxhQUFTLEVBQUVVLHdEQUFLLENBQUNiLEtBRHJCO0FBRUksU0FBSyxFQUFFO0FBQ0hjLGNBQVEsRUFBRSxVQURQO0FBRUhDLFdBQUssRUFBRXJCLFdBRko7QUFHSHNCLFlBQU0sRUFBRSxDQUhMO0FBSUhDLGVBQVMsRUFBRSxpQ0FKUjtBQUtIQyxTQUFHLEVBQUViLE9BQU8sQ0FBQ2MsT0FBUixDQUFnQkMsU0FBaEIsR0FBNEJmLE9BQU8sQ0FBQ2MsT0FBUixDQUFnQkUsWUFBNUMsR0FBMkRwQixXQUFXLENBQUMsQ0FBRCxDQUx4RTtBQU1IcUIsVUFBSSxFQUFFakIsT0FBTyxDQUFDYyxPQUFSLENBQWdCSSxVQUFoQixJQUE4QjdCLFdBQVcsR0FBR1csT0FBTyxDQUFDYyxPQUFSLENBQWdCSyxXQUE1RCxJQUEyRXZCLFdBQVcsQ0FBQyxDQUFEO0FBTnpGLEtBRlg7QUFVSSxXQUFPLEVBQUU7QUFDTHdCLE9BQUMsRUFBRTtBQURFLEtBVmI7QUFhSSxXQUFPLEVBQUU7QUFDTEEsT0FBQyxFQUFFO0FBREUsS0FiYjtBQWdCSSxlQUFXLEVBQUUscUJBQUNDLENBQUQsRUFBTztBQUNoQkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0F2QixxQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNILEtBbkJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FxQktKLEtBckJMLENBekJSLENBREo7QUFvREgsQ0F4REQ7O0dBQU1GLEk7O01BQUFBLEk7QUEwRE5ILFVBQVUsQ0FBQ0csSUFBWCxHQUFrQkEsSUFBbEI7QUFFZUgseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlck1lbnUvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcydcblxuY29uc3QgUE9QVVBfV0lEVEggPSAxMDBcblxuY29uc3QgSGVhZGVyTWVudSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1hcmdpbjogJzIycHggMHB4J1xuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmludGVyZmFjZSBJdGVtUHJvcHMge1xuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdEVsZW1lbnRcbiAgICBwb3B1cD86IFJlYWN0LlJlYWN0RWxlbWVudFxuICAgIHBvcHVwT2Zmc2V0PzogW251bWJlciwgbnVtYmVyXVxufVxuXG5jb25zdCBJdGVtID0gKHByb3BzOiBJdGVtUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBwb3B1cCwgcG9wdXBPZmZzZXQgfSA9IHByb3BzXG4gICAgY29uc3QgW3BvcHVwVmlzaWJsZSwgc2V0UG9wdXBWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IGl0ZW1SZWYgPSB1c2VSZWYoKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8bW90aW9uLmJ1dHRvblxuICAgICAgICAgICAgICAgIHJlZj17aXRlbVJlZn1cbiAgICAgICAgICAgICAgICB3aGlsZVRhcD17e1xuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMC45XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOCxcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiAnYmx1ZScsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAnbm9uZSdcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9wdXBWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9wdXBWaXNpYmxlKGZhbHNlKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9tb3Rpb24uYnV0dG9uPlxuICAgICAgICAgICAge3BvcHVwICYmIHBvcHVwVmlzaWJsZSAmJiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5wb3B1cH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFBPUFVQX1dJRFRILFxuICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAycHggMTJweCAtMnB4IHJnYmEoMCwwLDAsMC4yKScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGl0ZW1SZWYuY3VycmVudC5vZmZzZXRUb3AgKyBpdGVtUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0ICsgcG9wdXBPZmZzZXRbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBpdGVtUmVmLmN1cnJlbnQub2Zmc2V0TGVmdCAtIChQT1BVUF9XSURUSCAtIGl0ZW1SZWYuY3VycmVudC5vZmZzZXRXaWR0aCkgKyBwb3B1cE9mZnNldFsxXVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAzXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvcHVwVmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3BvcHVwfVxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuSGVhZGVyTWVudS5JdGVtID0gSXRlbVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJNZW51Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HeaderMenu/index.tsx\n");

/***/ })

})