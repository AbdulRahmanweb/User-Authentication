import React from 'react';
import AuthForm from './AuthContext';
import Navbar from './Components/Navbar';
import AuthButtton from './Components/AuthButton';


function App() {
  return (
    <div>
      <AuthForm>
        <Navbar />
        <AuthButtton />
        <h1>Welcome to the Authentication App</h1>
      </AuthForm>
    </div>
  );
}

export default App;
