import react from "react";
import Card from "../Card";
import User from "./User";

const Users = (props) => {
  return (
    <Card>
      <ul>
        {props.userList.map((user) => (
          <User userName={user.username} userAge={user.age}></User>
        ))}
      </ul>
    </Card>
  );
};

export default Users;
