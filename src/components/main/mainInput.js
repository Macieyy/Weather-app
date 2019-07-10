import React from "react";
import { WiCloudDown } from "react-icons/wi";
import { IoIosAdd } from "react-icons/io";
export default class MainInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    onLocationNameChange(e) {
        this.setState({ locationName: e.target.value })
    }

    onSelectCity() {
        const { locationName } = this.state;
        const { eventEmitter } = this.props;
        eventEmitter.emit("updateWeather", locationName);
    }

    render() {

        return (
            <div className="input-group mb-4">
                <input type="text" className="form-control" placeholder="Select location" onChange={this.onLocationNameChange.bind(this)} />
                <div className="input-group-append">
                    <button className="btn text-white d-none d-md-inline custom-button" onClick={this.onSelectCity.bind(this)} type="button">Get Weather</button>
                    <button className="btn text-white d-none d-md-inline rounded-right custom-button" type="button">Add to profile</button>

                    <button className="btn text-white d-md-none custom-button" onClick={this.onSelectCity.bind(this)} type="button"><WiCloudDown size="21px" /></button>
                    <button className="btn text-white d-md-none custom-button" type="button"><IoIosAdd size="21px" /></button>
                </div>
            </div>
        );
    }
}