webpackJsonp([3],{215:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var o=t(0),u=(t(43),t(67)),e=t(13),a=t(47),i=function(){function n(n,l,t,o,u,e,a,i,s){this.viewCtrl=n,this.l=l,this.navCtrl=t,this.zone=o,this.toastCtrl=u,this.appservice=e,this.firebasemessaging=a,this.alertCtrl=i,this.events=s,this.disabled=!1,this.notificationsSubscribed=!1,this.loc=l}return n.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad HomePage");this.loc.pushState([],"HomePage","/#/home")},n.prototype.ionViewWillLeave=function(){console.log("inside ionViewWillLeave function")},n.prototype.ngOnInit=function(){var l=this;console.log("ngOnInit home page"),this.notificationsSubscribed=this.firebasemessaging.notificationsSubscribed,this.appservice.handleClientLoad().then(function(n){console.log("response from handleClientLoad function"),l.navigateToSearch()}).catch(function(n){console.log("Error in login check")})},n.prototype.ionViewWillEnter=function(){console.log("ionViewWillEnter HomePage check"),this.viewCtrl.showBackButton(!1)},n.prototype.signIn=function(){var l=this;this.appservice.signIn().then(function(n){console.log("response from sign in ==>",n),l.navigateToSearch()}).catch(function(n){console.log("error in loggin in =>",n)})},n.prototype.navigateToSearch=function(){this.navCtrl.push("SearchPage",{code:""}),console.log("Navigating to another module")},n}(),s=function(){return function(){}}(),r=t(17),c=t(94),_=t(144),d=t(145),h=t(146),b=t(147),g=t(148),f=t(149),p=t(150),k=t(151),m=t(95),v=t(1),w=t(3),y=t(219),F=t(42),C=t(7),P=t(22),L=t(220),S=t(93),O=t(44),M=t(221),I=t(32),j=t(4),B=t(9),x=t(46),z=t(105),E=t(97),N=o._3({encapsulation:2,styles:[],data:{}});function T(n){return o._25(2,[(n()(),o._5(0,null,null,0,"img",[],null,null,null,null,null))],null,null)}o._2("ion-img",E.a,function(n){return o._25(0,[(n()(),o._5(0,null,null,1,"ion-img",[],null,null,null,T,N)),o._4(1228800,null,0,E.a,[o.k,o.F,j.a,[2,I.a],B.a],null,null)],null,null)},{src:"src",bounds:"bounds",cache:"cache",width:"width",height:"height",alt:"alt"},{},[]);var D=t(45),H=t(16),V=t(70),A=t(71),W=t(72),R=o._3({encapsulation:2,styles:[],data:{}});function K(n){return o._25(0,[(n()(),o._24(null,["\n"])),(n()(),o._5(0,null,null,11,"ion-header",[],null,null,null,null,null)),o._4(16384,null,0,m.a,[v.a,o.k,o.F,[2,w.a]],null,null),(n()(),o._24(null,["\n\t"])),(n()(),o._5(0,null,null,7,"ion-navbar",[["align","center"],["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,y.b,y.a)),o._4(49152,null,0,F.a,[C.a,[2,w.a],[2,P.a],v.a,o.k,o.F],null,null),(n()(),o._24(3,["\n\t\t"])),(n()(),o._5(0,null,3,2,"ion-title",[],null,null,null,L.b,L.a)),o._4(49152,null,0,S.a,[v.a,o.k,o.F,[2,O.a],[2,F.a]],null,null),(n()(),o._24(0,["Welcome to Tuckshop"])),(n()(),o._24(3,["\n\n"])),(n()(),o._24(3,["\n\t"])),(n()(),o._24(null,["\n"])),(n()(),o._24(null,["\n\n\n"])),(n()(),o._5(0,null,null,18,"ion-content",[["align","center"],["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,M.b,M.a)),o._4(4374528,null,0,I.a,[v.a,j.a,B.a,o.k,o.F,C.a,x.a,o.z,[2,w.a],[2,P.a]],null,null),(n()(),o._24(1,["\n\n\t"])),(n()(),o._5(0,null,1,2,"h2",[["class","welcome"],["color","dark"],["ion-text",""],["text-center",""]],null,null,null,null,null)),o._4(16384,null,0,z.a,[v.a,o.k,o.F],{color:[0,"color"]},null),(n()(),o._24(null,["\n\t\tGrab some Tuck!\n\t"])),(n()(),o._24(1,["\n\n\n\t"])),(n()(),o._5(0,null,1,1,"ion-img",[["height","280"],["src","/assets/icon/tuckshop.jpg"],["width","280"]],null,null,null,T,N)),o._4(1228800,null,0,E.a,[o.k,o.F,j.a,[2,I.a],B.a],{src:[0,"src"],width:[1,"width"],height:[2,"height"]},null),(n()(),o._24(1,["\n\t"])),(n()(),o._5(0,null,1,0,"div",[],null,null,null,null,null)),(n()(),o._24(1,["\n\n\n\t"])),(n()(),o._5(0,null,1,5,"div",[["padding",""]],null,null,null,null,null)),(n()(),o._24(null,["\n\t\t"])),(n()(),o._5(0,null,null,2,"button",[["block",""],["class","login-btn"],["color","ajency"],["ion-button",""]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var o=!0,u=n.component;"click"===l&&(o=!1!==u.signIn()&&o);"click"===l&&(o=!1!=(u.disabled=!0)&&o);return o},D.b,D.a)),o._4(1097728,null,0,H.a,[[8,""],v.a,o.k,o.F],{color:[0,"color"],block:[1,"block"]},null),(n()(),o._24(0,[" Sign In "])),(n()(),o._24(null,["\n\t"])),(n()(),o._24(1,["\n\n\n\n"]))],function(n,l){n(l,18,0,"dark");n(l,22,0,"/assets/icon/tuckshop.jpg","280","280");n(l,29,0,"ajency","")},function(n,l){var t=l.component;n(l,4,0,o._18(l,5)._hidden,o._18(l,5)._sbPadding),n(l,14,0,o._18(l,15).statusbarPadding,o._18(l,15)._hasRefresher),n(l,28,0,t.disabled)})}var Y=o._2("page-home",i,function(n){return o._25(0,[(n()(),o._5(0,null,null,1,"page-home",[],null,null,null,K,R)),o._4(114688,null,0,i,[w.a,e.p,P.a,o.z,V.a,u.a,a.a,A.a,W.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),Z=t(27);t.d(l,"HomePageModuleNgFactory",function(){return q});var G,J=this&&this.__extends||(G=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t])},function(n,l){function t(){this.constructor=n}G(n,l),n.prototype=null===l?Object.create(l):(t.prototype=l.prototype,new t)}),q=new o.w(function(l){function n(n){return l.call(this,n,[_.a,d.a,h.a,b.a,g.a,f.a,p.a,k.a,Y],[])||this}return J(n,l),Object.defineProperty(n.prototype,"_NgLocalization_7",{get:function(){return null==this.__NgLocalization_7&&(this.__NgLocalization_7=new e.i(this.parent.get(o.u))),this.__NgLocalization_7},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵi_8",{get:function(){return null==this.__ɵi_8&&(this.__ɵi_8=new r.k),this.__ɵi_8},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_FormBuilder_9",{get:function(){return null==this.__FormBuilder_9&&(this.__FormBuilder_9=new r.c),this.__FormBuilder_9},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new e.b,this._ɵba_1=new r.j,this._FormsModule_2=new r.d,this._ReactiveFormsModule_3=new r.i,this._IonicModule_4=new c.a,this._IonicPageModule_5=new c.b,this._HomePageModule_6=new s,this._LAZY_LOADED_TOKEN_10=i,this._HomePageModule_6},n.prototype.getInternal=function(n,l){return n===e.b?this._CommonModule_0:n===r.j?this._ɵba_1:n===r.d?this._FormsModule_2:n===r.i?this._ReactiveFormsModule_3:n===c.a?this._IonicModule_4:n===c.b?this._IonicPageModule_5:n===s?this._HomePageModule_6:n===e.j?this._NgLocalization_7:n===r.k?this._ɵi_8:n===r.c?this._FormBuilder_9:n===Z.a?this._LAZY_LOADED_TOKEN_10:l},n.prototype.destroyInternal=function(){},n}(o._0),s)},219:function(n,l,t){"use strict";t.d(l,"a",function(){return h}),l.b=b;var o=t(0),u=t(13),e=t(42),a=t(45),i=t(16),s=t(1),r=t(33),c=t(7),_=t(3),d=t(22),h=o._3({encapsulation:2,styles:[],data:{}});function b(n){return o._25(0,[(n()(),o._5(0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),o._4(278528,null,0,u.f,[o.s,o.t,o.k,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),o._5(0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(n,l,t){var o=!0;"click"===l&&(o=!1!==n.component.backButtonClick(t)&&o);return o},a.b,a.a)),o._4(278528,null,0,u.f,[o.s,o.t,o.k,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._4(1097728,null,0,i.a,[[8,"bar-button"],s.a,o.k,o.F],null,null),(n()(),o._5(0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),o._4(278528,null,0,u.f,[o.s,o.t,o.k,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._4(147456,null,0,r.a,[s.a,o.k,o.F],{name:[0,"name"]},null),(n()(),o._5(0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),o._4(278528,null,0,u.f,[o.s,o.t,o.k,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),o._24(null,["",""])),o._17(null,0),o._17(null,1),o._17(null,2),(n()(),o._5(0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),o._4(278528,null,0,u.f,[o.s,o.t,o.k,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._17(null,3)],function(n,l){var t=l.component;n(l,1,0,"toolbar-background","toolbar-background-"+t._mode);n(l,3,0,"back-button","back-button-"+t._mode);n(l,6,0,"back-button-icon","back-button-icon-"+t._mode),n(l,7,0,t._bbIcon);n(l,9,0,"back-button-text","back-button-text-"+t._mode);n(l,15,0,"toolbar-content","toolbar-content-"+t._mode)},function(n,l){var t=l.component;n(l,2,0,t._hideBb),n(l,5,0,o._18(l,7)._hidden),n(l,10,0,t._backText)})}o._2("ion-navbar",e.a,function(n){return o._25(0,[(n()(),o._5(0,null,null,1,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,b,h)),o._4(49152,null,0,e.a,[c.a,[2,_.a],[2,d.a],s.a,o.k,o.F],null,null)],null,function(n,l){n(l,0,0,o._18(l,1)._hidden,o._18(l,1)._sbPadding)})},{color:"color",mode:"mode",hideBackButton:"hideBackButton"},{},["[menuToggle],ion-buttons[left]","ion-buttons[start]","ion-buttons[end],ion-buttons[right]","*"])},220:function(n,l,t){"use strict";t.d(l,"a",function(){return r}),l.b=c;var o=t(0),u=t(13),e=t(93),a=t(1),i=t(44),s=t(42),r=o._3({encapsulation:2,styles:[],data:{}});function c(n){return o._25(2,[(n()(),o._5(0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),o._4(278528,null,0,u.f,[o.s,o.t,o.k,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._17(null,0)],function(n,l){n(l,1,0,"toolbar-title","toolbar-title-"+l.component._mode)},null)}o._2("ion-title",e.a,function(n){return o._25(0,[(n()(),o._5(0,null,null,1,"ion-title",[],null,null,null,c,r)),o._4(49152,null,0,e.a,[a.a,o.k,o.F,[2,i.a],[2,s.a]],null,null)],null,null)},{color:"color",mode:"mode"},{},["*"])},221:function(n,l,t){"use strict";t.d(l,"a",function(){return d}),l.b=h;var o=t(0),u=t(32),e=t(1),a=t(4),i=t(9),s=t(7),r=t(46),c=t(3),_=t(22),d=o._3({encapsulation:2,styles:[],data:{}});function h(n){return o._25(2,[o._22(402653184,1,{_fixedContent:0}),o._22(402653184,2,{_scrollContent:0}),(n()(),o._5(0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),o._17(null,0),(n()(),o._5(0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),o._17(null,1),o._17(null,2)],null,null)}o._2("ion-content",u.a,function(n){return o._25(0,[(n()(),o._5(0,null,null,1,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,h,d)),o._4(4374528,null,0,u.a,[e.a,a.a,i.a,o.k,o.F,s.a,r.a,o.z,[2,c.a],[2,_.a]],null,null)],null,function(n,l){n(l,0,0,o._18(l,1).statusbarPadding,o._18(l,1)._hasRefresher)})},{color:"color",mode:"mode",fullscreen:"fullscreen",scrollDownOnLoad:"scrollDownOnLoad"},{ionScrollStart:"ionScrollStart",ionScroll:"ionScroll",ionScrollEnd:"ionScrollEnd"},["[ion-fixed],ion-fab","*","ion-refresher"])}});