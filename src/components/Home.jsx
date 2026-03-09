import {useContext, useEffect, useState} from 'react';
import {UserContext} from '../context/UserContext.jsx';
import {useNavigate} from 'react-router';
import {BookHeart} from 'lucide-react';
import PlanCard from './PlanCard.jsx';
import {PlanContext} from '../context/PlanContext.jsx';
import {fetchPhoto} from '../api/api.js';
import Loading from './Loading.jsx';
import DeleteModal from './DeleteModal.jsx';
import ShareModal from './ShareModal.jsx';


const Home = () => {
    const {currentUser} = useContext(UserContext);

    const navigate = useNavigate();

    const {plans, setPlans} = useContext(PlanContext);

    const [photoData, setPhotoData] = useState(null);

    const [loading, setLoading] = useState(true);

    const [planToDelete, setPlanToDelete] = useState(null);
    const [planToShare, setPlanToShare] = useState(null);


    useEffect(() => {
        const getDestinationImage = async () => {
            const response = await fetchPhoto('camping mountains');
            const randomPhotoNum = Math.floor(Math.random() * 50) + 1;
            const url = response.photos[randomPhotoNum].src.original;

            const img = new Image();
            img.src = url;
            img.onload = () => {
                setPhotoData(url);
                setLoading(false);
            };
        };
        getDestinationImage();
    }, []);

    const conditionalRenderer = () => {
        if (plans.length === 0) {
            return (
                <>
                    <div style={{backgroundImage: `url(${photoData})`}}
                         className={'flex flex-col justify-center items-center h-200 bg-center bg-cover bg-no-repeat rounded-box'}>
                        <div className={'w-full p-4 backdrop-blur-2xl text-white'}>
                            <h1 className={'text-3xl font-bold '}>Welcome, (future) happy camper!</h1>
                            <p>Click create plan to get started!</p>
                        </div>
                    </div>
                </>);

        } else {
            return (
                <>
                    <div>
                        <h1 className={'text-3xl font-bold'}>Welcome, happy camper!</h1>
                        <p>Click create plan to get started, or click on an existing plan to view
                            it.</p>
                    </div>
                </>
            );

        }
    };

    const handleDelete = (plan) => {
        const filteredPlans = plans.filter((data) => plan.details.planId !== data.details.planId);
        document.getElementById('my_modal_3').close();
        if (filteredPlans.length === 0) {
            localStorage.setItem(`plans_${currentUser}`, JSON.stringify([]));
            setPlans(filteredPlans);
        } else {
            localStorage.setItem(`plans_${currentUser}`, JSON.stringify(filteredPlans));
            setPlans(filteredPlans);
        }
    };

    const handleShare = (plan, selectedUser) => {
        const previousUsersPlans = JSON.parse(localStorage.getItem(`plans_${selectedUser}`)) ?? [];
        const newUserPlans = [...previousUsersPlans, plan];
        localStorage.setItem(`plans_${selectedUser}`, JSON.stringify(newUserPlans));
        document.getElementById('my_modal_4').close();
    };


    const cardRenderer = () => {
        return (
            <div className={'flex flex-row flex-wrap gap-2'}>
                {plans.map((data) => (
                    <PlanCard data={data} key={data.details.planId} setPlanToDelete={setPlanToDelete}
                              setPlanToShare={setPlanToShare}/>
                ))}
            </div>
        );
    };

    if (loading) return <Loading/>;

    if (currentUser) return (
        <>
            <div className={'flex flex-col h-full'}>
                <div className={'flex flex-col text-center gap-5'}>
                    {conditionalRenderer()}
                    {cardRenderer()}
                    <DeleteModal data={planToDelete} handleDelete={() => handleDelete(planToDelete)}/>
                    <ShareModal data={planToShare} handleShare={(plan, selectedUser) => handleShare(plan, selectedUser)}/>
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