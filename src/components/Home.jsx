import {useContext} from 'react';
import {UserContext} from '../context/UserContext.jsx';
import {useNavigate} from 'react-router';
import {BookHeart} from 'lucide-react';
import {PlanContext} from '../context/PlanContext.jsx';


const Home = () => {
    const {currentUser} = useContext(UserContext);
    const {plans} = useContext(PlanContext);
    const navigate = useNavigate();

    const conditionalRenderer = () => {
        if (plans.length === 0) {return <p>Click create plan to get started!</p>;} else {
            return <p>Click create plan to get started, or click on an existing plan to view
                it.</p>;
        }
    };


    if (currentUser) return (
        <>
            <div className={'flex flex-col h-full'}>
                <div className={'flex flex-col text-center'}>
                    <h1 className={'text-3xl font-bold'}>Welcome, (future) happy camper!</h1>
                    {conditionalRenderer()}
                </div>
                <div className={'divider'}/>
                <div className={'flex flex-col'}>
                    <button className={'btn btn-accent self-end'} onClick={() => navigate('/create-plan')}>
                        <BookHeart/> Create
                        New Plan
                    </button>
                </div>
            </div>
        </>
    );
};

export default Home;