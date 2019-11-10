import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchName, setSearchName] = useState('')
  const [countriesFiltered, setCountriesFiltered] = useState([]) 

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearchChange = (event) => setSearchName(event.target.value)

  const searchByName = (event) => {
    event.preventDefault()
    const arrayFiltered = countries.filter(element => 
      element.name.toLowerCase().includes(searchName.toLowerCase()
      )
    );
    if (arrayFiltered === undefined) setCountriesFiltered([])
    else {
      setCountriesFiltered([].concat(arrayFiltered))
    }
  }

  return (
    <div>
      <form onSubmit={searchByName}>
          <div>find countries <input value={searchName} onChange={handleSearchChange}/></div>
          {/*<div><button type="submit">search</button></div> */ }
      </form>
    {(countriesFiltered.length < 10)?
        <Countries countries={countriesFiltered} />
      :
       "Too many matches, specify another filter"
     }
    </div>
  )
}

export default App