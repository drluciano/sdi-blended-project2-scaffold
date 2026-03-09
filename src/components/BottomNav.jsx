import {useContext} from 'react';
import {UserContext} from '../context/UserContext.jsx';
import {PlanContext} from '../context/PlanContext.jsx';
import {ArrowLeft} from 'lucide-react';
import {useNavigate} from 'react-router';

const BottomNav = () => {
    const {currentUser} = useContext(UserContext);
    const {currentPlan} = useContext(PlanContext);
    const navigate = useNavigate();


    if (currentUser && currentPlan) return (
        <>
            <div className={'bg-base-200 shadow-sm px-4 z-1000 fixed w-full bottom-0 navbar'}>
                <button className={'btn btn-primary'} onClick={() => navigate('/home')}><ArrowLeft/>Back to List
                </button>
            </div>
        </>
    );
};

export default BottomNav;