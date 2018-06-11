import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';


class Bannerinner extends React.Component {
  render() {
    return (
      <section>
        <div className="inner-banner">
          <img className="img-responsive" src={this.props.defaultbanner} />
        </div>
      </section>
    );
  }
}


Bannerinner.propTypes = {
  defaultbanner: PropTypes.any,
};

Bannerinner.defaultProps = {
  defaultbanner: 'http://via.placeholder.com/1220x200'
};



export default Bannerinner;