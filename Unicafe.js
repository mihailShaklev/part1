import React, {useState} from "react";

const Button = (props) => {

  return(
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}

const StatisticLine = (props) => {

  if (props.text === 'positive'){
    return(
      <tr><td>{props.text}</td><td>{props.value} %</td></tr>
    )
  }
  return(
    <tr><td>{props.text}</td><td>{props.value}</td></tr>
  )

}

const Statistics = ({good, neutral, bad, all, average, positive}) => {

  if(good === 0 && neutral === 0 && bad === 0){
    return(
      <div><p>No feedback given</p></div>
    )
  }

  return(
   <table>
     <tbody>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={all} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='positive' value={positive} />
     </tbody>
  </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const average = (((1*good) + (0*neutral) + (-1*bad))/all)
  const positive = (good/all)*100

  const goodVote = () => {
    setGood(good + 1)
    setAll(all +1)

  }

  const neutralVote = () => {
    setNeutral(neutral + 1)
    setAll(all +1)

  }

  const badVote = () => {
    setBad(bad + 1)
    setAll(all +1)

  }


  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodVote} text='good' />
      <Button handleClick={neutralVote} text='neutral' />
      <Button handleClick={badVote} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={Math.trunc(average*10)/10} positive={Math.trunc(positive*10)/10} />
    </div>
  )
}

export default App;
