import React from 'react';
import { Route } from 'react-router-dom';
import Signup from './components/signup/signup'

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Signup/>
      </Route>
    </div>
  );
}

export default App;
