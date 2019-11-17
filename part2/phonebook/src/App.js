import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/personService'

const App = () => {
  const [ persons, setPersons] = useState([]) 

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const deletePerson = id => {

    const personToBeDeleted = persons.filter(n => n.id === id)[0]
    const result = window.confirm(`Delete '${personToBeDeleted.name}'?`);

    if (result) {
      personService
        .deletePerson(id)
        .then(returnedPerson => {
          setPersons(persons.filter(n => n.id !== id))
        })
        .catch(error => {
          alert(
            `the person with '${id}' was not found cand couldn't be deleted`
          )
          setPersons(persons.filter(n => n.id !== id))
        })
      }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} />
      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Persons persons={persons} deletePerson={deletePerson} />
    </div>
  )
}

export default App