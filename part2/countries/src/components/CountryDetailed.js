import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherInfo from './WeatherInfo'

const CountryDetailed = ({country}) => {

    const displayLanguages = () => country.languages.map(lang => <li key={lang.iso639_1}>{lang.name}</li>)
  
    const [weather, setWeather] = useState(null)

    useEffect(() => {
      const url = 'http://api.weatherstack.com/current?access_key=c9dbb9d357c63d0d30ccd2dd8b911756&query='+country.capital
      axios
        .get(url)
        .then(response => {
          setWeather(response.data)
        })
    }, [country.capital])

    return (
        <>
          <h2>
            {country.name}
          </h2>
          capital {country.capital} <br/>
          population {country.population}
          <h3>
            Languages
          </h3>
          <ul>
              {displayLanguages()}
          </ul>
          <img alt={country.name} src={country.flag} width="200" height="200" />
          <br />

          {(weather === null)?"":<WeatherInfo weather={weather} />}
         </>
    )
  }

export default CountryDetailed;

