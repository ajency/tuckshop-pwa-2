webpackJsonp([1],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyPageModule", function() { return BuyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signout__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuyPageModule = (function () {
    function BuyPageModule() {
    }
    return BuyPageModule;
}());
BuyPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signout__["a" /* SignoutPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signout__["a" /* SignoutPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__signout__["a" /* SignoutPage */]
        ]
    })
], BuyPageModule);

//# sourceMappingURL=signout.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_service_app_service__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignoutPage = (function () {
    function SignoutPage(navCtrl, navParams, viewCtrl, appservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.appservice = appservice;
    }
    SignoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignoutPage');
    };
    SignoutPage.prototype.ngOnInit = function () {
        this.user = this.appservice.user_name;
    };
    SignoutPage.prototype.signOut = function () {
        var _this = this;
        this.viewCtrl.dismiss();
        this.appservice.signOut().then(function (res) {
            console.log("response from signout function", res);
            _this.navCtrl.push('home');
        })
            .catch(function (error) {
            console.log("error in signout ", error);
        });
    };
    return SignoutPage;
}());
SignoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signout',template:/*ion-inline-start:"/Users/aj-sujit/Documents/projects/tuckshop-pwa-2/src/pages/signout/signout.html"*/'<!--\n  Generated template for the SignoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header >\n\n  <ion-navbar class = "username">\n    <ion-title> Signed in as\n    {{user}}</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<!-- <ion-content padding class = "no-scroll">\n<h6>Signed in as\n    {{user}}</h6>\n\n\n<button margin-top ion-button color="ajency" (click)="signOut()">Sign out</button>\n\n</ion-content> -->\n\n<ion-list>\n  <ion-item>\n  	<h2>{{user}}</h2>\n  </ion-item>\n  <button ion-item (click)="signOut()" class="sign-out">Sign out</button>\n</ion-list>\n'/*ion-inline-end:"/Users/aj-sujit/Documents/projects/tuckshop-pwa-2/src/pages/signout/signout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_app_service_app_service__["a" /* AppServiceProvider */]])
], SignoutPage);

//# sourceMappingURL=signout.js.map

/***/ })

});
//# sourceMappingURL=1.js.map