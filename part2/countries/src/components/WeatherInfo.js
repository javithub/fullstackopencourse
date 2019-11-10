import React, { useState } from 'react';

const WeatherInfo = ({weather}) => {

    return (
        <>
          <h3>
            Weather in {weather.location.name}
          </h3>
        <b>temperature: </b>{weather.current.temperature} Celsius<br/>
        <img alt={weather.current.weather_descriptions[0]} src={weather.current.weather_icons[0]} width="50" height="50" /><br/>
        <b>wind: </b>{weather.current.wind_degree} kph direction {weather.current.wind_dir}<br/>
         </>
    )
  }

export default WeatherInfo;
