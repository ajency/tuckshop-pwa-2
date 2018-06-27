webpackJsonp([2],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    return SearchPageModule;
}());
SearchPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]
        ]
    })
], SearchPageModule);

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_service_app_service__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchPage = (function () {
    function SearchPage(popoverCtrl, navCtrl, zone, navParams, viewCtrl, modalCtrl, toastCtrl, storage, l, location, appservice) {
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.appservice = appservice;
        // private loadResults = false;
        this.loadError = false;
        this.myInput = '';
        this.check = true;
        this.types = [];
        this.code = this.navParams.get('code');
        console.log(this.code);
        this.loc = l;
    }
    SearchPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit search page");
        this.storage.get('this.data').then(function (data) {
            _this.items = data;
            _this.items1 = data;
            if (data) {
                _this.findTypes(data);
                setTimeout(function () {
                    document.getElementById('All').classList.add('active');
                }, 100);
            }
            else {
                _this.loadingItems = true;
            }
            // If the url contains the item code i.e. if it is not empty check for the item code 
            // in the locally stored data
            if (_this.code != "") {
                if (_this.items != null) {
                    for (var _i = 0, _a = _this.items; _i < _a.length; _i++) {
                        var i = _a[_i];
                        if (i.itemCode == _this.code) {
                            console.log("item found");
                            _this.confirmPurchase(i);
                            _this.itemfound = true;
                            break;
                        }
                    }
                }
                if (!_this.itemfound) {
                    console.log('item not found in local storage');
                    // this.handleClientLoad();
                    _this.callScriptFunction("");
                    _this.searchingdb();
                    _this.loadingItems = true;
                }
                // If the item is not found create a toast saying item not found 
            }
        });
        if (this.code == "") {
            console.log('item code is null', this.code);
            // this.handleClientLoad();  // Function to authenticate user
            this.callScriptFunction("");
        }
    };
    SearchPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        console.log("ionViewCanEnter search page");
        return new Promise(function (resolve, reject) {
            _this.appservice.handleClientLoad().then(function (res) {
                console.log("response from handleClientLoad ", res);
                resolve(true);
            })
                .catch(function (error) {
                reject(false);
                _this.navCtrl.setRoot('home');
                console.log("error from handleClientLoad", error);
            });
        });
    };
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage check1');
    };
    SearchPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter SearchPage check');
        this.viewCtrl.showBackButton(false);
    };
    SearchPage.prototype.errorToast = function () {
        console.log('errorToast function');
        var toast = this.toastCtrl.create({
            message: 'Something went wrong! Please try again.',
            showCloseButton: true,
            closeButtonText: "OK",
            dismissOnPageChange: true
        });
        toast.present();
    };
    SearchPage.prototype.itemnotfoundToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Item not found',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    SearchPage.prototype.searchingdb = function () {
        var toast = this.toastCtrl.create({
            message: 'Item not found on local storage...fetching from the server...Please wait..',
            duration: 4000,
            position: 'bottom'
        });
        toast.present();
    };
    //search and display part
    SearchPage.prototype.callScriptFunction = function (refresher) {
        var _this = this;
        this.loadError = false;
        console.log("callScriptFunction");
        // Get the profile image of the user
        this.image = this.appservice.user_profile_pic;
        console.log(this.image);
        var that = this;
        var request;
        // Create execution request.
        if (that.code == "") {
            console.log('youll get all results');
            request = {
                'function': 'search',
                'parameters': ""
            };
        }
        else if (refresher == "") {
            console.log('only one result');
            request = {
                'function': 'search',
                'parameters': that.code
            };
        }
        else {
            console.log('youll get all resultsss');
            request = {
                'function': 'search',
                'parameters': ""
            };
        }
        // Make the request.
        var url = "https://content-script.googleapis.com/v1/scripts/" + this.appservice.script_id + ":run";
        this.appservice.request(url, 'post', request, {}, false, 'promise').then(function (res) {
            console.log("response from search api ==>", res);
            _this.processResponse(res);
            if (refresher != "") {
                refresher.complete();
                console.log("referesh complete");
            }
        })
            .catch(function (error) {
            console.log("error from search api", error);
            if (refresher != "") {
                refresher.complete();
            }
            _this.loadingItems = false;
            _this.requestFailedToast();
        });
    };
    SearchPage.prototype.requestFailedToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Request failed!   Please check your internet connection',
            position: 'bottom',
            showCloseButton: true
        });
        toast.present();
    };
    SearchPage.prototype.processResponse = function (resp) {
        //  store the respose in items1
        this.response = resp.response.result;
        //  If data is not present in local storage store repsonse in items
        if (!this.items) {
            this.items = this.response;
            setTimeout(function () {
                document.getElementById('All').classList.add('active');
            }, 100);
        }
        this.findTypes(this.response);
        //  Function to store the data locally i.e. in cache
        if (Object.keys(this.response).length == 1) {
            this.confirmPurchase(this.response[0]);
            this.loadingItems = false;
        }
        // To avoid only one item or no item to be stored in items1 and local storage
        if (Object.keys(this.response).length != 1 && Object.keys(this.response).length != 0) {
            this.items1 = this.response;
            this.storage.set('this.data', this.items1).then(function () {
                console.log("storage set function");
            });
        }
        if (Object.keys(this.response).length == 0) {
            // If there is no response set loadError to true
            if (Object.keys(this.response).length != 0) {
                this.loadError = true;
            }
            this.itemnotfoundToast();
        }
        this.loadingItems = false;
        this.zone.run(function () { });
    };
    SearchPage.prototype.confirmPurchase = function (item) {
        console.log("inside confirmPurchase", item);
        var product = [];
        product = item;
        var modal = this.modalCtrl.create('BuyPage', { item: product });
        console.log(item.itemName);
        modal.present();
        // change the URL based on the item clicked
        var stateObj = [];
        this.loc.pushState(stateObj, "BuyPage", "/#/search/" + item.itemCode);
        this.zone.run(function () { });
    };
    SearchPage.prototype.onCancel = function () {
        console.log("cancel button");
    };
    SearchPage.prototype.callFilter = function () {
        var _this = this;
        // console.log(this.items);
        // console.log(this.items1);
        console.log("inside filter function");
        this.loadError = false;
        console.log(this.myInput);
        //if the value is an empty string don't filter the items
        for (var i = 0; i < this.types.length; i++) {
            document.getElementById(this.types[i]).classList.remove("active");
        }
        document.getElementById('All').classList.add('active');
        if (this.myInput && this.myInput.trim() != '') {
            this.items = this.items1.filter(function (i) {
                return (i.itemName.toLowerCase().indexOf(_this.myInput.toLowerCase()) > -1);
            });
            console.log(this.items);
            if (Object.keys(this.items).length == 0) {
                this.loadError = true;
            }
        }
        else {
            this.items = this.items1;
        }
        this.zone.run(function () { });
    };
    SearchPage.prototype.presentPopover = function (ev) {
        var popover = this.popoverCtrl.create('SignoutPage', {});
        popover.present({
            ev: ev
        });
    };
    SearchPage.prototype.findTypes = function (data) {
        console.log("inside findTypes function");
        var flags = [], output = ["All"];
        for (var i = 0; i < data.length; i++) {
            if (flags[data[i].type])
                continue;
            flags[data[i].type] = true;
            output.push(data[i].type);
        }
        this.types = output;
        console.log("types ===>", this.types);
    };
    SearchPage.prototype.filterItems = function (type) {
        console.log("inside filterItems function", type);
        for (var i = 0; i < this.types.length; i++) {
            document.getElementById(this.types[i]).classList.remove("active");
        }
        document.getElementById(type).classList.add("active");
        if (type == 'All') {
            this.items = this.items1;
        }
        else {
            this.items = this.items1.filter(function (item) {
                return item.type == type;
            });
        }
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])({
        name: 'SearchPage',
        segment: 'search/:code'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/aj-sujit/Documents/projects/tuckshop-pwa-2/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n	<ion-navbar align="center" color="ajency">\n		<ion-title>Tuckshop</ion-title>\n\n		<ion-buttons end>\n	      <button ion-button icon-only (click)="presentPopover($event)">\n	        <ion-avatar item-start>\n		      <img src={{image}} width="30" height="30" class="avatar-img">\n		    </ion-avatar>\n	      </button>\n	    </ion-buttons>\n	</ion-navbar>\n\n	<ion-toolbar no-border-top>\n		<!-- Search Bar-->\n		<ion-searchbar (ionInput)="callFilter()" [(ngModel)]="myInput"  autocomplete = "on" autocorrect = "on"></ion-searchbar>\n	</ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-refresher (ionRefresh)="callScriptFunction($event)">\n	    <ion-refresher-content\n	      pullingText="Pull to refresh"\n	      refreshingText="Refreshing...">\n	    </ion-refresher-content>\n  	</ion-refresher>\n\n	<div *ngIf="loadingItems" text-center class="search-load">\n		<ion-spinner margin color="ajency"></ion-spinner>\n	</div>\n\n	<div class="tuck-lists">\n	  <button *ngFor="let type of types" ion-button id={{type}} (click)="filterItems(type)" >{{type}}</button>\n	</div>\n	<ion-list >\n		<ion-item *ngFor="let item of items" (click)="confirmPurchase(item)" class="fadeInUp">\n			{{ item.itemName }}\n			<div item-end><small>Rs.</small>{{item.price}}</div>\n		</ion-item>\n	</ion-list>\n\n	<div margin text-center *ngIf="loadError">\n		No Results\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/aj-sujit/Documents/projects/tuckshop-pwa-2/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__angular_common__["g" /* PlatformLocation */],
        __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* Location */],
        __WEBPACK_IMPORTED_MODULE_3__providers_app_service_app_service__["a" /* AppServiceProvider */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=2.js.map