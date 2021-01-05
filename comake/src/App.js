import React, { useState } from "react";
import { Route } from "react-router-dom";
//React components------------------------------
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
//Yup form validation----------------------------
import * as yup from "yup";
import signupSchema from "./validation/signUpSchema";
import loginSchema from "./validation/loginSchema";

//initial states for forms
const signup = {
  username: "",
  password: "",
  confirmPassword: "",
  zip: "",
};
const loginInitial = {
  username: "",
  password: "",
};

function App() {
  //state hooks-----------------
  const [newUser, setNewUser] = useState(signup);
  const [signUpErrors, setSignUpErrors] = useState(signup);
  const [login, setLogin] = useState(loginInitial);
  const [loginErrors, setLoginErrors] = useState(loginInitial);

  //changehandlers---------------
  function signupChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    yup
      .reach(signupSchema, name)
      .validate(value)
      .then(() => {
        setSignUpErrors({
          ...signUpErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setSignUpErrors({
          ...signUpErrors,
          [name]: err.errors[0],
        });
      });
    //end yup validation

    setNewUser({ ...newUser, [name]: value });
  }

  function loginChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    yup
      .reach(loginSchema, name)
      .validate(value)
      .then(() => {
        setLoginErrors({ ...loginErrors, [name]: "" });
      })
      .catch((err) => {
        setLoginErrors({ ...loginErrors, [name]: err.errors[0] });
      });

    setLogin({ ...login, [name]: value });
  }

  //submit Handlers---------------
  function signupSubmit(e) {
    e.preventDefault();
    //manual password confirm check because you can't actually do it with yup correctly
    if (newUser.password === newUser.confirmPassword) {
      console.log(newUser);
      console.log("You Signed Up!");
    } else {
      setSignUpErrors({
        ...signUpErrors,
        confirmPassword: "your passwords must match",
      });
    }
  }

  function loginSubmit(e) {
    e.preventDefault();
    console.log("You logged in!");
    console.log(login);
  }
  //-------------------return app
  return (
    <div className="App">
      <Route path="/signup">
        <Signup
          signUpErrors={signUpErrors}
          newUser={newUser}
          onChange={signupChange}
          onSubmit={signupSubmit}
        />
      </Route>
      <Route path="/login">
        <Login
          onChange={loginChange}
          onSubmit={loginSubmit}
          values={login}
          errors={loginErrors}
        />
      </Route>
    </div>
  );
}

export default App;
