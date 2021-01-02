webpackHotUpdate_N_E("pages/index",{

/***/ "./components/HeaderMenu/index.tsx":
/*!*****************************************!*\
  !*** ./components/HeaderMenu/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.css */ \"./components/HeaderMenu/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/jack/Desktop/code/serverless-demo/echo/components/HeaderMenu/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar POPUP_WIDTH = 100;\n\nvar HeaderMenu = function HeaderMenu(_ref) {\n  var children = _ref.children;\n  return __jsx(\"div\", {\n    style: {\n      margin: '22px 0px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, children);\n};\n\n_c = HeaderMenu;\n\nvar Item = function Item(props) {\n  _s();\n\n  var children = props.children,\n      popup = props.popup,\n      popupOffset = props.popupOffset;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      popupVisible = _useState[0],\n      setPopupVisible = _useState[1];\n\n  var itemRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__[\"motion\"].button, {\n    ref: itemRef,\n    whileTap: {\n      scale: 0.9\n    },\n    style: {\n      fontSize: 22,\n      margin: 8,\n      cursor: 'pointer',\n      backgroundColor: 'transparent',\n      // backgroundColor: 'blue',\n      border: 'none',\n      outline: 'none'\n    },\n    onClick: function onClick() {\n      setPopupVisible(true);\n    },\n    onBlur: function onBlur() {\n      setPopupVisible(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, children), popup && popupVisible && __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__[\"motion\"].div, {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.popup,\n    style: {\n      // width: 200,\n      position: 'absolute',\n      borderRadius: 4,\n      width: POPUP_WIDTH,\n      zIndex: 0,\n      boxShadow: '0 2px 12px -2px rgba(0,0,0,0.2)',\n      top: itemRef.current.offsetTop + itemRef.current.offsetHeight + popupOffset[0],\n      left: itemRef.current.offsetLeft - (POPUP_WIDTH - itemRef.current.offsetWidth) + popupOffset[1]\n    },\n    initial: {\n      y: 3\n    },\n    animate: {\n      y: 0\n    },\n    onMouseDown: function onMouseDown(e) {\n      e.preventDefault();\n      setPopupVisible(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }, popup));\n};\n\n_s(Item, \"I2ajrgT7jrbWFb3gwX2lO906MG8=\");\n\n_c2 = Item;\nHeaderMenu.Item = Item;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderMenu);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"HeaderMenu\");\n$RefreshReg$(_c2, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXJNZW51L2luZGV4LnRzeD9hOWQ4Il0sIm5hbWVzIjpbIlBPUFVQX1dJRFRIIiwiSGVhZGVyTWVudSIsImNoaWxkcmVuIiwibWFyZ2luIiwiSXRlbSIsInByb3BzIiwicG9wdXAiLCJwb3B1cE9mZnNldCIsInVzZVN0YXRlIiwicG9wdXBWaXNpYmxlIiwic2V0UG9wdXBWaXNpYmxlIiwiaXRlbVJlZiIsInVzZVJlZiIsInNjYWxlIiwiZm9udFNpemUiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJvdXRsaW5lIiwic3R5bGUiLCJwb3NpdGlvbiIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwiekluZGV4IiwiYm94U2hhZG93IiwidG9wIiwiY3VycmVudCIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsImxlZnQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJ5IiwiZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxHQUFwQjs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNqQyxTQUNJO0FBQ0ksU0FBSyxFQUFFO0FBQ0hDLFlBQU0sRUFBRTtBQURMLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtLRCxRQUxMLENBREo7QUFTSCxDQVZEOztLQUFNRCxVOztBQWtCTixJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQXNCO0FBQUE7O0FBQUEsTUFDdkJILFFBRHVCLEdBQ1VHLEtBRFYsQ0FDdkJILFFBRHVCO0FBQUEsTUFDYkksS0FEYSxHQUNVRCxLQURWLENBQ2JDLEtBRGE7QUFBQSxNQUNOQyxXQURNLEdBQ1VGLEtBRFYsQ0FDTkUsV0FETTs7QUFBQSxrQkFFU0Msc0RBQVEsQ0FBQyxLQUFELENBRmpCO0FBQUEsTUFFeEJDLFlBRndCO0FBQUEsTUFFVkMsZUFGVTs7QUFHL0IsTUFBTUMsT0FBTyxHQUFHQyxvREFBTSxFQUF0QjtBQUNBLFNBQ0ksbUVBQ0ksTUFBQyxvREFBRCxDQUFRLE1BQVI7QUFDSSxPQUFHLEVBQUVELE9BRFQ7QUFFSSxZQUFRLEVBQUU7QUFDTkUsV0FBSyxFQUFFO0FBREQsS0FGZDtBQUtJLFNBQUssRUFBRTtBQUNIQyxjQUFRLEVBQUUsRUFEUDtBQUVIWCxZQUFNLEVBQUUsQ0FGTDtBQUdIWSxZQUFNLEVBQUUsU0FITDtBQUlIQyxxQkFBZSxFQUFFLGFBSmQ7QUFLSDtBQUNBQyxZQUFNLEVBQUUsTUFOTDtBQU9IQyxhQUFPLEVBQUU7QUFQTixLQUxYO0FBY0ksV0FBTyxFQUFFLG1CQUFNO0FBQ1hSLHFCQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0gsS0FoQkw7QUFpQkksVUFBTSxFQUFFLGtCQUFNO0FBQ1ZBLHFCQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0gsS0FuQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXFCS1IsUUFyQkwsQ0FESixFQXdCS0ksS0FBSyxJQUFJRyxZQUFULElBQ0csTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDSSxhQUFTLEVBQUVVLHdEQUFLLENBQUNiLEtBRHJCO0FBRUksU0FBSyxFQUFFO0FBQ0g7QUFDQWMsY0FBUSxFQUFFLFVBRlA7QUFHSEMsa0JBQVksRUFBRSxDQUhYO0FBSUhDLFdBQUssRUFBRXRCLFdBSko7QUFLSHVCLFlBQU0sRUFBRSxDQUxMO0FBTUhDLGVBQVMsRUFBRSxpQ0FOUjtBQU9IQyxTQUFHLEVBQUVkLE9BQU8sQ0FBQ2UsT0FBUixDQUFnQkMsU0FBaEIsR0FBNEJoQixPQUFPLENBQUNlLE9BQVIsQ0FBZ0JFLFlBQTVDLEdBQTJEckIsV0FBVyxDQUFDLENBQUQsQ0FQeEU7QUFRSHNCLFVBQUksRUFBRWxCLE9BQU8sQ0FBQ2UsT0FBUixDQUFnQkksVUFBaEIsSUFBOEI5QixXQUFXLEdBQUdXLE9BQU8sQ0FBQ2UsT0FBUixDQUFnQkssV0FBNUQsSUFBMkV4QixXQUFXLENBQUMsQ0FBRDtBQVJ6RixLQUZYO0FBWUksV0FBTyxFQUFFO0FBQ0x5QixPQUFDLEVBQUU7QUFERSxLQVpiO0FBZUksV0FBTyxFQUFFO0FBQ0xBLE9BQUMsRUFBRTtBQURFLEtBZmI7QUFrQkksZUFBVyxFQUFFLHFCQUFDQyxDQUFELEVBQU87QUFDaEJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBeEIscUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDSCxLQXJCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBdUJLSixLQXZCTCxDQXpCUixDQURKO0FBc0RILENBMUREOztHQUFNRixJOztNQUFBQSxJO0FBNEROSCxVQUFVLENBQUNHLElBQVgsR0FBa0JBLElBQWxCO0FBRWVILHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXJNZW51L2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnXG5cbmNvbnN0IFBPUFVQX1dJRFRIID0gMTAwXG5cbmNvbnN0IEhlYWRlck1lbnUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcyMnB4IDBweCdcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5pbnRlcmZhY2UgSXRlbVByb3BzIHtcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3RFbGVtZW50XG4gICAgcG9wdXA/OiBSZWFjdC5SZWFjdEVsZW1lbnRcbiAgICBwb3B1cE9mZnNldD86IFtudW1iZXIsIG51bWJlcl1cbn1cblxuY29uc3QgSXRlbSA9IChwcm9wczogSXRlbVByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgcG9wdXAsIHBvcHVwT2Zmc2V0IH0gPSBwcm9wc1xuICAgIGNvbnN0IFtwb3B1cFZpc2libGUsIHNldFBvcHVwVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBpdGVtUmVmID0gdXNlUmVmKClcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPG1vdGlvbi5idXR0b25cbiAgICAgICAgICAgICAgICByZWY9e2l0ZW1SZWZ9XG4gICAgICAgICAgICAgICAgd2hpbGVUYXA9e3tcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDAuOVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIyLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDgsXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvcHVwVmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvcHVwVmlzaWJsZShmYWxzZSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvbW90aW9uLmJ1dHRvbj5cbiAgICAgICAgICAgIHtwb3B1cCAmJiBwb3B1cFZpc2libGUgJiYgKFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUucG9wdXB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogUE9QVVBfV0lEVEgsXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDJweCAxMnB4IC0ycHggcmdiYSgwLDAsMCwwLjIpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogaXRlbVJlZi5jdXJyZW50Lm9mZnNldFRvcCArIGl0ZW1SZWYuY3VycmVudC5vZmZzZXRIZWlnaHQgKyBwb3B1cE9mZnNldFswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGl0ZW1SZWYuY3VycmVudC5vZmZzZXRMZWZ0IC0gKFBPUFVQX1dJRFRIIC0gaXRlbVJlZi5jdXJyZW50Lm9mZnNldFdpZHRoKSArIHBvcHVwT2Zmc2V0WzFdXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDNcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9wdXBWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7cG9wdXB9XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5IZWFkZXJNZW51Lkl0ZW0gPSBJdGVtXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlck1lbnUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/HeaderMenu/index.tsx\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false

})