webpackJsonp([4],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyPageModule", function() { return BuyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buy__ = __webpack_require__(289);
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
            __WEBPACK_IMPORTED_MODULE_2__buy__["a" /* BuyPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buy__["a" /* BuyPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__buy__["a" /* BuyPage */]
        ]
    })
], BuyPageModule);

//# sourceMappingURL=buy.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyPage; });
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



/**
 * Generated class for the BuyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BuyPage = (function () {
    function BuyPage(navCtrl, navParams, viewCtrl, toastCtrl, appservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.appservice = appservice;
        this.item = [];
        this.item = this.navParams.get('item');
        this.quantity = 1;
    }
    BuyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuyPage');
    };
    BuyPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    BuyPage.prototype.onBuy = function (ev) {
        var _this = this;
        console.log("onBuy", ev, this.quantity);
        this.viewCtrl.dismiss();
        var user = this.appservice.user_email;
        var avatar = this.appservice.user_profile_pic;
        console.log(user);
        // Create execution request.
        var request = {
            'function': 'log',
            'parameters': [ev, user, this.quantity, avatar]
        };
        // Make the request.
        var url = "https://content-script.googleapis.com/v1/scripts/" + this.appservice.script_id + ":run";
        var toast = this.waitingToast();
        this.appservice.request(url, 'post', request, {}, false, 'promise').then(function (res) {
            console.log("response from log api ==>", res);
            toast.dismiss();
            _this.confirmationToast();
        })
            .catch(function (error) {
            console.log("error from search api", error);
            toast.dismiss();
            _this.requestFailedToast();
        });
    };
    BuyPage.prototype.confirmationToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Order placed successfully!!',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    BuyPage.prototype.requestFailedToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Order failed!   Please check your internet connection',
            position: 'bottom',
            showCloseButton: true
        });
        toast.present();
    };
    BuyPage.prototype.waitingToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Please wait...',
            duration: 15000,
            position: 'bottom',
        });
        toast.present();
        return toast;
    };
    return BuyPage;
}());
BuyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-buy',template:/*ion-inline-start:"/Users/aj-sujit/Documents/projects/tuckshop-pwa-2/src/pages/buy/buy.html"*/'<!--\n  Generated template for the BuyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<ion-title>Are you sure you want to buy?</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content padding class =  "scroll">\n	<ion-list no-lines>\n		<ion-item no-padding>\n			<div item-left>\n				{{item.itemName}}\n			</div>\n			<div item-end>\n			  <small>Rs.</small>{{item.price}}\n			</div>\n		</ion-item>\n\n		<ion-item no-padding>\n 		    <ion-label>Quantity</ion-label>\n 		    <ion-select [(ngModel)]="quantity">\n 		      <ion-option value="1" >1</ion-option>\n 		      <ion-option value="2">2</ion-option>\n 		      <!-- <ion-option value="3">3</ion-option>\n 		      <ion-option value="4">4</ion-option>\n 		      <ion-option value="5">5</ion-option> -->\n 		    </ion-select>\n 		  </ion-item>\n	\n	</ion-list>\n\n	\n\n		<!-- <div item-end> Quantity :\n\n    <ion-input type="number" placeholder="count" [(ngModel)]="count" min = 1></ion-input>\n \n     </div> -->	\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar>\n		<ion-buttons >\n			<button ion-button color="danger" (click)="dismiss()">\n				Cancel\n			</button>\n		</ion-buttons>\n		<ion-buttons end>\n			<button ion-button color="dark" (click) = "onBuy(item.itemCode)">\n				Buy\n			</button>\n		</ion-buttons>\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/aj-sujit/Documents/projects/tuckshop-pwa-2/src/pages/buy/buy.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_app_service_app_service__["a" /* AppServiceProvider */]])
], BuyPage);

//# sourceMappingURL=buy.js.map

/***/ })

});
//# sourceMappingURL=4.js.map