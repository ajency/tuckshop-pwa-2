import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Router, Route, Link, Switch, Redirect } from "react-router-dom";
// import firebaseApp from './components/firebase/firebase.js';
// import Auth from './services/auth';
import Home from './components/home/home.js';
// import List from './components/list-page/list-page.js';


const App = (props) => (
	<BrowserRouter>
		<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/search" component={Home} />
		</Switch>
	</BrowserRouter>
)

// const PrivateRoute = ({ component: Component, ...rest }) => (
// 	<Route {...rest} render={props =>
// 			Auth.getAuth() 
// 			? ( <Component {...props} />) 
// 			: ( <Redirect to={{ pathname: "/" }}/>)
// 		}
// 	/>
// );

export default App;
