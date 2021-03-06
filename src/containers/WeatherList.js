import React from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';




class WeatherList extends React.Component {

  renderWeather(cityData) {
    const name  = cityData.city.name;
    const temps = cityData.list.map((weather) => weather.main.temp);
    const humidities = cityData.list.map((weather) => weather.main.humidity);
    const pressures = cityData.list.map((weather) => weather.main.pressure);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>
          <GoogleMap lat={lat} lon={lon}/>
        </td>
        <td>
          <Chart data={temps} color="red" unit={"K"}/>
        </td>
        <td>
          <Chart data={pressures} color="yellow" unit={"hPa"}/>
        </td>
        <td>
          <Chart data={humidities} color="blue" unit={"%"}/>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature (K)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>

      </table>
    )
  }
}

function mapStateToprops({weather}) {
  return {
    weather
  }
}

export default connect(mapStateToprops)(WeatherList);