import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Bannerinner from '../components/Bannerinner.js';
import Abouttext from '../components/Abouttext.js';
import Title from '../components/Title.js';

let defaultbanner = "http://via.placeholder.com/1220x250";
let defaulttitle = "Mikhil";


class About extends React.Component {
	render() {
		return (
			<section className="about_main">
				<Bannerinner defaultbanner={defaultbanner} />
				<Abouttext />
			</section>
		);
	}
}


export default About;


