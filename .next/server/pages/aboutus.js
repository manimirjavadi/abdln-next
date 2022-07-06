"use strict";
(() => {
var exports = {};
exports.id = 623;
exports.ids = [623];
exports.modules = {

/***/ 2059:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AboutUs),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_aboutus_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2429);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _utils_wordpress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1386);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_aboutus_layout__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
([_components_layouts_aboutus_layout__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function AboutUs({ aboutus  }) {
    const iconOrange = {
        hidden: {
            pathLength: 0,
            fill: "rgba(217, 142, 40, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(217, 142, 40, 1)"
        }
    };
    const iconBlue = {
        hidden: {
            pathLength: 0,
            fill: "rgba(0, 9, 87, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(0, 9, 87, 1)"
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        dir: "rtl",
        className: "h-full w-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-5xl mx-auto w-full",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "min-h-[600px] mb-6 bg-white/50 rounded-3xl px-6 py-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            width: "300",
                            height: "150",
                            viewBox: "0 0 95 26",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.path, {
                                    d: "M6.03748 0H13.5248C14.3007 3.61744 15.0771 7.23429 15.8535 10.8517C14.6631 11.218 13.5012 11.6698 12.3635 12.1726C11.7598 9.34436 11.1489 6.51669 10.5427 3.68902C10.03 3.69143 9.51779 3.68602 9.00502 3.69143C7.83158 8.6418 6.63935 13.588 5.47258 18.5402C4.61674 19.4003 3.76515 20.2665 3.02084 21.2253C2.09287 22.3585 1.27644 23.5802 0.555157 24.8517C0.399992 25.0911 0.279375 25.3492 0.153909 25.6048L0.133301 25.606C0.425449 24.2641 0.748509 22.9293 1.05278 21.5898C2.71475 14.3934 4.37369 7.19579 6.03748 0Z",
                                    fill: "#000957",
                                    variants: iconBlue,
                                    initial: "hidden",
                                    animate: "visible",
                                    transition: {
                                        delay: 0.2,
                                        duration: 0.8
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.path, {
                                    d: "M61.8237 0H65.5059C65.5059 7.33835 65.5059 14.6767 65.5059 22.015C67.6121 22.015 69.7184 22.015 71.824 22.015C72.5338 22.0066 73.2654 22.0746 73.9473 21.8322C75.4201 21.3672 76.4984 19.9044 76.4735 18.3669C77.7009 18.3657 78.9277 18.3651 80.1551 18.3669C80.1575 19.2349 79.9999 20.1035 79.6938 20.9161C79.0332 22.6911 77.6452 24.1805 75.9177 24.9805C74.9074 25.4526 73.7866 25.686 72.6696 25.6692C69.0547 25.6692 65.4392 25.6686 61.8243 25.6692C61.8231 17.1128 61.8243 8.55639 61.8237 0Z",
                                    fill: "#000957",
                                    variants: iconBlue,
                                    initial: "hidden",
                                    animate: "visible",
                                    transition: {
                                        delay: 0.8,
                                        duration: 0.8
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.path, {
                                    d: "M76.4718 0H80.1042C80.1346 0.0120301 80.1952 0.0354887 80.2255 0.0475188C83.8622 6.1588 87.5067 12.2665 91.1519 18.3729C91.1586 12.2484 91.1531 6.12451 91.155 0H94.8571V25.5687C93.6255 25.5687 92.3939 25.5687 91.1622 25.5693C87.4886 19.4214 83.8288 13.2656 80.154 7.1188C80.154 10.3729 80.1533 13.6271 80.154 16.8812C78.9266 16.8824 77.6986 16.883 76.4712 16.8812C76.4718 11.2541 76.4712 5.62707 76.4718 0Z",
                                    fill: "#000957",
                                    variants: iconBlue,
                                    initial: "hidden",
                                    animate: "visible",
                                    transition: {
                                        delay: 1,
                                        duration: 0.8
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.path, {
                                    d: "M38.4771 0.0920182C41.2894 0.0896122 44.1024 0.0932213 46.9148 0.0950258C49.4514 0.04871 51.991 0.798184 54.1057 2.18585C55.9289 3.37262 57.44 5.02796 58.4516 6.94555C60.2027 10.2159 60.3936 14.2538 58.971 17.6758C58.2067 19.544 56.9848 21.2234 55.4483 22.5413C53.156 24.5197 50.1375 25.6469 47.0984 25.6445C44.2406 25.6433 41.3834 25.6451 38.5261 25.6433C39.8814 24.7392 40.9821 23.4628 41.6579 21.9862C43.409 21.9868 45.1595 21.9862 46.9105 21.9862C48.1349 22.0066 49.3629 21.7774 50.4957 21.3173C52.3104 20.5877 53.8724 19.2625 54.8913 17.6042C55.9956 15.8346 56.4417 13.677 56.1502 11.6174C55.8502 9.39427 54.6749 7.30645 52.9384 5.87247C51.3334 4.52691 49.2514 3.75818 47.1494 3.74194C45.311 3.73232 43.4721 3.74134 41.6337 3.73773C40.9524 2.25924 39.8299 1.00089 38.4771 0.0920182Z",
                                    fill: "#000957",
                                    variants: iconBlue,
                                    initial: "hidden",
                                    animate: "visible",
                                    transition: {
                                        delay: 0.6,
                                        duration: 0.8
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.path, {
                                    d: "M22.6577 0.10946C26.238 0.107655 29.8177 0.10946 33.3981 0.108858C35.157 0.0523167 36.9299 0.641189 38.287 1.75638C39.8962 3.05021 40.9121 5.04119 40.9866 7.09773C41.0975 9.27217 40.1532 11.4622 38.5028 12.8926C39.4507 13.7179 40.1769 14.791 40.589 15.9735C41.2776 17.9206 41.0788 20.1558 40.0478 21.9495C39.0168 23.7786 37.1608 25.1278 35.0855 25.5284C34.2327 25.7101 33.3556 25.6722 32.4889 25.6758C29.2122 25.6752 25.9349 25.6758 22.6583 25.6752C22.6553 22.5251 22.6583 19.3756 22.6571 16.2255C23.8857 16.1359 25.1197 16.1702 26.3501 16.1786C26.3398 18.1239 26.3483 20.0692 26.3459 22.0144C28.5752 22.0156 30.8039 22.0144 33.0332 22.015C33.3781 22.0132 33.7248 22.0258 34.0684 21.9843C35.0146 21.8743 35.905 21.3786 36.4971 20.6388C37.0693 19.935 37.3633 19.0147 37.2942 18.1119C37.2311 17.1284 36.7359 16.1828 35.9686 15.5585C35.3219 15.0219 34.4842 14.7194 33.6411 14.7182C30.3887 14.72 27.1357 14.7134 23.8832 14.7212C20.3732 14.7765 16.8735 15.6138 13.7399 17.1886C9.92743 19.0803 6.65319 22.0234 4.38026 25.6018C2.97164 25.6078 1.56303 25.6018 0.153809 25.6048C0.279275 25.3492 0.399892 25.0911 0.555057 24.8517C1.27634 23.5801 2.09277 22.3585 3.02074 21.2252C3.76505 20.2665 4.61664 19.4003 5.47248 18.5401C9.78499 14.4307 15.4958 11.7846 21.4509 11.2012C23.4468 10.9883 25.4561 11.0737 27.4593 11.0562C29.3171 11.0562 31.1748 11.0562 33.0332 11.0562C33.4793 11.0514 33.9314 11.0845 34.3703 10.9834C35.6928 10.7248 36.8159 9.68299 37.1687 8.39277C37.4318 7.47186 37.3075 6.44931 36.825 5.61984C36.2741 4.6454 35.251 3.94946 34.1333 3.80269C33.6266 3.74014 33.1144 3.78284 32.6059 3.77081C30.519 3.77081 28.4328 3.77021 26.3459 3.77081C26.3453 5.71908 26.3459 7.66675 26.3459 9.61502C25.1167 9.62705 23.8863 9.58435 22.6583 9.65713C22.6559 6.47457 22.6571 3.29202 22.6577 0.10946Z",
                                    fill: "#D98E28",
                                    variants: iconOrange,
                                    initial: "hidden",
                                    animate: "visible",
                                    transition: {
                                        delay: 0.4,
                                        duration: 0.8
                                    }
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "aboutusDIV",
                        dangerouslySetInnerHTML: {
                            __html: aboutus.content.rendered
                        }
                    })
                ]
            })
        })
    });
};
AboutUs.getLayout = function getLayout(page) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_aboutus_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: page
    });
};
async function getStaticProps({ params  }) {
    const aboutusArray = await (0,_utils_wordpress__WEBPACK_IMPORTED_MODULE_4__/* .getAboutus */ .fL)(1);
    const aboutus = aboutusArray[0];
    return {
        props: {
            aboutus
        },
        revalidate: 10
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,158,893,429], () => (__webpack_exec__(2059)));
module.exports = __webpack_exports__;

})();