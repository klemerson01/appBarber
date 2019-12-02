(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cadastro-cadastro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cadastro/cadastro.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cadastro/cadastro.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n      <ion-title>Cadastro</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n       \r\n         <ion-item>\r\n            <ion-label position=\"floating\">Nome</ion-label>\r\n            <ion-input type=\"text\" [(ngModel)]=\"name_model\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n              <ion-label position=\"floating\">Sobrenome</ion-label>\r\n              <ion-input type=\"text\" [(ngModel)]=\"sobrenome_model\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"floating\">Email</ion-label>\r\n                <ion-input type=\"email\" ng-model=\"email_model\"></ion-input>\r\n              </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Senha</ion-label>\r\n            <ion-input type=\"password\" ng-model=\"senha_model\"></ion-input>\r\n          </ion-item><br>\r\n          \r\n          <div id=\"botao\">\r\n          <ion-button  color=\"primary\"  expand=\"block\" (click)=\"insertRow()\">Cadastrar</ion-button><br>\r\n          <ion-button class=\"\" color=\"primary\" href=\"\">Voltar</ion-button><br>\r\n          </div>\r\n      \r\n     <ion-button expand=\"block\" (click)=\"createDB()\">\r\n    Create DataBase\r\n  </ion-button>\r\n \r\n  <ion-button expand=\"block\" (click)=\"createTable()\">\r\n    Create Table\r\n  </ion-button>\r\n \r\n  <ion-button expand=\"block\" (click)=\"getRows()\">\r\n    Get Rows\r\n  </ion-button>\r\n \r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        Row ID\r\n      </ion-col>\r\n      <ion-col>\r\n        Name\r\n      </ion-col>\r\n      <ion-col>\r\n        Sobrenome\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngFor=\"let item of row_data\">\r\n      <ion-col>\r\n        {{item.pid}}\r\n      </ion-col>\r\n      <ion-col>\r\n        {{item.Name}}\r\n      </ion-col>\r\n      <ion-col>\r\n        {{item.Sobrenome}}\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/cadastro/cadastro.module.ts":
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.module.ts ***!
  \*********************************************/
/*! exports provided: CadastroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function() { return CadastroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastro.page */ "./src/app/cadastro/cadastro.page.ts");







var routes = [
    {
        path: '',
        component: _cadastro_page__WEBPACK_IMPORTED_MODULE_6__["CadastroPage"]
    }
];
var CadastroPageModule = /** @class */ (function () {
    function CadastroPageModule() {
    }
    CadastroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cadastro_page__WEBPACK_IMPORTED_MODULE_6__["CadastroPage"]]
        })
    ], CadastroPageModule);
    return CadastroPageModule;
}());



/***/ }),

/***/ "./src/app/cadastro/cadastro.page.scss":
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100vw;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nbody {\n  margin: 0px;\n}\n\n#botao {\n  text-align: center;\n}\n\n#imagem {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FkYXN0cm8vQzpcXHVzZXJzXFxrbGVtZXJzb24gcm9kcmlndWVzXFxnaXRodWJcXGFwcGJhcmJlclxcYXBwYmFyYmVyL3NyY1xcYXBwXFxjYWRhc3Ryb1xcY2FkYXN0cm8ucGFnZS5zY3NzIiwic3JjL2FwcC9jYWRhc3Ryby9jYWRhc3Ryby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQWE7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDakI7O0FERWE7RUFDRyxXQUFBO0FDQ2hCOztBRENRO0VBQVEsa0JBQUE7QUNHaEI7O0FERlE7RUFBVSxrQkFBQTtBQ01sQiIsImZpbGUiOiJzcmMvYXBwL2NhZGFzdHJvL2NhZGFzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgI2JvdGFveyB0ZXh0LWFsaWduOiBjZW50ZXIgfVxyXG4gICAgICAgICNpbWFnZW0geyB0ZXh0LWFsaWduOiBjZW50ZXIgfVxyXG4gICAgICAgICAiLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4jYm90YW8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNpbWFnZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/cadastro/cadastro.page.ts":
/*!*******************************************!*\
  !*** ./src/app/cadastro/cadastro.page.ts ***!
  \*******************************************/
/*! exports provided: CadastroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPage", function() { return CadastroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var CadastroPage = /** @class */ (function () {
    function CadastroPage(platform, sqlite) {
        var _this = this;
        this.platform = platform;
        this.sqlite = sqlite;
        this.name_model = "";
        this.sobrenome_model = "";
        this.row_data = [];
        this.database_name = "database_app.db";
        this.table_name = "userstable";
        this.platform.ready().then(function () {
            _this.createDB();
        }).catch(function (error) {
            console.log(error);
        });
    }
    CadastroPage.prototype.createDB = function () {
        var _this = this;
        this.sqlite.create({
            name: this.database_name,
            location: 'default'
        })
            .then(function (db) {
            _this.databaseObj = db;
            alert('database_app Database Created!');
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    CadastroPage.prototype.createTable = function () {
        this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (pid INTEGER PRIMARY KEY, Name varchar(50), Sobrenome varchar(100))', [])
            .then(function () {
            alert('Table Created!');
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    CadastroPage.prototype.insertRow = function () {
        var _this = this;
        if (!this.name_model.length) {
            alert("Enter Name ");
            return;
        }
        if (!this.sobrenome_model.length) {
            alert("Enter  Sobrenome");
            return;
        }
        this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (Name) VALUES ' + this.name_model + ' (Sobrenome) VALUES ' + this.sobrenome_model, [])
            .then(function () {
            alert('Rows Inserted!');
            _this.getRows();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    CadastroPage.prototype.getRows = function () {
        var _this = this;
        this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
            .then(function (res) {
            _this.row_data = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.row_data.push(res.rows.item(i));
                }
            }
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    CadastroPage.prototype.deleteRow = function (item) {
        var _this = this;
        this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE pid = " + item.pid, [])
            .then(function (res) {
            alert("Row Deleted!");
            _this.getRows();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    CadastroPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] }
    ]; };
    CadastroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__(/*! raw-loader!./cadastro.page.html */ "./node_modules/raw-loader/index.js!./src/app/cadastro/cadastro.page.html"),
            styles: [__webpack_require__(/*! ./cadastro.page.scss */ "./src/app/cadastro/cadastro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"]])
    ], CadastroPage);
    return CadastroPage;
}());



/***/ })

}]);
//# sourceMappingURL=cadastro-cadastro-module-es5.js.map