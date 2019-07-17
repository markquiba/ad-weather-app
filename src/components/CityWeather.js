import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import '../App.css';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const proxy = 'https://cors-anywhere.herokuapp.com/';

class CityWeather extends Component {
  state = {
    weather_detail: null,
    showLoader: false,
  }

  componentDidMount() {
    this.fetchWeather();
  }

  fetchWeather = async() => {
    this.setState({ showLoader: true });
    await fetch(`${proxy}https://www.metaweather.com/api/location/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(data => this.setState({weather_detail: data, showLoader: false}))
  }

  render() {
    return (
      <div className="City">
        <Container maxWidth="sm">
          {this.state.weather_detail && (
            <div>
              <Link to={'/'} className="back-button">BACK</Link>
              <h2 style={{ textAlign: 'center' }}>
              {this.state.weather_detail.title}, {this.state.weather_detail.parent.title}</h2>
            </div>
          )}
          {this.state.weather_detail && 
          this.state.weather_detail.consolidated_weather.map(item => (
            <div className="weather card" key={item.id}>
              <Grid container spacing={3}>
                <Grid item xs={4} md={4}>
                  <div className="weather-state-name">{item.weather_state_name}</div>
                  <div className="weather-date">{item.applicable_date}</div>
                </Grid>
                <Grid container xs={5} md={6}>
                  <Grid item xs={6}>
                    <div className="weather-temparature">{item.min_temp.toFixed(1)} °C</div>
                    <div className="weather-templabel">Min</div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="weather-temparature">{item.max_temp.toFixed(1)} °C</div>
                    <div className="weather-templabel">Max</div>
                  </Grid>
                </Grid>
                <Grid item xs={3} md={2}>
                  <img height={50} src={`https://www.metaweather.com/static/img/weather/png/64/${item.weather_state_abbr}.png`} />
                </Grid>
              </Grid>
            </div>
          ))}
          <div className="loader">
            { this.state.showLoader && <CircularProgress /> }  
          </div>
        </Container>
      </div>
    )
  }
}

export default CityWeather;
