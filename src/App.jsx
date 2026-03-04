import './App.css';
import {Route, Routes, useNavigate} from 'react-router';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';
import Loading from './components/Loading.jsx';
import {UserContext} from './context/UserContext.jsx';
import {useEffect, useState} from 'react';

function App() {
    const existingUsers = JSON.parse(localStorage.getItem('users')) ?? [];
    const [users, setUsers] = useState(existingUsers);
    const loggedInUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const [currentUser, setCurrentUser] = useState(loggedInUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate('/');
        }
    }, []);


    return (
        <>
            <UserContext.Provider value={{currentUser, setCurrentUser, users, setUsers}}>
                <div className={'flex flex-col h-screen'}>
                    <Navbar/>
                    <Routes>
                        <Route path={'/'} element={<Login/>}/>
                        <Route path={'loading'} element={<Loading/>}/>
                        <Route path={'home'} element={<Home/>}/>
                    </Routes>
                </div>
            </UserContext.Provider>
        </>
    );
}

export default App;
