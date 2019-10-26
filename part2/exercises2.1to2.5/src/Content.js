import React from 'react'
import Part from './Part'


const Content = ({parts}) => {

const displayParts = () => parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises}/>)

    return (
        <div>
            {displayParts()}
         </div>
    )
  }

export default Content;



