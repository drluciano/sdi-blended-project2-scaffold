import {useContext} from 'react';
import {UserContext} from '../context/UserContext.jsx';
import {useNavigate} from 'react-router';

const UserCard = ({user}) => {
    const {setCurrentUser} = useContext(UserContext);
    const navigate = useNavigate();

    const firstChar = user.username.charAt(0).toUpperCase();

    return (
        <>
            <div
                className="avatar avatar-placeholder flex flex-col items-center hover:scale-110 transition-all ease-in-out cursor-pointer"
                onClick={() => {
                    localStorage.setItem('currentUser', JSON.stringify(user.username));
                    setCurrentUser(user.username);
                    navigate('/home');
                }}>
                <div className="bg-neutral text-neutral-content w-24 rounded-full">
                    <span className="text-3xl">{firstChar}</span>
                </div>
                <p>{user.firstName}</p>
            </div>
        </>
    );
};
export default UserCard;