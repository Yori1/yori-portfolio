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
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");




var routes = [
    { path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full' }
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

module.exports = "<router-outlet></router-outlet>\r\n"

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
        this.title = 'yori-portfolio';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/menu/menu.component */ "./src/app/shared/menu/menu.component.ts");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_7__);








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_lightbox__WEBPACK_IMPORTED_MODULE_7__["LightboxModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    color:black !important;\r\n    width: 100%;\r\n    margin: 0%;\r\n    background-color: #BFDBF7 !important;\r\n}\r\n\r\np {\r\n    font-size: 1.4em;\r\n}\r\n\r\n.flexbox-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n\r\n}\r\n\r\n#logo-list{\r\n    list-style-type:none;\r\n    float: left;\r\n    padding-left: 0px !important;\r\n    margin: 5px 0px 0px 15px !important;\r\n}\r\n\r\n#logo-list > li {\r\n    display: inline;\r\n    padding-right: 5px;\r\n}\r\n\r\n#picture{\r\n    border-radius: 50%;\r\n    width: 15em;\r\n}\r\n\r\n.separator{\r\n    height: auto;\r\n    margin-top: 10px;\r\n    margin-right: 5px;\r\n    margin-left: 5px;\r\n    width: 100%;\r\n    border-bottom-style: solid;\r\n    border-bottom-width: 2px;\r\n    border-bottom-color: #053C5E;\r\n}\r\n\r\n.header{\r\n    font-size: 2.0em;\r\n    color: #053C5E;\r\n    font-family: 'Righteous', cursive;\r\n}\r\n\r\n.sub-title{\r\n    margin-top: 15px;\r\n    font-size: 180%;\r\n    color: #053C5E;\r\n    font-family: 'Righteous', cursive;\r\n}\r\n\r\n.thumbnail {\r\n    width: 15em;\r\n}\r\n\r\n#programming-languages > img{\r\n    margin: 7px;\r\n    width: 4em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFVBQVU7SUFDVixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjs7QUFFckI7O0FBR0E7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFHQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFHQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBjb2xvcjpibGFjayAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JGREJGNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbn1cclxuXHJcbi5mbGV4Ym94LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG5cclxufVxyXG5cclxuXHJcbiNsb2dvLWxpc3R7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogNXB4IDBweCAwcHggMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jbG9nby1saXN0ID4gbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4jcGljdHVyZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAxNWVtO1xyXG59XHJcblxyXG5cclxuLnNlcGFyYXRvcntcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzA1M0M1RTtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMi4wZW07XHJcbiAgICBjb2xvcjogIzA1M0M1RTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuLnN1Yi10aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE4MCU7XHJcbiAgICBjb2xvcjogIzA1M0M1RTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuLnRodW1ibmFpbCB7XHJcbiAgICB3aWR0aDogMTVlbTtcclxufVxyXG5cclxuXHJcbiNwcm9ncmFtbWluZy1sYW5ndWFnZXMgPiBpbWd7XHJcbiAgICBtYXJnaW46IDdweDtcclxuICAgIHdpZHRoOiA0ZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n  <div id=\"content\" class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <div class=\"header\">Hey, I'm Yori</div>\r\n            <div id=\"introduction\">\r\n                <p>\r\n                    I'm a Dutch student at Fontys University of Applied Sciences where I'm currently studying\r\n                    Software\r\n                    Engineering and\r\n                    Smart Mobile.\r\n                </p>\r\n                <p>\r\n                    I have experience making desktop\r\n                    applications, fullstack webapplications, mobile applications and APIs.\r\n                </p>\r\n                <p>\r\n                    When I'm not working on software, I like playing video games, exercising or learning Japanese.\r\n                </p>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <img id=\"picture\" src=\"./assets/images/picture.jpg\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"separator\"></div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <div class=\"sub-title\">Kanji Shoubu</div>\r\n            <p>\r\n                An application made to help users specifically train their ability to read words in kanji (漢字).\r\n                It's different from a flash-card app, because the app can assemble a list of Japanese sentences for the words the user wants to learn,\r\n                 by querying the public Tatoeba-database with thousands of real Japanese sentences in it. \r\n\r\n            </p>\r\n            <p>\r\n                Japanese readings of kanji are generated using the MeCab library for Japanese character transcription.\r\n\r\n            </p>\r\n\r\n            <p>\r\n                Users can practice their sentences by themselves, or they can challenge other players who are online in a race to see who can accurately answer the fastest.\r\n            </p>\r\n            <div class=\"flexbox-container\">\r\n\r\n            \r\n                  </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n                <div  *ngFor=\"let image of _albums; let i=index\">\r\n                        <div class=\"flex-columns\">\r\n                                <img  class=\"thumbnail\" [src]=\"image.thumb\" (click)=\"open(i)\"/>\r\n        \r\n                        </div>\r\n        \r\n                        </div>\r\n        </div>\r\n    </div>\r\n  \r\n    <div class=\"sub-title\">Some skills that I got to apply with this project</div>\r\n    <div id=\"programming-languages\">\r\n        <img src=\"./assets/images/programming-languages/c-sharp-logo.png\">\r\n        <img src=\"./assets/images/programming-languages/java-logo.png\">\r\n        <img src=\"./assets/images/programming-languages/javascript-logo.png\">\r\n        <img src=\"./assets/images/programming-languages/css-logo.png\">\r\n        <img src=\"./assets/images/programming-languages/html-logo.png\">\r\n        <img src=\"./assets/images/programming-languages/typescript-logo.png\">\r\n        <img src=\"./assets/images/programming-languages/mysql-logo.png\">\r\n        <img src=\"./assets/images/programming-languages/sql-server-logo.png\">\r\n\r\n        </div>\r\n        </div>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__);



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_lightbox) {
        this._lightbox = _lightbox;
        this._albums = [];
        for (var i = 1; i <= 4; i++) {
            var src = './assets/images/shoubu/' + i + '.png';
            var caption = 'Screenshot ' + i;
            var thumb = './assets/images/shoubu/' + i + '.png';
            var album = {
                src: src,
                caption: caption,
                thumb: thumb
            };
            this._albums.push(album);
        }
    }
    HomeComponent.prototype.open = function (index) {
        // open lightbox
        this._lightbox.open(this._albums, index);
    };
    HomeComponent.prototype.close = function () {
        // close lightbox programmatically
        this._lightbox.close();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__["Lightbox"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/menu/menu.component.css":
/*!************************************************!*\
  !*** ./src/app/shared/menu/menu.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#menu{\r\n    background-color: #053C5E;\r\n    margin-bottom: 10px;\r\n\r\n\r\n}\r\n\r\n.navbar-brand {\r\n    font-size: 1.4em;\r\n    color:#D8B4A0 !important;\r\n}\r\n\r\n.nav-link {\r\n    color:#D8B4A0 !important;\r\n    font-size: 1.4em;\r\n    margin: 0.1em;\r\n    \r\n}\r\n\r\n.brown{\r\n}\r\n\r\n@media only screen and (min-width: 993px) {\r\n    .nav-link {\r\n        float: left;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21lbnUvbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjs7O0FBR3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsYUFBYTs7QUFFakI7O0FBSUE7QUFDQTs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWVudXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTNDNUU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuXHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGNvbG9yOiNEOEI0QTAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiNEOEI0QTAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBtYXJnaW46IDAuMWVtO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuLmJyb3due1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5M3B4KSB7XHJcbiAgICAubmF2LWxpbmsge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/menu/menu.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/menu/menu.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"menu\" class=\"navbar navbar-expand-lg navbar-light\">\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">About</a>\r\n        <a class=\"nav-link\" href=\"#\">Kanji Renshuu</a>\r\n        <a class=\"nav-link\" href=\"#\">Attack-And-Defend</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <a class=\"navbar-brand brown\" href=\"#\">Yori Garcia Rosario</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n</nav>\r\n\r\n<!--<div id=\"upper-bar\">\r\n    \r\n    <div id=\"menu-link-group\">\r\n        <div>About me</div>\r\n        <div>Kanji Shoubu</div>\r\n        <div>Attack Defend</div>\r\n    </div>\r\n    <ul id=\"logo-list\">\r\n        <li>\r\n            <a target=\"_blank\" href=\"https://github.com/Yori1\">\r\n                <img id=\"github-logo\" class=\"logo\" src=\"./assets/images/github-logo.png\">\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a target=\"_blank\" href=\"https://www.linkedin.com/in/yori-garcia-rosario-b5021b135/\">\r\n                <img id=\"linkedin-logo\" class=\"logo\" src=\"./assets/images/linkedin-logo.png\">\r\n            </a>\r\n  \r\n        </li>\r\n  \r\n    </ul>\r\n  </div>-->"

/***/ }),

/***/ "./src/app/shared/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/shared/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/shared/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\Yori\Documents\Projects\yori-portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map