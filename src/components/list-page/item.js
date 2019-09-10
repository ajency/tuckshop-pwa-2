import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Item extends Component {	
	render() {
		return (
			<div>
				<Link to={"/search/" + this.props.item.item_code} onClick={()=>this.props.handleClick(this.props.item)} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
					{this.props.item.item_name}
					<span> <small>Rs. </small> {this.props.item.price}</span>
				</Link>
			</div>
		);
	}
}

export default Item;