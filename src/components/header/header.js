import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import './header.scss';

class Header extends Component {
	constructor(props){
		super(props);
		console.log(this.props.userInfo)
	}
	render() {
		return (
			<div>
				<Navbar expand="xl" className="justify-content-center">
					<Navbar.Brand >
						<span className="">Tuckshop</span>
						<div className="header-actions">
							
							<OverlayTrigger ref="overlay" trigger="click" className="popover-modal" rootClose={true} placement="bottom" overlay={
								<Popover id="popover-basic">
								    <Popover.Title as="h3">{this.props.userInfo.name}</Popover.Title>
								    <Popover.Content>
								     	<button>Month Total</button>
								     	<button>Logout</button>
								    </Popover.Content>
								</Popover>
							}>
							    <button variant="success" className="btn-profile">
							    <img src="https://lh3.googleusercontent.com/a-/AAuE7mDAwNexBKeZA3rLmgCNJRfQ909fxWcP546HHDej=s96-c" width="40" className="avatar-img rounded-circle"/></button>
							 </OverlayTrigger>
						</div>
					</Navbar.Brand>
				</Navbar>
				
			</div>
		);
	}
}



export default Header;