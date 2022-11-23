import React, { useState } from 'react'
import './App.css';
import UserForm from './components/forms/UserForm';
import Users from './components/users/Users';

function App() {

  const [users, setUsers] = useState([])

  const addUserHandler = (newUser) => {
    setUsers(newUser, ...users);
  }

  return (
    <div className="App">
      <UserForm/>
      <Users addUsers={addUserHandler}/>
    </div>
  );
}

export default App;
