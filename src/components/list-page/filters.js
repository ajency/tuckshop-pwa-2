import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './list.scss'

class Filters extends Component {
	render() {
		const filterBtns = this.props.filters.map((filter) =>
			<Button size="lg" className={"mr-2 ml-2 filter-btn specialIcons " + filter.type + "-icon " + (filter.isSelected ? 'active' : '')} key={filter.type} onClick={()=>this.props.onFilterSelect(filter.type)} > <i className="btn-icon"></i> {filter.type}</Button>
		);
		return (
			<div className="tuck-lists">
				{filterBtns}
			</div>
		);
	}
}

export default Filters;