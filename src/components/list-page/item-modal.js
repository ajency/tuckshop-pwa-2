import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './list.scss'

class ItemModal extends Component {

	render() {
		return (
			<div>
		      <Modal show={this.props.showModal} onHide={()=>this.props.handleModalClose()}>
		        <Modal.Header closeButton>
		          <Modal.Title>Are you sure you want to buy?</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
					<ion-list >
						<ion-item >
							<div >
								{this.props.item.itemName}
							</div>
							<div >
								<small>Rs.</small>{this.props.item.price}
							</div>
						</ion-item>

						<div>
							<label>Quantity</label>
							<select >
								<option value="1" >1</option>
								<option value="2">2</option>
							</select>
						</div>
					</ion-list>
		        </Modal.Body>
		        <Modal.Footer>
		          <Button variant="secondary" onClick={()=>this.props.handleModalClose()}>
		            Close
		          </Button>
		          <Button variant="primary" onClick={()=>this.props.handleModalClose()}>
		            Save Changes
		          </Button>
		        </Modal.Footer>
		      </Modal>
		    </div>
		);
	}
}

export default ItemModal;