import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SimpleSlider from "../components/Homeslider";
import Aboutcontent from "../components/Abouttext";
import Homeservicecard from "../components/Homeservicecard";

class Home extends React.Component {
	render() {
		return (
			<section className="home_main">
				<SimpleSlider />

				<Aboutcontent />

				<Homeservicecard />
			</section >
		);
	}

}


export default Home;

