(window["webpackJsonptuckshop-react-app"]=window["webpackJsonptuckshop-react-app"]||[]).push([[0],{158:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(17),i=a.n(o),r=(a(87),a(88),a(25)),c=a(22),l=a(8),u=a(9),m=a(11),h=a(10),d=a(12),p=a(76),f=a.n(p),b=(a(89),a(28)),y=a.n(b),v=a(27),g=(a(90),a(92),a(95),v.initializeApp({apiKey:"AIzaSyB7dEdxlQDHUTlEJmWm2jTnjr2XxbW6e94",authDomain:"tuckshop-3.firebaseapp.com",databaseURL:"https://tuckshop-3.firebaseio.com",projectId:"tuckshop-3",storageBucket:"tuckshop-3.appspot.com",messagingSenderId:"560785862071",appId:"1:560785862071:web:a1477aab0b2c6653",clientId:"560785862071-31coumpujetgutil5edbkemehkusnf40.apps.googleusercontent.com",scopes:["email","profile","https://www.googleapis.com/auth/spreadsheets"]}));v.firestore().enablePersistence().catch((function(e){"failed-precondition"==e.code?console.log("Multiple tabs open, persistence can only be enabled in one tab at a a time."):"unimplemented"==e.code&&console.log("The current browser does not support all of the features required to enable persistence")}));var E=g,k=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(y.a,{expand:"xl",className:"justify-content-center"},s.a.createElement(y.a.Brand,null,s.a.createElement("span",{className:""},"Tuckshop"))))}}]),t}(n.Component),C=a(26),w=a(77),O=a.n(w),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(C.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"search-wrapper"},s.a.createElement("div",{className:"inner-wrap"},s.a.createElement(O.a,{size:"lg",type:"text",placeholder:"Search",className:"mr-sm-2 global-search",onChange:this.handleChange})))}},{key:"handleChange",value:function(e){this.props.onSearchChange(e.target.value)}}]),t}(n.Component),S=a(35),I=a.n(S),N=(a(54),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.filters.map((function(t){return s.a.createElement(I.a,{size:"lg",className:"mr-2 ml-2 filter-btn specialIcons "+t.type+"-icon "+(t.isSelected?"active":""),key:t.type,onClick:function(){return e.props.onFilterSelect(t.type)}}," ",s.a.createElement("i",{className:"btn-icon"})," ",t.type)}));return s.a.createElement("div",{className:"tuck-lists"},t)}}]),t}(n.Component)),T=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(r.b,{to:"/search/"+this.props.item.item_code,onClick:function(){return e.props.handleClick(e.props.item)},className:"list-group-item list-group-item-action d-flex justify-content-between align-items-center"},this.props.item.item_name,s.a.createElement("span",null," ",s.a.createElement("small",null,"Rs. ")," ",this.props.item.price)))}}]),t}(n.Component),x=a(29),L=a.n(x),_=a(44),M=a.n(_),F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={apiEndpoint:"https://us-central1-tuckshop-3.cloudfunctions.net/api",quantity:1},a.onQantityChange=a.onQantityChange.bind(Object(C.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"onQantityChange",value:function(e){this.setState({quantity:e.target.value})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(L.a,{className:"modal-wrapper centered-modal",show:this.props.showModal,onHide:function(){return e.props.handleModalClose()}},s.a.createElement(L.a.Header,{className:"modal-header"},s.a.createElement(L.a.Title,null,"Are you sure you want to buy?")),s.a.createElement(L.a.Body,null,s.a.createElement("div",{className:"modal-body p-1"},s.a.createElement("div",{className:"d-flex justify-content-between mb-4"},s.a.createElement("div",null,this.props.item.item_name),s.a.createElement("div",null,s.a.createElement("small",null,"Rs."),this.props.item.price)),s.a.createElement("div",{className:"d-flex justify-content-between"},s.a.createElement("label",null,"Quantity"),s.a.createElement("select",{value:this.state.quantity,onChange:this.onQantityChange},s.a.createElement("option",{value:"1"},"1"),s.a.createElement("option",{value:"2"},"2"))))),s.a.createElement(L.a.Footer,{className:"d-flex justify-content-between modal-footer"},s.a.createElement("button",{className:"cancel-btn",onClick:function(){return e.props.handleModalClose()}},"Cancel"),s.a.createElement("button",{className:"buy-btn",onClick:function(){return e.buyItem()}},"Buy"))))}},{key:"buyItem",value:function(){var e=this;console.log("inside buyItem function"),this.props.handleModalClose(),this.props.showLoaderToast();var t=this.state.apiEndpoint+"/place-order",a={user_email:E.auth().currentUser.email,item_code:this.props.item.item_code,quantity:this.state.quantity,photoURL:E.auth().currentUser.photoURL,uid:E.auth().currentUser.uid,name:E.auth().currentUser.displayName,type:this.props.item.type,status:"open"};M.a.post(t,a).then((function(t){console.log("place order response ==>",t),"SUCCESS"===t.data.message_code?e.props.orderSuccess():e.props.orderFailure(),e.setState({quantity:1})})).catch((function(t){console.log("error in place order ==>",t),e.props.orderFailure(),e.setState({quantity:1})}))}}]),t}(n.Component),A=a(19),B=(a(155),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={items:[],isLoaded:!1,itemsCopy:[],itemTypes:[],showModal:!1,modalItem:{},searchText:"",selectedFilter:"All",db:E.firestore(),itemCode:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchItems();var e=window.location.pathname;if(e.includes("/search")||window.history.replaceState({},"search","/search"),e.includes("/search/")){var t=e.split("/")[2];console.log("item code ==>",t),this.setState({itemCode:t})}}},{key:"render",value:function(){var e,t=this;return e=this.state.isLoaded?this.state.items.length?this.state.items.map((function(e){return s.a.createElement(T,{key:e.item_code,item:e,handleClick:function(e){return t.handleItemClick(e)}})})):s.a.createElement("div",{className:"text-center mt-5"}," ",s.a.createElement("h4",null," No Results "),"  "):s.a.createElement("div",{className:"text-center mt-5"}," ",s.a.createElement("h4",null," Loading... "),"  "),s.a.createElement("div",null,s.a.createElement(k,null),s.a.createElement(j,{onSearchChange:function(e){return t.searchItem(e)}}),s.a.createElement("div",{className:"mt-2 border"},s.a.createElement(N,{filters:this.state.itemTypes,onFilterSelect:function(e){return t.filterItems(e)}})),s.a.createElement("div",{className:"list-group"},e),s.a.createElement(A.a,{hideProgressBar:!0,closeOnClick:!1,position:A.b.POSITION.BOTTOM_CENTER}),s.a.createElement(c.a,{path:"/search/:item_code",render:function(){return s.a.createElement(F,{showModal:t.state.showModal,item:t.state.modalItem,handleModalClose:function(){return t.handleModalClose()},orderSuccess:function(){return t.showOrderSuccessToast()},orderFailure:function(){return t.showOrderFailureToast()},showLoaderToast:function(){return t.showLoaderToast()}})}}))}},{key:"handleItemClick",value:function(e){this.setState({showModal:!0,modalItem:e,itemCode:e.item_code})}},{key:"handleModalClose",value:function(){this.setState({showModal:!1,itemCode:""}),window.history.replaceState({},"search","/search")}},{key:"showLoaderToast",value:function(){A.b.dismiss(),Object(A.b)("Please wait ...",{autoClose:!1})}},{key:"showOrderSuccessToast",value:function(){A.b.dismiss(),Object(A.b)("Order placed successfully",{autoClose:3e3})}},{key:"showOrderFailureToast",value:function(){A.b.dismiss(),Object(A.b)("Something went wrong. Please try again.",{autoClose:3e3})}},{key:"fetchItems",value:function(){var e=this;this.state.db.collection("items").onSnapshot((function(t){var a=t.docs.map((function(e){return e.data()}));a=(a=a.filter((function(e){return e.buyable&&e.in_stock&&e.stock>0}))).sort(e.sortItems);for(var n=[],s=0;s<a.length;s++)"Special"===a[s].type&&(n.push(a[s]),a.splice(s,1),s-=1);a=n.concat(a),e.setState({items:a,isLoaded:!0,itemsCopy:a}),e.state.itemCode&&e.findItem(),e.findTypes(a),e.state.searchText?e.searchItem(e.state.searchText):e.filterItems(e.state.selectedFilter)}))}},{key:"findItem",value:function(){var e=this,t=this.state.items.find((function(t){return t.item_code===e.state.itemCode}));t?this.handleItemClick(t):(A.b.dismiss(),Object(A.b)("Item not found",{autoClose:3e3}),window.history.replaceState({},"search","/search"),this.setState({itemCode:""}))}},{key:"searchItem",value:function(e){var t=this;if(this.setState({searchText:e}),e&&""!==e.trim()){var a=this.state.itemsCopy.filter((function(t){return t.item_name.toLowerCase().indexOf(e.toLowerCase())>-1}));this.setState({items:a})}else this.setState({items:this.state.itemsCopy});this.setState({selectedFilter:"All"},(function(){t.setSelectedFilter()}))}},{key:"setSelectedFilter",value:function(){var e=this,t=this.state.itemTypes;t.forEach((function(t){t.isSelected=!1,t.type===e.state.selectedFilter&&(t.isSelected=!0)})),this.setState({itemTypes:t})}},{key:"findTypes",value:function(e){for(var t,a=[],n=[{type:"All",isSelected:!0}],s=0;s<e.length;s++)a[e[s].type]||(a[e[s].type]=!0,t={type:e[s].type,isSelected:!1},n.push(t));this.setState({itemTypes:n})}},{key:"sortItems",value:function(e,t){return e.type===t.type?e.item_name<t.item_name?-1:1:e.type<t.type?-1:1}},{key:"filterItems",value:function(e){var t=this;if(this.setState({selectedFilter:e},(function(){t.setSelectedFilter()})),"All"===e)this.setState({items:this.state.itemsCopy});else{var a=this.state.itemsCopy.filter((function(t){return t.type===e}));this.setState({items:a})}}}]),t}(n.Component)),U=new v.auth.GoogleAuthProvider;U.addScope("https://www.googleapis.com/auth/spreadsheets");var R=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={isLoggedIn:!1,isAuthenticationChecked:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.auth().onAuthStateChanged((function(t){t?(console.log("check user ==>",t),e.setState({isLoggedIn:!0,isAuthenticationChecked:!0})):e.setState({isLoggedIn:!1,isAuthenticationChecked:!0})}))}},{key:"render",value:function(){var e,t,a=this;return this.state.isAuthenticationChecked&&(e=s.a.createElement("button",{variant:"warning",className:"btn login-btn",size:"lg",onClick:function(){return a.singInWithGoogle()}},"Sign In")),t=this.state.isLoggedIn?s.a.createElement(B,null):s.a.createElement("div",{className:"App"},s.a.createElement(y.a,{expand:"xl",className:"justify-content-center"},s.a.createElement(y.a.Brand,null,"Welcome to Tuckshop")),s.a.createElement("h2",{className:"mt-2 mb-2"},"Grab some Tuck!"),s.a.createElement("img",{src:f.a,className:"App-logo img-fluid",width:"280",alt:"logo"}),s.a.createElement("div",{className:"p-3"},e)),s.a.createElement("div",null,t)}},{key:"singInWithGoogle",value:function(){var e=this.props.history;console.log("inside sing in with google function"),v.auth().signInWithPopup(U).then((function(t){t.credential.accessToken,t.user;e.push({pathname:"/search"})})).catch((function(e){console.log("error in google login ==>",e)}))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={db:E.firestore(),orders:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchOrders()}},{key:"render",value:function(){var e;return e=this.state.orders.length?this.state.orders.map((function(e){return s.a.createElement("img",{key:e.user_email,src:e.photoURL,width:"70",className:"avatar-img m-2 rounded-circle"})})):s.a.createElement("div",{className:"text-center mt-5"}," ",s.a.createElement("h4",null," No Results "),"  "),s.a.createElement("div",null,s.a.createElement(k,null),s.a.createElement("div",null,e))}},{key:"fetchOrders",value:function(){var e=this;this.state.db.collection("orders").onSnapshot((function(t){var a=t.docs.map((function(e){return e.data()}));console.log("orders ==>",a),(a=a.filter((function(e){return"400159"===e.item_code}))).sort((function(e,t){return e.created.seconds-t.created.seconds})),e.setState({orders:a})}))}}]),t}(n.Component),W=function(e){return s.a.createElement(r.a,null,s.a.createElement(c.a,{exact:!0,path:"/",component:R}),s.a.createElement(c.a,{path:"/search",component:R}),s.a.createElement(c.a,{path:"/specials",component:q}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},54:function(e,t,a){},76:function(e,t,a){e.exports=a.p+"static/media/tuckshop.a4db8ae6.jpg"},82:function(e,t,a){e.exports=a(158)},87:function(e,t,a){},89:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.8aa8fef9.chunk.js.map