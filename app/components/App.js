import React from 'react';
import img from '../assets/images/react_logo_512x512.png';
import { Link, Switch } from 'react-router-dom';


const App = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <img
            className="image"
            style={{ margin: '0.5em' }}
            height="40"
            width="40"
            src={img}
            alt="React"
          />
          <h2 id="heading" className="logo-text">myApp</h2>
        </div>

        <div className="nav">
          <ul>
            <li><Link to=''>Header</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to=''>Services</Link></li>
            <li><Link to=''>Products</Link></li>
            <li><Link to=''>Contact</Link></li>
          </ul>
        </div>

      </div>
    </header>
  );
};

export default App;
