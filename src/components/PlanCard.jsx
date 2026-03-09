import {useContext, useEffect, useState} from 'react';
import {fetchPhoto} from '../api/api.js';
import {useNavigate} from 'react-router';
import {UserContext} from '../context/UserContext.jsx';
import {PlanContext} from '../context/PlanContext.jsx';
import {Trash} from 'lucide-react';

const PlanCard = ({data, setPlanToDelete, setPlanToShare}) => {
    const [photoData, setPhotoData] = useState(null);

    const {currentUser} = useContext(UserContext);
    const {setCurrentPlan} = useContext(PlanContext);

    const navigate = useNavigate();

    useEffect(() => {
        const getDestinationImage = async () => {
            const response = await fetchPhoto(data.details.destination);
            setPhotoData(response.photos[0].src.original);
        };
        getDestinationImage();

    }, []);


    return (
        <>
            <div className="card bg-base-100 shadow-sm w-full">
                <figure>
                    <img
                        src={photoData}
                        alt={data.details.destination}
                        className={'w-full h-75 object-cover'}/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{data.details.name}</h2>
                    <div className={'badge badge-outline'}>{data.details.type}</div>
                    <p className={'text-start'}>You're going
                        to {data.details.destination} from {data.details.startDate} to {data.details.endDate}.</p>
                    <p className={'text-end opacity-50 text-xs'}>Plan created by: {data.details.createdBy}</p>
                    <div className={'flex flex-row justify-between'}>
                        <button className="btn btn-error"
                                onClick={() => {
                                    document.getElementById('my_modal_3').showModal();
                                    setPlanToDelete(data);
                                }}>
                            <Trash/>
                        </button>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={() => {
                                setCurrentPlan(data);
                                navigate(`/details/${data.details.planId}`);
                            }}>View Details
                            </button>
                            <button className={'btn btn-secondary'} onClick={() => {
                                document.getElementById('my_modal_4').showModal();
                                setPlanToShare(data);
                            }}>Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PlanCard;