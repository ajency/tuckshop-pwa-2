import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './list.scss'

class ItemModal extends Component {

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
		          <button className="buy-btn" onClick={()=>this.props.handleModalClose()}>
		            Buy
		          </button>
		        </Modal.Footer>
		      </Modal>
		    </div>
		);
	}
}

export default ItemModal;