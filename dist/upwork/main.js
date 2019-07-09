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

/***/ "./src/app/app-material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app-material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



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
/* harmony import */ var _mat_navbar_mat_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mat-navbar/mat-navbar.component */ "./src/app/mat-navbar/mat-navbar.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-details/project-details.component */ "./src/app/project-details/project-details.component.ts");
/* harmony import */ var _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/sign-in/sign-in.component */ "./src/app/auth/sign-in/sign-in.component.ts");
/* harmony import */ var _shared_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/auth-guard/auth-guard.service */ "./src/app/shared/auth-guard/auth-guard.service.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/user-details/user-details.component.ts");
/* harmony import */ var _submit_project_submit_project_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./submit-project/submit-project.component */ "./src/app/submit-project/submit-project.component.ts");















var routes = [
    { path: '', component: _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"] },
    { path: 'mat-navbar', component: _mat_navbar_mat_navbar_component__WEBPACK_IMPORTED_MODULE_3__["MatNavbarComponent"], canActivate: [_shared_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], canActivate: [_shared_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], canActivate: [_shared_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'project-details', component: _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailsComponent"], canActivate: [_shared_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'timeline', component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__["TimelineComponent"], canActivate: [_shared_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"], canActivate: [_shared_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'user-details', component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_13__["UserDetailsComponent"], canActivate: [_shared_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"] },
    { path: 'submit-project', component: _submit_project_submit_project_component__WEBPACK_IMPORTED_MODULE_14__["SubmitProjectComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mat-navbar>\n    <router-outlet></router-outlet>\n</app-mat-navbar>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'upwork';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _mat_navbar_mat_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mat-navbar/mat-navbar.component */ "./src/app/mat-navbar/mat-navbar.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./project-details/project-details.component */ "./src/app/project-details/project-details.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/sign-in/sign-in.component */ "./src/app/auth/sign-in/sign-in.component.ts");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/fesm5/ngx-scrollbar.js");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./news-feed/news-feed.component */ "./src/app/news-feed/news-feed.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _shared_interceptor_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/interceptor/error-dialog/error-dialog.component */ "./src/app/shared/interceptor/error-dialog/error-dialog.component.ts");
/* harmony import */ var _app_shared_interceptor_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../app/shared/interceptor/httpconfig.interceptor */ "./src/app/shared/interceptor/httpconfig.interceptor.ts");
/* harmony import */ var _app_shared_interceptor_error_dialog_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../app/shared/interceptor/error-dialog.service */ "./src/app/shared/interceptor/error-dialog.service.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/user-details/user-details.component.ts");
/* harmony import */ var _submit_project_submit_project_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./submit-project/submit-project.component */ "./src/app/submit-project/submit-project.component.ts");




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _mat_navbar_mat_navbar_component__WEBPACK_IMPORTED_MODULE_8__["MatNavbarComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_14__["ProjectDetailsComponent"],
                _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_19__["SignInComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__["PageNotFoundComponent"],
                _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_23__["TimelineComponent"],
                _news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_24__["NewsFeedComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_25__["UsersComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_26__["SignupComponent"],
                _shared_interceptor_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ErrorDialogComponent"],
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_33__["UserDetailsComponent"],
                _submit_project_submit_project_component__WEBPACK_IMPORTED_MODULE_34__["SubmitProjectComponent"],
            ],
            imports: [
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_32__["Ng2SearchPipeModule"],
                ngx_scrollbar__WEBPACK_IMPORTED_MODULE_22__["NgScrollbarModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebase),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestoreModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_28__["NgMultiSelectDropDownModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_6__["AppMaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
            ],
            exports: [
                _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_14__["ProjectDetailsComponent"],
                _shared_interceptor_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ErrorDialogComponent"]
            ],
            entryComponents: [
                _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_14__["ProjectDetailsComponent"],
                _shared_interceptor_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ErrorDialogComponent"]
            ],
            providers: [
                _shared_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"],
                _shared_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"],
                _app_shared_interceptor_error_dialog_service__WEBPACK_IMPORTED_MODULE_31__["ErrorDialogService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], useClass: _app_shared_interceptor_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_30__["HttpConfigInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/sign-in/sign-in.component.css":
/*!****************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".google-button{\n    width: 20px;\n}\n\n.signin-button{\n    text-align: center;\n}\n\n.jumbotron{\n    text-align: center;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsNEJBQTRCOztBQUVoQyIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ29vZ2xlLWJ1dHRvbntcbiAgICB3aWR0aDogMjBweDtcbn1cblxuLnNpZ25pbi1idXR0b257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmp1bWJvdHJvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/sign-in/sign-in.component.html":
/*!*****************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n  <div class=\"jumbotron\">\n    <h1 class=\"display-4\">Hel!x Work</h1>\n    <p class=\"lead\">A portal to create innovate and learn new ideas</p>\n    <hr class=\"my-4\">\n    <p>We give you the best service</p>\n   <div class=\"signin-button\"> \n     <button class=\"btn btn-outline-primary\" (click)=\"authService.GoogleAuth()\"><img class=\"google-button\" src=\"../../../assets/search.png\"> Sign in with Google</button>\n    </div>\n   \n  </div>"

/***/ }),

/***/ "./src/app/auth/sign-in/sign-in.component.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SignInComponent = /** @class */ (function () {
    function SignInComponent(authService, route) {
        this.authService = authService;
        this.route = route;
    }
    SignInComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getLoggedInName.subscribe(function (data) {
            _this.userName = data;
        });
        if (this.userName == null) {
            this.userName = localStorage.getItem('userEmail');
        }
        if (this.userName != null) {
            this.route.navigate(['dashboard']);
        }
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/auth/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/auth/sign-in/sign-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-card {\n  border: solid 1px lightgray;\n  padding: 20px;\n  box-shadow: 4px 3px 10px 0px;\n  margin: 20px;\n}\n\n.footer-buttons {\n  padding-top: 5px;\n}\n\n.heading {\n  font-size: 25px;\n  color: #0879FB;\n}\n\n.details {\n  padding-top: 5px;\n}\n\n#middle-content {\n  color: #0879FB;\n}\n\n/* .body {\n  z-index: 5;\n} */\n\n.description {\n  text-align: justify;\n}\n\n/* .mat-tab{\n  max-height: 490px;\n} */\n\n.my-scrollbar {\n  --scrollbar-color: transparent;\n  --scrollbar-container-color: transparent;\n  --scrollbar-thumb-color: rgba(0, 0, 0, 0.2);\n  --scrollbar-thumb-hover-color: rgba(0, 0, 0, 0.3);\n  --scrollbar-border-radius: 4px;\n  --scrollbar-size: 6px;\n  --scrollbar-padding: 8px;\n  --scroll-view-margin: 0;\n  --scroll-view-color: transparent;\n}\n\n#profile-photo {\n  max-width: 50px;\n  max-height: 50px;\n  border-radius: 300px;\n}\n\n.sidebar {\n  text-align: center;\n  border: solid 1px lightgrey;\n  padding: 10px 5px;\n  /* box-shadow:  1px 1px 10px 0px; */\n}\n\n#badge {\n  margin: 0 2px;\n}\n\n#button-addon2 {\n  z-index: 0;\n  /* search bas has been disabled */\n}\n\n.pointer{\n  cursor: pointer;\n}\n\n/* .results{\n  z-index: 8;\n  position: fixed;\n  margin-top:40px;\n  background-color:white;\n  width:60%;\n  border: solid 1px gray; \n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztHQUVHOztBQUVIO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOztHQUVHOztBQUVIO0VBQ0UsOEJBQThCO0VBQzlCLHdDQUF3QztFQUN4QywyQ0FBMkM7RUFDM0MsaURBQWlEO0VBQ2pELDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOzs7Ozs7O0dBT0ciLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94LWNhcmQge1xuICBib3JkZXI6IHNvbGlkIDFweCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDRweCAzcHggMTBweCAwcHg7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmZvb3Rlci1idXR0b25zIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmhlYWRpbmcge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjMDg3OUZCO1xufVxuXG4uZGV0YWlscyB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbiNtaWRkbGUtY29udGVudCB7XG4gIGNvbG9yOiAjMDg3OUZCO1xufVxuXG4vKiAuYm9keSB7XG4gIHotaW5kZXg6IDU7XG59ICovXG5cbi5kZXNjcmlwdGlvbiB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi8qIC5tYXQtdGFie1xuICBtYXgtaGVpZ2h0OiA0OTBweDtcbn0gKi9cblxuLm15LXNjcm9sbGJhciB7XG4gIC0tc2Nyb2xsYmFyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1zY3JvbGxiYXItY29udGFpbmVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1zY3JvbGxiYXItdGh1bWItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgLS1zY3JvbGxiYXItdGh1bWItaG92ZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLS1zY3JvbGxiYXItYm9yZGVyLXJhZGl1czogNHB4O1xuICAtLXNjcm9sbGJhci1zaXplOiA2cHg7XG4gIC0tc2Nyb2xsYmFyLXBhZGRpbmc6IDhweDtcbiAgLS1zY3JvbGwtdmlldy1tYXJnaW46IDA7XG4gIC0tc2Nyb2xsLXZpZXctY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4jcHJvZmlsZS1waG90byB7XG4gIG1heC13aWR0aDogNTBweDtcbiAgbWF4LWhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMzAwcHg7XG59XG5cbi5zaWRlYmFyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IHNvbGlkIDFweCBsaWdodGdyZXk7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICAvKiBib3gtc2hhZG93OiAgMXB4IDFweCAxMHB4IDBweDsgKi9cbn1cblxuI2JhZGdlIHtcbiAgbWFyZ2luOiAwIDJweDtcbn1cblxuI2J1dHRvbi1hZGRvbjIge1xuICB6LWluZGV4OiAwO1xuICAvKiBzZWFyY2ggYmFzIGhhcyBiZWVuIGRpc2FibGVkICovXG59XG5cbi5wb2ludGVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIC5yZXN1bHRze1xuICB6LWluZGV4OiA4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbi10b3A6NDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgd2lkdGg6NjAlO1xuICBib3JkZXI6IHNvbGlkIDFweCBncmF5OyBcbn0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"body\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <div class=\"sidebar\">\n          <span *ngIf=\"authservice.userData as user\">\n            <a class=\"pointer\" (click)=\"myProfile(userId)\">\n              <img id=\"profile-photo\" src=\"{{user.photoURL}}\" class=\"img-responsive\">\n              My Profile\n            </a>\n          </span>\n          <br>\n          <br>\n          <div class=\"skills\">\n            <p>My Skills</p>\n            <span class=\"badge badge-primary\" id=\"badge\" *ngFor=\"let list of skills\">{{list}}</span>\n          </div>\n          <br>\n          <div *ngFor=\"let list of userDetails\">\n            <p>Tickets Available<br><b>{{list.tickets}}</b></p>\n            <div class=\"followers\">\n              <p>Followers<br><b>{{list.followers.length}}</b></p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-9\">\n        <div class=\"input-group mb-3\">\n\n\n \n\n          <!-- <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-addon2\"><img\n                src=\"../../assets/magnifier.png\"></button>\n\n          </div> -->\n\n\n          <!-- <div class=\"results\" [hidden]=\"!searchText\">\n              <div *ngFor=\"let list of users | filter: searchText\">\n                <a routerLink=''>\n                  {{list.name}}<br>\n                  {{list.email}}\n                  <mat-divider></mat-divider>\n                </a>\n              </div>\n            </div>\n\n        <div *ngIf=\"(users | filter: searchText)?.length==0\">\n          <p>No results found</p>\n        </div>-->\n        </div> \n\n\n\n\n\n        \n\n\n\n\n        <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n          <li class=\"nav-item\">\n            \n            <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n              aria-selected=\"true\">News Feed</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\"\n              aria-selected=\"false\">Timeline</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\"\n              aria-selected=\"false\">Developers</a>\n          </li>\n        </ul>\n        <div class=\"tab-content\" id=\"myTabContent\">\n          <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n<br>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" placeholder=\"Search News Feed..\"\n              aria-label=\"Recipient's username\"  aria-describedby=\"button-addon2\">\n    \n            <div *ngFor=\"let list of newsFeedData | filter: searchText\" class=\"box-card\">\n              <div class=\"heading\">{{list.projectName}}</div>\n              <p>{{list.projectType}} - Posted on {{list.date}}</p>\n              <div class=\"row\" id=\"middle-content\">\n                <div class=\"col-sm-6\">\n                  <span style=\"float:left\">${{list.cost}}<br>Budget </span>\n\n                </div>\n                <div class=\"col-sm-6\">\n                  <span style=\"float:right\">\n                    {{list.levelOfDifficulty}} <br>Level of difficulty\n                  </span>\n\n                </div>\n              </div>\n              <p class=\"description\">\n                {{list.description}}\n              </p>\n              <mat-divider></mat-divider>\n              <div class=\"row\">\n                <div class=\"col-sm-6\">\n                  <span>\n                    Author, {{list.author}}\n                  </span>\n\n                </div>\n                <div class=\"col-sm-6\">\n\n                  <span style=\"float:right\">{{list.duration}} long project</span>\n\n                </div>\n              </div>\n              <div class=\"footer-buttons\">\n                <button class=\"btn btn-outline-primary btn-sm\" (click)=\"projectData(list)\">Read More</button>\n              </div>\n            </div>\n          <br>\n               <div *ngIf=\"(users | filter: searchText)?.length==0\">\n                  <p class=\"alert alert-danger\" style=\"text-align:center\">No results found</p>\n                </div>\n            \n          </div>\n\n\n\n\n          <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n\n            <app-timeline></app-timeline>\n\n          </div>\n          <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\n\n            <app-users></app-users>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(apiservice, authservice, route, dialog) {
        this.apiservice = apiservice;
        this.authservice = authservice;
        this.route = route;
        this.dialog = dialog;
        this.skills = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = localStorage.getItem('userId');
        this.apiservice.callApi('GET', '', 'newsFeed', '').subscribe(function (data) {
            _this.newsFeedData = data;
            _this.newsFeedData.forEach(function (value) {
                if (value.description.length > 150) {
                    value.description = value.description.substr(0, 150) + "...";
                }
            });
        });
        this.apiservice.callApi('GETBYPARAMS', '', 'user', this.userId).subscribe(function (data) {
            _this.userDetails = data;
            _this.skills = _this.userDetails[0].skills.split(",");
        });
        this.apiservice.callApi('GET', '', 'user', '').subscribe(function (data) {
            _this.users = data;
        });
        this.authservice.getLoggedInEmail.subscribe(function (data) {
            _this.getEmail = data;
        });
        if (this.getEmail == null)
            this.getEmail = localStorage.getItem('userEmail');
        this.authservice.getLoggedInName.subscribe(function (data) {
            _this.getName = data;
        });
        if (this.getName == null)
            this.getName = localStorage.getItem('userName');
    };
    DashboardComponent.prototype.projectData = function (list) {
        this.apiservice.passSelectedProjectData(list);
        // const reference = this.dialog.open(ProjectDetailsComponent,{
        this.route.navigate(['project-details']);
        // });
        // reference.afterClosed().subscribe(result => {
        //   if (result === true) {
        //   }
        // });
        // this.route.navigate(['project-details'])
    };
    DashboardComponent.prototype.myProfile = function (email) {
        this.apiservice.passSelectedProfile(email);
        this.route.navigate(['profile']);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/mat-navbar/mat-navbar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/mat-navbar/mat-navbar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.mat-toolbar{\n  background-color: #343A40; \n}\n\na{\n  text-decoration: none;\n}\n\n.logo{\n  color: white;\n  font-weight: 900;\n}\n\n.profile-photo{\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0LW5hdmJhci9tYXQtbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tYXQtbmF2YmFyL21hdC1uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cbi5tYXQtdG9vbGJhcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M0E0MDsgXG59XG5cbmF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxvZ297XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLnByb2ZpbGUtcGhvdG97XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/mat-navbar/mat-navbar.component.html":
/*!******************************************************!*\
  !*** ./src/app/mat-navbar/mat-navbar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n  [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'over'\"\n      [opened]=\"!(isHandset$ | async)? 'false':'false'\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item routerLink='/'>Home</a>\n      <a mat-list-item routerLink='/profile'>Profile</a>\n      <a mat-list-item routerLink='/project-details'>Project Details</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\" class=\"mat-toolbar\">\n    <span *ngIf=\"getEmail\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        >\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n    </span>\n      <span><a routerLink='/' class=\"logo\">Hel!xWork</a></span>\n       <span style=\"flex:1 1 auto;\"></span>\n        \n       \n        <span *ngIf=\"getEmail\">\n         <div class=\"dropdown\">\n          <span  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <span *ngIf=\"authService.userData as user\"><img class=\"profile-photo\" src=\"{{user.photoURL}}\"></span>\n          </span>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n            <a class=\"dropdown-item\" (click)=\"authService.SignOut()\">SignOut</a>\n          </div>\n        </div>\n      </span>\n         \n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/mat-navbar/mat-navbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mat-navbar/mat-navbar.component.ts ***!
  \****************************************************/
/*! exports provided: MatNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatNavbarComponent", function() { return MatNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");





var MatNavbarComponent = /** @class */ (function () {
    function MatNavbarComponent(breakpointObserver, authService) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    MatNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getLoggedInEmail.subscribe(function (data) {
            _this.getEmail = data;
        });
        if (this.getEmail == null) {
            this.getEmail = localStorage.getItem('userEmail');
        }
    };
    MatNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mat-navbar',
            template: __webpack_require__(/*! ./mat-navbar.component.html */ "./src/app/mat-navbar/mat-navbar.component.html"),
            styles: [__webpack_require__(/*! ./mat-navbar.component.css */ "./src/app/mat-navbar/mat-navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], MatNavbarComponent);
    return MatNavbarComponent;
}());



/***/ }),

/***/ "./src/app/news-feed/news-feed.component.css":
/*!***************************************************!*\
  !*** ./src/app/news-feed/news-feed.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MtZmVlZC9uZXdzLWZlZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/news-feed/news-feed.component.html":
/*!****************************************************!*\
  !*** ./src/app/news-feed/news-feed.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  news-feed works!\n</p>\n"

/***/ }),

/***/ "./src/app/news-feed/news-feed.component.ts":
/*!**************************************************!*\
  !*** ./src/app/news-feed/news-feed.component.ts ***!
  \**************************************************/
/*! exports provided: NewsFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFeedComponent", function() { return NewsFeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsFeedComponent = /** @class */ (function () {
    function NewsFeedComponent() {
    }
    NewsFeedComponent.prototype.ngOnInit = function () {
    };
    NewsFeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-feed',
            template: __webpack_require__(/*! ./news-feed.component.html */ "./src/app/news-feed/news-feed.component.html"),
            styles: [__webpack_require__(/*! ./news-feed.component.css */ "./src/app/news-feed/news-feed.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsFeedComponent);
    return NewsFeedComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notfound{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbm90Zm91bmR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\n    <div class=\"notfound\">\n      <div class=\"notfound-404\">\n        <h3>Oops! Page not found</h3>\n       <img src=\"../../assets/404.png\">\n      </div>\n      <h2>we are sorry, but the page you requested was not found</h2>\n      <button routerLink='/' class=\"btn btn-danger\">Go Home</button>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".emp-profile {\n    padding: 3%;\n    margin-top: 3%;\n    margin-bottom: 3%;\n    border-radius: 0.5rem;\n    background: #fff;\n}\n\n.profile-img {\n    text-align: center;\n}\n\n.profile-img img {\n    width: 70%;\n    height: 100%;\n}\n\n.profile-img .file {\n    position: relative;\n    overflow: hidden;\n    margin-top: -20%;\n    width: 70%;\n    border: none;\n    border-radius: 0;\n    font-size: 15px;\n    background: #212529b8;\n}\n\n.profile-img .file input {\n    position: absolute;\n    opacity: 0;\n    right: 0;\n    top: 0;\n}\n\n.profile-head h5 {\n    color: #333;\n}\n\n.profile-head h6 {\n    color: #0062cc;\n}\n\n.profile-edit-btn {\n    border: none;\n    border-radius: 1.5rem;\n    width: 70%;\n    padding: 2%;\n    font-weight: 600;\n    color: #6c757d;\n    cursor: pointer;\n}\n\n.proile-rating {\n    font-size: 12px;\n    color: #818182;\n    margin-top: 5%;\n}\n\n.proile-rating span {\n    color: #495057;\n    font-size: 15px;\n    font-weight: 600;\n}\n\n.profile-head .nav-tabs {\n    margin-bottom: 5%;\n}\n\n.profile-head .nav-tabs .nav-link {\n    font-weight: 600;\n    border: none;\n}\n\n.profile-head .nav-tabs .nav-link.active {\n    border: none;\n    border-bottom: 2px solid #4498f1;\n}\n\n.profile-work {\n    padding: 14%;\n    margin-top: -15%;\n}\n\n.profile-work p {\n    font-size: 12px;\n    color: #818182;\n    font-weight: 600;\n    margin-top: 10%;\n}\n\n.profile-work a {\n    text-decoration: none;\n    color: #495057;\n    font-weight: 600;\n    font-size: 14px;\n}\n\n.profile-work ul {\n    list-style: none;\n}\n\n.profile-tab label {\n    font-weight: 600;\n}\n\n.profile-tab p {\n    font-weight: 600;\n    color: #0062cc;\n}\n\n.btn-danger {\n    width: 140px;\n}\n\n.inline-display {\n    display: inline;\n    font-size: 27px;\n    padding-left: 0px;\n}\n\na .link-style {\n    text-decoration: none;\n}\n\n.profile-pic{\n    border-radius: 200px;\n}\n\n#badge {\n    margin: 0 2px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsTUFBTTtBQUNWOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wLXByb2ZpbGUge1xuICAgIHBhZGRpbmc6IDMlO1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ucHJvZmlsZS1pbWcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUtaW1nIGltZyB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcm9maWxlLWltZyAuZmlsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLXRvcDogLTIwJTtcbiAgICB3aWR0aDogNzAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMjEyNTI5Yjg7XG59XG5cbi5wcm9maWxlLWltZyAuZmlsZSBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xufVxuXG4ucHJvZmlsZS1oZWFkIGg1IHtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLnByb2ZpbGUtaGVhZCBoNiB7XG4gICAgY29sb3I6ICMwMDYyY2M7XG59XG5cbi5wcm9maWxlLWVkaXQtYnRuIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgcGFkZGluZzogMiU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9pbGUtcmF0aW5nIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM4MTgxODI7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5wcm9pbGUtcmF0aW5nIHNwYW4ge1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucHJvZmlsZS1oZWFkIC5uYXYtdGFicyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5wcm9maWxlLWhlYWQgLm5hdi10YWJzIC5uYXYtbGluayB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5wcm9maWxlLWhlYWQgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQ0OThmMTtcbn1cblxuLnByb2ZpbGUtd29yayB7XG4gICAgcGFkZGluZzogMTQlO1xuICAgIG1hcmdpbi10b3A6IC0xNSU7XG59XG5cbi5wcm9maWxlLXdvcmsgcCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjODE4MTgyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4ucHJvZmlsZS13b3JrIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnByb2ZpbGUtd29yayB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnByb2ZpbGUtdGFiIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucHJvZmlsZS10YWIgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzAwNjJjYztcbn1cblxuLmJ0bi1kYW5nZXIge1xuICAgIHdpZHRoOiAxNDBweDtcbn1cblxuLmlubGluZS1kaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgZm9udC1zaXplOiAyN3B4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5hIC5saW5rLXN0eWxlIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5wcm9maWxlLXBpY3tcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcbn1cblxuI2JhZGdlIHtcbiAgICBtYXJnaW46IDAgMnB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container emp-profile\">\n  <!-- <form method=\"post\"> -->\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"profile-img\" *ngIf=\"authservice.userData as user\">\n        <img class=\"profile-pic\" src={{user.photoURL}} alt=\"\" />\n        <!-- <div class=\"file btn btn-lg btn-primary\">\n                Change Photo\n                <input type=\"file\" name=\"file\" />\n              </div> -->\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"profile-head\">\n        <h5>\n          {{userDetails.name}}\n        </h5>\n        <h6>\n          {{userDetails.userType}}\n        </h6>\n        <!-- <ul> -->\n        <!-- <li class=\"inline-display\"><i class=\"fab fa-linkedin\"></i></li>\n        <li class=\"inline-display\"><i class=\"fab fa-twitter\"></i></li>\n        <li class=\"inline-display\"><i class=\"fab fa-github\"></i></li> -->\n        <!-- </ul> -->\n        <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n              aria-selected=\"true\">About</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\"\n              aria-selected=\"false\">More Details</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <!-- <div class=\"col-md-2\">\n      <button class=\"btn btn-dark\">Follow</button>\n\n    </div> -->\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"profile-work\">\n        <p class=\"proile-rating\">HOURLY RATE: <span>$ {{userDetails.rate}}</span></p>\n        <div class=\"skills\">\n          <p>MY SKILLS</p>\n          <span class=\"badge badge-info\" id=\"badge\" *ngFor=\"let list of skills\">{{list}}</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-8\">\n      <div class=\"tab-content profile-tab\" id=\"myTabContent\">\n        <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label>Name</label>\n            </div>\n            <div class=\"col-md-6\">\n              <p>{{userDetails.name}}</p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label>Email</label>\n            </div>\n            <div class=\"col-md-6\">\n              <p>{{userDetails.email}}</p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label>Phone</label>\n            </div>\n            <div class=\"col-md-6\">\n              <p>{{userDetails.mobile}}</p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label>Profession</label>\n            </div>\n            <div class=\"col-md-6\">\n              <p>{{userDetails.userType}}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n          <!-- <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label>Experience</label>\n            </div>\n            <div class=\"col-md-6\">\n              <p>Expert</p>\n            </div>\n          </div> -->\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label>Hourly Rate</label>\n            </div>\n            <div class=\"col-md-6\">\n              <p>{{userDetails.rate}} $/hr</p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label>Total Projects</label>\n            </div>\n            <div class=\"col-md-6\">\n              <p>{{this.countJobs}}</p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label>Location</label>\n            </div>\n            <div class=\"col-md-6\">\n              <p>{{userDetails.location}}</p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\" style=\"text-align:justify\">\n              <label>Your Bio</label>\n              <p>{{userDetails.userDescription}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- </form> -->\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(apiservice, authservice) {
        this.apiservice = apiservice;
        this.authservice = authservice;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = localStorage.getItem('userId');
        this.apiservice.callApi('GETBYPARAMS', '', 'user', userId).subscribe(function (data) {
            _this.userDetails = data[0];
            _this.skills = _this.userDetails.skills.split(",");
        });
        this.apiservice.callApi('GETBYPARAMS', '', 'timeline', userId).subscribe(function (data) {
            _this.countJobs = data.posts;
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/project-details/project-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/project-details/project-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.bttn {\n    padding: 25px;\n    border-left: 1px solid rgba(0, 0, 0, .1);\n    border-right: 1px solid rgba(0, 0, 0, .1);\n    border-top: 1px solid rgba(0, 0, 0, .1);\n    border-bottom: 1px solid rgba(0, 0, 0, .1);\n\n}\n\n.btn {\n    width: 100%;\n    font-size: 1rem;\n}\n\n/* client details */\n\n.client {\n    padding: 25px;\n    border-right: 1px solid rgba(0, 0, 0, .1);\n    border-left: 1px solid rgba(0, 0, 0, .1);\n    border-bottom: 1px solid rgba(0, 0, 0, .1);\n    height: 100%;\n\n}\n\n.primary {\n    font-size: 17px;\n    font-weight: 700;\n}\n\n.secondary {\n    font-size: 14px;\n    font-weight: 50;\n}\n\n.brk {\n    padding-bottom: 15px;\n}\n\n.lead1 {\n    padding: 25px;\n    padding-left: 0px;\n    border-right: 1px solid rgba(0, 0, 0, .1);\n    border-top: 1px solid rgba(0, 0, 0, .1);\n    border-bottom: 1px solid rgba(0, 0, 0, .1);\n}\n\n.sec1 {\n    padding-top: 25px;\n    padding-right: 20px;\n    padding-left: 0px;\n    border-right: 1px solid rgba(0, 0, 0, .1);\n\n}\n\np {\n    font-size: 15px;\n}\n\n.price {\n    display: flex;\n    width: 100%;\n    border-right: 1px solid rgba(0, 0, 0, .1);\n\n}\n\n.sec2 {\n    padding-top: 25px;\n    padding-left: 90px;\n\n}\n\n.badge-success {\n    font-size: 13.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEMseUNBQXlDO0lBQ3pDLHVDQUF1QztJQUN2QywwQ0FBMEM7O0FBRTlDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUEsbUJBQW1COztBQUVuQjtJQUNJLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMsd0NBQXdDO0lBQ3hDLDBDQUEwQztJQUMxQyxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFHQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLHVDQUF1QztJQUN2QywwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix5Q0FBeUM7O0FBRTdDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gseUNBQXlDOztBQUU3Qzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYnR0biB7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEpO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMSk7XG5cbn1cblxuLmJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4vKiBjbGllbnQgZGV0YWlscyAqL1xuXG4uY2xpZW50IHtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEpO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMSk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEpO1xuICAgIGhlaWdodDogMTAwJTtcblxufVxuXG4ucHJpbWFyeSB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zZWNvbmRhcnkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTA7XG59XG5cbi5icmsge1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG5cbi5sZWFkMSB7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMSk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEpO1xufVxuXG4uc2VjMSB7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xKTtcblxufVxuXG5wIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5wcmljZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xKTtcblxufVxuXG5cbi5zZWMyIHtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG5cbn1cblxuLmJhZGdlLXN1Y2Nlc3Mge1xuICAgIGZvbnQtc2l6ZTogMTMuNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/project-details/project-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/project-details/project-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <br> -->\n<!-- <span mat-dialog-actions>\n  <button [mat-dialog-close] class=\"btn btn-default\"><img  src=\"../../assets/left-arrow .png\"></button>\n</span> -->\n\n\n  <div  class=\"container\">\n    <h3> Job details</h3>\n    <br />\n    <div class=\"row\">\n      \n      <div class=\"col-sm-4\" *ngIf=\"userDetails as user\">\n        <div class=\"bttn\">\n          <div class=\"left-line\"></div>\n          <button type=\"button\" class=\"btn btn-primary\">\n            Post a Job like this\n          </button>\n          <br /><br />\n          \n        </div>\n        \n        <div class=\"client\" >\n          <div class=\"primary\">About the client</div>\n          <br />\n          <div class=\"\">{{user.name}}</div>\n          <div class=\"brk\"></div>\n          <div class=\"\" *ngIf=\"countJobs<=1\">{{countJobs}} Job posted</div>\n          <div class=\"\" *ngIf=\"countJobs>1\">{{countJobs}} Jobs posted</div>\n          <div class=\"brk\"></div>\n          <div class=\"secondary\">Member since {{user.dateOfJoining}}</div>\n          <br>\n          <div class=\"secondary\" *ngIf=\"user.paymentverificationStatus==0\">\n            <img src=\"../../assets/error.png\"> Payment unverified\n          </div>\n          <div class=\"secondary\" *ngIf=\"user.paymentverificationStatus==1\">\n            <img src=\"../../assets/success.png\"> Payment verified\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"col-sm-8\" *ngIf=\"details as list\">\n        <div class=\"lead1\">\n          <div class=\"lead\">\n            {{list.projectSubject | titlecase}}\n          </div>\n        </div>\n        \n        <div class=\"info\">\n          <div class=\"sec1\">\n            <div class=\"primary\">{{list.projectName}}</div>\n            <div class=\"brk\"></div>\n            <div class=\"secondary\">Posted on {{list.date}}</div>\n            <hr />\n          </div>\n        </div>\n        \n      <div class=\"exp\">\n        <div class=\"sec1\">\n          <p>Description:</p>\n          <p>{{list.description}}</p>\n          <p>\n            Similar Project Link\n            <a href={{list.projectLink}}>\n              {{list.projectLink}}</a>\n            </p>\n            <p style=\"padding-bottom:10px;\">\n                Please get back to me with your budget and time proposal\n              </p>\n            </div>\n            <hr />\n          </div>\n          \n          <div class=\"price\">\n            <div class=\"sec1\" style=\"border-right: none !important;\">\n                <p class=\"primary\"><i class=\"fas fa-tag\"></i> ${{list.cost}}</p>\n                <p class=\"secondary\">{{list.projectType}}</p>\n              </div>\n              \n              <div class=\"sec2\">\n                <p class=\"primary\">{{list.projectType}}</p>\n                <p class=\"secondary\">\n                  {{list.levelOfDifficulty}}\n                </p>\n              </div>\n            </div>\n            <hr />\n            \n            <div class=\"tags\">\n              <p class=\"primary\" >Skills and expertise</p>\n              <div style=\"padding-top: 23px;\" class=\"sec1\">\n                  <span *ngFor=\"let array of skills\">\n                    &nbsp;\n                    <span class=\"badge badge-primary\">{{array}}</span>\n                  </span>\n                  \n                </div>\n              </div>\n              <hr />\n            </div>\n          </div>\n        </div>"

/***/ }),

/***/ "./src/app/project-details/project-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/project-details/project-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent(apiservice, route) {
        this.apiservice = apiservice;
        this.route = route;
        this.skills = [];
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.details = this.apiservice.returnSelectedProjectData();
        if (this.details == null)
            this.route.navigate(['dashboard']);
        this.skills = this.details.skillsRequired.split(" ");
        this.apiservice.callApi('GETBYPARAMS', '', 'user', localStorage.getItem('userId')).subscribe(function (data) {
            _this.userDetails = data[0];
        });
        this.apiservice.callApi('GETBYPARAMS', '', 'timeline', this.details.userId).subscribe(function (data) {
            _this.countJobs = data.length;
        });
    };
    ProjectDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-details',
            template: __webpack_require__(/*! ./project-details.component.html */ "./src/app/project-details/project-details.component.html"),
            styles: [__webpack_require__(/*! ./project-details.component.css */ "./src/app/project-details/project-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/shared/api.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/api.service.ts ***!
  \***************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.BASE_URL = 'https://deathkingmaster.herokuapp.com';
    }
    //***********API CALLS***********//
    ApiService.prototype.callApi = function (method, body, api, params) {
        var _this = this;
        switch (method) {
            case 'POST':
                var postObserver = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                    _this.post(body, api).subscribe(function (data) {
                        // POST METHOD TO POST DATA INTO THE DATABASE
                        observer.next(data);
                    });
                });
                return postObserver;
            case 'GET':
                var getObserver = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                    _this.get(api).subscribe(function (data) {
                        // GET METHOD TO GET DATA FROM THE DATABASE
                        observer.next(data);
                    });
                });
                return getObserver;
            case 'GETBYPARAMS':
                var getByParamsObserver = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                    _this.getbyparams(api, params).subscribe(function (data) {
                        // GET METHOD TO GET DATA FROM THE DATABASE
                        observer.next(data);
                    });
                });
                return getByParamsObserver;
            case 'PUT':
                var putObserver = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                    _this.put(body, api).subscribe(function (data) {
                        // GET METHOD TO GET DATA FROM THE DATABASE
                        observer.next(data);
                    });
                });
                return putObserver;
        }
    };
    ApiService.prototype.post = function (body, api) {
        return this.http.post(this.BASE_URL + "/" + api, body);
    };
    ApiService.prototype.get = function (api) {
        return this.http.get(this.BASE_URL + "/" + api);
    };
    ApiService.prototype.getbyparams = function (api, param) {
        return this.http.get(this.BASE_URL + "/" + api + "/" + param);
    };
    ApiService.prototype.put = function (body, api) {
        return this.http.put(this.BASE_URL + "/" + api, body);
    };
    //***********API CALLS***********//
    ApiService.prototype.passSelectedProjectData = function (list) {
        this.selectedProjectData = list;
    };
    ApiService.prototype.returnSelectedProjectData = function () {
        return this.selectedProjectData;
    };
    ApiService.prototype.passSelectedProfile = function (email) {
        this.selectedProfileEmail = email;
    };
    ApiService.prototype.returnSelectedProfile = function () {
        return this.selectedProfileEmail;
    };
    ApiService.prototype.passUserDetails = function (list) {
        this.userDetails = list;
    };
    ApiService.prototype.returnUserDetails = function () {
        return this.userDetails;
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/auth-guard/auth-guard.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/auth-guard/auth-guard.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/shared/auth.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (next, state) {
        if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['']);
        }
        return true;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api.service */ "./src/app/shared/api.service.ts");








var AuthService = /** @class */ (function () {
    function AuthService(afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, apiservice, ngZone // NgZone service to remove outside scope warning
    ) {
        var _this = this;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.apiservice = apiservice;
        this.ngZone = ngZone;
        this.getLoggedInEmail = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.getLoggedInName = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /* Saving user data in localstorage when
    logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.userData = user;
                localStorage.setItem('user', JSON.stringify(_this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            var user = JSON.parse(localStorage.getItem('user'));
            return user != null ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.GoogleAuth = function () {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    };
    // Auth logic to run auth providers
    AuthService.prototype.AuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth
            .signInWithPopup(provider)
            .then(function (result) {
            _this.ngZone.run(function () {
                var email = {
                    email: result.user.email
                };
                _this.apiservice.callApi('POST', email, 'userLogin', '').subscribe(function (data) {
                    if (data.status == 0) {
                        _this.router.navigate(['signup']);
                    }
                    else {
                        localStorage.setItem('userId', data.object[0]._id);
                        localStorage.setItem('followingList', JSON.stringify(data.object[0].following));
                        _this.router.navigate(['dashboard']);
                    }
                });
            });
            _this.SetUserData(result.user);
        })
            .catch(function (error) {
            window.alert(error);
        });
    };
    AuthService.prototype.SetUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        };
        this.getLoggedInEmail.next(userData.email);
        this.getLoggedInName.next(userData.displayName);
        localStorage.setItem('userEmail', userData.email);
        localStorage.setItem('userName', userData.displayName);
        localStorage.setItem('userPhotoUrl', userData.photoURL);
        return userRef.set(userData, {
            merge: true
        });
    };
    AuthService.prototype.SignOut = function () {
        var _this = this;
        return this.afAuth.auth.signOut().then(function () {
            _this.getLoggedInEmail.next('');
            _this.getLoggedInEmail.next('');
            localStorage.clear();
            _this.router.navigate(['']);
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] // NgZone service to remove outside scope warning
        ])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/interceptor/error-dialog.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/interceptor/error-dialog.service.ts ***!
  \************************************************************/
/*! exports provided: ErrorDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDialogService", function() { return ErrorDialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _interceptor_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interceptor/error-dialog/error-dialog.component */ "./src/app/shared/interceptor/error-dialog/error-dialog.component.ts");




var ErrorDialogService = /** @class */ (function () {
    function ErrorDialogService(dialog) {
        this.dialog = dialog;
    }
    ErrorDialogService.prototype.openDialog = function (data) {
        var dialogRef = this.dialog.open(_interceptor_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ErrorDialogComponent"], {
            width: '300px',
            data: data
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            var animal;
            animal = result;
        });
    };
    ErrorDialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ErrorDialogService);
    return ErrorDialogService;
}());



/***/ }),

/***/ "./src/app/shared/interceptor/error-dialog/error-dialog.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/shared/interceptor/error-dialog/error-dialog.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pbnRlcmNlcHRvci9lcnJvci1kaWFsb2cvZXJyb3ItZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/interceptor/error-dialog/error-dialog.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/interceptor/error-dialog/error-dialog.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"alert alert-danger\">\n    <div>\n      <h3>Error Occurred:</h3>\n      <mat-divider></mat-divider>\n    </div> \n    <p>\n          Reason: {{data.reason}}\n      </p>\n      <p>\n          Status: {{data.status}}\n      </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/interceptor/error-dialog/error-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/interceptor/error-dialog/error-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: ErrorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDialogComponent", function() { return ErrorDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ErrorDialogComponent = /** @class */ (function () {
    function ErrorDialogComponent(data) {
        this.data = data;
        this.title = 'Angular-Interceptor';
    }
    ErrorDialogComponent.prototype.ngOnInit = function () {
    };
    ErrorDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-dialog',
            template: __webpack_require__(/*! ./error-dialog.component.html */ "./src/app/shared/interceptor/error-dialog/error-dialog.component.html"),
            styles: [__webpack_require__(/*! ./error-dialog.component.css */ "./src/app/shared/interceptor/error-dialog/error-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], ErrorDialogComponent);
    return ErrorDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/interceptor/httpconfig.interceptor.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/interceptor/httpconfig.interceptor.ts ***!
  \**************************************************************/
/*! exports provided: HttpConfigInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptor", function() { return HttpConfigInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interceptor_error_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interceptor/error-dialog.service */ "./src/app/shared/interceptor/error-dialog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var HttpConfigInterceptor = /** @class */ (function () {
    function HttpConfigInterceptor(errorDialogService) {
        this.errorDialogService = errorDialogService;
    }
    HttpConfigInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var token = localStorage.getItem('token');
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
                //console.log('event--->>>', event);
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            var data = {};
            data = {
                reason: error.error['message'],
                //reason : error.message,
                status: error.status
            };
            _this.errorDialogService.openDialog(data);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        }));
    };
    HttpConfigInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_interceptor_error_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ErrorDialogService"]])
    ], HttpConfigInterceptor);
    return HttpConfigInterceptor;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-horizontal-stepper{\n    text-align: center;\n}\n\n.mat-form-field{\n    max-width: 500px;\n    min-width: 300px;\n}\n\n.multiselect{\n    width: 200px;\n}\n\n#spinner{\n    display:block;\n    position: fixed;    \n    top:  0;               \n    right: 0;             \n    bottom: 0;\n    left: 0;\n    margin: 200px auto;\n  \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxrQkFBa0I7O0VBRXBCIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWZvcm0tZmllbGR7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG4ubXVsdGlzZWxlY3R7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG4jc3Bpbm5lcntcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgICAgXG4gICAgdG9wOiAgMDsgICAgICAgICAgICAgICBcbiAgICByaWdodDogMDsgICAgICAgICAgICAgXG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luOiAyMDBweCBhdXRvO1xuICBcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button id=\"toggle-linear\">\n  <!-- {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}} -->\n</button>\n<mat-horizontal-stepper class=\"mat-horizontal-stepper\" [linear]=\"isLinear\" #stepper>\n  <mat-step class=\"mat-step-1\" [stepControl]=\"firstFormGroup\">\n    <form #bookingForm=\"ngForm\" (ngSubmit)=\"onSubmit(bookingForm)\" autocomplete=\"off\" [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your Details</ng-template>\n      <mat-form-field class=\"mat-form-field\">\n        <input matInput name=\"mobile\" placeholder=\"Mobile\" type=\"text\" formControlName=\"mobile\" required>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <mat-label>Select User</mat-label>\n        <mat-select placeholder=\"Select User\" name=\"userType\" formControlName=\"userType\" required>\n          <mat-option value=\"Developer\">Developer</mat-option>\n          <mat-option value=\"Employer\">Employer</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput name=\"rate\" placeholder=\"Hourly Rate\" formControlName=\"rate\" required>\n      </mat-form-field>\n      <div>\n        <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n\n\n\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\" autocomplete=\"off\" #details=\"ngForm\" (ngSubmit)=\"onDescriptionDetails(details)\">\n      <ng-template matStepLabel>Fill out your Description</ng-template>\n      <ng-multiselect-dropdown name=\"skills\" formControlName=\"skills\" [placeholder]=\"'Select Skills'\"\n        [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" [settings]=\"dropdownSettings\"\n        (onSelect)=\"onItemSelect($event)\" (onSelectAll)=\"onSelectAll($event)\">\n      </ng-multiselect-dropdown>\n      <br>\n      <mat-form-field>\n        <textarea matInput name=\"description\" placeholder=\"Profile Description\" rows=\"10\" formControlName=\"description\"\n          required></textarea>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput name=\"location\" placeholder=\"Location\" formControlName=\"location\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-raised-button color=\"primary\" matStepperNext>Submit</button>\n      </div>\n    </form>\n  </mat-step>\n</mat-horizontal-stepper>\n\n<div *ngIf=\"showSpinner\">  \n  <mat-spinner id=\"spinner\"></mat-spinner>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SignupComponent = /** @class */ (function () {
    function SignupComponent(authservice, _formBuilder, apiservice, route) {
        this.authservice = authservice;
        this._formBuilder = _formBuilder;
        this.apiservice = apiservice;
        this.route = route;
        this.isLinear = true;
        this.showSpinner = false;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.body = {};
        this.items = {};
        this.selectedItem = [];
        this.myDate = new Date();
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            skills: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.dropdownList = [
            { skillsId: 1, skills: 'Nodejs' },
            { skillsId: 2, skills: 'MangoDb' },
            { skillsId: 3, skills: 'Angularjs' },
            { skillsId: 4, skills: 'Angular 7' },
            { skillsId: 5, skills: 'React' },
            { skillsId: 6, skills: 'PHP' },
            { skillsId: 7, skills: 'MySql' }
        ];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'skillsId',
            textField: 'skills',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 5,
            maxHeight: 100,
            allowSearchFilter: true
        };
    };
    SignupComponent.prototype.onItemSelect = function (item) {
        // console.log(item);
    };
    SignupComponent.prototype.onSelectAll = function (items) {
        // console.log(items);
    };
    SignupComponent.prototype.onDescriptionDetails = function (details) {
        var _this = this;
        var value = null;
        this.items = { skills: details.value };
        this.selectedItem = this.items[Object.keys(this.items)[0]];
        this.selectedItem['skills'].forEach(function (data) {
            value = value + data.skills + ',';
        });
        value = value.substring(4, value.length - 1);
        this.body.location = details.value.location;
        this.body.userDescription = details.value.description;
        this.body.skills = value;
        this.apiservice.callApi('POST', this.body, 'user/signup', '').subscribe(function (data) {
            var userId = data.object._id;
            localStorage.setItem('userId', userId);
            localStorage.setItem('followingList', JSON.stringify(data.object.following));
            _this.showSpinner = true;
            _this.route.navigate(['dashboard']);
        });
    };
    SignupComponent.prototype.onSubmit = function (details) {
        var date = new Date();
        var presentDate = date.getDate() + '/' + (new Date().getMonth() + 1) + '/' + date.getFullYear();
        this.body = {
            tickets: '50',
            name: localStorage.getItem('userName'),
            email: localStorage.getItem('userEmail'),
            mobile: details.value.mobile,
            userType: details.value.userType,
            rate: details.value.rate,
            profilePicture: localStorage.getItem('userPhotoUrl'),
            dateOfJoining: presentDate,
            location: '',
            userDescription: '',
            skills: ''
        };
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/submit-project/submit-project.component.css":
/*!*************************************************************!*\
  !*** ./src/app/submit-project/submit-project.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field{\n    min-width: 350px;\n}\n\n.container{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VibWl0LXByb2plY3Qvc3VibWl0LXByb2plY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3N1Ym1pdC1wcm9qZWN0L3N1Ym1pdC1wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGR7XG4gICAgbWluLXdpZHRoOiAzNTBweDtcbn1cblxuLmNvbnRhaW5lcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/submit-project/submit-project.component.html":
/*!**************************************************************!*\
  !*** ./src/app/submit-project/submit-project.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n <div class=\"container\">\n<div class=\"row\">\n<div class=\"col-sm-12\">\n<h3>Add Project Details</h3>\n\n  <form  #submitProject=\"ngForm\" autocomplete=\"off\" (ngSubmit)=\"onSubmitProject(submitProject)\">\n      <mat-form-field appearance=\"outline\">\n          <mat-label>Project Name</mat-label>\n          <input matInput [(ngModel)]=\"projectName\" name=\"projectName\" >\n          <mat-icon matSuffix>create</mat-icon>\n          \n        </mat-form-field>\n        <br>\n        <mat-form-field appearance=\"outline\" >\n          <mat-label>Project Subject</mat-label>\n          \n          <input matInput [(ngModel)]=\"projectSubject\" name=\"projectSubject\" >\n          <mat-icon matSuffix>subject</mat-icon>\n      </mat-form-field>\n        <br>\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Duration</mat-label>\n          <input matInput type=\"number\" min=\"0\" [(ngModel)]=\"duration\"  name=\"duration\" >\n          <mat-icon matSuffix>av_timer</mat-icon>\n        </mat-form-field>\n        &nbsp;  \n        <mat-form-field appearance=\"outline\">\n            <mat-label>Months/Days</mat-label>\n          <input matInput type=\"text\" min=\"0\" [(ngModel)]=\"date\"  name=\"date\" >\n          <mat-icon matSuffix>date_range</mat-icon>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n            <mat-label>Project Type</mat-label>\n            <mat-select  [(ngModel)]=\"projectType\"  name=\"projectType\">\n              <mat-option value=\"One Time Project\">One Time Project</mat-option>\n              <mat-option value=\"Permanent Project\">Permanent Project</mat-option>\n              <mat-option value=\"Hourly Project\">Hourly Project</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <br>\n          <mat-form-field appearance=\"outline\">\n              <mat-label>Description</mat-label>\n              <textarea matInput [(ngModel)]=\"description\"  name=\"description\" ></textarea>\n              <mat-icon matSuffix>description</mat-icon>\n            </mat-form-field>\n            <br>\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Project Url (optional)</mat-label>\n                <input  matInput [(ngModel)]=\"projectLink\"  name=\"projectLink\" >\n                <mat-icon matSuffix>link</mat-icon>\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                  <mat-label>Difficulty</mat-label>\n                  <mat-select  [(ngModel)]=\"levelOfDifficulty\"  name=\"levelOfDifficulty\">\n                    <mat-option value=\"Easy\">Easy</mat-option>\n                    <mat-option value=\"Medium\">Medium</mat-option>\n                    <mat-option value=\"Hard\">Hard</mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <br>\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Tags</mat-label>\n                    <input  matInput [(ngModel)]=\"tags\"  name=\"tags\" >\n                    <mat-icon matSuffix>style</mat-icon>\n                    <mat-hint>Use Commas for tags</mat-hint>\n                  </mat-form-field>\n                <br>\n               <button  type=\"submit\" mat-raised-button color=\"primary\">Submit</button>\n              \n  </form>\n</div>\n</div>\n</div>\n\n<br>\n<br>\n<br>\n<br>\n<br>"

/***/ }),

/***/ "./src/app/submit-project/submit-project.component.ts":
/*!************************************************************!*\
  !*** ./src/app/submit-project/submit-project.component.ts ***!
  \************************************************************/
/*! exports provided: SubmitProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitProjectComponent", function() { return SubmitProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SubmitProjectComponent = /** @class */ (function () {
    function SubmitProjectComponent() {
    }
    SubmitProjectComponent.prototype.ngOnInit = function () {
    };
    SubmitProjectComponent.prototype.onSubmitProject = function (details) {
        console.log(details.value);
    };
    SubmitProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-submit-project',
            template: __webpack_require__(/*! ./submit-project.component.html */ "./src/app/submit-project/submit-project.component.html"),
            styles: [__webpack_require__(/*! ./submit-project.component.css */ "./src/app/submit-project/submit-project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubmitProjectComponent);
    return SubmitProjectComponent;
}());



/***/ }),

/***/ "./src/app/timeline/timeline.component.css":
/*!*************************************************!*\
  !*** ./src/app/timeline/timeline.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/timeline/timeline.component.html":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" placeholder=\"Search Timeline..\"\naria-label=\"Recipient's username\"  aria-describedby=\"button-addon2\">\n\n"

/***/ }),

/***/ "./src/app/timeline/timeline.component.ts":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.css */ "./src/app/timeline/timeline.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/user-details/user-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-details/user-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".emp-profile {\n    padding: 3%;\n    margin-top: 3%;\n    margin-bottom: 3%;\n    border-radius: 0.5rem;\n    background: #fff;\n}\n\n.profile-img {\n    text-align: center;\n}\n\n.profile-img img {\n    width: 70%;\n    height: 100%;\n}\n\n.profile-img .file {\n    position: relative;\n    overflow: hidden;\n    margin-top: -20%;\n    width: 70%;\n    border: none;\n    border-radius: 0;\n    font-size: 15px;\n    background: #212529b8;\n}\n\n.profile-img .file input {\n    position: absolute;\n    opacity: 0;\n    right: 0;\n    top: 0;\n}\n\n.profile-head h5 {\n    color: #333;\n}\n\n.profile-head h6 {\n    color: #0062cc;\n}\n\n.profile-edit-btn {\n    border: none;\n    border-radius: 1.5rem;\n    width: 70%;\n    padding: 2%;\n    font-weight: 600;\n    color: #6c757d;\n    cursor: pointer;\n}\n\n.proile-rating {\n    font-size: 12px;\n    color: #818182;\n    margin-top: 5%;\n}\n\n.proile-rating span {\n    color: #495057;\n    font-size: 15px;\n    font-weight: 600;\n}\n\n.profile-head .nav-tabs {\n    margin-bottom: 5%;\n}\n\n.profile-head .nav-tabs .nav-link {\n    font-weight: 600;\n    border: none;\n}\n\n.profile-head .nav-tabs .nav-link.active {\n    border: none;\n    border-bottom: 2px solid #4498f1;\n}\n\n.profile-work {\n    padding: 14%;\n    margin-top: -15%;\n}\n\n.profile-work p {\n    font-size: 12px;\n    color: #818182;\n    font-weight: 600;\n    margin-top: 10%;\n}\n\n.profile-work a {\n    text-decoration: none;\n    color: #495057;\n    font-weight: 600;\n    font-size: 14px;\n}\n\n.profile-work ul {\n    list-style: none;\n}\n\n.profile-tab label {\n    font-weight: 600;\n}\n\n.profile-tab p {\n    font-weight: 600;\n    color: #0062cc;\n}\n\n.btn-danger {\n    width: 140px;\n}\n\n.inline-display {\n    display: inline;\n    font-size: 27px;\n    padding-left: 0px;\n}\n\na .link-style {\n    text-decoration: none;\n}\n\n.profile-pic{\n    border-radius: 200px;\n}\n\n#badge {\n    margin: 0 2px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLE1BQU07QUFDVjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbXAtcHJvZmlsZSB7XG4gICAgcGFkZGluZzogMyU7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5wcm9maWxlLWltZyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvZmlsZS1pbWcgaW1nIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnByb2ZpbGUtaW1nIC5maWxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tdG9wOiAtMjAlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICMyMTI1MjliODtcbn1cblxuLnByb2ZpbGUtaW1nIC5maWxlIGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG59XG5cbi5wcm9maWxlLWhlYWQgaDUge1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4ucHJvZmlsZS1oZWFkIGg2IHtcbiAgICBjb2xvcjogIzAwNjJjYztcbn1cblxuLnByb2ZpbGUtZWRpdC1idG4ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgd2lkdGg6IDcwJTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2lsZS1yYXRpbmcge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzgxODE4MjtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLnByb2lsZS1yYXRpbmcgc3BhbiB7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5wcm9maWxlLWhlYWQgLm5hdi10YWJzIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLnByb2ZpbGUtaGVhZCAubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLnByb2ZpbGUtaGVhZCAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNDQ5OGYxO1xufVxuXG4ucHJvZmlsZS13b3JrIHtcbiAgICBwYWRkaW5nOiAxNCU7XG4gICAgbWFyZ2luLXRvcDogLTE1JTtcbn1cblxuLnByb2ZpbGUtd29yayBwIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM4MTgxODI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5wcm9maWxlLXdvcmsgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucHJvZmlsZS13b3JrIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ucHJvZmlsZS10YWIgbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5wcm9maWxlLXRhYiBwIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMDA2MmNjO1xufVxuXG4uYnRuLWRhbmdlciB7XG4gICAgd2lkdGg6IDE0MHB4O1xufVxuXG4uaW5saW5lLWRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBmb250LXNpemU6IDI3cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmEgLmxpbmstc3R5bGUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnByb2ZpbGUtcGlje1xuICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xufVxuXG4jYmFkZ2Uge1xuICAgIG1hcmdpbjogMCAycHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/user-details/user-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-details/user-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container emp-profile\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <a routerLink='/'>   <img src=\"../../assets/left-arrow .png\"></a>\n        <div class=\"profile-img\">\n          <img class=\"profile-pic\" src={{userDetails.profilePicture}} alt=\"\" />\n        \n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"profile-head\">\n          <h5>\n            {{userDetails.name}}\n          </h5>\n          <h6>\n            {{userDetails.userType}}\n          </h6>\n          <!-- <ul> -->\n          <!-- <li class=\"inline-display\"><i class=\"fab fa-linkedin\"></i></li>\n          <li class=\"inline-display\"><i class=\"fab fa-twitter\"></i></li>\n          <li class=\"inline-display\"><i class=\"fab fa-github\"></i></li> -->\n          <!-- </ul> -->\n          <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n                aria-selected=\"true\">About</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\"\n                aria-selected=\"false\">More Details</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n\n        <!-- <span *ngFor=\"let list of followingList\">\n          <span *ngIf=\"list==userDetails._id\">\n            \n          </span>\n          <span *ngIf=\"list!=userDetails._id\">\n            \n                <button class=\"btn btn-dark\">Following</button>\n              </span>\n            </span> -->\n            \n            <!-- <span *ngIf=\"followingUser==false\">\n            </span>\n            <span *ngIf=\"followingUser==true\">\n            </span> -->\n            \n            <button disabled class=\"btn btn-dark\" (click)=\"onFollow(userDetails._id)\">Follow</button>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"profile-work\">\n          <p class=\"proile-rating\">HOURLY RATE: <span>$ {{userDetails.rate}}</span></p>\n          <div class=\"skills\">\n            <p>SKILLS</p>\n            <span class=\"badge badge-info\" id=\"badge\" *ngFor=\"let list of skills\">{{list}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"tab-content profile-tab\" id=\"myTabContent\">\n          <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n  \n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Name</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>{{userDetails.name}}</p>\n              </div>\n            </div>\n      \n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Profession</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>{{userDetails.userType}}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n            \n            \n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Total Projects</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>{{this.projectCount}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Location</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>{{userDetails.location}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\" style=\"text-align:justify\">\n                <label>Description</label>\n                <p>{{userDetails.userDescription}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- </form> -->\n  </div>"

/***/ }),

/***/ "./src/app/user-details/user-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-details/user-details.component.ts ***!
  \********************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");



var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(apiservice) {
        this.apiservice = apiservice;
        this.followingList = [];
        this.followingUser = false;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
        this.skills = this.userDetails.skills.split(',');
        this.apiservice.callApi('GETBYPARAMS', '', 'timeline', this.userDetails._id).subscribe(function (data) {
            _this.projectCount = data.posts;
            // this.followingCheck();
        });
        this.followingList = JSON.parse(localStorage.getItem('followingList'));
    };
    // followingCheck() {
    // 	for (let i = 0; i < list.length; i++) {
    // 		if (list[0] == this.userDetails._id) {
    //       this.followingUser=true;
    //       return;
    // 		}
    // 	}
    // }
    UserDetailsComponent.prototype.onFollow = function (followId) {
        // this.followingCheck();
        var body = {
            userId: localStorage.getItem('userId'),
            followId: followId
        };
        this.apiservice.callApi('PUT', body, 'user', '').subscribe(function (data) {
            alert('Followed Successfully');
        });
    };
    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/user-details/user-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());

// dateOfJoining: "21/4/2019"
// email: "ashishume@gmail.com"
// followers: []
// following: []
// location: "Bangalore"
// mobile: 8557098095
// name: "Ashish Debnath"
// paymentverificationStatus: 0
// profilePicture: "https://lh3.googleusercontent.com/-oCJoo5ABVbk/AAAAAAAAAAI/AAAAAAAAC90/xJKmCQ7raOo/photo.jpg"
// rate: "7"
// skills: "Nodejs,MangoDb,Angularjs,Angular 7,React,PHP,MySql"
// tickets: "50"
// userDescription: "Helllo there"
// userType: "Employer"
// __v: 0
// _id: "5cbc3e4bbbcbe335ceb71c12"


/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile{\n    width: 100px;\n    border-radius: 300px;\n}\n\n.user-box{\npadding: 20px 0;\nborder-bottom: solid 1px lightgray;\n}\n\n.pointer{\n    cursor: pointer;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7QUFDQSxlQUFlO0FBQ2Ysa0NBQWtDO0FBQ2xDOztBQUNBO0lBQ0ksZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZXtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzAwcHg7XG59XG5cbi51c2VyLWJveHtcbnBhZGRpbmc6IDIwcHggMDtcbmJvcmRlci1ib3R0b206IHNvbGlkIDFweCBsaWdodGdyYXk7XG59XG4ucG9pbnRlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchUser\" placeholder=\"Search Developers..\"\n    aria-label=\"Recipient's username\" aria-describedby=\"button-addon2\">\n\n<div class=\"container\">\n    <div class=\"row\" *ngFor=\"let list of users | filter:searchUser\">\n        <div class=\"col-sm-12\">\n<a class=\"pointer\" (click)=onGettingDetails(list)>\n            <div class=\"user-box\">\n                <div class=\"row\">\n                    <div class=\"col-sm-3\">\n                        <img src=\"{{list.profilePicture}}\" class=\"profile\">\n\n                    </div>\n                    <div class=\"col-sm-9\">\n\n                        <p><img src=\"../../assets/users.png\"> {{list.name}}</p>\n                        <div>\n                            <img src=\"../../assets/maps-and-flags.png\"> {{list.location}}, Joined on {{list.dateOfJoining}}\n                        </div>\n                        <br>\n                           <div *ngIf=\"list.paymentverificationStatus==0\"><img src=\"../../assets/error.png\"> Payment Unverified\n                            <span style=\"float:right;\"><b>$</b> {{list.rate}}/hour</span>\n                        </div> \n                    </div>\n                </div>\n                \n                \n            </div>\n        </a>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UsersComponent = /** @class */ (function () {
    function UsersComponent(apiservice, route) {
        this.apiservice = apiservice;
        this.route = route;
        this.users = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiservice.callApi('GET', '', 'user', '').subscribe(function (data) {
            for (var i = 0; i < data.length; i++) //logic which doesnot show its own data in developers
             {
                if (data[i].email != localStorage.getItem('userEmail')) {
                    _this.users.push(data[i]);
                }
            }
        });
    };
    UsersComponent.prototype.onGettingDetails = function (list) {
        this.apiservice.passUserDetails(list);
        localStorage.setItem('userDetails', JSON.stringify(list));
        this.route.navigate(['user-details']);
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UsersComponent);
    return UsersComponent;
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
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyB1Opv4NNoDtnPviOx9pFR0DAAg-Jr3EF4",
        authDomain: "upwork-5d46d.firebaseapp.com",
        databaseURL: "https://upwork-5d46d.firebaseio.com",
        projectId: "upwork-5d46d",
        storageBucket: "upwork-5d46d.appspot.com",
        messagingSenderId: "147289780137"
    }
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nineleaps/new/angular-production/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map