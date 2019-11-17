import React, { useState } from 'react'
import personService from '../services/personService'

const PersonForm = ({ persons, setPersons, setSuccessMessage }) => {
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  const addNamePhone = (event) => {
    event.preventDefault()

    const personFound = persons.filter(n => n.name === newName)
    if (personFound.length === 0) {

        const phonebookEntryObject = {
          name: newName,
          number: newPhone,
          id: persons.length + 1,
        }
      
        personService
        .create(phonebookEntryObject)
        .then(returnedPhonebookEntry => {
          setPersons(persons.concat(returnedPhonebookEntry))
          setNewName('')
          setNewPhone('') 
        })
    } else {
      const result = window.confirm(`'${personFound[0].name}' is already added to the phonebook. Replace the old number with a new one?`);
        if (result) {
        const phonebookEntryObject = {
          name: newName,
          number: newPhone,
          id: personFound[0].id,
        }
      
        personService
        .update(personFound[0].id, phonebookEntryObject)
        .then(returnedPhonebookEntry => {
          setPersons(persons.map(person => person.id !== personFound[0].id ? person : returnedPhonebookEntry))
          setNewName('')
          setNewPhone('') 
        })
      }
    }
    setSuccessMessage(`Added '${newName}'`)
    setTimeout(() => {
      setSuccessMessage(null)
    }, 5000)
  }

  
  const handleNameChange   = (event) => setNewName(event.target.value)
  const handlePhoneChange  = (event) => setNewPhone(event.target.value)

    return (
        <>
          <form onSubmit={addNamePhone}>
            <div>name: <input value={newName} onChange={handleNameChange}/></div>
            <div>number: <input value={newPhone} onChange={handlePhoneChange} /></div>
            <div><button type="submit">add</button></div>
          </form>
         </>
    )
  }

export default PersonForm;

