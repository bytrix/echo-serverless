webpackHotUpdate_N_E("pages/explore",{

/***/ "./components/Navigation/index.tsx":
/*!*****************************************!*\
  !*** ./components/Navigation/index.tsx ***!
  \*****************************************/
/*! exports provided: Item, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Item\", function() { return Item; });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/jack/Desktop/code/serverless-demo/echo/components/Navigation/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n// import { loadGetInitialProps } from \"next/dist/next-server/lib/utils\"\n\n\n\n\nvar Navigation = function Navigation(_ref) {\n  var children = _ref.children;\n  return __jsx(\"div\", {\n    style: {\n      margin: '22px 0px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, children); // return React.cloneElement(children)\n};\n\n_c = Navigation;\n\nvar Item = function Item(_ref2) {\n  _s();\n\n  var children = _ref2.children,\n      href = _ref2.href;\n  console.log('children', children);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])(); // console.log('useRouter', router)\n\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: href,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(children, {\n    style: {\n      color: router.pathname === href ? 'black' : 'rgba(0,0,0,0.3)',\n      margin: 8,\n      cursor: 'pointer',\n      fontSize: 24 // verticalAlign: 'middle'\n\n    }\n  }));\n};\n\n_s(Item, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c2 = Item;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Navigation\");\n$RefreshReg$(_c2, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL2luZGV4LnRzeD84MWMxIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJjaGlsZHJlbiIsIm1hcmdpbiIsIkl0ZW0iLCJocmVmIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwiY2xvbmVFbGVtZW50Iiwic3R5bGUiLCJjb2xvciIsInBhdGhuYW1lIiwiY3Vyc29yIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNqQyxTQUNJO0FBQ0ksU0FBSyxFQUFFO0FBQ0hDLFlBQU0sRUFBRTtBQURMLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1LRCxRQU5MLENBREosQ0FEaUMsQ0FXakM7QUFDSCxDQVpEOztLQUFNRCxVOztBQWNOLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLFFBQXdCO0FBQUE7O0FBQUEsTUFBckJGLFFBQXFCLFNBQXJCQSxRQUFxQjtBQUFBLE1BQVhHLElBQVcsU0FBWEEsSUFBVztBQUNqQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkwsUUFBeEI7QUFDQSxNQUFNTSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBRmlDLENBR2pDOztBQUNBLFNBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUosSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUtLSyw0Q0FBSyxDQUFDQyxZQUFOLENBQW1CVCxRQUFuQixFQUE2QjtBQUMxQlUsU0FBSyxFQUFFO0FBQ0hDLFdBQUssRUFBRUwsTUFBTSxDQUFDTSxRQUFQLEtBQW9CVCxJQUFwQixHQUEyQixPQUEzQixHQUFxQyxpQkFEekM7QUFFSEYsWUFBTSxFQUFFLENBRkw7QUFHSFksWUFBTSxFQUFFLFNBSEw7QUFJSEMsY0FBUSxFQUFFLEVBSlAsQ0FLSDs7QUFMRztBQURtQixHQUE3QixDQUxMLENBREo7QUFpQkgsQ0FyQkQ7O0dBQU1aLEk7VUFFYUsscUQ7OztNQUZiTCxJO0FBdUJOO0FBSWVILHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGxvYWRHZXRJbml0aWFsUHJvcHMgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlsc1wiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMjJweCAwcHgnXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7LyogPGgxPmN1cnJlbnQgcm91dGVyOiB7d2luZG93LmxvY2F0aW9uLmhyZWZ9MTwvaDE+ICovfVxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gICAgLy8gcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbilcbn1cblxuY29uc3QgSXRlbSA9ICh7IGNoaWxkcmVuLCBocmVmIH0pID0+IHtcbiAgICBjb25zb2xlLmxvZygnY2hpbGRyZW4nLCBjaGlsZHJlbilcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIC8vIGNvbnNvbGUubG9nKCd1c2VSb3V0ZXInLCByb3V0ZXIpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+XG4gICAgICAgICAgICB7LyogPHNwYW4gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgICAgICAgIH19PntjaGlsZHJlbn08L3NwYW4+ICovfVxuICAgICAgICAgICAge1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByb3V0ZXIucGF0aG5hbWUgPT09IGhyZWYgPyAnYmxhY2snIDogJ3JnYmEoMCwwLDAsMC4zKScsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOCxcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyNCxcbiAgICAgICAgICAgICAgICAgICAgLy8gdmVydGljYWxBbGlnbjogJ21pZGRsZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9MaW5rPlxuICAgIClcbn1cblxuZXhwb3J0IHtcbiAgICBJdGVtXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation/index.tsx\n");

/***/ })

})