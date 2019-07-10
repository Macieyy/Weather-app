import React from "react";
export default class ForecastWeather extends React.Component {

    render() {
        const { day } = this.props;
        if (!day) return null;
        return (
            <div className="col-3 d-flex flex-column align-items-center pt-3">
                <div className="text-center next-day-data d-none d-md-inline">{day.date}</div>
                <div className="text-center next-day-temperature d-flex flex-row">
                    {day.day.maxtemp_c}°C
                </div>
                <img src={day.day.condition.icon} className="next-day-icon" alt="" />
                <p className="text-center next-day-conditions">{day.day.condition.text}</p>
            </div>
        );
    }
}
