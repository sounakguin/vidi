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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Socialmedia; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst VerticalCarousel = (param)=>{\n    let { videos } = param;\n    _s();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const container = containerRef.current;\n        let start = 0;\n        const speed = 2; // Adjust speed of movement here\n        const animate = ()=>{\n            start -= speed;\n            if (Math.abs(start) > container.scrollHeight / 2) {\n                start = 0;\n                container.scrollTop = 0;\n            }\n            container.scrollTop = start;\n            requestAnimationFrame(animate);\n        };\n        animate();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full h-screen overflow-hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col\",\n            ref: containerRef,\n            style: {\n                height: \"calc(\".concat(videos.length * 56.25, \"vw * 2)\")\n            },\n            children: [\n                videos.map((video, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-[56.25vw]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            src: video,\n                            className: \"w-full h-full object-cover\",\n                            autoPlay: true,\n                            loop: true,\n                            muted: true\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Vidi\\\\vidi\\\\src\\\\Components\\\\Pages\\\\Home\\\\Socialmedia.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"F:\\\\Vidi\\\\vidi\\\\src\\\\Components\\\\Pages\\\\Home\\\\Socialmedia.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, undefined)),\n                videos.map((video, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-[56.25vw]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            src: video,\n                            className: \"w-full h-full object-cover\",\n                            autoPlay: true,\n                            loop: true,\n                            muted: true\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Vidi\\\\vidi\\\\src\\\\Components\\\\Pages\\\\Home\\\\Socialmedia.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index + videos.length, false, {\n                        fileName: \"F:\\\\Vidi\\\\vidi\\\\src\\\\Components\\\\Pages\\\\Home\\\\Socialmedia.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined))\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\Vidi\\\\vidi\\\\src\\\\Components\\\\Pages\\\\Home\\\\Socialmedia.jsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\Vidi\\\\vidi\\\\src\\\\Components\\\\Pages\\\\Home\\\\Socialmedia.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VerticalCarousel, \"8puyVO4ts1RhCfXUmci3vLI3Njw=\");\n_c = VerticalCarousel;\nfunction Socialmedia() {\n    const videos = [\n        \"/videos/vidivideo.mp4\",\n        \"/videos/vidivideo.mp4\",\n        \"/videos/vidivideo.mp4\",\n        \"/videos/vidivideo.mp4\",\n        \"/videos/vidivideo.mp4\",\n        \"/videos/vidivideo.mp4\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VerticalCarousel, {\n            videos: videos\n        }, void 0, false, {\n            fileName: \"F:\\\\Vidi\\\\vidi\\\\src\\\\Components\\\\Pages\\\\Home\\\\Socialmedia.jsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\Vidi\\\\vidi\\\\src\\\\Components\\\\Pages\\\\Home\\\\Socialmedia.jsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Socialmedia;\nvar _c, _c1;\n$RefreshReg$(_c, \"VerticalCarousel\");\n$RefreshReg$(_c1, \"Socialmedia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL1BhZ2VzL0hvbWUvU29jaWFsbWVkaWEuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMwQztBQUUxQyxNQUFNRSxtQkFBbUI7UUFBQyxFQUFFQyxNQUFNLEVBQUU7O0lBQ2xDLE1BQU1DLGVBQWVILDZDQUFNQSxDQUFDO0lBRTVCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1LLFlBQVlELGFBQWFFLE9BQU87UUFDdEMsSUFBSUMsUUFBUTtRQUNaLE1BQU1DLFFBQVEsR0FBRyxnQ0FBZ0M7UUFFakQsTUFBTUMsVUFBVTtZQUNkRixTQUFTQztZQUNULElBQUlFLEtBQUtDLEdBQUcsQ0FBQ0osU0FBU0YsVUFBVU8sWUFBWSxHQUFHLEdBQUc7Z0JBQ2hETCxRQUFRO2dCQUNSRixVQUFVUSxTQUFTLEdBQUc7WUFDeEI7WUFDQVIsVUFBVVEsU0FBUyxHQUFHTjtZQUN0Qk8sc0JBQXNCTDtRQUN4QjtRQUVBQTtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUNDQyxXQUFVO1lBQ1ZDLEtBQUtiO1lBQ0xjLE9BQU87Z0JBQUVDLFFBQVEsUUFBOEIsT0FBdEJoQixPQUFPaUIsTUFBTSxHQUFHLE9BQU07WUFBUzs7Z0JBRXZEakIsT0FBT2tCLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDbEIsOERBQUNSO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDTTs0QkFDQ0UsS0FBS0Y7NEJBQ0xOLFdBQVU7NEJBQ1ZTLFFBQVE7NEJBQ1JDLElBQUk7NEJBQ0pDLEtBQUs7Ozs7Ozt1QkFOZ0NKOzs7OztnQkFXMUNwQixPQUFPa0IsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUNsQiw4REFBQ1I7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNNOzRCQUNDRSxLQUFLRjs0QkFDTE4sV0FBVTs0QkFDVlMsUUFBUTs0QkFDUkMsSUFBSTs0QkFDSkMsS0FBSzs7Ozs7O3VCQU5nQ0osUUFBUXBCLE9BQU9pQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O0FBYXhFO0dBdERNbEI7S0FBQUE7QUF3RFMsU0FBUzBCO0lBQ3RCLE1BQU16QixTQUFTO1FBQ2I7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFFRCxxQkFDRSw4REFBQ1k7a0JBQ0MsNEVBQUNiO1lBQWlCQyxRQUFRQTs7Ozs7Ozs7Ozs7QUFHaEM7TUFmd0J5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9QYWdlcy9Ib21lL1NvY2lhbG1lZGlhLmpzeD8yZDY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFZlcnRpY2FsQ2Fyb3VzZWwgPSAoeyB2aWRlb3MgfSkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNvbnRhaW5lclJlZi5jdXJyZW50O1xyXG4gICAgbGV0IHN0YXJ0ID0gMDtcclxuICAgIGNvbnN0IHNwZWVkID0gMjsgLy8gQWRqdXN0IHNwZWVkIG9mIG1vdmVtZW50IGhlcmVcclxuXHJcbiAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xyXG4gICAgICBzdGFydCAtPSBzcGVlZDtcclxuICAgICAgaWYgKE1hdGguYWJzKHN0YXJ0KSA+IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgLyAyKSB7XHJcbiAgICAgICAgc3RhcnQgPSAwO1xyXG4gICAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBzdGFydDtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhbmltYXRlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCJcclxuICAgICAgICByZWY9e2NvbnRhaW5lclJlZn1cclxuICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IGBjYWxjKCR7dmlkZW9zLmxlbmd0aCAqIDU2LjI1fXZ3ICogMilgIH19IC8vIER5bmFtaWNhbGx5IGNhbGN1bGF0ZSBoZWlnaHRcclxuICAgICAgPlxyXG4gICAgICAgIHt2aWRlb3MubWFwKCh2aWRlbywgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzU2LjI1dnddXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgICAgIHNyYz17dmlkZW99XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIlxyXG4gICAgICAgICAgICAgIGF1dG9QbGF5XHJcbiAgICAgICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgICB7LyogRHVwbGljYXRlIHZpZGVvcyBmb3Igc2VhbWxlc3Mgc2Nyb2xsaW5nICovfVxyXG4gICAgICAgIHt2aWRlb3MubWFwKCh2aWRlbywgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzU2LjI1dnddXCIga2V5PXtpbmRleCArIHZpZGVvcy5sZW5ndGh9PlxyXG4gICAgICAgICAgICA8dmlkZW9cclxuICAgICAgICAgICAgICBzcmM9e3ZpZGVvfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgICAgICAgIGxvb3BcclxuICAgICAgICAgICAgICBtdXRlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvY2lhbG1lZGlhKCkge1xyXG4gIGNvbnN0IHZpZGVvcyA9IFtcclxuICAgIFwiL3ZpZGVvcy92aWRpdmlkZW8ubXA0XCIsXHJcbiAgICBcIi92aWRlb3MvdmlkaXZpZGVvLm1wNFwiLFxyXG4gICAgXCIvdmlkZW9zL3ZpZGl2aWRlby5tcDRcIixcclxuICAgIFwiL3ZpZGVvcy92aWRpdmlkZW8ubXA0XCIsXHJcbiAgICBcIi92aWRlb3MvdmlkaXZpZGVvLm1wNFwiLFxyXG4gICAgXCIvdmlkZW9zL3ZpZGl2aWRlby5tcDRcIixcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFZlcnRpY2FsQ2Fyb3VzZWwgdmlkZW9zPXt2aWRlb3N9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJWZXJ0aWNhbENhcm91c2VsIiwidmlkZW9zIiwiY29udGFpbmVyUmVmIiwiY29udGFpbmVyIiwiY3VycmVudCIsInN0YXJ0Iiwic3BlZWQiLCJhbmltYXRlIiwiTWF0aCIsImFicyIsInNjcm9sbEhlaWdodCIsInNjcm9sbFRvcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsInN0eWxlIiwiaGVpZ2h0IiwibGVuZ3RoIiwibWFwIiwidmlkZW8iLCJpbmRleCIsInNyYyIsImF1dG9QbGF5IiwibG9vcCIsIm11dGVkIiwiU29jaWFsbWVkaWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/Pages/Home/Socialmedia.jsx\n"));

/***/ })

});