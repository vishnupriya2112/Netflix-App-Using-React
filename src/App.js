import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signin from './components/Signin';
import Route from './components/Route';

function App() {
  return (
    <div className="App">
      <Route path='/'>
        <LandingPage />
      </Route>
      <Route path='/signin'>
        <Signin />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
    </div>
  );
}

export default App;
