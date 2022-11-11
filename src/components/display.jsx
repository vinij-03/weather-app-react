import React from 'react'
import "./display.css"
import weatherProps from "./search"
function display({ props }) {
    console.log(props.props);
    return (
        <div>
            <div className="weather loading">
                <div className="title">
                    Weather in City
                </div>
                <div className="temp">10</div>
                <div className="flex">
                    <img src="https://openweathermap.org/img/wn/04n.png" alt="" className="icon" />
                    <div className="description">Cloudy</div>
                </div>
                <div className="humidity">Humidity: 10%</div>
                <div className="windspeed">Wind: 10</div>

            </div>
        </div>
    )
}

export default display