import React, { useState } from 'react'

const PersonForm = ({ persons, setPersons }) => {
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  const addNamePhone = (event) => {
    event.preventDefault()

    const repeatedEntry = persons.find(element => element.name === newName);

    if (repeatedEntry === undefined) {
      const phonebookEntryObject = {
        name: newName,
        phone: newPhone,
        id: persons.length + 1,
      }
    
      setPersons(persons.concat(phonebookEntryObject))
      setNewName('')
      setNewPhone('')      
    }
    else {
      alert(`${newName} is already added to phonebook`)
    }
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

