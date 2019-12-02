(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profissional-profissional-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profissional/profissional.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profissional/profissional.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n  <ion-toolbar color=\"primary\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n    <ion-title>Agendar</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div class=\"container\">\r\n  <form ng-submit=\"submit()\" class=\"form-horizontal\" novalidate>        \r\n    <ion-list>\r\n        <ion-col>\r\n           <ion-label>Profissional</ion-label>\r\n          <ion-select placeholder=\"Selecione\">\r\n            <ion-select-option value=\"Alesson\">Alesson</ion-select-option>\r\n            <ion-select-option value=\"Klemerson\">Klemerson</ion-select-option>\r\n          </ion-select>\r\n        </ion-col>\r\n        <br>        \r\n        <ion-col>\r\n          <ion-label>Serviço</ion-label>\r\n          <ion-select placeholder=\"Selecione\">\r\n            <ion-select-option value=\"Cabelo\">Cabelo</ion-select-option>\r\n            <ion-select-option value=\"CabeBar\">Cabelo + Barba</ion-select-option>\r\n            <ion-select-option value=\"Barba\">Barba</ion-select-option>\r\n            <ion-select-option value=\"CabeGil\">Cabelo Giletado</ion-select-option>\r\n          </ion-select>\r\n        </ion-col>\r\n        <br>\r\n        <ion-col>\r\n            <ion-label>Atendimento</ion-label>\r\n            <ion-select placeholder=\"Selecione\">\r\n              <ion-select-option value=\"Domicilio\">Domicilio</ion-select-option>\r\n              <ion-select-option value=\"Estabelecimento\">Estabelecimento</ion-select-option>\r\n            </ion-select>\r\n          </ion-col>\r\n          <br>\r\n          <ion-item>\r\n              <ion-label>Data</ion-label>\r\n              <ion-label position=\"floating\"></ion-label>\r\n              <ion-input type=\"date\" ng-model=\"data\"></ion-input>\r\n          </ion-item>\r\n          <br>\r\n          <ion-item>\r\n              <ion-label>Hora</ion-label>\r\n              <ion-label position=\"floating\"></ion-label>\r\n              <ion-input type=\"time\" ng-model=\"Hora\"></ion-input>\r\n          </ion-item>\r\n          <br>\r\n          <div id=\"botao\">\r\n              <ion-button >Agendar</ion-button><br>\r\n              <ion-button href=\"\">Sair</ion-button><br><br>\r\n          </div>\r\n      </ion-list>\r\n  </form>\r\n</div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/profissional/profissional.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/profissional/profissional.module.ts ***!
  \*****************************************************/
/*! exports provided: ProfissionalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalPageModule", function() { return ProfissionalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profissional_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profissional.page */ "./src/app/profissional/profissional.page.ts");







var routes = [
    {
        path: '',
        component: _profissional_page__WEBPACK_IMPORTED_MODULE_6__["ProfissionalPage"]
    }
];
var ProfissionalPageModule = /** @class */ (function () {
    function ProfissionalPageModule() {
    }
    ProfissionalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profissional_page__WEBPACK_IMPORTED_MODULE_6__["ProfissionalPage"]]
        })
    ], ProfissionalPageModule);
    return ProfissionalPageModule;
}());



/***/ }),

/***/ "./src/app/profissional/profissional.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/profissional/profissional.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100vw;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nbody {\n  margin: 0px;\n}\n\n#imagem {\n  text-align: center;\n}\n\n#botao {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlzc2lvbmFsL0M6XFx1c2Vyc1xca2xlbWVyc29uIHJvZHJpZ3Vlc1xcZ2l0aHViXFxhcHBiYXJiZXJcXGFwcGJhcmJlci9zcmNcXGFwcFxccHJvZmlzc2lvbmFsXFxwcm9maXNzaW9uYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9maXNzaW9uYWwvcHJvZmlzc2lvbmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURDQTtFQUNHLFdBQUE7QUNFSDs7QURBQTtFQUFVLGtCQUFBO0FDSVY7O0FESEE7RUFBUyxrQkFBQTtBQ09UIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlzc2lvbmFsL3Byb2Zpc3Npb25hbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG59XHJcbmJvZHkge1xyXG4gICBtYXJnaW46IDBweDtcclxufVxyXG4jaW1hZ2VtIHsgdGV4dC1hbGlnbjogY2VudGVyIH1cclxuI2JvdGFvIHsgdGV4dC1hbGlnbjogY2VudGVyIH0iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4jaW1hZ2VtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jYm90YW8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/profissional/profissional.page.ts":
/*!***************************************************!*\
  !*** ./src/app/profissional/profissional.page.ts ***!
  \***************************************************/
/*! exports provided: ProfissionalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalPage", function() { return ProfissionalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfissionalPage = /** @class */ (function () {
    function ProfissionalPage() {
    }
    ProfissionalPage.prototype.ngOnInit = function () {
    };
    ProfissionalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profissional',
            template: __webpack_require__(/*! raw-loader!./profissional.page.html */ "./node_modules/raw-loader/index.js!./src/app/profissional/profissional.page.html"),
            styles: [__webpack_require__(/*! ./profissional.page.scss */ "./src/app/profissional/profissional.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfissionalPage);
    return ProfissionalPage;
}());



/***/ })

}]);
//# sourceMappingURL=profissional-profissional-module-es5.js.map