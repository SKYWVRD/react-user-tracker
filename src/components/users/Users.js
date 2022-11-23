import react from "react";
import Card from "../Card";
import User from "./User";
import styles from "./Users.module.css"

const Users = (props) => {
  return (
    <Card>
      <ul className={styles["Users"]}>
        {props.userList.map((user) => (
          <User className={styles[""]} userName={user.username} userAge={user.age}></User>
        ))}
      </ul>
    </Card>
  );
};

export default Users;
