import React, { Component } from 'react';

class Item extends Component {	
	render() {
		return (
			<div>
				<a onClick={()=>this.props.handleClick(this.props.item)} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
					{this.props.item.item_name}
					<span> <small>Rs. </small> {this.props.item.price}</span>
				</a>
			</div>
		);
	}
}

export default Item;