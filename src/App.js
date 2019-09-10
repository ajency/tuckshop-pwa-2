import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import firebaseApp from './components/firebase/firebase.js';
// import Auth from './services/auth';
import Home from './components/home/home.js';
// import List from './components/list-page/list-page.js';
import Specials from './components/specials/specials.js';

const App = (props) => (
	<Router>
			<Route exact path="/" component={Home} />
			<Route path="/search" component={Home} />
			<Route path="/specials" component={Specials} />
	</Router>
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
