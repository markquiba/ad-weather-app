import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CityWeather from './components/CityWeather';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Route path="/" exact component={App} />
    <Route path="/weather/:id" component={CityWeather} />
  </Router>,
  document.getElementById('root')
);
