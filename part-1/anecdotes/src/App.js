


//           Exercise - 1.13 Anecdotes Step 1

import React,{ useState } from 'react'

const Button = (props) => {
  return (
      <button onClick={props.handleClick}> {props.text} </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(Array(anecdotes.length).fill(0));


  // const min = 0;
  // const max = anecdotes.length;
  const handleAnecdotes = () => {
    const randomNumber = Math.floor(
      Math.random() * anecdotes.length /*or (max-min) */
    ) 
    const newSelected = randomNumber
    setSelected(newSelected)
  };

  const handleVoted = () => {
    const copy = [...voted]
    copy[selected] += 1;
    setVoted(copy);
    
    // console.log('The vote for ', anecdotes[selected], ' is ', copy[selected] )
  }

  let mostVoted = Math.max(...voted);   // cause, this will give us the most voted anecdotes
  // console.log(mostVoted);
  let mostVotedIndex = voted.indexOf(mostVoted); // & this will give us the desired index of that most voted anecdotes
  
  return (
    <div>
      <h1> Anecdote of the day </h1>
      {anecdotes[selected]} 
      <br />
      has {voted[selected]} votes
      <br />
      <Button handleClick={handleVoted} text='vote' />
      <Button handleClick={handleAnecdotes} text='next anecdote' />
      <h1> Anecdote with most votes </h1> 
      <br />
      {anecdotes[mostVotedIndex]}
      
    </div>
  )
}

export default App