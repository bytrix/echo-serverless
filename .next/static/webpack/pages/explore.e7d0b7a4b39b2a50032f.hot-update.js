webpackHotUpdate_N_E("pages/explore",{

/***/ "./components/Layout/index.tsx":
/*!*************************************!*\
  !*** ./components/Layout/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Navigation */ \"./components/Navigation/index.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jack/Desktop/code/serverless-demo/echo/components/Layout/index.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Layout = function Layout(props) {\n  var children = props.children;\n  return __jsx(\"div\", {\n    style: {\n      // backgroundColor: 'red',\n      width: 930,\n      margin: '0 auto'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      // backgroundColor: 'blue',\n      display: 'flex',\n      justifyContent: 'space-between'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, \"\\u5C0F\\u7EB8\\u56E2\"), __jsx(_Navigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 21\n    }\n  }, __jsx(_Navigation__WEBPACK_IMPORTED_MODULE_4__[\"Item\"], {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 25\n    }\n  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__[\"AiOutlineHome\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 29\n    }\n  })), __jsx(_Navigation__WEBPACK_IMPORTED_MODULE_4__[\"Item\"], {\n    href: \"/explore\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 25\n    }\n  }, __jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__[\"BiSun\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 29\n    }\n  }))), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__[\"RiUserSmileLine\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 21\n    }\n  }))), children);\n};\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvaW5kZXgudHN4P2ZhODAiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiIsIndpZHRoIiwibWFyZ2luIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNkQyxRQURjLEdBQ0RELEtBREMsQ0FDZEMsUUFEYztBQUV0QixTQUNJO0FBQ0ksU0FBSyxFQUFFO0FBQ0g7QUFDQUMsV0FBSyxFQUFFLEdBRko7QUFHSEMsWUFBTSxFQUFFO0FBSEwsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0k7QUFDSSxTQUFLLEVBQUU7QUFDSDtBQUNBQyxhQUFPLEVBQUUsTUFGTjtBQUdIQyxvQkFBYyxFQUFFO0FBSGIsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFQSixFQVFRLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixDQVJSLEVBZ0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQWhCSixDQVBKLEVBMkJLSixRQTNCTCxDQURKO0FBK0JILENBakNEOztLQUFNRixNO0FBbUNTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IFJpVXNlclNtaWxlTGluZSB9IGZyb20gJ3JlYWN0LWljb25zL3JpJ1xuaW1wb3J0IHsgQWlPdXRsaW5lSG9tZSwgQWlGaWxsSG9tZSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xuaW1wb3J0IHsgQmlTdW4gfSBmcm9tICdyZWFjdC1pY29ucy9iaSdcbmltcG9ydCBOYXZpZ2F0aW9uLCB7IEl0ZW0gfSBmcm9tICcuLi9OYXZpZ2F0aW9uJ1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wc1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogOTMwLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgYXV0bydcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICdibHVlJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aDE+5bCP57q45ZuiPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbSBocmVmPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lSG9tZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0gaHJlZj0nL2V4cGxvcmUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCaVN1biAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L05hdmlnYXRpb24+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFJpVXNlclNtaWxlTGluZSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/index.tsx\n");

/***/ })

})