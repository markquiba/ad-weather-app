import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';
import Title from './components/Title';
import LocationSearch from './components/LocationSearch';
import City from './components/City';

// MetaWeather api does not allow CORS, this proxy adds CORS headers to a request
const proxy = 'https://cors-anywhere.herokuapp.com/';

class App extends Component {
  state = {
    cities: [],
    showLoader: false,
  }

  fetchLocation = async(e) => {
    this.setState({ showLoader: true });
    e.preventDefault();
    await fetch(`${proxy}https://www.metaweather.com/api/location/search/?query=${e.target.value}`)
    .then(response => response.json())
    .then(data => this.setState({cities: data, showLoader: false}));
  }

  render() {
    const cities = this.state.cities.map(city => (
      <City key={city.woeid} city={city} />
    ));
    return (
      <div className="App">
        <CssBaseline />
        <Container maxWidth="sm">
          <Title name="Weather App" />
          <LocationSearch fetchLocation={this.fetchLocation} />
          {cities}
          <div className="loader">
            { this.state.showLoader && <CircularProgress /> }  
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
