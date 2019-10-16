import React from 'react'
import Statistic from './Statistic'

 
const Statistics = ({allClicks}) => {
  const good = allClicks.filter(function(value, index) {return value === 1;}).length
  const neutral = allClicks.filter(function(value, index) {return value === 0;}).length
  const bad = allClicks.filter(function(value, index) {return value === -1;}).length
  const average = allClicks.length < 1? '' : allClicks.reduce( (a,b) => a + b) / allClicks.length
  const positive = allClicks.length < 1? '' : 100*(good/allClicks.length) + " %"

  if (allClicks.length < 1) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
     </div>
    )
  }

  return (
    <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={allClicks.length} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positive} />
          </tbody>
        </table>
    </>
  )
}

export default Statistics;

