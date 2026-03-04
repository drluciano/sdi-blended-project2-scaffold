import MapComponent from './Map.jsx';
import {useContext} from 'react';
import {UserContext} from '../context/UserContext.jsx';
import {useNavigate} from 'react-router';


const Home = () => {
    const {currentUser} = useContext(UserContext);
    const navigate = useNavigate();


    if (currentUser) return (
        <>
            <div className={'flex flex-col h-full'}>
                <div className={'flex flex-row flex-2'}>
                    <div className={'w-75'}>

                    </div>
                    <div className={'flex-1'}>
                        <MapComponent/>
                    </div>
                    <div className={'w-75'}>

                    </div>
                </div>
                <div className={'flex-1'}>
                    Test
                </div>
            </div>
        </>
    );
};

export default Home;