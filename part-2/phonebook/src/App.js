
//  **************   Exercise - 2.8   ************   The Phonebook step 2


import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: 0}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addNewContact = (event) => {
    event.preventDefault()

    console.log(event)
    console.log(event.target)

    // creating a new object
    const newContact = {
      name: newName,
      number: newNumber
    }
    
    const doExist = persons.some( person => (person.name===newContact.name)||(person.number===newContact.number))                                                                                                    

    if(doExist) {
      alert(`${newContact.name} is already added to the Phonebook`)
    }
    else {
      const updatedContactList = persons.concat(newContact)  // using spread operator here
      setPersons(updatedContactList);
    }
      setNewName('')
      setNewNumber('')
  }

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewContact}>
        <div>
          name: <input value={newName}
                       onChange={handleNewName}
                       placeholder='type here...'
                />
        </div>
        <div>
          number: <input value={newNumber}
                         onChange={handleNewNumber}
                         placeholder='type here...'
                  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <div key={person.name}> {person.name} {person.number} </div>)}
      
      {/* <div>debug: {newName}</div> */}
    </div>
  )
}

export default App





