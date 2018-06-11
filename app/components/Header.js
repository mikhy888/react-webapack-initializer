import React from 'react';
import img from '../assets/images/react_logo_512x512.png';
import { Link, Switch } from 'react-router-dom';
import About from '../components/About.js';

const Header = () => (
  <div>
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <img
            className="image"
            height="40"
            width="40"
            src={img}
            alt="React"
          />
          <h2 id="heading" className="logo-text">myApp</h2>
        </div>

        <div className="nav">
          <ul>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Service'>Services</Link></li>
            <li><Link to=''>Products</Link></li>
            <li><Link to=''>Contact</Link></li>
          </ul>
        </div>
      </div>
    </header>
  </div>
);


export default Header;
