import React from 'react'
import Person from './Person'


const Persons = ({persons}) => {

const displayPersons = () => persons.map(person => <Person key={person.id} name={person.name} number={person.number} />)

    return (
        <div>
            {displayPersons()}
         </div>
    )
  }

export default Persons;



