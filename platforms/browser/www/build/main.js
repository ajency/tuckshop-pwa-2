webpackJsonp([5],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/buy/buy.module": [
		284,
		4
	],
	"../pages/home/home.module": [
		285,
		3
	],
	"../pages/search/search.module": [
		286,
		2
	],
	"../pages/signout/signout.module": [
		287,
		1
	],
	"../pages/specials/specials.module": [
		288,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppServiceProvider = (function () {
    function AppServiceProvider(http, toastCtrl) {
        var _this = this;
        this.http = http;
        this.toastCtrl = toastCtrl;
        // client_id = "676621258132-6q9s2j1hc8343jj3nn75k0is4s1nb893.apps.googleusercontent.com"
        this.client_id = "424476852000-562ov6kfvkoljht8gnocsaiiv0s1o2k3.apps.googleusercontent.com"; // tuckshop copy test
        // script_id = "MD2K4IAXQvDUx9j9i90DKEK-i8ofEvg_L";
        this.script_id = "MjTVF50mrNfjX0_kvuCTT1aAvZzphd5k5"; // tuckshop copy test
        console.log('Hello AppServiceProvider Provider');
        this.handleError = function (error) {
            console.warn('error in request fetch', error);
            console.log(error.status);
            var prerror = _this.parseRejectedError(error);
            return Promise.reject(prerror);
        };
    }
    AppServiceProvider.prototype.handleClientLoad = function () {
        console.log("handleClientLoad function");
        var that = this;
        return new Promise(function (resolve, reject) {
            gapi.load('client:auth2', function () {
                gapi.client.init({
                    client_id: that.client_id,
                    cookiepolicy: 'single_host_origin',
                    scope: 'https://www.googleapis.com/auth/spreadsheets'
                }).then(function () {
                    // Listen for sign-in state changes.
                    // gapi.auth2.getAuthInstance().isSignedIn.listen(that.updateSigninStatus);
                    console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
                    // that.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
                    if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
                        console.log("user info =>", gapi.auth2.getAuthInstance().currentUser.get());
                        that.user_profile_pic = gapi.auth2.getAuthInstance().currentUser.get().w3.Paa;
                        that.bearer_token = gapi.auth2.getAuthInstance().currentUser.get().Zi.access_token;
                        that.user_email = gapi.auth2.getAuthInstance().currentUser.get().w3.U3;
                        that.user_name = gapi.auth2.getAuthInstance().currentUser.get().w3.ig;
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                })
                    .catch(function () {
                    console.log("Error in login");
                    reject(false);
                });
            });
        });
    };
    AppServiceProvider.prototype.signIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            gapi.auth2.getAuthInstance().signIn().then(function (res) {
                console.log("signed in");
                console.log("user info", res);
                // this.navigateToSearch();
                _this.user_profile_pic = gapi.auth2.getAuthInstance().currentUser.get().w3.Paa;
                _this.bearer_token = gapi.auth2.getAuthInstance().currentUser.get().Zi.access_token;
                _this.user_email = gapi.auth2.getAuthInstance().currentUser.get().w3.U3;
                _this.user_name = gapi.auth2.getAuthInstance().currentUser.get().w3.ig;
                resolve(true);
            })
                .catch(function (error) {
                console.log("Error in google sign function", error);
                reject(false);
            });
        });
    };
    AppServiceProvider.prototype.request = function (url, type, body, optionalHeaders, overrideheaders, returntype) {
        if (optionalHeaders === void 0) { optionalHeaders = {}; }
        if (overrideheaders === void 0) { overrideheaders = false; }
        if (returntype === void 0) { returntype = 'promise'; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + this.bearer_token });
        console.log(headers);
        var opHeaderKeys = Object.keys(optionalHeaders);
        if (opHeaderKeys.length) {
            if (overrideheaders) {
                headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](optionalHeaders);
            }
            else {
                for (var _i = 0, opHeaderKeys_1 = opHeaderKeys; _i < opHeaderKeys_1.length; _i++) {
                    var key = opHeaderKeys_1[_i];
                    headers.append(key, optionalHeaders[key]);
                }
            }
        }
        var httpEvent;
        if (type == 'get') {
            httpEvent = this.http.get(url, { headers: headers });
        }
        else if (type == 'post') {
            httpEvent = this.http.post(url, body, { headers: headers });
        }
        else if (type == 'put') {
            httpEvent = this.http.put(url, body, { headers: headers });
        }
        if (returntype == 'promise') {
            return httpEvent
                .toPromise()
                .then(function (response) {
                return response.json();
            })
                .catch(this.handleError);
        }
        else {
            return httpEvent
                .map(function (response) {
                return response.json();
            })
                .catch(this.handleError);
        }
    };
    AppServiceProvider.prototype.parseRejectedError = function (error) {
        try {
            return JSON.parse(error._body);
        }
        catch (e) {
            return error;
        }
    };
    AppServiceProvider.prototype.signOut = function () {
        return new Promise(function (resolve, reject) {
            gapi.auth2.getAuthInstance().signOut().then(function () {
                resolve(true);
            })
                .catch(function (error) {
                reject(false);
            });
        });
    };
    AppServiceProvider.prototype.presentToast = function (message, type, duration, keepOpen, position, closeText) {
        if (type === void 0) { type = 'success'; }
        if (duration === void 0) { duration = 3000; }
        if (keepOpen === void 0) { keepOpen = false; }
        if (position === void 0) { position = 'bottom'; }
        if (closeText === void 0) { closeText = 'Got it'; }
        var toastClass = '';
        if (type === 'success') {
            toastClass = 'toast-success online';
        }
        else if (type === 'warn') {
            toastClass = 'toast-warn offline';
        }
        else if (type === 'error') {
            toastClass = 'toast-fail';
        }
        var toastOptions = {
            message: message,
            cssClass: toastClass,
            position: position
        };
        if (keepOpen) {
            toastOptions.showCloseButton = true;
            toastOptions.closeButtonText = closeText;
            toastOptions.dismissOnPageChange = false;
        }
        else {
            toastOptions.duration = duration;
        }
        var toast = this.toastCtrl.create(toastOptions);
        toast.present();
        console.log("toasst presented");
        return toast;
    };
    return AppServiceProvider;
}());
AppServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]])
], AppServiceProvider);

//# sourceMappingURL=app-service.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_app_service_app_service__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { HomePage } from '../pages/home/home';
// import { SearchPage } from '../pages/search/search';
// import { BuyPage } from '../pages/buy/buy';
// import { SignoutPage } from '../pages/signout/signout';


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/buy/buy.module#BuyPageModule', name: 'BuyPage', segment: 'buy', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'home', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search/:code', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signout/signout.module#BuyPageModule', name: 'SignoutPage', segment: 'signout', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/specials/specials.module#SpecialsPageModule', name: 'SpecialsPage', segment: 'specials', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__providers_app_service_app_service__["a" /* AppServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HomePage } from '../pages/home/home';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'home';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/aj-sujit/Documents/projects/tuckshop-pwa-2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/aj-sujit/Documents/projects/tuckshop-pwa-2/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map