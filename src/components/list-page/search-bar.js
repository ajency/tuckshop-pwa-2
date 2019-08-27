import React, { Component } from 'react';
import FormControl from 'react-bootstrap/FormControl';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		return (
			<div>
				<FormControl size="lg" type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleChange} />
			</div>
		);
	}

	handleChange(event) {
		this.props.onSearchChange(event.target.value);
	}
}

export default SearchBar;