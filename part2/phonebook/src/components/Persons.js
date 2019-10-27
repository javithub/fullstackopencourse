import React from 'react'
import Person from './Person'


const Persons = ({persons}) => {

const displayPersons = () => persons.map(person => <Person key={person.id} name={person.name} phone={person.phone} />)

    return (
        <div>
            {displayPersons()}
         </div>
    )
  }

export default Persons;



