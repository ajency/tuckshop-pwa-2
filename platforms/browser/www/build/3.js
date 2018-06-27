webpackJsonp([3],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_service_app_service__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(viewCtrl, l, navCtrl, zone, toastCtrl, appservice) {
        this.viewCtrl = viewCtrl;
        this.l = l;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.toastCtrl = toastCtrl;
        this.appservice = appservice;
        this.disabled = false; // variable to check if the sign in button is disabled
        this.loc = l;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        var stateObj = [];
        this.loc.pushState(stateObj, "HomePage", "/#/home");
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit home page");
        this.appservice.handleClientLoad().then(function (res) {
            console.log("response from handleClientLoad function");
            _this.navigateToSearch();
        })
            .catch(function (err) {
            console.log("Error in login check");
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter HomePage check');
        this.viewCtrl.showBackButton(false);
    };
    HomePage.prototype.signIn = function () {
        var _this = this;
        //   Sign in the user upon button click.
        this.appservice.signIn().then(function (res) {
            console.log("response from sign in ==>", res);
            _this.navigateToSearch();
        })
            .catch(function (error) {
            console.log("error in loggin in =>", error);
        });
    };
    HomePage.prototype.navigateToSearch = function () {
        // Navigate to the search page and send a empty parameter to search page
        this.navCtrl.push('SearchPage', { code: '' });
        console.log('Navigating to another module');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])({
        name: 'home',
        segment: 'home'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/aj-sujit/Documents/projects/tuckshop-pwa-2/src/pages/home/home.html"*/'\n<ion-header>\n	<ion-navbar align="center">\n		<ion-title>Welcome to Tuckshop</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content align = "center" padding>\n\n	<h2 text-center ion-text class="welcome" color="dark">\n		Grab some Tuck!\n	</h2>\n\n\n	<ion-img width="280" height="280" src="/assets/icon/tuckshop.jpg"></ion-img>\n	<div></div>\n\n\n	<div padding>\n		<button  ion-button block (click) = "signIn()" [disabled]="disabled" (click)="disabled=true"  color="ajency" class="login-btn" > Sign In </button>\n	</div>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/aj-sujit/Documents/projects/tuckshop-pwa-2/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* PlatformLocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_app_service_app_service__["a" /* AppServiceProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=3.js.map