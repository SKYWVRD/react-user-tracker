import react from 'react'


const User = (props) => {


    return (
        <div>
            {props.userName + " " + props.userAge}
        </div>
    )
}

export default User