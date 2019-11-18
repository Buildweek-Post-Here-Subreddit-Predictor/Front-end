import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import FormikLogin from './components/Login';

function App() {
  return (
    <div className="App">
      <RegistrationForm/>
      <FormikLogin/>
    </div>
  );
}

export default App;
