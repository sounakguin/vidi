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

/***/ "(app-pages-browser)/./src/Components/Pages/Home/Latestblog.jsx":
/*!**************************************************!*\
  !*** ./src/Components/Pages/Home/Latestblog.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Latestblog; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"(app-pages-browser)/./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"(app-pages-browser)/./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"(app-pages-browser)/./node_modules/slick-carousel/slick/slick-theme.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n// Custom Previous Arrow Component\nfunction SamplePrevArrow(props) {\n    const { className, style, onClick } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(className, \" custom-arrow prev-arrow\"),\n        style: {\n            ...style,\n            display: \"block\",\n            left: \"-30px\",\n            top: \"40%\",\n            transform: \"translateY(-50%)\",\n            zIndex: 10,\n            width: \"30px\",\n            height: \"30px\",\n            borderRadius: \"50%\",\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            background: \"none\",\n            border: \"none\"\n        },\n        onClick: onClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/images/Back.png\",\n            alt: \"Previous\",\n            style: {\n                maxWidth: \"100%\",\n                maxHeight: \"100%\",\n                objectFit: \"contain\"\n            }\n        }, void 0, false, {\n            fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Home\\\\Latestblog.jsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Home\\\\Latestblog.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = SamplePrevArrow;\n// Custom Next Arrow Component\nfunction SampleNextArrow(props) {\n    const { className, style, onClick } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(className, \" custom-arrow next-arrow\"),\n        style: {\n            ...style,\n            display: \"block\",\n            right: \"-30px\",\n            top: \"40%\",\n            transform: \"translateY(-50%)\",\n            zIndex: 10,\n            width: \"30px\",\n            height: \"30px\",\n            borderRadius: \"50%\",\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            background: \"none\",\n            border: \"none\"\n        },\n        onClick: onClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/images/Next.png\",\n            alt: \"Next\",\n            style: {\n                maxWidth: \"100%\",\n                maxHeight: \"100%\",\n                objectFit: \"contain\"\n            }\n        }, void 0, false, {\n            fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Home\\\\Latestblog.jsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Home\\\\Latestblog.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_c1 = SampleNextArrow;\nfunction Latestblog() {\n    const settings = {\n        dots: false,\n        arrows: true,\n        infinite: false,\n        speed: 500,\n        slidesToShow: 5,\n        slidesToScroll: 1,\n        initialSlide: 1,\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SamplePrevArrow, {}, void 0, false, {\n            fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Home\\\\Latestblog.jsx\",\n            lineNumber: 90,\n            columnNumber: 16\n        }, this),\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SampleNextArrow, {}, void 0, false, {\n            fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Home\\\\Latestblog.jsx\",\n            lineNumber: 91,\n            columnNumber: 16\n        }, this),\n        responsive: [\n            {\n                breakpoint: 1024,\n                settings: {\n                    slidesToShow: 3,\n                    slidesToScroll: 3,\n                    infinite: true,\n                    dots: true\n                }\n            },\n            {\n                breakpoint: 600,\n                settings: {\n                    slidesToShow: 2,\n                    slidesToScroll: 2,\n                    initialSlide: 2\n                }\n            },\n            {\n                breakpoint: 480,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1\n                }\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-6 w-11/12 mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[] pl-4 pt-16 pb-8\",\n                children: \"Latest Blogs \"\n            }, void 0, false, {\n                fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Home\\\\Latestblog.jsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                ...settings,\n                children: Blog.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: item.Image,\n                                alt: \"Blog Image \".concat(index),\n                                className: \"mb-4 h-[260] w-[292] object-cover\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Home\\\\Latestblog.jsx\",\n                                lineNumber: 126,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg font-semibold text-left\",\n                                        children: item.Coin\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Home\\\\Latestblog.jsx\",\n                                        lineNumber: 132,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-left mt-2\",\n                                        children: item.Description\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Home\\\\Latestblog.jsx\",\n                                        lineNumber: 133,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Home\\\\Latestblog.jsx\",\n                                lineNumber: 131,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs text-left pt-3 text-gray-500\",\n                                children: item.Datedata\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Home\\\\Latestblog.jsx\",\n                                lineNumber: 135,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Home\\\\Latestblog.jsx\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Home\\\\Latestblog.jsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Home\\\\Latestblog.jsx\",\n        lineNumber: 121,\n        columnNumber: 5\n    }, this);\n}\n_c2 = Latestblog;\n// Blog Data\nconst Blog = [\n    {\n        Image: \"/images/cl1.png\",\n        Coin: \"Earn Rewards\",\n        Description: \"Lorem Ipsum has been the industry's standard dummy\",\n        Datedata: \"August 24, 2024\"\n    },\n    {\n        Image: \"/images/cl1.png\",\n        Coin: \"Earn Rewards\",\n        Description: \"Lorem Ipsum has been the industry's standard dummy\",\n        Datedata: \"August 24, 2024\"\n    },\n    {\n        Image: \"/images/cl1.png\",\n        Coin: \"Earn Rewards\",\n        Description: \"Lorem Ipsum has been the industry's standard dummy\",\n        Datedata: \"August 24, 2024\"\n    },\n    {\n        Image: \"/images/cl1.png\",\n        Coin: \"Earn Rewards\",\n        Description: \"Lorem Ipsum has been the industry's standard dummy\",\n        Datedata: \"August 24, 2024\"\n    },\n    {\n        Image: \"/images/cl1.png\",\n        Coin: \"Earn Rewards\",\n        Description: \"Lorem Ipsum has been the industry's standard dummy\",\n        Datedata: \"August 24, 2024\"\n    },\n    {\n        Image: \"/images/cl1.png\",\n        Coin: \"Earn Rewards\",\n        Description: \"Lorem Ipsum has been the industry's standard dummy\",\n        Datedata: \"August 24, 2024\"\n    },\n    {\n        Image: \"/images/cl1.png\",\n        Coin: \"Earn Rewards\",\n        Description: \"Lorem Ipsum has been the industry's standard dummy\",\n        Datedata: \"August 24, 2024\"\n    },\n    {\n        Image: \"/images/cl1.png\",\n        Coin: \"Earn Rewards\",\n        Description: \"Lorem Ipsum has been the industry's standard dummy\",\n        Datedata: \"August 24, 2024\"\n    }\n];\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"SamplePrevArrow\");\n$RefreshReg$(_c1, \"SampleNextArrow\");\n$RefreshReg$(_c2, \"Latestblog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL1BhZ2VzL0hvbWUvTGF0ZXN0YmxvZy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDMEI7QUFDTztBQUNPO0FBQ007QUFFOUMsa0NBQWtDO0FBQ2xDLFNBQVNFLGdCQUFnQkMsS0FBSztJQUM1QixNQUFNLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUUsR0FBR0g7SUFDdEMscUJBQ0UsOERBQUNJO1FBQ0NILFdBQVcsR0FBYSxPQUFWQSxXQUFVO1FBQ3hCQyxPQUFPO1lBQ0wsR0FBR0EsS0FBSztZQUNSRyxTQUFTO1lBQ1RDLE1BQU07WUFDTkMsS0FBSztZQUNMQyxXQUFXO1lBQ1hDLFFBQVE7WUFDUkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLGNBQWM7WUFDZFAsU0FBUztZQUNUUSxZQUFZO1lBQ1pDLGdCQUFnQjtZQUNoQkMsWUFBWTtZQUNaQyxRQUFRO1FBQ1Y7UUFDQWIsU0FBU0E7a0JBRVQsNEVBQUNjO1lBQ0NDLEtBQUk7WUFDSkMsS0FBSTtZQUNKakIsT0FBTztnQkFDTGtCLFVBQVU7Z0JBQ1ZDLFdBQVc7Z0JBQ1hDLFdBQVc7WUFDYjs7Ozs7Ozs7Ozs7QUFJUjtLQWxDU3ZCO0FBb0NULDhCQUE4QjtBQUM5QixTQUFTd0IsZ0JBQWdCdkIsS0FBSztJQUM1QixNQUFNLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUUsR0FBR0g7SUFDdEMscUJBQ0UsOERBQUNJO1FBQ0NILFdBQVcsR0FBYSxPQUFWQSxXQUFVO1FBQ3hCQyxPQUFPO1lBQ0wsR0FBR0EsS0FBSztZQUNSRyxTQUFTO1lBQ1RtQixPQUFPO1lBQ1BqQixLQUFLO1lBQ0xDLFdBQVc7WUFDWEMsUUFBUTtZQUNSQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsY0FBYztZQUNkUCxTQUFTO1lBQ1RRLFlBQVk7WUFDWkMsZ0JBQWdCO1lBQ2hCQyxZQUFZO1lBQ1pDLFFBQVE7UUFDVjtRQUNBYixTQUFTQTtrQkFFVCw0RUFBQ2M7WUFDQ0MsS0FBSTtZQUNKQyxLQUFJO1lBQ0pqQixPQUFPO2dCQUNMa0IsVUFBVTtnQkFDVkMsV0FBVztnQkFDWEMsV0FBVztZQUNiOzs7Ozs7Ozs7OztBQUlSO01BbENTQztBQW9DTSxTQUFTRTtJQUN0QixNQUFNQyxXQUFXO1FBQ2ZDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsY0FBYztRQUNkQyxnQkFBZ0I7UUFDaEJDLGNBQWM7UUFDZEMseUJBQVcsOERBQUNuQzs7Ozs7UUFDWm9DLHlCQUFXLDhEQUFDWjs7Ozs7UUFDWmEsWUFBWTtZQUNWO2dCQUNFQyxZQUFZO2dCQUNaWCxVQUFVO29CQUNSSyxjQUFjO29CQUNkQyxnQkFBZ0I7b0JBQ2hCSCxVQUFVO29CQUNWRixNQUFNO2dCQUNSO1lBQ0Y7WUFDQTtnQkFDRVUsWUFBWTtnQkFDWlgsVUFBVTtvQkFDUkssY0FBYztvQkFDZEMsZ0JBQWdCO29CQUNoQkMsY0FBYztnQkFDaEI7WUFDRjtZQUNBO2dCQUNFSSxZQUFZO2dCQUNaWCxVQUFVO29CQUNSSyxjQUFjO29CQUNkQyxnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7U0FDRDtJQUNIO0lBRUEscUJBQ0UsOERBQUM1QjtRQUFJSCxXQUFVOzswQkFDYiw4REFBQ3FDO2dCQUFFckMsV0FBVTswQkFBMEI7Ozs7OzswQkFDdkMsOERBQUNILG1EQUFNQTtnQkFBRSxHQUFHNEIsUUFBUTswQkFDakJhLEtBQUtDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDZiw4REFBQ3RDO3dCQUFnQkgsV0FBVTs7MENBQ3pCLDhEQUFDZ0I7Z0NBQ0NDLEtBQUt1QixLQUFLRSxLQUFLO2dDQUNmeEIsS0FBSyxjQUFvQixPQUFOdUI7Z0NBQ25CekMsV0FBVTs7Ozs7OzBDQUVaLDhEQUFDRztnQ0FBSUgsV0FBVTs7a0RBQ2IsOERBQUNxQzt3Q0FBRXJDLFdBQVU7a0RBQW1Dd0MsS0FBS0csSUFBSTs7Ozs7O2tEQUN6RCw4REFBQ047d0NBQUVyQyxXQUFVO2tEQUEwQndDLEtBQUtJLFdBQVc7Ozs7Ozs7Ozs7OzswQ0FFekQsOERBQUNQO2dDQUFFckMsV0FBVTswQ0FDVndDLEtBQUtLLFFBQVE7Ozs7Ozs7dUJBWFJKOzs7Ozs7Ozs7Ozs7Ozs7O0FBa0JwQjtNQTlEd0JqQjtBQWdFeEIsWUFBWTtBQUNaLE1BQU1jLE9BQU87SUFDWDtRQUNFSSxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxVQUFVO0lBQ1o7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxVQUFVO0lBQ1o7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxVQUFVO0lBQ1o7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxVQUFVO0lBQ1o7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxVQUFVO0lBQ1o7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxVQUFVO0lBQ1o7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxVQUFVO0lBQ1o7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxVQUFVO0lBQ1o7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9QYWdlcy9Ib21lL0xhdGVzdGJsb2cuanN4P2I0NTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xyXG5cclxuLy8gQ3VzdG9tIFByZXZpb3VzIEFycm93IENvbXBvbmVudFxyXG5mdW5jdGlvbiBTYW1wbGVQcmV2QXJyb3cocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgc3R5bGUsIG9uQ2xpY2sgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBjdXN0b20tYXJyb3cgcHJldi1hcnJvd2B9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICAgIGxlZnQ6IFwiLTMwcHhcIixcclxuICAgICAgICB0b3A6IFwiNDAlXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTUwJSlcIixcclxuICAgICAgICB6SW5kZXg6IDEwLFxyXG4gICAgICAgIHdpZHRoOiBcIjMwcHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwibm9uZVwiLFxyXG4gICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgIH19XHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCIvaW1hZ2VzL0JhY2sucG5nXCJcclxuICAgICAgICBhbHQ9XCJQcmV2aW91c1wiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIG1heEhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBvYmplY3RGaXQ6IFwiY29udGFpblwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG4vLyBDdXN0b20gTmV4dCBBcnJvdyBDb21wb25lbnRcclxuZnVuY3Rpb24gU2FtcGxlTmV4dEFycm93KHByb3BzKSB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIHN0eWxlLCBvbkNsaWNrIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gY3VzdG9tLWFycm93IG5leHQtYXJyb3dgfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICByaWdodDogXCItMzBweFwiLFxyXG4gICAgICAgIHRvcDogXCI0MCVcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKVwiLFxyXG4gICAgICAgIHpJbmRleDogMTAsXHJcbiAgICAgICAgd2lkdGg6IFwiMzBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIzMHB4XCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZDogXCJub25lXCIsXHJcbiAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgfX1cclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgID5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz1cIi9pbWFnZXMvTmV4dC5wbmdcIlxyXG4gICAgICAgIGFsdD1cIk5leHRcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBtYXhIZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF0ZXN0YmxvZygpIHtcclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgaW5pdGlhbFNsaWRlOiAxLFxyXG4gICAgcHJldkFycm93OiA8U2FtcGxlUHJldkFycm93IC8+LCBcclxuICAgIG5leHRBcnJvdzogPFNhbXBsZU5leHRBcnJvdyAvPixcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgaW5pdGlhbFNsaWRlOiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiB3LTExLzEyIG14LWF1dG9cIj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bXSBwbC00IHB0LTE2IHBiLThcIj5MYXRlc3QgQmxvZ3MgPC9wPlxyXG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAge0Jsb2cubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtNFwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtpdGVtLkltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD17YEJsb2cgSW1hZ2UgJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTQgaC1bMjYwXSB3LVsyOTJdIG9iamVjdC1jb3ZlclwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtbGVmdFwiPntpdGVtLkNvaW59PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1sZWZ0IG10LTJcIj57aXRlbS5EZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbGVmdCBwdC0zIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICB7aXRlbS5EYXRlZGF0YX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvU2xpZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gQmxvZyBEYXRhXHJcbmNvbnN0IEJsb2cgPSBbXHJcbiAge1xyXG4gICAgSW1hZ2U6IFwiL2ltYWdlcy9jbDEucG5nXCIsXHJcbiAgICBDb2luOiBcIkVhcm4gUmV3YXJkc1wiLFxyXG4gICAgRGVzY3JpcHRpb246IFwiTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXlcIixcclxuICAgIERhdGVkYXRhOiBcIkF1Z3VzdCAyNCwgMjAyNFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSW1hZ2U6IFwiL2ltYWdlcy9jbDEucG5nXCIsXHJcbiAgICBDb2luOiBcIkVhcm4gUmV3YXJkc1wiLFxyXG4gICAgRGVzY3JpcHRpb246IFwiTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXlcIixcclxuICAgIERhdGVkYXRhOiBcIkF1Z3VzdCAyNCwgMjAyNFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSW1hZ2U6IFwiL2ltYWdlcy9jbDEucG5nXCIsXHJcbiAgICBDb2luOiBcIkVhcm4gUmV3YXJkc1wiLFxyXG4gICAgRGVzY3JpcHRpb246IFwiTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXlcIixcclxuICAgIERhdGVkYXRhOiBcIkF1Z3VzdCAyNCwgMjAyNFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSW1hZ2U6IFwiL2ltYWdlcy9jbDEucG5nXCIsXHJcbiAgICBDb2luOiBcIkVhcm4gUmV3YXJkc1wiLFxyXG4gICAgRGVzY3JpcHRpb246IFwiTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXlcIixcclxuICAgIERhdGVkYXRhOiBcIkF1Z3VzdCAyNCwgMjAyNFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSW1hZ2U6IFwiL2ltYWdlcy9jbDEucG5nXCIsXHJcbiAgICBDb2luOiBcIkVhcm4gUmV3YXJkc1wiLFxyXG4gICAgRGVzY3JpcHRpb246IFwiTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXlcIixcclxuICAgIERhdGVkYXRhOiBcIkF1Z3VzdCAyNCwgMjAyNFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSW1hZ2U6IFwiL2ltYWdlcy9jbDEucG5nXCIsXHJcbiAgICBDb2luOiBcIkVhcm4gUmV3YXJkc1wiLFxyXG4gICAgRGVzY3JpcHRpb246IFwiTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXlcIixcclxuICAgIERhdGVkYXRhOiBcIkF1Z3VzdCAyNCwgMjAyNFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSW1hZ2U6IFwiL2ltYWdlcy9jbDEucG5nXCIsXHJcbiAgICBDb2luOiBcIkVhcm4gUmV3YXJkc1wiLFxyXG4gICAgRGVzY3JpcHRpb246IFwiTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXlcIixcclxuICAgIERhdGVkYXRhOiBcIkF1Z3VzdCAyNCwgMjAyNFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSW1hZ2U6IFwiL2ltYWdlcy9jbDEucG5nXCIsXHJcbiAgICBDb2luOiBcIkVhcm4gUmV3YXJkc1wiLFxyXG4gICAgRGVzY3JpcHRpb246IFwiTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXlcIixcclxuICAgIERhdGVkYXRhOiBcIkF1Z3VzdCAyNCwgMjAyNFwiLFxyXG4gIH0sXHJcbl07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNsaWRlciIsIlNhbXBsZVByZXZBcnJvdyIsInByb3BzIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJvbkNsaWNrIiwiZGl2IiwiZGlzcGxheSIsImxlZnQiLCJ0b3AiLCJ0cmFuc2Zvcm0iLCJ6SW5kZXgiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJpbWciLCJzcmMiLCJhbHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIm9iamVjdEZpdCIsIlNhbXBsZU5leHRBcnJvdyIsInJpZ2h0IiwiTGF0ZXN0YmxvZyIsInNldHRpbmdzIiwiZG90cyIsImFycm93cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImluaXRpYWxTbGlkZSIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwicCIsIkJsb2ciLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJJbWFnZSIsIkNvaW4iLCJEZXNjcmlwdGlvbiIsIkRhdGVkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/Pages/Home/Latestblog.jsx\n"));

/***/ })

});