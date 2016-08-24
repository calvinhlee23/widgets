import React from "react";

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      temp: ''
    };

    this.getLocationInfo = this.getLocationInfo.bind(this);

  }


  getLocationInfo () {
    navigator.geolocation.getCurrentPosition((success) => {
      this.setState({location: success.coords});
    });
    this.lat = this.state.location.latitude;
    this.longi = this.state.location.longitude;

    let url = `http://api.openweathermap.org/data/2.5/weather?lat=`;
    url += `${this.lat}&lon=${this.longi}`;
    url += `&&APPID=645c5d39c7603f17e23fcaffcea1a3c1`;

    var request = new XMLHttpRequest();
    request.open('GET', url, true);


    request.onreadystatechange = () => {
      if (request.status === 200 && request.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(request.responseText);
        this.setState({location: data.name});
        this.setState({temp: (data.main.temp- 273.15) * 1.8 + 32});
      }
    };
    request.send();

  }

  componentDidMount() {
    this.getLocationInfo();
  }


  render () {
    if (this.location) {
      return (<a>getting info</a>);
    }
    else {

      return (
        <div className = 'Weather'>
        <h1 className = 'title'>Weather</h1>
        <a className = "weather-temp">
        Temperature: {Math.floor(this.state.temp)} F</a>
        <br/>
        <a className = "weather-city">
        Location: {this.state.location}</a>
        </div>
      );
    }
  }
}

export default Weather;
