webpackJsonp([2],{160:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var o=t(0),u=(t(77),t(14)),e=function(){function n(n,l,t,o,u){this.viewCtrl=n,this.l=l,this.navCtrl=t,this.zone=o,this.toastCtrl=u,this.disabled=!1,this.loc=l}return n.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad HomePage");this.loc.pushState([],"HomePage","/#/home"),this.handleClientLoad()},n.prototype.ionViewWillEnter=function(){console.log("ionViewWillEnter HomePage check"),this.viewCtrl.showBackButton(!1)},n.prototype.navigateToSearch=function(){this.navCtrl.push("SearchPage",{code:""}),console.log("Navigating to another module")},n.prototype.handleClientLoad=function(){var n=this,l=this;gapi.load("client:auth2",function(){console.log(n),gapi.client.init({client_id:"676621258132-6q9s2j1hc8343jj3nn75k0is4s1nb893.apps.googleusercontent.com",cookiepolicy:"single_host_origin",scope:"https://www.googleapis.com/auth/spreadsheets"}).then(function(){console.log(gapi.auth2.getAuthInstance().isSignedIn.get()),console.log(l),l.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())})})},n.prototype.updateSigninStatus=function(n){console.log(this),n&&(console.log(this,"Already signed in"),this.navigateToSearch())},n.prototype.signIn=function(){var n=this;gapi.auth2.getAuthInstance().signIn().then(function(){console.log("signed in"),n.navigateToSearch()})},n}(),a=function(){return function(){}}(),i=t(19),s=t(79),c=t(121),r=t(122),_=t(123),d=t(124),h=t(125),g=t(126),b=t(127),p=t(81),f=t(1),k=t(3),m=t(163),v=t(39),w=t(7),y=t(18),F=t(164),C=t(78),P=t(40),S=t(165),I=t(28),j=t(4),L=t(8),M=t(42),O=t(89),B=t(82),x=o._3({encapsulation:2,styles:[],data:{}});function z(n){return o._25(2,[(n()(),o._5(0,null,null,0,"img",[],null,null,null,null,null))],null,null)}o._2("ion-img",B.a,function(n){return o._25(0,[(n()(),o._5(0,null,null,1,"ion-img",[],null,null,null,z,x)),o._4(1228800,null,0,B.a,[o.k,o.F,j.a,[2,I.a],L.a],null,null)],null,null)},{src:"src",bounds:"bounds",cache:"cache",width:"width",height:"height",alt:"alt"},{},[]);var A=t(41),N=t(15),T=t(57),D=o._3({encapsulation:2,styles:[],data:{}});function E(n){return o._25(0,[(n()(),o._24(null,["\n"])),(n()(),o._5(0,null,null,10,"ion-header",[],null,null,null,null,null)),o._4(16384,null,0,p.a,[f.a,o.k,o.F,[2,k.a]],null,null),(n()(),o._24(null,["\n\t"])),(n()(),o._5(0,null,null,6,"ion-navbar",[["align","center"],["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,m.b,m.a)),o._4(49152,null,0,v.a,[w.a,[2,k.a],[2,y.a],f.a,o.k,o.F],null,null),(n()(),o._24(3,["\n\t\t"])),(n()(),o._5(0,null,3,2,"ion-title",[],null,null,null,F.b,F.a)),o._4(49152,null,0,C.a,[f.a,o.k,o.F,[2,P.a],[2,v.a]],null,null),(n()(),o._24(0,["Welcome to Tuckshop"])),(n()(),o._24(3,["\n\t"])),(n()(),o._24(null,["\n"])),(n()(),o._24(null,["\n\n\n"])),(n()(),o._5(0,null,null,18,"ion-content",[["align","center"],["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,S.b,S.a)),o._4(4374528,null,0,I.a,[f.a,j.a,L.a,o.k,o.F,w.a,M.a,o.z,[2,k.a],[2,y.a]],null,null),(n()(),o._24(1,["\n\n\t"])),(n()(),o._5(0,null,1,2,"h2",[["class","welcome"],["color","dark"],["ion-text",""],["text-center",""]],null,null,null,null,null)),o._4(16384,null,0,O.a,[f.a,o.k,o.F],{color:[0,"color"]},null),(n()(),o._24(null,["\n\t\tGrab some Tuck!\n\t"])),(n()(),o._24(1,["\n\n\n\t"])),(n()(),o._5(0,null,1,1,"ion-img",[["height","280"],["src","/assets/icon/tuckshop.jpg"],["width","280"]],null,null,null,z,x)),o._4(1228800,null,0,B.a,[o.k,o.F,j.a,[2,I.a],L.a],{src:[0,"src"],width:[1,"width"],height:[2,"height"]},null),(n()(),o._24(1,["\n\t"])),(n()(),o._5(0,null,1,0,"div",[],null,null,null,null,null)),(n()(),o._24(1,["\n\n\n\t"])),(n()(),o._5(0,null,1,5,"div",[["padding",""]],null,null,null,null,null)),(n()(),o._24(null,["\n\t\t"])),(n()(),o._5(0,null,null,2,"button",[["block",""],["class","login-btn"],["color","ajency"],["ion-button",""]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var o=!0,u=n.component;"click"===l&&(o=!1!==u.signIn()&&o);"click"===l&&(o=!1!=(u.disabled=!0)&&o);return o},A.b,A.a)),o._4(1097728,null,0,N.a,[[8,""],f.a,o.k,o.F],{color:[0,"color"],block:[1,"block"]},null),(n()(),o._24(0,[" Sign In "])),(n()(),o._24(null,["\n\t"])),(n()(),o._24(1,["\n\n\n\n"]))],function(n,l){n(l,17,0,"dark");n(l,21,0,"/assets/icon/tuckshop.jpg","280","280");n(l,28,0,"ajency","")},function(n,l){var t=l.component;n(l,4,0,o._18(l,5)._hidden,o._18(l,5)._sbPadding),n(l,13,0,o._18(l,14).statusbarPadding,o._18(l,14)._hasRefresher),n(l,27,0,t.disabled)})}var H=o._2("page-home",e,function(n){return o._25(0,[(n()(),o._5(0,null,null,1,"page-home",[],null,null,null,E,D)),o._4(49152,null,0,e,[k.a,u.p,y.a,o.z,T.a],null,null)],null,null)},{},{},[]),R=t(23);t.d(l,"HomePageModuleNgFactory",function(){return K});var V,W=this&&this.__extends||(V=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t])},function(n,l){function t(){this.constructor=n}V(n,l),n.prototype=null===l?Object.create(l):(t.prototype=l.prototype,new t)}),K=new o.w(function(l){function n(n){return l.call(this,n,[c.a,r.a,_.a,d.a,h.a,g.a,b.a,H],[])||this}return W(n,l),Object.defineProperty(n.prototype,"_NgLocalization_7",{get:function(){return null==this.__NgLocalization_7&&(this.__NgLocalization_7=new u.i(this.parent.get(o.u))),this.__NgLocalization_7},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵi_8",{get:function(){return null==this.__ɵi_8&&(this.__ɵi_8=new i.k),this.__ɵi_8},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_FormBuilder_9",{get:function(){return null==this.__FormBuilder_9&&(this.__FormBuilder_9=new i.c),this.__FormBuilder_9},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new u.b,this._ɵba_1=new i.j,this._FormsModule_2=new i.d,this._ReactiveFormsModule_3=new i.i,this._IonicModule_4=new s.a,this._IonicPageModule_5=new s.b,this._HomePageModule_6=new a,this._LAZY_LOADED_TOKEN_10=e,this._HomePageModule_6},n.prototype.getInternal=function(n,l){return n===u.b?this._CommonModule_0:n===i.j?this._ɵba_1:n===i.d?this._FormsModule_2:n===i.i?this._ReactiveFormsModule_3:n===s.a?this._IonicModule_4:n===s.b?this._IonicPageModule_5:n===a?this._HomePageModule_6:n===u.j?this._NgLocalization_7:n===i.k?this._ɵi_8:n===i.c?this._FormBuilder_9:n===R.a?this._LAZY_LOADED_TOKEN_10:l},n.prototype.destroyInternal=function(){},n}(o._0),a)},163:function(n,l,t){"use strict";t.d(l,"a",function(){return h}),l.b=g;var o=t(0),u=t(14),e=t(39),a=t(41),i=t(15),s=t(1),c=t(29),r=t(7),_=t(3),d=t(18),h=o._3({encapsulation:2,styles:[],data:{}});function g(n){return o._25(0,[(n()(),o._5(0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),o._4(278528,null,0,u.f,[o.s,o.t,o.k,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),o._5(0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(n,l,t){var o=!0;"click"===l&&(o=!1!==n.component.backButtonClick(t)&&o);return o},a.b,a.a)),o._4(278528,null,0,u.f,[o.s,o.t,o.k,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._4(1097728,null,0,i.a,[[8,"bar-button"],s.a,o.k,o.F],null,null),(n()(),o._5(0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),o._4(278528,null,0,u.f,[o.s,o.t,o.k,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._4(147456,null,0,c.a,[s.a,o.k,o.F],{name:[0,"name"]},null),(n()(),o._5(0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),o._4(278528,null,0,u.f,[o.s,o.t,o.k,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),o._24(null,["",""])),o._17(null,0),o._17(null,1),o._17(null,2),(n()(),o._5(0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),o._4(278528,null,0,u.f,[o.s,o.t,o.k,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._17(null,3)],function(n,l){var t=l.component;n(l,1,0,"toolbar-background","toolbar-background-"+t._mode);n(l,3,0,"back-button","back-button-"+t._mode);n(l,6,0,"back-button-icon","back-button-icon-"+t._mode),n(l,7,0,t._bbIcon);n(l,9,0,"back-button-text","back-button-text-"+t._mode);n(l,15,0,"toolbar-content","toolbar-content-"+t._mode)},function(n,l){var t=l.component;n(l,2,0,t._hideBb),n(l,5,0,o._18(l,7)._hidden),n(l,10,0,t._backText)})}o._2("ion-navbar",e.a,function(n){return o._25(0,[(n()(),o._5(0,null,null,1,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,g,h)),o._4(49152,null,0,e.a,[r.a,[2,_.a],[2,d.a],s.a,o.k,o.F],null,null)],null,function(n,l){n(l,0,0,o._18(l,1)._hidden,o._18(l,1)._sbPadding)})},{color:"color",mode:"mode",hideBackButton:"hideBackButton"},{},["[menuToggle],ion-buttons[left]","ion-buttons[start]","ion-buttons[end],ion-buttons[right]","*"])},164:function(n,l,t){"use strict";t.d(l,"a",function(){return c}),l.b=r;var o=t(0),u=t(14),e=t(78),a=t(1),i=t(40),s=t(39),c=o._3({encapsulation:2,styles:[],data:{}});function r(n){return o._25(2,[(n()(),o._5(0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),o._4(278528,null,0,u.f,[o.s,o.t,o.k,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._17(null,0)],function(n,l){n(l,1,0,"toolbar-title","toolbar-title-"+l.component._mode)},null)}o._2("ion-title",e.a,function(n){return o._25(0,[(n()(),o._5(0,null,null,1,"ion-title",[],null,null,null,r,c)),o._4(49152,null,0,e.a,[a.a,o.k,o.F,[2,i.a],[2,s.a]],null,null)],null,null)},{color:"color",mode:"mode"},{},["*"])},165:function(n,l,t){"use strict";t.d(l,"a",function(){return d}),l.b=h;var o=t(0),u=t(28),e=t(1),a=t(4),i=t(8),s=t(7),c=t(42),r=t(3),_=t(18),d=o._3({encapsulation:2,styles:[],data:{}});function h(n){return o._25(2,[o._22(402653184,1,{_fixedContent:0}),o._22(402653184,2,{_scrollContent:0}),(n()(),o._5(0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),o._17(null,0),(n()(),o._5(0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),o._17(null,1),o._17(null,2)],null,null)}o._2("ion-content",u.a,function(n){return o._25(0,[(n()(),o._5(0,null,null,1,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,h,d)),o._4(4374528,null,0,u.a,[e.a,a.a,i.a,o.k,o.F,s.a,c.a,o.z,[2,r.a],[2,_.a]],null,null)],null,function(n,l){n(l,0,0,o._18(l,1).statusbarPadding,o._18(l,1)._hasRefresher)})},{color:"color",mode:"mode",fullscreen:"fullscreen",scrollDownOnLoad:"scrollDownOnLoad"},{ionScrollStart:"ionScrollStart",ionScroll:"ionScroll",ionScrollEnd:"ionScrollEnd"},["[ion-fixed],ion-fab","*","ion-refresher"])}});