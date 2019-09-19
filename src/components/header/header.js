import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import './header.scss';
import firebaseApp from '../firebase/firebase.js';
import { Route, Link } from 'react-router-dom';
import * as firebase from 'firebase/app';

class Header extends Component {
	constructor(props){
		super(props);
		this.state = { 
			userInfo : {
				name : firebaseApp.auth().currentUser.displayName,
				email : firebaseApp.auth().currentUser.email,
				photoURL : firebaseApp.auth().currentUser.photoURL
			}
		};
	}
	render() {
		let popover;
		if(this.state.userInfo)
			popover = <OverlayTrigger ref="overlay" trigger="click" className="popover-modal" rootClose={true} placement="bottom" overlay={
								<Popover id="popover-basic">
								    <Popover.Title as="h3">{this.state.userInfo.name}</Popover.Title>
								    <Popover.Content>
								    	<Link to='/search' className="d-block"> Search Page </Link>
								    	<Link to='/orders' className="d-block"> Monthly Orders </Link>
								     	<button onClick={()=>this.googleLogout()}>Logout</button>
								    </Popover.Content>
								</Popover>
							}>
							    <button variant="success" className="btn-profile">
							    <img src="https://lh3.googleusercontent.com/a-/AAuE7mDAwNexBKeZA3rLmgCNJRfQ909fxWcP546HHDej=s96-c" width="40" className="avatar-img rounded-circle"/></button>
							 </OverlayTrigger>

		return (
			<div>
				<Navbar expand="xl" className="justify-content-center">
					<Navbar.Brand >
						<span className="">Tuckshop</span>
						<div className="header-actions">
							{popover}
						</div>
					</Navbar.Brand>
				</Navbar>
				
			</div>
		);
	}

	googleLogout(){
		firebase.auth().signOut().then(function() {
			window.history.replaceState({}, "home", "/");
			console.log("logout successful")
		}).catch(function(error) {
		  console.log("error in logout", error);
		});
	}
}



export default Header;