import React from "react";
import MainInput from "./mainInput";
import CurrentWeather from "./currentWeather";
import ForecastWeather from "./forecastWeather";

export default class MainSection extends React.Component {
    render() {
        const { forecastdays } = this.props;
        return (
            <div className="col-xl-6 text-white" id="main">
                <h1 className="text-center pt-4">Weather Finder</h1>
                <div className="col-12 mt-4">
                    <MainInput {...this.props} />
                    <CurrentWeather {...this.props} />
                    <div className="col-12 mt-1 d-flex flex-row border-top">
                        {forecastdays && forecastdays.map((day, idx) => {
                            return <ForecastWeather day={day} key={idx} />
                        })}</div>
                </div>
            </div>
        );
    }
}
