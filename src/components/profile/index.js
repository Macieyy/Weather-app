import React from "react";
import ProfileWeather from "./profileWeather";
export default class ProfileSection extends React.Component {


    render() {
        return (
            <div className="col-xl-4 col-12 p-2 profile">
                <nav className="navbar sticky-top ">
                    <a className="navbar-brand text-white" href="#">Profile</a>
                </nav>
                <div className="overflow-auto scrollbar-light-blue profile-section">
                <ProfileWeather />
                <ProfileWeather />
                <ProfileWeather />
                <ProfileWeather />
                </div>
            </div>
        );
    }
}
