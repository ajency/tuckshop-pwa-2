import React, { Component } from 'react';
import firebaseApp from '../firebase/firebase.js';
import Header from '../header/header.js';
import './stocks.scss'
import Table from 'react-bootstrap/Table';

class StocksSummary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			db : firebaseApp.firestore(),
			orders : [],
			items : [],
			loaded : false
		};
	}

	componentDidMount(){
		this.fetchOrders();
	}

	tableBody(){
		return Object.keys(this.state.orders).map((key) => 
			<tr key={key}>
			    <td>{this.state.orders[key][0].item_code}</td>
			    <td>{this.state.orders[key][0].item_name}</td>
			    <td>{this.getTotalSold(this.state.orders[key])}</td>
			    <td>{this.getCurrentStock(this.state.orders[key][0].item_code)}</td>
	    	</tr>
    	);
	}

	getTotalSold(array){
		let quantity = 0;
		array.forEach((order)=>{
			quantity += parseInt(order.quantity);
		})
		return quantity;
	}

	getCurrentStock(item_code){
		let item = this.state.items.find((item) =>{ return item.item_code === item_code})
		if(item)
			return item.stock
	}

	render() {
		let orderContainer;
		if(!this.state.loaded)
			orderContainer = <div className="text-center mt-5"> <h4> Loading... </h4>  </div>
		else if(Object.keys(this.state.orders).length){
			orderContainer = 
			<Table striped bordered hover>
			  	<thead>
				    <tr>
						<th>Item Code</th>
						<th>Item Name</th>
						<th>Sold</th>
						<th>In Stock</th>
				    </tr>
			    </thead>
			  	<tbody>
			    	{this.tableBody()}
				</tbody>
			</Table>
		}
		else
			orderContainer = <div className="text-center mt-5"> <h4> No Results </h4>  </div>

		return (
			<div>
				<Header/>
				<div>
					<div className="special-wrapper mb-2">
						<div className="top-bar d-flex font-weight-bolder justify-content-center mb-2">
							<div>
								Stock Summary
							</div>
						</div>
						
						{orderContainer}
				    </div>
				</div>
			</div>
		);
	}

	fetchOrders() {
		this.state.db.collection("orders").onSnapshot(querySnapshot => {
			  		let orders = querySnapshot.docs.map(doc => doc.data());
			  		orders.sort((a,b)=>{
			  			return a.created.seconds - b.created.seconds;
			  		})
			  		this.groupByItem(orders, 'item_code');
	    });
	    this.state.db.collection("items").onSnapshot(querySnapshot => {
	    	let items = querySnapshot.docs.map(doc => doc.data());
	    	this.setState({items : items})
	    })
	}

	groupByItem(array, key){
		let grouped_obj = 
			array.reduce((objectsByKeyValue, obj) => {
				const value = obj[key];
				objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
				return objectsByKeyValue;
			}, {});
		this.setState({orders : grouped_obj, loaded : true})
		console.log(grouped_obj);
	}
}

export default StocksSummary;