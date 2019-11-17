import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import SuccessMessage from './components/SuccessMessage'
import personService from './services/personService'
import ErrorMessage from './components/ErrorMessage'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [successMessage, setSuccessMessage] = useState(null) 
  const [errorMessage, setErrorMessage] = useState(null) 

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const deletePerson = (id, name) => {

    const result = window.confirm(`Delete '${name}'?`);
    if (result) {
      personService
        .deletePerson(id)
        .then(returnedPerson => {
          setPersons(persons.filter(n => n.id !== id))
        })
        .catch(error => {
          setErrorMessage(
            `Information of '${name}' has already been removed from server`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setPersons(persons.filter(n => n.id !== id))
        })
      }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SuccessMessage message={successMessage} />
      <ErrorMessage message={errorMessage} />
      <Filter persons={persons} />
      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} setSuccessMessage={setSuccessMessage} />
      <h3>Numbers</h3>
      <Persons persons={persons} deletePerson={deletePerson} />
    </div>
  )
}

export default App