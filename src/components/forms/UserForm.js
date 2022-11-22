import react from 'react'
import Card from '../Card'

const UserForm = () => {


    return (
        <Card>
            <form>
                <label htmlFor="username">Username</label>
                <input type='text'></input>
                <label htmlFor='age'>Age</label>
                <input type='number' value='18'></input>
                <input type='submit'></input>
            </form>
        </Card>
    )
}

export default UserForm;