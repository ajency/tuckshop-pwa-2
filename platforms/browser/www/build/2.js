webpackJsonp([2],{210:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=t(0),e=(t(62),t(85)),o=function(){function l(l,n,t){this.navCtrl=l,this.navParams=n,this.appservice=t,this.morning_special=[],this.evening_special=[]}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad SpecialsPage")},l.prototype.ngOnInit=function(){var n=this;console.log("Inside ngOnInit SpecialsPage"),this.appservice.handleClientLoad().then(function(l){n.callSpecialOrdersApi()}).catch(function(l){n.navCtrl.push("home")})},l.prototype.callSpecialOrdersApi=function(){var n=this;console.log("Inside special order api call function");this.appservice.request("https://content-script.googleapis.com/v1/scripts/"+this.appservice.script_id+":run","post",{function:"getSpecialsOrder",parameters:""},{},!1,"promise").then(function(l){console.log("response from search api ==>",l),n.specials=l.response.result,n.sortSpecials()}).catch(function(l){console.log("error from search api",l)})},l.prototype.sortSpecials=function(){for(var l=this.specials[0].item,n=0;n<this.specials.length;n++)this.specials[n].item==l?this.morning_special.push(this.specials[n]):this.evening_special.push(this.specials[n])},l.prototype.closeOrder=function(l,n,t){var u=this;"open"==l.order_status&&(console.log("Close oreder for ==>",l,n,t),this.appservice.request("https://content-script.googleapis.com/v1/scripts/"+this.appservice.script_id+":run","post",{function:"close_order",parameters:[l.email,l.item,l.date_of_order]},{},!1,"promise").then(function(l){if(console.log("response from search api ==>",l),!0===l.response.result)"morning"==n?u.morning_special[t].order_status="closed":u.evening_special[t].order_status="closed";else u.appservice.presentToast("Something unexpected happened","error",5e3,!1,"bottom","")}).catch(function(l){console.log("error from search api",l)}))},l}(),i=function(){return function(){}}(),a=t(14),s=t(21),r=t(87),c=t(138),_=t(139),p=t(140),d=t(141),g=t(142),h=t(143),f=t(144),m=t(63),v=t(1),b=t(4),k=t(6),F=t(9),w=t(90),y=t(31),x=t(88),C=t(3),O=t(211),P=t(40),M=t(8),S=t(20),I=t(212),L=t(86),j=t(41),B=t(213),D=t(30),N=t(43),z=t(10),A=u._3({encapsulation:2,styles:[],data:{}});function E(l){return u._25(0,[(l()(),u._5(0,null,null,25,"ion-list",[],null,null,null,null,null)),u._4(16384,null,0,m.a,[v.a,u.k,u.F,b.a,k.i,F.a],null,null),(l()(),u._24(null,["\n\t\t\t\t\t"])),(l()(),u._24(null,["\n\t\t\t\t\t "])),(l()(),u._5(0,null,null,20,"ion-avatar",[["item-start",""]],null,[[null,"click"]],function(l,n,t){var u=!0;"click"===n&&(u=!1!==l.component.closeOrder(l.context.$implicit,"morning",l.context.index)&&u);return u},null,null)),u._4(278528,null,0,a.f,[u.s,u.t,u.k,u.F],{ngClass:[0,"ngClass"]},null),u._20(["active"]),u._4(16384,null,0,w.a,[],null,null),(l()(),u._24(null,["\n\t\t\t\t\t      "])),(l()(),u._5(0,null,null,0,"img",[["class","avatar-img"],["width","70"]],[[8,"src",4]],null,null,null,null)),(l()(),u._24(null,["\n\t\t\t\t\t      "])),(l()(),u._5(0,null,null,1,"ion-icon",[["class","checkmark"],["name","checkmark"],["role","img"]],[[2,"hide",null]],null,null,null,null)),u._4(147456,null,0,y.a,[v.a,u.k,u.F],{name:[0,"name"]},null),(l()(),u._24(null,["\n\t\t\t\t\t      "])),(l()(),u._5(0,null,null,9,":svg:svg",[["class","svg-filter"],["height","0"],["version","1.1"],["width","0"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),u._24(null,["\n\t\t\t\t\t\t    "])),(l()(),u._5(0,null,null,6,":svg:defs",[],null,null,null,null,null)),(l()(),u._24(null,["\n\t\t\t\t\t\t        "])),(l()(),u._5(0,null,null,3,":svg:filter",[["height","100%"],["id","svgfilter"],["width","100%"],["x","0%"],["y","0%"]],null,null,null,null,null)),(l()(),u._24(null,["\n\t\t\t\t\t\t            "])),(l()(),u._5(0,null,null,0,":svg:feColorMatrix",[["id","svgcolormatrix"],["result","original"],["type","matrix"],["values","-0.8 0.1 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 -0.04"]],null,null,null,null,null)),(l()(),u._24(null,["\n\t\t\t\t\t\t        "])),(l()(),u._24(null,["\n\t\t\t\t\t\t    "])),(l()(),u._24(null,["\n\t\t\t\t\t\t"])),(l()(),u._24(null,["\n\t\t\t\t    "])),(l()(),u._24(null,["\n\t\t\t\t"]))],function(l,n){l(n,5,0,l(n,6,0,"closed"==n.context.$implicit.order_status));l(n,12,0,"checkmark")},function(l,n){l(n,9,0,u._9(1,"",n.context.$implicit.avatar,"")),l(n,11,0,u._18(n,12)._hidden)})}function T(l){return u._25(0,[(l()(),u._5(0,null,null,16,"div",[["class","specials__holder"]],null,null,null,null,null)),(l()(),u._24(null,["\n\t\t\t"])),(l()(),u._5(0,null,null,7,"div",[["class","specials__heading"]],null,null,null,null,null)),(l()(),u._24(null,["\n\t\t\t\t"])),(l()(),u._5(0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u._24(null,["",""])),(l()(),u._24(null,["\n\t\t\t\t"])),(l()(),u._5(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u._24(null,["",""])),(l()(),u._24(null,["\n\t\t\t"])),(l()(),u._24(null,["\n\t\t\t"])),(l()(),u._5(0,null,null,4,"div",[["class","specials__lists"]],null,null,null,null,null)),(l()(),u._24(null,["\n\t\t\t\t"])),(l()(),u._1(16777216,null,null,1,null,E)),u._4(802816,null,0,a.g,[u.P,u.M,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u._24(null,["\n\t\t\t"])),(l()(),u._24(null,["\n\t\t"]))],function(l,n){l(n,14,0,n.component.morning_special)},function(l,n){var t=n.component;l(n,5,0,t.morning_special[0].item),l(n,8,0,t.morning_special[0].date_of_order)})}function $(l){return u._25(0,[(l()(),u._5(0,null,null,24,"ion-list",[],null,null,null,null,null)),u._4(16384,null,0,m.a,[v.a,u.k,u.F,b.a,k.i,F.a],null,null),(l()(),u._24(null,["\n\t\t\t\t\t"])),(l()(),u._5(0,null,null,20,"ion-avatar",[["item-start",""]],null,[[null,"click"]],function(l,n,t){var u=!0;"click"===n&&(u=!1!==l.component.closeOrder(l.context.$implicit,"evening",l.context.index)&&u);return u},null,null)),u._4(278528,null,0,a.f,[u.s,u.t,u.k,u.F],{ngClass:[0,"ngClass"]},null),u._20(["active"]),u._4(16384,null,0,w.a,[],null,null),(l()(),u._24(null,["\n\t\t\t\t\t\t"])),(l()(),u._5(0,null,null,0,"img",[["class","avatar-img"],["width","70"]],[[8,"src",4]],null,null,null,null)),(l()(),u._24(null,["\n\t\t\t\t\t\t"])),(l()(),u._5(0,null,null,1,"ion-icon",[["class","checkmark"],["name","checkmark"],["role","img"]],[[2,"hide",null]],null,null,null,null)),u._4(147456,null,0,y.a,[v.a,u.k,u.F],{name:[0,"name"]},null),(l()(),u._24(null,["\n\t\t\t\t\t\t"])),(l()(),u._5(0,null,null,9,":svg:svg",[["class","svg-filter"],["height","0"],["version","1.1"],["width","0"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),u._24(null,["\n\t\t\t\t\t\t    "])),(l()(),u._5(0,null,null,6,":svg:defs",[],null,null,null,null,null)),(l()(),u._24(null,["\n\t\t\t\t\t\t        "])),(l()(),u._5(0,null,null,3,":svg:filter",[["height","100%"],["id","svgfilter"],["width","100%"],["x","0%"],["y","0%"]],null,null,null,null,null)),(l()(),u._24(null,["\n\t\t\t\t\t\t            "])),(l()(),u._5(0,null,null,0,":svg:feColorMatrix",[["id","svgcolormatrix"],["result","original"],["type","matrix"],["values","-0.8 0.1 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 -0.04"]],null,null,null,null,null)),(l()(),u._24(null,["\n\t\t\t\t\t\t        "])),(l()(),u._24(null,["\n\t\t\t\t\t\t    "])),(l()(),u._24(null,["\n\t\t\t\t\t\t"])),(l()(),u._24(null,["\n\t\t\t\t\t"])),(l()(),u._24(null,["\n\t\t\t\t"]))],function(l,n){l(n,4,0,l(n,5,0,"closed"==n.context.$implicit.order_status));l(n,11,0,"checkmark")},function(l,n){l(n,8,0,u._9(1,"",n.context.$implicit.avatar,"")),l(n,10,0,u._18(n,11)._hidden)})}function R(l){return u._25(0,[(l()(),u._5(0,null,null,16,"div",[["class","specials__holder"]],null,null,null,null,null)),(l()(),u._24(null,["\n\t\t\t"])),(l()(),u._5(0,null,null,7,"div",[["class","specials__heading"]],null,null,null,null,null)),(l()(),u._24(null,["\n\t\t\t\t"])),(l()(),u._5(0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u._24(null,["",""])),(l()(),u._24(null,["\n\t\t\t\t"])),(l()(),u._5(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u._24(null,["",""])),(l()(),u._24(null,["\n\t\t\t"])),(l()(),u._24(null,["\n\t\t\t"])),(l()(),u._5(0,null,null,4,"div",[["class","specials__lists"]],null,null,null,null,null)),(l()(),u._24(null,["\n\t\t\t\t"])),(l()(),u._1(16777216,null,null,1,null,$)),u._4(802816,null,0,a.g,[u.P,u.M,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u._24(null,["\n\t\t\t"])),(l()(),u._24(null,["\n\t\t"]))],function(l,n){l(n,14,0,n.component.evening_special)},function(l,n){var t=n.component;l(n,5,0,t.evening_special[0].item),l(n,8,0,t.evening_special[0].date_of_order)})}function q(l){return u._25(0,[(l()(),u._5(0,null,null,7,"div",[["class","specials"]],null,null,null,null,null)),(l()(),u._24(null,["\n\t\t"])),(l()(),u._1(16777216,null,null,1,null,T)),u._4(16384,null,0,a.h,[u.P,u.M],{ngIf:[0,"ngIf"]},null),(l()(),u._24(null,["\n\n\t\t"])),(l()(),u._1(16777216,null,null,1,null,R)),u._4(16384,null,0,a.h,[u.P,u.M],{ngIf:[0,"ngIf"]},null),(l()(),u._24(null,["\n\t"]))],function(l,n){var t=n.component;l(n,3,0,t.morning_special&&0!=t.morning_special.length),l(n,6,0,t.evening_special&&0!=t.evening_special.length)},null)}function K(l){return u._25(0,[(l()(),u._24(null,["\n\n"])),(l()(),u._5(0,null,null,10,"ion-header",[],null,null,null,null,null)),u._4(16384,null,0,x.a,[v.a,u.k,u.F,[2,C.a]],null,null),(l()(),u._24(null,["\n\t"])),(l()(),u._5(0,null,null,6,"ion-navbar",[["align","center"],["class","toolbar"],["color","ajency"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,O.b,O.a)),u._4(49152,null,0,P.a,[M.a,[2,C.a],[2,S.a],v.a,u.k,u.F],{color:[0,"color"]},null),(l()(),u._24(3,["\n\t\t"])),(l()(),u._5(0,null,3,2,"ion-title",[],null,null,null,I.b,I.a)),u._4(49152,null,0,L.a,[v.a,u.k,u.F,[2,j.a],[2,P.a]],null,null),(l()(),u._24(0,["Tuckshop"])),(l()(),u._24(3,["\n\t"])),(l()(),u._24(null,["\n"])),(l()(),u._24(null,["\n\n\n"])),(l()(),u._5(0,null,null,5,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,B.b,B.a)),u._4(4374528,null,0,D.a,[v.a,b.a,F.a,u.k,u.F,M.a,N.a,u.z,[2,C.a],[2,S.a]],null,null),(l()(),u._24(1,["\n\t"])),(l()(),u._1(16777216,null,1,1,null,q)),u._4(16384,null,0,a.h,[u.P,u.M],{ngIf:[0,"ngIf"]},null),(l()(),u._24(1,["\n"])),(l()(),u._24(null,["\n"]))],function(l,n){var t=n.component;l(n,5,0,"ajency"),l(n,17,0,t.specials)},function(l,n){l(n,4,0,u._18(n,5)._hidden,u._18(n,5)._sbPadding),l(n,13,0,u._18(n,14).statusbarPadding,u._18(n,14)._hasRefresher)})}var V=u._2("page-specials",o,function(l){return u._25(0,[(l()(),u._5(0,null,null,1,"page-specials",[],null,null,null,K,A)),u._4(114688,null,0,o,[S.a,z.a,e.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),Y=t(25);t.d(n,"SpecialsPageModuleNgFactory",function(){return G});var Z,J=this&&this.__extends||(Z=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var t in n)n.hasOwnProperty(t)&&(l[t]=n[t])},function(l,n){function t(){this.constructor=l}Z(l,n),l.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),G=new u.w(function(n){function l(l){return n.call(this,l,[c.a,_.a,p.a,d.a,g.a,h.a,f.a,V],[])||this}return J(l,n),Object.defineProperty(l.prototype,"_NgLocalization_7",{get:function(){return null==this.__NgLocalization_7&&(this.__NgLocalization_7=new a.i(this.parent.get(u.u))),this.__NgLocalization_7},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵi_8",{get:function(){return null==this.__ɵi_8&&(this.__ɵi_8=new s.k),this.__ɵi_8},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_FormBuilder_9",{get:function(){return null==this.__FormBuilder_9&&(this.__FormBuilder_9=new s.c),this.__FormBuilder_9},enumerable:!0,configurable:!0}),l.prototype.createInternal=function(){return this._CommonModule_0=new a.b,this._ɵba_1=new s.j,this._FormsModule_2=new s.d,this._ReactiveFormsModule_3=new s.i,this._IonicModule_4=new r.a,this._IonicPageModule_5=new r.b,this._SpecialsPageModule_6=new i,this._LAZY_LOADED_TOKEN_10=o,this._SpecialsPageModule_6},l.prototype.getInternal=function(l,n){return l===a.b?this._CommonModule_0:l===s.j?this._ɵba_1:l===s.d?this._FormsModule_2:l===s.i?this._ReactiveFormsModule_3:l===r.a?this._IonicModule_4:l===r.b?this._IonicPageModule_5:l===i?this._SpecialsPageModule_6:l===a.j?this._NgLocalization_7:l===s.k?this._ɵi_8:l===s.c?this._FormBuilder_9:l===Y.a?this._LAZY_LOADED_TOKEN_10:n},l.prototype.destroyInternal=function(){},l}(u._0),i)},211:function(l,n,t){"use strict";t.d(n,"a",function(){return d}),n.b=g;var u=t(0),e=t(14),o=t(40),i=t(42),a=t(15),s=t(1),r=t(31),c=t(8),_=t(3),p=t(20),d=u._3({encapsulation:2,styles:[],data:{}});function g(l){return u._25(0,[(l()(),u._5(0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),u._4(278528,null,0,e.f,[u.s,u.t,u.k,u.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),u._5(0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,t){var u=!0;"click"===n&&(u=!1!==l.component.backButtonClick(t)&&u);return u},i.b,i.a)),u._4(278528,null,0,e.f,[u.s,u.t,u.k,u.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u._4(1097728,null,0,a.a,[[8,"bar-button"],s.a,u.k,u.F],null,null),(l()(),u._5(0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),u._4(278528,null,0,e.f,[u.s,u.t,u.k,u.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u._4(147456,null,0,r.a,[s.a,u.k,u.F],{name:[0,"name"]},null),(l()(),u._5(0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),u._4(278528,null,0,e.f,[u.s,u.t,u.k,u.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),u._24(null,["",""])),u._17(null,0),u._17(null,1),u._17(null,2),(l()(),u._5(0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),u._4(278528,null,0,e.f,[u.s,u.t,u.k,u.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u._17(null,3)],function(l,n){var t=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+t._mode);l(n,3,0,"back-button","back-button-"+t._mode);l(n,6,0,"back-button-icon","back-button-icon-"+t._mode),l(n,7,0,t._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+t._mode);l(n,15,0,"toolbar-content","toolbar-content-"+t._mode)},function(l,n){var t=n.component;l(n,2,0,t._hideBb),l(n,5,0,u._18(n,7)._hidden),l(n,10,0,t._backText)})}u._2("ion-navbar",o.a,function(l){return u._25(0,[(l()(),u._5(0,null,null,1,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,g,d)),u._4(49152,null,0,o.a,[c.a,[2,_.a],[2,p.a],s.a,u.k,u.F],null,null)],null,function(l,n){l(n,0,0,u._18(n,1)._hidden,u._18(n,1)._sbPadding)})},{color:"color",mode:"mode",hideBackButton:"hideBackButton"},{},["[menuToggle],ion-buttons[left]","ion-buttons[start]","ion-buttons[end],ion-buttons[right]","*"])},212:function(l,n,t){"use strict";t.d(n,"a",function(){return r}),n.b=c;var u=t(0),e=t(14),o=t(86),i=t(1),a=t(41),s=t(40),r=u._3({encapsulation:2,styles:[],data:{}});function c(l){return u._25(2,[(l()(),u._5(0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),u._4(278528,null,0,e.f,[u.s,u.t,u.k,u.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u._17(null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}u._2("ion-title",o.a,function(l){return u._25(0,[(l()(),u._5(0,null,null,1,"ion-title",[],null,null,null,c,r)),u._4(49152,null,0,o.a,[i.a,u.k,u.F,[2,a.a],[2,s.a]],null,null)],null,null)},{color:"color",mode:"mode"},{},["*"])},213:function(l,n,t){"use strict";t.d(n,"a",function(){return p}),n.b=d;var u=t(0),e=t(30),o=t(1),i=t(4),a=t(9),s=t(8),r=t(43),c=t(3),_=t(20),p=u._3({encapsulation:2,styles:[],data:{}});function d(l){return u._25(2,[u._22(402653184,1,{_fixedContent:0}),u._22(402653184,2,{_scrollContent:0}),(l()(),u._5(0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),u._17(null,0),(l()(),u._5(0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),u._17(null,1),u._17(null,2)],null,null)}u._2("ion-content",e.a,function(l){return u._25(0,[(l()(),u._5(0,null,null,1,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,d,p)),u._4(4374528,null,0,e.a,[o.a,i.a,a.a,u.k,u.F,s.a,r.a,u.z,[2,c.a],[2,_.a]],null,null)],null,function(l,n){l(n,0,0,u._18(n,1).statusbarPadding,u._18(n,1)._hasRefresher)})},{color:"color",mode:"mode",fullscreen:"fullscreen",scrollDownOnLoad:"scrollDownOnLoad"},{ionScrollStart:"ionScrollStart",ionScroll:"ionScroll",ionScrollEnd:"ionScrollEnd"},["[ion-fixed],ion-fab","*","ion-refresher"])}});