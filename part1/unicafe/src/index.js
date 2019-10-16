import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(allClicks.concat(1))
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(allClicks.concat(0))
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(allClicks.concat(-1))
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Statistics allClicks={allClicks} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)