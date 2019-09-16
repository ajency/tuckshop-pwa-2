import React, { Component } from 'react';
import firebaseApp from '../firebase/firebase.js';
import Header from '../header/header.js';
import './specials.scss'

class Specials extends Component {
	constructor(props) {
		super(props);
		this.state = {
			db : firebaseApp.firestore(),
			specialsOrders : []
		}
	}

	componentDidMount(){
		this.fetchOrders();
	}

	getUserImage(special){
		return special.map((order) =>
    			<img key={order.user_email + order.created} src={order.photoURL} width="70" className="avatar-img m-2 rounded-circle"/>
			 )
	}

	render() {
		let orderContainer;
		if(this.state.specialsOrders.length)
			orderContainer = this.state.specialsOrders.map((special) =>
				<div className="special-wrapper mb-2" key={special[0].item_code}>
					<div className="top-bar d-flex font-weight-bolder justify-content-between mb-2">
						<div>
							{special[0].item_name}
						</div>
						<div>
							Order Count :{special.length}
						</div>
					</div>
					<div>
						{this.getUserImage(special)}
			    	</div>
			    </div>
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
			  		console.log("orders ==>", orders, (orders[0].created.toDate()).toLocaleDateString(), new Date().toLocaleDateString() );
			  		orders = orders.filter((order) => order.type === "Special" && (order.created.toDate()).toLocaleDateString() == new Date().toLocaleDateString())
			  		orders.sort((a,b)=>{
			  			return a.created.seconds - b.created.seconds;
			  		})
			  		this.groupByItem(orders, 'item_code');			  		
	    });
	}

	groupByItem(array, key){
		let grouped_obj = 
			array.reduce((objectsByKeyValue, obj) => {
				const value = obj[key];
				objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
				return objectsByKeyValue;
			}, {});
		let grouped_array = []
		for (var key in grouped_obj) {
			grouped_array.push(grouped_obj[key]);
		}
		console.log("group by ==>", grouped_array);
		this.setState({specialsOrders : grouped_array});
	}
}

export default Specials;