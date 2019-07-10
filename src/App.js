import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import MainSection from "./components/main/index"
import ProfileSection from "./components/profile/index";
import Modal from "./components/main/Modal";

import axios from "axios";

const WEATHER_KEY = "1330399f9aab41fdaf2182509191906";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "Rzeszów",
      numForecastDays: 4,
      show: false,
      isEnabled: true
    }
  }

  hideModal = () => {
    this.setState({ show: false });
  };

  updateWeather() {
    const { cityName, numForecastDays } = this.state;
    const URL = `https://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}&q=${cityName}&days=${numForecastDays}`;
    axios.get(URL).then((res) => {
      return res.data;
    }).then((data) => {
      this.setState({temp_c: data.current.temp_c, humidity: data.current.humidity, text: data.current.condition.text, iconURL: data.current.condition.icon, forecastdays: data.forecast.forecastday })
    })
      .catch((err) => {
        if (err)
          this.setState({
            cityName: "",
            numForecastDays: 4,
            location: "",
            temp_c: "",
            humidity: "",
            text: "",
            iconURL: "src=",
            forecastdays: "",
            show: true
          });
      });
  }

  componentDidMount() {
    const { eventEmitter } = this.props;

    this.updateWeather();
    if (!this.cityName) { 
      this.setState({
        isEnabled: false
      });
    }
    eventEmitter.on("updateWeather", (data) => {
      this.setState({ cityName: data }, () => this.updateWeather());
    })
  }

  render() {
    const {isEnabled, cityName, temp_c, humidity, text, iconURL, forecastdays } = this.state;

    return (
      <div className="container-lg-fluid">
        <div className="d-xl-flex flex-xl-row justify-content-center p-md-5">
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <p className="col text-center mt-3">Location does not exists, please type correct location name</p>
          </Modal>
          <MainSection isEnabled={isEnabled} location={cityName} temp_c={temp_c} humidity={humidity} text={text} iconURL={iconURL} eventEmitter={this.props.eventEmitter} forecastdays={forecastdays} />
          <ProfileSection />
        </div>
      </div>
    );
  }
}
