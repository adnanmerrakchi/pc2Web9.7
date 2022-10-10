(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_login_components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/login/components/login-page/login-page.component */ "./src/app/modules/login/components/login-page/login-page.component.ts");
/* harmony import */ var _modules_runs_components_runs_page_runs_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/runs/components/runs-page/runs-page.component */ "./src/app/modules/runs/components/runs-page/runs-page.component.ts");
/* harmony import */ var _modules_options_components_options_page_options_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/options/components/options-page/options-page.component */ "./src/app/modules/options/components/options-page/options-page.component.ts");
/* harmony import */ var _modules_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/core/auth/auth.guard */ "./src/app/modules/core/auth/auth.guard.ts");
/* harmony import */ var _modules_login_components_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/login/components/logout/logout.component */ "./src/app/modules/login/components/logout/logout.component.ts");
/* harmony import */ var _modules_clarifications_components_clarifications_page_clarifications_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/clarifications/components/clarifications-page/clarifications-page.component */ "./src/app/modules/clarifications/components/clarifications-page/clarifications-page.component.ts");
/* harmony import */ var _modules_scoreboard_components_scoreboard_page_scoreboard_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/scoreboard/components/scoreboard-page/scoreboard-page.component */ "./src/app/modules/scoreboard/components/scoreboard-page/scoreboard-page.component.ts");










var routes = [
    {
        path: 'login',
        component: _modules_login_components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]
    }, {
        path: 'runs',
        component: _modules_runs_components_runs_page_runs_page_component__WEBPACK_IMPORTED_MODULE_4__["RunsPageComponent"],
        canActivate: [_modules_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
        path: 'options',
        component: _modules_options_components_options_page_options_page_component__WEBPACK_IMPORTED_MODULE_5__["OptionsPageComponent"],
        canActivate: [_modules_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
        path: 'logout',
        component: _modules_login_components_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"],
        canActivate: [_modules_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
        path: 'clarifications',
        component: _modules_clarifications_components_clarifications_page_clarifications_page_component__WEBPACK_IMPORTED_MODULE_8__["ClarificationsPageComponent"],
        canActivate: [_modules_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
        path: 'scoreboard',
        component: _modules_scoreboard_components_scoreboard_page_scoreboard_page_component__WEBPACK_IMPORTED_MODULE_9__["ScoreboardPageComponent"],
        canActivate: [_modules_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/runs'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='configLoaded' class='app-container'>\n    <div class='app-header'>\n        <app-header></app-header>\n    </div>\n    <div class='app-content'>\n        <router-outlet></router-outlet>\n    </div>\n    <div class='app-footer'>\n        <app-footer></app-footer>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n  .app-container .app-content {\n    flex: 1;\n    display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvcGMyY2NzL3BjMnY5L3Byb2plY3RzL1dUSS1VSS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWSxFQUFBO0VBSGQ7SUFRSSxPQUFPO0lBQ1AsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLmFwcC1oZWFkZXIge31cblxuICAuYXBwLWNvbnRlbnQge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(_httpClient) {
        this._httpClient = _httpClient;
        this.configLoaded = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Load appconfig.json from assets directory, overwrite environment.ts
        // with these values
        this._httpClient.get('assets/appconfig.json')
            .subscribe(function (data) {
            _this.configLoaded = true;
            if (!data) {
                return;
            }
            Object.keys(data).forEach(function (key) { return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"][key] = data[key]; });
        }, function (error) {
            console.log('could not find appconfig.json in assets directory. using default values!');
            _this.configLoaded = true;
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_login_login_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/login/login.module */ "./src/app/modules/login/login.module.ts");
/* harmony import */ var _modules_core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/core/core.module */ "./src/app/modules/core/core.module.ts");
/* harmony import */ var _modules_runs_runs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/runs/runs.module */ "./src/app/modules/runs/runs.module.ts");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _modules_options_options_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/options/options.module */ "./src/app/modules/options/options.module.ts");
/* harmony import */ var _modules_clarifications_clarifications_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/clarifications/clarifications.module */ "./src/app/modules/clarifications/clarifications.module.ts");
/* harmony import */ var _modules_scoreboard_scoreboard_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/scoreboard/scoreboard.module */ "./src/app/modules/scoreboard/scoreboard.module.ts");













//import { DeviceDetectorModule } from 'ngx-device-detector';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _modules_core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _modules_login_login_module__WEBPACK_IMPORTED_MODULE_6__["LoginModule"],
                _modules_runs_runs_module__WEBPACK_IMPORTED_MODULE_8__["RunsModule"],
                _modules_options_options_module__WEBPACK_IMPORTED_MODULE_10__["OptionsModule"],
                _modules_clarifications_clarifications_module__WEBPACK_IMPORTED_MODULE_11__["ClarificationsModule"],
                _modules_scoreboard_scoreboard_module__WEBPACK_IMPORTED_MODULE_12__["ScoreboardModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/clarifications/clarifications.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/clarifications/clarifications.module.ts ***!
  \*****************************************************************/
/*! exports provided: ClarificationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClarificationsModule", function() { return ClarificationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_clarifications_page_clarifications_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/clarifications-page/clarifications-page.component */ "./src/app/modules/clarifications/components/clarifications-page/clarifications-page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_new_clarification_new_clarification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/new-clarification/new-clarification.component */ "./src/app/modules/clarifications/components/new-clarification/new-clarification.component.ts");
/* harmony import */ var _components_new_clarification_alert_new_clarification_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/new-clarification-alert/new-clarification-alert.component */ "./src/app/modules/clarifications/components/new-clarification-alert/new-clarification-alert.component.ts");








var ClarificationsModule = /** @class */ (function () {
    function ClarificationsModule() {
    }
    ClarificationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_clarifications_page_clarifications_page_component__WEBPACK_IMPORTED_MODULE_3__["ClarificationsPageComponent"],
                _components_new_clarification_new_clarification_component__WEBPACK_IMPORTED_MODULE_6__["NewClarificationComponent"],
                _components_new_clarification_alert_new_clarification_alert_component__WEBPACK_IMPORTED_MODULE_7__["NewClarificationAlertComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            exports: [],
            entryComponents: [
                _components_new_clarification_new_clarification_component__WEBPACK_IMPORTED_MODULE_6__["NewClarificationComponent"],
                _components_new_clarification_alert_new_clarification_alert_component__WEBPACK_IMPORTED_MODULE_7__["NewClarificationAlertComponent"],
            ]
        })
    ], ClarificationsModule);
    return ClarificationsModule;
}());



/***/ }),

/***/ "./src/app/modules/clarifications/components/clarifications-page/clarifications-page.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/clarifications/components/clarifications-page/clarifications-page.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='filter-table-container'>\n    <div class='filter-container'>\n        <div class='buttons'>\n            <button type='button' class='warning' (click)='newClarification()'>New Clarification</button>\n        </div>\n        <form class='filters' [formGroup]='filterForm'>\n            <h3 class='center'>Filters</h3>\n            <div>\n                <h5 class='filter-label'>Recipient</h5>\n                <label>\n                    <input type='radio' name='receipient' formControlName='receipient' value='all'>\n                    All Teams\n                </label>\n                <br />\n                <label>\n                    <input type='radio' name='receipient' formControlName='receipient' value='team'>\n                    Just My Team\n                </label>\n                <br />\n                <label>\n                    <input type='radio' name='receipient' formControlName='receipient' value=''>\n                    Both\n                </label>\n            </div>\n            <div>\n                <app-problem-selector formControlName='problem'></app-problem-selector>\n            </div>\n            <div>\n                <button class='outline' type='button' (click)='reset()'>Clear Filters</button>\n            </div>\n        </form>\n    </div>\n    <div class='table-container'>\n        <table>\n            <tr>\n                <th>Recipient</th>\n                <th>Problem</th>\n                <th>Question</th>\n                <th>Answer</th>\n                <th>Time</th>\n            </tr>\n            <tr *ngFor='let clarification of filteredClarifications' [class.pending]='!clarification.isAnswered'>\n                <td>{{ clarification.recipient }}</td>\n                <td>{{ clarification.problem }}</td>\n                <td>{{ clarification.question }}</td>\n                <td>\n                    <ng-container *ngIf='clarification.isAnswered'>\n                        {{ clarification.answer }}\n                    </ng-container>\n                    <ng-container *ngIf='!clarification.isAnswered'>\n                        <i>Answer Pending</i>\n                    </ng-container>\n                </td>\n                <td>{{ clarification.time }}</td>\n            </tr>\n        </table>\n        <div *ngIf='filteredClarifications.length == 0' class='table-message'>\n            <h3>No clarifications yet!</h3>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/clarifications/components/clarifications-page/clarifications-page.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/clarifications/components/clarifications-page/clarifications-page.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvcGMyY2NzL3BjMnY5L3Byb2plY3RzL1dUSS1VSS9zcmMvYXBwL21vZHVsZXMvY2xhcmlmaWNhdGlvbnMvY29tcG9uZW50cy9jbGFyaWZpY2F0aW9ucy1wYWdlL2NsYXJpZmljYXRpb25zLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLE9BQU8sRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2xhcmlmaWNhdGlvbnMvY29tcG9uZW50cy9jbGFyaWZpY2F0aW9ucy1wYWdlL2NsYXJpZmljYXRpb25zLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/clarifications/components/clarifications-page/clarifications-page.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/clarifications/components/clarifications-page/clarifications-page.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ClarificationsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClarificationsPageComponent", function() { return ClarificationsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_modules_core_abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/core/abstract-services/i-contest.service */ "./src/app/modules/core/abstract-services/i-contest.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _new_clarification_new_clarification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../new-clarification/new-clarification.component */ "./src/app/modules/clarifications/components/new-clarification/new-clarification.component.ts");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/auth/auth.service */ "./src/app/modules/core/auth/auth.service.ts");









var ClarificationsPageComponent = /** @class */ (function () {
    function ClarificationsPageComponent(_formBuilder, _contestService, _modalService, _authService) {
        this._formBuilder = _formBuilder;
        this._contestService = _contestService;
        this._modalService = _modalService;
        this._authService = _authService;
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.clarifications = [];
        this.filteredClarifications = [];
    }
    Object.defineProperty(ClarificationsPageComponent.prototype, "teamName", {
        get: function () { return this._authService.username; },
        enumerable: true,
        configurable: true
    });
    ClarificationsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.loadClars();
        this._contestService.clarificationsUpdated
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribe))
            .subscribe(function (_) {
            _this.loadClars();
        });
    };
    ClarificationsPageComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    ClarificationsPageComponent.prototype.newClarification = function () {
        this._modalService.open(_new_clarification_new_clarification_component__WEBPACK_IMPORTED_MODULE_7__["NewClarificationComponent"], {
            data: {},
            disableClose: true
        });
    };
    ClarificationsPageComponent.prototype.filterClarifications = function () {
        var fitlerParams = this.filterForm.value;
        var filtered = this.clarifications;
        if (fitlerParams.receipient === 'all') {
            filtered = filtered.filter(function (x) { return x.recipient === 'All'; });
        }
        if (fitlerParams.receipient === 'team') {
            filtered = filtered.filter(function (x) { return x.recipient !== 'All'; });
        }
        if (fitlerParams.problem) {
            filtered = filtered.filter(function (x) { return x.problem === fitlerParams.problem; });
        }
        this.filteredClarifications = filtered;
    };
    ClarificationsPageComponent.prototype.buildForm = function () {
        var _this = this;
        this.filterForm = this._formBuilder.group({
            receipient: [''],
            problem: [],
        });
        this.filterForm.valueChanges.subscribe(function (_) { return _this.filterClarifications(); });
    };
    ClarificationsPageComponent.prototype.loadClars = function () {
        var _this = this;
        this._contestService.getClarifications()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribe))
            .subscribe(function (data) {
            _this.clarifications = data.sort(function (x, y) { return y.time - x.time; });
            _this.filterClarifications();
        }, function (error) {
            console.error('error loading clarifications!');
            console.error(error);
        });
    };
    ClarificationsPageComponent.prototype.reset = function () {
        this.filteredClarifications = this.clarifications;
        this.buildForm();
    };
    ClarificationsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./clarifications-page.component.html */ "./src/app/modules/clarifications/components/clarifications-page/clarifications-page.component.html"),
            styles: [__webpack_require__(/*! ./clarifications-page.component.scss */ "./src/app/modules/clarifications/components/clarifications-page/clarifications-page.component.scss"), __webpack_require__(/*! ../../../../../styles/filter_table.scss */ "./src/styles/filter_table.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_modules_core_abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_3__["IContestService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], ClarificationsPageComponent);
    return ClarificationsPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/clarifications/components/new-clarification-alert/new-clarification-alert.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/clarifications/components/new-clarification-alert/new-clarification-alert.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Clarification Reply Received</h1>\n<div mat-dialog-content>\n    <p>Problem: {{ problem }}</p>\n    <p>Question: {{ question }}</p>\n    <p>Answer: {{ answer }}</p>\n</div>\n<div mat-dialog-actions>\n    <button (click)='goToClarifications()' type='button' class='warning'>Go to Clarifications</button>&nbsp;\n    <button (click)='close()' type='button' class='warning'>Close</button>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/clarifications/components/new-clarification-alert/new-clarification-alert.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/clarifications/components/new-clarification-alert/new-clarification-alert.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2xhcmlmaWNhdGlvbnMvY29tcG9uZW50cy9uZXctY2xhcmlmaWNhdGlvbi1hbGVydC9uZXctY2xhcmlmaWNhdGlvbi1hbGVydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/clarifications/components/new-clarification-alert/new-clarification-alert.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/clarifications/components/new-clarification-alert/new-clarification-alert.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: NewClarificationAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewClarificationAlertComponent", function() { return NewClarificationAlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_modules_core_abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/core/abstract-services/i-contest.service */ "./src/app/modules/core/abstract-services/i-contest.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var NewClarificationAlertComponent = /** @class */ (function () {
    function NewClarificationAlertComponent(_matDialogRef, _router, _contestService, _data) {
        this._matDialogRef = _matDialogRef;
        this._router = _router;
        this._contestService = _contestService;
        this._data = _data;
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    NewClarificationAlertComponent.prototype.ngOnInit = function () {
        this.loadClarification(this._data.id);
    };
    NewClarificationAlertComponent.prototype.goToClarifications = function () {
        this._router.navigateByUrl('/clarifications');
        this.close();
    };
    NewClarificationAlertComponent.prototype.close = function () {
        this._matDialogRef.close();
    };
    NewClarificationAlertComponent.prototype.loadClarification = function (clarId) {
        var _this = this;
        this._contestService.getClarifications()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._unsubscribe))
            .subscribe(function (clars) {
            if (clars && clars.length > 0) {
                var clar = clars.find(function (x) { return x.id === clarId; });
                if (!clar) {
                    console.error('clarification not found! invalid ID passed via websocket');
                    return;
                }
                _this.problem = clar.problem;
                _this.question = clar.question;
                _this.answer = clar.answer;
            }
        });
    };
    NewClarificationAlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-clarification-alert',
            template: __webpack_require__(/*! ./new-clarification-alert.component.html */ "./src/app/modules/clarifications/components/new-clarification-alert/new-clarification-alert.component.html"),
            styles: [__webpack_require__(/*! ./new-clarification-alert.component.scss */ "./src/app/modules/clarifications/components/new-clarification-alert/new-clarification-alert.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_modules_core_abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_4__["IContestService"], Object])
    ], NewClarificationAlertComponent);
    return NewClarificationAlertComponent;
}());



/***/ }),

/***/ "./src/app/modules/clarifications/components/new-clarification/new-clarification.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/clarifications/components/new-clarification/new-clarification.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class='newClarificationForm' [formGroup]='newClarificationForm' (ngSubmit)='submitNewClarification()'>\n    <h1 mat-dialog-title>Submit a Clarification</h1>\n    <app-problem-selector [allowGeneral]='false' formControlName='problem'></app-problem-selector>\n    <br />\n    <br />\n    <textarea placeholder='Enter Clarification...' formControlName='content'></textarea>\n    <br />\n    <br />\n    <div mat-dialog-actions>\n        <button type='button' class='warning' (click)='close()'>Cancel</button>&nbsp;\n        <button type='submit' class='warning' [disabled]='!newClarificationForm.valid'>Submit</button>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/modules/clarifications/components/new-clarification/new-clarification.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/clarifications/components/new-clarification/new-clarification.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\n  width: 30rem;\n  height: 8rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvcGMyY2NzL3BjMnY5L3Byb2plY3RzL1dUSS1VSS9zcmMvYXBwL21vZHVsZXMvY2xhcmlmaWNhdGlvbnMvY29tcG9uZW50cy9uZXctY2xhcmlmaWNhdGlvbi9uZXctY2xhcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NsYXJpZmljYXRpb25zL2NvbXBvbmVudHMvbmV3LWNsYXJpZmljYXRpb24vbmV3LWNsYXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZXh0YXJlYSB7XG4gIHdpZHRoOiAzMHJlbTtcbiAgaGVpZ2h0OiA4cmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/clarifications/components/new-clarification/new-clarification.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/clarifications/components/new-clarification/new-clarification.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: NewClarificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewClarificationComponent", function() { return NewClarificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_modules_core_models_new_clarification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/core/models/new-clarification */ "./src/app/modules/core/models/new-clarification.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_modules_core_abstract_services_i_teams_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/core/abstract-services/i-teams.service */ "./src/app/modules/core/abstract-services/i-teams.service.ts");
/* harmony import */ var src_app_modules_core_abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/core/abstract-services/i-contest.service */ "./src/app/modules/core/abstract-services/i-contest.service.ts");
/* harmony import */ var src_app_modules_core_services_ui_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/core/services/ui-helper.service */ "./src/app/modules/core/services/ui-helper.service.ts");










var NewClarificationComponent = /** @class */ (function () {
    function NewClarificationComponent(_teamService, _contestService, _formBuilder, _matDialogRef, _uiHelper) {
        this._teamService = _teamService;
        this._contestService = _contestService;
        this._formBuilder = _formBuilder;
        this._matDialogRef = _matDialogRef;
        this._uiHelper = _uiHelper;
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    NewClarificationComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    NewClarificationComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    NewClarificationComponent.prototype.submitNewClarification = function () {
        var _this = this;
        var newClarification = new src_app_modules_core_models_new_clarification__WEBPACK_IMPORTED_MODULE_4__["NewClarification"]();
        newClarification.message = this.newClarificationForm.get('content').value;
        newClarification.probName = this.newClarificationForm.get('problem').value;
        this._teamService.postClarification(newClarification)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribe))
            .subscribe(function (_) {
            _this.newClarificationForm.reset();
            _this.close();
            _this._contestService.clarificationsUpdated.next();
            _this._uiHelper.alert('Clarification has been submitted successfully!');
        }, function (error) {
            console.error('error submitting new clarification');
            console.error(error);
        });
    };
    NewClarificationComponent.prototype.close = function () {
        this._matDialogRef.close();
    };
    NewClarificationComponent.prototype.buildForm = function () {
        this.newClarificationForm = this._formBuilder.group({
            problem: [undefined, []],
            content: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    NewClarificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-clarification',
            template: __webpack_require__(/*! ./new-clarification.component.html */ "./src/app/modules/clarifications/components/new-clarification/new-clarification.component.html"),
            styles: [__webpack_require__(/*! ./new-clarification.component.scss */ "./src/app/modules/clarifications/components/new-clarification/new-clarification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_abstract_services_i_teams_service__WEBPACK_IMPORTED_MODULE_7__["ITeamsService"],
            src_app_modules_core_abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_8__["IContestService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"],
            src_app_modules_core_services_ui_helper_service__WEBPACK_IMPORTED_MODULE_9__["UiHelperService"]])
    ], NewClarificationComponent);
    return NewClarificationComponent;
}());



/***/ }),

/***/ "./src/app/modules/core/abstract-services/i-contest.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/core/abstract-services/i-contest.service.ts ***!
  \*********************************************************************/
/*! exports provided: IContestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IContestService", function() { return IContestService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var IContestService = /** @class */ (function () {
    function IContestService() {
        this.clarificationsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.contestClock = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.standingsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.isContestRunning = false;
    }
    return IContestService;
}());



/***/ }),

/***/ "./src/app/modules/core/abstract-services/i-teams.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/core/abstract-services/i-teams.service.ts ***!
  \*******************************************************************/
/*! exports provided: ITeamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITeamsService", function() { return ITeamsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var ITeamsService = /** @class */ (function () {
    function ITeamsService() {
        this.runsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    return ITeamsService;
}());



/***/ }),

/***/ "./src/app/modules/core/abstract-services/i-websocket.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/core/abstract-services/i-websocket.service.ts ***!
  \***********************************************************************/
/*! exports provided: IWebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IWebsocketService", function() { return IWebsocketService; });
var IWebsocketService = /** @class */ (function () {
    function IWebsocketService(_uiHelperService, _contestService, _teamsService, _authService) {
        this._uiHelperService = _uiHelperService;
        this._contestService = _contestService;
        this._teamsService = _teamsService;
        this._authService = _authService;
    }
    IWebsocketService.prototype.incomingMessage = function (message) {
        var _this = this;
        switch (message.type) {
            case 'test':
            case 'judged': {
                this._uiHelperService.incomingRun(message.id);
                this._teamsService.runsUpdated.next();
                break;
            }
            case 'clarification': {
                this._uiHelperService.incomingClarification(message.id);
                this._contestService.clarificationsUpdated.next();
                break;
            }
            case 'contest_clock': {
                this._contestService.getIsContestRunning()
                    .subscribe(function (val) {
                    _this._contestService.isContestRunning = val;
                    _this._contestService.contestClock.next();
                });
                break;
            }
            case 'standings': {
                console.log("got a Standings websocket message; marking standings out of date");
                this._contestService.markStandingsOutOfDate();
                break;
            }
            case 'connection_dropped': {
                console.log("Got a connection_dropped websocket message:");
                console.log(message);
                this._uiHelperService.indefinitelyDisplayedAlert("PC2 Server connection lost");
                this._authService.logout(); //invokes teamsService.logout();
                this._authService.completeLogout(); //navigates to login page
                break;
            }
            default:
                console.warn('unrecognized message on websocket:');
                console.warn(message);
        }
    };
    return IWebsocketService;
}());



/***/ }),

/***/ "./src/app/modules/core/auth/auth.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/core/auth/auth.guard.ts ***!
  \*************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/modules/core/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this._authService.isLoggedIn) {
            return true;
        }
        this._authService.redirectUrl = state.url;
        this._router.navigateByUrl('/login');
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/modules/core/auth/auth.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/core/auth/auth.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/modules/core/auth/auth.service.ts");



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(_authService) {
        this._authService = _authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var idToken = this._authService.token;
        if (idToken) {
            var cloned = req.clone({
                headers: req.headers.set('team_id', idToken)
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/modules/core/auth/auth.service.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/core/auth/auth.service.ts ***!
  \***************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _abstract_services_i_teams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-services/i-teams.service */ "./src/app/modules/core/abstract-services/i-teams.service.ts");




var AuthService = /** @class */ (function () {
    function AuthService(_teamsService, _router) {
        this._teamsService = _teamsService;
        this._router = _router;
        this._defaultRoute = '/runs';
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () { return !!this.token; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "defaultRoute", {
        get: function () { return this._defaultRoute; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () { return this._token; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "username", {
        get: function () { return this._userName; },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.completeLogin = function (tokenValue, username) {
        this._token = tokenValue;
        this._userName = username;
        this._router.navigateByUrl(this.redirectUrl || this.defaultRoute);
    };
    AuthService.prototype.login = function (loginCredentials) {
        return this._teamsService.login(loginCredentials);
    };
    AuthService.prototype.logout = function () {
        return this._teamsService.logout();
    };
    AuthService.prototype.completeLogout = function () {
        this._token = undefined;
        this._userName = undefined;
        this._router.navigateByUrl('/login');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abstract_services_i_teams_service__WEBPACK_IMPORTED_MODULE_3__["ITeamsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/modules/core/core.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/core/core.module.ts ***!
  \*********************************************/
/*! exports provided: TeamsServiceFactory, ContestServiceFactory, WebsocketServiceFactory, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsServiceFactory", function() { return TeamsServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestServiceFactory", function() { return ContestServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketServiceFactory", function() { return WebsocketServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _abstract_services_i_teams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract-services/i-teams.service */ "./src/app/modules/core/abstract-services/i-teams.service.ts");
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/teams.service */ "./src/app/modules/core/services/teams.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/modules/core/auth/auth.service.ts");
/* harmony import */ var _services_teams_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/teams.mock.service */ "./src/app/modules/core/services/teams.mock.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./abstract-services/i-contest.service */ "./src/app/modules/core/abstract-services/i-contest.service.ts");
/* harmony import */ var _services_contest_mock_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/contest.mock.service */ "./src/app/modules/core/services/contest.mock.service.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/modules/core/auth/auth.guard.ts");
/* harmony import */ var _services_contest_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/contest.service */ "./src/app/modules/core/services/contest.service.ts");
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/websocket.service */ "./src/app/modules/core/services/websocket.service.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/modules/core/auth/auth.interceptor.ts");
/* harmony import */ var _services_websocket_mock_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/websocket.mock.service */ "./src/app/modules/core/services/websocket.mock.service.ts");
/* harmony import */ var _abstract_services_i_websocket_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./abstract-services/i-websocket.service */ "./src/app/modules/core/abstract-services/i-websocket.service.ts");
/* harmony import */ var _services_ui_helper_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/ui-helper.service */ "./src/app/modules/core/services/ui-helper.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");


















function TeamsServiceFactory(http) {
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].useMock) {
        return new _services_teams_mock_service__WEBPACK_IMPORTED_MODULE_6__["TeamsMockService"]();
    }
    return new _services_teams_service__WEBPACK_IMPORTED_MODULE_4__["TeamsService"](http);
}
function ContestServiceFactory(http) {
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].useMock) {
        return new _services_contest_mock_service__WEBPACK_IMPORTED_MODULE_9__["ContestMockService"]();
    }
    return new _services_contest_service__WEBPACK_IMPORTED_MODULE_11__["ContestService"](http);
}
function WebsocketServiceFactory(injector, authService) {
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].useMock) {
        return new _services_websocket_mock_service__WEBPACK_IMPORTED_MODULE_14__["WebsocketMockService"](injector);
    }
    return new _services_websocket_service__WEBPACK_IMPORTED_MODULE_12__["WebsocketService"](injector, authService);
}
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                { provide: _abstract_services_i_teams_service__WEBPACK_IMPORTED_MODULE_3__["ITeamsService"], useFactory: TeamsServiceFactory, deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]] },
                { provide: _abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_8__["IContestService"], useFactory: ContestServiceFactory, deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]] },
                { provide: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], useClass: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"], multi: true },
                { provide: _abstract_services_i_websocket_service__WEBPACK_IMPORTED_MODULE_15__["IWebsocketService"], useFactory: WebsocketServiceFactory, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]] },
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
                _services_ui_helper_service__WEBPACK_IMPORTED_MODULE_16__["UiHelperService"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"]
            ],
            exports: [],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/modules/core/models/file-submission.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/core/models/file-submission.ts ***!
  \********************************************************/
/*! exports provided: FileSubmission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSubmission", function() { return FileSubmission; });
var FileSubmission = /** @class */ (function () {
    function FileSubmission() {
    }
    return FileSubmission;
}());



/***/ }),

/***/ "./src/app/modules/core/models/login-credentials.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/core/models/login-credentials.ts ***!
  \**********************************************************/
/*! exports provided: LoginCredentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCredentials", function() { return LoginCredentials; });
var LoginCredentials = /** @class */ (function () {
    function LoginCredentials() {
    }
    return LoginCredentials;
}());



/***/ }),

/***/ "./src/app/modules/core/models/new-clarification.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/core/models/new-clarification.ts ***!
  \**********************************************************/
/*! exports provided: NewClarification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewClarification", function() { return NewClarification; });
var NewClarification = /** @class */ (function () {
    function NewClarification() {
    }
    return NewClarification;
}());



/***/ }),

/***/ "./src/app/modules/core/models/submission.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/core/models/submission.ts ***!
  \***************************************************/
/*! exports provided: Submission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Submission", function() { return Submission; });
var Submission = /** @class */ (function () {
    function Submission() {
        this.mainFile = null;
        this.extraFiles = [];
        this.testFile = null;
        this.additionalTestFiles = [];
    }
    return Submission;
}());



/***/ }),

/***/ "./src/app/modules/core/services/contest.mock.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/core/services/contest.mock.service.ts ***!
  \***************************************************************/
/*! exports provided: ContestMockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestMockService", function() { return ContestMockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-services/i-contest.service */ "./src/app/modules/core/abstract-services/i-contest.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ContestMockService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContestMockService, _super);
    function ContestMockService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContestMockService.prototype.getLanguages = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([
            { id: '1', name: 'Java' },
            { id: '2', name: 'C#' },
            { id: '3', name: 'TypeScript' },
            { id: '4', name: 'Ruby' },
            { id: '5', name: 'Python' }
        ]);
    };
    ContestMockService.prototype.getProblems = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([
            { name: 'Dogzilla', shortName: 'A' },
            { name: 'Matrix', shortName: 'B' },
            { name: 'Two Towers', shortName: 'C' },
            { name: 'Ducks', shortName: 'D' },
            { name: 'Magic Numbers', shortName: 'E' }
        ]);
    };
    ContestMockService.prototype.getJudgements = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([
            'Wrong Answer',
            'Output Format Error',
            'Correct'
        ]);
    };
    ContestMockService.prototype.getClarifications = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([
            {
                id: '1-1',
                recipient: 'team1',
                problem: 'Dogzilla',
                question: 'I don\'t know how to solve this problem. Help plz!',
                answer: 'Lol nope!',
                time: 1556141234,
                isAnswered: true
            }, {
                id: '1-2',
                recipient: 'team1',
                problem: 'Matrix',
                question: 'I think you misspelled a word on this problem. Can you fix it?',
                answer: 'Why you gotta be so petty like that?',
                time: 1556141249,
                isAnswered: true
            }, {
                id: '1-3',
                recipient: 'All',
                problem: 'Two Towers',
                question: 'Can I pop my team\'s balloons?',
                answer: 'Ummm, sure?',
                time: 1556141235,
                isAnswered: true
            }, {
                id: '1-5',
                recipient: 'team1',
                problem: 'Two Towers',
                question: 'What if there are three towers? Should we test for that edge case?',
                answer: '',
                time: 1556141335,
                isAnswered: false
            }
        ]);
    };
    ContestMockService.prototype.getIsContestRunning = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
    };
    ContestMockService.prototype.getStandings = function () {
        //TODO: this method needs to return a legitimate (mock) team standing array!
        var json = "{\"teamStanding\":[]\"}";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(json);
    };
    ContestMockService.prototype.markStandingsOutOfDate = function () {
        //do nothing
    };
    ContestMockService.prototype.getStandingsAreCurrentFlag = function () {
        return true;
    };
    ContestMockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ContestMockService);
    return ContestMockService;
}(_abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_2__["IContestService"]));



/***/ }),

/***/ "./src/app/modules/core/services/contest.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/core/services/contest.service.ts ***!
  \**********************************************************/
/*! exports provided: ContestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestService", function() { return ContestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-services/i-contest.service */ "./src/app/modules/core/abstract-services/i-contest.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var ContestService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContestService, _super);
    function ContestService(_httpClient) {
        var _this = _super.call(this) || this;
        _this._httpClient = _httpClient;
        _this.standingsAreCurrent = false;
        return _this;
    }
    ContestService.prototype.getLanguages = function () {
        return this._httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/contest/languages");
    };
    ContestService.prototype.getProblems = function () {
        return this._httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/contest/problems");
    };
    ContestService.prototype.getJudgements = function () {
        return this._httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/contest/judgements");
    };
    ContestService.prototype.getClarifications = function () {
        return this._httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/contest/clarifications");
    };
    ContestService.prototype.getIsContestRunning = function () {
        return this._httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/contest/isRunning");
    };
    ContestService.prototype.getStandings = function () {
        console.log("ContestService.getStandings():");
        if (!this.standingsAreCurrent) {
            console.log("Standings are out of date; fetching new standings");
            this.cachedStandings = this._httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/contest/scoreboard");
            this.standingsAreCurrent = true;
        }
        else {
            console.log("Returning cached standings");
        }
        return this.cachedStandings;
    };
    ContestService.prototype.markStandingsOutOfDate = function () {
        this.standingsAreCurrent = false;
    };
    ContestService.prototype.getStandingsAreCurrentFlag = function () {
        return this.standingsAreCurrent;
    };
    ContestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ContestService);
    return ContestService;
}(_abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_2__["IContestService"]));



/***/ }),

/***/ "./src/app/modules/core/services/teams.mock.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/core/services/teams.mock.service.ts ***!
  \*************************************************************/
/*! exports provided: TeamsMockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsMockService", function() { return TeamsMockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_services_i_teams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-services/i-teams.service */ "./src/app/modules/core/abstract-services/i-teams.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var TeamsMockService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TeamsMockService, _super);
    function TeamsMockService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TeamsMockService.prototype.login = function (loginCredentials) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({
            teamName: loginCredentials.teamName,
            teamId: 'hv83h-jsh38rbdi-dhdiuhih43r'
        });
    };
    TeamsMockService.prototype.logout = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
    };
    TeamsMockService.prototype.submitRun = function (submission) {
        console.log(submission);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
    };
    TeamsMockService.prototype.getRuns = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([
            {
                id: '1-1',
                isTestRun: false,
                language: 'C#',
                problem: 'Dogzilla',
                judgement: 'Wrong Answer',
                time: 1555537910,
                results: undefined,
                isPreliminary: true
            }, {
                id: '2-1',
                isTestRun: false,
                language: 'C#',
                problem: 'Dogzilla',
                judgement: 'Output Format Error',
                time: 1555537914,
                results: undefined,
                isPreliminary: false
            }, {
                id: '3-1',
                isTestRun: true,
                language: 'C#',
                problem: 'Dogzilla',
                judgement: 'Correct',
                time: 1555537917,
                results: 'sample output would go here...\nanother line of stuff here\nmaybe a stack trace!!!',
                isPreliminary: false
            }, {
                id: '4-1',
                isTestRun: false,
                language: 'Java',
                problem: 'Dogzilla',
                judgement: 'Correct',
                time: 1555537917,
                results: undefined,
                isPreliminary: false
            }, {
                id: '5-1',
                isTestRun: false,
                language: 'Java',
                problem: 'Matrix',
                judgement: 'Correct',
                time: 1555537918,
                results: undefined,
                isPreliminary: false
            }, {
                id: '6-1',
                isTestRun: false,
                language: 'C#',
                problem: 'Ducks',
                judgement: 'Output Format Error',
                time: 1555537925,
                results: undefined,
                isPreliminary: false
            }, {
                id: '7-1',
                isTestRun: false,
                language: 'C#',
                problem: 'Magic Numbers',
                judgement: 'Correct',
                time: 1555537933,
                results: undefined,
                isPreliminary: true
            }
        ]);
    };
    TeamsMockService.prototype.postClarification = function (clarification) {
        console.log(clarification);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
    };
    TeamsMockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TeamsMockService);
    return TeamsMockService;
}(_abstract_services_i_teams_service__WEBPACK_IMPORTED_MODULE_2__["ITeamsService"]));



/***/ }),

/***/ "./src/app/modules/core/services/teams.service.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/core/services/teams.service.ts ***!
  \********************************************************/
/*! exports provided: TeamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsService", function() { return TeamsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_services_i_teams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-services/i-teams.service */ "./src/app/modules/core/abstract-services/i-teams.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var TeamsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TeamsService, _super);
    function TeamsService(_httpClient) {
        var _this = _super.call(this) || this;
        _this._httpClient = _httpClient;
        return _this;
    }
    TeamsService.prototype.login = function (loginCredentials) {
        return this._httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/teams/login", loginCredentials);
    };
    TeamsService.prototype.logout = function () {
        return this._httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/teams/logout");
    };
    TeamsService.prototype.submitRun = function (submission) {
        return this._httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/teams/run", submission);
    };
    TeamsService.prototype.getRuns = function () {
        return this._httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/teams/run");
    };
    TeamsService.prototype.postClarification = function (clarification) {
        return this._httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/teams/clarification", clarification);
    };
    TeamsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TeamsService);
    return TeamsService;
}(_abstract_services_i_teams_service__WEBPACK_IMPORTED_MODULE_2__["ITeamsService"]));



/***/ }),

/***/ "./src/app/modules/core/services/ui-helper.service.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/core/services/ui-helper.service.ts ***!
  \************************************************************/
/*! exports provided: UiHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiHelperService", function() { return UiHelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _clarifications_components_new_clarification_alert_new_clarification_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../clarifications/components/new-clarification-alert/new-clarification-alert.component */ "./src/app/modules/clarifications/components/new-clarification-alert/new-clarification-alert.component.ts");
/* harmony import */ var _runs_components_new_run_alert_new_run_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../runs/components/new-run-alert/new-run-alert.component */ "./src/app/modules/runs/components/new-run-alert/new-run-alert.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");






var UiHelperService = /** @class */ (function () {
    function UiHelperService(_dialogService, _matSnackBar) {
        this._dialogService = _dialogService;
        this._matSnackBar = _matSnackBar;
        this.enableClarificationNotifications = true;
        this.enableRunsNotifications = true;
    }
    UiHelperService.prototype.incomingClarification = function (id) {
        if (this.enableClarificationNotifications) {
            this._dialogService.open(_clarifications_components_new_clarification_alert_new_clarification_alert_component__WEBPACK_IMPORTED_MODULE_3__["NewClarificationAlertComponent"], {
                data: { id: id }
            });
        }
    };
    UiHelperService.prototype.incomingRun = function (id) {
        if (this.enableRunsNotifications) {
            this._dialogService.open(_runs_components_new_run_alert_new_run_alert_component__WEBPACK_IMPORTED_MODULE_4__["NewRunAlertComponent"], {
                data: { id: id }
            });
        }
    };
    UiHelperService.prototype.alert = function (message) {
        this._matSnackBar.open(message, 'Close', {
            duration: 4000
        });
    };
    UiHelperService.prototype.indefinitelyDisplayedAlert = function (message) {
        this._matSnackBar.open(message, 'Close', {
            duration: undefined
        });
    };
    UiHelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], UiHelperService);
    return UiHelperService;
}());



/***/ }),

/***/ "./src/app/modules/core/services/websocket.mock.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/core/services/websocket.mock.service.ts ***!
  \*****************************************************************/
/*! exports provided: WebsocketMockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketMockService", function() { return WebsocketMockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_services_i_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-services/i-websocket.service */ "./src/app/modules/core/abstract-services/i-websocket.service.ts");
/* harmony import */ var _ui_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-helper.service */ "./src/app/modules/core/services/ui-helper.service.ts");
/* harmony import */ var _abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract-services/i-contest.service */ "./src/app/modules/core/abstract-services/i-contest.service.ts");
/* harmony import */ var _abstract_services_i_teams_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstract-services/i-teams.service */ "./src/app/modules/core/abstract-services/i-teams.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/modules/core/auth/auth.service.ts");







var WebsocketMockService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WebsocketMockService, _super);
    function WebsocketMockService(_injector) {
        var _this = 
        // Manually get UiHelperService from angular DI to pass to abstract class
        // This avoids having two references to UiHelperService
        _super.call(this, _injector.get(_ui_helper_service__WEBPACK_IMPORTED_MODULE_3__["UiHelperService"]), _injector.get(_abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_4__["IContestService"]), _injector.get(_abstract_services_i_teams_service__WEBPACK_IMPORTED_MODULE_5__["ITeamsService"]), _injector.get(_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])) || this;
        _this._injector = _injector;
        console.log('firing construcitor in websocket MOCK');
        return _this;
    }
    WebsocketMockService.prototype.startWebsocket = function () {
        // no need for a socket here.... this is a mock
        console.log('[Websocket] Start websocket called!');
    };
    WebsocketMockService.prototype.stopWebsocket = function () {
        // no need for a socket here.... this is a mock
        console.log('[Websocket] Stop websocket called!');
    };
    WebsocketMockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], WebsocketMockService);
    return WebsocketMockService;
}(_abstract_services_i_websocket_service__WEBPACK_IMPORTED_MODULE_2__["IWebsocketService"]));



/***/ }),

/***/ "./src/app/modules/core/services/websocket.service.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/core/services/websocket.service.ts ***!
  \************************************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ui_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-helper.service */ "./src/app/modules/core/services/ui-helper.service.ts");
/* harmony import */ var _abstract_services_i_websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract-services/i-websocket.service */ "./src/app/modules/core/abstract-services/i-websocket.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/modules/core/auth/auth.service.ts");
/* harmony import */ var _abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../abstract-services/i-contest.service */ "./src/app/modules/core/abstract-services/i-contest.service.ts");
/* harmony import */ var _abstract_services_i_teams_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../abstract-services/i-teams.service */ "./src/app/modules/core/abstract-services/i-teams.service.ts");








var WebsocketService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WebsocketService, _super);
    function WebsocketService(_injector, _authService) {
        var _this = 
        // Manually get UiHelperService from angular DI to pass to abstract class
        // This avoids having two references to UiHelperService
        _super.call(this, _injector.get(_ui_helper_service__WEBPACK_IMPORTED_MODULE_3__["UiHelperService"]), _injector.get(_abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_6__["IContestService"]), _injector.get(_abstract_services_i_teams_service__WEBPACK_IMPORTED_MODULE_7__["ITeamsService"]), _injector.get(_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])) || this;
        _this._injector = _injector;
        _this.handleIncomingMessage = function (event) {
            var parsedData = JSON.parse(event.data);
            _this.incomingMessage(parsedData);
        };
        console.log('firing constructor in WebsocketService');
        return _this;
    }
    WebsocketService.prototype.startWebsocket = function () {
        console.log('starting websocket');
        this.socket = new WebSocket(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].websocketUrl + "/" + this._authService.token);
        this.socket.addEventListener('message', this.handleIncomingMessage);
    };
    WebsocketService.prototype.stopWebsocket = function () {
        console.log('ending websocket');
        if (this.socket) {
            this.socket.close();
            this.socket = undefined;
        }
    };
    WebsocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], WebsocketService);
    return WebsocketService;
}(_abstract_services_i_websocket_service__WEBPACK_IMPORTED_MODULE_4__["IWebsocketService"]));



/***/ }),

/***/ "./src/app/modules/login/components/login-page/login-page.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/login/components/login-page/login-page.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='login-page-container'>\n    <div class='login-container'>\n        <form [formGroup]='formGroup' (ngSubmit)='onSubmit()'>\n            <h4 class='header'>PC^2 Team Login</h4>\n            <div>\n                <input type='text' placeholder='username' formControlName='username'>\n            </div>\n            <div>\n                <input type='password' placeholder='password' formControlName='password'>\n            </div>\n            <div *ngIf='invalidCreds' class='invalid'>Invalid Credentials!</div>\n            <button class='submit-btn warning' type='submit' [disabled]='!formGroup.valid || loginStarted'>\n                {{ loginStarted ? 'Logging in...' : 'Log In' }}\n            </button>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/login/components/login-page/login-page.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/login/components/login-page/login-page.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex: 1; }\n\n.login-page-container {\n  background-image: url(\"/assets/login-bg.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex: 1; }\n\n.login-container {\n  max-width: 35rem;\n  margin: auto;\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 2rem;\n  border-radius: 5px; }\n\n.login-container form > div {\n    margin-bottom: 0.5rem; }\n\n.login-container form > div:last-of-type {\n    margin-bottom: 0; }\n\n.login-container .header {\n    margin-bottom: 1.5rem; }\n\n.login-container .invalid {\n    color: #dc3545; }\n\n.login-container .submit-btn {\n    margin-top: 1.5rem;\n    margin-left: auto;\n    display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvcGMyY2NzL3BjMnY5L3Byb2plY3RzL1dUSS1VSS9zcmMvYXBwL21vZHVsZXMvbG9naW4vY29tcG9uZW50cy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIvYnVpbGRzL3BjMmNjcy9wYzJ2OS9wcm9qZWN0cy9XVEktVUkvc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTyxFQUFBOztBQUdUO0VBQ0UsNkNBQTZDO0VBQzdDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLE9BQU8sRUFBQTs7QUFHVDtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osMENBQXVDO0VBQ3ZDLGFBQWE7RUFDYixrQkNGaUIsRUFBQTs7QURIbkI7SUFPZSxxQkNWUyxFQUFBOztBREd4QjtJQVE0QixnQkFBZ0IsRUFBQTs7QUFSNUM7SUFTWSxxQkFBcUIsRUFBQTs7QUFUakM7SUFVYSxjQ2hCRyxFQUFBOztBRE1oQjtJQWFJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpbi9jb21wb25lbnRzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG59XG5cbi5sb2dpbi1wYWdlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9sb2dpbi1iZy5qcGcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMzVyZW07XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcblxuICBmb3JtID4gZGl2IHsgbWFyZ2luLWJvdHRvbTogJGNvbnRyb2wtcGFkZGluZzsgfVxuICBmb3JtID4gZGl2Omxhc3Qtb2YtdHlwZSB7IG1hcmdpbi1ib3R0b206IDA7IH1cbiAgLmhlYWRlciB7IG1hcmdpbi1ib3R0b206IDEuNXJlbTsgfVxuICAuaW52YWxpZCB7IGNvbG9yOiAkZGFuZ2VyOyB9XG5cbiAgLnN1Ym1pdC1idG4ge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuIiwiJGJnLW1haW46ICNmZmY7XG4kYmctbGlnaHQ6ICNGMkYyRjI7XG4kYm9yZGVyMTogI2NjYztcbiRiZy1hY2NlbnQ6ICMxNDM3NUY7XG4kYmctYWx0OiAjMTUzODYwO1xuXG4kcHJpbWFyeTogIzAwN2JmZiA7XG4kc2Vjb25kYXJ5OiAjODI4MjgyO1xuJHN1Y2Nlc3M6ICMyOGE3NDU7XG4kZGFuZ2VyOiAjZGMzNTQ1O1xuJHdhcm5pbmc6ICNmZmMxMDc7XG5cbiRjb250cm9sLXBhZGRpbmc6IDAuNXJlbTtcbiRjb250YWluZXItcGFkZGluZzogMnJlbTtcbiRmb250LXN0YWNrOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiRzaGFkb3cxOiAwcHggMnB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiRzaGFkb3cyOiAwcHggMXB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuJHNoYWRvdzM6IDBweCAwcHggNHB4IDBweCByZ2JhKDAsMCwwLDAuMTUpO1xuJGJvcmRlci1yYWRpdXM6IDVweDtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/login/components/login-page/login-page.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/login/components/login-page/login-page.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_modules_core_models_login_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/core/models/login-credentials */ "./src/app/modules/core/models/login-credentials.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_modules_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/core/auth/auth.service */ "./src/app/modules/core/auth/auth.service.ts");
/* harmony import */ var src_app_modules_core_abstract_services_i_websocket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/core/abstract-services/i-websocket.service */ "./src/app/modules/core/abstract-services/i-websocket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_modules_core_abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/core/abstract-services/i-contest.service */ "./src/app/modules/core/abstract-services/i-contest.service.ts");










var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(_formBuilder, _authService, _websocketService, _router, _contestService) {
        this._formBuilder = _formBuilder;
        this._authService = _authService;
        this._websocketService = _websocketService;
        this._router = _router;
        this._contestService = _contestService;
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.invalidCreds = false;
        this.loginStarted = false;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        if (this._authService.token) {
            this._router.navigateByUrl(this._authService.defaultRoute);
        }
        this.buildForm();
    };
    LoginPageComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    LoginPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginStarted = true;
        var loginCreds = new src_app_modules_core_models_login_credentials__WEBPACK_IMPORTED_MODULE_3__["LoginCredentials"]();
        loginCreds.teamName = this.formGroup.get('username').value;
        loginCreds.password = this.formGroup.get('password').value;
        this._authService.login(loginCreds)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribe))
            .subscribe(function (result) {
            _this._authService.completeLogin(result.teamId, result.teamName);
            _this._websocketService.startWebsocket();
            _this._contestService.getIsContestRunning()
                .subscribe(function (val) {
                _this._contestService.isContestRunning = val;
                _this._contestService.contestClock.next();
            });
        }, function (error) {
            _this.invalidCreds = true;
            _this.loginStarted = false;
        });
    };
    LoginPageComponent.prototype.buildForm = function () {
        this.formGroup = this._formBuilder.group({
            username: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/modules/login/components/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/modules/login/components/login-page/login-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_modules_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            src_app_modules_core_abstract_services_i_websocket_service__WEBPACK_IMPORTED_MODULE_7__["IWebsocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            src_app_modules_core_abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_9__["IContestService"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/login/components/logout/logout.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/login/components/logout/logout.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Logging out, please wait...\n"

/***/ }),

/***/ "./src/app/modules/login/components/logout/logout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/login/components/logout/logout.component.ts ***!
  \*********************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modules_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/core/auth/auth.service */ "./src/app/modules/core/auth/auth.service.ts");
/* harmony import */ var src_app_modules_core_abstract_services_i_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/core/abstract-services/i-websocket.service */ "./src/app/modules/core/abstract-services/i-websocket.service.ts");




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(_authService, _websocketService) {
        this._authService = _authService;
        this._websocketService = _websocketService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.logout()
            .subscribe(function (_) {
            _this._websocketService.stopWebsocket();
            _this._authService.completeLogout();
        }, function (error) {
            _this._authService.completeLogout();
        });
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/modules/login/components/logout/logout.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_app_modules_core_abstract_services_i_websocket_service__WEBPACK_IMPORTED_MODULE_3__["IWebsocketService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/modules/login/login.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/login/login.module.ts ***!
  \***********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login-page/login-page.component */ "./src/app/modules/login/components/login-page/login-page.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/modules/login/components/logout/logout.component.ts");






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"],
                _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            exports: []
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/modules/options/components/change-password/change-password.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/options/components/change-password/change-password.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]='changePWForm'>\n    <h1 mat-dialog-title>Change Your Password</h1>\n    <input type='password' formControlName='oldPassword' placeholder='Current Password'>\n    <br />\n    <br />\n    <input type='password' formControlName='newPassword' placeholder='New Password'>\n    <br />\n    <br />\n    <input type='password' formControlName='repeatNewPassword' placeholder='Repeat New Password'>\n    <br />\n    <br />\n    <div mat-dialog-actions>\n        <button type='button' (click)='close()'>Cancel</button>&nbsp;\n        <button type='submit' [disabled]='!changePWForm.valid'>Change</button>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/modules/options/components/change-password/change-password.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/options/components/change-password/change-password.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3B0aW9ucy9jb21wb25lbnRzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/options/components/change-password/change-password.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/options/components/change-password/change-password.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");




var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(_formBuilder, _dialogRef) {
        this._formBuilder = _formBuilder;
        this._dialogRef = _dialogRef;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.buildPWForm();
    };
    ChangePasswordComponent.prototype.close = function () {
        this._dialogRef.close();
    };
    ChangePasswordComponent.prototype.buildPWForm = function () {
        this.changePWForm = this._formBuilder.group({
            oldPassword: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            newPassword: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            repeatNewPassword: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/modules/options/components/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/modules/options/components/change-password/change-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/modules/options/components/options-page/options-page.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/options/components/options-page/options-page.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='options-container'>\n    <div>\n        <h2>Change Password</h2>\n        <p>Change your team login password. (Currently not implemented)</p>\n        <button type='button' class='warning' (click)='openChangePW()' [disabled]='true'>Change Password</button>\n    </div>\n    <div>\n        <h2>Notifications</h2>\n        <p>You can enable or disable pop-up alerts when clarifications and run judgements are received from the contest judges.</p>\n        <div class='not-container'>\n            <div>\n                <h4>Clarifications</h4>\n                <label><input type='radio' [(ngModel)]='clarsNotificationsEnabled' name='popupsEnabledClar' [value]='true'> Enable Pop-ups</label>\n                <br />\n                <label><input type='radio' [(ngModel)]='clarsNotificationsEnabled' name='popupsEnabledClar' [value]='false'> Disable Pop-ups</label>\n            </div>\n            <div>\n                <h4>Runs</h4>\n                <label><input type='radio' [(ngModel)]='runsNotificationsEnabled' name='popupsEnabledRun' [value]='true'> Enable Pop-ups</label>\n                <br />\n                <label><input type='radio' [(ngModel)]='runsNotificationsEnabled' name='popupsEnabledRun' [value]='false'> Disable Pop-ups</label>\n            </div>\n        </div>\n\n    </div>\n</div>\n<app-websocket-debug *ngIf='showWebsocketDebug()'></app-websocket-debug>\n"

/***/ }),

/***/ "./src/app/modules/options/components/options-page/options-page.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/options/components/options-page/options-page.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex: 1; }\n\n.options-container > div {\n  padding: 2rem; }\n\n.options-container .not-container {\n  display: flex; }\n\n.options-container .not-container > div {\n    margin-right: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvcGMyY2NzL3BjMnY5L3Byb2plY3RzL1dUSS1VSS9zcmMvYXBwL21vZHVsZXMvb3B0aW9ucy9jb21wb25lbnRzL29wdGlvbnMtcGFnZS9vcHRpb25zLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIvYnVpbGRzL3BjMmNjcy9wYzJ2OS9wcm9qZWN0cy9XVEktVUkvc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLE9BQU8sRUFBQTs7QUFHVDtFQUVJLGFDR29CLEVBQUE7O0FETHhCO0VBTUksYUFBYSxFQUFBOztBQU5qQjtJQVFNLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vcHRpb25zL2NvbXBvbmVudHMvb3B0aW9ucy1wYWdlL29wdGlvbnMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG59XG5cbi5vcHRpb25zLWNvbnRhaW5lciB7XG4gICYgPiBkaXYge1xuICAgIHBhZGRpbmc6ICRjb250YWluZXItcGFkZGluZztcbiAgfVxuXG4gIC5ub3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgICYgPiBkaXYge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cbiAgfVxufVxuIiwiJGJnLW1haW46ICNmZmY7XG4kYmctbGlnaHQ6ICNGMkYyRjI7XG4kYm9yZGVyMTogI2NjYztcbiRiZy1hY2NlbnQ6ICMxNDM3NUY7XG4kYmctYWx0OiAjMTUzODYwO1xuXG4kcHJpbWFyeTogIzAwN2JmZiA7XG4kc2Vjb25kYXJ5OiAjODI4MjgyO1xuJHN1Y2Nlc3M6ICMyOGE3NDU7XG4kZGFuZ2VyOiAjZGMzNTQ1O1xuJHdhcm5pbmc6ICNmZmMxMDc7XG5cbiRjb250cm9sLXBhZGRpbmc6IDAuNXJlbTtcbiRjb250YWluZXItcGFkZGluZzogMnJlbTtcbiRmb250LXN0YWNrOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiRzaGFkb3cxOiAwcHggMnB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiRzaGFkb3cyOiAwcHggMXB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuJHNoYWRvdzM6IDBweCAwcHggNHB4IDBweCByZ2JhKDAsMCwwLDAuMTUpO1xuJGJvcmRlci1yYWRpdXM6IDVweDtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/options/components/options-page/options-page.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/options/components/options-page/options-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OptionsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsPageComponent", function() { return OptionsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../change-password/change-password.component */ "./src/app/modules/options/components/change-password/change-password.component.ts");
/* harmony import */ var src_app_modules_core_services_ui_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/core/services/ui-helper.service */ "./src/app/modules/core/services/ui-helper.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var OptionsPageComponent = /** @class */ (function () {
    function OptionsPageComponent(_dialogSvc, _uiHelperService) {
        this._dialogSvc = _dialogSvc;
        this._uiHelperService = _uiHelperService;
    }
    Object.defineProperty(OptionsPageComponent.prototype, "clarsNotificationsEnabled", {
        get: function () { return this._uiHelperService.enableClarificationNotifications; },
        set: function (newval) { this._uiHelperService.enableClarificationNotifications = newval; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionsPageComponent.prototype, "runsNotificationsEnabled", {
        get: function () { return this._uiHelperService.enableRunsNotifications; },
        set: function (newval) { this._uiHelperService.enableRunsNotifications = newval; },
        enumerable: true,
        configurable: true
    });
    OptionsPageComponent.prototype.ngOnInit = function () { };
    OptionsPageComponent.prototype.showWebsocketDebug = function () {
        return !!src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].useMock;
    };
    OptionsPageComponent.prototype.openChangePW = function () {
        this._dialogSvc.open(_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordComponent"]);
    };
    OptionsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./options-page.component.html */ "./src/app/modules/options/components/options-page/options-page.component.html"),
            styles: [__webpack_require__(/*! ./options-page.component.scss */ "./src/app/modules/options/components/options-page/options-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            src_app_modules_core_services_ui_helper_service__WEBPACK_IMPORTED_MODULE_4__["UiHelperService"]])
    ], OptionsPageComponent);
    return OptionsPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/options/components/websocket-debug/websocket-debug.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/options/components/websocket-debug/websocket-debug.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='websocket-container'>\n    <h2>Trigger Websocket Events</h2>\n    <p>This is for teesting or debugging purposes!</p>\n    <button (click)='newClarification()' type=\"button\">Trigger new clarification</button>&nbsp;\n    <button (click)='newJudgedRun()' type=\"button\">Trigger new judged run</button>&nbsp;\n    <button (click)='newTestRun()' type=\"button\">Trigger new test run</button>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/options/components/websocket-debug/websocket-debug.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/options/components/websocket-debug/websocket-debug.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".websocket-container {\n  padding: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvcGMyY2NzL3BjMnY5L3Byb2plY3RzL1dUSS1VSS9zcmMvYXBwL21vZHVsZXMvb3B0aW9ucy9jb21wb25lbnRzL3dlYnNvY2tldC1kZWJ1Zy93ZWJzb2NrZXQtZGVidWcuY29tcG9uZW50LnNjc3MiLCIvYnVpbGRzL3BjMmNjcy9wYzJ2OS9wcm9qZWN0cy9XVEktVUkvc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQ1VzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vcHRpb25zL2NvbXBvbmVudHMvd2Vic29ja2V0LWRlYnVnL3dlYnNvY2tldC1kZWJ1Zy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xuXG4ud2Vic29ja2V0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6ICRjb250YWluZXItcGFkZGluZztcbn1cbiIsIiRiZy1tYWluOiAjZmZmO1xuJGJnLWxpZ2h0OiAjRjJGMkYyO1xuJGJvcmRlcjE6ICNjY2M7XG4kYmctYWNjZW50OiAjMTQzNzVGO1xuJGJnLWFsdDogIzE1Mzg2MDtcblxuJHByaW1hcnk6ICMwMDdiZmYgO1xuJHNlY29uZGFyeTogIzgyODI4MjtcbiRzdWNjZXNzOiAjMjhhNzQ1O1xuJGRhbmdlcjogI2RjMzU0NTtcbiR3YXJuaW5nOiAjZmZjMTA3O1xuXG4kY29udHJvbC1wYWRkaW5nOiAwLjVyZW07XG4kY29udGFpbmVyLXBhZGRpbmc6IDJyZW07XG4kZm9udC1zdGFjazogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4kc2hhZG93MTogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4kc2hhZG93MjogMHB4IDFweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiRzaGFkb3czOiAwcHggMHB4IDRweCAwcHggcmdiYSgwLDAsMCwwLjE1KTtcbiRib3JkZXItcmFkaXVzOiA1cHg7XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/options/components/websocket-debug/websocket-debug.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/options/components/websocket-debug/websocket-debug.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: WebsocketDebugComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketDebugComponent", function() { return WebsocketDebugComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modules_core_abstract_services_i_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/core/abstract-services/i-websocket.service */ "./src/app/modules/core/abstract-services/i-websocket.service.ts");



var WebsocketDebugComponent = /** @class */ (function () {
    function WebsocketDebugComponent(_websocketService) {
        this._websocketService = _websocketService;
    }
    WebsocketDebugComponent.prototype.ngOnInit = function () {
    };
    WebsocketDebugComponent.prototype.newClarification = function () {
        var mockedClar = { type: 'clarification', id: '1-3' };
        this._websocketService.incomingMessage(mockedClar);
    };
    WebsocketDebugComponent.prototype.newJudgedRun = function () {
        var mockedRun = { type: 'judged', id: '1-1' };
        this._websocketService.incomingMessage(mockedRun);
    };
    WebsocketDebugComponent.prototype.newTestRun = function () {
        var mockedRun = { type: 'judged', id: '3-1' };
        this._websocketService.incomingMessage(mockedRun);
    };
    WebsocketDebugComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-websocket-debug',
            template: __webpack_require__(/*! ./websocket-debug.component.html */ "./src/app/modules/options/components/websocket-debug/websocket-debug.component.html"),
            styles: [__webpack_require__(/*! ./websocket-debug.component.scss */ "./src/app/modules/options/components/websocket-debug/websocket-debug.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_abstract_services_i_websocket_service__WEBPACK_IMPORTED_MODULE_2__["IWebsocketService"]])
    ], WebsocketDebugComponent);
    return WebsocketDebugComponent;
}());



/***/ }),

/***/ "./src/app/modules/options/options.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/options/options.module.ts ***!
  \***************************************************/
/*! exports provided: OptionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsModule", function() { return OptionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_options_page_options_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/options-page/options-page.component */ "./src/app/modules/options/components/options-page/options-page.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "./src/app/modules/options/components/change-password/change-password.component.ts");
/* harmony import */ var _components_websocket_debug_websocket_debug_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/websocket-debug/websocket-debug.component */ "./src/app/modules/options/components/websocket-debug/websocket-debug.component.ts");








var OptionsModule = /** @class */ (function () {
    function OptionsModule() {
    }
    OptionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_options_page_options_page_component__WEBPACK_IMPORTED_MODULE_2__["OptionsPageComponent"],
                _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordComponent"],
                _components_websocket_debug_websocket_debug_component__WEBPACK_IMPORTED_MODULE_7__["WebsocketDebugComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            exports: [],
            entryComponents: [
                _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordComponent"]
            ]
        })
    ], OptionsModule);
    return OptionsModule;
}());



/***/ }),

/***/ "./src/app/modules/runs/components/new-run-alert/new-run-alert.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/runs/components/new-run-alert/new-run-alert.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Run Results Received</h1>\n<div mat-dialog-content>\n    <p>Type: {{ type }}</p>\n    <p>Problem: {{ problem }}</p>\n    <p>Judgement: {{ judgement }}</p>\n    <p *ngIf='isPreliminary' style=\"color:red\">This is a preliminary judgement!</p>\n</div>\n<div mat-dialog-actions>\n    <button (click)='goToRuns()' type='button' class='warning'>Go to Runs</button>&nbsp;\n    <button (click)='close()' type='button' class='warning'>Close</button>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/runs/components/new-run-alert/new-run-alert.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/runs/components/new-run-alert/new-run-alert.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcnVucy9jb21wb25lbnRzL25ldy1ydW4tYWxlcnQvbmV3LXJ1bi1hbGVydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/runs/components/new-run-alert/new-run-alert.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/runs/components/new-run-alert/new-run-alert.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NewRunAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRunAlertComponent", function() { return NewRunAlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modules_core_abstract_services_i_teams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/core/abstract-services/i-teams.service */ "./src/app/modules/core/abstract-services/i-teams.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var NewRunAlertComponent = /** @class */ (function () {
    function NewRunAlertComponent(_matDialogRef, _router, _teamsService, _data) {
        this._matDialogRef = _matDialogRef;
        this._router = _router;
        this._teamsService = _teamsService;
        this._data = _data;
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    NewRunAlertComponent.prototype.ngOnInit = function () {
        this.loadRun(this._data.id);
    };
    NewRunAlertComponent.prototype.goToRuns = function () {
        this._router.navigateByUrl('/runs');
        this.close();
    };
    NewRunAlertComponent.prototype.close = function () {
        this._matDialogRef.close();
    };
    NewRunAlertComponent.prototype.loadRun = function (runId) {
        var _this = this;
        this._teamsService.getRuns()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribe))
            .subscribe(function (runs) {
            if (runs && runs.length > 0) {
                var latest = runs.find(function (x) { return x.id === runId; });
                if (!latest) {
                    console.error('run not found! invalid ID passed via websocket!');
                    return;
                }
                _this.type = latest.isTestRun ? 'Test' : 'Judged';
                _this.problem = latest.problem;
                _this.judgement = latest.judgement;
                _this.isPreliminary = latest.isPreliminary;
            }
        });
    };
    NewRunAlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-run-alert',
            template: __webpack_require__(/*! ./new-run-alert.component.html */ "./src/app/modules/runs/components/new-run-alert/new-run-alert.component.html"),
            styles: [__webpack_require__(/*! ./new-run-alert.component.scss */ "./src/app/modules/runs/components/new-run-alert/new-run-alert.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_modules_core_abstract_services_i_teams_service__WEBPACK_IMPORTED_MODULE_2__["ITeamsService"], Object])
    ], NewRunAlertComponent);
    return NewRunAlertComponent;
}());



/***/ }),

/***/ "./src/app/modules/runs/components/new-run/new-run.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/runs/components/new-run/new-run.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]='newSubmissionForm' (ngSubmit)='onSubmitProblem()'>\n    <h1 mat-dialog-title *ngIf=\"submitType === 'judged'\">Submit a Problem</h1>\n    <h1 mat-dialog-title *ngIf=\"submitType === 'test'\">Submit a Test Problem</h1>\n    <div mat-dialog-content>\n        <app-problem-selector formControlName='problem'></app-problem-selector>\n        <br />\n        <app-language-selector formControlName='language'></app-language-selector>\n        <br />\n        <div class='file-uploads'>\n            <label (drop)='onDrop($event)' (dragover)='dragOver($event)' class='file'>\n                <div class='label'>*Main File</div>\n                <div class='icon'></div>\n                <input #fileInput type='file' (change)=\"onFileChange('main', $event)\" />\n                <div *ngIf='mainFile' class='small'>{{ mainFile.fileName }}</div>\n            </label>\n            <label class='file'>\n                <div class='label'>Additional File(s)</div>\n                <div class='icon'></div>\n                <input #fileInput type='file' multiple (change)=\"onFileChange('additional', $event)\" />\n                <div *ngFor='let file of additionalFiles' class='small'>{{ file.fileName }}</div>\n            </label>\n            <ng-container *ngIf=\"submitType === 'test'\">\n                <label class='file'>\n                    <div class='label'>*Test Data File(s)</div>\n                    <div class='icon'></div>\n                    <input #fileInput type='file' multiple (change)=\"onFileChange('testdata', $event)\" />\n                    <div *ngFor='let file of testFiles' class='small'>{{ file.fileName }}</div>\n                </label>\n            </ng-container>\n        </div>\n    </div>\n    <div mat-dialog-actions>\n        <button type='button' class='warning' (click)='close()'>Cancel</button>&nbsp;\n        <button type='button' class='warning' (click)='clearFiles()'>Clear Files</button>&nbsp;\n        <button type='submit' class='warning' [disabled]='!isReadyToSubmit()'>Submit</button>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/modules/runs/components/new-run/new-run.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/runs/components/new-run/new-run.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".file-uploads {\n  display: flex;\n  flex-direction: row; }\n\n.file {\n  min-height: 10rem;\n  min-width: 10rem;\n  flex: 1;\n  padding: 1rem;\n  margin-right: 1rem;\n  border: 1px dashed #14375F;\n  border-radius: 6px;\n  background-color: #f4f4f4;\n  color: #14375F;\n  display: flex;\n  flex-direction: column;\n  cursor: pointer; }\n\n.file:last-of-type {\n    margin-right: 0; }\n\n.file .small {\n    font-size: 0.85rem;\n    overflow: hidden; }\n\n.file .label {\n    text-align: center; }\n\n.file .icon {\n    flex-grow: 1;\n    background-image: url(\"/assets/upload.png\");\n    background-repeat: no-repeat;\n    background-position: center; }\n\n.file input {\n    height: 0.1px;\n    width: 0.1px;\n    overflow: hidden;\n    opacity: 0;\n    position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvcGMyY2NzL3BjMnY5L3Byb2plY3RzL1dUSS1VSS9zcmMvYXBwL21vZHVsZXMvcnVucy9jb21wb25lbnRzL25ldy1ydW4vbmV3LXJ1bi5jb21wb25lbnQuc2NzcyIsIi9idWlsZHMvcGMyY2NzL3BjMnY5L3Byb2plY3RzL1dUSS1VSS9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBCQ1ZpQjtFRFdqQixrQkFBbUM7RUFDbkMseUJBQXlCO0VBQ3pCLGNDYmlCO0VEY2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZSxFQUFBOztBQVpqQjtJQWNtQixlQUFlLEVBQUE7O0FBZGxDO0lBaUJJLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTs7QUFsQnBCO0lBc0JJLGtCQUFrQixFQUFBOztBQXRCdEI7SUEwQkksWUFBWTtJQUNaLDJDQUEyQztJQUMzQyw0QkFBNEI7SUFDNUIsMkJBQTJCLEVBQUE7O0FBN0IvQjtJQWlDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3J1bnMvY29tcG9uZW50cy9uZXctcnVuL25ldy1ydW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcblxuLmZpbGUtdXBsb2FkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5maWxlIHtcbiAgbWluLWhlaWdodDogMTByZW07XG4gIG1pbi13aWR0aDogMTByZW07XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICRiZy1hY2NlbnQ7XG4gIGJvcmRlci1yYWRpdXM6ICgkYm9yZGVyLXJhZGl1cyArIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICBjb2xvcjogJGJnLWFjY2VudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6bGFzdC1vZi10eXBlIHsgbWFyZ2luLXJpZ2h0OiAwOyB9XG5cbiAgLnNtYWxsIHtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5sYWJlbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmljb24ge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvdXBsb2FkLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIGhlaWdodDogMC4xcHg7XG4gICAgd2lkdGg6IDAuMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbn1cbiIsIiRiZy1tYWluOiAjZmZmO1xuJGJnLWxpZ2h0OiAjRjJGMkYyO1xuJGJvcmRlcjE6ICNjY2M7XG4kYmctYWNjZW50OiAjMTQzNzVGO1xuJGJnLWFsdDogIzE1Mzg2MDtcblxuJHByaW1hcnk6ICMwMDdiZmYgO1xuJHNlY29uZGFyeTogIzgyODI4MjtcbiRzdWNjZXNzOiAjMjhhNzQ1O1xuJGRhbmdlcjogI2RjMzU0NTtcbiR3YXJuaW5nOiAjZmZjMTA3O1xuXG4kY29udHJvbC1wYWRkaW5nOiAwLjVyZW07XG4kY29udGFpbmVyLXBhZGRpbmc6IDJyZW07XG4kZm9udC1zdGFjazogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4kc2hhZG93MTogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4kc2hhZG93MjogMHB4IDFweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiRzaGFkb3czOiAwcHggMHB4IDRweCAwcHggcmdiYSgwLDAsMCwwLjE1KTtcbiRib3JkZXItcmFkaXVzOiA1cHg7XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/runs/components/new-run/new-run.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/runs/components/new-run/new-run.component.ts ***!
  \**********************************************************************/
/*! exports provided: NewRunComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRunComponent", function() { return NewRunComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_modules_core_models_file_submission__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/core/models/file-submission */ "./src/app/modules/core/models/file-submission.ts");
/* harmony import */ var src_app_modules_core_models_submission__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/core/models/submission */ "./src/app/modules/core/models/submission.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_modules_core_abstract_services_i_teams_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/core/abstract-services/i-teams.service */ "./src/app/modules/core/abstract-services/i-teams.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _core_services_ui_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/services/ui-helper.service */ "./src/app/modules/core/services/ui-helper.service.ts");










var NewRunComponent = /** @class */ (function () {
    function NewRunComponent(_teamService, _formBuilder, _matDialogRef, _uiHelper, data) {
        this._teamService = _teamService;
        this._formBuilder = _formBuilder;
        this._matDialogRef = _matDialogRef;
        this._uiHelper = _uiHelper;
        this.data = data;
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.additionalFiles = [];
        this.testFiles = [];
    }
    NewRunComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.submitType = this.data.submitType;
    };
    NewRunComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    NewRunComponent.prototype.isReadyToSubmit = function () {
        if (this.submitType === 'judged') {
            return this.newSubmissionForm.valid && !!this.mainFile;
        }
        return this.newSubmissionForm.valid && !!this.mainFile && this.testFiles.length > 0;
    };
    NewRunComponent.prototype.dragOver = function (event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };
    NewRunComponent.prototype.onDrop = function (event) {
        event.preventDefault();
    };
    NewRunComponent.prototype.onFileChange = function (source, event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var files, i, _a, _b, _c, _d, _e, _f;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_g) {
                switch (_g.label) {
                    case 0:
                        files = event.target.files;
                        i = 0;
                        _g.label = 1;
                    case 1:
                        if (!(i < files.length)) return [3 /*break*/, 9];
                        _a = source;
                        switch (_a) {
                            case 'main': return [3 /*break*/, 2];
                            case 'additional': return [3 /*break*/, 4];
                            case 'testdata': return [3 /*break*/, 6];
                        }
                        return [3 /*break*/, 8];
                    case 2:
                        _b = this;
                        return [4 /*yield*/, this.buildFileSubmission(files[i])];
                    case 3:
                        _b.mainFile = _g.sent();
                        return [3 /*break*/, 8];
                    case 4:
                        _d = (_c = this.additionalFiles).push;
                        return [4 /*yield*/, this.buildFileSubmission(files[i])];
                    case 5:
                        _d.apply(_c, [_g.sent()]);
                        return [3 /*break*/, 8];
                    case 6:
                        _f = (_e = this.testFiles).push;
                        return [4 /*yield*/, this.buildFileSubmission(files[i])];
                    case 7:
                        _f.apply(_e, [_g.sent()]);
                        return [3 /*break*/, 8];
                    case 8:
                        i++;
                        return [3 /*break*/, 1];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    NewRunComponent.prototype.close = function () {
        this._matDialogRef.close();
    };
    NewRunComponent.prototype.clearNewSubmission = function () {
        this.newSubmissionForm.reset();
    };
    NewRunComponent.prototype.clearFiles = function () {
        this.mainFile = undefined;
        this.additionalFiles = [];
        this.testFiles = [];
        this.fileInputs.forEach(function (x) { return x.nativeElement.value = null; });
    };
    NewRunComponent.prototype.onSubmitProblem = function () {
        var _this = this;
        var model = new src_app_modules_core_models_submission__WEBPACK_IMPORTED_MODULE_4__["Submission"]();
        model.probName = this.newSubmissionForm.get('problem').value;
        model.language = this.newSubmissionForm.get('language').value;
        model.mainFile = this.mainFile;
        model.extraFiles = this.additionalFiles;
        if (this.testFiles && this.testFiles.length > 0) {
            model.testFile = this.testFiles.splice(0, 1)[0];
            model.additionalTestFiles = this.testFiles;
        }
        model.isTest = this.submitType === 'test';
        model.osName = this.getOSName();
        console.log('getOSName() returned : ' + model.osName);
        //make sure no file names contain blanks (the PC2 server chokes on such filenames)
        if (this.filenameContainsBlanks(this.mainFile, this.additionalFiles, this.testFiles)) {
            //pop up an error dialog
            this._uiHelper.alert('File names may not contain spaces');
            console.error('One or more submitted file contains a space in its filename');
        }
        else {
            //submit the run
            this._teamService.submitRun(model)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribe))
                .subscribe(function (_) {
                _this.clearNewSubmission();
                _this.close();
                _this._uiHelper.alert('Run has been submitted successfully!');
                _this._teamService.runsUpdated.next();
            }, function (error) {
                _this._uiHelper.alert('Error submitting problem! Check console for details');
                console.error(error);
            });
        }
    };
    NewRunComponent.prototype.buildFileSubmission = function (file) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var fileSubmission, fileContents;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileSubmission = new src_app_modules_core_models_file_submission__WEBPACK_IMPORTED_MODULE_3__["FileSubmission"]();
                        return [4 /*yield*/, this.fileReader(file)];
                    case 1:
                        fileContents = _a.sent();
                        try {
                            fileSubmission.byteData = btoa(fileContents);
                        }
                        catch (error) {
                            this._uiHelper.alert('Binary files are not allowed!');
                            fileSubmission.byteData = fileContents;
                            // window.location.href = 'http://amishrakefight.org/gfy/';
                        }
                        fileSubmission.fileName = file.name;
                        return [2 /*return*/, fileSubmission];
                }
            });
        });
    };
    NewRunComponent.prototype.fileReader = function (file) {
        var fileReader = new FileReader();
        return new Promise(function (resolve, reject) {
            fileReader.onerror = function () {
                fileReader.abort();
                console.error('Couldn\'t read file!');
            };
            fileReader.onload = function () {
                resolve(fileReader.result.toString());
            };
            fileReader.readAsText(file);
        });
    };
    NewRunComponent.prototype.buildForm = function () {
        this.newSubmissionForm = this._formBuilder.group({
            problem: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            language: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            mainFile: [undefined],
            additionalFiles: [],
            testDataFiles: []
        });
    };
    //returns true if any of the filenames of any of the specified FileSubmissions contain a blank (space); false if none do.
    NewRunComponent.prototype.filenameContainsBlanks = function (mainfile, additionalFiles, testFiles) {
        if (mainfile.fileName.indexOf(" ") > -1) {
            return true;
        }
        for (var _i = 0, additionalFiles_1 = additionalFiles; _i < additionalFiles_1.length; _i++) {
            var file = additionalFiles_1[_i];
            if (file.fileName.indexOf(" ") > -1) {
                return true;
            }
        }
        for (var _a = 0, testFiles_1 = testFiles; _a < testFiles_1.length; _a++) {
            var file = testFiles_1[_a];
            if (file.fileName.indexOf(" ") > -1) {
                return true;
            }
        }
        //none of the specified FileSubmission files contains a space in its name
        return false;
    };
    //returns a string intended to identify the platform on which the browser is running
    NewRunComponent.prototype.getOSName = function () {
        console.log(navigator.userAgent);
        return navigator.userAgent.toString();
        // The following were all attempts to get the Angular Typescript/Javascript code to invoke the underlying OS to obtain
        // platform information (instead of using the "userAgent", which can vary).  
        // All of these attempts failed, most commonly with the browser throwing a "xxx is not a function" error.
        // It's not even clear that it's *possible* to do this -- isn't Typescript/Javascript constrained to run inside the browser sandbox?
        // Try using the Node "os" module:
        //		os = new os();
        //		console.log("OS type = " + os.type()) ;
        //		console.log("OS release = " + os.release()) ;
        //		console.log("OS platform =" + os.platform());
        //		console.log("OS version = " + os.version());
        //		return os.version();
        // Try using the  DeviceDetectorService from 'ngx-device-detector' (https://www.npmjs.com/package/ngx-device-detector)
        //		this.deviceInfo = this._deviceService.getDeviceInfo();
        //		console.log("OS name = " + this._deviceService.os);
        //		console.log("OS version = " + this._deviceService.os_version);
        //  	console.log("Browser = " + this._deviceService.browser);
        //		return this._deviceService.os_version;
        //
        // Try using the Node 'child_process' package to spawn a host-system process
        //		var spawn = require('child_process').spawn;
        //		var prc = spawn('java',  ['-jar', '-Xmx512M', '-Dfile.encoding=utf8', 'script/importlistings.jar']);
        //		//noinspection JSUnresolvedFunction
        //		prc.stdout.setEncoding('utf8');
        //		prc.stdout.on('data', function (data) {
        //  	var str = data.toString()
        //		var lines = str.split(/(\r?\n)/g);
        //		console.log(lines.join(""));
        //
        //		prc.on('close', function (code) {
        //    		console.log('process exit code ' + code);
        //		});
        //
        //		return this.deviceInfo;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], NewRunComponent.prototype, "fileInputs", void 0);
    NewRunComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-run',
            template: __webpack_require__(/*! ./new-run.component.html */ "./src/app/modules/runs/components/new-run/new-run.component.html"),
            styles: [__webpack_require__(/*! ./new-run.component.scss */ "./src/app/modules/runs/components/new-run/new-run.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_abstract_services_i_teams_service__WEBPACK_IMPORTED_MODULE_6__["ITeamsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"],
            _core_services_ui_helper_service__WEBPACK_IMPORTED_MODULE_9__["UiHelperService"], Object])
    ], NewRunComponent);
    return NewRunComponent;
}());



/***/ }),

/***/ "./src/app/modules/runs/components/runs-page/runs-page.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/runs/components/runs-page/runs-page.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='filter-table-container'>\n    <div class='filter-container'>\n        <div class='buttons'>\n            <button type='button' class='warning' (click)='openNewJudged()'>Submit Problem</button>\n            <!-- <button type='button' class='warning' (click)='openNewTest()'>Submit Test Problem</button> -->\n        </div>\n        <form class='filters' [formGroup]='filterForm'>\n            <h3 class='center'>Filters</h3>\n            <div>\n                <h5 class='filter-label'>Run Type</h5>\n                <div>\n                    <label>\n                        <input type='radio' name='runType' value='judged' formControlName='runType'>\n                        Judged\n                    </label>\n                </div>\n                <div>\n                    <label>\n                        <input type='radio' name='runType' value='test' formControlName='runType'>\n                        Test\n                    </label>\n                </div>\n                <div>\n                    <label>\n                        <input type='radio' name='runType' value='both' formControlName='runType'>\n                        Both\n                    </label>\n                </div>\n            </div>\n            <div>\n                <app-language-selector formControlName='language'></app-language-selector>\n            </div>\n            <div>\n                <app-problem-selector formControlName='problem'></app-problem-selector>\n            </div>\n            <div>\n                <app-judgement-selector formControlName='judgement'></app-judgement-selector>\n            </div>\n            <div>\n                <button class='outline' type='button' (click)='reset()'>Clear Filters</button>\n            </div>\n        </form>\n    </div>\n    <div class='table-container'>\n        <table>\n            <tr>\n                <th>Run Type</th>\n                <th>Language</th>\n                <th>Problem</th>\n                <th>Judgement</th>\n                <th>Time</th>\n                <th></th>\n            </tr>\n            <tr *ngFor='let run of filteredRuns' [class.pending]='!run.judgement || run.isPreliminary'>\n                <td>{{ run.isTestRun ? 'Test' : 'Judged' }}</td>\n                <td>{{ run.language }}</td>\n                <td>{{ run.problem }}</td>\n                <td>\n                    {{ run.judgement }}\n                    <ng-container *ngIf='run.isPreliminary'>\n                        (Preliminary)\n                    </ng-container>\n                </td>\n                <td>{{ run.time }}</td>\n                <td>\n                    <ng-container *ngIf='run.results'>\n                        <button type='button' (click)='viewResults(run.problem, run.results)' class='textLink'>View Results</button>\n                    </ng-container>\n                </td>\n            </tr>\n        </table>\n        <div *ngIf='filteredRuns.length === 0' class='table-message'>\n            <h3>No run results to display!</h3>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/runs/components/runs-page/runs-page.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/runs/components/runs-page/runs-page.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvcGMyY2NzL3BjMnY5L3Byb2plY3RzL1dUSS1VSS9zcmMvYXBwL21vZHVsZXMvcnVucy9jb21wb25lbnRzL3J1bnMtcGFnZS9ydW5zLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLE9BQU8sRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcnVucy9jb21wb25lbnRzL3J1bnMtcGFnZS9ydW5zLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/runs/components/runs-page/runs-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/runs/components/runs-page/runs-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: RunsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunsPageComponent", function() { return RunsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_modules_core_abstract_services_i_teams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/core/abstract-services/i-teams.service */ "./src/app/modules/core/abstract-services/i-teams.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _new_run_new_run_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../new-run/new-run.component */ "./src/app/modules/runs/components/new-run/new-run.component.ts");
/* harmony import */ var _test_run_detail_test_run_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../test-run-detail/test-run-detail.component */ "./src/app/modules/runs/components/test-run-detail/test-run-detail.component.ts");









var RunsPageComponent = /** @class */ (function () {
    function RunsPageComponent(_formBuilder, _teamService, _matDialog) {
        this._formBuilder = _formBuilder;
        this._teamService = _teamService;
        this._matDialog = _matDialog;
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.runs = [];
        this.filteredRuns = [];
    }
    RunsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.loadRuns();
        this.filteredRuns = this.runs;
        // when runs are updated, trigger a reload
        this._teamService.runsUpdated
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribe))
            .subscribe(function (_) {
            _this.loadRuns();
        });
    };
    RunsPageComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    RunsPageComponent.prototype.openNewJudged = function () {
        this._matDialog.open(_new_run_new_run_component__WEBPACK_IMPORTED_MODULE_7__["NewRunComponent"], {
            data: { submitType: 'judged' },
            disableClose: true
        });
    };
    RunsPageComponent.prototype.openNewTest = function () {
        this._matDialog.open(_new_run_new_run_component__WEBPACK_IMPORTED_MODULE_7__["NewRunComponent"], {
            data: { submitType: 'test' },
            disableClose: true
        });
    };
    RunsPageComponent.prototype.viewResults = function (problem, results) {
        this._matDialog.open(_test_run_detail_test_run_detail_component__WEBPACK_IMPORTED_MODULE_8__["TestRunDetailComponent"], {
            data: { problem: problem, results: results }
        });
    };
    RunsPageComponent.prototype.filterData = function () {
        var fitlerParams = this.filterForm.value;
        var filtered = this.runs;
        if (fitlerParams.runType === 'test') {
            filtered = filtered.filter(function (x) { return x.isTestRun; });
        }
        else if (fitlerParams.runType === 'judged') {
            filtered = filtered.filter(function (x) { return !x.isTestRun; });
        }
        if (fitlerParams.language) {
            filtered = filtered.filter(function (x) { return fitlerParams.language === x.language; });
        }
        if (fitlerParams.problem) {
            filtered = filtered.filter(function (x) { return fitlerParams.problem === x.problem; });
        }
        if (fitlerParams.judgement) {
            filtered = filtered.filter(function (x) { return fitlerParams.judgement === x.judgement; });
        }
        this.filteredRuns = filtered;
    };
    RunsPageComponent.prototype.buildForm = function () {
        var _this = this;
        this.filterForm = this._formBuilder.group({
            runType: ['both'],
            language: [],
            problem: [],
            judgement: []
        });
        this.filterForm.valueChanges.subscribe(function (_) { return _this.filterData(); });
    };
    RunsPageComponent.prototype.loadRuns = function () {
        var _this = this;
        this._teamService.getRuns()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribe))
            .subscribe(function (data) {
            _this.runs = data.sort(function (x, y) { return y.time - x.time; });
            _this.filterData();
        });
    };
    RunsPageComponent.prototype.reset = function () {
        this.filteredRuns = this.runs;
        this.buildForm();
    };
    RunsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./runs-page.component.html */ "./src/app/modules/runs/components/runs-page/runs-page.component.html"),
            styles: [__webpack_require__(/*! ./runs-page.component.scss */ "./src/app/modules/runs/components/runs-page/runs-page.component.scss"), __webpack_require__(/*! ../../../../../styles/filter_table.scss */ "./src/styles/filter_table.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_modules_core_abstract_services_i_teams_service__WEBPACK_IMPORTED_MODULE_3__["ITeamsService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], RunsPageComponent);
    return RunsPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/runs/components/test-run-detail/test-run-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/runs/components/test-run-detail/test-run-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Test Run Details (Problem {{ problem }})</h1>\n<div mat-dialog-content>\n    {{ results }}\n</div>\n<div mat-dialog-actions>\n    <button type='button' (click)='close()'>Close</button>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/runs/components/test-run-detail/test-run-detail.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/runs/components/test-run-detail/test-run-detail.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcnVucy9jb21wb25lbnRzL3Rlc3QtcnVuLWRldGFpbC90ZXN0LXJ1bi1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/runs/components/test-run-detail/test-run-detail.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/runs/components/test-run-detail/test-run-detail.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TestRunDetailData, TestRunDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestRunDetailData", function() { return TestRunDetailData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestRunDetailComponent", function() { return TestRunDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var TestRunDetailData = /** @class */ (function () {
    function TestRunDetailData() {
    }
    return TestRunDetailData;
}());

var TestRunDetailComponent = /** @class */ (function () {
    function TestRunDetailComponent(_dialogRef, _data) {
        this._dialogRef = _dialogRef;
        this._data = _data;
    }
    TestRunDetailComponent.prototype.ngOnInit = function () {
        this.problem = this._data.problem;
        this.results = this._data.results;
    };
    TestRunDetailComponent.prototype.close = function () {
        this._dialogRef.close();
    };
    TestRunDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-run-detail',
            template: __webpack_require__(/*! ./test-run-detail.component.html */ "./src/app/modules/runs/components/test-run-detail/test-run-detail.component.html"),
            styles: [__webpack_require__(/*! ./test-run-detail.component.scss */ "./src/app/modules/runs/components/test-run-detail/test-run-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            TestRunDetailData])
    ], TestRunDetailComponent);
    return TestRunDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/runs/runs.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/runs/runs.module.ts ***!
  \*********************************************/
/*! exports provided: RunsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunsModule", function() { return RunsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_runs_page_runs_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/runs-page/runs-page.component */ "./src/app/modules/runs/components/runs-page/runs-page.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_new_run_new_run_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/new-run/new-run.component */ "./src/app/modules/runs/components/new-run/new-run.component.ts");
/* harmony import */ var _components_new_run_alert_new_run_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/new-run-alert/new-run-alert.component */ "./src/app/modules/runs/components/new-run-alert/new-run-alert.component.ts");
/* harmony import */ var _components_test_run_detail_test_run_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/test-run-detail/test-run-detail.component */ "./src/app/modules/runs/components/test-run-detail/test-run-detail.component.ts");









var RunsModule = /** @class */ (function () {
    function RunsModule() {
    }
    RunsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_runs_page_runs_page_component__WEBPACK_IMPORTED_MODULE_2__["RunsPageComponent"],
                _components_new_run_new_run_component__WEBPACK_IMPORTED_MODULE_6__["NewRunComponent"],
                _components_new_run_alert_new_run_alert_component__WEBPACK_IMPORTED_MODULE_7__["NewRunAlertComponent"],
                _components_test_run_detail_test_run_detail_component__WEBPACK_IMPORTED_MODULE_8__["TestRunDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            exports: [],
            entryComponents: [
                _components_new_run_new_run_component__WEBPACK_IMPORTED_MODULE_6__["NewRunComponent"],
                _components_test_run_detail_test_run_detail_component__WEBPACK_IMPORTED_MODULE_8__["TestRunDetailComponent"],
                _components_new_run_alert_new_run_alert_component__WEBPACK_IMPORTED_MODULE_7__["NewRunAlertComponent"],
            ]
        })
    ], RunsModule);
    return RunsModule;
}());



/***/ }),

/***/ "./src/app/modules/scoreboard/components/scoreboard-page/scoreboard-page.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/scoreboard/components/scoreboard-page/scoreboard-page.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='filter-table-container'>\n\n    <div class='table-container'>\n        <table>\n            <tr>\n                <th>Rank</th>\n                <th>Team</th>\n                <th>Solved</th>\n                <th>Score</th>\n                <th></th>\n            </tr>\n            <tr *ngFor= 'let team of teamStandings' >\n                <td>{{ team.rank }}</td>\n                <td>{{ team.teamName }}</td>\n                <td>{{ team.solved }}</td>\n                <td>{{ team.points }}</td>\n            </tr>\n        </table>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/scoreboard/components/scoreboard-page/scoreboard-page.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/scoreboard/components/scoreboard-page/scoreboard-page.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvcGMyY2NzL3BjMnY5L3Byb2plY3RzL1dUSS1VSS9zcmMvYXBwL21vZHVsZXMvc2NvcmVib2FyZC9jb21wb25lbnRzL3Njb3JlYm9hcmQtcGFnZS9zY29yZWJvYXJkLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLE9BQU8sRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2NvcmVib2FyZC9jb21wb25lbnRzL3Njb3JlYm9hcmQtcGFnZS9zY29yZWJvYXJkLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/scoreboard/components/scoreboard-page/scoreboard-page.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/scoreboard/components/scoreboard-page/scoreboard-page.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ScoreboardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreboardPageComponent", function() { return ScoreboardPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modules_core_abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/core/abstract-services/i-contest.service */ "./src/app/modules/core/abstract-services/i-contest.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ScoreboardPageComponent = /** @class */ (function () {
    function ScoreboardPageComponent(_contestService) {
        this._contestService = _contestService;
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.teamStandings = [];
    }
    ScoreboardPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log("Scoreboard OnInit executed.");
        this.loadStandings();
        // when standings are updated, trigger a reload
        this._contestService.standingsUpdated
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribe))
            .subscribe(function (_) {
            //console.log("Scoreboard: loading standings from standingsUpdated subscription");
            _this.loadStandings();
        });
    };
    ScoreboardPageComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
        //console.log("Scoreboard OnDestroy executed.")
    };
    //check for scoreboard changes on every cycle
    // Note that even though this gets called frequently, it is lightweight; it only updates
    // the scoreboard when the standings have changed -- and it is never called if the scoreboard
    // is not visible because routing away from the Scoreboard destroys the current ScoreboardPage component.
    ScoreboardPageComponent.prototype.ngDoCheck = function () {
        //console.log("Scoreboard ngDoCheck(): ") ;
        if (!this._contestService.getStandingsAreCurrentFlag()) {
            //console.log("Standings have changed; updating...");
            this.loadStandings();
        }
        else {
            //console.log("Standings have not changed; bypassing update.");
        }
    };
    ScoreboardPageComponent.prototype.loadStandings = function () {
        var _this = this;
        this._contestService.getStandings()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribe))
            .subscribe(function (standings) {
            //console.log("standings string:");
            //console.log(standings);
            _this.teamStandings = _this.getTeamStandingsArray(standings);
        });
    };
    /**
     * Pull each teamStanding node out of the received JSON, load it into an array,
     * and return the array of team standing elements.
     */
    ScoreboardPageComponent.prototype.getTeamStandingsArray = function (standings) {
        var contest = standings.contestStandings;
        //console.log("ContestStandings element:");
        //console.log(contest);
        var teams = contest.teamStanding;
        //console.log("TeamStandings elements:");
        //console.log(teams);
        var tempArray = [];
        for (var _i = 0, teams_1 = teams; _i < teams_1.length; _i++) {
            var temp = teams_1[_i];
            tempArray.push(temp);
        }
        //console.log("Individual Team Standings:");
        //console.log(tempArray);
        return tempArray;
    };
    ScoreboardPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./scoreboard-page.component.html */ "./src/app/modules/scoreboard/components/scoreboard-page/scoreboard-page.component.html"),
            styles: [__webpack_require__(/*! ./scoreboard-page.component.scss */ "./src/app/modules/scoreboard/components/scoreboard-page/scoreboard-page.component.scss"), __webpack_require__(/*! ../../../../../styles/filter_table.scss */ "./src/styles/filter_table.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_2__["IContestService"]])
    ], ScoreboardPageComponent);
    return ScoreboardPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/scoreboard/scoreboard.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/scoreboard/scoreboard.module.ts ***!
  \*********************************************************/
/*! exports provided: ScoreboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreboardModule", function() { return ScoreboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_scoreboard_page_scoreboard_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/scoreboard-page/scoreboard-page.component */ "./src/app/modules/scoreboard/components/scoreboard-page/scoreboard-page.component.ts");






var ScoreboardModule = /** @class */ (function () {
    function ScoreboardModule() {
    }
    ScoreboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_scoreboard_page_scoreboard_page_component__WEBPACK_IMPORTED_MODULE_5__["ScoreboardPageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            exports: [],
            entryComponents: []
        })
    ], ScoreboardModule);
    return ScoreboardModule;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/about-wti/about-wti.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/shared/components/about-wti/about-wti.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>About PC2 WTI</h1>\nPC^2 is the Programming Contest Control System developed at California State University, Sacramento (CSUS) in support of\nComputer Programming Contest activities of the International Collegiate Programming\nContest (ICPC) and its Local and Regional Contests around the world.\n<br />\n<br />\nThis web interface was created by Josie Isaacson, Ethan Holman, Dani Frodge, and Andrew Combs as part of their Senior Project at Eastern Washington University.\n<br />\n<br />\n<div class='acm-logos'>\n    <img src='assets/ewu-logo.png' />\n    <img src='assets/csus-logo.png' />\n</div>\n<div mat-dialog-actions>\n    <button type='button' (click)='close()'>Close</button>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/about-wti/about-wti.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/shared/components/about-wti/about-wti.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".acm-logos {\n  display: flex;\n  flex-direction: row; }\n  .acm-logos img {\n    flex: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvcGMyY2NzL3BjMnY5L3Byb2plY3RzL1dUSS1VSS9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvYWJvdXQtd3RpL2Fib3V0LXd0aS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtFQUZyQjtJQUdRLE9BQU8sRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvYWJvdXQtd3RpL2Fib3V0LXd0aS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY20tbG9nb3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBpbWcgeyBmbGV4OiAxOyB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/shared/components/about-wti/about-wti.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/shared/components/about-wti/about-wti.component.ts ***!
  \****************************************************************************/
/*! exports provided: AboutWtiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutWtiComponent", function() { return AboutWtiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var AboutWtiComponent = /** @class */ (function () {
    function AboutWtiComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
    }
    AboutWtiComponent.prototype.ngOnInit = function () {
    };
    AboutWtiComponent.prototype.close = function () {
        this._dialogRef.close();
    };
    AboutWtiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-wti',
            template: __webpack_require__(/*! ./about-wti.component.html */ "./src/app/modules/shared/components/about-wti/about-wti.component.html"),
            styles: [__webpack_require__(/*! ./about-wti.component.scss */ "./src/app/modules/shared/components/about-wti/about-wti.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], AboutWtiComponent);
    return AboutWtiComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/app-footer/app-footer.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shared/components/app-footer/app-footer.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class='center'>Copyright © 2020 PC^2&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a (click)='showAbout()'>About</a></div>\n</footer>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/app-footer/app-footer.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shared/components/app-footer/app-footer.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background-color: #14375F;\n  padding: 1rem;\n  color: white; }\n  footer a {\n    font-weight: bold;\n    text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvcGMyY2NzL3BjMnY5L3Byb2plY3RzL1dUSS1VSS9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvYXBwLWZvb3Rlci9hcHAtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiL2J1aWxkcy9wYzJjY3MvcGMydjkvcHJvamVjdHMvV1RJLVVJL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJDQWlCO0VEQ2pCLGFBQWE7RUFDYixZQUFZLEVBQUE7RUFIZDtJQU1JLGlCQUFpQjtJQUNqQiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvYXBwLWZvb3Rlci9hcHAtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1hY2NlbnQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGNvbG9yOiB3aGl0ZTtcblxuICBhIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuIiwiJGJnLW1haW46ICNmZmY7XG4kYmctbGlnaHQ6ICNGMkYyRjI7XG4kYm9yZGVyMTogI2NjYztcbiRiZy1hY2NlbnQ6ICMxNDM3NUY7XG4kYmctYWx0OiAjMTUzODYwO1xuXG4kcHJpbWFyeTogIzAwN2JmZiA7XG4kc2Vjb25kYXJ5OiAjODI4MjgyO1xuJHN1Y2Nlc3M6ICMyOGE3NDU7XG4kZGFuZ2VyOiAjZGMzNTQ1O1xuJHdhcm5pbmc6ICNmZmMxMDc7XG5cbiRjb250cm9sLXBhZGRpbmc6IDAuNXJlbTtcbiRjb250YWluZXItcGFkZGluZzogMnJlbTtcbiRmb250LXN0YWNrOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiRzaGFkb3cxOiAwcHggMnB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiRzaGFkb3cyOiAwcHggMXB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuJHNoYWRvdzM6IDBweCAwcHggNHB4IDBweCByZ2JhKDAsMCwwLDAuMTUpO1xuJGJvcmRlci1yYWRpdXM6IDVweDtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/shared/components/app-footer/app-footer.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/shared/components/app-footer/app-footer.component.ts ***!
  \******************************************************************************/
/*! exports provided: AppFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function() { return AppFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _about_wti_about_wti_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about-wti/about-wti.component */ "./src/app/modules/shared/components/about-wti/about-wti.component.ts");




var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent(_dialogSvc) {
        this._dialogSvc = _dialogSvc;
    }
    AppFooterComponent.prototype.showAbout = function () {
        this._dialogSvc.open(_about_wti_about_wti_component__WEBPACK_IMPORTED_MODULE_3__["AboutWtiComponent"]);
    };
    AppFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./app-footer.component.html */ "./src/app/modules/shared/components/app-footer/app-footer.component.html"),
            styles: [__webpack_require__(/*! ./app-footer.component.scss */ "./src/app/modules/shared/components/app-footer/app-footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], AppFooterComponent);
    return AppFooterComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/app-header/app-header.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shared/components/app-header/app-header.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class='logo-container'>\n        <img src='/assets/PC2Logo.png' alt='PC^2 Logo'>\n        <img src='/assets/VerticalBar.png' alt='VerticalBar'>\n        <img src='/assets/icpc-banner.png' alt='ICPC Programming Contest Logo'>\n    </div>\n    <nav *ngIf='showLinks'>\n        <a routerLink='/runs' routerLinkActive='active'>Runs</a>\n        <a routerLink='/clarifications' routerLinkActive='active'>Clarifications</a>\n        <a routerLink='/options' routerLinkActive='active'>Options</a>\n        <a routerLink='/scoreboard' routerLinkActive='active'>Scoreboard</a>\n        <a routerLink='/logout'>Logout</a>\n    </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/app-header/app-header.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shared/components/app-header/app-header.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background-color: #14375F;\n  padding: 0.75rem 2rem;\n  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.15);\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  header .logo-container img {\n    height: 4rem; }\n  header nav a {\n    display: inline-block;\n    padding: 0.75rem;\n    margin: 0.75rem;\n    min-width: 7rem;\n    text-align: center;\n    font-size: 1.15rem;\n    cursor: pointer;\n    color: white;\n    border-bottom: 3px solid transparent;\n    text-decoration: none; }\n  header nav a.active, header nav a:hover {\n    border-bottom-color: #ffc107; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvcGMyY2NzL3BjMnY5L3Byb2plY3RzL1dUSS1VSS9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvYXBwLWhlYWRlci9hcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL2J1aWxkcy9wYzJjY3MvcGMydjkvcHJvamVjdHMvV1RJLVVJL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJDQWlCO0VEQ2pCLHFCQUFxQjtFQUNyQiwrQ0NVMkM7RURUM0MsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTtFQU5yQjtJQVF3QixZQUFZLEVBQUE7RUFScEM7SUFXSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxxQkFBcUIsRUFBQTtFQXBCekI7SUF3QkksNEJDaEJhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL2FwcC1oZWFkZXIvYXBwLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xuXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctYWNjZW50O1xuICBwYWRkaW5nOiAwLjc1cmVtIDJyZW07XG4gIGJveC1zaGFkb3c6ICRzaGFkb3cxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmxvZ28tY29udGFpbmVyIGltZyB7IGhlaWdodDogNHJlbTsgfVxuXG4gIG5hdiBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMC43NXJlbTtcbiAgICBtYXJnaW46IDAuNzVyZW07XG4gICAgbWluLXdpZHRoOiA3cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgbmF2IGEuYWN0aXZlLCBuYXYgYTpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHdhcm5pbmc7XG4gIH1cbn1cbiIsIiRiZy1tYWluOiAjZmZmO1xuJGJnLWxpZ2h0OiAjRjJGMkYyO1xuJGJvcmRlcjE6ICNjY2M7XG4kYmctYWNjZW50OiAjMTQzNzVGO1xuJGJnLWFsdDogIzE1Mzg2MDtcblxuJHByaW1hcnk6ICMwMDdiZmYgO1xuJHNlY29uZGFyeTogIzgyODI4MjtcbiRzdWNjZXNzOiAjMjhhNzQ1O1xuJGRhbmdlcjogI2RjMzU0NTtcbiR3YXJuaW5nOiAjZmZjMTA3O1xuXG4kY29udHJvbC1wYWRkaW5nOiAwLjVyZW07XG4kY29udGFpbmVyLXBhZGRpbmc6IDJyZW07XG4kZm9udC1zdGFjazogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4kc2hhZG93MTogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4kc2hhZG93MjogMHB4IDFweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiRzaGFkb3czOiAwcHggMHB4IDRweCAwcHggcmdiYSgwLDAsMCwwLjE1KTtcbiRib3JkZXItcmFkaXVzOiA1cHg7XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/shared/components/app-header/app-header.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/shared/components/app-header/app-header.component.ts ***!
  \******************************************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modules_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/core/auth/auth.service */ "./src/app/modules/core/auth/auth.service.ts");



var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(_authService) {
        this._authService = _authService;
    }
    Object.defineProperty(AppHeaderComponent.prototype, "showLinks", {
        get: function () { return this._authService.isLoggedIn; },
        enumerable: true,
        configurable: true
    });
    AppHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./app-header.component.html */ "./src/app/modules/shared/components/app-header/app-header.component.html"),
            styles: [__webpack_require__(/*! ./app-header.component.scss */ "./src/app/modules/shared/components/app-header/app-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/judgement-selector/judgement-selector.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/judgement-selector/judgement-selector.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n    <mat-label>Select Judgement</mat-label>\n    <mat-select [(ngModel)]='value' (ngModelChange)='onChange($event)'>\n        <mat-option [value]='undefined'>Select Judgement</mat-option>\n        <mat-option *ngFor='let judgement of judgements' [value]='judgement'>{{ judgement }}</mat-option>\n    </mat-select>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/judgement-selector/judgement-selector.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/judgement-selector/judgement-selector.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: JudgementSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JudgementSelectorComponent", function() { return JudgementSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_modules_core_abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/core/abstract-services/i-contest.service */ "./src/app/modules/core/abstract-services/i-contest.service.ts");






var JudgementSelectorComponent = /** @class */ (function () {
    function JudgementSelectorComponent(_contestService) {
        this._contestService = _contestService;
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.judgements = [];
        this.onChange = function (event) { };
        this.onTouched = function (event) { };
    }
    JudgementSelectorComponent_1 = JudgementSelectorComponent;
    JudgementSelectorComponent.prototype.ngOnInit = function () {
        this.loadJudgements();
    };
    JudgementSelectorComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    JudgementSelectorComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    JudgementSelectorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    JudgementSelectorComponent.prototype.writeValue = function (value) {
        this.value = (value === null) ? undefined : value;
    };
    JudgementSelectorComponent.prototype.loadJudgements = function () {
        var _this = this;
        this._contestService.getJudgements()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribe))
            .subscribe(function (data) {
            _this.judgements = data;
        }, function (error) {
            _this.judgements = [];
            console.error('Error loading judgements!');
            console.error(error);
        });
    };
    var JudgementSelectorComponent_1;
    JudgementSelectorComponent = JudgementSelectorComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-judgement-selector',
            template: __webpack_require__(/*! ./judgement-selector.component.html */ "./src/app/modules/shared/components/judgement-selector/judgement-selector.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return JudgementSelectorComponent_1; }),
                    multi: true
                }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_5__["IContestService"]])
    ], JudgementSelectorComponent);
    return JudgementSelectorComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/language-selector/language-selector.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/language-selector/language-selector.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n    <mat-label>Select Language</mat-label>\n    <mat-select [(ngModel)]='value' (ngModelChange)='onChange($event)'>\n        <mat-option [value]='undefined'>Select Language</mat-option>\n        <mat-option *ngFor='let language of languages' [value]='language.name'>{{ language.name }}</mat-option>\n    </mat-select>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/language-selector/language-selector.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/language-selector/language-selector.component.ts ***!
  \********************************************************************************************/
/*! exports provided: LanguageSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageSelectorComponent", function() { return LanguageSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modules_core_abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/core/abstract-services/i-contest.service */ "./src/app/modules/core/abstract-services/i-contest.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var LanguageSelectorComponent = /** @class */ (function () {
    function LanguageSelectorComponent(_contestService) {
        this._contestService = _contestService;
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.languages = [];
        this.onChange = function (event) { };
        this.onTouched = function (event) { };
    }
    LanguageSelectorComponent_1 = LanguageSelectorComponent;
    LanguageSelectorComponent.prototype.ngOnInit = function () {
        this.loadLanguages();
    };
    LanguageSelectorComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    LanguageSelectorComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    LanguageSelectorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    LanguageSelectorComponent.prototype.writeValue = function (value) {
        this.value = (value === null) ? undefined : value;
    };
    LanguageSelectorComponent.prototype.loadLanguages = function () {
        var _this = this;
        this._contestService.getLanguages()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribe))
            .subscribe(function (data) {
            _this.languages = data;
        }, function (error) {
            _this.languages = [];
        });
    };
    var LanguageSelectorComponent_1;
    LanguageSelectorComponent = LanguageSelectorComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-language-selector',
            template: __webpack_require__(/*! ./language-selector.component.html */ "./src/app/modules/shared/components/language-selector/language-selector.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return LanguageSelectorComponent_1; }),
                    multi: true
                }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_2__["IContestService"]])
    ], LanguageSelectorComponent);
    return LanguageSelectorComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/problem-selector/problem-selector.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/problem-selector/problem-selector.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n    <mat-label>\n        Select Problem\n    </mat-label>\n    <mat-select [(ngModel)]='value' (ngModelChange)='onChange($event)'>\n            <mat-option [value]='undefined'>Select Problem</mat-option>\n        <mat-option *ngIf='allowGeneral' value='general'>\n            General\n        </mat-option>\n        <mat-option *ngFor='let problem of problems' [value]='problem.name'>{{ problem.name }}</mat-option>\n    </mat-select>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/problem-selector/problem-selector.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/shared/components/problem-selector/problem-selector.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProblemSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemSelectorComponent", function() { return ProblemSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_modules_core_abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/core/abstract-services/i-contest.service */ "./src/app/modules/core/abstract-services/i-contest.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ProblemSelectorComponent = /** @class */ (function () {
    function ProblemSelectorComponent(_contestService) {
        this._contestService = _contestService;
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.allowGeneral = false;
        this.problems = [];
        this.onChange = function (event) { };
        this.onTouched = function (event) { };
    }
    ProblemSelectorComponent_1 = ProblemSelectorComponent;
    ProblemSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadProblems();
        if (this.allowGeneral) {
            this.writeValue('general');
        }
        // listen for contest start/stop to show/hide contest problems
        this._contestService.contestClock
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribe))
            .subscribe(function (_) { return _this.loadProblems(); });
    };
    ProblemSelectorComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    ProblemSelectorComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ProblemSelectorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ProblemSelectorComponent.prototype.writeValue = function (value) {
        this.value = (value === null) ? undefined : value;
    };
    ProblemSelectorComponent.prototype.loadProblems = function () {
        var _this = this;
        if (this._contestService.isContestRunning) {
            this._contestService.getProblems()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribe))
                .subscribe(function (data) {
                _this.problems = data;
            }, function (error) {
                _this.problems = [];
            });
        }
        else {
            this.problems = [];
        }
    };
    var ProblemSelectorComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProblemSelectorComponent.prototype, "allowGeneral", void 0);
    ProblemSelectorComponent = ProblemSelectorComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-problem-selector',
            template: __webpack_require__(/*! ./problem-selector.component.html */ "./src/app/modules/shared/components/problem-selector/problem-selector.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return ProblemSelectorComponent_1; }),
                    multi: true
                }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_core_abstract_services_i_contest_service__WEBPACK_IMPORTED_MODULE_3__["IContestService"]])
    ], ProblemSelectorComponent);
    return ProblemSelectorComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/language-selector/language-selector.component */ "./src/app/modules/shared/components/language-selector/language-selector.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_problem_selector_problem_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/problem-selector/problem-selector.component */ "./src/app/modules/shared/components/problem-selector/problem-selector.component.ts");
/* harmony import */ var _components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/app-header/app-header.component */ "./src/app/modules/shared/components/app-header/app-header.component.ts");
/* harmony import */ var _components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/app-footer/app-footer.component */ "./src/app/modules/shared/components/app-footer/app-footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_judgement_selector_judgement_selector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/judgement-selector/judgement-selector.component */ "./src/app/modules/shared/components/judgement-selector/judgement-selector.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _components_about_wti_about_wti_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/about-wti/about-wti.component */ "./src/app/modules/shared/components/about-wti/about-wti.component.ts");
















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_6__["AppHeaderComponent"],
                _components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_7__["AppFooterComponent"],
                _components_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_2__["LanguageSelectorComponent"],
                _components_problem_selector_problem_selector_component__WEBPACK_IMPORTED_MODULE_5__["ProblemSelectorComponent"],
                _components_judgement_selector_judgement_selector_component__WEBPACK_IMPORTED_MODULE_9__["JudgementSelectorComponent"],
                _components_about_wti_about_wti_component__WEBPACK_IMPORTED_MODULE_15__["AboutWtiComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
            ],
            exports: [
                _components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_6__["AppHeaderComponent"],
                _components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_7__["AppFooterComponent"],
                _components_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_2__["LanguageSelectorComponent"],
                _components_problem_selector_problem_selector_component__WEBPACK_IMPORTED_MODULE_5__["ProblemSelectorComponent"],
                _components_judgement_selector_judgement_selector_component__WEBPACK_IMPORTED_MODULE_9__["JudgementSelectorComponent"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
            ],
            entryComponents: [
                _components_about_wti_about_wti_component__WEBPACK_IMPORTED_MODULE_15__["AboutWtiComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// Use appsettings.json in assets directory to set these at runtime!
var environment = {
    production: false,
    baseUrl: 'http://localhost:8080/api',
    websocketUrl: 'ws://localhost:8080/websocket/WTISocket',
    useMock: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/styles/filter_table.scss":
/*!**************************************!*\
  !*** ./src/styles/filter_table.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-table-container {\n  display: flex;\n  flex-direction: row;\n  flex: 1; }\n  .filter-table-container > div {\n    margin: 2rem; }\n  .filter-table-container .filter-container .buttons button {\n    display: block;\n    margin-bottom: 0.5rem;\n    width: 100%; }\n  .filter-table-container .filter-container .buttons button:last-of-type {\n      margin-bottom: none; }\n  .filter-table-container .filter-container .filters {\n    margin-top: 2rem;\n    padding: 1rem;\n    background-color: #F2F2F2;\n    border-radius: 5px;\n    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.15); }\n  .filter-table-container .filter-container .filters .filter-label {\n      color: #999;\n      margin-bottom: 0.25rem; }\n  .filter-table-container .filter-container .filters > div {\n      padding: 0.5rem; }\n  .filter-table-container .table-container {\n    flex: 1;\n    background-color: #F2F2F2;\n    padding: 1rem;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    margin-left: 0;\n    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.15); }\n  .filter-table-container .table-container table {\n      width: 100%;\n      border-spacing: 0; }\n  .filter-table-container .table-container table th, .filter-table-container .table-container table td {\n        border-bottom: 1px solid #ccc;\n        padding: 1rem 0.5rem; }\n  .filter-table-container .table-container .table-message {\n      margin: auto; }\n  .pending td {\n  color: #999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvcGMyY2NzL3BjMnY5L3Byb2plY3RzL1dUSS1VSS9zcmMvc3R5bGVzL2ZpbHRlcl90YWJsZS5zY3NzIiwiL2J1aWxkcy9wYzJjY3MvcGMydjkvcHJvamVjdHMvV1RJLVVJL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixPQUFPLEVBQUE7RUFIVDtJQUtZLFlDTVksRUFBQTtFRFh4QjtJQVVNLGNBQWM7SUFDZCxxQkNEa0I7SURFbEIsV0FBVyxFQUFBO0VBWmpCO01BY3VCLG1CQUFtQixFQUFBO0VBZDFDO0lBa0JNLGdCQ1BrQjtJRFFsQixhQUFhO0lBQ2IseUJDckJZO0lEc0JaLGtCQUFrQjtJQUNsQiwrQ0NUdUMsRUFBQTtFRGI3QztNQXlCUSxXQUFXO01BQ1gsc0JBQXNCLEVBQUE7RUExQjlCO01BNkJnQixlQ25CUSxFQUFBO0VEVnhCO0lBa0NJLE9BQU87SUFDUCx5QkNwQ2M7SURxQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCwrQ0M1QnlDLEVBQUE7RURiN0M7TUE0Q00sV0FBVztNQUNYLGlCQUFpQixFQUFBO0VBN0N2QjtRQStDUSw2QkMvQ007UURnRE4sb0JBQW9CLEVBQUE7RUFoRDVCO01Bb0RxQixZQUFZLEVBQUE7RUFJakM7RUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL3N0eWxlcy9maWx0ZXJfdGFibGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5maWx0ZXItdGFibGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleDogMTtcblxuICAmID4gZGl2IHsgbWFyZ2luOiAkY29udGFpbmVyLXBhZGRpbmc7IH1cblxuICAuZmlsdGVyLWNvbnRhaW5lciB7XG5cbiAgICAuYnV0dG9ucyBidXR0b24ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkY29udHJvbC1wYWRkaW5nO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICY6bGFzdC1vZi10eXBlIHsgbWFyZ2luLWJvdHRvbTogbm9uZTsgfVxuICAgIH1cblxuICAgIC5maWx0ZXJzIHtcbiAgICAgIG1hcmdpbi10b3A6ICRjb250YWluZXItcGFkZGluZztcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctbGlnaHQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBib3gtc2hhZG93OiAkc2hhZG93MTtcblxuICAgICAgLmZpbHRlci1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgICAgfVxuXG4gICAgICAmID4gZGl2IHsgcGFkZGluZzogJGNvbnRyb2wtcGFkZGluZzsgfVxuICAgIH1cbiAgfVxuXG4gIC50YWJsZS1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWxpZ2h0O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93MTtcblxuICAgIHRhYmxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICB0aCwgdGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlcjE7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50YWJsZS1tZXNzYWdlIHsgbWFyZ2luOiBhdXRvOyB9XG4gIH1cbn1cblxuLnBlbmRpbmcgdGQge1xuICBjb2xvcjogIzk5OTtcbn1cbiIsIiRiZy1tYWluOiAjZmZmO1xuJGJnLWxpZ2h0OiAjRjJGMkYyO1xuJGJvcmRlcjE6ICNjY2M7XG4kYmctYWNjZW50OiAjMTQzNzVGO1xuJGJnLWFsdDogIzE1Mzg2MDtcblxuJHByaW1hcnk6ICMwMDdiZmYgO1xuJHNlY29uZGFyeTogIzgyODI4MjtcbiRzdWNjZXNzOiAjMjhhNzQ1O1xuJGRhbmdlcjogI2RjMzU0NTtcbiR3YXJuaW5nOiAjZmZjMTA3O1xuXG4kY29udHJvbC1wYWRkaW5nOiAwLjVyZW07XG4kY29udGFpbmVyLXBhZGRpbmc6IDJyZW07XG4kZm9udC1zdGFjazogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4kc2hhZG93MTogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4kc2hhZG93MjogMHB4IDFweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiRzaGFkb3czOiAwcHggMHB4IDRweCAwcHggcmdiYSgwLDAsMCwwLjE1KTtcbiRib3JkZXItcmFkaXVzOiA1cHg7XG4iXX0= */"

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /builds/pc2ccs/pc2v9/projects/WTI-UI/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map