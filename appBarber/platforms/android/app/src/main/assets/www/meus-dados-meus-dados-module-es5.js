(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["meus-dados-meus-dados-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/meus-dados/meus-dados.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/meus-dados/meus-dados.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n    <ion-title>Meus Dados</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/meus-dados/meus-dados.module.ts":
/*!*************************************************!*\
  !*** ./src/app/meus-dados/meus-dados.module.ts ***!
  \*************************************************/
/*! exports provided: MeusDadosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeusDadosPageModule", function() { return MeusDadosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _meus_dados_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meus-dados.page */ "./src/app/meus-dados/meus-dados.page.ts");







var routes = [
    {
        path: '',
        component: _meus_dados_page__WEBPACK_IMPORTED_MODULE_6__["MeusDadosPage"]
    }
];
var MeusDadosPageModule = /** @class */ (function () {
    function MeusDadosPageModule() {
    }
    MeusDadosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_meus_dados_page__WEBPACK_IMPORTED_MODULE_6__["MeusDadosPage"]]
        })
    ], MeusDadosPageModule);
    return MeusDadosPageModule;
}());



/***/ }),

/***/ "./src/app/meus-dados/meus-dados.page.scss":
/*!*************************************************!*\
  !*** ./src/app/meus-dados/meus-dados.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldXMtZGFkb3MvbWV1cy1kYWRvcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/meus-dados/meus-dados.page.ts":
/*!***********************************************!*\
  !*** ./src/app/meus-dados/meus-dados.page.ts ***!
  \***********************************************/
/*! exports provided: MeusDadosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeusDadosPage", function() { return MeusDadosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MeusDadosPage = /** @class */ (function () {
    function MeusDadosPage() {
    }
    MeusDadosPage.prototype.ngOnInit = function () {
    };
    MeusDadosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meus-dados',
            template: __webpack_require__(/*! raw-loader!./meus-dados.page.html */ "./node_modules/raw-loader/index.js!./src/app/meus-dados/meus-dados.page.html"),
            styles: [__webpack_require__(/*! ./meus-dados.page.scss */ "./src/app/meus-dados/meus-dados.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MeusDadosPage);
    return MeusDadosPage;
}());



/***/ })

}]);
//# sourceMappingURL=meus-dados-meus-dados-module-es5.js.map