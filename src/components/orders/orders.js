import React, { Component } from 'react';
import firebaseApp from '../firebase/firebase.js';
import Header from '../header/header.js';
import './orders.scss'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
var moment = require('moment');
const CancelToken = axios.CancelToken;
let cancel;

class Orders extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// db : firebaseApp.firestore(),
			orders : [],
			month: moment(),
			apiEndpoint : "https://us-central1-tuckshop-3.cloudfunctions.net/api",
			// apiEndpoint : "http://localhost:5000/tuckshop-3/us-central1/api",
			loading : true
		};
		this.pickAMonth = React.createRef();
	}

	componentDidMount(){
		this.fetchOrders();
	}

	tableBody(){
		return this.state.orders.map((order) => 
			<tr key={order.created._nanoseconds}>
			    <td>{order.item_name}</td>
			    <td>{order.quantity}</td>
			    <td>{(new Date(order.date)).toLocaleDateString()}</td>
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
		if(this.state.loading)
			orderContainer = <div className="text-center mt-5"> <h4> Loading ... </h4>  </div>
		else if(this.state.orders.length){
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
		this.setState({loading : true, orders : []})
		let date;
		if(month){
			date = new Date(month);
		}
		else{
			date = new Date();
		}
		let mm = date.getMonth() + 1; //January is 0!
		let yyyy = date.getFullYear();

		let next_mm = mm == 12 ? 1 : mm + 1;
		let next_yyyy = mm == 12 ? yyyy + 1 : yyyy;

		let start_date = mm + '-1-' + yyyy;
		let end_date = next_mm + '-1-' + next_yyyy;
		console.log("check ==>", start_date, end_date);

		let body = {
			email : firebaseApp.auth().currentUser.email,
			start_date : start_date,
			end_date : end_date
		}
		cancel && cancel();
		let url = this.state.apiEndpoint + '/get-user-orders';
		axios.post(url, body, {
				cancelToken : new CancelToken((c) => {
					cancel = c;
				})
			})
			.then((res) => {
				let orders = res.data.orders;
				orders.sort((a,b)=>{
		  			return b.created._seconds - a.created._seconds;
		  		})
		  		this.setState({orders : orders, loading : false})
			})
			.catch((error)=>{
				console.log("error in place order ==>", error);
			})
	}
}

export default Orders;