(window["webpackJsonptuckshop-react-app"]=window["webpackJsonptuckshop-react-app"]||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){},111:function(e,t,a){},175:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n,s=a(0),o=a.n(s),r=a(17),c=a.n(r),l=(a(101),a(102),a(27)),i=a(29),u=a(8),m=a(9),d=a(11),h=a(10),p=a(12),f=a(88),v=a.n(f),b=(a(103),a(33)),E=a.n(b),y=a(30),g=(a(104),a(106),a(109),y.initializeApp({apiKey:"AIzaSyB7dEdxlQDHUTlEJmWm2jTnjr2XxbW6e94",authDomain:"tuckshop-3.firebaseapp.com",databaseURL:"https://tuckshop-3.firebaseio.com",projectId:"tuckshop-3",storageBucket:"tuckshop-3.appspot.com",messagingSenderId:"560785862071",appId:"1:560785862071:web:a1477aab0b2c6653",clientId:"560785862071-31coumpujetgutil5edbkemehkusnf40.apps.googleusercontent.com",scopes:["email","profile","https://www.googleapis.com/auth/spreadsheets"]})),k=a(43),w=a.n(k),C=a(89),O=a.n(C),S=(a(111),function(e){function t(e){var a;return Object(u.a)(this,t),a=Object(d.a)(this,Object(h.a)(t).call(this,e)),g.auth().currentUser&&(a.state={userInfo:{name:g.auth().currentUser.displayName,email:g.auth().currentUser.email,photoURL:g.auth().currentUser.photoURL}}),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this;return this.state&&this.state.userInfo&&this.state.userInfo.name&&(e=o.a.createElement(O.a,{ref:"overlay",trigger:"click",className:"popover-modal",rootClose:!0,placement:"bottom",overlay:o.a.createElement(w.a,{id:"popover-basic"},o.a.createElement(w.a.Title,{as:"h3"},this.state.userInfo.name),o.a.createElement(w.a.Content,null,o.a.createElement(l.b,{to:"/search",className:"d-block"}," Search Page "),o.a.createElement(l.b,{to:"/orders",className:"d-block"}," Monthly Orders "),o.a.createElement("button",{onClick:function(){return t.googleLogout()}},"Logout")))},o.a.createElement("button",{variant:"success",className:"btn-profile"},o.a.createElement("img",{src:this.state.userInfo.photoURL,width:"40",className:"avatar-img rounded-circle"})))),o.a.createElement("div",null,o.a.createElement(E.a,{expand:"xl",className:"justify-content-center"},o.a.createElement(E.a.Brand,null,o.a.createElement("span",{className:""},"Tuckshop"),o.a.createElement("div",{className:"header-actions"},e))))}},{key:"googleLogout",value:function(){y.auth().signOut().then((function(){window.history.replaceState({},"home","/"),console.log("logout successful")})).catch((function(e){console.log("error in logout",e)}))}}]),t}(s.Component)),j=a(32),N=a(92),I=a.n(N),T=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(j.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"search-wrapper"},o.a.createElement("div",{className:"inner-wrap"},o.a.createElement(I.a,{size:"lg",type:"text",placeholder:"Search",className:"mr-sm-2 global-search",onChange:this.handleChange})))}},{key:"handleChange",value:function(e){this.props.onSearchChange(e.target.value)}}]),t}(s.Component),M=a(31),_=a.n(M),x=(a(72),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.filters.map((function(t){return o.a.createElement(_.a,{size:"lg",className:"mr-2 ml-2 filter-btn specialIcons "+t.type+"-icon "+(t.isSelected?"active":""),key:t.type,onClick:function(){return e.props.onFilterSelect(t.type)}}," ",o.a.createElement("i",{className:"btn-icon"})," ",t.type)}));return o.a.createElement("div",{className:"tuck-lists"},t)}}]),t}(s.Component)),L=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(l.b,{to:"/search/"+this.props.item.item_code,onClick:function(){return e.props.handleClick(e.props.item)},className:"list-group-item list-group-item-action d-flex justify-content-between align-items-center"},this.props.item.item_name,o.a.createElement("span",null," ",o.a.createElement("small",null,"Rs. ")," ",this.props.item.price)))}}]),t}(s.Component),U=a(24),B=a.n(U),F=a(20),R=a.n(F),P=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={apiEndpoint:"https://us-central1-tuckshop-3.cloudfunctions.net/api",quantity:1},a.onQantityChange=a.onQantityChange.bind(Object(j.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"onQantityChange",value:function(e){this.setState({quantity:e.target.value})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(B.a,{className:"modal-wrapper centered-modal",show:this.props.showModal,onHide:function(){return e.props.handleModalClose()}},o.a.createElement(B.a.Header,{className:"modal-header"},o.a.createElement(B.a.Title,null,"Are you sure you want to buy?")),o.a.createElement(B.a.Body,null,o.a.createElement("div",{className:"modal-body p-1"},o.a.createElement("div",{className:"d-flex justify-content-between mb-4"},o.a.createElement("div",null,this.props.item.item_name),o.a.createElement("div",null,o.a.createElement("small",null,"Rs."),this.props.item.price)),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("label",null,"Quantity"),o.a.createElement("select",{value:this.state.quantity,onChange:this.onQantityChange},o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"))))),o.a.createElement(B.a.Footer,{className:"d-flex justify-content-between modal-footer"},o.a.createElement("button",{className:"cancel-btn",onClick:function(){return e.props.handleModalClose()}},"Cancel"),o.a.createElement("button",{className:"buy-btn",onClick:function(){return e.buyItem()}},"Buy"))))}},{key:"buyItem",value:function(){var e=this;console.log("inside buyItem function"),this.props.handleModalClose(),this.props.showLoaderToast();var t=this.state.apiEndpoint+"/place-order",a={user_email:g.auth().currentUser.email,item_code:this.props.item.item_code,quantity:parseInt(this.state.quantity),photoURL:g.auth().currentUser.photoURL,uid:g.auth().currentUser.uid,name:g.auth().currentUser.displayName,type:this.props.item.type,status:"Special"==this.props.item.type?"open":"closed"};R.a.post(t,a).then((function(t){console.log("place order response ==>",t),"SUCCESS"===t.data.message_code?e.props.orderSuccess():e.props.orderFailure(),e.setState({quantity:1})})).catch((function(t){console.log("error in place order ==>",t),e.props.orderFailure(),e.setState({quantity:1})}))}}]),t}(s.Component),A=a(13),q=(a(172),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={items:[],isLoaded:!1,itemsCopy:[],itemTypes:[],showModal:!1,modalItem:{},searchText:"",selectedFilter:"All",itemCode:"",apiEndpoint:"https://us-central1-tuckshop-3.cloudfunctions.net/api"},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchItems();var e=window.location.pathname;if(e.includes("/search")||window.history.replaceState({},"search","/search"),e.includes("/search/")){var t=e.split("/")[2];console.log("item code ==>",t),this.setState({itemCode:t})}}},{key:"render",value:function(){var e,t=this;return e=this.state.isLoaded?this.state.items.length?this.state.items.map((function(e){return o.a.createElement(L,{key:e.item_code,item:e,handleClick:function(e){return t.handleItemClick(e)}})})):o.a.createElement("div",{className:"text-center mt-5"}," ",o.a.createElement("h4",null," No Results "),"  "):o.a.createElement("div",{className:"text-center mt-5"}," ",o.a.createElement("h4",null," Loading... "),"  "),o.a.createElement("div",null,o.a.createElement(S,null),o.a.createElement(T,{onSearchChange:function(e){return t.searchItem(e)}}),o.a.createElement("div",{className:"mt-2 border"},o.a.createElement(x,{filters:this.state.itemTypes,onFilterSelect:function(e){return t.filterItems(e)}})),o.a.createElement("div",{className:"list-group"},e),o.a.createElement(A.a,{hideProgressBar:!0,closeOnClick:!1,position:A.b.POSITION.BOTTOM_CENTER}),o.a.createElement(i.a,{path:"/search/:item_code",render:function(){return o.a.createElement(P,{showModal:t.state.showModal,item:t.state.modalItem,handleModalClose:function(){return t.handleModalClose()},orderSuccess:function(){return t.showOrderSuccessToast()},orderFailure:function(){return t.showOrderFailureToast()},showLoaderToast:function(){return t.showLoaderToast()}})}}))}},{key:"handleItemClick",value:function(e){this.setState({showModal:!0,modalItem:e,itemCode:e.item_code})}},{key:"handleModalClose",value:function(){this.setState({showModal:!1,itemCode:""}),window.history.replaceState({},"search","/search")}},{key:"showLoaderToast",value:function(){A.b.dismiss(),Object(A.b)("Please wait ...",{autoClose:!1})}},{key:"showOrderSuccessToast",value:function(){A.b.dismiss(),Object(A.b)("Order placed successfully",{autoClose:3e3})}},{key:"showOrderFailureToast",value:function(){A.b.dismiss(),Object(A.b)("Something went wrong. Please try again.",{autoClose:3e3})}},{key:"fetchItems",value:function(){var e=this,t=this.state.apiEndpoint+"/get-items";R.a.get(t).then((function(t){console.log("get items response ==>",t);var a=t.data;a=(a=a.filter((function(e){return e.buyable&&e.in_stock&&e.stock>0}))).sort(e.sortItems);for(var n=[],s=0;s<a.length;s++)"Special"===a[s].type&&(n.push(a[s]),a.splice(s,1),s-=1);a=n.concat(a),e.setState({items:a,isLoaded:!0,itemsCopy:a}),e.state.itemCode&&e.findItem(),e.findTypes(a),e.state.searchText?e.searchItem(e.state.searchText):e.filterItems(e.state.selectedFilter)})).catch((function(e){console.log("error in place order ==>",e)}))}},{key:"findItem",value:function(){var e=this,t=this.state.items.find((function(t){return t.item_code===e.state.itemCode}));t?this.handleItemClick(t):(A.b.dismiss(),Object(A.b)("Item not found",{autoClose:3e3}),window.history.replaceState({},"search","/search"),this.setState({itemCode:""}))}},{key:"searchItem",value:function(e){var t=this;if(this.setState({searchText:e}),e&&""!==e.trim()){var a=this.state.itemsCopy.filter((function(t){return t.item_name.toLowerCase().indexOf(e.toLowerCase())>-1}));this.setState({items:a})}else this.setState({items:this.state.itemsCopy});this.setState({selectedFilter:"All"},(function(){t.setSelectedFilter()}))}},{key:"setSelectedFilter",value:function(){var e=this,t=this.state.itemTypes;t.forEach((function(t){t.isSelected=!1,t.type===e.state.selectedFilter&&(t.isSelected=!0)})),this.setState({itemTypes:t})}},{key:"findTypes",value:function(e){for(var t,a=[],n=[{type:"All",isSelected:!0}],s=0;s<e.length;s++)a[e[s].type]||(a[e[s].type]=!0,t={type:e[s].type,isSelected:!1},n.push(t));this.setState({itemTypes:n})}},{key:"sortItems",value:function(e,t){return e.type===t.type?e.item_name<t.item_name?-1:1:e.type<t.type?-1:1}},{key:"filterItems",value:function(e){var t=this;if(this.setState({selectedFilter:e},(function(){t.setSelectedFilter()})),"All"===e)this.setState({items:this.state.itemsCopy});else{var a=this.state.itemsCopy.filter((function(t){return t.type===e}));this.setState({items:a})}}}]),t}(s.Component)),D=(a(175),a(42)),W=a.n(D),Q=a(176),Y=R.a.CancelToken,z=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).decreaseMonth=function(){return a.setState((function(e){return{month:e.month.subtract(1,"month")}}),a.filterByMonth)},a.increaseMonth=function(){return a.setState((function(e){return{month:e.month.add(1,"month")}}),a.filterByMonth)},a.filterByMonth=function(){var e=a.state.month.clone();a.fetchOrders(e)},a.state={db:g.firestore(),orders:[],month:Q(),apiEndpoint:"https://us-central1-tuckshop-3.cloudfunctions.net/api",loading:!0},a.pickAMonth=o.a.createRef(),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchOrders()}},{key:"tableBody",value:function(){return this.state.orders.map((function(e){return o.a.createElement("tr",{key:e.created._nanoseconds},o.a.createElement("td",null,e.item_name),o.a.createElement("td",null,e.quantity),o.a.createElement("td",null,new Date(e.date).toLocaleDateString()),o.a.createElement("td",null,o.a.createElement("small",null,"Rs. ")," ",e.item_price))}))}},{key:"getMonthlyTotal",value:function(){var e=0;return this.state.orders.forEach((function(t){e+=t.quantity*t.item_price})),e}},{key:"render",value:function(){var e;return e=this.state.loading?o.a.createElement("div",{className:"text-center mt-5"}," ",o.a.createElement("h4",null," Loading ... "),"  "):this.state.orders.length?o.a.createElement(W.a,{striped:!0,bordered:!0,hover:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Product name"),o.a.createElement("th",null,"Quantity"),o.a.createElement("th",null,"Date"),o.a.createElement("th",null,"Price"))),o.a.createElement("tbody",null,this.tableBody())):o.a.createElement("div",{className:"text-center mt-5"}," ",o.a.createElement("h4",null," No Results "),"  "),o.a.createElement("div",null,o.a.createElement(S,null),o.a.createElement("div",null,o.a.createElement("div",{className:"special-wrapper mb-2"},o.a.createElement("div",{className:"top-bar d-flex font-weight-bolder justify-content-center mb-2"},o.a.createElement("div",null,"Monthly Orders")),o.a.createElement("div",{className:"d-flex font-weight-bold justify-content-between mb-2 pl-2 pr-2"},o.a.createElement("div",null,o.a.createElement("label",{className:"mr-2"},"Select Month : "),o.a.createElement("button",{className:"btn btn-dark mr-1",onClick:this.decreaseMonth},"< "),o.a.createElement("button",{className:"btn btn-dark month-selected"},this.state.month.format("MMM YYYY")),o.a.createElement("button",{disabled:this.state.month.clone().add(1,"hour")>Q(),className:"btn btn-dark ml-1",onClick:this.increaseMonth},">")),o.a.createElement("div",null,"Monthly total : ",this.getMonthlyTotal())),e)))}},{key:"fetchOrders",value:function(){var e,t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.setState({loading:!0,orders:[]});var s=(e=a?new Date(a):new Date).getMonth()+1,o=e.getFullYear(),r=12==s?1:s+1,c=12==s?o+1:o,l=s+"-1-"+o,i=r+"-1-"+c;console.log("check ==>",l,i);var u={email:g.auth().currentUser.email,start_date:l,end_date:i};n&&n();var m=this.state.apiEndpoint+"/get-user-orders";R.a.post(m,u,{cancelToken:new Y((function(e){n=e}))}).then((function(e){var a=e.data.orders;a.sort((function(e,t){return t.created._seconds-e.created._seconds})),t.setState({orders:a,loading:!1})})).catch((function(e){console.log("error in place order ==>",e)}))}}]),t}(s.Component),H=new y.auth.GoogleAuthProvider;H.addScope("https://www.googleapis.com/auth/spreadsheets");var G,J=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={isLoggedIn:!1,isAuthenticationChecked:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.auth().onAuthStateChanged((function(t){t?(console.log("check user ==>",t),e.setState({isLoggedIn:!0,isAuthenticationChecked:!0})):e.setState({isLoggedIn:!1,isAuthenticationChecked:!0})}))}},{key:"render",value:function(){var e,t,a=this;return this.state.isAuthenticationChecked&&(e=o.a.createElement("button",{variant:"warning",className:"btn login-btn",size:"lg",onClick:function(){return a.singInWithGoogle()}},"Sign In")),t=this.state.isLoggedIn?"/orders"==window.location.pathname?o.a.createElement(z,null):o.a.createElement(q,null):o.a.createElement("div",{className:"App"},o.a.createElement(E.a,{expand:"xl",className:"justify-content-center"},o.a.createElement(E.a.Brand,null,"Welcome to Tuckshop")),o.a.createElement("h2",{className:"mt-2 mb-2"},"Grab some Tuck!"),o.a.createElement("img",{src:v.a,className:"App-logo img-fluid",width:"280",alt:"logo"}),o.a.createElement("div",{className:"p-3"},e)),o.a.createElement("div",null,t)}},{key:"singInWithGoogle",value:function(){var e=this.props.history;console.log("inside sing in with google function"),y.auth().signInWithPopup(H).then((function(t){t.credential.accessToken,t.user;e.push({pathname:"/search"})})).catch((function(e){console.log("error in google login ==>",e)}))}}]),t}(s.Component),V=(a(178),a(95)),K=a.n(V),X=R.a.CancelToken,$=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={db:g.firestore(),specialsOrders:[],apiEndpoint:"https://us-central1-tuckshop-3.cloudfunctions.net/api",closeRequestInProgress:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchOrders(),setInterval((function(){console.log("calling fetchOrders"),e.fetchOrders()}),6e4)}},{key:"getUserImage",value:function(e){var t=this;return e.map((function(e){return o.a.createElement("div",{key:e.user_email+e.created._seconds,className:"m-2 text-center "+("closed"===e.status?"disabled":"cursor-pointer"),title:"open"===e.status?"Mark as Served":""},o.a.createElement("img",{onClick:function(){return t.closeSpecialOrder(e)},src:e.photoURL,width:"70",className:"avatar-img rounded-circle "}))}))}},{key:"render",value:function(){var e,t=this;return e=this.state.specialsOrders.length?this.state.specialsOrders.map((function(e){return o.a.createElement("div",{className:"special-wrapper mb-2",key:e[0].item_code},o.a.createElement("div",{className:"top-bar d-flex font-weight-bolder justify-content-between mb-2"},o.a.createElement("div",null,e[0].item_name),o.a.createElement("div",null,"Order Count :",e.length)),o.a.createElement("div",{className:"d-flex flex-wrap"},t.getUserImage(e)))})):o.a.createElement("div",{className:"text-center mt-5"}," ",o.a.createElement("h4",null," No Results "),"  "),o.a.createElement("div",null,o.a.createElement(S,null),o.a.createElement("div",null,e),o.a.createElement("div",{className:"loading-wrapper "+(this.state.closeRequestInProgress?"d-flex":"d-none")},o.a.createElement(K.a,{animation:"border"})))}},{key:"fetchOrders",value:function(){var e=this,t=this.state.apiEndpoint+"/special-orders",a=new Date,n={date:a.getMonth()+1+"/"+a.getDate()+"/"+a.getFullYear()};R.a.post(t,n,{cancelToken:new X((function(e){G=e}))}).then((function(t){console.log("res ==>",t);var a=t.data.special_orders;a.sort((function(e,t){return e.created._seconds-t.created._seconds})),e.groupByItem(a,"item_code")})).catch((function(e){console.log("error in get specials orders api ==>",e)}))}},{key:"groupByItem",value:function(e,t){var a=e.reduce((function(e,a){var n=a[t];return e[n]=(e[n]||[]).concat(a),e}),{}),n=[];for(var t in a)n.push(a[t]);this.setState({specialsOrders:n})}},{key:"closeSpecialOrder",value:function(e){var t=this;if("open"==e.status&&!this.state.closeRequestInProgress){G&&G(),this.setState({closeRequestInProgress:!0});var a=this.state.apiEndpoint+"/close-special-order",n={id:e.id};R.a.post(a,n).then((function(e){t.setState({closeRequestInProgress:!1}),console.log("place order response ==>",e)})).catch((function(e){t.setState({closeRequestInProgress:!1}),console.log("error in place order ==>",e)}))}}}]),t}(s.Component),Z=(a(179),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={apiEndpoint:"https://us-central1-tuckshop-3.cloudfunctions.net/api"},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(B.a,{className:"modal-wrapper centered-modal",show:this.props.showModal,onHide:function(){return e.props.handleModalClose()}},o.a.createElement(B.a.Header,{className:"modal-header"},o.a.createElement(B.a.Title,null,"Are you sure you want to update stock?")),o.a.createElement(B.a.Body,null,o.a.createElement("div",{className:"modal-body p-1"},o.a.createElement("div",{className:"d-flex justify-content-between mb-4"},o.a.createElement("div",null,this.props.item.item_name),o.a.createElement("div",null,"Stock count : ",this.props.item.stock)))),o.a.createElement(B.a.Footer,{className:"d-flex justify-content-between modal-footer"},o.a.createElement("button",{className:"cancel-btn",onClick:function(){return e.props.handleModalClose()}},"Cancel"),o.a.createElement("button",{className:"buy-btn",onClick:function(){return e.updateStock()}},"Confirm"))))}},{key:"updateStock",value:function(){var e=this;this.props.handleModalClose(),this.props.showLoaderToast();var t=this.state.apiEndpoint+"/adjust-stock",a={item_code:this.props.item.item_code,adjustment:parseInt(this.props.item.stock)};R.a.post(t,a).then((function(t){console.log("adjust stock response ==>",t),"success"===t.data.type?e.props.updateSuccess():"info"==t.data.type?e.props.noChangeToast():"error"==t.data.type&&e.props.updateFailure()})).catch((function(t){console.log("error in place order ==>",t),e.props.updateFailure()}))}}]),t}(s.Component)),ee=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={items:[],loaded:!1,apiEndpoint:"https://us-central1-tuckshop-3.cloudfunctions.net/api",showModal:!1,modalItem:{}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchItems()}},{key:"tableBody",value:function(){var e=this;return this.state.items.map((function(t){return o.a.createElement("tr",{key:t.item_code},o.a.createElement("td",null,t.item_code),o.a.createElement("td",null,t.item_name),o.a.createElement("td",null," ",o.a.createElement("input",{type:"number",value:t.stock,onChange:function(a){return e.changeStockValue(t,a.target.value)}}),e.showUpdateButton(t)))}))}},{key:"showUpdateButton",value:function(e){var t=this;if(e.showApply&&e.stock)return o.a.createElement("button",{onClick:function(){return t.showModalPrompt(e)}},"Update")}},{key:"showModalPrompt",value:function(e){this.setState({showModal:!0,modalItem:e})}},{key:"changeStockValue",value:function(e,t){var a=this.state.items.findIndex((function(t){return t.item_code===e.item_code})),n=this.state.items;n[a].stock=t,n[a].showApply=!0,this.setState({items:n})}},{key:"render",value:function(){var e,t=this;return e=this.state.loaded?this.state.items.length?o.a.createElement(W.a,{striped:!0,bordered:!0,hover:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Item Code"),o.a.createElement("th",null,"Item Name"),o.a.createElement("th",null,"In Stock"))),o.a.createElement("tbody",null,this.tableBody())):o.a.createElement("div",{className:"text-center mt-5"}," ",o.a.createElement("h4",null," No Results "),"  "):o.a.createElement("div",{className:"text-center mt-5"}," ",o.a.createElement("h4",null," Loading... "),"  "),o.a.createElement("div",null,o.a.createElement(S,null),o.a.createElement("div",null,o.a.createElement("div",{className:"special-wrapper mb-2"},o.a.createElement("div",{className:"top-bar d-flex font-weight-bolder justify-content-center mb-2"},o.a.createElement("div",null,"Stock Summary")),e)),o.a.createElement(A.a,{hideProgressBar:!0,closeOnClick:!1,position:A.b.POSITION.BOTTOM_CENTER}),o.a.createElement(Z,{showModal:this.state.showModal,item:this.state.modalItem,handleModalClose:function(){return t.handleModalClose()},updateSuccess:function(){return t.showUpdateSuccessToast()},updateFailure:function(){return t.showUpdateFailureToast()},showLoaderToast:function(){return t.showLoaderToast()},noChangeToast:function(){return t.showNoChangeToast()}}))}},{key:"handleModalClose",value:function(){this.setState({showModal:!1,itemCode:""})}},{key:"showLoaderToast",value:function(){A.b.dismiss(),Object(A.b)("Please wait ...",{autoClose:!1})}},{key:"showNoChangeToast",value:function(){A.b.dismiss(),Object(A.b)("No change in stock",{autoClose:3e3})}},{key:"showUpdateSuccessToast",value:function(){var e=this,t=this.state.items.findIndex((function(t){return t.item_code===e.state.modalItem.item_code})),a=this.state.items;a[t].showApply=!1,this.setState({items:a}),A.b.dismiss(),Object(A.b)("Stock updated successfully",{autoClose:3e3})}},{key:"showUpdateFailureToast",value:function(){A.b.dismiss(),Object(A.b)("Something went wrong. Please try again.",{autoClose:3e3})}},{key:"fetchItems",value:function(){var e=this,t=this.state.apiEndpoint+"/get-stock";R.a.get(t).then((function(t){console.log("get items response ==>",t);var a=t.data;e.setState({items:a,loaded:!0})})).catch((function(e){console.log("error in place order ==>",e)}))}}]),t}(s.Component),te=function(e){return o.a.createElement(l.a,null,o.a.createElement(i.a,{exact:!0,path:"/",component:J}),o.a.createElement(i.a,{path:"/search",component:J}),o.a.createElement(i.a,{path:"/specials",component:$}),o.a.createElement(i.a,{path:"/orders",component:J}),o.a.createElement(i.a,{path:"/stock-summary",component:ee}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},72:function(e,t,a){},88:function(e,t,a){e.exports=a.p+"static/media/tuckshop.a4db8ae6.jpg"},96:function(e,t,a){e.exports=a(180)}},[[96,1,2]]]);
//# sourceMappingURL=main.e94438cb.chunk.js.map