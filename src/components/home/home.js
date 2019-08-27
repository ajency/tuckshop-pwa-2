import React, { Component } from 'react';
import logo from '../../assets/img/tuckshop.jpg';
import './home.scss';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

class Home extends Component {
	render() {
		return (
			<div className="App">
				<Navbar expand="xl" className="justify-content-center">
					<Navbar.Brand >Welcome to Tuckshop</Navbar.Brand>
				</Navbar>
				<h2 className="mb-2">Grab some Tuck!</h2>
				<img src={logo} className="App-logo" alt="logo" />
				<div className="p-3">
						<Button variant="warning" className="login-btn" size="lg">Sign In</Button>
				</div>
			</div>
		);
	}
}

export default Home;