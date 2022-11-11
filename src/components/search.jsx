import React, { useState } from 'react'
import "./search.css"
import display from './display';

function search() {
    const [displayWeather, setDisplayWeather] = useState('');
    let weather = {
        apiKey: "ffffb68da00f73dfb6df6b7dca8fab36",
        fetchWeather: function (city) {
            fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric&appid=" +
                this.apiKey
            )
                .then((response) => response.json())
                .then((data) => setDisplayWeather(data));
        },

        searchCity: function () {
            this.fetchWeather(document.querySelector(".search-input").value);

        }
    }

    function city(e) {
        weather.searchCity();
        if (e.key == "Enter") {
            weather.searchCity();
            // console.log(displayWeather)
        }
    }
    let display = "hiiii";
    <display props={display} />
    return (
        <div className='search-bar'>
            <input className="search-input" onKeyUp={city} type="text" placeholder="City Name" />
            <button className="search-btn" onClick={city}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path><path d="M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z"></path>
                </svg>
            </button>
        </div>
    )
}

export default search
// export  displayWeather
