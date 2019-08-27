import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component {
	render() {
		return (
			<div>
				<Navbar expand="xl" className="justify-content-center">
					<Navbar.Brand >
						<span className="">Tuckshop</span>
					</Navbar.Brand>
				</Navbar>
			</div>
		);
	}
}

export default Header;