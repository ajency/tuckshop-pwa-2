webpackJsonp([2],{147:function(n,l,t){"use strict";function o(n){return i._24(2,[(n()(),i._5(0,null,null,0,"img",[],null,null,null,null,null))],null,null)}function u(n){return g._24(0,[(n()(),g._23(null,["\n"])),(n()(),g._5(0,null,null,10,"ion-header",[],null,null,null,null,null)),g._4(16384,null,0,b.a,[f.a,g.k,g.F,[2,p.a]],null,null),(n()(),g._23(null,["\n\t"])),(n()(),g._5(0,null,null,6,"ion-navbar",[["align","center"],["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,k.b,k.a)),g._4(49152,null,0,m.a,[v.a,[2,p.a],[2,y.a],f.a,g.k,g.F],null,null),(n()(),g._23(3,["\n\t\t"])),(n()(),g._5(0,null,3,2,"ion-title",[],null,null,null,F.b,F.a)),g._4(49152,null,0,w.a,[f.a,g.k,g.F,[2,C.a],[2,m.a]],null,null),(n()(),g._23(0,["Welcome to Tuckshop"])),(n()(),g._23(3,["\n\t"])),(n()(),g._23(null,["\n"])),(n()(),g._23(null,["\n\n\n"])),(n()(),g._5(0,null,null,18,"ion-content",[["align","center"],["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,S.b,S.a)),g._4(4374528,null,0,P.a,[f.a,I.a,L.a,g.k,g.F,v.a,M.a,g.z,[2,p.a],[2,y.a]],null,null),(n()(),g._23(1,["\n\n\t"])),(n()(),g._5(0,null,1,2,"h2",[["class","welcome"],["color","dark"],["ion-text",""],["text-center",""]],null,null,null,null,null)),g._4(16384,null,0,j.a,[f.a,g.k,g.F],{color:[0,"color"]},null),(n()(),g._23(null,["\n\t\tGrab some Tuck!\n\t"])),(n()(),g._23(1,["\n\n\n\t"])),(n()(),g._5(0,null,1,1,"ion-img",[["height","280"],["src","/assets/icon/tuckshop.jpg"],["width","280"]],null,null,null,o,h)),g._4(1228800,null,0,O.a,[g.k,g.F,I.a,[2,P.a],L.a],{src:[0,"src"],width:[1,"width"],height:[2,"height"]},null),(n()(),g._23(1,["\n\t"])),(n()(),g._5(0,null,1,0,"div",[],null,null,null,null,null)),(n()(),g._23(1,["\n\n\n\t"])),(n()(),g._5(0,null,1,5,"div",[["padding",""]],null,null,null,null,null)),(n()(),g._23(null,["\n\t\t"])),(n()(),g._5(0,null,null,2,"button",[["block",""],["class","login-btn"],["color","ajency"],["ion-button",""]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var o=!0,u=n.component;return"click"===l&&(o=!1!==u.signIn()&&o),"click"===l&&(o=!1!=(u.disabled=!0)&&o),o},x.b,x.a)),g._4(1097728,null,0,B.a,[[8,""],f.a,g.k,g.F],{color:[0,"color"],block:[1,"block"]},null),(n()(),g._23(0,[" Sign In "])),(n()(),g._23(null,["\n\t"])),(n()(),g._23(1,["\n\n\n\n"]))],function(n,l){n(l,17,0,"dark");n(l,21,0,"/assets/icon/tuckshop.jpg","280","280");n(l,28,0,"ajency","")},function(n,l){var t=l.component;n(l,4,0,g._18(l,5)._hidden,g._18(l,5)._sbPadding),n(l,13,0,g._18(l,14).statusbarPadding,g._18(l,14)._hasRefresher),n(l,27,0,t.disabled)})}Object.defineProperty(l,"__esModule",{value:!0});t(0),t(67);var e=function(){function n(n,l,t){this.navCtrl=n,this.zone=l,this.toastCtrl=t,this.disabled=!1}return n.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad HomePage"),this.handleClientLoad()},n.prototype.navigateToSearch=function(){this.navCtrl.setRoot("SearchPage",{code:""}),console.log("Navigating to another module")},n.prototype.handleClientLoad=function(){var n=this,l=this;gapi.load("client:auth2",function(){console.log(n),gapi.client.init({client_id:"676621258132-6q9s2j1hc8343jj3nn75k0is4s1nb893.apps.googleusercontent.com",cookiepolicy:"single_host_origin",scope:"https://www.googleapis.com/auth/spreadsheets"}).then(function(){console.log(gapi.auth2.getAuthInstance().isSignedIn.get()),console.log(l),l.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())})})},n.prototype.updateSigninStatus=function(n){console.log(this),n&&(console.log(this,"Already signed in"),this.navigateToSearch())},n.prototype.signIn=function(){var n=this;console.log(this),gapi.auth2.getAuthInstance().signIn().then(function(){console.log("signed in"),n.navigateToSearch()})},n}(),a=(t(0),t(67),function(){return function(){}}()),i=t(0),s=t(75),c=t(3),r=t(24),_=t(9),d=[],h=i._3({encapsulation:2,styles:d,data:{}}),g=(i._2("ion-img",s.a,function(n){return i._24(0,[(n()(),i._5(0,null,null,1,"ion-img",[],null,null,null,o,h)),i._4(1228800,null,0,s.a,[i.k,i.F,c.a,[2,r.a],_.a],null,null)],null,null)},{src:"src",bounds:"bounds",cache:"cache",width:"width",height:"height",alt:"alt"},{},[]),t(0)),b=t(74),f=t(1),p=t(4),k=t(150),m=t(30),v=t(6),y=t(15),F=t(151),w=t(69),C=t(31),S=t(152),P=t(24),I=t(3),L=t(9),M=t(32),j=t(81),O=t(75),x=t(109),B=t(18),z=t(47),A=[],N=g._3({encapsulation:2,styles:A,data:{}}),T=g._2("page-home",e,function(n){return g._24(0,[(n()(),g._5(0,null,null,1,"page-home",[],null,null,null,u,N)),g._4(49152,null,0,e,[y.a,g.z,z.a],null,null)],null,null)},{},{},[]);t.d(l,"HomePageModuleNgFactory",function(){return W});var D=t(0),E=t(23),H=t(46),R=t(70),K=t(110),V=t(111),Y=t(112),Z=t(113),q=t(19),G=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t])};return function(l,t){function o(){this.constructor=l}n(l,t),l.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),J=function(n){function l(l){return n.call(this,l,[K.a,V.a,Y.a,Z.a,T],[])||this}return G(l,n),Object.defineProperty(l.prototype,"_NgLocalization_7",{get:function(){return null==this.__NgLocalization_7&&(this.__NgLocalization_7=new E.i(this.parent.get(D.u))),this.__NgLocalization_7},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵi_8",{get:function(){return null==this.__ɵi_8&&(this.__ɵi_8=new H.h),this.__ɵi_8},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_FormBuilder_9",{get:function(){return null==this.__FormBuilder_9&&(this.__FormBuilder_9=new H.a),this.__FormBuilder_9},enumerable:!0,configurable:!0}),l.prototype.createInternal=function(){return this._CommonModule_0=new E.b,this._ɵba_1=new H.g,this._FormsModule_2=new H.b,this._ReactiveFormsModule_3=new H.f,this._IonicModule_4=new R.a,this._IonicPageModule_5=new R.b,this._HomePageModule_6=new a,this._LAZY_LOADED_TOKEN_10=e,this._HomePageModule_6},l.prototype.getInternal=function(n,l){return n===E.b?this._CommonModule_0:n===H.g?this._ɵba_1:n===H.b?this._FormsModule_2:n===H.f?this._ReactiveFormsModule_3:n===R.a?this._IonicModule_4:n===R.b?this._IonicPageModule_5:n===a?this._HomePageModule_6:n===E.j?this._NgLocalization_7:n===H.h?this._ɵi_8:n===H.a?this._FormBuilder_9:n===q.a?this._LAZY_LOADED_TOKEN_10:l},l.prototype.destroyInternal=function(){},l}(D._0),W=new D.w(J,a)},150:function(n,l,t){"use strict";function o(n){return u._24(0,[(n()(),u._5(0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),u._4(278528,null,0,e.f,[u.s,u.t,u.k,u.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),u._5(0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(n,l,t){var o=!0,u=n.component;return"click"===l&&(o=!1!==u.backButtonClick(t)&&o),o},i.b,i.a)),u._4(278528,null,0,e.f,[u.s,u.t,u.k,u.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u._4(1097728,null,0,s.a,[[8,"bar-button"],c.a,u.k,u.F],null,null),(n()(),u._5(0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),u._4(278528,null,0,e.f,[u.s,u.t,u.k,u.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u._4(147456,null,0,r.a,[c.a,u.k,u.F],{name:[0,"name"]},null),(n()(),u._5(0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),u._4(278528,null,0,e.f,[u.s,u.t,u.k,u.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),u._23(null,["",""])),u._17(null,0),u._17(null,1),u._17(null,2),(n()(),u._5(0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),u._4(278528,null,0,e.f,[u.s,u.t,u.k,u.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u._17(null,3)],function(n,l){var t=l.component;n(l,1,0,"toolbar-background","toolbar-background-"+t._mode);n(l,3,0,"back-button","back-button-"+t._mode);n(l,6,0,"back-button-icon","back-button-icon-"+t._mode),n(l,7,0,t._bbIcon);n(l,9,0,"back-button-text","back-button-text-"+t._mode);n(l,15,0,"toolbar-content","toolbar-content-"+t._mode)},function(n,l){var t=l.component;n(l,2,0,t._hideBb),n(l,5,0,u._18(l,7)._hidden),n(l,10,0,t._backText)})}t.d(l,"a",function(){return b}),l.b=o;var u=t(0),e=t(23),a=t(30),i=t(109),s=t(18),c=t(1),r=t(44),_=t(6),d=t(4),h=t(15),g=[],b=u._3({encapsulation:2,styles:g,data:{}});u._2("ion-navbar",a.a,function(n){return u._24(0,[(n()(),u._5(0,null,null,1,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,o,b)),u._4(49152,null,0,a.a,[_.a,[2,d.a],[2,h.a],c.a,u.k,u.F],null,null)],null,function(n,l){n(l,0,0,u._18(l,1)._hidden,u._18(l,1)._sbPadding)})},{color:"color",mode:"mode",hideBackButton:"hideBackButton"},{},["[menuToggle],ion-buttons[left]","ion-buttons[start]","ion-buttons[end],ion-buttons[right]","*"])},151:function(n,l,t){"use strict";function o(n){return u._24(2,[(n()(),u._5(0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),u._4(278528,null,0,e.f,[u.s,u.t,u.k,u.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u._17(null,0)],function(n,l){n(l,1,0,"toolbar-title","toolbar-title-"+l.component._mode)},null)}t.d(l,"a",function(){return _}),l.b=o;var u=t(0),e=t(23),a=t(69),i=t(1),s=t(31),c=t(30),r=[],_=u._3({encapsulation:2,styles:r,data:{}});u._2("ion-title",a.a,function(n){return u._24(0,[(n()(),u._5(0,null,null,1,"ion-title",[],null,null,null,o,_)),u._4(49152,null,0,a.a,[i.a,u.k,u.F,[2,s.a],[2,c.a]],null,null)],null,null)},{color:"color",mode:"mode"},{},["*"])},152:function(n,l,t){"use strict";function o(n){return u._24(2,[u._21(402653184,1,{_fixedContent:0}),u._21(402653184,2,{_scrollContent:0}),(n()(),u._5(0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),u._17(null,0),(n()(),u._5(0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),u._17(null,1),u._17(null,2)],null,null)}t.d(l,"a",function(){return g}),l.b=o;var u=t(0),e=t(24),a=t(1),i=t(3),s=t(9),c=t(6),r=t(32),_=t(4),d=t(15),h=[],g=u._3({encapsulation:2,styles:h,data:{}});u._2("ion-content",e.a,function(n){return u._24(0,[(n()(),u._5(0,null,null,1,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,o,g)),u._4(4374528,null,0,e.a,[a.a,i.a,s.a,u.k,u.F,c.a,r.a,u.z,[2,_.a],[2,d.a]],null,null)],null,function(n,l){n(l,0,0,u._18(l,1).statusbarPadding,u._18(l,1)._hasRefresher)})},{color:"color",mode:"mode",fullscreen:"fullscreen",scrollDownOnLoad:"scrollDownOnLoad"},{ionScrollStart:"ionScrollStart",ionScroll:"ionScroll",ionScrollEnd:"ionScrollEnd"},["[ion-fixed],ion-fab","*","ion-refresher"])}});