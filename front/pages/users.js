import axios from 'axios';
import User from '../components/user';

function UserList({users=[]}) {
    
    return <><h1>List of users</h1>
        {
            users.map(user=> (
                <div key={user.id} >
                    <User user={user} />
                </div>
            ))
        }
    </>
}

UserList.getInitialProps = async ctx => {
    try {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users");
        return {users: data};
    } catch (error) {
        return {errorLoading: true}
    }
}

export default UserList;
