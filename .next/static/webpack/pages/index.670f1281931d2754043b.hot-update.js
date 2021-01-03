webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CardBook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CardBook */ \"./components/CardBook/index.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout/index.tsx\");\n/* harmony import */ var _components_Waterfall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Waterfall */ \"./components/Waterfall/index.tsx\");\n/* harmony import */ var _components_PostDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostDialog */ \"./components/PostDialog/index.tsx\");\n/* harmony import */ var _components_CommentBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CommentBox */ \"./components/CommentBox/index.tsx\");\n/* harmony import */ var _components_Skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Skeleton */ \"./components/Skeleton/index.tsx\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store */ \"./store/index.ts\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jack/Desktop/code/serverless-demo/echo/pages/index.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // import Dialog from 'rc-dialog'\n\n\n\n\n\n\n\n\nvar App = function App(props) {\n  _s();\n\n  var store = props.store;\n  var PostDialogStore = store.PostDialogStore;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      visible = _useState[0],\n      setVisible = _useState[1];\n\n  console.log('PostDialogStore', PostDialogStore);\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(_components_PostDialog__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    visible: PostDialogStore.visible // visible={true}\n    ,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Waterfall__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    renderItem: function renderItem(item, i) {\n      return __jsx(_components_CardBook__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        onClick: function onClick() {\n          PostDialogStore.open(); // setVisible(true)\n          // console.log('__next', document.querySelector('#__next').style)\n          // document.querySelector('#__next').style.filter = 'blur(4px)'\n        },\n        post: item,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }\n      });\n    },\n    dataSource: [{\n      title: 'title',\n      image: '//aa',\n      type: 'image',\n      user: {\n        username: 'username',\n        avatar: '//aa'\n      },\n      count: {\n        likes: 1\n      }\n    }, {\n      title: 'title',\n      image: '//aa',\n      type: 'image',\n      user: {\n        username: 'username',\n        avatar: '//aa'\n      },\n      count: {\n        likes: 1\n      }\n    }],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(App, \"OGsIWlGlwYpVUqIrDReJ1GWx7rw=\");\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__[\"inject\"])('store')(Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__[\"observer\"])(App))); // export default observer(props => App)\n// export default App\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdG9yZSIsIlBvc3REaWFsb2dTdG9yZSIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJjb25zb2xlIiwibG9nIiwiaXRlbSIsImkiLCJvcGVuIiwidGl0bGUiLCJpbWFnZSIsInR5cGUiLCJ1c2VyIiwidXNlcm5hbWUiLCJhdmF0YXIiLCJjb3VudCIsImxpa2VzIiwiaW5qZWN0Iiwib2JzZXJ2ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUNiQyxLQURhLEdBQ0hELEtBREcsQ0FDYkMsS0FEYTtBQUFBLE1BRWJDLGVBRmEsR0FFT0QsS0FGUCxDQUViQyxlQUZhOztBQUFBLGtCQUdTQyxzREFBUSxDQUFDLEtBQUQsQ0FIakI7QUFBQSxNQUdkQyxPQUhjO0FBQUEsTUFHTEMsVUFISzs7QUFJckJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCTCxlQUEvQjtBQUNBLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUNFLFdBQU8sRUFBRUEsZUFBZSxDQUFDRSxPQUQzQixDQUVFO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUUsTUFBQyw2REFBRDtBQUNFLGNBQVUsRUFBRSxvQkFBQ0ksSUFBRCxFQUFPQyxDQUFQO0FBQUEsYUFDVixNQUFDLDREQUFEO0FBQ0UsZUFBTyxFQUFFLG1CQUFNO0FBQ2JQLHlCQUFlLENBQUNRLElBQWhCLEdBRGEsQ0FFYjtBQUNBO0FBQ0E7QUFDRCxTQU5IO0FBT0UsWUFBSSxFQUFFRixJQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEVTtBQUFBLEtBRGQ7QUFXRSxjQUFVLEVBQUUsQ0FDUjtBQUNFRyxXQUFLLEVBQUUsT0FEVDtBQUVFQyxXQUFLLEVBQUUsTUFGVDtBQUdFQyxVQUFJLEVBQUUsT0FIUjtBQUlFQyxVQUFJLEVBQUU7QUFDRkMsZ0JBQVEsRUFBRSxVQURSO0FBRUZDLGNBQU0sRUFBRTtBQUZOLE9BSlI7QUFRRUMsV0FBSyxFQUFFO0FBQ0hDLGFBQUssRUFBRTtBQURKO0FBUlQsS0FEUSxFQWFWO0FBQ0VQLFdBQUssRUFBRSxPQURUO0FBRUVDLFdBQUssRUFBRSxNQUZUO0FBR0VDLFVBQUksRUFBRSxPQUhSO0FBSUVDLFVBQUksRUFBRTtBQUNGQyxnQkFBUSxFQUFFLFVBRFI7QUFFRkMsY0FBTSxFQUFFO0FBRk4sT0FKUjtBQVFFQyxXQUFLLEVBQUU7QUFDSEMsYUFBSyxFQUFFO0FBREo7QUFSVCxLQWJVLENBWGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREY7QUErQ0QsQ0FwREQ7O0dBQU1uQixHOztLQUFBQSxHO0FBc0RTb0Isd0hBQU0sQ0FBQyxPQUFELENBQU4sQ0FBZ0JDLDJEQUFRLENBQUNyQixHQUFELENBQXhCLENBQWYsRSxDQUVBO0FBRUEiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZEJvb2sgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkQm9vaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgV2F0ZXJmYWxsIGZyb20gJy4uL2NvbXBvbmVudHMvV2F0ZXJmYWxsJ1xuLy8gaW1wb3J0IERpYWxvZyBmcm9tICdyYy1kaWFsb2cnXG5pbXBvcnQgUG9zdERpYWxvZyBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3REaWFsb2cnXG5pbXBvcnQgQ29tbWVudEJveCBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1lbnRCb3gnXG5pbXBvcnQgU2tlbGV0b24gZnJvbSAnLi4vY29tcG9uZW50cy9Ta2VsZXRvbidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnXG5pbXBvcnQgeyBpbmplY3QsIG9ic2VydmVyLCBQcm92aWRlciB9IGZyb20gJ21vYngtcmVhY3QnXG5cbmNvbnN0IEFwcCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHN0b3JlIH0gPSBwcm9wc1xuICBjb25zdCB7IFBvc3REaWFsb2dTdG9yZSB9ID0gc3RvcmVcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnNvbGUubG9nKCdQb3N0RGlhbG9nU3RvcmUnLCBQb3N0RGlhbG9nU3RvcmUpXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxQb3N0RGlhbG9nXG4gICAgICAgIHZpc2libGU9e1Bvc3REaWFsb2dTdG9yZS52aXNpYmxlfVxuICAgICAgICAvLyB2aXNpYmxlPXt0cnVlfVxuICAgICAgLz5cblxuICAgICAgPFdhdGVyZmFsbFxuICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgIDxDYXJkQm9va1xuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBQb3N0RGlhbG9nU3RvcmUub3BlbigpXG4gICAgICAgICAgICAgIC8vIHNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ19fbmV4dCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHQnKS5zdHlsZSlcbiAgICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dCcpLnN0eWxlLmZpbHRlciA9ICdibHVyKDRweCknXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcG9zdD17aXRlbX0vPlxuICAgICAgICApfVxuICAgICAgICBkYXRhU291cmNlPXtbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiAndGl0bGUnLFxuICAgICAgICAgICAgICBpbWFnZTogJy8vYWEnLFxuICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgICB1c2VybmFtZTogJ3VzZXJuYW1lJyxcbiAgICAgICAgICAgICAgICAgIGF2YXRhcjogJy8vYWEnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNvdW50OiB7XG4gICAgICAgICAgICAgICAgICBsaWtlczogMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ3RpdGxlJyxcbiAgICAgICAgICAgIGltYWdlOiAnLy9hYScsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiAndXNlcm5hbWUnLFxuICAgICAgICAgICAgICAgIGF2YXRhcjogJy8vYWEnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY291bnQ6IHtcbiAgICAgICAgICAgICAgICBsaWtlczogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXX1cbiAgICAgIC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0KCdzdG9yZScpKG9ic2VydmVyKEFwcCkpXG5cbi8vIGV4cG9ydCBkZWZhdWx0IG9ic2VydmVyKHByb3BzID0+IEFwcClcblxuLy8gZXhwb3J0IGRlZmF1bHQgQXBwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})