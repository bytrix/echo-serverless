webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Navigation/index.tsx":
/*!*****************************************!*\
  !*** ./components/Navigation/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/jack/Desktop/code/serverless-demo/echo/components/Navigation/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar Navigation = function Navigation(_ref) {\n  var children = _ref.children;\n  return __jsx(\"div\", {\n    style: {\n      margin: '22px 0px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, children);\n};\n\n_c = Navigation;\n\nvar Item = function Item(props) {\n  _s();\n\n  var children = props.children,\n      href = props.href;\n  console.log('children', children);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: href,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(children, {\n    style: {\n      color: router.pathname === href ? 'black' : 'rgba(0,0,0,0.3)',\n      margin: 8,\n      cursor: 'pointer',\n      fontSize: 24\n    }\n  }));\n};\n\n_s(Item, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c2 = Item;\nNavigation.Item = Item;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Navigation\");\n$RefreshReg$(_c2, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL2luZGV4LnRzeD84MWMxIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJjaGlsZHJlbiIsIm1hcmdpbiIsIkl0ZW0iLCJwcm9wcyIsImhyZWYiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJzdHlsZSIsImNvbG9yIiwicGF0aG5hbWUiLCJjdXJzb3IiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ2pDLFNBQ0k7QUFDSSxTQUFLLEVBQUU7QUFDSEMsWUFBTSxFQUFFO0FBREwsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0tELFFBTEwsQ0FESjtBQVNILENBVkQ7O0tBQU1ELFU7O0FBaUJOLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BQ1pILFFBRFksR0FDT0csS0FEUCxDQUNaSCxRQURZO0FBQUEsTUFDRkksSUFERSxHQUNPRCxLQURQLENBQ0ZDLElBREU7QUFFcEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JOLFFBQXhCO0FBQ0EsTUFBTU8sTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFNBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUosSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNLSyw0Q0FBSyxDQUFDQyxZQUFOLENBQW1CVixRQUFuQixFQUE2QjtBQUMxQlcsU0FBSyxFQUFFO0FBQ0hDLFdBQUssRUFBRUwsTUFBTSxDQUFDTSxRQUFQLEtBQW9CVCxJQUFwQixHQUEyQixPQUEzQixHQUFxQyxpQkFEekM7QUFFSEgsWUFBTSxFQUFFLENBRkw7QUFHSGEsWUFBTSxFQUFFLFNBSEw7QUFJSEMsY0FBUSxFQUFFO0FBSlA7QUFEbUIsR0FBN0IsQ0FETCxDQURKO0FBWUgsQ0FoQkQ7O0dBQU1iLEk7VUFHYU0scUQ7OztNQUhiTixJO0FBa0JOSCxVQUFVLENBQUNHLElBQVgsR0FBa0JBLElBQWxCO0FBRWVILHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcyMnB4IDBweCdcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5pbnRlcmZhY2UgSXRlbVByb3BzIHtcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3RFbGVtZW50XG4gICAgaHJlZjogc3RyaW5nXG59XG5cbmNvbnN0IEl0ZW0gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBocmVmIH0gPSBwcm9wc1xuICAgIGNvbnNvbGUubG9nKCdjaGlsZHJlbicsIGNoaWxkcmVuKVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+XG4gICAgICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJvdXRlci5wYXRobmFtZSA9PT0gaHJlZiA/ICdibGFjaycgOiAncmdiYSgwLDAsMCwwLjMpJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4LFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L0xpbms+XG4gICAgKVxufVxuXG5OYXZpZ2F0aW9uLkl0ZW0gPSBJdGVtXG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation/index.tsx\n");

/***/ })

})