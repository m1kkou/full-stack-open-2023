import { useState } from 'react'


const Statistics = ({good, bad, neutral, positive, all}) => {
  const positives = ((positive/all)*100).toFixed(1) + "%"
  const average = ((good - bad)/all).toFixed(1)
  if (all > 0) {
    return(
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positives} />
          </tbody>
        </table>
      </div>
    )
  }
  return(
    <div>
      <h1>statistics</h1>
      <div>No feedback given</div>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return(
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [positive, setPositive] = useState(0)
  const [all, setAll] = useState(0)

  const setToGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setPositive(positive + 1)
  }
  const setToNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const setToBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} positive={positive}/>
    </div>
  )
}

export default App