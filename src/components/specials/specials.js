import React, { Component } from 'react';
import firebaseApp from '../firebase/firebase.js';
import Header from '../header/header.js';
import './specials.scss'
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
const CancelToken = axios.CancelToken;
let cancel;

class Specials extends Component {
	constructor(props) {
		super(props);
		this.state = {
			db : firebaseApp.firestore(),
			specialsOrders : [],
			apiEndpoint : "https://us-central1-tuckshop-3.cloudfunctions.net/api",
			// apiEndpoint : "http://localhost:5000/tuckshop-3/us-central1/api",
			closeRequestInProgress : false,
		}
	}

	componentDidMount(){
		this.fetchOrders();
		setInterval(()=>{
			console.log("calling fetchOrders");
			this.fetchOrders();
		},60000)
	}

	getUserImage(special){
		return special.map((order) =>
				<div key={order.user_email + order.created._seconds} className={"m-2 text-center " + (order.status === 'closed' ? "disabled" : "cursor-pointer")} title={order.status === 'open' ? 'Mark as Served' : ''}>
    				<img onClick={()=>this.closeSpecialOrder(order)}  src={order.photoURL} width="70" className="avatar-img rounded-circle " />
    			</div>
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
					<div className="d-flex flex-wrap">
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
				<div className={"loading-wrapper " + (this.state.closeRequestInProgress ? "d-flex" : "d-none")}>
					<Spinner animation="border" />
				</div>
			</div>
		);
	}

	fetchOrders() {
	 	let url = this.state.apiEndpoint + '/special-orders';
	 		let date = new Date();
	 		let month = date.getMonth() + 1;
			let body = {
		      date : month + '/' + date.getDate() + '/' + date.getFullYear()
		    }

			axios.post(url, body, {
				cancelToken : new CancelToken((c) => {
					cancel = c;
				})
			})
				.then((res) => {
					console.log("res ==>",res);
					let orders = res.data.special_orders;
					orders.sort((a,b)=>{
			  			return a.created._seconds - b.created._seconds;
			  		})
			  		this.groupByItem(orders, 'item_code');	
				})
				.catch((error)=>{
					console.log("error in get specials orders api ==>", error);
				})
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
		this.setState({specialsOrders : grouped_array});
	}

	closeSpecialOrder(order){
		if(order.status == 'open' && !this.state.closeRequestInProgress){
			cancel && cancel();
			this.setState({closeRequestInProgress : true});
			let url = this.state.apiEndpoint + '/close-special-order';
			let body = {
		      id : order.id
		    }

			axios.post(url, body)
				.then((res) => {
					this.setState({closeRequestInProgress : false});
					console.log("place order response ==>", res);
				})
				.catch((error)=>{
					this.setState({closeRequestInProgress : false});
					console.log("error in place order ==>", error);
				})
		}
	}
}

export default Specials;