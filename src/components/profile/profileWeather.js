import React from "react";
import Sun from "../../resources/sun.svg"
import Expand from "../../resources/expand.svg"
import Exit from "../../resources/Cross.svg"
import Location from "../../resources/loc.svg"
import Humidity from "../../resources/humidity.svg"
import Temp from "../../resources/temp.svg"
export default class ProfileWeather extends React.Component {

    render() {
        return (
            <div className="column border border-white text-white mt-3">
                <div className="d-flex flex-row justify-content-end border-bottom profile-top-edge">
                    <div className="p-2"><img src={Expand} alt="" id="icon" /></div>
                    <div className="p-2"><img src={Exit} alt="" id="icon" /></div>
                </div>
                <div className="d-flex flex-row pt-2 ">
                    <div className="col-7 pl-4 ml-md-3  profile-weather-container">
                        <div className="row">
                            <div>
                                <p className="d-none d-md-flex">Location:&#160;</p><img className="d-md-none pr-2"
                                    src={Location} alt="" />
                            </div>
                            <div>
                                <p>Warsaw</p>
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <p className="d-none d-md-flex">Humidity:&#160;</p><img className="d-md-none pr-2"
                                    src={Humidity} alt="" />
                            </div>
                            <div>
                                <p>60 %</p>
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <p className="d-none d-md-flex">Temperature:&#160;</p><img className="d-md-none pr-2"
                                    src={Temp} alt=""/>
                            </div>
                            <div>
                                <p>28°C</p>
                            </div>
                        </div>
                        <div className="row d-none d-md-flex">
                            <div>
                                <p>Conditions:&#160;</p>
                            </div>
                            <div>
                                <p>Sunny</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 column d-flex justify-content-center profile-weather-icon">
                        <img src={Sun} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}
