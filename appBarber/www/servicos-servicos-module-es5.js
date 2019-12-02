(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicos-servicos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/servicos/servicos.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/servicos/servicos.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Servicos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/servicos/servicos.module.ts":
/*!*********************************************!*\
  !*** ./src/app/servicos/servicos.module.ts ***!
  \*********************************************/
/*! exports provided: ServicosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosPageModule", function() { return ServicosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicos.page */ "./src/app/servicos/servicos.page.ts");







var routes = [
    {
        path: '',
        component: _servicos_page__WEBPACK_IMPORTED_MODULE_6__["ServicosPage"]
    }
];
var ServicosPageModule = /** @class */ (function () {
    function ServicosPageModule() {
    }
    ServicosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_servicos_page__WEBPACK_IMPORTED_MODULE_6__["ServicosPage"]]
        })
    ], ServicosPageModule);
    return ServicosPageModule;
}());



/***/ }),

/***/ "./src/app/servicos/servicos.page.scss":
/*!*********************************************!*\
  !*** ./src/app/servicos/servicos.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY29zL3NlcnZpY29zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/servicos/servicos.page.ts":
/*!*******************************************!*\
  !*** ./src/app/servicos/servicos.page.ts ***!
  \*******************************************/
/*! exports provided: ServicosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosPage", function() { return ServicosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicosPage = /** @class */ (function () {
    function ServicosPage() {
    }
    ServicosPage.prototype.ngOnInit = function () {
    };
    ServicosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicos',
            template: __webpack_require__(/*! raw-loader!./servicos.page.html */ "./node_modules/raw-loader/index.js!./src/app/servicos/servicos.page.html"),
            styles: [__webpack_require__(/*! ./servicos.page.scss */ "./src/app/servicos/servicos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicosPage);
    return ServicosPage;
}());



/***/ })

}]);
//# sourceMappingURL=servicos-servicos-module-es5.js.map