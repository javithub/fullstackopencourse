import React from 'react'

const Person = ({name, number, deletePerson}) => {

    return (
        <>
            {name} {number} <button onClick={deletePerson}>Delete</button> <br/>
         </>
    )
  }

export default Person;

