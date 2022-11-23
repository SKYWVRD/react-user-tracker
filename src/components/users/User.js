import react from 'react'
import styles from './User.module.css'


const User = (props) => {


    return (
        <div className={styles["user-card"]}>
            {props.userName + " " + props.userAge}
        </div>
    )
}

export default User