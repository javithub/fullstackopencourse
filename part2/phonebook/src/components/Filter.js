import React, { useState } from 'react'
import Persons from './Persons'

const Filter = ({ persons }) => {

  const [ personsFiltered, setPersonsFiltered] = useState([]) 
  const [ searchName, setSearchName ] = useState('')

  const handleSearchChange = (event) => setSearchName(event.target.value)

  const searchByName = (event) => {
    event.preventDefault()
    const arrayFiltered = persons.find(element => element.name.toLowerCase() === searchName.toLowerCase());
    if (arrayFiltered === undefined) setPersonsFiltered([])
    else setPersonsFiltered([].concat(arrayFiltered))
  }

    return (
        <>
          <form onSubmit={searchByName}>
            <div>filter shown with <input value={searchName} onChange={handleSearchChange}/></div>
            <div><button type="submit">search</button></div>
          </form>
          Filtered results:<br/>
          <Persons persons={personsFiltered} />
         </>
    )
  }

export default Filter;

