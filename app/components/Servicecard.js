import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../assets/scss/servicecard.scss';


let cardtitle = "Card Title";
let defaultthumbimage = "http://via.placeholder.com/250x150";
let carddescription = "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."


class Servicecard extends React.Component {
    render() {
        return (
            <section className="service-card">
                <div className="title">{this.props.cardtitle}</div>
                <div className="thumbnail"><img src={this.props.defaultthumbimage} /></div>
                <div className="description">{this.props.carddescription}</div>
            </section>
        );
    }
}


Servicecard.propTypes = {
    cardtitle: PropTypes.any,
    defaultthumbimage: PropTypes.any,
    carddescription: PropTypes.any,
};


Servicecard.defaultProps = {
    cardtitle: cardtitle,
    defaultthumbimage: defaultthumbimage,
    carddescription: carddescription,
};


export default Servicecard;
