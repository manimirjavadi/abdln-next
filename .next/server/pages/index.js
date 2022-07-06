"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Molecule.e7cec901.png","height":719,"width":687,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuklEQVR42mMAAb+G3YxrEluYGbCCprOMCM5/xv///3MCMTuqoq5zYovj+112x5ZYGV7/z8Ew+ZYwSHh+ThcTWL6hZnvehprpT15v36535v9/3ra0lqxJobXyCIODGALuB1v8PzapPrf80DWpzU42V5b6pyWBJb3rTssfntffejDec87VE9sDps45PnFu2RzZwMy5DmAFhSUHnKZOXOZQVpbpCHQcKxDzAjHQ4WuZTu1cBaSRQHVmPYZXASHtUPatsRNqAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 6213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/abdln_top.a218dd3a.png","height":2392,"width":4694,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAeElEQVR42mP4//9/xZvzu7OvVDM0P9kxNQnIT/r757f/v3//YoC4keHNuZ09T7ZPrrzeytB4f1lxOFBB8L+/fyqAkm5APJHhw60zekBBvZfH17v8+vLBCcg2AUp4ATGI1mIAClj8+/sXJGEIxLpAQWMg7QCkQdgZAMHeYazDhLy/AAAAAElFTkSuQmCC"});

/***/ }),

/***/ 227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/top.985f1a1d.gif","height":240,"width":400});

/***/ }),

/***/ 3628:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ Intro)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var re_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6750);
/* harmony import */ var re_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(re_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI_IndicatorDots__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4930);
/* harmony import */ var _slides_MainSlide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7586);
/* harmony import */ var _slides_Molecule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3768);
/* harmony import */ var _slides_Video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9346);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_slides_MainSlide__WEBPACK_IMPORTED_MODULE_4__, _slides_Molecule__WEBPACK_IMPORTED_MODULE_5__, _slides_Video__WEBPACK_IMPORTED_MODULE_6__]);
([_slides_MainSlide__WEBPACK_IMPORTED_MODULE_4__, _slides_Molecule__WEBPACK_IMPORTED_MODULE_5__, _slides_Video__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Intro = ({ slides  })=>{
    const { 0: currentSlide , 1: setCurrentSlide  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("main");
    const { 0: startMainAnimation , 1: setStartMainAnimation  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: startMoleculeAnimation , 1: setStartMoleculeAnimation  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: startVideoAnimation , 1: setVideoAnimation  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const manageAnimation = (event)=>{
        if (event.current.children[0].id !== currentSlide) {
            if (event.current.children[0].id === "molecule") {
                setCurrentSlide("molecule");
                setStartMoleculeAnimation(true);
                setStartMainAnimation(false);
                setVideoAnimation(false);
            }
            if (event.current.children[0].id === "main") {
                setCurrentSlide("main");
                setStartMoleculeAnimation(false);
                setStartMainAnimation(true);
                setVideoAnimation(false);
            }
            if (event.current.children[0].id === "video") {
                setCurrentSlide("video");
                setStartMainAnimation(false);
                setStartMoleculeAnimation(false);
                setVideoAnimation(true);
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((re_carousel__WEBPACK_IMPORTED_MODULE_2___default()), {
        auto: true,
        widgets: [
            _UI_IndicatorDots__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
        ],
        onTransitionEnd: (event)=>{
            manageAnimation(event);
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_slides_MainSlide__WEBPACK_IMPORTED_MODULE_4__/* .MainSlide */ .p, {
                id: "main",
                animatorController: startMainAnimation,
                text: slides[1]?.content,
                title: slides[0].title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_slides_Molecule__WEBPACK_IMPORTED_MODULE_5__/* .Molecule */ .j, {
                id: "molecule",
                animatorController: startMoleculeAnimation,
                text: slides[0]?.content,
                title: slides[0].title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_slides_Video__WEBPACK_IMPORTED_MODULE_6__/* .Video */ .n, {
                id: "video",
                animatorController: startVideoAnimation
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7586:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ MainSlide)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9749);
/* harmony import */ var next_dist_client_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _assets_images_top_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(227);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const textVariant = {
    hidden: {
        opacity: 0,
        x: "100vw",
        transition: {
            duration: 0.01
        }
    },
    visible: {
        opacity: 1,
        x: 0
    }
};
const gifVariant = {
    hidden: {
        opacity: 0,
        x: "-100vw",
        transition: {
            duration: 0.01
        }
    },
    visible: {
        opacity: 1,
        x: 0
    }
};
const MainSlide = ({ animatorController , text , title  })=>{
    const controlsText = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();
    const controlsGif = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (animatorController) {
            controlsText.start("visible");
            controlsGif.start("visible");
        } else {
            controlsText.start("hidden");
            controlsGif.start("hidden");
        }
    }, [
        animatorController,
        controlsText,
        controlsGif
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            id: "main",
            className: "w-full h-full bg-abdlBlue",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-6xl mx-auto grid grid-cols-1 h-full md:grid-cols-2 items-center place-content-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                        variants: textVariant,
                        initial: "hidden",
                        animate: controlsText,
                        transition: {
                            duration: 0.7,
                            type: "spring"
                        },
                        className: "md:w-[80%] px-6 order-2 md:order-1 md:pr-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: title.rendered
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "slideDIV",
                                dangerouslySetInnerHTML: {
                                    __html: text.rendered
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                        variants: gifVariant,
                        initial: "hidden",
                        animate: controlsGif,
                        transition: {
                            delay: 0.2,
                            duration: 0.7,
                            type: "spring"
                        },
                        className: "order-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full h-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_client_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                priority: true,
                                src: _assets_images_top_gif__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                                alt: title.rendered,
                                layout: "responsive"
                            })
                        })
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3768:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ Molecule)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _assets_images_Molecule_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8834);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const textVariant = {
    hidden: {
        opacity: 0,
        x: "-100vw",
        transition: {
            duration: 0.01
        }
    },
    visible: {
        opacity: 1,
        x: 0
    }
};
const gifVariant = {
    hidden: {
        opacity: 0,
        rotate: 0,
        x: "100vw",
        transition: {
            duration: 0.01
        }
    },
    zoom: {
        scale: 1.3,
        transition: {
            repeat: 100,
            repeatType: "reverse",
            duration: 15
        }
    },
    rotate: {
        rotate: 30,
        transition: {
            repeat: 100,
            repeatType: "reverse",
            duration: 30
        }
    },
    visible: {
        opacity: 1,
        x: 0
    }
};
const Molecule = ({ animatorController , text , title  })=>{
    const controlsText = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();
    const controlsGif = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (animatorController) {
            controlsText.start("visible");
            controlsGif.start("visible").then(()=>{
                controlsGif.start("zoom");
                controlsGif.start("rotate");
            });
        } else {
            controlsText.start("hidden");
            controlsGif.start("hidden");
        }
    }, [
        animatorController,
        controlsText,
        controlsGif
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "molecule",
        className: "w-full h-full bg-abdlOrange",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-6xl mx-auto grid grid-cols-1 h-full md:grid-cols-2 items-center place-content-center gap-8",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                    variants: gifVariant,
                    initial: "hidden",
                    animate: controlsGif,
                    transition: {
                        duration: 0.7,
                        type: "spring"
                    },
                    className: "px-6 order-1 md:order-2 md:pr-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "scene w-full h-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            priority: true,
                            src: _assets_images_Molecule_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                            alt: title.rendered,
                            layout: "responsive"
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                    variants: textVariant,
                    initial: "hidden",
                    animate: controlsText,
                    transition: {
                        delay: 0.3,
                        duration: 0.7,
                        type: "spring"
                    },
                    className: "md:w-[80%] px-6 order-2 md:pr-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: title.rendered
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "slideDIV",
                            dangerouslySetInnerHTML: {
                                __html: text.rendered
                            }
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9346:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ Video)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const videoVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
};
const Video = ({ animatorController  })=>{
    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimation)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (animatorController) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [
        animatorController,
        controls
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "video",
        className: "video-container w-full h-full bg-black grid",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            variants: videoVariant,
            initial: "hidden",
            animate: controls,
            transition: {
                duration: 1
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
                loop: true,
                autoPlay: true,
                playsInline: true,
                muted: true,
                className: "min-h-full min-w-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                        src: "theVideo.mp4",
                        type: "video/mp4"
                    }),
                    "\u0645\u062A\u0627\u0633\u0641\u0627\u0646\u0647 \u0645\u0631\u0648\u0631\u06AF\u0631 \u0634\u0645\u0627 \u0627\u0632 \u0627\u06CC\u0646 \u0648\u06CC\u062F\u06CC\u0648 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0646\u0645\u06CC\u200C\u06A9\u0646\u062F."
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ VendorLogo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const VendorLogo = ({ source , alt ="\u0639\u0628\u062F\u0627\u0644\u0647\u06CC\u0627\u0646"  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full h-[100px] bg-white rounded-2xl flex justify-center overflow-hidden",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: source,
            alt: alt,
            height: "200px",
            width: "200px",
            objectFit: "contain"
        })
    });
};


/***/ }),

/***/ 8281:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ ManufacturersSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _hooks_WindowsDimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1540);
/* harmony import */ var _Fragments_VendorLogo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1084);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
framer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const topListVariant = {
    hidden: {
        opacity: 0,
        x: "-100vw",
        transition: {
            delay: 1,
            duration: 0.01
        }
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.3
        }
    }
};
const bottomListVariant = {
    hidden: {
        opacity: 0,
        x: "100vw",
        transition: {
            delay: 1,
            duration: 0.01
        }
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.6
        }
    }
};
const ManufacturersSection = ({ animatorController , vendors  })=>{
    const controlAnimation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation)();
    const { height , width  } = (0,_hooks_WindowsDimension__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const jsxMobile = vendors.map((vendor)=>{
        let featuredMedia = vendor["_embedded"]["wp:featuredmedia"][0];
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: `/manufacturers/${vendor.slug}`,
                className: "cursor-pointer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Fragments_VendorLogo__WEBPACK_IMPORTED_MODULE_6__/* .VendorLogo */ .p, {
                    source: featuredMedia["source_url"]
                })
            })
        }, vendor.id);
    });
    const jsxDesktopTop = vendors.slice(0, 4).map((vendor)=>{
        let featuredMedia = vendor["_embedded"]["wp:featuredmedia"][0];
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: `/manufacturers/${vendor.slug}`,
            className: "cursor-pointer",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                whileHover: {
                    scale: 1.2
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                    alt: "\u0639\u0628\u062F\u0627\u0644\u0647\u06CC\u0627\u0646",
                    src: featuredMedia["source_url"],
                    height: "200px",
                    width: "200px",
                    objectFit: "contain"
                })
            })
        }, vendor.id);
    });
    const jsxDesktopBottom = vendors.slice(4, 8).map((vendor)=>{
        let featuredMedia = vendor["_embedded"]["wp:featuredmedia"][0];
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: `/manufacturers/${vendor.slug}`,
            className: "cursor-pointer",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                whileHover: {
                    scale: 1.2
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                    alt: "\u0639\u0628\u062F\u0627\u0644\u0647\u06CC\u0627\u0646",
                    src: featuredMedia["source_url"],
                    height: "200px",
                    width: "200px",
                    objectFit: "contain"
                })
            })
        }, vendor.id);
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (animatorController) {
            controlAnimation.start("visible");
        } else {
            controlAnimation.start("hidden");
        }
    }, [
        animatorController,
        controlAnimation
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full h-full bg-abdlOrange",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-5xl mx-auto w-full manufacturerContainer",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                className: "w-full h-full gap-8 px-10 md:px-0",
                style: {
                    zIndex: 20
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-[150px] hidden md:block"
                    }),
                    width <= 768 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 gap-2 pt-24 md:hidden",
                        children: jsxMobile
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "pt-6 hidden md:block",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                variants: topListVariant,
                                initial: "hidden",
                                animate: controlAnimation,
                                className: "w-full md:flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-96 hidden md:block",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            children: "\u062A\u0627\u0645\u06CC\u0646\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "h-[170px] bg-white rounded-[200px] overflow-hidden",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-full grid grid-cols-4 place-items-center",
                                                children: jsxDesktopTop
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                variants: bottomListVariant,
                                initial: "hidden",
                                animate: controlAnimation,
                                className: "w-full md:flex justify-between items-center mt-16",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full overflow-hidden",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "h-[170px] bg-white rounded-[200px] overflow-hidden",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-full grid grid-cols-4 place-items-center",
                                                children: jsxDesktopBottom
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-96 flex justify-end",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "./manufacturers/list",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                                whileHover: {
                                                    scale: 1.1
                                                },
                                                className: "text-white text-lg justify-end cursor-pointer hidden md:flex",
                                                children: [
                                                    "\u0647\u0645\u0647 \u062A\u0627\u0645\u06CC\u0646\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "px-4 mt-2",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            width: "44",
                                                            height: "17",
                                                            viewBox: "0 0 44 17",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M8 0.00158691L0 8.00159L8 16.0016V10.0016H44V6.00159H8V0.00158691Z",
                                                                fill: "white"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7815:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ News)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _Fragments_NewsCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6841);
/* harmony import */ var _hooks_WindowsDimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1540);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const News = ({ posts  })=>{
    const { height , width  } = (0,_hooks_WindowsDimension__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full h-full bg-abdlBlue",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "max-w-6xl mx-auto w-full",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full h-full px-12 grid grid-cols-1 md:grid-cols-3 lg:gap-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-[150px]"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between col-span-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "text-white",
                                        children: "\u0627\u062E\u0628\u0627\u0631"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "cursor-pointer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "./news/list/1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-white text-lg",
                                            children: "\u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 \u062E\u0628\u0631\u200C\u0647\u0627"
                                        })
                                    })
                                })
                            ]
                        }),
                        posts.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: "cursor-pointer",
                            href: `/news/${posts[0].slug}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Fragments_NewsCard__WEBPACK_IMPORTED_MODULE_4__/* .NewsCard */ .e, {
                                    theNews: posts[0]
                                })
                            })
                        }),
                        width > 768 && posts.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: "cursor-pointer",
                            href: `/news/${posts[1].slug}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Fragments_NewsCard__WEBPACK_IMPORTED_MODULE_4__/* .NewsCard */ .e, {
                                    theNews: posts[1]
                                })
                            })
                        }),
                        width > 768 && posts.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: "cursor-pointer",
                            href: `/news/${posts[2].slug}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Fragments_NewsCard__WEBPACK_IMPORTED_MODULE_4__/* .NewsCard */ .e, {
                                    theNews: posts[2]
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ ProductCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const ProductCard = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "productCard",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "p-5",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "text-black",
                        children: "\u062E\u0627\u06A9 \u062F\u06CC\u0627\u062A\u0648\u0645\u0647"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "px-5",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-black line-clamp-2",
                        children: "\u062E\u0627\u06A9 \u062F\u06CC\u0627\u062A\u0648\u0645\u0647 (Diatomaceous earth) \u0627\u0632 \u0628\u0642\u0627\u06CC\u0627\u06CC \u0646\u0648\u0639\u06CC \u062C\u0644\u0628\u06A9 \u062A\u06A9\u200C\u0633\u0644\u0648\u0644\u06CC \u0628\u0647 \u0646\u0627\u0645 \u062F\u06CC\u0627\u062A\u0648\u0645 \u0628\u0647\u200C\u062F\u0633\u062A\u200C\u0622\u0645\u062F\u0647 \u0627\u0633\u062A. \u062F\u06CC\u0627\u062A\u0648\u0645\u200C\u0647\u0627 \u06AF\u0631\u0648\u0647\u06CC \u0627\u0632 \u062C\u0644\u0628\u06A9\u200C\u0647\u0627\u06CC \u06A9\u0648\u0686\u06A9 \u0647\u0633\u062A\u0646\u062F \u06A9\u0647 \u062F\u0631 \u0627\u0642\u06CC\u0627\u0646\u0648\u0633\u200C\u0647\u0627\u060C \u0622\u0628\u0631\u0627\u0647\u200C\u0647\u0627 \u0648 \u062E\u0627\u06A9\u200C\u0647\u0627\u06CC \u0633\u0631\u0627\u0633\u0631 \u062C\u0647\u0627\u0646 \u06CC\u0627\u0641\u062A \u0645\u06CC\u200C\u0634\u0648\u0646\u062F."
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "p-5 w-full flex justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        alt: "\u062E\u0627\u06A9 \u062F\u06CC\u0627\u062A\u0648\u0645\u0647",
                        src: "/tempImgs/hudson.jpg",
                        height: "250px",
                        width: "250px"
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 9719:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ NormalProducts)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Fragments_ProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8945);
/* harmony import */ var _hooks_WindowsDimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1540);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const NormalProducts = ()=>{
    const { height , width  } = (0,_hooks_WindowsDimension__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full h-full bg-[#89CFF0]",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            initial: {
                backgroundSize: "100% 100%"
            },
            whileInView: {
                backgroundSize: "120% 120%"
            },
            transition: {
                duration: 20,
                repeat: 100,
                repeatType: "reverse"
            },
            className: "productsContainer max-w-6xl mx-auto w-full",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full h-full px-12 grid grid-cols-1 md:grid-cols-3 gap-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-[150px]"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between md:col-span-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "./products",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-white text-lg",
                                        children: "\u0647\u0645\u0647 \u0645\u062D\u0635\u0648\u0644\u0627\u062A"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Fragments_ProductCard__WEBPACK_IMPORTED_MODULE_4__/* .ProductCard */ .I, {}),
                    width > 768 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Fragments_ProductCard__WEBPACK_IMPORTED_MODULE_4__/* .ProductCard */ .I, {}),
                    width > 768 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Fragments_ProductCard__WEBPACK_IMPORTED_MODULE_4__/* .ProductCard */ .I, {})
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7220:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ SpecialProducts)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Fragments_ProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8945);
/* harmony import */ var _hooks_WindowsDimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1540);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const SpecialProducts = ()=>{
    const { height , width  } = (0,_hooks_WindowsDimension__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full h-full bg-[#F1B3AA]",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            initial: {
                backgroundSize: "100% 100%"
            },
            whileInView: {
                backgroundSize: "120% 120%"
            },
            transition: {
                duration: 20,
                repeat: 100,
                repeatType: "reverse"
            },
            className: "productsContainer max-w-6xl mx-auto w-full",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full h-full px-12 grid grid-cols-1 md:grid-cols-3 gap-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-[150px]"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between md:col-span-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "./products",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-white text-lg",
                                        children: "\u0647\u0645\u0647 \u0645\u062D\u0635\u0648\u0644\u0627\u062A"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Fragments_ProductCard__WEBPACK_IMPORTED_MODULE_4__/* .ProductCard */ .I, {}),
                    width > 768 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Fragments_ProductCard__WEBPACK_IMPORTED_MODULE_4__/* .ProductCard */ .I, {}),
                    width > 768 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Fragments_ProductCard__WEBPACK_IMPORTED_MODULE_4__/* .ProductCard */ .I, {})
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4129:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_abdln_f_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9593);
/* harmony import */ var _assets_images_abdln_top_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6213);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icons_TIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7546);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_8__]);
framer_motion__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const headerVariant = {
    orange: {
        color: "#D98C00"
    },
    white: {
        color: "white"
    }
};
const Header = ({ hideHeader , otherPages  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { 0: menu , 1: setMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const animationController = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.useAnimation)();
    const menuHandler = ()=>{
        if (menu === 1) {
            setMenu(2);
        } else {
            setMenu(1);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (hideHeader) {
            animationController.start("hidden");
        } else {
            animationController.start("visible");
        }
    }, [
        hideHeader,
        animationController
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
            className: "absolute top-0 z-50 w-full",
            children: [
                menu === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: menuHandler,
                    className: "absolute h-screen w-full mt-16 bg-black/20"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                    className: hideHeader ? "headerDark" : otherPages ? "headerAlternate" : "headerLight",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
                            className: `bg-[#EBEBEB] top-16 right-0 w-full fixed h-full overflow-auto ease-in-out transition-all duration-300 ${menu === 1 ? "" : "translate-x-full"}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid place-items-center h-1/2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.a, {
                                                className: `${router.pathname === "/" ? "navbarActiveDark" : ""}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "text-lg mb-5 text-center",
                                                    children: "\u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/aboutus",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: `${router.pathname.startsWith("/nproducts") ? "navbarActiveDark" : ""}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "text-lg mb-5 text-center",
                                                    children: "\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0627"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/nproducts/list",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: `${router.pathname.startsWith("/sproducts") ? "navbarActiveDark" : ""}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "text-lg mb-5 text-center",
                                                    children: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A \u0635\u0646\u0639\u062A\u06CC"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/sproducts/list",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: `${router.pathname.startsWith("/sproducts") ? "navbarActiveDark" : ""}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "text-lg mb-5 text-center",
                                                    children: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A \u0622\u0631\u0627\u06CC\u0634\u06CC"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/news/list/1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: `${router.pathname.startsWith("/news") ? "navbarActiveDark mobile" : ""}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "text-lg mb-5 text-center",
                                                    children: "\u0627\u062E\u0628\u0627\u0631"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/manufacturers/list",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: `${router.pathname.startsWith("/manufacturers") ? "navbarActiveDark mobile" : ""}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "text-lg mb-5 text-center",
                                                    children: "\u062A\u0627\u0645\u06CC\u0646\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "max-w-6xl mx-auto text-white px-2",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "md:hidden flex items-center ml-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            onClick: menuHandler,
                                            className: "btn btn-square btn-ghost",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_TIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                width: "32",
                                                height: "32",
                                                className: "fill-white",
                                                children: "hamburgerMenu"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "hidden md:flex items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: `h-full grid place-content-center px-3 ml-8  ${router.pathname === "/" ? otherPages ? "navbarActiveDark" : "navbarActive" : "hover:text-white hover:border-b-4 hover:border-b-white duration-200"}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-sm font-bold ",
                                                        children: "\u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/aboutus",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: `h-full grid place-content-center px-3 text-darkGrey ml-8  ${router.pathname.startsWith("/aboutus") ? otherPages ? "navbarActiveDark" : "navbarActive" : "hover:text-white hover:border-b-4 hover:border-b-white duration-200"}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-sm font-bold",
                                                        children: "\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0627"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/nproducts/list",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: `h-full grid place-content-center px-3 ml-8 ${router.pathname.startsWith("/nproducts") ? otherPages ? "navbarActiveDark" : "navbarActive" : "hover:text-white hover:border-b-4 hover:border-b-white duration-200"}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-sm font-bold",
                                                        children: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A \u0635\u0646\u0639\u062A\u06CC"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/sproducts/list",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: `h-full grid place-content-center px-3 ml-8 ${router.pathname.startsWith("/sproducts") ? otherPages ? "navbarActiveDark" : "navbarActive" : "hover:text-white hover:border-b-4 hover:border-b-white duration-200"}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-sm font-bold",
                                                        children: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A \u0622\u0631\u0627\u06CC\u0634\u06CC"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/news/list/1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: `h-full grid place-content-center px-3 ml-8 ${router.pathname.startsWith("/news") ? otherPages ? "navbarActiveDark" : "navbarActive" : "hover:text-white hover:border-b-4 hover:border-b-white duration-200"}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-sm font-bold",
                                                        children: "\u0627\u062E\u0628\u0627\u0631"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/manufacturers/list",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: `h-full grid place-content-center px-3 ml-8 ${router.pathname.startsWith("/manufacturers") ? otherPages ? "navbarActiveDark" : "navbarActive" : "hover:text-white hover:border-b-4 hover:border-b-white duration-200"}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-sm font-bold",
                                                        children: "\u062A\u0627\u0645\u06CC\u0646\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    src: hideHeader ? _assets_images_abdln_top_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z : _assets_images_abdln_f_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                                                    height: "45rem",
                                                    width: "90rem",
                                                    alt: "\u0639\u0628\u062F\u0627\u0644\u0644\u0647\u06CC\u0627\u0646"
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ IndicatorDots)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
;// CONCATENATED MODULE: ./components/UI/IndicatorDots.js



function Dot(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        style: {
            display: "inline-block",
            height: "8px",
            width: "8px",
            borderRadius: "4px",
            backgroundColor: "white",
            margin: "7px 5px",
            opacity: props.selected ? "1" : "0.3",
            transitionDuration: "300ms"
        }
    });
}
function IndicatorDots(props) {
    const wrapperStyle = {
        position: "absolute",
        width: "100%",
        zIndex: "100",
        bottom: "0px",
        textAlign: "center"
    };
    if (props.total < 2) {
        // Hide dots when there is only one dot.
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: wrapperStyle
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: wrapperStyle,
            dir: "ltr",
            children: Array.apply(null, Array(props.total)).map((x, i)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(Dot, {
                    selected: props.index === i
                }, i);
            })
        });
    }
};
IndicatorDots.propTypes = {
    index: (external_prop_types_default()).number.isRequired,
    total: (external_prop_types_default()).number.isRequired
};


/***/ }),

/***/ 6817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function main({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        dir: "rtl",
        className: "mx-auto bg-white",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: children
        })
    });
};


/***/ }),

/***/ 1540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useWindowDimensions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function getWindowDimensions() {
    if (false) {} else {
        return {
            width: 1366,
            height: 768
        };
    }
}
function useWindowDimensions() {
    const { 0: windowDimensions , 1: setWindowDimensions  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getWindowDimensions());
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize)
        ;
    }, []);
    return windowDimensions;
};


/***/ }),

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7282);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layouts_main_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6817);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Home_Intro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3628);
/* harmony import */ var _components_UI_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4129);
/* harmony import */ var _components_Products_NormalProducts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9719);
/* harmony import */ var _components_Products_SpecialProducts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7220);
/* harmony import */ var _components_Manufacturers_ManufacturersSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8281);
/* harmony import */ var _components_News_News__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7815);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7893);
/* harmony import */ var _utils_wordpress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1386);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Home_Intro__WEBPACK_IMPORTED_MODULE_5__, _components_UI_Header__WEBPACK_IMPORTED_MODULE_6__, _components_Products_NormalProducts__WEBPACK_IMPORTED_MODULE_7__, _components_Products_SpecialProducts__WEBPACK_IMPORTED_MODULE_8__, _components_Manufacturers_ManufacturersSection__WEBPACK_IMPORTED_MODULE_9__, _components_News_News__WEBPACK_IMPORTED_MODULE_10__]);
([_components_Home_Intro__WEBPACK_IMPORTED_MODULE_5__, _components_UI_Header__WEBPACK_IMPORTED_MODULE_6__, _components_Products_NormalProducts__WEBPACK_IMPORTED_MODULE_7__, _components_Products_SpecialProducts__WEBPACK_IMPORTED_MODULE_8__, _components_Manufacturers_ManufacturersSection__WEBPACK_IMPORTED_MODULE_9__, _components_News_News__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function Home({ slides , posts , vendors  }) {
    const { 0: animateManufacturers , 1: setAnimateManufacturers  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: hideHeader , 1: setHideHeader  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const allWithClass = Array.from(document.getElementsByClassName("fp-watermark"));
        for (let element of allWithClass){
            element.remove();
        }
    }, []);
    const onLeave = (origin, destination, direction)=>{
        if (destination.item?.id === "manufacturers") {
            setAnimateManufacturers(true);
        } else {
            setAnimateManufacturers(false);
        }
        if (destination.item?.id === "footer") {
            setHideHeader(true);
        } else {
            setHideHeader(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "\u0639\u0628\u062F\u0627\u0644\u0647\u06CC\u0627\u0646 | \u062A\u0627\u0645\u06CC\u0646 \u06A9\u0646\u0646\u062F\u0647 \u0645\u0648\u0627\u062F \u0634\u06CC\u0645\u06CC\u0627\u06CC\u06CC \u0648 \u0645\u0639\u062F\u0646\u06CC"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "\u0648\u0628\u0633\u0627\u06CC\u062A \u0631\u0633\u0645\u06CC \u0639\u0628\u062F\u0627\u0644\u0647\u06CC\u0627\u0646"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_Header__WEBPACK_IMPORTED_MODULE_6__/* .Header */ .h, {
                hideHeader: hideHeader
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_1___default()), {
                navigation: true,
                onLeave: onLeave,
                scrollBar: false,
                render: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_1___default().Wrapper), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_Intro__WEBPACK_IMPORTED_MODULE_5__/* .Intro */ .p, {
                                    slides: slides
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Products_NormalProducts__WEBPACK_IMPORTED_MODULE_7__/* .NormalProducts */ .a, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Products_SpecialProducts__WEBPACK_IMPORTED_MODULE_8__/* .SpecialProducts */ .$, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_News_News__WEBPACK_IMPORTED_MODULE_10__/* .News */ .S, {
                                    posts: posts
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                id: "manufacturers",
                                className: "section",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Manufacturers_ManufacturersSection__WEBPACK_IMPORTED_MODULE_9__/* .ManufacturersSection */ .b, {
                                    vendors: vendors,
                                    animatorController: animateManufacturers
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                id: "footer",
                                className: "section",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_11__/* .Footer */ .$, {})
                            })
                        ]
                    })
            })
        ]
    });
};
Home.getLayout = function getLayout(page) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_main_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: page
    });
};
async function getStaticProps({ params  }) {
    const slides = await (0,_utils_wordpress__WEBPACK_IMPORTED_MODULE_12__/* .getSlides */ .VU)(2);
    const posts = await (0,_utils_wordpress__WEBPACK_IMPORTED_MODULE_12__/* .getPosts */ .Jq)(3);
    const vendors = await (0,_utils_wordpress__WEBPACK_IMPORTED_MODULE_12__/* .getVendors */ .dH)(8);
    return {
        props: {
            slides,
            posts,
            vendors
        },
        revalidate: 10
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7282:
/***/ ((module) => {

module.exports = require("@fullpage/react-fullpage");

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

/***/ 6750:
/***/ ((module) => {

module.exports = require("re-carousel");

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
var __webpack_exports__ = __webpack_require__.X(0, [505,61,158,893,841], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();