(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dados-agendamento-dados-agendamento-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/dados-agendamento/dados-agendamento.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dados-agendamento/dados-agendamento.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>DadosAgendamento</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form ng-submit=\"submit()\" class=\"form-horizontal\" novalidate>        \r\n    <div id=\"imagem\">\r\n      <a>\r\n    <img src=\"assets/icon/logo.png\" width=100 height=215 alt=\"\">\r\n    </a>\r\n    </div><br>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/dados-agendamento/dados-agendamento.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/dados-agendamento/dados-agendamento.module.ts ***!
  \***************************************************************/
/*! exports provided: DadosAgendamentoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosAgendamentoPageModule", function() { return DadosAgendamentoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dados_agendamento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dados-agendamento.page */ "./src/app/dados-agendamento/dados-agendamento.page.ts");







const routes = [
    {
        path: '',
        component: _dados_agendamento_page__WEBPACK_IMPORTED_MODULE_6__["DadosAgendamentoPage"]
    }
];
let DadosAgendamentoPageModule = class DadosAgendamentoPageModule {
};
DadosAgendamentoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_dados_agendamento_page__WEBPACK_IMPORTED_MODULE_6__["DadosAgendamentoPage"]]
    })
], DadosAgendamentoPageModule);



/***/ }),

/***/ "./src/app/dados-agendamento/dados-agendamento.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/dados-agendamento/dados-agendamento.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhZG9zLWFnZW5kYW1lbnRvL2RhZG9zLWFnZW5kYW1lbnRvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dados-agendamento/dados-agendamento.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/dados-agendamento/dados-agendamento.page.ts ***!
  \*************************************************************/
/*! exports provided: DadosAgendamentoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosAgendamentoPage", function() { return DadosAgendamentoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DadosAgendamentoPage = class DadosAgendamentoPage {
    constructor() { }
    ngOnInit() {
    }
};
DadosAgendamentoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dados-agendamento',
        template: __webpack_require__(/*! raw-loader!./dados-agendamento.page.html */ "./node_modules/raw-loader/index.js!./src/app/dados-agendamento/dados-agendamento.page.html"),
        styles: [__webpack_require__(/*! ./dados-agendamento.page.scss */ "./src/app/dados-agendamento/dados-agendamento.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DadosAgendamentoPage);



/***/ })

}]);
//# sourceMappingURL=dados-agendamento-dados-agendamento-module-es2015.js.map