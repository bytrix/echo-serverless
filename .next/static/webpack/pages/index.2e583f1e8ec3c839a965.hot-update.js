webpackHotUpdate_N_E("pages/index",{

/***/ "./components/HeaderMenu/index.tsx":
/*!*****************************************!*\
  !*** ./components/HeaderMenu/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.css */ \"./components/HeaderMenu/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/jack/Desktop/code/serverless-demo/echo/components/HeaderMenu/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar POPUP_WIDTH = 200;\n\nvar HeaderMenu = function HeaderMenu(_ref) {\n  var children = _ref.children;\n  return __jsx(\"div\", {\n    style: {\n      margin: '22px 0px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, children);\n};\n\n_c = HeaderMenu;\n\nvar Item = function Item(props) {\n  _s();\n\n  var children = props.children,\n      popup = props.popup,\n      popupOffset = props.popupOffset,\n      activeItem = props.activeItem;\n  console.log('children', children);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      popupVisible = _useState[0],\n      setPopupVisible = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      focused = _useState2[0],\n      setFocused = _useState2[1];\n\n  var itemRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var itemDom = itemRef.current;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__[\"motion\"].button, {\n    ref: itemRef,\n    whileTap: {\n      scale: 0.9\n    },\n    style: {\n      fontSize: 22,\n      margin: 8,\n      cursor: 'pointer',\n      backgroundColor: 'transparent',\n      // backgroundColor: 'blue',\n      border: 'none',\n      outline: 'none'\n    },\n    onClick: function onClick() {\n      setPopupVisible(true);\n      setFocused(true);\n    } // onBlur={() => {\n    //     setPopupVisible(false)\n    //     setFocused(false)\n    // }}\n    ,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, focused && activeItem ? activeItem : children), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__[\"AnimatePresence\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, popup && popupVisible && __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__[\"motion\"].div, {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.popup,\n    style: {\n      position: 'absolute',\n      borderRadius: 4,\n      width: POPUP_WIDTH,\n      zIndex: 0,\n      // boxShadow: '0 12px 36px -2px rgba(0,0,0,0.2)',\n      boxShadow: '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',\n      top: (itemDom === null || itemDom === void 0 ? void 0 : itemDom.offsetTop) + (itemDom === null || itemDom === void 0 ? void 0 : itemDom.offsetHeight) + popupOffset[0],\n      left: (itemDom === null || itemDom === void 0 ? void 0 : itemDom.offsetLeft) - (POPUP_WIDTH - (itemDom === null || itemDom === void 0 ? void 0 : itemDom.offsetWidth)) + popupOffset[1]\n    },\n    initial: {\n      y: 3\n    },\n    animate: {\n      y: 0\n    },\n    exit: {\n      y: 3\n    },\n    onMouseDown: function onMouseDown(e) {\n      e.preventDefault();\n      setPopupVisible(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 21\n    }\n  }, popup)));\n};\n\n_s(Item, \"A/GVKsPnU1LLbrNbpwqvXJ0Hnps=\");\n\n_c2 = Item;\nHeaderMenu.Item = Item;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderMenu);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"HeaderMenu\");\n$RefreshReg$(_c2, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXJNZW51L2luZGV4LnRzeD9hOWQ4Il0sIm5hbWVzIjpbIlBPUFVQX1dJRFRIIiwiSGVhZGVyTWVudSIsImNoaWxkcmVuIiwibWFyZ2luIiwiSXRlbSIsInByb3BzIiwicG9wdXAiLCJwb3B1cE9mZnNldCIsImFjdGl2ZUl0ZW0iLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJwb3B1cFZpc2libGUiLCJzZXRQb3B1cFZpc2libGUiLCJmb2N1c2VkIiwic2V0Rm9jdXNlZCIsIml0ZW1SZWYiLCJ1c2VSZWYiLCJpdGVtRG9tIiwiY3VycmVudCIsInNjYWxlIiwiZm9udFNpemUiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJvdXRsaW5lIiwic3R5bGUiLCJwb3NpdGlvbiIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwiekluZGV4IiwiYm94U2hhZG93IiwidG9wIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0IiwibGVmdCIsIm9mZnNldExlZnQiLCJvZmZzZXRXaWR0aCIsInkiLCJlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLEdBQXBCOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ2pDLFNBQ0k7QUFDSSxTQUFLLEVBQUU7QUFDSEMsWUFBTSxFQUFFO0FBREwsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0tELFFBTEwsQ0FESjtBQVNILENBVkQ7O0tBQU1ELFU7O0FBbUJOLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBc0I7QUFBQTs7QUFBQSxNQUN2QkgsUUFEdUIsR0FDc0JHLEtBRHRCLENBQ3ZCSCxRQUR1QjtBQUFBLE1BQ2JJLEtBRGEsR0FDc0JELEtBRHRCLENBQ2JDLEtBRGE7QUFBQSxNQUNOQyxXQURNLEdBQ3NCRixLQUR0QixDQUNORSxXQURNO0FBQUEsTUFDT0MsVUFEUCxHQUNzQkgsS0FEdEIsQ0FDT0csVUFEUDtBQUUvQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QlIsUUFBeEI7O0FBRitCLGtCQUdTUyxzREFBUSxDQUFDLEtBQUQsQ0FIakI7QUFBQSxNQUd4QkMsWUFId0I7QUFBQSxNQUdWQyxlQUhVOztBQUFBLG1CQUlERixzREFBUSxDQUFDLEtBQUQsQ0FKUDtBQUFBLE1BSXhCRyxPQUp3QjtBQUFBLE1BSWZDLFVBSmU7O0FBSy9CLE1BQU1DLE9BQU8sR0FBR0Msb0RBQU0sRUFBdEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csT0FBeEI7QUFDQSxTQUNJLG1FQUNJLE1BQUMsb0RBQUQsQ0FBUSxNQUFSO0FBQ0ksT0FBRyxFQUFFSCxPQURUO0FBRUksWUFBUSxFQUFFO0FBQ05JLFdBQUssRUFBRTtBQURELEtBRmQ7QUFLSSxTQUFLLEVBQUU7QUFDSEMsY0FBUSxFQUFFLEVBRFA7QUFFSGxCLFlBQU0sRUFBRSxDQUZMO0FBR0htQixZQUFNLEVBQUUsU0FITDtBQUlIQyxxQkFBZSxFQUFFLGFBSmQ7QUFLSDtBQUNBQyxZQUFNLEVBQUUsTUFOTDtBQU9IQyxhQUFPLEVBQUU7QUFQTixLQUxYO0FBY0ksV0FBTyxFQUFFLG1CQUFNO0FBQ1haLHFCQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0FFLGdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0gsS0FqQkwsQ0FrQkk7QUFDQTtBQUNBO0FBQ0E7QUFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXVCTUQsT0FBTyxJQUFJTixVQUFaLEdBQTBCQSxVQUExQixHQUF1Q04sUUF2QjVDLENBREosRUEwQkksTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tJLEtBQUssSUFBSU0sWUFBVCxJQUNHLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0ksYUFBUyxFQUFFYyx3REFBSyxDQUFDcEIsS0FEckI7QUFFSSxTQUFLLEVBQUU7QUFDSHFCLGNBQVEsRUFBRSxVQURQO0FBRUhDLGtCQUFZLEVBQUUsQ0FGWDtBQUdIQyxXQUFLLEVBQUU3QixXQUhKO0FBSUg4QixZQUFNLEVBQUUsQ0FKTDtBQUtIO0FBQ0FDLGVBQVMsRUFBRSwwR0FOUjtBQU9IQyxTQUFHLEVBQUUsQ0FBQWQsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVlLFNBQVQsS0FBcUJmLE9BQXJCLGFBQXFCQSxPQUFyQix1QkFBcUJBLE9BQU8sQ0FBRWdCLFlBQTlCLElBQTZDM0IsV0FBVyxDQUFDLENBQUQsQ0FQMUQ7QUFRSDRCLFVBQUksRUFBRSxDQUFBakIsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVrQixVQUFULEtBQXVCcEMsV0FBVyxJQUFHa0IsT0FBSCxhQUFHQSxPQUFILHVCQUFHQSxPQUFPLENBQUVtQixXQUFaLENBQWxDLElBQTZEOUIsV0FBVyxDQUFDLENBQUQ7QUFSM0UsS0FGWDtBQVlJLFdBQU8sRUFBRTtBQUNMK0IsT0FBQyxFQUFFO0FBREUsS0FaYjtBQWVJLFdBQU8sRUFBRTtBQUNMQSxPQUFDLEVBQUU7QUFERSxLQWZiO0FBa0JJLFFBQUksRUFBRTtBQUNGQSxPQUFDLEVBQUU7QUFERCxLQWxCVjtBQXFCSSxlQUFXLEVBQUUscUJBQUNDLENBQUQsRUFBTztBQUNoQkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0EzQixxQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNILEtBeEJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0EwQktQLEtBMUJMLENBRlIsQ0ExQkosQ0FESjtBQTZESCxDQXBFRDs7R0FBTUYsSTs7TUFBQUEsSTtBQXNFTkgsVUFBVSxDQUFDRyxJQUFYLEdBQWtCQSxJQUFsQjtBQUVlSCx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyTWVudS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnXG5cbmNvbnN0IFBPUFVQX1dJRFRIID0gMjAwXG5cbmNvbnN0IEhlYWRlck1lbnUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcyMnB4IDBweCdcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5pbnRlcmZhY2UgSXRlbVByb3BzIHtcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3RFbGVtZW50XG4gICAgcG9wdXA/OiBSZWFjdC5SZWFjdEVsZW1lbnRcbiAgICBwb3B1cE9mZnNldD86IFtudW1iZXIsIG51bWJlcl1cbiAgICBhY3RpdmVJdGVtPzogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmNvbnN0IEl0ZW0gPSAocHJvcHM6IEl0ZW1Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHBvcHVwLCBwb3B1cE9mZnNldCwgYWN0aXZlSXRlbSB9ID0gcHJvcHNcbiAgICBjb25zb2xlLmxvZygnY2hpbGRyZW4nLCBjaGlsZHJlbilcbiAgICBjb25zdCBbcG9wdXBWaXNpYmxlLCBzZXRQb3B1cFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2ZvY3VzZWQsIHNldEZvY3VzZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgaXRlbVJlZiA9IHVzZVJlZjxIVE1MQnV0dG9uRWxlbWVudD4oKVxuICAgIGNvbnN0IGl0ZW1Eb20gPSBpdGVtUmVmLmN1cnJlbnRcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPG1vdGlvbi5idXR0b25cbiAgICAgICAgICAgICAgICByZWY9e2l0ZW1SZWZ9XG4gICAgICAgICAgICAgICAgd2hpbGVUYXA9e3tcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDAuOVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIyLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDgsXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvcHVwVmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICAgICBzZXRGb2N1c2VkKHRydWUpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvLyBvbkJsdXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgc2V0UG9wdXBWaXNpYmxlKGZhbHNlKVxuICAgICAgICAgICAgICAgIC8vICAgICBzZXRGb2N1c2VkKGZhbHNlKVxuICAgICAgICAgICAgICAgIC8vIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyhmb2N1c2VkICYmIGFjdGl2ZUl0ZW0pID8gYWN0aXZlSXRlbSA6IGNoaWxkcmVufVxuICAgICAgICAgICAgPC9tb3Rpb24uYnV0dG9uPlxuICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICB7cG9wdXAgJiYgcG9wdXBWaXNpYmxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUucG9wdXB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogUE9QVVBfV0lEVEgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJveFNoYWRvdzogJzAgMTJweCAzNnB4IC0ycHggcmdiYSgwLDAsMCwwLjIpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDNweCA2cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDZweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KSwgMCA5cHggMjhweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBpdGVtRG9tPy5vZmZzZXRUb3AgKyBpdGVtRG9tPy5vZmZzZXRIZWlnaHQgKyBwb3B1cE9mZnNldFswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBpdGVtRG9tPy5vZmZzZXRMZWZ0IC0gKFBPUFVQX1dJRFRIIC0gaXRlbURvbT8ub2Zmc2V0V2lkdGgpICsgcG9wdXBPZmZzZXRbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogM1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDNcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3B1cFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3B1cH1cbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5IZWFkZXJNZW51Lkl0ZW0gPSBJdGVtXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlck1lbnUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/HeaderMenu/index.tsx\n");

/***/ })

})