import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Signup from './components/signup/signup'
import * as yup from 'yup';
import signupSchema from './validation/signUpSchema';

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
  const [signUpErrors, setSignUpErrors] = useState(signup)

  //changehandlers---------------
  function signupChange(e){
    const name = e.target.name
    const value = e.target.value

    yup
      .reach(signupSchema, name)
      .validate(value)
      .then(()=>{
        setSignUpErrors({
          ...signUpErrors, [name]: "",
        })
      })
      .catch(err=>{
        setSignUpErrors({
          ...signUpErrors, [name]: err.errors[0],
        })
      })
      //end yup validation

    setNewUser({...newUser, [name]: value})
  }

  //submit Handlers---------------
  function signupSubmit(e){
    e.preventDefault()
    //manual password confirm check because you can't actually do it with yup correctly
    if(newUser.password === newUser.confirmPassword){
    console.log(newUser)
    console.log('You Signed Up!')
    }
    else{
      setSignUpErrors({...signUpErrors, confirmPassword: "your passwords must match"});
    }
  }

  return (
    <div className="App">
      <Route path="/">
        <Signup signUpErrors={signUpErrors} newUser={newUser} onChange={signupChange} onSubmit={signupSubmit}/>
      </Route>
    </div>
  );
}

export default App;
