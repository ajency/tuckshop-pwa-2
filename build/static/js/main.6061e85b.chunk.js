(window["webpackJsonptuckshop-react-app"]=window["webpackJsonptuckshop-react-app"]||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},110:function(e,t,a){},174:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),s=a.n(o),c=(a(100),a(101),a(25)),l=a(27),i=a(10),u=a(11),m=a(13),h=a(12),d=a(14),p=a(87),f=a.n(p),b=(a(102),a(30)),y=a.n(b),v=a(28),g=(a(103),a(105),a(108),v.initializeApp({apiKey:"AIzaSyB7dEdxlQDHUTlEJmWm2jTnjr2XxbW6e94",authDomain:"tuckshop-3.firebaseapp.com",databaseURL:"https://tuckshop-3.firebaseio.com",projectId:"tuckshop-3",storageBucket:"tuckshop-3.appspot.com",messagingSenderId:"560785862071",appId:"1:560785862071:web:a1477aab0b2c6653",clientId:"560785862071-31coumpujetgutil5edbkemehkusnf40.apps.googleusercontent.com",scopes:["email","profile","https://www.googleapis.com/auth/spreadsheets"]})),E=a(41),k=a.n(E),w=a(88),O=a.n(w),C=(a(110),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={userInfo:{name:g.auth().currentUser.displayName,email:g.auth().currentUser.email,photoURL:g.auth().currentUser.photoURL}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=this;return this.state.userInfo&&(e=r.a.createElement(O.a,{ref:"overlay",trigger:"click",className:"popover-modal",rootClose:!0,placement:"bottom",overlay:r.a.createElement(k.a,{id:"popover-basic"},r.a.createElement(k.a.Title,{as:"h3"},this.state.userInfo.name),r.a.createElement(k.a.Content,null,r.a.createElement(c.b,{to:"/search",className:"d-block"}," Search Page "),r.a.createElement(c.b,{to:"/orders",className:"d-block"}," Monthly Orders "),r.a.createElement("button",{onClick:function(){return t.googleLogout()}},"Logout")))},r.a.createElement("button",{variant:"success",className:"btn-profile"},r.a.createElement("img",{src:"https://lh3.googleusercontent.com/a-/AAuE7mDAwNexBKeZA3rLmgCNJRfQ909fxWcP546HHDej=s96-c",width:"40",className:"avatar-img rounded-circle"})))),r.a.createElement("div",null,r.a.createElement(y.a,{expand:"xl",className:"justify-content-center"},r.a.createElement(y.a.Brand,null,r.a.createElement("span",{className:""},"Tuckshop"),r.a.createElement("div",{className:"header-actions"},e))))}},{key:"googleLogout",value:function(){v.auth().signOut().then((function(){window.history.replaceState({},"home","/"),console.log("logout successful")})).catch((function(e){console.log("error in logout",e)}))}}]),t}(n.Component)),S=a(29),j=a(91),N=a.n(j),I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(S.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-wrapper"},r.a.createElement("div",{className:"inner-wrap"},r.a.createElement(N.a,{size:"lg",type:"text",placeholder:"Search",className:"mr-sm-2 global-search",onChange:this.handleChange})))}},{key:"handleChange",value:function(e){this.props.onSearchChange(e.target.value)}}]),t}(n.Component),M=a(35),T=a.n(M),L=(a(71),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.filters.map((function(t){return r.a.createElement(T.a,{size:"lg",className:"mr-2 ml-2 filter-btn specialIcons "+t.type+"-icon "+(t.isSelected?"active":""),key:t.type,onClick:function(){return e.props.onFilterSelect(t.type)}}," ",r.a.createElement("i",{className:"btn-icon"})," ",t.type)}));return r.a.createElement("div",{className:"tuck-lists"},t)}}]),t}(n.Component)),x=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(c.b,{to:"/search/"+this.props.item.item_code,onClick:function(){return e.props.handleClick(e.props.item)},className:"list-group-item list-group-item-action d-flex justify-content-between align-items-center"},this.props.item.item_name,r.a.createElement("span",null," ",r.a.createElement("small",null,"Rs. ")," ",this.props.item.price)))}}]),t}(n.Component),D=a(31),_=a.n(D),U=a(51),A=a.n(U),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={apiEndpoint:"https://us-central1-tuckshop-3.cloudfunctions.net/api",quantity:1},a.onQantityChange=a.onQantityChange.bind(Object(S.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"onQantityChange",value:function(e){this.setState({quantity:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(_.a,{className:"modal-wrapper centered-modal",show:this.props.showModal,onHide:function(){return e.props.handleModalClose()}},r.a.createElement(_.a.Header,{className:"modal-header"},r.a.createElement(_.a.Title,null,"Are you sure you want to buy?")),r.a.createElement(_.a.Body,null,r.a.createElement("div",{className:"modal-body p-1"},r.a.createElement("div",{className:"d-flex justify-content-between mb-4"},r.a.createElement("div",null,this.props.item.item_name),r.a.createElement("div",null,r.a.createElement("small",null,"Rs."),this.props.item.price)),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("label",null,"Quantity"),r.a.createElement("select",{value:this.state.quantity,onChange:this.onQantityChange},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"))))),r.a.createElement(_.a.Footer,{className:"d-flex justify-content-between modal-footer"},r.a.createElement("button",{className:"cancel-btn",onClick:function(){return e.props.handleModalClose()}},"Cancel"),r.a.createElement("button",{className:"buy-btn",onClick:function(){return e.buyItem()}},"Buy"))))}},{key:"buyItem",value:function(){var e=this;console.log("inside buyItem function"),this.props.handleModalClose(),this.props.showLoaderToast();var t=this.state.apiEndpoint+"/place-order",a={user_email:g.auth().currentUser.email,item_code:this.props.item.item_code,quantity:parseInt(this.state.quantity),photoURL:g.auth().currentUser.photoURL,uid:g.auth().currentUser.uid,name:g.auth().currentUser.displayName,type:this.props.item.type,status:"open"};A.a.post(t,a).then((function(t){console.log("place order response ==>",t),"SUCCESS"===t.data.message_code?e.props.orderSuccess():e.props.orderFailure(),e.setState({quantity:1})})).catch((function(t){console.log("error in place order ==>",t),e.props.orderFailure(),e.setState({quantity:1})}))}}]),t}(n.Component),F=a(23),R=(a(171),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={items:[],isLoaded:!1,itemsCopy:[],itemTypes:[],showModal:!1,modalItem:{},searchText:"",selectedFilter:"All",db:g.firestore(),itemCode:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchItems();var e=window.location.pathname;if(e.includes("/search")||window.history.replaceState({},"search","/search"),e.includes("/search/")){var t=e.split("/")[2];console.log("item code ==>",t),this.setState({itemCode:t})}}},{key:"render",value:function(){var e,t=this;return e=this.state.isLoaded?this.state.items.length?this.state.items.map((function(e){return r.a.createElement(x,{key:e.item_code,item:e,handleClick:function(e){return t.handleItemClick(e)}})})):r.a.createElement("div",{className:"text-center mt-5"}," ",r.a.createElement("h4",null," No Results "),"  "):r.a.createElement("div",{className:"text-center mt-5"}," ",r.a.createElement("h4",null," Loading... "),"  "),r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(I,{onSearchChange:function(e){return t.searchItem(e)}}),r.a.createElement("div",{className:"mt-2 border"},r.a.createElement(L,{filters:this.state.itemTypes,onFilterSelect:function(e){return t.filterItems(e)}})),r.a.createElement("div",{className:"list-group"},e),r.a.createElement(F.a,{hideProgressBar:!0,closeOnClick:!1,position:F.b.POSITION.BOTTOM_CENTER}),r.a.createElement(l.a,{path:"/search/:item_code",render:function(){return r.a.createElement(B,{showModal:t.state.showModal,item:t.state.modalItem,handleModalClose:function(){return t.handleModalClose()},orderSuccess:function(){return t.showOrderSuccessToast()},orderFailure:function(){return t.showOrderFailureToast()},showLoaderToast:function(){return t.showLoaderToast()}})}}))}},{key:"handleItemClick",value:function(e){this.setState({showModal:!0,modalItem:e,itemCode:e.item_code})}},{key:"handleModalClose",value:function(){this.setState({showModal:!1,itemCode:""}),window.history.replaceState({},"search","/search")}},{key:"showLoaderToast",value:function(){F.b.dismiss(),Object(F.b)("Please wait ...",{autoClose:!1})}},{key:"showOrderSuccessToast",value:function(){F.b.dismiss(),Object(F.b)("Order placed successfully",{autoClose:3e3})}},{key:"showOrderFailureToast",value:function(){F.b.dismiss(),Object(F.b)("Something went wrong. Please try again.",{autoClose:3e3})}},{key:"fetchItems",value:function(){var e=this;this.state.db.collection("items").onSnapshot((function(t){var a=t.docs.map((function(e){return e.data()}));a=(a=a.filter((function(e){return e.buyable&&e.in_stock&&e.stock>0}))).sort(e.sortItems);for(var n=[],r=0;r<a.length;r++)"Special"===a[r].type&&(n.push(a[r]),a.splice(r,1),r-=1);a=n.concat(a),e.setState({items:a,isLoaded:!0,itemsCopy:a}),e.state.itemCode&&e.findItem(),e.findTypes(a),e.state.searchText?e.searchItem(e.state.searchText):e.filterItems(e.state.selectedFilter)}))}},{key:"findItem",value:function(){var e=this,t=this.state.items.find((function(t){return t.item_code===e.state.itemCode}));t?this.handleItemClick(t):(F.b.dismiss(),Object(F.b)("Item not found",{autoClose:3e3}),window.history.replaceState({},"search","/search"),this.setState({itemCode:""}))}},{key:"searchItem",value:function(e){var t=this;if(this.setState({searchText:e}),e&&""!==e.trim()){var a=this.state.itemsCopy.filter((function(t){return t.item_name.toLowerCase().indexOf(e.toLowerCase())>-1}));this.setState({items:a})}else this.setState({items:this.state.itemsCopy});this.setState({selectedFilter:"All"},(function(){t.setSelectedFilter()}))}},{key:"setSelectedFilter",value:function(){var e=this,t=this.state.itemTypes;t.forEach((function(t){t.isSelected=!1,t.type===e.state.selectedFilter&&(t.isSelected=!0)})),this.setState({itemTypes:t})}},{key:"findTypes",value:function(e){for(var t,a=[],n=[{type:"All",isSelected:!0}],r=0;r<e.length;r++)a[e[r].type]||(a[e[r].type]=!0,t={type:e[r].type,isSelected:!1},n.push(t));this.setState({itemTypes:n})}},{key:"sortItems",value:function(e,t){return e.type===t.type?e.item_name<t.item_name?-1:1:e.type<t.type?-1:1}},{key:"filterItems",value:function(e){var t=this;if(this.setState({selectedFilter:e},(function(){t.setSelectedFilter()})),"All"===e)this.setState({items:this.state.itemsCopy});else{var a=this.state.itemsCopy.filter((function(t){return t.type===e}));this.setState({items:a})}}}]),t}(n.Component)),P=(a(174),a(94)),q=a.n(P),W=a(175),Q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).decreaseMonth=function(){return a.setState((function(e){return{month:e.month.subtract(1,"month")}}),a.filterByMonth)},a.increaseMonth=function(){return a.setState((function(e){return{month:e.month.add(1,"month")}}),a.filterByMonth)},a.filterByMonth=function(){var e=a.state.month.clone();a.fetchOrders(e)},a.state={db:g.firestore(),orders:[],month:W()},a.pickAMonth=r.a.createRef(),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchOrders()}},{key:"tableBody",value:function(){return this.state.orders.map((function(e){return r.a.createElement("tr",{key:e.created.nanoseconds},r.a.createElement("td",null,e.item_name),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,e.created.toDate().toLocaleDateString()),r.a.createElement("td",null,r.a.createElement("small",null,"Rs. ")," ",e.item_price))}))}},{key:"getMonthlyTotal",value:function(){var e=0;return this.state.orders.forEach((function(t){e+=t.quantity*t.item_price})),e}},{key:"render",value:function(){var e;return e=this.state.orders.length?r.a.createElement(q.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Product name"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Price"))),r.a.createElement("tbody",null,this.tableBody())):r.a.createElement("div",{className:"text-center mt-5"}," ",r.a.createElement("h4",null," No Results "),"  "),r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement("div",null,r.a.createElement("div",{className:"special-wrapper mb-2"},r.a.createElement("div",{className:"top-bar d-flex font-weight-bolder justify-content-center mb-2"},r.a.createElement("div",null,"Monthly Orders")),r.a.createElement("div",{className:"d-flex font-weight-bold justify-content-between mb-2 pl-2 pr-2"},r.a.createElement("div",null,r.a.createElement("label",{className:"mr-2"},"Select Month : "),r.a.createElement("button",{className:"btn btn-dark mr-1",onClick:this.decreaseMonth},"< "),r.a.createElement("button",{className:"btn btn-dark month-selected"},this.state.month.format("MMM YYYY")),r.a.createElement("button",{disabled:this.state.month.clone().add(1,"hour")>W(),className:"btn btn-dark ml-1",onClick:this.increaseMonth},">")),r.a.createElement("div",null,"Monthly total : ",this.getMonthlyTotal())),e)))}},{key:"fetchOrders",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.state.db.collection("orders").where("user_email","==",g.auth().currentUser.email).onSnapshot((function(a){var n=a.docs.map((function(e){return e.data()})),r=t?new Date(t).toLocaleDateString("en-US",{month:"short",year:"numeric"}):(new Date).toLocaleDateString("en-US",{month:"short",year:"numeric"});(n=n.filter((function(e){return e.created.toDate().toLocaleDateString("en-US",{month:"short",year:"numeric"})==r}))).sort((function(e,t){return e.created.seconds-t.created.seconds})),e.setState({orders:n})}))}}]),t}(n.Component),z=new v.auth.GoogleAuthProvider;z.addScope("https://www.googleapis.com/auth/spreadsheets");var H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={isLoggedIn:!1,isAuthenticationChecked:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.auth().onAuthStateChanged((function(t){t?(console.log("check user ==>",t),e.setState({isLoggedIn:!0,isAuthenticationChecked:!0})):e.setState({isLoggedIn:!1,isAuthenticationChecked:!0})}))}},{key:"render",value:function(){var e,t,a=this;return this.state.isAuthenticationChecked&&(e=r.a.createElement("button",{variant:"warning",className:"btn login-btn",size:"lg",onClick:function(){return a.singInWithGoogle()}},"Sign In")),t=this.state.isLoggedIn?"/orders"==window.location.pathname?r.a.createElement(Q,null):r.a.createElement(R,null):r.a.createElement("div",{className:"App"},r.a.createElement(y.a,{expand:"xl",className:"justify-content-center"},r.a.createElement(y.a.Brand,null,"Welcome to Tuckshop")),r.a.createElement("h2",{className:"mt-2 mb-2"},"Grab some Tuck!"),r.a.createElement("img",{src:f.a,className:"App-logo img-fluid",width:"280",alt:"logo"}),r.a.createElement("div",{className:"p-3"},e)),r.a.createElement("div",null,t)}},{key:"singInWithGoogle",value:function(){var e=this.props.history;console.log("inside sing in with google function"),v.auth().signInWithPopup(z).then((function(t){t.credential.accessToken,t.user;e.push({pathname:"/search"})})).catch((function(e){console.log("error in google login ==>",e)}))}}]),t}(n.Component),G=(a(177),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={db:g.firestore(),specialsOrders:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchOrders()}},{key:"getUserImage",value:function(e){return e.map((function(e){return r.a.createElement("img",{key:e.user_email+e.created,src:e.photoURL,width:"70",className:"avatar-img m-2 rounded-circle"})}))}},{key:"render",value:function(){var e,t=this;return e=this.state.specialsOrders.length?this.state.specialsOrders.map((function(e){return r.a.createElement("div",{className:"special-wrapper mb-2",key:e[0].item_code},r.a.createElement("div",{className:"top-bar d-flex font-weight-bolder justify-content-between mb-2"},r.a.createElement("div",null,e[0].item_name),r.a.createElement("div",null,"Order Count :",e.length)),r.a.createElement("div",null,t.getUserImage(e)))})):r.a.createElement("div",{className:"text-center mt-5"}," ",r.a.createElement("h4",null," No Results "),"  "),r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement("div",null,e))}},{key:"fetchOrders",value:function(){var e=this;this.state.db.collection("orders").onSnapshot((function(t){var a=t.docs.map((function(e){return e.data()}));console.log("orders ==>",a,a[0].created.toDate().toLocaleDateString(),(new Date).toLocaleDateString()),(a=a.filter((function(e){return"Special"===e.type&&e.created.toDate().toLocaleDateString()==(new Date).toLocaleDateString()}))).sort((function(e,t){return e.created.seconds-t.created.seconds})),e.groupByItem(a,"item_code")}))}},{key:"groupByItem",value:function(e,t){var a=e.reduce((function(e,a){var n=a[t];return e[n]=(e[n]||[]).concat(a),e}),{}),n=[];for(var t in a)n.push(a[t]);console.log("group by ==>",n),this.setState({specialsOrders:n})}}]),t}(n.Component)),J=function(e){return r.a.createElement(c.a,null,r.a.createElement(l.a,{exact:!0,path:"/",component:H}),r.a.createElement(l.a,{path:"/search",component:H}),r.a.createElement(l.a,{path:"/specials",component:G}),r.a.createElement(l.a,{path:"/orders",component:H}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},71:function(e,t,a){},87:function(e,t,a){e.exports=a.p+"static/media/tuckshop.a4db8ae6.jpg"},95:function(e,t,a){e.exports=a(178)}},[[95,1,2]]]);
//# sourceMappingURL=main.6061e85b.chunk.js.map