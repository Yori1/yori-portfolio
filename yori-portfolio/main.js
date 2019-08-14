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

module.exports = "<router-outlet></router-outlet>\n"

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

module.exports = "body{\n    color:black !important;\n    width: 100%;\n    margin: 0%;\n    background-color: #BFDBF7 !important;\n}\n\np {\n    font-size: 1.4em;\n}\n\n.flexbox-container {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n\n}\n\n#logo-list{\n    list-style-type:none;\n    float: left;\n    padding-left: 0px !important;\n    margin: 5px 0px 0px 15px !important;\n}\n\n#logo-list > li {\n    display: inline;\n    padding-right: 5px;\n}\n\n#picture{\n    border-radius: 50%;\n    width: 15em;\n}\n\n.separator{\n    height: auto;\n    margin-top: 10px;\n    margin-right: 5px;\n    margin-left: 5px;\n    width: 100%;\n    border-bottom-style: solid;\n    border-bottom-width: 2px;\n    border-bottom-color: #053C5E;\n}\n\n.header{\n    font-size: 2.0em;\n    color: #053C5E;\n    font-family: 'Righteous', cursive;\n}\n\n.sub-title{\n    margin-top: 15px;\n    font-size: 180%;\n    color: #053C5E;\n    font-family: 'Righteous', cursive;\n}\n\n.thumbnail {\n    width: 15em;\n}\n\n#programming-languages > img{\n    margin: 7px;\n    width: 4em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFVBQVU7SUFDVixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjs7QUFFckI7O0FBR0E7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFHQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFHQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgY29sb3I6YmxhY2sgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCRkRCRjcgIWltcG9ydGFudDtcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbn1cblxuLmZsZXhib3gtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG5cbn1cblxuXG4jbG9nby1saXN0e1xuICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMHB4IDBweCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbiNsb2dvLWxpc3QgPiBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuI3BpY3R1cmV7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAxNWVtO1xufVxuXG5cbi5zZXBhcmF0b3J7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzA1M0M1RTtcbn1cblxuLmhlYWRlcntcbiAgICBmb250LXNpemU6IDIuMGVtO1xuICAgIGNvbG9yOiAjMDUzQzVFO1xuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcbn1cblxuLnN1Yi10aXRsZXtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTgwJTtcbiAgICBjb2xvcjogIzA1M0M1RTtcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XG59XG5cbi50aHVtYm5haWwge1xuICAgIHdpZHRoOiAxNWVtO1xufVxuXG5cbiNwcm9ncmFtbWluZy1sYW5ndWFnZXMgPiBpbWd7XG4gICAgbWFyZ2luOiA3cHg7XG4gICAgd2lkdGg6IDRlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n  <div id=\"content\" class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <div class=\"header\">Hey, I'm Yori</div>\n            <div id=\"introduction\">\n                <p>\n                    I'm a Dutch student at Fontys University of Applied Sciences where I'm currently studying\n                    Software\n                    Engineering and\n                    Smart Mobile.\n                </p>\n                <p>\n                    I have experience making desktop\n                    applications, fullstack webapplications, mobile applications and APIs.\n                </p>\n                <p>\n                    When I'm not working on software, I like playing video games, exercising or learning Japanese.\n                </p>\n            </div>\n\n        </div>\n        <div class=\"col-md-3\">\n            <img id=\"picture\" src=\"./assets/images/picture.jpg\" />\n        </div>\n    </div>\n    <div class=\"separator\"></div>\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <div class=\"sub-title\">Kanji Shoubu</div>\n            <p>\n                An application made to help users specifically train their ability to read words in kanji (漢字).\n                It's different from a flash-card app, because the app can assemble a list of Japanese sentences for the words the user wants to learn,\n                 by querying the public Tatoeba-database with thousands of real Japanese sentences in it. \n\n            </p>\n            <p>\n                Japanese readings of kanji are generated using the MeCab library for Japanese character transcription.\n\n            </p>\n\n            <p>\n                Users can practice their sentences by themselves, or they can challenge other players who are online in a race to see who can accurately answer the fastest.\n            </p>\n            <div class=\"flexbox-container\">\n\n            \n                  </div>\n        </div>\n        <div class=\"col-md-4\">\n                <div  *ngFor=\"let image of _albums; let i=index\">\n                        <div class=\"flex-columns\">\n                                <img  class=\"thumbnail\" [src]=\"image.thumb\" (click)=\"open(i)\"/>\n        \n                        </div>\n        \n                        </div>\n        </div>\n    </div>\n  \n    <div class=\"sub-title\">Some skills that I got to apply with this project</div>\n    <div id=\"programming-languages\">\n        <img src=\"./assets/images/programming-languages/c-sharp-logo.png\">\n        <img src=\"./assets/images/programming-languages/java-logo.png\">\n        <img src=\"./assets/images/programming-languages/javascript-logo.png\">\n        <img src=\"./assets/images/programming-languages/css-logo.png\">\n        <img src=\"./assets/images/programming-languages/html-logo.png\">\n        <img src=\"./assets/images/programming-languages/typescript-logo.png\">\n        <img src=\"./assets/images/programming-languages/mysql-logo.png\">\n        <img src=\"./assets/images/programming-languages/sql-server-logo.png\">\n\n        </div>\n        </div>\n"

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

module.exports = "#menu{\n    background-color: #053C5E;\n    margin-bottom: 10px;\n\n\n}\n\n.navbar-brand {\n    font-size: 1.4em;\n    color:#D8B4A0 !important;\n}\n\n.nav-link {\n    color:#D8B4A0 !important;\n    font-size: 1.4em;\n    margin: 0.1em;\n    \n}\n\n.brown{\n}\n\n@media only screen and (min-width: 993px) {\n    .nav-link {\n        float: left;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21lbnUvbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjs7O0FBR3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsYUFBYTs7QUFFakI7O0FBSUE7QUFDQTs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWVudXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUzQzVFO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cblxufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGNvbG9yOiNEOEI0QTAgIWltcG9ydGFudDtcbn1cblxuLm5hdi1saW5rIHtcbiAgICBjb2xvcjojRDhCNEEwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICBtYXJnaW46IDAuMWVtO1xuICAgIFxufVxuXG5cblxuLmJyb3due1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5M3B4KSB7XG4gICAgLm5hdi1saW5rIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/menu/menu.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/menu/menu.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"menu\" class=\"navbar navbar-expand-lg navbar-light\">\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">About</a>\n        <a class=\"nav-link\" href=\"#\">Kanji Renshuu</a>\n        <a class=\"nav-link\" href=\"#\">Attack-And-Defend</a>\n      </li>\n    </ul>\n  </div>\n  <a class=\"navbar-brand brown\" href=\"#\">Yori Garcia Rosario</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n</nav>\n\n<!--<div id=\"upper-bar\">\n    \n    <div id=\"menu-link-group\">\n        <div>About me</div>\n        <div>Kanji Shoubu</div>\n        <div>Attack Defend</div>\n    </div>\n    <ul id=\"logo-list\">\n        <li>\n            <a target=\"_blank\" href=\"https://github.com/Yori1\">\n                <img id=\"github-logo\" class=\"logo\" src=\"./assets/images/github-logo.png\">\n            </a>\n        </li>\n        <li>\n            <a target=\"_blank\" href=\"https://www.linkedin.com/in/yori-garcia-rosario-b5021b135/\">\n                <img id=\"linkedin-logo\" class=\"logo\" src=\"./assets/images/linkedin-logo.png\">\n            </a>\n  \n        </li>\n  \n    </ul>\n  </div>-->"

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

module.exports = __webpack_require__(/*! C:\Users\yorep\Documents\projects\yori-portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map