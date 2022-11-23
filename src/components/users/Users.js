import react from "react";
import Card from "../Card";
import User from "./User";
import styles from "./Users.module.css";

const Users = (props) => {
  return (
    <Card>
      <ul className={styles["Users"]}>
        {props.userList.length > 0 ? props.userList.map((user) => (
          <User
            className={styles[""]}
            key={user.id}
            userName={user.username}
            userAge={user.age}
          ></User>
        )) : "No Users Found"}
      </ul>
    </Card>
  );
};

export default Users;
