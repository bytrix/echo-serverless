webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CardBook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CardBook */ \"./components/CardBook/index.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout/index.tsx\");\n/* harmony import */ var _components_Waterfall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Waterfall */ \"./components/Waterfall/index.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jack/Desktop/code/serverless-demo/echo/pages/index.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar App = function App() {\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 3\n    }\n  }, __jsx(_components_Waterfall__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    renderItem: function renderItem(item) {\n      return __jsx(_components_CardBook__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        post: item,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 9\n        }\n      });\n    },\n    dataSource: [{\n      title: 'title',\n      image: '//aa',\n      type: 'image',\n      user: {\n        username: 'username',\n        avatar: '//aa'\n      },\n      count: {\n        likes: 1\n      }\n    }, {\n      title: 'title',\n      image: '//aa',\n      type: 'image',\n      user: {\n        username: 'username',\n        avatar: '//aa'\n      },\n      count: {\n        likes: 1\n      }\n    }],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiQXBwIiwiaXRlbSIsInRpdGxlIiwiaW1hZ2UiLCJ0eXBlIiwidXNlciIsInVzZXJuYW1lIiwiYXZhdGFyIiwiY291bnQiLCJsaWtlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU07QUFBQSxTQUNWLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFDRSxjQUFVLEVBQUUsb0JBQUFDLElBQUk7QUFBQSxhQUNkLE1BQUMsNERBQUQ7QUFBVSxZQUFJLEVBQUVBLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEYztBQUFBLEtBRGxCO0FBSUUsY0FBVSxFQUFFLENBQ1I7QUFDRUMsV0FBSyxFQUFFLE9BRFQ7QUFFRUMsV0FBSyxFQUFFLE1BRlQ7QUFHRUMsVUFBSSxFQUFFLE9BSFI7QUFJRUMsVUFBSSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUUsVUFEUjtBQUVGQyxjQUFNLEVBQUU7QUFGTixPQUpSO0FBUUVDLFdBQUssRUFBRTtBQUNIQyxhQUFLLEVBQUU7QUFESjtBQVJULEtBRFEsRUFhVjtBQUNFUCxXQUFLLEVBQUUsT0FEVDtBQUVFQyxXQUFLLEVBQUUsTUFGVDtBQUdFQyxVQUFJLEVBQUUsT0FIUjtBQUlFQyxVQUFJLEVBQUU7QUFDRkMsZ0JBQVEsRUFBRSxVQURSO0FBRUZDLGNBQU0sRUFBRTtBQUZOLE9BSlI7QUFRRUMsV0FBSyxFQUFFO0FBQ0hDLGFBQUssRUFBRTtBQURKO0FBUlQsS0FiVSxDQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURVO0FBQUEsQ0FBWjs7S0FBTVQsRztBQW9DU0Esa0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZEJvb2sgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkQm9vaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgV2F0ZXJmYWxsIGZyb20gJy4uL2NvbXBvbmVudHMvV2F0ZXJmYWxsJ1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPFdhdGVyZmFsbFxuICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXG4gICAgICAgIDxDYXJkQm9vayBwb3N0PXtpdGVtfS8+XG4gICAgICApfVxuICAgICAgZGF0YVNvdXJjZT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAndGl0bGUnLFxuICAgICAgICAgICAgaW1hZ2U6ICcvL2FhJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6ICd1c2VybmFtZScsXG4gICAgICAgICAgICAgICAgYXZhdGFyOiAnLy9hYSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb3VudDoge1xuICAgICAgICAgICAgICAgIGxpa2VzOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ3RpdGxlJyxcbiAgICAgICAgICBpbWFnZTogJy8vYWEnLFxuICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICB1c2VybmFtZTogJ3VzZXJuYW1lJyxcbiAgICAgICAgICAgICAgYXZhdGFyOiAnLy9hYSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvdW50OiB7XG4gICAgICAgICAgICAgIGxpa2VzOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdfVxuICAgIC8+XG4gIDwvTGF5b3V0PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})