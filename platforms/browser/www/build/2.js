webpackJsonp([2],{237:function(l,n,t){"use strict";function u(l){return o._19(2,[(l()(),o.Z(0,0,null,null,0,"img",[],null,null,null,null,null))],null,null)}function a(l){return o._19(0,[(l()(),o._18(-1,null,["\n"])),(l()(),o.Z(1,0,null,null,10,"ion-header",[],null,null,null,null,null)),o.Y(2,16384,null,0,f.a,[m.a,o.j,o.z,[2,v.a]],null,null),(l()(),o._18(-1,null,["\n\t"])),(l()(),o.Z(4,0,null,null,6,"ion-navbar",[["align","center"],["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,j.b,j.a)),o.Y(5,49152,null,0,C.a,[Z.a,[2,v.a],[2,y.a],m.a,o.j,o.z],null,null),(l()(),o._18(-1,3,["\n\t\t"])),(l()(),o.Z(7,0,null,3,2,"ion-title",[],null,null,null,Y.b,Y.a)),o.Y(8,49152,null,0,w.a,[m.a,o.j,o.z,[2,S.a],[2,C.a]],null,null),(l()(),o._18(-1,0,["Welcome to Tuckshop"])),(l()(),o._18(-1,3,["\n\t"])),(l()(),o._18(-1,null,["\n"])),(l()(),o._18(-1,null,["\n\n\n"])),(l()(),o.Z(13,0,null,null,18,"ion-content",[["align","center"],["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,z.b,z.a)),o.Y(14,4374528,null,0,A.a,[m.a,I.a,x.a,o.j,o.z,Z.a,q.a,o.u,[2,v.a],[2,y.a]],null,null),(l()(),o._18(-1,1,["\n\n\t"])),(l()(),o.Z(16,0,null,1,2,"h2",[["class","welcome"],["color","dark"],["ion-text",""],["text-center",""]],null,null,null,null,null)),o.Y(17,16384,null,0,P.a,[m.a,o.j,o.z],{color:[0,"color"]},null),(l()(),o._18(-1,null,["\n\t\tGrab some Tuck!\n\t"])),(l()(),o._18(-1,1,["\n\n\n\t"])),(l()(),o.Z(20,0,null,1,1,"ion-img",[["height","280"],["src","/assets/icon/tuckshop.jpg"],["width","280"]],null,null,null,u,V)),o.Y(21,1228800,null,0,T.a,[o.j,o.z,I.a,[2,A.a],x.a],{src:[0,"src"],width:[1,"width"],height:[2,"height"]},null),(l()(),o._18(-1,1,["\n\t"])),(l()(),o.Z(23,0,null,1,0,"div",[],null,null,null,null,null)),(l()(),o._18(-1,1,["\n\n\n\t"])),(l()(),o.Z(25,0,null,1,5,"div",[["padding",""]],null,null,null,null,null)),(l()(),o._18(-1,null,["\n\t\t"])),(l()(),o.Z(27,0,null,null,2,"button",[["block",""],["class","login-btn"],["color","ajency"],["ion-button",""]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var u=!0,a=l.component;if("click"===n){u=!1!==a.signIn()&&u}if("click"===n){u=!1!=(a.disabled=!0)&&u}return u},X.b,X.a)),o.Y(28,1097728,null,0,B.a,[[8,""],m.a,o.j,o.z],{color:[0,"color"],block:[1,"block"]},null),(l()(),o._18(-1,0,[" Sign In "])),(l()(),o._18(-1,null,["\n\t"])),(l()(),o._18(-1,1,["\n\n\n\n"]))],function(l,n){l(n,17,0,"dark");l(n,21,0,"/assets/icon/tuckshop.jpg","280","280");l(n,28,0,"ajency","")},function(l,n){var t=n.component;l(n,4,0,o._13(n,5)._hidden,o._13(n,5)._sbPadding);l(n,13,0,o._13(n,14).statusbarPadding,o._13(n,14)._hasRefresher);l(n,27,0,t.disabled)})}Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),e=(t(5),t(110),t(16)),i=function(){function l(l,n,t,u,a){this.viewCtrl=l,this.l=n,this.navCtrl=t,this.zone=u,this.toastCtrl=a,this.disabled=!1,this.loc=n}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad HomePage");this.loc.pushState([],"HomePage","/#/home"),this.handleClientLoad()},l.prototype.ionViewWillEnter=function(){console.log("ionViewWillEnter HomePage check"),this.viewCtrl.showBackButton(!1)},l.prototype.navigateToSearch=function(){this.navCtrl.push("SearchPage",{code:""}),console.log("Navigating to another module")},l.prototype.handleClientLoad=function(){var l=this,n=this;gapi.load("client:auth2",function(){console.log(l),gapi.client.init({client_id:"676621258132-v9fqtd0tl50in48cmb92jht0k3be2024.apps.googleusercontent.com",cookiepolicy:"single_host_origin",scope:"https://www.googleapis.com/auth/spreadsheets"}).then(function(){console.log(gapi.auth2.getAuthInstance().isSignedIn.get()),console.log(n),n.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())})})},l.prototype.updateSigninStatus=function(l){console.log(this),l&&(console.log(this,"Already signed in"),this.navigateToSearch())},l.prototype.signIn=function(){var l=this;gapi.auth2.getAuthInstance().signIn().then(function(){console.log("signed in"),l.navigateToSearch()})},l}(),s=function(){return function(){}}(),c=t(187),r=t(188),d=t(189),g=t(190),b=t(191),_=t(192),h=t(193),p=t(194),k=t(195),f=t(113),m=t(1),v=t(4),j=t(240),C=t(38),Z=t(8),y=t(20),Y=t(241),w=t(111),S=t(51),z=t(242),A=t(21),I=t(3),x=t(9),q=t(34),P=t(121),T=t(114),V=o.X({encapsulation:2,styles:[],data:{}}),X=t(39),B=t(19),H=t(71),L=o.X({encapsulation:2,styles:[],data:{}}),W=o.V("page-home",i,function(l){return o._19(0,[(l()(),o.Z(0,0,null,null,1,"page-home",[],null,null,null,a,L)),o.Y(1,49152,null,0,i,[v.a,e.q,y.a,o.u,H.a],null,null)],null,null)},{},{},[]),D=t(17),E=t(112),M=t(35);t.d(n,"HomePageModuleNgFactory",function(){return N});var N=o.W(s,[],function(l){return o._10([o._11(512,o.i,o.S,[[8,[c.a,r.a,d.a,g.a,b.a,_.a,h.a,p.a,k.a,W]],[3,o.i],o.s]),o._11(4608,e.k,e.j,[o.r,[2,e.s]]),o._11(4608,D.k,D.k,[]),o._11(4608,D.c,D.c,[]),o._11(512,e.b,e.b,[]),o._11(512,D.j,D.j,[]),o._11(512,D.d,D.d,[]),o._11(512,D.i,D.i,[]),o._11(512,E.a,E.a,[]),o._11(512,E.b,E.b,[]),o._11(512,s,s,[]),o._11(256,M.a,i,[])])})},240:function(l,n,t){"use strict";function u(l){return a._19(0,[(l()(),a.Z(0,0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),a.Y(1,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a.Z(2,0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,t){var u=!0;if("click"===n){u=!1!==l.component.backButtonClick(t)&&u}return u},e.b,e.a)),a.Y(3,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Y(4,1097728,null,0,i.a,[[8,"bar-button"],s.a,a.j,a.z],null,null),(l()(),a.Z(5,0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(6,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Y(7,147456,null,0,c.a,[s.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a.Z(8,0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),a.Y(9,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a._18(10,null,["",""])),a._12(null,0),a._12(null,1),a._12(null,2),(l()(),a.Z(14,0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),a.Y(15,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._12(null,3)],function(l,n){var t=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+t._mode);l(n,3,0,"back-button","back-button-"+t._mode);l(n,6,0,"back-button-icon","back-button-icon-"+t._mode);l(n,7,0,t._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+t._mode);l(n,15,0,"toolbar-content","toolbar-content-"+t._mode)},function(l,n){var t=n.component;l(n,2,0,t._hideBb);l(n,5,0,a._13(n,7)._hidden);l(n,10,0,t._backText)})}t.d(n,"a",function(){return r}),n.b=u;var a=t(0),o=t(16),e=t(39),i=t(19),s=t(1),c=t(40),r=(t(38),t(4),t(20),a.X({encapsulation:2,styles:[],data:{}}))},241:function(l,n,t){"use strict";function u(l){return a._19(2,[(l()(),a.Z(0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),a.Y(1,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._12(null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}t.d(n,"a",function(){return e}),n.b=u;var a=t(0),o=t(16),e=(t(111),t(1),t(51),t(38),a.X({encapsulation:2,styles:[],data:{}}))},242:function(l,n,t){"use strict";function u(l){return a._19(2,[a._16(402653184,1,{_fixedContent:0}),a._16(402653184,2,{_scrollContent:0}),(l()(),a.Z(2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),a._12(null,0),(l()(),a.Z(4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),a._12(null,1),a._12(null,2)],null,null)}t.d(n,"a",function(){return o}),n.b=u;var a=t(0),o=(t(21),t(1),t(3),t(9),t(34),t(4),t(20),a.X({encapsulation:2,styles:[],data:{}}))}});