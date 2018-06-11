import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Home from '../components/Home.js';
import About from '../components/About.js';
import Service from '../components/Service.js';

window.React = React;

const Root = () => {
	return (
		<Router>
			<div>
				<Route path="/" component={Header} />
				<Route path="/Home" exact component={Home} />
				<Route path="/About" component={About} />
				<Route path="/Service" component={Service} />
				<Route path="/" component={Footer} />
			</div>
		</Router>
	);
};

export default Root;

