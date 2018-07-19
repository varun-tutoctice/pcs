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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/nav/nav.component */ "./src/app/home/nav/nav.component.ts");
/* harmony import */ var _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/footer/footer.component */ "./src/app/home/footer/footer.component.ts");
/* harmony import */ var _home_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/aboutus/aboutus.component */ "./src/app/home/aboutus/aboutus.component.ts");
/* harmony import */ var _home_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/clients/clients.component */ "./src/app/home/clients/clients.component.ts");
/* harmony import */ var _home_servicelevels_servicelevels_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/servicelevels/servicelevels.component */ "./src/app/home/servicelevels/servicelevels.component.ts");
/* harmony import */ var _home_services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/services/services.component */ "./src/app/home/services/services.component.ts");
/* harmony import */ var _home_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/contactus/contactus.component */ "./src/app/home/contactus/contactus.component.ts");
/* harmony import */ var _home_payment_payment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/payment/payment.component */ "./src/app/home/payment/payment.component.ts");
/* harmony import */ var _home_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/homepage/homepage.component */ "./src/app/home/homepage/homepage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _home_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _home_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__["AboutusComponent"],
                _home_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__["ClientsComponent"],
                _home_servicelevels_servicelevels_component__WEBPACK_IMPORTED_MODULE_9__["ServicelevelsComponent"],
                _home_services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"],
                _home_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_11__["ContactusComponent"],
                _home_payment_payment_component__WEBPACK_IMPORTED_MODULE_12__["PaymentComponent"],
                _home_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__["HomepageComponent"]
            ],
            imports: [
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/aboutus/aboutus.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/aboutus/aboutus.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/aboutus/aboutus.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/aboutus/aboutus.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  aboutus works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/aboutus/aboutus.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/aboutus/aboutus.component.ts ***!
  \***************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/home/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/home/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/home/clients/clients.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/clients/clients.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/clients/clients.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/clients/clients.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  clients works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/clients/clients.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/clients/clients.component.ts ***!
  \***************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientsComponent = /** @class */ (function () {
    function ClientsComponent() {
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    ClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/home/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.css */ "./src/app/home/clients/clients.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/home/contactus/contactus.component.css":
/*!********************************************************!*\
  !*** ./src/app/home/contactus/contactus.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/contactus/contactus.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/contactus/contactus.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contactus works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/contactus/contactus.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/contactus/contactus.component.ts ***!
  \*******************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/home/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/home/contactus/contactus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/home/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"page-footer font-small unique-color-dark\">\n\n  <div style=\"background-color: #2196f3;\">\n    <div class=\"container\">\n\n      <!-- Grid row-->\n      <div class=\"row py-4 d-flex align-items-center\">\n\n        <!-- Grid column -->\n        <div class=\"col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0\">\n          <h6 class=\"mb-0\">Get connected with us on social networks!</h6>\n        </div>\n        <!-- Grid column -->\n\n        <!-- Grid column -->\n        <div class=\"col-md-6 col-lg-7 text-center text-md-right\">\n\n          <!-- Facebook -->\n          <a class=\"fb-ic\">\n            <i class=\"fa fa-facebook white-text mr-4\"> </i>\n          </a>\n          <!-- Twitter -->\n          <a class=\"tw-ic\">\n            <i class=\"fa fa-twitter white-text mr-4\"> </i>\n          </a>\n          <!-- Google +-->\n          <a class=\"gplus-ic\">\n            <i class=\"fa fa-google-plus white-text mr-4\"> </i>\n          </a>\n          <!--Linkedin -->\n          <a class=\"li-ic\">\n            <i class=\"fa fa-linkedin white-text mr-4\"> </i>\n          </a>\n          <!--Instagram-->\n          <a class=\"ins-ic\">\n            <i class=\"fa fa-instagram white-text\"> </i>\n          </a>\n\n        </div>\n        <!-- Grid column -->\n\n      </div>\n      <!-- Grid row-->\n\n    </div>\n  </div>\n\n  <!-- Footer Links -->\n  <div class=\"container text-center text-md-left mt-5\">\n\n    <!-- Grid row -->\n    <div class=\"row mt-3\">\n\n      <!-- Grid column -->\n      <div class=\"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4\">\n\n        <!-- Content -->\n        <h6 class=\"text-uppercase font-weight-bold\">PCS ONSITE</h6>\n        <hr class=\" blue lighten-1 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\n        <p>We specialize in repair and calibration of all brands of pipettes, including multi-channel and electronic pipettes.</p>\n\n      </div>\n      <!-- Grid column -->\n\n      <!-- Grid column -->\n      <div class=\"col-md-2 col-lg-2 col-xl-2 mx-auto mb-4\">\n\n        <!-- Links -->\n        <h6 class=\"text-uppercase font-weight-bold\">Services</h6>\n        <hr class=\" blue lighten-1 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\n        <p>\n          <a href=\"#!\">Onsite Repair</a>\n        </p>\n        <p>\n          <a href=\"#!\">Onsite Training</a>\n        </p>\n        <p>\n          <a href=\"#!\">Weekend Service</a>\n        </p>\n        <p>\n          <a href=\"#!\">Service Reminder</a>\n        </p>\n\n      </div>\n      <!-- Grid column -->\n\n      <!-- Grid column -->\n      <div class=\"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4\">\n\n        <!-- Links -->\n        <h6 class=\"text-uppercase font-weight-bold\">Service Levels</h6>\n        <hr class=\" blue lighten-1 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\n        <p>\n          <a href=\"#!\">level 1</a>\n        </p>\n        <p>\n          <a href=\"#!\">Level 2</a>\n        </p>\n        <p>\n          <a href=\"#!\">Level 3</a>\n        </p>\n\n\n      </div>\n      <!-- Grid column -->\n\n      <!-- Grid column -->\n      <div class=\"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4\">\n\n        <!-- Links -->\n        <h6 class=\"text-uppercase font-weight-bold\">Contact</h6>\n        <hr class=\" blue lighten-1 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\n        <p>\n          <i class=\"fa fa-home mr-3\"></i> Maryland, MD 10012, US</p>\n        <p>\n          <i class=\"fa fa-envelope mr-3\"></i>pcsonsite@gmail.com</p>\n        <p>\n          <i class=\"fa fa-phone mr-3\"></i>+1 (240) 381-5325</p>\n\n      </div>\n      <!-- Grid column -->\n\n    </div>\n    <!-- Grid row -->\n\n  </div>\n  <!-- Footer Links -->\n\n  <!-- Copyright -->\n  <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\n    <a href=\"www.pcs-online.com\"> PCS-ONSITE.COM</a>\n  </div>\n  <!-- Copyright -->\n\n</footer>\n<!-- Footer -->"

/***/ }),

/***/ "./src/app/home/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/home/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/home/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<app-homepage></app-homepage>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/homepage/homepage.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/homepage/homepage.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* .carousel-item img {\r\n    height: 100%;\r\n } */\r\n .carousel-item{\r\n     height: 100%;\r\n }\r\n \r\n "

/***/ }),

/***/ "./src/app/home/homepage/homepage.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/homepage/homepage.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n\t<div class=\"carousel-inner\"  role=\"listbox\">\n    <div class=\"carousel-item active\"><img class=\"d-block img-fluid\" alt=\"First slide\"  src=\"http://placehold.it/1900x670\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h3>First Slide</h3>\n        <p>This is a description for the second slide.</p>\n      </div></div>\n    \n    <div class=\"carousel-item\"><img class=\"d-block img-fluid\" alt=\"Second slide\"  src=\"http://placehold.it/1900x670\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h3>second Slide</h3>\n        <p>This is a description for the second slide.</p>\n      </div></div>\n    <div class=\"carousel-item\"><img  class=\"d-block img-fluid\" alt=\"Third slide\"  src=\"http://placehold.it/1900x670\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h3>Third Slide</h3>\n        <p>This is a description for the second slide.</p>\n      </div></div>\n\t</div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<div class=\"my-4 mt-3 container\">\n\n  <!--Section: Best Features-->\n  <section id=\"best-features\" class=\"text-center\">\n\n      <!-- Heading -->\n      <h2 class=\"mb-3 font-weight-bold\">Welcome to Precision Calibration Services</h2>\n\n      <!--Grid row-->\n      <div class=\"row d-flex justify-content-center mb-4\">\n\n          <!--Grid column-->\n          <div class=\"col-md-8\">\n\n              <!-- Description -->\n              <p class=\"grey-text\">We specialize in repair and calibration of all brands of pipettes, including multi-channel and electronic pipettes.</p>\n\n          </div>\n          <!--Grid column-->\n      </div>\n      <!--Grid row-->\n<!-- <div><h4 class=\"mb-3 my-5 font-weight-bold\">What we Offer our Clients</h4></div> -->\n      <!--Grid row-->\n      <div class=\"row\">\n\n          <!--Grid column-->\n          <div class=\"col-md-4 mb-5\">\n              <i class=\"fa fa-thumbs-up fa-4x blue-text\"></i>\n              <h4 class=\"my-4 font-weight-bold\">Accurate & Reliable</h4>\n              <p class=\"grey-text\">Accurate & Reliable Calibration and Repair Services for Pipettes and Balances.</p>\n          </div>\n          <!--Grid column-->\n\n          <!--Grid column-->\n          <div class=\"col-md-4 mb-1\">\n              <i class=\"fa fa-users  fa-4x blue-text\"></i>\n              <h4 class=\"my-4 font-weight-bold\">Highly trained</h4>\n              <p class=\"grey-text\">Highly trained technicians who have extensive experience in the field, and are trained according to Standard Operating Procedures.</p>\n          </div>\n          <!--Grid column-->\n\n          <!--Grid column-->\n          <div class=\"col-md-4 mb-1\">\n              <i class=\"fa fa-usd fa-4x blue-text\"></i>\n              <h4 class=\"my-4 font-weight-bold\">Low Price</h4>\n              <p class=\"grey-text\">Repair and Calibration for all major brands of pipettes, including multi-channel and electric pipettes.\n                High-quality calibration services at low price</p>\n          </div>\n          <!--Grid column-->\n\n      </div>\n      <!--Grid row-->\n\n  </section>\n  <!--Section: Best Features-->\n</div>\n\n\n\n "

/***/ }),

/***/ "./src/app/home/homepage/homepage.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/homepage/homepage.component.ts ***!
  \*****************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
        $('.carousel').carousel({
            interval: 6000,
            pause: "false"
        });
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/home/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/home/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/home/nav/nav.component.css":
/*!********************************************!*\
  !*** ./src/app/home/nav/nav.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .navbar {\r\n    position: relative;\r\n}\r\n.nav-brand {\r\n    position: absolute;\r\n    left: 50%;\r\n    margin-left: -50px !important;\r\n    display: block;\r\n} */\r\n\r\n/* #navbar-primary .navbar-nav {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n#navbar-primary .navbar-nav > li {\r\n  display: inline-block;\r\n  float: none;\r\n}\r\n#navbar-primary .navbar-nav > li > a {\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n} */\r\n\r\n.top-nav-collapse {\r\n  background-color: #24355C;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n.navbar:not(.top-nav-collapse) {\r\n  background: #24355C;\r\n}\r\n}\r\n\r\n@media (min-width: 800px) and (max-width: 850px) {\r\n.navbar:not(.top-nav-collapse) {\r\n  background: #24355C;\r\n}\r\n}"

/***/ }),

/***/ "./src/app/home/nav/nav.component.html":
/*!*********************************************!*\
  !*** ./src/app/home/nav/nav.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n\n    <a class=\"navbar-brand\" href=\"/\">  <img src=\"../../../assets/pcslogosample.png\" width=\"150\" height=\"70\" alt=\"\" ></a>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"about.html\">About</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"services.html\">Services</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"contact.html\">Contact</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownPortfolio\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Portfolio\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownPortfolio\">\n            <a class=\"dropdown-item\" href=\"portfolio-1-col.html\">1 Column Portfolio</a>\n            <a class=\"dropdown-item\" href=\"portfolio-2-col.html\">2 Column Portfolio</a>\n            <a class=\"dropdown-item\" href=\"portfolio-3-col.html\">3 Column Portfolio</a>\n            <a class=\"dropdown-item\" href=\"portfolio-4-col.html\">4 Column Portfolio</a>\n            <a class=\"dropdown-item\" href=\"portfolio-item.html\">Single Portfolio Item</a>\n          </div>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownBlog\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Blog\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownBlog\">\n            <a class=\"dropdown-item\" href=\"blog-home-1.html\">Blog Home 1</a>\n            <a class=\"dropdown-item\" href=\"blog-home-2.html\">Blog Home 2</a>\n            <a class=\"dropdown-item\" href=\"blog-post.html\">Blog Post</a>\n          </div>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownBlog\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Other Pages\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownBlog\">\n            <a class=\"dropdown-item\" href=\"full-width.html\">Full Width Page</a>\n            <a class=\"dropdown-item\" href=\"sidebar.html\">Sidebar Page</a>\n            <a class=\"dropdown-item\" href=\"faq.html\">FAQ</a>\n            <a class=\"dropdown-item\" href=\"404.html\">404</a>\n            <a class=\"dropdown-item\" href=\"pricing.html\">Pricing Table</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n \n</nav>\n"

/***/ }),

/***/ "./src/app/home/nav/nav.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/nav/nav.component.ts ***!
  \*******************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/home/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/home/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/home/payment/payment.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/payment/payment.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/payment/payment.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/payment/payment.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  payment works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/payment/payment.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/payment/payment.component.ts ***!
  \***************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/home/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/home/payment/payment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/home/servicelevels/servicelevels.component.css":
/*!****************************************************************!*\
  !*** ./src/app/home/servicelevels/servicelevels.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/servicelevels/servicelevels.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/home/servicelevels/servicelevels.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  servicelevels works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/servicelevels/servicelevels.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/servicelevels/servicelevels.component.ts ***!
  \***************************************************************/
/*! exports provided: ServicelevelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicelevelsComponent", function() { return ServicelevelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicelevelsComponent = /** @class */ (function () {
    function ServicelevelsComponent() {
    }
    ServicelevelsComponent.prototype.ngOnInit = function () {
    };
    ServicelevelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servicelevels',
            template: __webpack_require__(/*! ./servicelevels.component.html */ "./src/app/home/servicelevels/servicelevels.component.html"),
            styles: [__webpack_require__(/*! ./servicelevels.component.css */ "./src/app/home/servicelevels/servicelevels.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicelevelsComponent);
    return ServicelevelsComponent;
}());



/***/ }),

/***/ "./src/app/home/services/services.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/services/services.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/services/services.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/services/services.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  services works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/services/services.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/services/services.component.ts ***!
  \*****************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/home/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/home/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Angular\pcs\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map