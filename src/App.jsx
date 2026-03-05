import './App.css';
import {Route, Routes, useNavigate} from 'react-router';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';
import Loading from './components/Loading.jsx';
import {UserContext} from './context/UserContext.jsx';
import {useEffect, useState} from 'react';
import {PlanContext} from './context/PlanContext.jsx';
import CreatePlan from './components/CreatePlan.jsx';

function App() {
    const existingUsers = JSON.parse(localStorage.getItem('users')) ?? [];
    const [users, setUsers] = useState(existingUsers);
    const loggedInUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const [currentUser, setCurrentUser] = useState(loggedInUser);
    const navigate = useNavigate();
    const [plans, setPlans] = useState([]);
    const [plan, setPlan] = useState(null);

    useEffect(() => {
        if (!currentUser) {
            navigate('/');
        }
    }, []);

    return (
        <>
            <UserContext.Provider value={{currentUser, setCurrentUser, users, setUsers}}>
                <PlanContext.Provider value={{plans, setPlans, plan, setPlan}}>
                    <div className={'flex flex-col h-screen'}>
                        <Navbar/>
                        <div className={'p-10 flex-grow'}>
                            <Routes>
                                <Route path={'/'} element={<Loading/>}/>
                                <Route path={'login'} element={<Login/>}/>
                                <Route path={'home'} element={<Home/>}/>
                                <Route path={'create-plan'} element={<CreatePlan/>}/>
                            </Routes>
                        </div>
                    </div>
                </PlanContext.Provider>
            </UserContext.Provider>
        </>
    );
}

export default App;
