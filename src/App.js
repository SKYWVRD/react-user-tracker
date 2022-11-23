import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/forms/UserForm";
import Users from "./components/users/Users";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };

  return (
    <div className="App">
      <UserForm addUsers={addUserHandler} />
      <Users userList={users} />
    </div>
  );
}

export default App;
