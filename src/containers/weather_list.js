import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
  renderWeather = (cityData) => {
    const name = cityData.city.name;
    const temperatures = cityData.list.map(weather => weather.main.temp-273);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const {lat, lon} = cityData.city.coord;

    return <tr key={name}>
      <td>
        <GoogleMap lat={lat} lng={lon}/>
      </td>
      <td>
        <Chart
          data = {temperatures}
          color={"red"}
          unit={"F"}
        />
      </td>
      <td>
        <Chart
          data = {humidity}
          color={"blue"}
          unit={"%"}
        />
      </td>
      <td>
        <Chart
          data = {pressure}
          color={"green"}
          unit={"hPa"}
        />
      </td>
    </tr>
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Humidity (%)</th>
            <th>Pressure (hPa)</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.weather.map(row => {
              return this.renderWeather(row)
            })
          }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}
export default connect(
  mapStateToProps,
)(WeatherList);