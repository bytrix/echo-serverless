webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Navigation/index.tsx":
/*!*****************************************!*\
  !*** ./components/Navigation/index.tsx ***!
  \*****************************************/
/*! exports provided: Item, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Item\", function() { return Item; });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/jack/Desktop/code/serverless-demo/echo/components/Navigation/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n// import { loadGetInitialProps } from \"next/dist/next-server/lib/utils\"\n\n\n\n\nvar Navigation = function Navigation(_ref) {\n  var children = _ref.children;\n  // const [router, setRouter] = useState()\n  // return (\n  //     <>\n  //         {/* <h1>current router: {window.location.href}1</h1> */}\n  //         {children}\n  //     </>\n  // )\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(children);\n};\n\n_c = Navigation;\n\nvar Item = function Item(_ref2) {\n  _s();\n\n  var children = _ref2.children,\n      href = _ref2.href;\n  console.log('children', children);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])(); // console.log('useRouter', router)\n\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: href,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(children, {\n    style: {\n      color: router.pathname === href ? 'black' : 'rgba(0,0,0,0.3)',\n      margin: 8,\n      cursor: 'pointer',\n      fontSize: 24 // verticalAlign: 'middle'\n\n    }\n  }));\n};\n\n_s(Item, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c2 = Item;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Navigation\");\n$RefreshReg$(_c2, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL2luZGV4LnRzeD84MWMxIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJjaGlsZHJlbiIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwiSXRlbSIsImhyZWYiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwidXNlUm91dGVyIiwic3R5bGUiLCJjb2xvciIsInBhdGhuYW1lIiwibWFyZ2luIiwiY3Vyc29yIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFPQyw0Q0FBSyxDQUFDQyxZQUFOLENBQW1CRixRQUFuQixDQUFQO0FBQ0gsQ0FURDs7S0FBTUQsVTs7QUFXTixJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxRQUF3QjtBQUFBOztBQUFBLE1BQXJCSCxRQUFxQixTQUFyQkEsUUFBcUI7QUFBQSxNQUFYSSxJQUFXLFNBQVhBLElBQVc7QUFDakNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JOLFFBQXhCO0FBQ0EsTUFBTU8sTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQUZpQyxDQUdqQzs7QUFDQSxTQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVKLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFLS0gsNENBQUssQ0FBQ0MsWUFBTixDQUFtQkYsUUFBbkIsRUFBNkI7QUFDMUJTLFNBQUssRUFBRTtBQUNIQyxXQUFLLEVBQUVILE1BQU0sQ0FBQ0ksUUFBUCxLQUFvQlAsSUFBcEIsR0FBMkIsT0FBM0IsR0FBcUMsaUJBRHpDO0FBRUhRLFlBQU0sRUFBRSxDQUZMO0FBR0hDLFlBQU0sRUFBRSxTQUhMO0FBSUhDLGNBQVEsRUFBRSxFQUpQLENBS0g7O0FBTEc7QUFEbUIsR0FBN0IsQ0FMTCxDQURKO0FBaUJILENBckJEOztHQUFNWCxJO1VBRWFLLHFEOzs7TUFGYkwsSTtBQXVCTjtBQUllSix5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBsb2FkR2V0SW5pdGlhbFByb3BzIH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHNcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIC8vIGNvbnN0IFtyb3V0ZXIsIHNldFJvdXRlcl0gPSB1c2VTdGF0ZSgpXG4gICAgLy8gcmV0dXJuIChcbiAgICAvLyAgICAgPD5cbiAgICAvLyAgICAgICAgIHsvKiA8aDE+Y3VycmVudCByb3V0ZXI6IHt3aW5kb3cubG9jYXRpb24uaHJlZn0xPC9oMT4gKi99XG4gICAgLy8gICAgICAgICB7Y2hpbGRyZW59XG4gICAgLy8gICAgIDwvPlxuICAgIC8vIClcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuKVxufVxuXG5jb25zdCBJdGVtID0gKHsgY2hpbGRyZW4sIGhyZWYgfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjaGlsZHJlbicsIGNoaWxkcmVuKVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgLy8gY29uc29sZS5sb2coJ3VzZVJvdXRlcicsIHJvdXRlcilcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgICAgIHsvKiA8c3BhbiBzdHlsZT17e1xuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogJ3JlZCdcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgICAgICAgfX0+e2NoaWxkcmVufTwvc3Bhbj4gKi99XG4gICAgICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJvdXRlci5wYXRobmFtZSA9PT0gaHJlZiA/ICdibGFjaycgOiAncmdiYSgwLDAsMCwwLjMpJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4LFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgICAgICAgICAgICAgICAvLyB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L0xpbms+XG4gICAgKVxufVxuXG5leHBvcnQge1xuICAgIEl0ZW1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navigation/index.tsx\n");

/***/ })

})