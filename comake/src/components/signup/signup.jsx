import React from 'react';
import styled from 'styled-components';

function Signup(props){
    const { onChange, newUser, onSubmit, signUpErrors } = props
    return(
        <SignupStyle>
            <h1>Comake</h1>
            <h3>Join us!</h3>
            <div className="errors">
                <p>{signUpErrors.username}</p>
                <p>{signUpErrors.password}</p>
                <p>{signUpErrors.confirmPassword}</p>
                <p>{signUpErrors.zip}</p>
            </div>
            <form>
                <input name="username" type="text" placeholder="username" value={newUser.username} onChange={onChange}/>
                <input name="password" type="password" placeholder="password" value={newUser.password} onChange={onChange}/>
                <input name="confirmPassword" type="password" placeholder="confirm your password" value={newUser.confirmPassword} onChange={onChange}/>
                <input name="zip" type="text" placeholder="Zip Code" value={newUser.zip} onChange={onChange}/>
                <button onClick={onSubmit}>Join</button>
            </form>
        </SignupStyle>
    )
}
export default Signup

//Style components ------------------------------

const SignupStyle = styled.div`
  background-image: radial-gradient(circle at top right, #27A5E9, transparent 30%),
                    radial-gradient(circle at right, #EB52A9, transparent 40%),
                    radial-gradient(circle at bottom right,#FFB892, transparent 35%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  h1{
      margin: 0;
      padding: 4%;
      padding-bottom: 0;
      font-size: 300%;
      font-family: 'sarabun', sans-serif;
      font-weight: bold;
      font-style: italic;
  }
  h3 {
    color: black;
    font-size: 200%;
    margin: 0;
    padding: 5%;
  }
  form {
    padding: 10%;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form input {
    margin: 3%;
    border: 2px solid black;
    border-radius: 50px;
    padding: 2%;
  }
  form button {
    margin: 15%;
    border: 2px solid black;
    border-radius: 75px;
    padding: 3% 70%;
    background-color: black;
    color: white;
    font-size: 100%;
    font-family: 'Open Sans', sans-serif;
  }
   form button:hover{
       border-color:  black;
       background-color: white;
       color: black;
   }

   .errors{
       color: red;
   }

   @media only screen and (max-width: 600px){
    background-image: radial-gradient(circle at bottom left, #27A5E9, transparent 30%),
                    radial-gradient(circle at bottom, #EB52A9, transparent 40%),
                    radial-gradient(circle at bottom right,#FFB892, transparent 35%);
   }
`;