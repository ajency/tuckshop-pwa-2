import React, { Component } from 'react';
import firebaseApp from '../firebase/firebase.js';
import Header from '../header/header.js';

class Specials extends Component {
	constructor(props) {
		super(props);
		this.state = {
			db : firebaseApp.firestore(),
			orders : []
		}
	}

	componentDidMount(){
		this.fetchOrders();
	}

	render() {
		let orderContainer;
		if(this.state.orders.length)
			orderContainer = this.state.orders.map((order) =>
		    	<img key={order.user_email} src={order.photoURL} width="70" className="avatar-img m-2 rounded-circle"/>
			);
		else
			orderContainer = <div className="text-center mt-5"> <h4> No Results </h4>  </div>

		return (
			<div>
				<Header/>
				<div>
					{orderContainer}
				</div>
			</div>
		);
	}

	fetchOrders() {
		this.state.db.collection("orders").onSnapshot(querySnapshot => {
			  		let orders = querySnapshot.docs.map(doc => doc.data());
			  		console.log("orders ==>", orders)
			  		orders = orders.filter((order) => order.item_code === "400194")
			  		orders.sort((a,b)=>{
			  			return a.created.seconds - b.created.seconds;
			  		})
			  		this.setState({orders : orders});
	    });
	}
}

export default Specials;