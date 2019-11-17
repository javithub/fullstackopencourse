import React from 'react'
import Person from './Person'


const Persons = ({persons, deletePerson}) => {

const displayPersons = () => persons.map(person => <Person key={person.id} name={person.name} number={person.number} deletePerson={() => deletePerson(person.id, person.name)} />)

    return (
        <div>
            {displayPersons()}
         </div>
    )
  }

export default Persons;