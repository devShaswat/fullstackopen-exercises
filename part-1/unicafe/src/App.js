



//   ########################### Exercise - 1.6 to 1.14 #######################


// import React, {useState} from 'react'

// const Button = ({handleClick, text}) => (
//   <button onClick={handleClick}> {text} </button>
// )

// const StatisticLine = (props) => {
//   return (
//     <div>
//       <p> {props.text} {props.value} </p>
//     </div>
//   )
// }

// const Statistics = (props) => {
//   if(props.good===0 && props.bad===0 && props.neutral===0){
//     return (
//       <>
//         <h2> statistics </h2>
//         <p> No feedback given </p>
//       </>
//     )
//   }
//   return (
//     <>
//       <StatisticLine text="good" value={props.good} />
//       <StatisticLine text="neutral" value={props.neutral} />
//       <StatisticLine text="bad" value={props.bad} />
//       <StatisticLine text="all" value={props.all} />
//       <StatisticLine text="average" value={props.average} />
//       <StatisticLine text="positive" value={props.positive} />
      
//     </> 
//   )
// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const [all, setTotal] = useState(0)
//   const [average, setAverage] = useState(0)
//   const [positive, setPositive] = useState(0)

//   const handleGood = () => {
//     const updated = good+1;
//     setGood(updated)
//     setTotal(updated + neutral + bad)
//     setAverage(((updated*1)+bad*(-1))/(updated + neutral + bad));
//     setPositive((updated/(updated + neutral + bad))*100)
//   };

//   const handleNeutral = () => {
//     const updated = neutral+1;
//     setNeutral(updated)
//     setTotal(good+bad+updated)
//     // setPositive((updated/(updated + neutral + bad))*100)
//   };

//   const handleBad = () => {
//     const updated = bad+1;
//     setBad(updated)
//     setTotal(good+updated+neutral)
//     setAverage((good+updated*(-1))/(updated + neutral + good))
//     // setPositive((updated/(updated + neutral + bad))*100)
//   };
  
//   return (
//     <div>
//       <h1>give feedback</h1>
//       <Button handleClick={handleGood} text='good' />
//       <Button handleClick={handleNeutral} text='neutral' />
//       <Button handleClick={handleBad} text='bad' />
//       <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive} />
//     </div>
//   )
// }

// export default App








//  ************* Exercise - 1.11 to 1.14




import React, {useState} from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}> {text} </button>
)

const StatisticLine = (props) => {
  if(props.text==="pos  itive"){
    return(
      <tbody>
        <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
        <td>%</td>
        </tr>
      </tbody>
    )
  }
  return (
    <tbody>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </tbody>   
  )
}

const Statistics = (props) => {
  const all = props.good + props.bad + props.neutral;
  const average = (props.good - props.bad) / all;
  const positive = (props.good/all) * 100 + ' %';  

  if(props.good===0 && props.bad===0 && props.neutral===0){
    return (
      <>
        <h2> Statistics </h2>
        <p> No feedback given </p>
      </>
    )
  }
  return (
    <>
      <h2>Statistics</h2>
      <table >
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={all} />  
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </table>
    </> 
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  /*
  const [all, setTotal] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  */

  const handleGood = () => {
    const updated = good+1;
    setGood(updated)
    // setTotal(updated + neutral + bad)
    // setAverage((updated*1 + bad*(-1))/(updated + neutral + bad));
    // setPositive((updated/(updated + neutral + bad))*100)
  };

  const handleNeutral = () => {
    const updated = neutral+1;
    setNeutral(updated)
    // setTotal(good+bad+updated)
    // setAverage((good*1 + bad*(-1))/(good+updated+bad))
    // setPositive((updated/(updated + neutral + bad))*100)
  };

  const handleBad = () => {
    const updated = bad+1;
    setBad(updated)
    // setTotal(good+updated+neutral)
    // setAverage((updated*(-1) + good*1)/(updated + neutral + good))
    // setPositive((updated/(updated + neutral + bad))*100)
  };
  
  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' /> 
      <Statistics good={good} bad={bad} neutral={neutral} /> 
    </>
  )
}

export default App





