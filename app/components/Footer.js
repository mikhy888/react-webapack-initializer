import React from 'react';
import img from '../assets/images/react_logo_512x512.png';
import { Link, Switch } from 'react-router-dom';

const Footer = () => (
  <footer>
    <header className="header">
      <div className="wrapper">
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
  </footer>
);


export default Footer;
