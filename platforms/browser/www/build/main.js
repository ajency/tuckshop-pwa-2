webpackJsonp([5],{110:function(e,t){function n(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}n.keys=function(){return[]},(e.exports=n.resolve=n).id=110},121:function(e,t,n){var o={"../pages/buy/buy.module.ngfactory":[211,1],"../pages/home/home.module.ngfactory":[212,3],"../pages/search/search.module.ngfactory":[213,0],"../pages/signout/signout.module.ngfactory":[214,4],"../pages/specials/specials.module.ngfactory":[215,2]};function r(e){var t=o[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}r.keys=function(){return Object.keys(o)},r.id=121,e.exports=r},151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,_=n(17),s=n(0),a=n(50),l=(n(64),n(61)),u=n(62),h=n(131),c=n(73),p=n(203),f=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,_=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;0<=s;s--)(r=e[s])&&(_=(i<3?r(_):3<i?r(t,n,_):r(t,n))||_);return 3<i&&_&&Object.defineProperty(t,n,_),_},g=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(e,t,n){var o=this;this.http=e,this.storage=t,this.app=n,this.unsubscribeOnTokenRefresh=function(){},this.currentMessage=new p.BehaviorSubject(null),console.log("Hello FirebaseMessagingProvider Provider"),this.messaging=n.messaging(),navigator.serviceWorker.register("service-worker.js").then(function(e){o.messaging.useServiceWorker(e),o.enableNotifications(),o.receiveMessage()})}return e.prototype.enableNotifications=function(){var e=this;return console.log("Requesting permission..."),this.messaging.requestPermission().then(function(){return console.log("Permission granted"),e.setupOnTokenRefresh(),e.updateToken()})},e.prototype.disableNotifications=function(){return this.unsubscribeOnTokenRefresh(),this.unsubscribeOnTokenRefresh=function(){},this.storage.set("fcmToken","").then()},e.prototype.updateToken=function(){var t=this;return this.messaging.getToken().then(function(e){if(e)return console.log("FCM token : ",e),t.storage.set("fcmToken",e);console.log("No Instance ID token available. Request permission to generate one.")})},e.prototype.setupOnTokenRefresh=function(){var e=this;this.unsubscribeOnTokenRefresh=this.messaging.onTokenRefresh(function(){console.log("Token refreshed"),e.storage.set("fcmToken","").then(function(){e.updateToken()})})},e.prototype.receiveMessage=function(){var t=this;this.messaging.onMessage(function(e){console.log("Message received. ",e),t.currentMessage.next(e)})},e}();d=f([Object(s.p)(),g("design:paramtypes",["function"==typeof(o=void 0!==a.e&&a.e)&&o||Object,"function"==typeof(r=void 0!==c.b&&c.b)&&r||Object,"function"==typeof(i=void 0!==h.a&&h.a)&&i||Object])],d);var b=function(){return function(e,t,n,o){this.rootPage="home",e.ready().then(function(){t.styleDefault(),n.hide()})}}(),y=n(88),m=(n(204),function(){return function(){}}()),P=n(13),S=n(129),C=n(10),O=n(38),A=n(8),w=n(5),v=n(80),R=n(21),j=n(90),M=n(132),k=n(82),T=n(81),E=n(16),I=n(56),D=n(44),F=n(69),L=n(70),H=n(72),N=n(84),B=n(67),U=n(24),z=n(141),G=n(142),X=n(143),K=n(144),q=n(145),V=n(146),x=n(147),Z=n(148),J=n(210),W=n(57),Q=n(3),Y=n(20),$=n(1),ee=n(4),te=n(14),ne=n(40),oe=s._3({encapsulation:2,styles:[],data:{}});function re(e){return s._25(0,[(e()(),s._5(0,null,null,2,"ion-nav",[],null,null,null,J.b,J.a)),s._4(4374528,null,0,W.a,[[2,Q.a],[2,Y.a],A.a,$.a,ee.a,s.k,s.z,s.F,s.j,w.i,U.a,[2,te.a],C.a,s.l],{root:[0,"root"]},null),s._21(6144,null,ne.a,null,[W.a]),(e()(),s._24(null,["\n"]))],function(e,t){e(t,1,0,t.component.rootPage)},null)}var ie,_e=s._2("ng-component",b,function(e){return s._25(0,[(e()(),s._5(0,null,null,1,"ng-component",[],null,null,null,re,oe)),s._4(49152,null,0,b,[ee.a,u.a,l.a,d],null,null)],null,null)},{},{},[]),se=n(133),ae=n(51),le=n(101),ue=n(83),he=n(26),ce=n(85),pe=n(36),fe=this&&this.__extends||(ie=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}ie(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),ge=function(t){function e(e){return t.call(this,e,[z.a,G.a,X.a,K.a,q.a,V.a,x.a,Z.a,_e],[X.a])||this}return fe(e,t),Object.defineProperty(e.prototype,"_LOCALE_ID_28",{get:function(){return null==this.__LOCALE_ID_28&&(this.__LOCALE_ID_28=s._16(this.parent.get(s.u,null))),this.__LOCALE_ID_28},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_NgLocalization_29",{get:function(){return null==this.__NgLocalization_29&&(this.__NgLocalization_29=new P.i(this._LOCALE_ID_28)),this.__NgLocalization_29},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_APP_ID_30",{get:function(){return null==this.__APP_ID_30&&(this.__APP_ID_30=s._7()),this.__APP_ID_30},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_IterableDiffers_31",{get:function(){return null==this.__IterableDiffers_31&&(this.__IterableDiffers_31=s._13()),this.__IterableDiffers_31},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_KeyValueDiffers_32",{get:function(){return null==this.__KeyValueDiffers_32&&(this.__KeyValueDiffers_32=s._15()),this.__KeyValueDiffers_32},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_DomSanitizer_33",{get:function(){return null==this.__DomSanitizer_33&&(this.__DomSanitizer_33=new _.s(this.parent.get(_.b))),this.__DomSanitizer_33},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Sanitizer_34",{get:function(){return null==this.__Sanitizer_34&&(this.__Sanitizer_34=this._DomSanitizer_33),this.__Sanitizer_34},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_HAMMER_GESTURE_CONFIG_35",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_35&&(this.__HAMMER_GESTURE_CONFIG_35=new k.a),this.__HAMMER_GESTURE_CONFIG_35},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_EVENT_MANAGER_PLUGINS_36",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_36&&(this.__EVENT_MANAGER_PLUGINS_36=[new _.l(this.parent.get(_.b)),new _.p(this.parent.get(_.b)),new _.o(this.parent.get(_.b),this._HAMMER_GESTURE_CONFIG_35)]),this.__EVENT_MANAGER_PLUGINS_36},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_EventManager_37",{get:function(){return null==this.__EventManager_37&&(this.__EventManager_37=new _.e(this._EVENT_MANAGER_PLUGINS_36,this.parent.get(s.z))),this.__EventManager_37},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵDomSharedStylesHost_38",{get:function(){return null==this.__ɵDomSharedStylesHost_38&&(this.__ɵDomSharedStylesHost_38=new _.n(this.parent.get(_.b))),this.__ɵDomSharedStylesHost_38},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵDomRendererFactory2_39",{get:function(){return null==this.__ɵDomRendererFactory2_39&&(this.__ɵDomRendererFactory2_39=new _.m(this._EventManager_37,this._ɵDomSharedStylesHost_38)),this.__ɵDomRendererFactory2_39},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RendererFactory2_40",{get:function(){return null==this.__RendererFactory2_40&&(this.__RendererFactory2_40=this._ɵDomRendererFactory2_39),this.__RendererFactory2_40},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵSharedStylesHost_41",{get:function(){return null==this.__ɵSharedStylesHost_41&&(this.__ɵSharedStylesHost_41=this._ɵDomSharedStylesHost_38),this.__ɵSharedStylesHost_41},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Testability_42",{get:function(){return null==this.__Testability_42&&(this.__Testability_42=new s.N(this.parent.get(s.z))),this.__Testability_42},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Meta_43",{get:function(){return null==this.__Meta_43&&(this.__Meta_43=new _.h(this.parent.get(_.b))),this.__Meta_43},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Title_44",{get:function(){return null==this.__Title_44&&(this.__Title_44=new _.j(this.parent.get(_.b))),this.__Title_44},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵi_45",{get:function(){return null==this.__ɵi_45&&(this.__ɵi_45=new R.k),this.__ɵi_45},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_FormBuilder_46",{get:function(){return null==this.__FormBuilder_46&&(this.__FormBuilder_46=new R.c),this.__FormBuilder_46},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_FirebaseApp_49",{get:function(){return null==this.__FirebaseApp_49&&(this.__FirebaseApp_49=se.c(this._FirebaseAppConfigToken_47,this._FirebaseAppName_48)),this.__FirebaseApp_49},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_BrowserXhr_50",{get:function(){return null==this.__BrowserXhr_50&&(this.__BrowserXhr_50=new a.c),this.__BrowserXhr_50},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ResponseOptions_51",{get:function(){return null==this.__ResponseOptions_51&&(this.__ResponseOptions_51=new a.b),this.__ResponseOptions_51},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_XSRFStrategy_52",{get:function(){return null==this.__XSRFStrategy_52&&(this.__XSRFStrategy_52=a.k()),this.__XSRFStrategy_52},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_XHRBackend_53",{get:function(){return null==this.__XHRBackend_53&&(this.__XHRBackend_53=new a.i(this._BrowserXhr_50,this._ResponseOptions_51,this._XSRFStrategy_52)),this.__XHRBackend_53},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RequestOptions_54",{get:function(){return null==this.__RequestOptions_54&&(this.__RequestOptions_54=new a.a),this.__RequestOptions_54},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Http_55",{get:function(){return null==this.__Http_55&&(this.__Http_55=a.l(this._XHRBackend_53,this._RequestOptions_54)),this.__Http_55},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Events_60",{get:function(){return null==this.__Events_60&&(this.__Events_60=new T.a),this.__Events_60},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Form_61",{get:function(){return null==this.__Form_61&&(this.__Form_61=new E.a),this.__Form_61},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Haptic_62",{get:function(){return null==this.__Haptic_62&&(this.__Haptic_62=new I.a(this._Platform_4)),this.__Haptic_62},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Keyboard_63",{get:function(){return null==this.__Keyboard_63&&(this.__Keyboard_63=new D.a(this._Config_5,this._Platform_4,this.parent.get(s.z),this._DomController_6)),this.__Keyboard_63},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_LoadingController_64",{get:function(){return null==this.__LoadingController_64&&(this.__LoadingController_64=new F.a(this._App_8,this._Config_5)),this.__LoadingController_64},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_LocationStrategy_65",{get:function(){return null==this.__LocationStrategy_65&&(this.__LocationStrategy_65=j.c(this.parent.get(P.p),this._APP_BASE_HREF_57,this._Config_5)),this.__LocationStrategy_65},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Location_66",{get:function(){return null==this.__Location_66&&(this.__Location_66=new P.d(this._LocationStrategy_65)),this.__Location_66},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_UrlSerializer_67",{get:function(){return null==this.__UrlSerializer_67&&(this.__UrlSerializer_67=ae.d(this._App_8,this._DeepLinkConfigToken_10)),this.__UrlSerializer_67},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_DeepLinker_68",{get:function(){return null==this.__DeepLinker_68&&(this.__DeepLinker_68=te.b(this._App_8,this._UrlSerializer_67,this._Location_66,this._ModuleLoader_13,this.componentFactoryResolver)),this.__DeepLinker_68},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ModalController_69",{get:function(){return null==this.__ModalController_69&&(this.__ModalController_69=new L.a(this._App_8,this._Config_5,this._DeepLinker_68)),this.__ModalController_69},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_PopoverController_71",{get:function(){return null==this.__PopoverController_71&&(this.__PopoverController_71=new H.a(this._App_8,this._Config_5,this._DeepLinker_68)),this.__PopoverController_71},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_TapClick_72",{get:function(){return null==this.__TapClick_72&&(this.__TapClick_72=new N.a(this._Config_5,this._Platform_4,this._DomController_6,this._App_8,this._GestureController_9)),this.__TapClick_72},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ToastController_73",{get:function(){return null==this.__ToastController_73&&(this.__ToastController_73=new B.a(this._App_8,this._Config_5)),this.__ToastController_73},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_TransitionController_74",{get:function(){return null==this.__TransitionController_74&&(this.__TransitionController_74=new U.a(this._Platform_4,this._Config_5)),this.__TransitionController_74},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Storage_76",{get:function(){return null==this.__Storage_76&&(this.__Storage_76=le.c(this._StorageConfigToken_75)),this.__Storage_76},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_StatusBar_77",{get:function(){return null==this.__StatusBar_77&&(this.__StatusBar_77=new u.a),this.__StatusBar_77},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_SplashScreen_78",{get:function(){return null==this.__SplashScreen_78&&(this.__SplashScreen_78=new l.a),this.__SplashScreen_78},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_AppServiceProvider_79",{get:function(){return null==this.__AppServiceProvider_79&&(this.__AppServiceProvider_79=new y.a(this._Http_55,this._ToastController_73,this._LoadingController_64)),this.__AppServiceProvider_79},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_FirebaseMessagingProvider_80",{get:function(){return null==this.__FirebaseMessagingProvider_80&&(this.__FirebaseMessagingProvider_80=new d(this._Http_55,this._Storage_76,this._FirebaseApp_49)),this.__FirebaseMessagingProvider_80},enumerable:!0,configurable:!0}),e.prototype.createInternal=function(){return this._CommonModule_0=new P.b,this._ErrorHandler_1=new S.a,this._ConfigToken_2=null,this._PlatformConfigToken_3=ue.b(),this._Platform_4=ee.b(this.parent.get(_.b),this._PlatformConfigToken_3,this.parent.get(s.z)),this._Config_5=$.c(this._ConfigToken_2,this._Platform_4),this._DomController_6=new C.a(this._Platform_4),this._MenuController_7=new O.a,this._App_8=new A.a(this._Config_5,this._Platform_4,this._MenuController_7),this._GestureController_9=new w.i(this._App_8),this._DeepLinkConfigToken_10={links:[{loadChildren:"../pages/buy/buy.module.ngfactory#BuyPageModuleNgFactory",name:"BuyPage",segment:"buy",priority:"low",defaultHistory:[]},{loadChildren:"../pages/home/home.module.ngfactory#HomePageModuleNgFactory",name:"home",segment:"home",priority:"low",defaultHistory:[]},{loadChildren:"../pages/search/search.module.ngfactory#SearchPageModuleNgFactory",name:"SearchPage",segment:"search/:code",priority:"low",defaultHistory:[]},{loadChildren:"../pages/signout/signout.module.ngfactory#BuyPageModuleNgFactory",name:"SignoutPage",segment:"signout",priority:"low",defaultHistory:[]},{loadChildren:"../pages/specials/specials.module.ngfactory#SpecialsPageModuleNgFactory",name:"SpecialsPage",segment:"specials",priority:"low",defaultHistory:[]}]},this._Compiler_11=new s.i,this._NgModuleLoader_12=new v.a(this._Compiler_11),this._ModuleLoader_13=he.c(this._NgModuleLoader_12,this),this._APP_INITIALIZER_14=[s._19,_.r(this.parent.get(_.i,null),this.parent.get(s.y,null)),ce.a(this._Config_5),T.b(this._Platform_4,this._DomController_6),N.b(this._Config_5,this._Platform_4,this._DomController_6,this._App_8,this._GestureController_9),he.d(this._Config_5,this._DeepLinkConfigToken_10,this._ModuleLoader_13,this.parent.get(s.z))],this._ApplicationInitStatus_15=new s.d(this._APP_INITIALIZER_14),this._ɵf_16=new s._6(this.parent.get(s.z),this.parent.get(s.Z),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_15),this._ApplicationRef_17=this._ɵf_16,this._ApplicationModule_18=new s.e(this._ApplicationRef_17),this._BrowserModule_19=new _.a(this.parent.get(_.a,null)),this._ɵba_20=new R.j,this._FormsModule_21=new R.d,this._ReactiveFormsModule_22=new R.i,this._IonicModule_23=new j.a,this._AngularFireModule_24=new M.a,this._HttpModule_25=new a.f,this._IonicStorageModule_26=new c.a,this._AppModule_27=new m,this._FirebaseAppConfigToken_47={apiKey:"AIzaSyDM8j00pSlfGnw9hEtkYHks5M9fek_lm5U",authDomain:"tuckshop-9efa0.firebaseapp.com",databaseURL:"https://tuckshop-9efa0.firebaseio.com",projectId:"tuckshop-9efa0",storageBucket:"",messagingSenderId:"925518089689"},this._FirebaseAppName_48=void 0,this._AppRootToken_56=b,this._APP_BASE_HREF_57="/",this._StorageConfigToken_75=null,this._AppModule_27},e.prototype.getInternal=function(e,t){return e===P.b?this._CommonModule_0:e===s.l?this._ErrorHandler_1:e===$.b?this._ConfigToken_2:e===ue.a?this._PlatformConfigToken_3:e===ee.a?this._Platform_4:e===$.a?this._Config_5:e===C.a?this._DomController_6:e===O.a?this._MenuController_7:e===A.a?this._App_8:e===w.i?this._GestureController_9:e===ae.a?this._DeepLinkConfigToken_10:e===s.i?this._Compiler_11:e===v.a?this._NgModuleLoader_12:e===he.b?this._ModuleLoader_13:e===s.c?this._APP_INITIALIZER_14:e===s.d?this._ApplicationInitStatus_15:e===s._6?this._ɵf_16:e===s.f?this._ApplicationRef_17:e===s.e?this._ApplicationModule_18:e===_.a?this._BrowserModule_19:e===R.j?this._ɵba_20:e===R.d?this._FormsModule_21:e===R.i?this._ReactiveFormsModule_22:e===j.a?this._IonicModule_23:e===M.a?this._AngularFireModule_24:e===a.f?this._HttpModule_25:e===c.a?this._IonicStorageModule_26:e===m?this._AppModule_27:e===s.u?this._LOCALE_ID_28:e===P.j?this._NgLocalization_29:e===s.b?this._APP_ID_30:e===s.s?this._IterableDiffers_31:e===s.t?this._KeyValueDiffers_32:e===_.c?this._DomSanitizer_33:e===s.I?this._Sanitizer_34:e===_.f?this._HAMMER_GESTURE_CONFIG_35:e===_.d?this._EVENT_MANAGER_PLUGINS_36:e===_.e?this._EventManager_37:e===_.n?this._ɵDomSharedStylesHost_38:e===_.m?this._ɵDomRendererFactory2_39:e===s.G?this._RendererFactory2_40:e===_.q?this._ɵSharedStylesHost_41:e===s.N?this._Testability_42:e===_.h?this._Meta_43:e===_.j?this._Title_44:e===R.k?this._ɵi_45:e===R.c?this._FormBuilder_46:e===se.b?this._FirebaseAppConfigToken_47:e===M.c?this._FirebaseAppName_48:e===se.a?this._FirebaseApp_49:e===a.c?this._BrowserXhr_50:e===a.h?this._ResponseOptions_51:e===a.j?this._XSRFStrategy_52:e===a.i?this._XHRBackend_53:e===a.g?this._RequestOptions_54:e===a.e?this._Http_55:e===pe.a?this._AppRootToken_56:e===P.a?this._APP_BASE_HREF_57:e===T.a?this._Events_60:e===E.a?this._Form_61:e===I.a?this._Haptic_62:e===D.a?this._Keyboard_63:e===F.a?this._LoadingController_64:e===P.e?this._LocationStrategy_65:e===P.d?this._Location_66:e===ae.b?this._UrlSerializer_67:e===te.a?this._DeepLinker_68:e===L.a?this._ModalController_69:e===H.a?this._PopoverController_71:e===N.a?this._TapClick_72:e===B.a?this._ToastController_73:e===U.a?this._TransitionController_74:e===le.b?this._StorageConfigToken_75:e===le.a?this._Storage_76:e===u.a?this._StatusBar_77:e===l.a?this._SplashScreen_78:e===y.a?this._AppServiceProvider_79:e===d?this._FirebaseMessagingProvider_80:t},e.prototype.destroyInternal=function(){this._ɵf_16.ngOnDestroy(),this.__ɵDomSharedStylesHost_38&&this._ɵDomSharedStylesHost_38.ngOnDestroy()},e}(s._0),de=new s.w(ge,m);Object(s.T)(),Object(_.k)().bootstrapModuleFactory(de)},88:function(e,t,n){"use strict";n.d(t,"a",function(){return y});var o,r,i,_=n(0),c=n(50),s=n(64),a=n(98),l=(n.n(a),n(166)),u=(n.n(l),n(168)),h=(n.n(u),n(170)),p=(n.n(h),n(177)),f=(n.n(p),n(179)),g=(n.n(f),n(181)),d=(n.n(g),this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,_=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;0<=s;s--)(r=e[s])&&(_=(i<3?r(_):3<i?r(t,n,_):r(t,n))||_);return 3<i&&_&&Object.defineProperty(t,n,_),_}),b=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},y=function(){function e(e,t,n){var o=this;this.http=e,this.toastCtrl=t,this.loadingCtrl=n,this.client_id="676621258132-6q9s2j1hc8343jj3nn75k0is4s1nb893.apps.googleusercontent.com",this.script_id="MD2K4IAXQvDUx9j9i90DKEK-i8ofEvg_L",console.log("Hello AppServiceProvider Provider"),this.handleError=function(e){console.warn("error in request fetch",e),console.log(e.status);var t=o.parseRejectedError(e);return Promise.reject(t)}}return e.prototype.handleClientLoad=function(){console.log("handleClientLoad function");var n=this;return new Promise(function(e,t){gapi.load("client:auth2",function(){gapi.client.init({client_id:n.client_id,cookiepolicy:"single_host_origin",scope:"https://www.googleapis.com/auth/spreadsheets"}).then(function(){console.log(gapi.auth2.getAuthInstance().isSignedIn.get()),gapi.auth2.getAuthInstance().isSignedIn.get()?(console.log("user info =>",gapi.auth2.getAuthInstance().currentUser.get()),n.user_profile_pic=gapi.auth2.getAuthInstance().currentUser.get().w3.Paa,n.bearer_token=gapi.auth2.getAuthInstance().currentUser.get().Zi.access_token,n.user_email=gapi.auth2.getAuthInstance().currentUser.get().w3.U3,n.user_name=gapi.auth2.getAuthInstance().currentUser.get().w3.ig,e(!0)):t(!1)}).catch(function(){console.log("Error in login"),t(!1)})})})},e.prototype.signIn=function(){var o=this;return new Promise(function(t,n){gapi.auth2.getAuthInstance().signIn().then(function(e){console.log("signed in"),console.log("user info",e),o.user_profile_pic=gapi.auth2.getAuthInstance().currentUser.get().w3.Paa,o.bearer_token=gapi.auth2.getAuthInstance().currentUser.get().Zi.access_token,o.user_email=gapi.auth2.getAuthInstance().currentUser.get().w3.U3,o.user_name=gapi.auth2.getAuthInstance().currentUser.get().w3.ig,t(!0)}).catch(function(e){console.log("Error in google sign function",e),n(!1)})})},e.prototype.request=function(e,t,n,o,r,i){void 0===o&&(o={}),void 0===r&&(r=!1),void 0===i&&(i="promise");var _=new c.d({"Content-Type":"application/json",Authorization:"Bearer "+this.bearer_token});console.log(_);var s,a=Object.keys(o);if(a.length)if(r)_=new c.d(o);else for(var l=0,u=a;l<u.length;l++){var h=u[l];_.append(h,o[h])}return"get"==t?s=this.http.get(e,{headers:_}):"post"==t?s=this.http.post(e,n,{headers:_}):"put"==t&&(s=this.http.put(e,n,{headers:_})),"promise"==i?s.toPromise().then(function(e){return e.json()}).catch(this.handleError):s.map(function(e){return e.json()}).catch(this.handleError)},e.prototype.parseRejectedError=function(t){try{return JSON.parse(t._body)}catch(e){return t}},e.prototype.signOut=function(){return new Promise(function(e,t){gapi.auth2.getAuthInstance().signOut().then(function(){e(!0)}).catch(function(e){t(!1)})})},e.prototype.presentToast=function(e,t,n,o,r,i){void 0===t&&(t="success"),void 0===n&&(n=3e3),void 0===o&&(o=!1),void 0===r&&(r="bottom"),void 0===i&&(i="Got it");var _="";"success"===t?_="toast-success online":"warn"===t?_="toast-warn offline":"error"===t&&(_="toast-fail");var s={message:e,cssClass:_,position:r};o?(s.showCloseButton=!0,s.closeButtonText=i,s.dismissOnPageChange=!1):s.duration=n;var a=this.toastCtrl.create(s);return a.present(),console.log("toasst presented"),a},e.prototype.presentLoader=function(){this.loader=this.loadingCtrl.create({content:"Please wait..."}),this.loader.present()},e.prototype.dismissLoader=function(){this.loader&&this.loader.dismiss()},e}();y=d([Object(_.p)(),b("design:paramtypes",["function"==typeof(o=void 0!==c.e&&c.e)&&o||Object,"function"==typeof(r=void 0!==s.b&&s.b)&&r||Object,"function"==typeof(i=void 0!==s.a&&s.a)&&i||Object])],y)}},[151]);