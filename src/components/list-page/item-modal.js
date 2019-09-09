import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './list.scss'
import firebaseApp from '../firebase/firebase.js';

class ItemModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apiEndpoint : "http://localhost:5000/tuckshop-3/us-central1/api",
		}

		console.log("firebase.auth().currentUser ==>", firebaseApp.auth())
	}

	render() {
		return (
			<div>
		      <Modal className="modal-wrapper centered-modal" show={this.props.showModal} onHide={()=>this.props.handleModalClose()}>
		        <Modal.Header className="modal-header">
		          <Modal.Title>Are you sure you want to buy?</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
					<div className="modal-body p-1">
						<div className="d-flex justify-content-between mb-4">
							<div >
								{this.props.item.item_name}
							</div>
							<div >
								<small>Rs.</small>{this.props.item.price}
							</div>
						</div>

						<div className="d-flex justify-content-between">
							<label>Quantity</label>
							<select >
								<option value="1" >1</option>
								<option value="2">2</option>
							</select>
						</div>
					</div>
		        </Modal.Body>
		        <Modal.Footer className="d-flex justify-content-between modal-footer">
		          <button className="cancel-btn" onClick={()=>this.props.handleModalClose()}>
		            Cancel
		          </button>
		          <button className="buy-btn" onClick={()=>this.buyItem()}>
		            Buy
		          </button>
		        </Modal.Footer>
		      </Modal>
		    </div>
		);
	}

	buyItem(){
		console.log("inside buyItem function");
		this.props.handleModalClose();
		const url = this.state.apiEndpoint + '/place-order';
		let body = {
	      user_email : firebaseApp.auth().currentUser.email,
	      item_code : this.props.item.item_code,
	      quantity : 1,
	      photoURL : firebaseApp.auth().currentUser.photoURL,
	      uid : firebaseApp.auth().currentUser.uid
	    }
		axios.post(url, body)
			.then((res) => {
				console.log("place order response ==>", res);
			})
			.catch((error)=>{
				console.log("error in place order ==>", error);
			})
	}
}

export default ItemModal;