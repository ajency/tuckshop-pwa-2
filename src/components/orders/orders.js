import React, { Component } from 'react';
import firebaseApp from '../firebase/firebase.js';
import Header from '../header/header.js';
import './orders.scss'
import Table from 'react-bootstrap/Table';
var moment = require('moment');

class Orders extends Component {
	constructor(props) {
		super(props);
		this.state = {
			db : firebaseApp.firestore(),
			orders : [],
			month: moment(),
		};
		this.pickAMonth = React.createRef();
	}

	componentDidMount(){
		this.fetchOrders();
	}

	tableBody(){
		return this.state.orders.map((order) => 
			<tr key={order.created.nanoseconds}>
			    <td>{order.item_name}</td>
			    <td>{order.quantity}</td>
			    <td>{order.created.toDate().toLocaleDateString()}</td>
			    <td><small>Rs. </small> {order.item_price}</td>
	    	</tr>
    	);
	}

	getMonthlyTotal(){
		let total = 0;
		this.state.orders.forEach((order) =>{
			total = total + order.quantity * order.item_price;
		})
		return total
	}

	render() {
		let orderContainer;
		if(this.state.orders.length){
			orderContainer = 

			<Table striped bordered hover>
			  	<thead>
				    <tr>
						<th>Product name</th>
						<th>Quantity</th>
						<th>Date</th>
						<th>Price</th>
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
								Monthly Orders
							</div>
						</div>
						<div className="d-flex font-weight-bold justify-content-between mb-2 pl-2 pr-2">
			                <div>
			                <label className="mr-2">Select Month : </label>
							  <button className="btn btn-dark mr-1" onClick={this.decreaseMonth}>{'< '}</button>
							  <button className="btn btn-dark month-selected">{this.state.month.format('MMM YYYY')}</button>
							  <button disabled={this.state.month.clone().add(1, 'hour') > moment()} className="btn btn-dark ml-1" onClick={this.increaseMonth}>
							    {'>'}
							  </button>
							</div>
							<div>
								Monthly total : {this.getMonthlyTotal()}
							</div>
						</div>
						{orderContainer}
				    </div>
				</div>
			</div>
		);
	}

	decreaseMonth = () =>
	  this.setState(
	    prevState => ({ month: prevState.month.subtract(1, 'month') }),
	    this.filterByMonth
	)

	increaseMonth = () =>
	  this.setState(prevState => ({ month: prevState.month.add(1, 'month') }), this.filterByMonth)

	filterByMonth = () => {
	  const month = this.state.month.clone()
	  this.fetchOrders(month)
	}

	fetchOrders(month : any = null) {
		this.state.db.collection("orders").where("user_email", "==", firebaseApp.auth().currentUser.email).onSnapshot(querySnapshot => {
			  		let orders = querySnapshot.docs.map(doc => doc.data());
			  		let month_year = month ? (new Date(month)).toLocaleDateString("en-US", {month : 'short', year: 'numeric'}) : new Date().toLocaleDateString("en-US", {month : 'short', year: 'numeric'})
			  		orders = orders.filter((order) =>  (order.created.toDate()).toLocaleDateString("en-US", {month : 'short', year: 'numeric'}) == month_year)
			  		orders.sort((a,b)=>{
			  			return a.created.seconds - b.created.seconds;
			  		})
			  		this.setState({orders : orders})
	    });
	}
}

export default Orders;