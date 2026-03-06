import {useContext, useState} from 'react';
import {UserContext} from '../context/UserContext.jsx';
import {useNavigate} from 'react-router';
import {BookHeart} from 'lucide-react';
import PlanCard from './PlanCard.jsx';


const Home = () => {
    const {currentUser} = useContext(UserContext);

    const navigate = useNavigate();

    const [plans, setPlans] = useState(JSON.parse(localStorage.getItem(`plans_${currentUser}`)) ?? []);

    const plansCopy = [...plans];

    const conditionalRenderer = () => {
        if (plans.length === 0) {return <p>Click create plan to get started!</p>;} else {
            return <p>Click create plan to get started, or click on an existing plan to view
                it.</p>;
        }
    };

    const cardRenderer = () => {
        return (
            <div className={'flex flex-row flex-wrap gap-2'}>
                {plansCopy.map((data, index) => (
                    <PlanCard data={data} key={index} index={index}/>
                ))}
            </div>
        );
    };


    if (currentUser) return (
        <>
            <div className={'flex flex-col h-full'}>
                <div className={'flex flex-col text-center gap-5'}>
                    <h1 className={'text-3xl font-bold'}>Welcome, (future) happy camper!</h1>
                    {conditionalRenderer()}
                    {cardRenderer()}
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