import react, { useState } from "react";
import Card from "../Card";

const UserForm = (props) => {
  const [userName, setUsername] = useState("");
  const [userAge, setUserAge] = useState(18);

  const userNameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value.toString());
  };

  const submitUserHandler = (event) => {
    event.preventDefault();
    props.addUsers({
      id: Math.random(),
      username: userName,
      age: userAge,
    });
  };

  return (
    <Card>
      <form onSubmit={submitUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={userNameChangeHandler}></input>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          defaultValue={userAge}
          onChange={ageChangeHandler}
        ></input>
        <button type="submit" className="submit-button">Add User</button>
      </form>
    </Card>
  );
};

export default UserForm;
