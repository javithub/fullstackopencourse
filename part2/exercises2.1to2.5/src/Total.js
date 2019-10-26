import React from 'react'

const Total = ({parts}) => {

  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      <b>Total of {total} exercices </b>
    </div>
)
}

export default Total;

