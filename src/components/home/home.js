import React, { Component } from 'react';
import logo from '../../assets/img/tuckshop.jpg';
import './home.scss';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import * as firebase from 'firebase/app';
import firebaseApp from '../firebase/firebase.js';

import List from '../list-page/list-page.js';

var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/spreadsheets');

class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
			isLoggedIn : false,
			isAuthenticationChecked : false
		}
	}

	componentDidMount(){
		firebaseApp.auth().onAuthStateChanged( (user)=> {
		  if (user) {
		  	console.log("check user ==>", user);
		  	this.setState({isLoggedIn : true, isAuthenticationChecked : true});
		  } 
		  else {
		  	this.setState({isLoggedIn : false, isAuthenticationChecked : true});
		  }
		});
	}

	render() {
		let btnContent;
		if(this.state.isAuthenticationChecked)
			btnContent = <button variant="warning" className="btn login-btn" size="lg" onClick={()=>this.singInWithGoogle()}>Sign In</button>

		let pageContent;
		if(this.state.isLoggedIn)
			pageContent = <List/>
		else
			pageContent = (<div className="App">
					<Navbar expand="xl" className="justify-content-center">
						<Navbar.Brand >Welcome to Tuckshop</Navbar.Brand>
					</Navbar>
					<h2 className="mt-2 mb-2">Grab some Tuck!</h2>
					<img src={logo} className="App-logo img-fluid" width="280" alt="logo" />
					<div className="p-3">
						{btnContent}
					</div>
					 
				</div>)

		return (
			<div>
				{pageContent}
			</div>
		);
	}

	singInWithGoogle(){
		let { history } = this.props;
		console.log("inside sing in with google function")
		firebase.auth().signInWithPopup(provider).then(function(result) {
		  var token = result.credential.accessToken;
		  var user = result.user;
		  history.push({
		   pathname: '/search'
		  });
		}).catch(function(error) {
		  console.log("error in google login ==>", error);
		});
	}
}

export default Home;