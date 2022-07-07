"use strict";
(() => {
var exports = {};
exports.id = 444;
exports.ids = [444];
exports.modules = {

/***/ 4152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ NormalProduct)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1551);
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_link__WEBPACK_IMPORTED_MODULE_3__);




const NormalProduct = ({ product  })=>{
    let featuredMedia;
    if (product) {
        featuredMedia = product["_embedded"]["wp:featuredmedia"][0];
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_client_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: `/nproducts/${product.slug}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "NormalProductCard shadow-lg hover:shadow-2xl duration-300 cursor-pointer",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "p-5 w-full flex justify-center",
                    children: product && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        alt: product.title?.rendered,
                        src: featuredMedia["source_url"],
                        height: "250px",
                        width: "250px"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "p-5",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        className: "text-black",
                        children: product?.title?.rendered
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 2159:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NProducts),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_aboutus_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2429);
/* harmony import */ var _components_Products_Fragments_NormalProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4152);
/* harmony import */ var _components_UI_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7516);
/* harmony import */ var _utils_wordpress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1386);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_aboutus_layout__WEBPACK_IMPORTED_MODULE_2__]);
_components_layouts_aboutus_layout__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function NProducts({ products , totalPages , currentPage , pvendors , industries ,  }) {
    const { 0: selectedPVendor , 1: setSelectedPVendor  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: selectedIndustry , 1: setSelectedIndustry  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentPage);
    const { 0: totalPage , 1: setTotalPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(totalPages);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: filteredProducts , 1: setFilteredProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(products);
    const handlePage = (e)=>{
        setPage(e.target.value);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLoading(true);
        let url = `https://wp.manimirjavadi.info/wp-json/wp/v2/product?per_page=6&_embed&acf_format=standard&lang=fa&page=${page}`;
        if (selectedPVendor !== "") {
            url += `&pvendor=${selectedPVendor}`;
        }
        if (selectedIndustry !== "") {
            url += `&industry=${selectedIndustry}`;
        }
        fetch(url).then((res)=>{
            for (let pair of res.headers.entries()){
                if (pair[0] === "x-wp-totalpages") {
                    setTotalPage(pair[1]);
                }
            }
            res.json().then((data)=>{
                setFilteredProducts(data);
                setLoading(false);
            });
        });
    }, [
        selectedPVendor,
        selectedIndustry,
        page
    ]);
    const jsxPVendors = pvendors.map((cat)=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex gap-2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "checkbox",
                    className: "form-checkbox rounded text-primary ring-0 focus:ring-0",
                    onChange: (e)=>{
                        e.target.checked ? setSelectedPVendor(cat.id) : setSelectedPVendor("");
                    },
                    checked: selectedPVendor === cat.id ? true : false
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "ml-2",
                    children: cat.name
                })
            ]
        }, cat.id);
    });
    const jsxIndustries = industries.map((cat)=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex gap-2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "checkbox",
                    className: "form-checkbox rounded text-primary ring-0 focus:ring-0",
                    onChange: (e)=>{
                        e.target.checked ? setSelectedIndustry(cat.id) : setSelectedIndustry("");
                    },
                    checked: selectedIndustry === cat.id ? true : false
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "ml-2",
                    children: cat.name
                })
            ]
        }, cat.id);
    });
    const jsxProducts = filteredProducts.map((p)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Products_Fragments_NormalProductCard__WEBPACK_IMPORTED_MODULE_3__/* .NormalProduct */ .S, {
            product: p
        }, p.id);
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: "w-full",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-5xl mx-auto px-2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "text-black",
                    children: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A \u0635\u0646\u0639\u062A\u06CC"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "min-h-[500px] rounded-2xl py-6 px-4 grid grid-cols-2 md:grid-cols-4 gap-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "min-h-[400px] max-h-[1000px] rounded-2xl py-3 px-4 bg-white hidden md:block shadow-lg",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "text-black h-[42px]",
                                    children: "\u0641\u06CC\u0644\u062A\u0631\u200C\u0647\u0627"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-3 pl-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "text-black h-[25px] border-b border-b-gray-300",
                                            children: "\u0635\u0646\u0627\u06CC\u0639"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "px-2 py-4",
                                            children: jsxIndustries
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-6 pl-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "text-black h-[25px] border-b border-b-gray-300",
                                            children: "\u062A\u0648\u0644\u06CC\u062F\u200C\u06A9\u0646\u0646\u062F\u0647"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "px-2 py-4",
                                            children: jsxPVendors
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-span-3 grid grid-cols-1 md:grid-cols-3 gap-2 py-4 px-2 md:px-6 rounded-2xl min-h-[400px] bg-white shadow-lg overflow-hidden",
                            children: [
                                jsxProducts,
                                loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute h-[1000px] inset-0 flex justify-center items-center z-50 bg-gray-400/60 rounded-2xl",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                        width: "100",
                                        height: "100",
                                        viewBox: "0 0 38 38",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                                    x1: "8.042%",
                                                    y1: "0%",
                                                    x2: "65.682%",
                                                    y2: "23.865%",
                                                    id: "a",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                            stopColor: "#D98C00",
                                                            stopOpacity: "0",
                                                            offset: "0%"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                            stopColor: "#D98C00",
                                                            stopOpacity: ".631",
                                                            offset: "63.146%"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                            stopColor: "#D98C00",
                                                            offset: "100%"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                                fill: "none",
                                                fillRule: "evenodd",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                    transform: "translate(1 1)",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M36 18c0-9.94-8.06-18-18-18",
                                                            id: "Oval-2",
                                                            stroke: "url(#a)",
                                                            strokeWidth: "2",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animateTransform", {
                                                                attributeName: "transform",
                                                                type: "rotate",
                                                                from: "0 18 18",
                                                                to: "360 18 18",
                                                                dur: "0.9s",
                                                                repeatCount: "indefinite"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                            fill: "#0B5C00",
                                                            cx: "36",
                                                            cy: "18",
                                                            r: "1",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animateTransform", {
                                                                attributeName: "transform",
                                                                type: "rotate",
                                                                from: "0 18 18",
                                                                to: "360 18 18",
                                                                dur: "0.9s",
                                                                repeatCount: "indefinite"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full col-span-full py-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_Pagination__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        totalPages: +totalPage,
                                        currentPage: page.toString(),
                                        onPageClick: handlePage
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
NProducts.getLayout = function getLayout(page) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_aboutus_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: page
    });
};
async function getStaticProps({ params  }) {
    const products = await (0,_utils_wordpress__WEBPACK_IMPORTED_MODULE_5__/* .getProducts */ .Xp)(6, 1);
    const totalPages = products.totalPages;
    const currentPage = 1;
    const pvendors = await (0,_utils_wordpress__WEBPACK_IMPORTED_MODULE_5__/* .getPVendors */ .BB)(100);
    const industries = await (0,_utils_wordpress__WEBPACK_IMPORTED_MODULE_5__/* .getIndustries */ .$G)(100);
    return {
        props: {
            products,
            totalPages,
            currentPage,
            pvendors,
            industries
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,158,893,429,516], () => (__webpack_exec__(2159)));
module.exports = __webpack_exports__;

})();