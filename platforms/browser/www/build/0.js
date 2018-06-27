webpackJsonp([0],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialsPageModule", function() { return SpecialsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__specials__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpecialsPageModule = (function () {
    function SpecialsPageModule() {
    }
    return SpecialsPageModule;
}());
SpecialsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__specials__["a" /* SpecialsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__specials__["a" /* SpecialsPage */]),
        ],
    })
], SpecialsPageModule);

//# sourceMappingURL=specials.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialsPage; });
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
 * Generated class for the SpecialsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SpecialsPage = (function () {
    function SpecialsPage(navCtrl, navParams, appservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appservice = appservice;
        this.morning_special = [];
        this.evening_special = [];
    }
    SpecialsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpecialsPage');
    };
    SpecialsPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Inside ngOnInit SpecialsPage");
        this.appservice.handleClientLoad().then(function (res) {
            _this.callSpecialOrdersApi();
        })
            .catch(function (error) {
            _this.navCtrl.push('home');
        });
    };
    SpecialsPage.prototype.callSpecialOrdersApi = function () {
        var _this = this;
        console.log("Inside special order api call function");
        var url = "https://content-script.googleapis.com/v1/scripts/" + this.appservice.script_id + ":run";
        var body = {
            function: "getSpecialsOrder",
            parameters: ""
        };
        this.appservice.request(url, 'post', body, {}, false, 'promise').then(function (res) {
            console.log("response from search api ==>", res);
            _this.specials = res.response.result;
            _this.sortSpecials();
        })
            .catch(function (error) {
            console.log("error from search api", error);
        });
    };
    SpecialsPage.prototype.sortSpecials = function () {
        var special_morning = this.specials[0].item;
        for (var i = 0; i < this.specials.length; i++) {
            if (this.specials[i].item == special_morning) {
                this.morning_special.push(this.specials[i]);
            }
            else {
                this.evening_special.push(this.specials[i]);
            }
        }
    };
    SpecialsPage.prototype.closeOrder = function (user, time, index) {
        var _this = this;
        if (user.order_status == 'open') {
            console.log('Close oreder for ==>', user, time, index);
            var body = {
                function: 'close_order',
                parameters: [user.email, user.item, user.date_of_order]
            };
            var url = "https://content-script.googleapis.com/v1/scripts/" + this.appservice.script_id + ":run";
            this.appservice.request(url, 'post', body, {}, false, 'promise').then(function (res) {
                console.log("response from search api ==>", res);
                if (res.response.result === true) {
                    if (time == 'morning') {
                        _this.morning_special[index].order_status = 'closed';
                    }
                    else {
                        _this.evening_special[index].order_status = 'closed';
                    }
                }
                else {
                    var toast = _this.appservice.presentToast("Something unexpected happened", 'error', 5000, false, 'bottom', '');
                }
            })
                .catch(function (error) {
                console.log("error from search api", error);
            });
        }
    };
    return SpecialsPage;
}());
SpecialsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])({
        name: 'SpecialsPage',
        segment: 'specials'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-specials',template:/*ion-inline-start:"/Users/aj-sujit/Documents/projects/tuckshop-pwa-2/src/pages/specials/specials.html"*/'<!--\n  Generated template for the SpecialsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n	<ion-navbar align="center" color="ajency">\n		<ion-title>Tuckshop</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<div *ngIf="specials" class="specials">\n		<div *ngIf="morning_special && morning_special.length != 0" class="specials__holder">\n			<div class="specials__heading">\n				<b>{{morning_special[0].item}}</b>\n				<span>{{morning_special[0].date_of_order}}</span>\n			</div>\n			<div class="specials__lists">\n				<ion-list *ngFor="let user of morning_special; let i = index">\n					<!-- {{user.avatar}}<br> -->\n					 <ion-avatar item-start (click)="closeOrder(user,\'morning\',i)" [ngClass]="{active : user.order_status == \'closed\'}">\n					      <img src={{user.avatar}} width="70" class="avatar-img">\n					      <ion-icon name="checkmark" class="checkmark"></ion-icon>\n					      <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filter">\n						    <defs>\n						        <filter id="svgfilter" x="0%" y="0%" width="100%" height="100%">\n						            <feColorMatrix result="original" id="svgcolormatrix" type="matrix" values="-0.8 0.1 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 -0.04"></feColorMatrix>\n						        </filter>\n						    </defs>\n						</svg>\n				    </ion-avatar>\n				</ion-list>\n			</div>\n		</div>\n\n		<div *ngIf="evening_special && evening_special.length != 0" class="specials__holder">\n			<div class="specials__heading">\n				<b>{{evening_special[0].item}}</b>\n				<span>{{evening_special[0].date_of_order}}</span>\n			</div>\n			<div class="specials__lists">\n				<ion-list *ngFor="let user of evening_special; let i = index">\n					<ion-avatar item-start (click)="closeOrder(user, \'evening\', i)" [ngClass]="{active : user.order_status == \'closed\'}">\n						<img src={{user.avatar}} width="70" class="avatar-img">\n						<ion-icon name="checkmark" class="checkmark"></ion-icon>\n						<svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filter">\n						    <defs>\n						        <filter id="svgfilter" x="0%" y="0%" width="100%" height="100%">\n						            <feColorMatrix result="original" id="svgcolormatrix" type="matrix" values="-0.8 0.1 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 -0.04"></feColorMatrix>\n						        </filter>\n						    </defs>\n						</svg>\n					</ion-avatar>\n				</ion-list>\n			</div>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/aj-sujit/Documents/projects/tuckshop-pwa-2/src/pages/specials/specials.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_app_service_app_service__["a" /* AppServiceProvider */]])
], SpecialsPage);

//# sourceMappingURL=specials.js.map

/***/ })

});
//# sourceMappingURL=0.js.map