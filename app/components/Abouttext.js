import React from 'react';
import Header from '../components/Header.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Title from '../components/Title.js';


let defaultbanner = "http://via.placeholder.com/1220x100";
let defaulttitle = "About MyAPP";
let aboutimage = "http://via.placeholder.com/520x300";
let aboutcontent = "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.";


class Aboutcontent extends React.Component {
    render() {
        return (
            <section className="about-main section-gap">
                <div className="wrapper">
                    <div>
                        <Title defaulttitle={defaulttitle} />
                        <div className="dt about-main-content">
                            <div className="dtc"><img src={aboutimage} /></div>
                            <div className="dtc">{aboutcontent}</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default Aboutcontent;


