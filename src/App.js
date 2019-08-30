import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/home/home.js';
import List from './components/list-page/list-page.js';

const App = () => (
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/search" component={List} />
		</div>
	</Router>
)

export default App;
