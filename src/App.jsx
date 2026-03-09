import './App.css';
import {Route, Routes, useNavigate} from 'react-router';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';
import {UserContext} from './context/UserContext.jsx';
import {useEffect, useState} from 'react';
import {PlanContext} from './context/PlanContext.jsx';
import CreatePlan from './components/CreatePlan.jsx';
import PlanDetails from './components/PlanDetails.jsx';
import BottomNav from './components/BottomNav.jsx';

function App() {
    const navigate = useNavigate();

    const existingUsers = JSON.parse(localStorage.getItem('users')) ?? [];
    const [users, setUsers] = useState(existingUsers);

    const loggedInUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const [currentUser, setCurrentUser] = useState(loggedInUser);

    const [currentPlan, setCurrentPlan] = useState(null);

    const existingPlans = JSON.parse(localStorage.getItem(`plans_${currentUser}`)) ?? [];
    const [plans, setPlans] = useState(existingPlans);

    useEffect(() => {
        if (!currentUser) {
            navigate('/');
        }
    }, []);

    useEffect(() => {
        setPlans(JSON.parse(localStorage.getItem(`plans_${currentUser}`)) ?? []);
    }, [localStorage.getItem(`plans_${currentUser}`)]);

    return (
        <>
            <UserContext.Provider value={{currentUser, setCurrentUser, users, setUsers}}>
                <PlanContext.Provider value={{plans, setPlans, currentPlan, setCurrentPlan}}>
                    <div className={'flex flex-col h-screen'}>
                        <Navbar/>
                        <div className={'p-10 mt-10 grow'}>
                            <Routes>
                                <Route path={'/'} element={<Login/>}/>
                                <Route path={'home'} element={<Home/>}/>
                                <Route path={'create-plan'} element={<CreatePlan/>}/>
                                <Route path={'details/:planId'} element={<PlanDetails/>}/>
                            </Routes>
                        </div>
                        <BottomNav/>
                    </div>
                </PlanContext.Provider>
            </UserContext.Provider>
        </>
    );
}

export default App;
