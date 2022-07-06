"use strict";
exports.id = 516;
exports.ids = [516];
exports.modules = {

/***/ 7516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ UI_Pagination)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./utils/converter.js
function digitsToPersian(num) {
    if (!num) {
        return "\u06F0";
    }
    const farsiDigits = [
        "\u06F0",
        "\u06F1",
        "\u06F2",
        "\u06F3",
        "\u06F4",
        "\u06F5",
        "\u06F6",
        "\u06F7",
        "\u06F8",
        "\u06F9"
    ];
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,").replace(/\d/g, (x)=>farsiDigits[x]
    );
}

;// CONCATENATED MODULE: ./components/UI/Pagination.js


const Pagination = ({ className , totalPages , currentPage , onPageClick  })=>{
    let paginateButtons = [];
    for(let i = 1; i <= totalPages; i++){
        if (i === 1 || i === totalPages || i === parseInt(currentPage) || i === parseInt(currentPage) - 1 || i === parseInt(currentPage) + 1) {
            paginateButtons.push(/*#__PURE__*/ jsx_runtime_.jsx("button", {
                value: i,
                onClick: onPageClick,
                className: `paginationButton ${currentPage === i.toString() ? "paginateActive" : ""}`,
                children: digitsToPersian(i.toString())
            }, i));
        } else if (i === parseInt(currentPage) - 2 || i === parseInt(currentPage) + 2) {
            paginateButtons.push(/*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "mt-2",
                children: "..."
            }, "pagination"));
        }
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        dir: "ltr",
        className: `${className} flex justify-center gap-2`,
        children: paginateButtons
    });
};
/* harmony default export */ const UI_Pagination = (Pagination);


/***/ })

};
;