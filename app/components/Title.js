import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

let titleicon = "http://via.placeholder.com/30x30";


class Title extends React.Component {
    render() {
        return (
            <div className="main-title">
                <div className="dt">
                    <div className="dtc"><img src={titleicon} /></div>
                    <div className="dtc">{this.props.defaulttitle}</div>
                </div>
            </div>
        );
    }
}


export default Title;


