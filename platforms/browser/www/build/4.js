webpackJsonp([4],{216:function(n,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=l(0),o=(l(42),l(66)),i=function(){function n(n,t,l,e){this.navCtrl=n,this.navParams=t,this.viewCtrl=l,this.appservice=e}return n.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad SignoutPage")},n.prototype.ngOnInit=function(){this.user=this.appservice.user_name},n.prototype.signOut=function(){var t=this;this.viewCtrl.dismiss(),this.appservice.signOut().then(function(n){console.log("response from signout function",n),t.navCtrl.push("home")}).catch(function(n){console.log("error in signout ",n)})},n}(),u=function(){return function(){}}(),_=l(13),r=l(21),a=l(93),s=l(143),c=l(144),h=l(145),p=l(146),f=l(147),g=l(148),d=l(149),m=l(150),b=l(67),y=l(1),w=l(4),v=l(5),O=l(10),M=l(151),P=l(22),F=l(16),L=l(34),k=l(68),j=l(20),B=l(9),I=l(3),N=e._3({encapsulation:2,styles:[],data:{}});function C(n){return e._25(0,[(n()(),e._24(null,["\n"])),(n()(),e._24(null,["\n\n\n"])),(n()(),e._24(null,["\n\n"])),(n()(),e._5(0,null,null,21,"ion-list",[],null,null,null,null,null)),e._4(16384,null,0,b.a,[y.a,e.k,e.F,w.a,v.i,O.a],null,null),(n()(),e._24(null,["\n  "])),(n()(),e._5(0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,M.b,M.a)),e._4(1097728,null,3,P.a,[F.a,y.a,e.k,e.F,[2,L.a]],null,null),e._22(335544320,1,{contentLabel:0}),e._22(603979776,2,{_buttons:1}),e._22(603979776,3,{_icons:1}),e._4(16384,null,0,k.a,[],null,null),(n()(),e._24(2,["\n  \t"])),(n()(),e._5(0,null,2,1,"h2",[],null,null,null,null,null)),(n()(),e._24(null,["",""])),(n()(),e._24(2,["\n  "])),(n()(),e._24(null,["\n  "])),(n()(),e._5(0,null,null,6,"button",[["class","sign-out item item-block"],["ion-item",""]],null,[[null,"click"]],function(n,t,l){var e=!0;"click"===t&&(e=!1!==n.component.signOut()&&e);return e},M.b,M.a)),e._4(1097728,null,3,P.a,[F.a,y.a,e.k,e.F,[2,L.a]],null,null),e._22(335544320,4,{contentLabel:0}),e._22(603979776,5,{_buttons:1}),e._22(603979776,6,{_icons:1}),e._4(16384,null,0,k.a,[],null,null),(n()(),e._24(2,["Sign out"])),(n()(),e._24(null,["\n"])),(n()(),e._24(null,["\n"]))],null,function(n,t){n(t,14,0,t.component.user)})}var D=e._2("page-signout",i,function(n){return e._25(0,[(n()(),e._5(0,null,null,1,"page-signout",[],null,null,null,C,N)),e._4(114688,null,0,i,[j.a,B.a,I.a,o.a],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),z=l(26);l.d(t,"BuyPageModuleNgFactory",function(){return K});var A,E=this&&this.__extends||(A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var l in t)t.hasOwnProperty(l)&&(n[l]=t[l])},function(n,t){function l(){this.constructor=n}A(n,t),n.prototype=null===t?Object.create(t):(l.prototype=t.prototype,new l)}),K=new e.w(function(t){function n(n){return t.call(this,n,[s.a,c.a,h.a,p.a,f.a,g.a,d.a,m.a,D],[])||this}return E(n,t),Object.defineProperty(n.prototype,"_NgLocalization_7",{get:function(){return null==this.__NgLocalization_7&&(this.__NgLocalization_7=new _.i(this.parent.get(e.u))),this.__NgLocalization_7},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵi_8",{get:function(){return null==this.__ɵi_8&&(this.__ɵi_8=new r.k),this.__ɵi_8},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_FormBuilder_9",{get:function(){return null==this.__FormBuilder_9&&(this.__FormBuilder_9=new r.c),this.__FormBuilder_9},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new _.b,this._ɵba_1=new r.j,this._FormsModule_2=new r.d,this._ReactiveFormsModule_3=new r.i,this._IonicModule_4=new a.a,this._IonicPageModule_5=new a.b,this._BuyPageModule_6=new u,this._LAZY_LOADED_TOKEN_10=i,this._BuyPageModule_6},n.prototype.getInternal=function(n,t){return n===_.b?this._CommonModule_0:n===r.j?this._ɵba_1:n===r.d?this._FormsModule_2:n===r.i?this._ReactiveFormsModule_3:n===a.a?this._IonicModule_4:n===a.b?this._IonicPageModule_5:n===u?this._BuyPageModule_6:n===_.j?this._NgLocalization_7:n===r.k?this._ɵi_8:n===r.c?this._FormBuilder_9:n===z.a?this._LAZY_LOADED_TOKEN_10:t},n.prototype.destroyInternal=function(){},n}(e._0),u)}});