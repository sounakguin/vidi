"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/page",{

/***/ "(app-pages-browser)/./src/Components/Pages/Home/Socialmedia.jsx":
/*!***************************************************!*\
  !*** ./src/Components/Pages/Home/Socialmedia.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_Data_Productpage_Video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Components/Data/Productpage/Video */ \"(app-pages-browser)/./src/Components/Data/Productpage/Video.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// components/VerticalCarousel.js\n\n\nconst VerticalCarousel = (param)=>{\n    let { videos } = param;\n    _s();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const container = containerRef.current;\n        let start = 0;\n        const speed = 0.5; // Adjust speed of movement here\n        const animate = ()=>{\n            start -= speed;\n            if (Math.abs(start) > container.scrollHeight / 2) {\n                start = 0;\n                container.scrollTop = 0;\n            }\n            container.scrollTop = start;\n            requestAnimationFrame(animate);\n        };\n        animate();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full h-screen overflow-hidden flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col h-[200%] overflow-hidden\",\n            ref: containerRef,\n            children: [\n                videos.map((video, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-[56.25vw] relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            src: video,\n                            className: \"w-full h-full object-cover\",\n                            autoPlay: true,\n                            loop: true,\n                            muted: true\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Vidi\\\\vidi\\\\src\\\\Components\\\\Pages\\\\Home\\\\Socialmedia.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"F:\\\\Vidi\\\\vidi\\\\src\\\\Components\\\\Pages\\\\Home\\\\Socialmedia.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, undefined)),\n                videos.map((video, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-[56.25vw] relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            src: video,\n                            className: \"w-full h-full object-cover\",\n                            autoPlay: true,\n                            loop: true,\n                            muted: true\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Vidi\\\\vidi\\\\src\\\\Components\\\\Pages\\\\Home\\\\Socialmedia.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index + videos.length, false, {\n                        fileName: \"F:\\\\Vidi\\\\vidi\\\\src\\\\Components\\\\Pages\\\\Home\\\\Socialmedia.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined))\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\Vidi\\\\vidi\\\\src\\\\Components\\\\Pages\\\\Home\\\\Socialmedia.jsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\Vidi\\\\vidi\\\\src\\\\Components\\\\Pages\\\\Home\\\\Socialmedia.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VerticalCarousel, \"8puyVO4ts1RhCfXUmci3vLI3Njw=\");\n_c = VerticalCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VerticalCarousel);\nvar _c;\n$RefreshReg$(_c, \"VerticalCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL1BhZ2VzL0hvbWUvU29jaWFsbWVkaWEuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxpQ0FBaUM7QUFDUztBQUNzQjtBQUNoRSxNQUFNRyxtQkFBbUI7UUFBQyxFQUFFQyxNQUFNLEVBQUU7O0lBQ2xDLE1BQU1DLGVBQWVKLDZDQUFNQSxDQUFDO0lBRTVCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1NLFlBQVlELGFBQWFFLE9BQU87UUFDdEMsSUFBSUMsUUFBUTtRQUNaLE1BQU1DLFFBQVEsS0FBSyxnQ0FBZ0M7UUFFbkQsTUFBTUMsVUFBVTtZQUNkRixTQUFTQztZQUNULElBQUlFLEtBQUtDLEdBQUcsQ0FBQ0osU0FBU0YsVUFBVU8sWUFBWSxHQUFHLEdBQUc7Z0JBQ2hETCxRQUFRO2dCQUNSRixVQUFVUSxTQUFTLEdBQUc7WUFDeEI7WUFDQVIsVUFBVVEsU0FBUyxHQUFHTjtZQUN0Qk8sc0JBQXNCTDtRQUN4QjtRQUVBQTtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUNDQyxXQUFVO1lBQ1ZDLEtBQUtiOztnQkFFSkQsT0FBT2UsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUNsQiw4REFBQ0w7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNHOzRCQUNDRSxLQUFLRjs0QkFDTEgsV0FBVTs0QkFDVk0sUUFBUTs0QkFDUkMsSUFBSTs0QkFDSkMsS0FBSzs7Ozs7O3VCQU55Q0o7Ozs7O2dCQVVuRGpCLE9BQU9lLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDbEIsOERBQUNMO3dCQUNDQyxXQUFVO2tDQUdWLDRFQUFDRzs0QkFDQ0UsS0FBS0Y7NEJBQ0xILFdBQVU7NEJBQ1ZNLFFBQVE7NEJBQ1JDLElBQUk7NEJBQ0pDLEtBQUs7Ozs7Ozt1QkFQRkosUUFBUWpCLE9BQU9zQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O0FBY3RDO0dBdkRNdkI7S0FBQUE7QUF5RE4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9QYWdlcy9Ib21lL1NvY2lhbG1lZGlhLmpzeD8yZDY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG4vLyBjb21wb25lbnRzL1ZlcnRpY2FsQ2Fyb3VzZWwuanNcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFZpZGVvcyBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9EYXRhL1Byb2R1Y3RwYWdlL1ZpZGVvXCI7XHJcbmNvbnN0IFZlcnRpY2FsQ2Fyb3VzZWwgPSAoeyB2aWRlb3MgfSkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNvbnRhaW5lclJlZi5jdXJyZW50O1xyXG4gICAgbGV0IHN0YXJ0ID0gMDtcclxuICAgIGNvbnN0IHNwZWVkID0gMC41OyAvLyBBZGp1c3Qgc3BlZWQgb2YgbW92ZW1lbnQgaGVyZVxyXG5cclxuICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XHJcbiAgICAgIHN0YXJ0IC09IHNwZWVkO1xyXG4gICAgICBpZiAoTWF0aC5hYnMoc3RhcnQpID4gY29udGFpbmVyLnNjcm9sbEhlaWdodCAvIDIpIHtcclxuICAgICAgICBzdGFydCA9IDA7XHJcbiAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IHN0YXJ0O1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFuaW1hdGUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLXNjcmVlbiBvdmVyZmxvdy1oaWRkZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1bMjAwJV0gb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgICByZWY9e2NvbnRhaW5lclJlZn1cclxuICAgICAgPlxyXG4gICAgICAgIHt2aWRlb3MubWFwKCh2aWRlbywgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzU2LjI1dnddIHJlbGF0aXZlXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgICAgIHNyYz17dmlkZW99XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIlxyXG4gICAgICAgICAgICAgIGF1dG9QbGF5XHJcbiAgICAgICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgICB7dmlkZW9zLm1hcCgodmlkZW8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLVs1Ni4yNXZ3XSByZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgIGtleT17aW5kZXggKyB2aWRlb3MubGVuZ3RofVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dmlkZW9cclxuICAgICAgICAgICAgICBzcmM9e3ZpZGVvfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgICAgICAgIGxvb3BcclxuICAgICAgICAgICAgICBtdXRlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlcnRpY2FsQ2Fyb3VzZWw7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJWaWRlb3MiLCJWZXJ0aWNhbENhcm91c2VsIiwidmlkZW9zIiwiY29udGFpbmVyUmVmIiwiY29udGFpbmVyIiwiY3VycmVudCIsInN0YXJ0Iiwic3BlZWQiLCJhbmltYXRlIiwiTWF0aCIsImFicyIsInNjcm9sbEhlaWdodCIsInNjcm9sbFRvcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsIm1hcCIsInZpZGVvIiwiaW5kZXgiLCJzcmMiLCJhdXRvUGxheSIsImxvb3AiLCJtdXRlZCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/Pages/Home/Socialmedia.jsx\n"));

/***/ })

});