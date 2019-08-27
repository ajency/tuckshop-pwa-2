import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './list.scss'

class Filters extends Component {
	render() {
		const filterBtns = this.props.filters.map((filter) =>
			<Button size="lg" className={"mr-2 filter-btn " + (filter.isSelected ? 'active' : '')} key={filter.type} onClick={()=>this.props.onFilterSelect(filter.type)} >{filter.type}</Button>
		);
		return (
			<div>
				{filterBtns}
			</div>
		);
	}
}

export default Filters;