webpackHotUpdate_N_E("pages/explore",{

/***/ "./components/Navigation/index.tsx":
/*!*****************************************!*\
  !*** ./components/Navigation/index.tsx ***!
  \*****************************************/
/*! exports provided: Item, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Item\", function() { return Item; });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _s = $RefreshSig$(),\n    _this = undefined,\n    _jsxFileName = \"/Users/jack/Desktop/code/serverless-demo/echo/components/Navigation/index.tsx\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n// import { loadGetInitialProps } from \"next/dist/next-server/lib/utils\"\n\n\n\n\nvar Navigation = function Navigation(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      router = _useState[0],\n      setRouter = _useState[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, children);\n};\n\n_s(Navigation, \"09RBVsOv4uey8oGdCksohSKpBLE=\");\n\n_c = Navigation;\n\nvar Item = function Item(_ref2) {\n  _s2();\n\n  var children = _ref2.children,\n      href = _ref2.href;\n  console.log('children', children);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])(); // console.log('useRouter', router)\n\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: href,\n    style: {\n      verticalAlign: 'middle'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(children, {\n    style: {\n      color: router.pathname === href ? 'black' : 'rgba(0,0,0,0.3)',\n      margin: 8,\n      cursor: 'pointer',\n      fontSize: 24 // verticalAlign: 'middle'\n\n    }\n  }));\n};\n\n_s2(Item, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c2 = Item;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Navigation\");\n$RefreshReg$(_c2, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL2luZGV4LnRzeD84MWMxIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwicm91dGVyIiwic2V0Um91dGVyIiwiSXRlbSIsImhyZWYiLCJjb25zb2xlIiwibG9nIiwidXNlUm91dGVyIiwidmVydGljYWxBbGlnbiIsIlJlYWN0IiwiY2xvbmVFbGVtZW50Iiwic3R5bGUiLCJjb2xvciIsInBhdGhuYW1lIiwibWFyZ2luIiwiY3Vyc29yIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ0xDLHNEQUFRLEVBREg7QUFBQSxNQUMxQkMsTUFEMEI7QUFBQSxNQUNsQkMsU0FEa0I7O0FBRWpDLFNBQ0ksbUVBRUtILFFBRkwsQ0FESjtBQU1ILENBUkQ7O0dBQU1ELFU7O0tBQUFBLFU7O0FBVU4sSUFBTUssSUFBSSxHQUFHLFNBQVBBLElBQU8sUUFBd0I7QUFBQTs7QUFBQSxNQUFyQkosUUFBcUIsU0FBckJBLFFBQXFCO0FBQUEsTUFBWEssSUFBVyxTQUFYQSxJQUFXO0FBQ2pDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCUCxRQUF4QjtBQUNBLE1BQU1FLE1BQU0sR0FBR00sNkRBQVMsRUFBeEIsQ0FGaUMsQ0FHakM7O0FBQ0EsU0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFSCxJQUFaO0FBQWtCLFNBQUssRUFBRTtBQUFFSSxtQkFBYSxFQUFFO0FBQWpCLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBS0tDLDRDQUFLLENBQUNDLFlBQU4sQ0FBbUJYLFFBQW5CLEVBQTZCO0FBQzFCWSxTQUFLLEVBQUU7QUFDSEMsV0FBSyxFQUFFWCxNQUFNLENBQUNZLFFBQVAsS0FBb0JULElBQXBCLEdBQTJCLE9BQTNCLEdBQXFDLGlCQUR6QztBQUVIVSxZQUFNLEVBQUUsQ0FGTDtBQUdIQyxZQUFNLEVBQUUsU0FITDtBQUlIQyxjQUFRLEVBQUUsRUFKUCxDQUtIOztBQUxHO0FBRG1CLEdBQTdCLENBTEwsQ0FESjtBQWlCSCxDQXJCRDs7SUFBTWIsSTtVQUVhSSxxRDs7O01BRmJKLEk7QUF1Qk47QUFJZUwseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgbG9hZEdldEluaXRpYWxQcm9wcyB9IGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgTmF2aWdhdGlvbiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCBbcm91dGVyLCBzZXRSb3V0ZXJdID0gdXNlU3RhdGUoKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7LyogPGgxPmN1cnJlbnQgcm91dGVyOiB7d2luZG93LmxvY2F0aW9uLmhyZWZ9MTwvaDE+ICovfVxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmNvbnN0IEl0ZW0gPSAoeyBjaGlsZHJlbiwgaHJlZiB9KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2NoaWxkcmVuJywgY2hpbGRyZW4pXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICAvLyBjb25zb2xlLmxvZygndXNlUm91dGVyJywgcm91dGVyKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19PlxuICAgICAgICAgICAgey8qIDxzcGFuIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiAncmVkJ1xuICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICAgICAgICB9fT57Y2hpbGRyZW59PC9zcGFuPiAqL31cbiAgICAgICAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcm91dGVyLnBhdGhuYW1lID09PSBocmVmID8gJ2JsYWNrJyA6ICdyZ2JhKDAsMCwwLDAuMyknLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDgsXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjQsXG4gICAgICAgICAgICAgICAgICAgIC8vIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvTGluaz5cbiAgICApXG59XG5cbmV4cG9ydCB7XG4gICAgSXRlbVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navigation/index.tsx\n");

/***/ })

})