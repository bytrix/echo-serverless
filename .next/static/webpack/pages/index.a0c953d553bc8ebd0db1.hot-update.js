webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Navigation/index.tsx":
/*!*****************************************!*\
  !*** ./components/Navigation/index.tsx ***!
  \*****************************************/
/*! exports provided: Item, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Item\", function() { return Item; });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/jack/Desktop/code/serverless-demo/echo/components/Navigation/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar Item = function Item(_ref) {\n  _s();\n\n  var children = _ref.children,\n      href = _ref.href;\n  console.log('children', children);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: href,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(children, {\n    style: {\n      color: router.pathname === href ? 'black' : 'rgba(0,0,0,0.3)',\n      margin: 8,\n      cursor: 'pointer',\n      fontSize: 24\n    }\n  }));\n};\n\n_s(Item, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Item;\n\nvar Navigation = function Navigation(_ref2) {\n  var children = _ref2.children;\n  return __jsx(\"div\", {\n    style: {\n      margin: '22px 0px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, children);\n};\n\n_c2 = Navigation;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Item\");\n$RefreshReg$(_c2, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL2luZGV4LnRzeD84MWMxIl0sIm5hbWVzIjpbIkl0ZW0iLCJjaGlsZHJlbiIsImhyZWYiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJzdHlsZSIsImNvbG9yIiwicGF0aG5hbWUiLCJtYXJnaW4iLCJjdXJzb3IiLCJmb250U2l6ZSIsIk5hdmlnYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBd0I7QUFBQTs7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2pDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCSCxRQUF4QjtBQUNBLE1BQU1JLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxTQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVKLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDS0ssNENBQUssQ0FBQ0MsWUFBTixDQUFtQlAsUUFBbkIsRUFBNkI7QUFDMUJRLFNBQUssRUFBRTtBQUNIQyxXQUFLLEVBQUVMLE1BQU0sQ0FBQ00sUUFBUCxLQUFvQlQsSUFBcEIsR0FBMkIsT0FBM0IsR0FBcUMsaUJBRHpDO0FBRUhVLFlBQU0sRUFBRSxDQUZMO0FBR0hDLFlBQU0sRUFBRSxTQUhMO0FBSUhDLGNBQVEsRUFBRTtBQUpQO0FBRG1CLEdBQTdCLENBREwsQ0FESjtBQVlILENBZkQ7O0dBQU1kLEk7VUFFYU0scUQ7OztLQUZiTixJOztBQWlCTixJQUFNZSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxRQUFrQjtBQUFBLE1BQWZkLFFBQWUsU0FBZkEsUUFBZTtBQUNqQyxTQUNJO0FBQ0ksU0FBSyxFQUFFO0FBQ0hXLFlBQU0sRUFBRTtBQURMLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtLWCxRQUxMLENBREo7QUFTSCxDQVZEOztNQUFNYyxVO0FBYU47QUFJZUEseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgSXRlbSA9ICh7IGNoaWxkcmVuLCBocmVmIH0pID0+IHtcbiAgICBjb25zb2xlLmxvZygnY2hpbGRyZW4nLCBjaGlsZHJlbilcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAge1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByb3V0ZXIucGF0aG5hbWUgPT09IGhyZWYgPyAnYmxhY2snIDogJ3JnYmEoMCwwLDAsMC4zKScsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOCxcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyNCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9MaW5rPlxuICAgIClcbn1cblxuY29uc3QgTmF2aWdhdGlvbiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1hcmdpbjogJzIycHggMHB4J1xuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuZXhwb3J0IHtcbiAgICBJdGVtXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation/index.tsx\n");

/***/ })

})