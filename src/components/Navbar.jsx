import {useContext} from 'react';
import {UserContext} from '../context/UserContext.jsx';
import {useNavigate} from 'react-router';

const Navbar = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const navigate = useNavigate();

    const renderLinks = () => {
        if (currentUser) {
            return (
                <>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><a onClick={() => {navigate('map');}}>Map</a></li>
                            <li><a>Teams</a></li>
                            <li>
                                <details>
                                    <summary>More</summary>
                                    <ul className="bg-base-300 rounded-t-none p-2">
                                        <li><a>Archive</a></li>
                                        <li><a onClick={() => {
                                            setCurrentUser(null);
                                            localStorage.setItem('currentUser', null);
                                            navigate('/');
                                        }}>Logout</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </>
            );
        }
    };

    return (
        <>
            <div className="navbar bg-base-200 shadow-sm px-4 z-1000">
                <div className="flex-1">
                    <img src={'/logo.png'} alt={'TACPLANNER LOGO'} className={'max-w-50'}/>
                </div>
                {renderLinks()}
            </div>
        </>
    );
};

export default Navbar;