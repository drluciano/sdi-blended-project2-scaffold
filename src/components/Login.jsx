import {useContext} from 'react';
import {UserContext} from '../context/UserContext.jsx';
import {UserPlus} from 'lucide-react';
import CreateUserModal from './CreateUserModal.jsx';
import UserCard from './UserCard.jsx';

const Login = () => {
    const {currentUser, users, setUsers} = useContext(UserContext);

    const userListChecker = () => {
        if (users.length === 0) {
            return (
                <>
                    <div>
                        <h1>No users found. Please create a user below.</h1>
                    </div>
                </>
            );
        } else if (users.length > 0) {
            return (
                <>
                    <div className={'flex flex-row gap-2'}>
                        {users.map((user, index) => (
                            <UserCard user={user} key={index}/>
                        ))}
                    </div>
                </>
            );
        }
    };

    return (
        <>
            <div className={'flex flex-col items-center justify-center h-full'}>
                {userListChecker()}
                <div className={'divider'}></div>
                <button className="btn btn-neutral"
                        onClick={() => document.getElementById('create_user_modal').showModal()}>
                    <UserPlus/> Create User
                </button>
                <CreateUserModal/>
            </div>
        </>
    );
};

export default Login;