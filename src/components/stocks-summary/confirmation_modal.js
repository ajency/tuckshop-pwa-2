import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class ConfirmationModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apiEndpoint : "https://us-central1-tuckshop-3.cloudfunctions.net/api",
			// apiEndpoint : "http://localhost:5000/tuckshop-3/us-central1/api",
		}

	}

	render() {
		return (
			<div>
		      <Modal className="modal-wrapper centered-modal" show={this.props.showModal} onHide={()=>this.props.handleModalClose()}>
		        <Modal.Header className="modal-header">
		          <Modal.Title>Are you sure you want to update stock?</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
					<div className="modal-body p-1">
						<div className="d-flex justify-content-between mb-4">
							<div>
								{this.props.item.item_name}
							</div>
							<div>
								Stock count : {this.props.item.stock}
							</div>
						</div>
					</div>
		        </Modal.Body>
		        <Modal.Footer className="d-flex justify-content-between modal-footer">
		          <button className="cancel-btn" onClick={()=>this.props.handleModalClose()}>
		            Cancel
		          </button>
		          <button className="buy-btn" onClick={()=>this.updateStock()}>
		            Confirm
		          </button>
		        </Modal.Footer>
		      </Modal>
		    </div>
		);
	}

	updateStock(){
		this.props.handleModalClose();
		this.props.showLoaderToast()
		let url = this.state.apiEndpoint + '/adjust-stock';
		let body = {
	      item_code : this.props.item.item_code,
	      adjustment : parseInt(this.props.item.stock)
	    }
		axios.post(url, body)
			.then((res) => {
				console.log("adjust stock response ==>", res);
				if(res.data.type === "success")
					this.props.updateSuccess();
				else if(res.data.type == 'info')
					this.props.noChangeToast();
				else if(res.data.type == 'error')
					this.props.updateFailure();
			})
			.catch((error)=>{
				console.log("error in place order ==>", error);
				this.props.updateFailure();
			})
	}
}

export default ConfirmationModal;