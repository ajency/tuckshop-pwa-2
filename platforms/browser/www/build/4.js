webpackJsonp([4],{181:function(n,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=l(0),o=(l(58),l(82)),i=function(){function n(n,t,l,e){this.navCtrl=n,this.navParams=t,this.viewCtrl=l,this.appservice=e}return n.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad SignoutPage")},n.prototype.ngOnInit=function(){this.user=this.appservice.user_name},n.prototype.signOut=function(){var t=this;this.viewCtrl.dismiss(),this.appservice.signOut().then(function(n){console.log("response from signout function",n),t.navCtrl.push("home")}).catch(function(n){console.log("error in signout ",n)})},n}(),u=function(){return function(){}}(),_=l(14),r=l(21),a=l(84),s=l(125),c=l(126),h=l(127),p=l(128),f=l(129),g=l(130),d=l(131),m=l(59),b=l(1),y=l(4),w=l(6),v=l(9),O=l(132),M=l(22),P=l(16),F=l(31),L=l(60),k=l(20),j=l(10),B=l(3),I=e._3({encapsulation:2,styles:[],data:{}});function N(n){return e._25(0,[(n()(),e._24(null,["\n"])),(n()(),e._24(null,["\n\n\n"])),(n()(),e._24(null,["\n\n"])),(n()(),e._5(0,null,null,21,"ion-list",[],null,null,null,null,null)),e._4(16384,null,0,m.a,[b.a,e.k,e.F,y.a,w.i,v.a],null,null),(n()(),e._24(null,["\n  "])),(n()(),e._5(0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,O.b,O.a)),e._4(1097728,null,3,M.a,[P.a,b.a,e.k,e.F,[2,F.a]],null,null),e._22(335544320,1,{contentLabel:0}),e._22(603979776,2,{_buttons:1}),e._22(603979776,3,{_icons:1}),e._4(16384,null,0,L.a,[],null,null),(n()(),e._24(2,["\n  \t"])),(n()(),e._5(0,null,2,1,"h2",[],null,null,null,null,null)),(n()(),e._24(null,["",""])),(n()(),e._24(2,["\n  "])),(n()(),e._24(null,["\n  "])),(n()(),e._5(0,null,null,6,"button",[["class","sign-out item item-block"],["ion-item",""]],null,[[null,"click"]],function(n,t,l){var e=!0;"click"===t&&(e=!1!==n.component.signOut()&&e);return e},O.b,O.a)),e._4(1097728,null,3,M.a,[P.a,b.a,e.k,e.F,[2,F.a]],null,null),e._22(335544320,4,{contentLabel:0}),e._22(603979776,5,{_buttons:1}),e._22(603979776,6,{_icons:1}),e._4(16384,null,0,L.a,[],null,null),(n()(),e._24(2,["Sign out"])),(n()(),e._24(null,["\n"])),(n()(),e._24(null,["\n"]))],null,function(n,t){n(t,14,0,t.component.user)})}var C=e._2("page-signout",i,function(n){return e._25(0,[(n()(),e._5(0,null,null,1,"page-signout",[],null,null,null,N,I)),e._4(114688,null,0,i,[k.a,j.a,B.a,o.a],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),D=l(25);l.d(t,"BuyPageModuleNgFactory",function(){return E});var z,A=this&&this.__extends||(z=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var l in t)t.hasOwnProperty(l)&&(n[l]=t[l])},function(n,t){function l(){this.constructor=n}z(n,t),n.prototype=null===t?Object.create(t):(l.prototype=t.prototype,new l)}),E=new e.w(function(t){function n(n){return t.call(this,n,[s.a,c.a,h.a,p.a,f.a,g.a,d.a,C],[])||this}return A(n,t),Object.defineProperty(n.prototype,"_NgLocalization_7",{get:function(){return null==this.__NgLocalization_7&&(this.__NgLocalization_7=new _.i(this.parent.get(e.u))),this.__NgLocalization_7},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵi_8",{get:function(){return null==this.__ɵi_8&&(this.__ɵi_8=new r.k),this.__ɵi_8},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_FormBuilder_9",{get:function(){return null==this.__FormBuilder_9&&(this.__FormBuilder_9=new r.c),this.__FormBuilder_9},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new _.b,this._ɵba_1=new r.j,this._FormsModule_2=new r.d,this._ReactiveFormsModule_3=new r.i,this._IonicModule_4=new a.a,this._IonicPageModule_5=new a.b,this._BuyPageModule_6=new u,this._LAZY_LOADED_TOKEN_10=i,this._BuyPageModule_6},n.prototype.getInternal=function(n,t){return n===_.b?this._CommonModule_0:n===r.j?this._ɵba_1:n===r.d?this._FormsModule_2:n===r.i?this._ReactiveFormsModule_3:n===a.a?this._IonicModule_4:n===a.b?this._IonicPageModule_5:n===u?this._BuyPageModule_6:n===_.j?this._NgLocalization_7:n===r.k?this._ɵi_8:n===r.c?this._FormBuilder_9:n===D.a?this._LAZY_LOADED_TOKEN_10:t},n.prototype.destroyInternal=function(){},n}(e._0),u)}});