"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/about/page",{

/***/ "(app-pages-browser)/./src/Components/Pages/Aboutus/Slick.jsx":
/*!************************************************!*\
  !*** ./src/Components/Pages/Aboutus/Slick.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Slick; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"(app-pages-browser)/./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"(app-pages-browser)/./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"(app-pages-browser)/./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n// Custom Previous Arrow Component\nfunction SamplePrevArrow(props) {\n    const { className, style, onClick } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(className, \" custom-arrow prev-arrow\"),\n        style: {\n            ...style,\n            display: \"block\",\n            left: \"-30px\",\n            top: \"40%\",\n            transform: \"translateY(-50%)\",\n            zIndex: 10,\n            width: \"30px\",\n            height: \"30px\",\n            borderRadius: \"50%\",\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            background: \"none\",\n            border: \"none\"\n        },\n        onClick: onClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            src: \"/images/Back.png\",\n            alt: \"Previous\",\n            width: 30,\n            height: 30,\n            objectFit: \"contain\" // Ensure the image scales correctly\n            ,\n            layout: \"intrinsic\" // Ensure the image respects the width and height\n        }, void 0, false, {\n            fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Aboutus\\\\Slick.jsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Aboutus\\\\Slick.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = SamplePrevArrow;\n// Custom Next Arrow Component\nfunction SampleNextArrow(props) {\n    const { className, style, onClick } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(className, \" custom-arrow next-arrow\"),\n        style: {\n            ...style,\n            display: \"block\",\n            right: \"-30px\",\n            top: \"40%\",\n            transform: \"translateY(-50%)\",\n            zIndex: 10,\n            width: \"30px\",\n            height: \"30px\",\n            borderRadius: \"50%\",\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            background: \"none\",\n            border: \"none\"\n        },\n        onClick: onClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            src: \"/images/Next.png\",\n            alt: \"Previous\",\n            width: 30,\n            height: 30,\n            objectFit: \"contain\" // Ensure the image scales correctly\n            ,\n            layout: \"intrinsic\" // Ensure the image respects the width and height\n        }, void 0, false, {\n            fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Aboutus\\\\Slick.jsx\",\n            lineNumber: 68,\n            columnNumber: 6\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Aboutus\\\\Slick.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_c1 = SampleNextArrow;\n// Main Slick Slider Component\nfunction Slick() {\n    const settings = {\n        dots: false,\n        arrows: true,\n        infinite: false,\n        speed: 500,\n        slidesToShow: 5,\n        slidesToScroll: 1,\n        initialSlide: 1,\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SamplePrevArrow, {}, void 0, false, {\n            fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Aboutus\\\\Slick.jsx\",\n            lineNumber: 90,\n            columnNumber: 16\n        }, this),\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SampleNextArrow, {}, void 0, false, {\n            fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Aboutus\\\\Slick.jsx\",\n            lineNumber: 91,\n            columnNumber: 16\n        }, this),\n        responsive: [\n            {\n                breakpoint: 1024,\n                settings: {\n                    slidesToShow: 3,\n                    slidesToScroll: 3,\n                    infinite: true,\n                    dots: true\n                }\n            },\n            {\n                breakpoint: 600,\n                settings: {\n                    slidesToShow: 2,\n                    slidesToScroll: 2,\n                    initialSlide: 2\n                }\n            },\n            {\n                breakpoint: 480,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1\n                }\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-6 w-11/12 mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-2xl pl-4 pt-16 pb-8\",\n                children: \"Our Latest Blogs \"\n            }, void 0, false, {\n                fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Aboutus\\\\Slick.jsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                ...settings,\n                children: Blog.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: item.Image,\n                                alt: \"Blog Image \".concat(index),\n                                className: \"mb-4 h-[260] w-[292] object-cover\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Aboutus\\\\Slick.jsx\",\n                                lineNumber: 126,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg font-semibold text-left\",\n                                        children: item.Coin\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Aboutus\\\\Slick.jsx\",\n                                        lineNumber: 132,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-left mt-2\",\n                                        children: item.Description\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Aboutus\\\\Slick.jsx\",\n                                        lineNumber: 133,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Aboutus\\\\Slick.jsx\",\n                                lineNumber: 131,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs text-left pt-3 text-gray-500\",\n                                children: item.Datedata\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Aboutus\\\\Slick.jsx\",\n                                lineNumber: 135,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Aboutus\\\\Slick.jsx\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Aboutus\\\\Slick.jsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Vidipurifying\\\\src\\\\Components\\\\Pages\\\\Aboutus\\\\Slick.jsx\",\n        lineNumber: 121,\n        columnNumber: 5\n    }, this);\n}\n_c2 = Slick;\n// Blog Data\nconst Blog = [\n    {\n        Image: \"/images/cl1.png\",\n        Coin: \"Earn Rewards\",\n        Description: \"Lorem Ipsum has been the industry's standard dummy\",\n        Datedata: \"August 24, 2024\"\n    },\n    {\n        Image: \"/images/cl1.png\",\n        Coin: \"Earn Rewards\",\n        Description: \"Lorem Ipsum has been the industry's standard dummy\",\n        Datedata: \"August 24, 2024\"\n    },\n    {\n        Image: \"/images/cl1.png\",\n        Coin: \"Earn Rewards\",\n        Description: \"Lorem Ipsum has been the industry's standard dummy\",\n        Datedata: \"August 24, 2024\"\n    },\n    {\n        Image: \"/images/cl1.png\",\n        Coin: \"Earn Rewards\",\n        Description: \"Lorem Ipsum has been the industry's standard dummy\",\n        Datedata: \"August 24, 2024\"\n    },\n    {\n        Image: \"/images/cl1.png\",\n        Coin: \"Earn Rewards\",\n        Description: \"Lorem Ipsum has been the industry's standard dummy\",\n        Datedata: \"August 24, 2024\"\n    },\n    {\n        Image: \"/images/cl1.png\",\n        Coin: \"Earn Rewards\",\n        Description: \"Lorem Ipsum has been the industry's standard dummy\",\n        Datedata: \"August 24, 2024\"\n    },\n    {\n        Image: \"/images/cl1.png\",\n        Coin: \"Earn Rewards\",\n        Description: \"Lorem Ipsum has been the industry's standard dummy\",\n        Datedata: \"August 24, 2024\"\n    },\n    {\n        Image: \"/images/cl1.png\",\n        Coin: \"Earn Rewards\",\n        Description: \"Lorem Ipsum has been the industry's standard dummy\",\n        Datedata: \"August 24, 2024\"\n    }\n];\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"SamplePrevArrow\");\n$RefreshReg$(_c1, \"SampleNextArrow\");\n$RefreshReg$(_c2, \"Slick\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL1BhZ2VzL0Fib3V0dXMvU2xpY2suanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUMwQjtBQUNPO0FBQ087QUFDTTtBQUNmO0FBRS9CLGtDQUFrQztBQUNsQyxTQUFTRyxnQkFBZ0JDLEtBQUs7SUFDNUIsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFLEdBQUdIO0lBQ3RDLHFCQUNFLDhEQUFDSTtRQUNDSCxXQUFXLEdBQWEsT0FBVkEsV0FBVTtRQUN4QkMsT0FBTztZQUNMLEdBQUdBLEtBQUs7WUFDUkcsU0FBUztZQUNUQyxNQUFNO1lBQ05DLEtBQUs7WUFDTEMsV0FBVztZQUNYQyxRQUFRO1lBQ1JDLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxjQUFjO1lBQ2RQLFNBQVM7WUFDVFEsWUFBWTtZQUNaQyxnQkFBZ0I7WUFDaEJDLFlBQVk7WUFDWkMsUUFBUTtRQUNWO1FBQ0FiLFNBQVNBO2tCQUVULDRFQUFDTCxrREFBS0E7WUFDSm1CLEtBQUk7WUFDSkMsS0FBSTtZQUNKUixPQUFPO1lBQ1BDLFFBQVE7WUFDUlEsV0FBVSxVQUFVLG9DQUFvQzs7WUFDeERDLFFBQU8sWUFBWSxpREFBaUQ7Ozs7Ozs7Ozs7O0FBSTVFO0tBakNTckI7QUFtQ1QsOEJBQThCO0FBQzlCLFNBQVNzQixnQkFBZ0JyQixLQUFLO0lBQzVCLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRSxHQUFHSDtJQUN0QyxxQkFDRSw4REFBQ0k7UUFDQ0gsV0FBVyxHQUFhLE9BQVZBLFdBQVU7UUFDeEJDLE9BQU87WUFDTCxHQUFHQSxLQUFLO1lBQ1JHLFNBQVM7WUFDVGlCLE9BQU87WUFDUGYsS0FBSztZQUNMQyxXQUFXO1lBQ1hDLFFBQVE7WUFDUkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLGNBQWM7WUFDZFAsU0FBUztZQUNUUSxZQUFZO1lBQ1pDLGdCQUFnQjtZQUNoQkMsWUFBWTtZQUNaQyxRQUFRO1FBQ1Y7UUFDQWIsU0FBU0E7a0JBRVYsNEVBQUNMLGtEQUFLQTtZQUNUbUIsS0FBSTtZQUNKQyxLQUFJO1lBQ0pSLE9BQU87WUFDUEMsUUFBUTtZQUNSUSxXQUFVLFVBQVUsb0NBQW9DOztZQUN4REMsUUFBTyxZQUFZLGlEQUFpRDs7Ozs7Ozs7Ozs7QUFLdEU7TUFsQ1NDO0FBbUNULDhCQUE4QjtBQUNmLFNBQVNFO0lBQ3RCLE1BQU1DLFdBQVc7UUFDZkMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxjQUFjO1FBQ2RDLGdCQUFnQjtRQUNoQkMsY0FBYztRQUNkQyx5QkFBVyw4REFBQ2pDOzs7OztRQUNaa0MseUJBQVcsOERBQUNaOzs7OztRQUNaYSxZQUFZO1lBQ1Y7Z0JBQ0VDLFlBQVk7Z0JBQ1pYLFVBQVU7b0JBQ1JLLGNBQWM7b0JBQ2RDLGdCQUFnQjtvQkFDaEJILFVBQVU7b0JBQ1ZGLE1BQU07Z0JBQ1I7WUFDRjtZQUNBO2dCQUNFVSxZQUFZO2dCQUNaWCxVQUFVO29CQUNSSyxjQUFjO29CQUNkQyxnQkFBZ0I7b0JBQ2hCQyxjQUFjO2dCQUNoQjtZQUNGO1lBQ0E7Z0JBQ0VJLFlBQVk7Z0JBQ1pYLFVBQVU7b0JBQ1JLLGNBQWM7b0JBQ2RDLGdCQUFnQjtnQkFDbEI7WUFDRjtTQUNEO0lBQ0g7SUFFQSxxQkFDRSw4REFBQzFCO1FBQUlILFdBQVU7OzBCQUNiLDhEQUFDbUM7Z0JBQUVuQyxXQUFVOzBCQUEyQjs7Ozs7OzBCQUN4Qyw4REFBQ0osbURBQU1BO2dCQUFFLEdBQUcyQixRQUFROzBCQUNqQmEsS0FBS0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNmLDhEQUFDcEM7d0JBQWdCSCxXQUFVOzswQ0FDekIsOERBQUN3QztnQ0FDQ3hCLEtBQUtzQixLQUFLekMsS0FBSztnQ0FDZm9CLEtBQUssY0FBb0IsT0FBTnNCO2dDQUNuQnZDLFdBQVU7Ozs7OzswQ0FFWiw4REFBQ0c7Z0NBQUlILFdBQVU7O2tEQUNiLDhEQUFDbUM7d0NBQUVuQyxXQUFVO2tEQUFtQ3NDLEtBQUtHLElBQUk7Ozs7OztrREFDekQsOERBQUNOO3dDQUFFbkMsV0FBVTtrREFBMEJzQyxLQUFLSSxXQUFXOzs7Ozs7Ozs7Ozs7MENBRXpELDhEQUFDUDtnQ0FBRW5DLFdBQVU7MENBQ1ZzQyxLQUFLSyxRQUFROzs7Ozs7O3VCQVhSSjs7Ozs7Ozs7Ozs7Ozs7OztBQWtCcEI7TUE5RHdCakI7QUFnRXhCLFlBQVk7QUFDWixNQUFNYyxPQUFPO0lBQ1g7UUFDRXZDLE9BQU87UUFDUDRDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxVQUFVO0lBQ1o7SUFDQTtRQUNFOUMsT0FBTztRQUNQNEMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLFVBQVU7SUFDWjtJQUNBO1FBQ0U5QyxPQUFPO1FBQ1A0QyxNQUFNO1FBQ05DLGFBQWE7UUFDYkMsVUFBVTtJQUNaO0lBQ0E7UUFDRTlDLE9BQU87UUFDUDRDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxVQUFVO0lBQ1o7SUFDQTtRQUNFOUMsT0FBTztRQUNQNEMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLFVBQVU7SUFDWjtJQUNBO1FBQ0U5QyxPQUFPO1FBQ1A0QyxNQUFNO1FBQ05DLGFBQWE7UUFDYkMsVUFBVTtJQUNaO0lBQ0E7UUFDRTlDLE9BQU87UUFDUDRDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxVQUFVO0lBQ1o7SUFDQTtRQUNFOUMsT0FBTztRQUNQNEMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLFVBQVU7SUFDWjtDQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL1BhZ2VzL0Fib3V0dXMvU2xpY2suanN4P2NjNWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbi8vIEN1c3RvbSBQcmV2aW91cyBBcnJvdyBDb21wb25lbnRcclxuZnVuY3Rpb24gU2FtcGxlUHJldkFycm93KHByb3BzKSB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIHN0eWxlLCBvbkNsaWNrIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gY3VzdG9tLWFycm93IHByZXYtYXJyb3dgfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICBsZWZ0OiBcIi0zMHB4XCIsXHJcbiAgICAgICAgdG9wOiBcIjQwJVwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC01MCUpXCIsXHJcbiAgICAgICAgekluZGV4OiAxMCxcclxuICAgICAgICB3aWR0aDogXCIzMHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcIm5vbmVcIixcclxuICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICB9fVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgPlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBzcmM9XCIvaW1hZ2VzL0JhY2sucG5nXCJcclxuICAgICAgICBhbHQ9XCJQcmV2aW91c1wiXHJcbiAgICAgICAgd2lkdGg9ezMwfSAvLyBTZXQgdGhlIHdpZHRoXHJcbiAgICAgICAgaGVpZ2h0PXszMH0gLy8gU2V0IHRoZSBoZWlnaHRcclxuICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCIgLy8gRW5zdXJlIHRoZSBpbWFnZSBzY2FsZXMgY29ycmVjdGx5XHJcbiAgICAgICAgbGF5b3V0PVwiaW50cmluc2ljXCIgLy8gRW5zdXJlIHRoZSBpbWFnZSByZXNwZWN0cyB0aGUgd2lkdGggYW5kIGhlaWdodFxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gQ3VzdG9tIE5leHQgQXJyb3cgQ29tcG9uZW50XHJcbmZ1bmN0aW9uIFNhbXBsZU5leHRBcnJvdyhwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSwgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IGN1c3RvbS1hcnJvdyBuZXh0LWFycm93YH1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgcmlnaHQ6IFwiLTMwcHhcIixcclxuICAgICAgICB0b3A6IFwiNDAlXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTUwJSlcIixcclxuICAgICAgICB6SW5kZXg6IDEwLFxyXG4gICAgICAgIHdpZHRoOiBcIjMwcHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwibm9uZVwiLFxyXG4gICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgIH19XHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgPEltYWdlXHJcbiAgc3JjPVwiL2ltYWdlcy9OZXh0LnBuZ1wiXHJcbiAgYWx0PVwiUHJldmlvdXNcIlxyXG4gIHdpZHRoPXszMH0gLy8gU2V0IHRoZSB3aWR0aFxyXG4gIGhlaWdodD17MzB9IC8vIFNldCB0aGUgaGVpZ2h0XHJcbiAgb2JqZWN0Rml0PVwiY29udGFpblwiIC8vIEVuc3VyZSB0aGUgaW1hZ2Ugc2NhbGVzIGNvcnJlY3RseVxyXG4gIGxheW91dD1cImludHJpbnNpY1wiIC8vIEVuc3VyZSB0aGUgaW1hZ2UgcmVzcGVjdHMgdGhlIHdpZHRoIGFuZCBoZWlnaHRcclxuLz5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbi8vIE1haW4gU2xpY2sgU2xpZGVyIENvbXBvbmVudFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGljaygpIHtcclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgaW5pdGlhbFNsaWRlOiAxLFxyXG4gICAgcHJldkFycm93OiA8U2FtcGxlUHJldkFycm93IC8+LFxyXG4gICAgbmV4dEFycm93OiA8U2FtcGxlTmV4dEFycm93IC8+LFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgICBpbml0aWFsU2xpZGU6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IHctMTEvMTIgbXgtYXV0b1wiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBwbC00IHB0LTE2IHBiLThcIj5PdXIgTGF0ZXN0IEJsb2dzIDwvcD5cclxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgIHtCbG9nLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTRcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17aXRlbS5JbWFnZX1cclxuICAgICAgICAgICAgICBhbHQ9e2BCbG9nIEltYWdlICR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi00IGgtWzI2MF0gdy1bMjkyXSBvYmplY3QtY292ZXJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWxlZnRcIj57aXRlbS5Db2lufTwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbGVmdCBtdC0yXCI+e2l0ZW0uRGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWxlZnQgcHQtMyB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAge2l0ZW0uRGF0ZWRhdGF9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1NsaWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIEJsb2cgRGF0YVxyXG5jb25zdCBCbG9nID0gW1xyXG4gIHtcclxuICAgIEltYWdlOiBcIi9pbWFnZXMvY2wxLnBuZ1wiLFxyXG4gICAgQ29pbjogXCJFYXJuIFJld2FyZHNcIixcclxuICAgIERlc2NyaXB0aW9uOiBcIkxvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15XCIsXHJcbiAgICBEYXRlZGF0YTogXCJBdWd1c3QgMjQsIDIwMjRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEltYWdlOiBcIi9pbWFnZXMvY2wxLnBuZ1wiLFxyXG4gICAgQ29pbjogXCJFYXJuIFJld2FyZHNcIixcclxuICAgIERlc2NyaXB0aW9uOiBcIkxvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15XCIsXHJcbiAgICBEYXRlZGF0YTogXCJBdWd1c3QgMjQsIDIwMjRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEltYWdlOiBcIi9pbWFnZXMvY2wxLnBuZ1wiLFxyXG4gICAgQ29pbjogXCJFYXJuIFJld2FyZHNcIixcclxuICAgIERlc2NyaXB0aW9uOiBcIkxvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15XCIsXHJcbiAgICBEYXRlZGF0YTogXCJBdWd1c3QgMjQsIDIwMjRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEltYWdlOiBcIi9pbWFnZXMvY2wxLnBuZ1wiLFxyXG4gICAgQ29pbjogXCJFYXJuIFJld2FyZHNcIixcclxuICAgIERlc2NyaXB0aW9uOiBcIkxvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15XCIsXHJcbiAgICBEYXRlZGF0YTogXCJBdWd1c3QgMjQsIDIwMjRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEltYWdlOiBcIi9pbWFnZXMvY2wxLnBuZ1wiLFxyXG4gICAgQ29pbjogXCJFYXJuIFJld2FyZHNcIixcclxuICAgIERlc2NyaXB0aW9uOiBcIkxvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15XCIsXHJcbiAgICBEYXRlZGF0YTogXCJBdWd1c3QgMjQsIDIwMjRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEltYWdlOiBcIi9pbWFnZXMvY2wxLnBuZ1wiLFxyXG4gICAgQ29pbjogXCJFYXJuIFJld2FyZHNcIixcclxuICAgIERlc2NyaXB0aW9uOiBcIkxvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15XCIsXHJcbiAgICBEYXRlZGF0YTogXCJBdWd1c3QgMjQsIDIwMjRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEltYWdlOiBcIi9pbWFnZXMvY2wxLnBuZ1wiLFxyXG4gICAgQ29pbjogXCJFYXJuIFJld2FyZHNcIixcclxuICAgIERlc2NyaXB0aW9uOiBcIkxvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15XCIsXHJcbiAgICBEYXRlZGF0YTogXCJBdWd1c3QgMjQsIDIwMjRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEltYWdlOiBcIi9pbWFnZXMvY2wxLnBuZ1wiLFxyXG4gICAgQ29pbjogXCJFYXJuIFJld2FyZHNcIixcclxuICAgIERlc2NyaXB0aW9uOiBcIkxvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15XCIsXHJcbiAgICBEYXRlZGF0YTogXCJBdWd1c3QgMjQsIDIwMjRcIixcclxuICB9LFxyXG5dO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTbGlkZXIiLCJJbWFnZSIsIlNhbXBsZVByZXZBcnJvdyIsInByb3BzIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJvbkNsaWNrIiwiZGl2IiwiZGlzcGxheSIsImxlZnQiLCJ0b3AiLCJ0cmFuc2Zvcm0iLCJ6SW5kZXgiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJzcmMiLCJhbHQiLCJvYmplY3RGaXQiLCJsYXlvdXQiLCJTYW1wbGVOZXh0QXJyb3ciLCJyaWdodCIsIlNsaWNrIiwic2V0dGluZ3MiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiaW5pdGlhbFNsaWRlIiwicHJldkFycm93IiwibmV4dEFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJwIiwiQmxvZyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImltZyIsIkNvaW4iLCJEZXNjcmlwdGlvbiIsIkRhdGVkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/Pages/Aboutus/Slick.jsx\n"));

/***/ })

});