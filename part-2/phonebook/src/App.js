
//  **************   Exercise - 2.6   ************   The Phonebook step 1

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addNewName = (event) => {
    event.preventDefault()       // preventing default actions, such as page refresh & re-rendering
    // console.log('hey! i m the event occured ', event.target.value)
    const newPerson = {name: newName}
    setPersons(persons.concat(newPerson))
    console.log(persons)
    setNewName('')
  }

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName}
                       onChange={handleNewName}
                       placeholder='type here...'
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <div key={person.name}> {person.name} </div>)}
      
      {/* <div>debug: {newName}</div> */}
      
    </div>
  )
}

export default App





