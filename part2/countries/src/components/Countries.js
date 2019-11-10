import React, { useState } from 'react';
import Country from './Country'
import CountryDetailed from './CountryDetailed'


const Countries = ({countries}) => {

  const [countryToShow, setCountryToShow] = useState(null);

  const setCountry = (country) => {
    setCountryToShow(country)
  }  

const displayCountries = () => countries.map(country => <Country key={country.alpha3Code} country={country} fnc={setCountry} />)
const displayCountryDetailed = (country) => <CountryDetailed key={country.alpha3Code} country={country} />

  if (countries.length > 1) {
    return (
        <div>
            {displayCountries()}
            {(countryToShow !== null)?<CountryDetailed key={countryToShow.alpha3Code} country={countryToShow} />:"" }
         </div>
    )
  }

    return (
      <div>
          {(countries[0] !== undefined)?displayCountryDetailed(countries[0]):""}
       </div>
  )    

}

export default Countries;