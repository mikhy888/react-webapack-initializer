import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Servicecard from '../components/Servicecard';
import Title from '../components/Title';

let defaulttitle = "Our Services";

class Homeservicecard extends React.Component {
    render() {
        return (
            <section className="section-gap">
                <div className="wrapper">
                    <Title defaulttitle={defaulttitle} />
                    <Servicecard />
                </div>
            </section>
        );
    }
}


export default Homeservicecard;
