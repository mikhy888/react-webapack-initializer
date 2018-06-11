import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import servicecontent from '../data/services.json';
import Header from '../components/Header.js';
import Title from '../components/Title.js';
import Bannerinner from '../components/Bannerinner.js';
import Servicecard from '../components/Servicecard.js';



let defaultbanner = "http://via.placeholder.com/1220x250";


class Service extends React.Component {
	render() {
		return (
			<section className="service_main">
				<Bannerinner defaultbanner={defaultbanner} />
				<div className="wrapper">
					<Title defaulttitle="Our Services" />
					<div className="text-center">
						{servicecontent.services.map(ser =>
							<Servicecard cardtitle={ser.title} defaultthumbimage={ser.thumb} carddescription={ser.content} />
						)}
					</div>
				</div>
			</section>
		);
	}

}


export default Service;


