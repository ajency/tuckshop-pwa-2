webpackJsonp([3],{214:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var o=t(0),u=(t(65),t(66)),i=t(13),e=t(45),a=function(){function n(n,l,t,o,u,i,e,a){this.viewCtrl=n,this.l=l,this.navCtrl=t,this.zone=o,this.toastCtrl=u,this.appservice=i,this.firebasemessaging=e,this.alertCtrl=a,this.disabled=!1,this.notificationsSubscribed=!1,this.loc=l}return n.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad HomePage");this.loc.pushState([],"HomePage","/#/home")},n.prototype.ngOnInit=function(){var l=this;console.log("ngOnInit home page"),this.notificationsSubscribed=this.firebasemessaging.notificationsSubscribed,this.appservice.handleClientLoad().then(function(n){console.log("response from handleClientLoad function"),l.navigateToSearch()}).catch(function(n){console.log("Error in login check")})},n.prototype.ionViewWillEnter=function(){console.log("ionViewWillEnter HomePage check"),this.viewCtrl.showBackButton(!1)},n.prototype.signIn=function(){var l=this;this.appservice.signIn().then(function(n){console.log("response from sign in ==>",n),l.navigateToSearch()}).catch(function(n){console.log("error in loggin in =>",n)})},n.prototype.navigateToSearch=function(){this.navCtrl.push("SearchPage",{code:""}),console.log("Navigating to another module")},n.prototype.notificationsAlert=function(){var n=this;this.alertCtrl.create({title:"Tuckshop would like to send you notifications",message:"Allow Tuckshop to send notifications",buttons:[{text:"No",role:"cancel",handler:function(){n.firebasemessaging.disableNotifications(),n.notificationsSubscribed=!1,console.log("Cancel clicked")}},{text:"Yes",handler:function(){n.firebasemessaging.enableNotifications(),n.notificationsSubscribed=!0,console.log("Buy clicked")}}]}).present()},n}(),s=function(){return function(){}}(),c=t(21),r=t(93),_=t(143),d=t(144),h=t(145),b=t(146),f=t(147),g=t(148),p=t(149),k=t(150),m=t(33),v=t(1),y=t(94),F=t(3),w=t(218),C=t(41),P=t(7),S=t(20),I=t(219),M=t(92),O=t(42),L=t(95),B=t(43),j=t(15),x=t(220),N=t(32),T=t(4),z=t(10),E=t(44),A=t(103),D=t(97),H=o._3({encapsulation:2,styles:[],data:{}});function R(n){return o._25(2,[(n()(),o._5(0,null,null,0,"img",[],null,null,null,null,null))],null,null)}o._2("ion-img",D.a,function(n){return o._25(0,[(n()(),o._5(0,null,null,1,"ion-img",[],null,null,null,R,H)),o._4(1228800,null,0,D.a,[o.k,o.F,T.a,[2,N.a],z.a],null,null)],null,null)},{src:"src",bounds:"bounds",cache:"cache",width:"width",height:"height",alt:"alt"},{},[]);var V=t(69),W=t(70),Y=o._3({encapsulation:2,styles:[],data:{}});function K(n){return o._25(0,[(n()(),o._5(0,null,null,1,"ion-icon",[["name","notifications"],["role","img"]],[[2,"hide",null]],null,null,null,null)),o._4(147456,null,0,m.a,[v.a,o.k,o.F],{name:[0,"name"]},null)],function(n,l){n(l,1,0,"notifications")},function(n,l){n(l,0,0,o._18(l,1)._hidden)})}function Z(n){return o._25(0,[(n()(),o._5(0,null,null,1,"ion-icon",[["name","notifications-off"],["role","img"]],[[2,"hide",null]],null,null,null,null)),o._4(147456,null,0,m.a,[v.a,o.k,o.F],{name:[0,"name"]},null)],function(n,l){n(l,1,0,"notifications-off")},function(n,l){n(l,0,0,o._18(l,1)._hidden)})}function G(n){return o._25(0,[(n()(),o._24(null,["\n"])),(n()(),o._5(0,null,null,25,"ion-header",[],null,null,null,null,null)),o._4(16384,null,0,y.a,[v.a,o.k,o.F,[2,F.a]],null,null),(n()(),o._24(null,["\n\t"])),(n()(),o._5(0,null,null,21,"ion-navbar",[["align","center"],["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,w.b,w.a)),o._4(49152,null,0,C.a,[P.a,[2,F.a],[2,S.a],v.a,o.k,o.F],null,null),(n()(),o._24(3,["\n\t\t"])),(n()(),o._5(0,null,3,2,"ion-title",[],null,null,null,I.b,I.a)),o._4(49152,null,0,M.a,[v.a,o.k,o.F,[2,O.a],[2,C.a]],null,null),(n()(),o._24(0,["Welcome to Tuckshop"])),(n()(),o._24(3,["\n\n\t\t"])),(n()(),o._5(0,null,2,13,"ion-buttons",[["end",""]],null,null,null,null,null)),o._4(16384,null,1,L.a,[v.a,o.k,o.F,[2,O.a],[2,C.a]],null,null),o._22(603979776,1,{_buttons:1}),(n()(),o._24(null,["\t    \n\t\t\t\n\t      "])),(n()(),o._5(0,null,null,8,"button",[["icon-only",""],["ion-button",""]],null,[[null,"click"]],function(n,l,t){var o=!0;"click"===l&&(o=!1!==n.component.notificationsAlert()&&o);return o},B.b,B.a)),o._4(1097728,[[1,4]],0,j.a,[[8,""],v.a,o.k,o.F],null,null),(n()(),o._24(0,["\n\t        "])),(n()(),o._1(16777216,null,0,1,null,K)),o._4(16384,null,0,i.h,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(n()(),o._24(0,["\n\t        "])),(n()(),o._1(16777216,null,0,1,null,Z)),o._4(16384,null,0,i.h,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(n()(),o._24(0,["\n\t      "])),(n()(),o._24(null,["\n\n\t    "])),(n()(),o._24(3,["\n\t"])),(n()(),o._24(null,["\n"])),(n()(),o._24(null,["\n\n\n"])),(n()(),o._5(0,null,null,18,"ion-content",[["align","center"],["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,x.b,x.a)),o._4(4374528,null,0,N.a,[v.a,T.a,z.a,o.k,o.F,P.a,E.a,o.z,[2,F.a],[2,S.a]],null,null),(n()(),o._24(1,["\n\n\t"])),(n()(),o._5(0,null,1,2,"h2",[["class","welcome"],["color","dark"],["ion-text",""],["text-center",""]],null,null,null,null,null)),o._4(16384,null,0,A.a,[v.a,o.k,o.F],{color:[0,"color"]},null),(n()(),o._24(null,["\n\t\tGrab some Tuck!\n\t"])),(n()(),o._24(1,["\n\n\n\t"])),(n()(),o._5(0,null,1,1,"ion-img",[["height","280"],["src","/assets/icon/tuckshop.jpg"],["width","280"]],null,null,null,R,H)),o._4(1228800,null,0,D.a,[o.k,o.F,T.a,[2,N.a],z.a],{src:[0,"src"],width:[1,"width"],height:[2,"height"]},null),(n()(),o._24(1,["\n\t"])),(n()(),o._5(0,null,1,0,"div",[],null,null,null,null,null)),(n()(),o._24(1,["\n\n\n\t"])),(n()(),o._5(0,null,1,5,"div",[["padding",""]],null,null,null,null,null)),(n()(),o._24(null,["\n\t\t"])),(n()(),o._5(0,null,null,2,"button",[["block",""],["class","login-btn"],["color","ajency"],["ion-button",""]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var o=!0,u=n.component;"click"===l&&(o=!1!==u.signIn()&&o);"click"===l&&(o=!1!=(u.disabled=!0)&&o);return o},B.b,B.a)),o._4(1097728,null,0,j.a,[[8,""],v.a,o.k,o.F],{color:[0,"color"],block:[1,"block"]},null),(n()(),o._24(0,[" Sign In "])),(n()(),o._24(null,["\n\t"])),(n()(),o._24(1,["\n\n\n\n"]))],function(n,l){var t=l.component;n(l,19,0,!t.notificationsSubscribed),n(l,22,0,t.notificationsSubscribed);n(l,32,0,"dark");n(l,36,0,"/assets/icon/tuckshop.jpg","280","280");n(l,43,0,"ajency","")},function(n,l){var t=l.component;n(l,4,0,o._18(l,5)._hidden,o._18(l,5)._sbPadding),n(l,28,0,o._18(l,29).statusbarPadding,o._18(l,29)._hasRefresher),n(l,42,0,t.disabled)})}var J=o._2("page-home",a,function(n){return o._25(0,[(n()(),o._5(0,null,null,1,"page-home",[],null,null,null,G,Y)),o._4(114688,null,0,a,[F.a,i.p,S.a,o.z,V.a,u.a,e.a,W.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),q=t(26);t.d(l,"HomePageModuleNgFactory",function(){return X});var Q,U=this&&this.__extends||(Q=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t])},function(n,l){function t(){this.constructor=n}Q(n,l),n.prototype=null===l?Object.create(l):(t.prototype=l.prototype,new t)}),X=new o.w(function(l){function n(n){return l.call(this,n,[_.a,d.a,h.a,b.a,f.a,g.a,p.a,k.a,J],[])||this}return U(n,l),Object.defineProperty(n.prototype,"_NgLocalization_7",{get:function(){return null==this.__NgLocalization_7&&(this.__NgLocalization_7=new i.i(this.parent.get(o.u))),this.__NgLocalization_7},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵi_8",{get:function(){return null==this.__ɵi_8&&(this.__ɵi_8=new c.k),this.__ɵi_8},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_FormBuilder_9",{get:function(){return null==this.__FormBuilder_9&&(this.__FormBuilder_9=new c.c),this.__FormBuilder_9},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new i.b,this._ɵba_1=new c.j,this._FormsModule_2=new c.d,this._ReactiveFormsModule_3=new c.i,this._IonicModule_4=new r.a,this._IonicPageModule_5=new r.b,this._HomePageModule_6=new s,this._LAZY_LOADED_TOKEN_10=a,this._HomePageModule_6},n.prototype.getInternal=function(n,l){return n===i.b?this._CommonModule_0:n===c.j?this._ɵba_1:n===c.d?this._FormsModule_2:n===c.i?this._ReactiveFormsModule_3:n===r.a?this._IonicModule_4:n===r.b?this._IonicPageModule_5:n===s?this._HomePageModule_6:n===i.j?this._NgLocalization_7:n===c.k?this._ɵi_8:n===c.c?this._FormBuilder_9:n===q.a?this._LAZY_LOADED_TOKEN_10:l},n.prototype.destroyInternal=function(){},n}(o._0),s)},218:function(n,l,t){"use strict";t.d(l,"a",function(){return h}),l.b=b;var o=t(0),u=t(13),i=t(41),e=t(43),a=t(15),s=t(1),c=t(33),r=t(7),_=t(3),d=t(20),h=o._3({encapsulation:2,styles:[],data:{}});function b(n){return o._25(0,[(n()(),o._5(0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),o._4(278528,null,0,u.f,[o.s,o.t,o.k,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),o._5(0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(n,l,t){var o=!0;"click"===l&&(o=!1!==n.component.backButtonClick(t)&&o);return o},e.b,e.a)),o._4(278528,null,0,u.f,[o.s,o.t,o.k,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._4(1097728,null,0,a.a,[[8,"bar-button"],s.a,o.k,o.F],null,null),(n()(),o._5(0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),o._4(278528,null,0,u.f,[o.s,o.t,o.k,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._4(147456,null,0,c.a,[s.a,o.k,o.F],{name:[0,"name"]},null),(n()(),o._5(0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),o._4(278528,null,0,u.f,[o.s,o.t,o.k,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),o._24(null,["",""])),o._17(null,0),o._17(null,1),o._17(null,2),(n()(),o._5(0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),o._4(278528,null,0,u.f,[o.s,o.t,o.k,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._17(null,3)],function(n,l){var t=l.component;n(l,1,0,"toolbar-background","toolbar-background-"+t._mode);n(l,3,0,"back-button","back-button-"+t._mode);n(l,6,0,"back-button-icon","back-button-icon-"+t._mode),n(l,7,0,t._bbIcon);n(l,9,0,"back-button-text","back-button-text-"+t._mode);n(l,15,0,"toolbar-content","toolbar-content-"+t._mode)},function(n,l){var t=l.component;n(l,2,0,t._hideBb),n(l,5,0,o._18(l,7)._hidden),n(l,10,0,t._backText)})}o._2("ion-navbar",i.a,function(n){return o._25(0,[(n()(),o._5(0,null,null,1,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,b,h)),o._4(49152,null,0,i.a,[r.a,[2,_.a],[2,d.a],s.a,o.k,o.F],null,null)],null,function(n,l){n(l,0,0,o._18(l,1)._hidden,o._18(l,1)._sbPadding)})},{color:"color",mode:"mode",hideBackButton:"hideBackButton"},{},["[menuToggle],ion-buttons[left]","ion-buttons[start]","ion-buttons[end],ion-buttons[right]","*"])},219:function(n,l,t){"use strict";t.d(l,"a",function(){return c}),l.b=r;var o=t(0),u=t(13),i=t(92),e=t(1),a=t(42),s=t(41),c=o._3({encapsulation:2,styles:[],data:{}});function r(n){return o._25(2,[(n()(),o._5(0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),o._4(278528,null,0,u.f,[o.s,o.t,o.k,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._17(null,0)],function(n,l){n(l,1,0,"toolbar-title","toolbar-title-"+l.component._mode)},null)}o._2("ion-title",i.a,function(n){return o._25(0,[(n()(),o._5(0,null,null,1,"ion-title",[],null,null,null,r,c)),o._4(49152,null,0,i.a,[e.a,o.k,o.F,[2,a.a],[2,s.a]],null,null)],null,null)},{color:"color",mode:"mode"},{},["*"])},220:function(n,l,t){"use strict";t.d(l,"a",function(){return d}),l.b=h;var o=t(0),u=t(32),i=t(1),e=t(4),a=t(10),s=t(7),c=t(44),r=t(3),_=t(20),d=o._3({encapsulation:2,styles:[],data:{}});function h(n){return o._25(2,[o._22(402653184,1,{_fixedContent:0}),o._22(402653184,2,{_scrollContent:0}),(n()(),o._5(0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),o._17(null,0),(n()(),o._5(0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),o._17(null,1),o._17(null,2)],null,null)}o._2("ion-content",u.a,function(n){return o._25(0,[(n()(),o._5(0,null,null,1,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,h,d)),o._4(4374528,null,0,u.a,[i.a,e.a,a.a,o.k,o.F,s.a,c.a,o.z,[2,r.a],[2,_.a]],null,null)],null,function(n,l){n(l,0,0,o._18(l,1).statusbarPadding,o._18(l,1)._hasRefresher)})},{color:"color",mode:"mode",fullscreen:"fullscreen",scrollDownOnLoad:"scrollDownOnLoad"},{ionScrollStart:"ionScrollStart",ionScroll:"ionScroll",ionScrollEnd:"ionScrollEnd"},["[ion-fixed],ion-fab","*","ion-refresher"])}});