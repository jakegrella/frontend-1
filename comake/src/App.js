import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Signup from './components/signup/signup'

//initial states for forms
const signup = {
  username: "",
  password: "",
  confirmPassword: "",
  zip: ""
}

function App() {
  //state hooks-----------------
  const [newUser, setNewUser] = useState(signup)

  //changehandlers---------------
  function signupChange(e){
    const name = e.target.name
    const value = e.target.value
    setNewUser({...newUser, [name]: value})
  }

  //submit Handlers---------------
  function signupSubmit(e){
    e.preventDefault()
    console.log(newUser)
    console.log('You Signed Up!')
  }

  return (
    <div className="App">
      <Route path="/">
        <Signup newUser={newUser} onChange={signupChange} onSubmit={signupSubmit}/>
      </Route>
    </div>
  );
}

export default App;
