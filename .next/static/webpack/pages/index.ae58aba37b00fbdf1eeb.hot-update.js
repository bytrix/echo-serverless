webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Navigation/index.tsx":
/*!*****************************************!*\
  !*** ./components/Navigation/index.tsx ***!
  \*****************************************/
/*! exports provided: Item, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Item\", function() { return Item; });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/jack/Desktop/code/serverless-demo/echo/components/Navigation/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n// import { loadGetInitialProps } from \"next/dist/next-server/lib/utils\"\n\n\n\n\nvar Navigation = function Navigation(_ref) {\n  var children = _ref.children;\n  // const [router, setRouter] = useState()\n  return __jsx(\"div\", {\n    style: {\n      backgroundColor: 'red'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, children); // return React.cloneElement(children)\n};\n\n_c = Navigation;\n\nvar Item = function Item(_ref2) {\n  _s();\n\n  var children = _ref2.children,\n      href = _ref2.href;\n  console.log('children', children);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])(); // console.log('useRouter', router)\n\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: href,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(children, {\n    style: {\n      color: router.pathname === href ? 'black' : 'rgba(0,0,0,0.3)',\n      margin: 8,\n      cursor: 'pointer',\n      fontSize: 24 // verticalAlign: 'middle'\n\n    }\n  }));\n};\n\n_s(Item, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c2 = Item;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Navigation\");\n$RefreshReg$(_c2, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL2luZGV4LnRzeD84MWMxIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJjaGlsZHJlbiIsImJhY2tncm91bmRDb2xvciIsIkl0ZW0iLCJocmVmIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwiY2xvbmVFbGVtZW50Iiwic3R5bGUiLCJjb2xvciIsInBhdGhuYW1lIiwibWFyZ2luIiwiY3Vyc29yIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNqQztBQUNBLFNBQ0k7QUFDSSxTQUFLLEVBQUU7QUFDSEMscUJBQWUsRUFBRTtBQURkLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1LRCxRQU5MLENBREosQ0FGaUMsQ0FZakM7QUFDSCxDQWJEOztLQUFNRCxVOztBQWVOLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLFFBQXdCO0FBQUE7O0FBQUEsTUFBckJGLFFBQXFCLFNBQXJCQSxRQUFxQjtBQUFBLE1BQVhHLElBQVcsU0FBWEEsSUFBVztBQUNqQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkwsUUFBeEI7QUFDQSxNQUFNTSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBRmlDLENBR2pDOztBQUNBLFNBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUosSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUtLSyw0Q0FBSyxDQUFDQyxZQUFOLENBQW1CVCxRQUFuQixFQUE2QjtBQUMxQlUsU0FBSyxFQUFFO0FBQ0hDLFdBQUssRUFBRUwsTUFBTSxDQUFDTSxRQUFQLEtBQW9CVCxJQUFwQixHQUEyQixPQUEzQixHQUFxQyxpQkFEekM7QUFFSFUsWUFBTSxFQUFFLENBRkw7QUFHSEMsWUFBTSxFQUFFLFNBSEw7QUFJSEMsY0FBUSxFQUFFLEVBSlAsQ0FLSDs7QUFMRztBQURtQixHQUE3QixDQUxMLENBREo7QUFpQkgsQ0FyQkQ7O0dBQU1iLEk7VUFFYUsscUQ7OztNQUZiTCxJO0FBdUJOO0FBSWVILHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGxvYWRHZXRJbml0aWFsUHJvcHMgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlsc1wiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgLy8gY29uc3QgW3JvdXRlciwgc2V0Um91dGVyXSA9IHVzZVN0YXRlKClcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCdcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHsvKiA8aDE+Y3VycmVudCByb3V0ZXI6IHt3aW5kb3cubG9jYXRpb24uaHJlZn0xPC9oMT4gKi99XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgICAvLyByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuKVxufVxuXG5jb25zdCBJdGVtID0gKHsgY2hpbGRyZW4sIGhyZWYgfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjaGlsZHJlbicsIGNoaWxkcmVuKVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgLy8gY29uc29sZS5sb2coJ3VzZVJvdXRlcicsIHJvdXRlcilcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgICAgIHsvKiA8c3BhbiBzdHlsZT17e1xuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogJ3JlZCdcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgICAgICAgfX0+e2NoaWxkcmVufTwvc3Bhbj4gKi99XG4gICAgICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJvdXRlci5wYXRobmFtZSA9PT0gaHJlZiA/ICdibGFjaycgOiAncmdiYSgwLDAsMCwwLjMpJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4LFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgICAgICAgICAgICAgICAvLyB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L0xpbms+XG4gICAgKVxufVxuXG5leHBvcnQge1xuICAgIEl0ZW1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navigation/index.tsx\n");

/***/ })

})