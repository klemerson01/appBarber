(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conta-conta-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/conta/conta.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/conta/conta.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Conta</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/conta/conta.module.ts":
/*!***************************************!*\
  !*** ./src/app/conta/conta.module.ts ***!
  \***************************************/
/*! exports provided: ContaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContaPageModule", function() { return ContaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _conta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conta.page */ "./src/app/conta/conta.page.ts");







var routes = [
    {
        path: '',
        component: _conta_page__WEBPACK_IMPORTED_MODULE_6__["ContaPage"]
    }
];
var ContaPageModule = /** @class */ (function () {
    function ContaPageModule() {
    }
    ContaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_conta_page__WEBPACK_IMPORTED_MODULE_6__["ContaPage"]]
        })
    ], ContaPageModule);
    return ContaPageModule;
}());



/***/ }),

/***/ "./src/app/conta/conta.page.scss":
/*!***************************************!*\
  !*** ./src/app/conta/conta.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhL2NvbnRhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/conta/conta.page.ts":
/*!*************************************!*\
  !*** ./src/app/conta/conta.page.ts ***!
  \*************************************/
/*! exports provided: ContaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContaPage", function() { return ContaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContaPage = /** @class */ (function () {
    function ContaPage() {
    }
    ContaPage.prototype.ngOnInit = function () {
    };
    ContaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conta',
            template: __webpack_require__(/*! raw-loader!./conta.page.html */ "./node_modules/raw-loader/index.js!./src/app/conta/conta.page.html"),
            styles: [__webpack_require__(/*! ./conta.page.scss */ "./src/app/conta/conta.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContaPage);
    return ContaPage;
}());



/***/ })

}]);
//# sourceMappingURL=conta-conta-module-es5.js.map