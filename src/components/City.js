import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class City extends Component {
  render() {
    return (
        <Link to={`/weather/${this.props.city.woeid}`}>
          <div className="city card">
            {this.props.city.title}
          </div>
        </Link>
    )
  }
}

export default City;
