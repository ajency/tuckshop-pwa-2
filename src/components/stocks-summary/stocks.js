import React, { Component } from 'react';
import firebaseApp from '../firebase/firebase.js';
import Header from '../header/header.js';
import './stocks.scss'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import ConfirmationModal from './confirmation_modal.js';
import { ToastContainer, toast } from 'react-toastify';

class StocksSummary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			db : firebaseApp.firestore(),
			items : [],
			loaded : false,
			apiEndpoint : "https://us-central1-tuckshop-3.cloudfunctions.net/api",
			// apiEndpoint : "http://localhost:5000/tuckshop-3/us-central1/api",
			showModal : false,
			modalItem : {},
		};
	}

	componentDidMount(){
		this.fetchItems();
	}

	tableBody(){
		return this.state.items.map((item) => 
			<tr key={item.item_code}>
			    <td>{item.item_code}</td>
			    <td>{item.item_name}</td>
			    <td> <input type="number" value={item.stock} onChange={(e)=>this.changeStockValue(item, e.target.value)}/>
			     {this.showUpdateButton(item)}
			    </td>
	    	</tr>
    	);
	}

	showUpdateButton(item){
		if(item.showApply && item.stock)
			return <button onClick={()=>this.showModalPrompt(item)}>Update</button>
	}

	showModalPrompt(item){
		this.setState({showModal : true,  modalItem : item})
	}

	changeStockValue(item, value){
		let index = this.state.items.findIndex((i) => i.item_code === item.item_code)
		let items_copy  = this.state.items;
		items_copy[index].stock = value;
		items_copy[index].showApply = true;
		this.setState({items : items_copy});
	}

	render() {
		let orderContainer;
		if(!this.state.loaded)
			orderContainer = <div className="text-center mt-5"> <h4> Loading... </h4>  </div>
		else if(this.state.items.length){
			orderContainer = 
			<Table striped bordered hover>
			  	<thead>
				    <tr>
						<th>Item Code</th>
						<th>Item Name</th>
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

				<ToastContainer hideProgressBar={true} closeOnClick={false} position={toast.POSITION.BOTTOM_CENTER} />

				<ConfirmationModal showModal={this.state.showModal} item={this.state.modalItem} handleModalClose={()=>this.handleModalClose()} updateSuccess={()=>this.showUpdateSuccessToast()} updateFailure={()=>this.showUpdateFailureToast()} showLoaderToast={()=>this.showLoaderToast()} noChangeToast={()=>this.showNoChangeToast()}/>
			</div>
		);
	}

	handleModalClose(){
		this.setState({showModal : false, itemCode : ''});
	}

	showLoaderToast(){
		toast.dismiss();
		toast("Please wait ...", {autoClose : false});
	}

	showNoChangeToast(){
		toast.dismiss();
		toast("No change in stock", {autoClose : 3000});	
	}

	showUpdateSuccessToast(){
		let index = this.state.items.findIndex((i) => i.item_code === this.state.modalItem.item_code)
		let items_copy  = this.state.items;
		items_copy[index].showApply = false;
		this.setState({items : items_copy});
		toast.dismiss();
		toast("Stock updated successfully", {autoClose : 3000});	
	}

	showUpdateFailureToast(){
		toast.dismiss();
		toast("Something went wrong. Please try again.", {autoClose : 3000});
	}

	fetchItems() {
		let url = this.state.apiEndpoint + '/get-stock';
		axios.get(url)
			.then((res) => {
				console.log("get items response ==>", res);
				let items = res.data;
				this.setState({items : items, loaded : true})
			})
			.catch((error)=>{
				console.log("error in place order ==>", error);
			})
	}
}

export default StocksSummary;