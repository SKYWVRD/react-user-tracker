import react, { useState, useRef } from "react";
import Card from "../Card";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submitUserHandler = (event) => {
    event.preventDefault();
    props.addUsers({
      id: Math.random(),
      username: nameInputRef.current.value,
      age: ageInputRef.current.value,
    });
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  return (
    <Card>
      <form onSubmit={submitUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          ref={nameInputRef}
        ></input>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          ref={ageInputRef}
        ></input>
        <button type="submit" className="submit-button">
          Add User
        </button>
      </form>
    </Card>
  );
};

export default UserForm;
