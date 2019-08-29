import React, { Component } from 'react';
import logo from '../../assets/img/tuckshop.jpg';
import './home.scss';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
	render() {
		return (
			<div className="App">
				<Navbar expand="xl" className="justify-content-center">
					<Navbar.Brand >Welcome to Tuckshop</Navbar.Brand>
				</Navbar>
				<h2 className="mt-2 mb-2">Grab some Tuck!</h2>
				<img src={logo} className="App-logo img-fluid" width="280" alt="logo" />
				<div className="p-3">
						
					<Link variant="warning" className="btn login-btn" size="lg" to="/search">Sign In</Link>
						
				</div>
			</div>
		);
	}
}

export default Home;