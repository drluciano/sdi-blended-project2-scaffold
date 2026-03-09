import {useContext, useEffect, useState} from 'react';
import {PlanContext} from '../context/PlanContext.jsx';
import {useParams} from 'react-router';
import {UserContext} from '../context/UserContext.jsx';
import {fetchPhoto} from '../api/api.js';

const PlanDetails = () => {

    const {currentPlan, setCurrentPlan} = useContext(PlanContext);
    const {currentUser} = useContext(UserContext);

    const {planId} = useParams();

    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        const getDestinationImage = async () => {
            const response = await fetchPhoto(currentPlan.details.destination);
            setPhotoData(response.photos[0].src.original);
        };
        getDestinationImage();
    }, []);

    console.log(photoData);


    if (currentUser && photoData) return (
        <div className={'flex flex-col gap-6'}>

            <div style={{backgroundImage: `url(${photoData})`}}
                 className={'bg-center h-50 rounded-box'}>
                <div className={'backdrop-blur-sm h-full w-full rounded-box flex flex-col justify-center items-center'}>
                    <h1 className={'text-3xl uppercase text-white font-bold tracking-[0.75rem] mix-blend-difference'}>{currentPlan.details.destination}</h1>
                </div>
            </div>

            <div className={'card bg-base-100 shadow-sm'}>
                <div className={'card-body gap-3'}>
                    <div className={'flex flex-row items-center gap-3'}>
                        <h2 className={'card-title text-2xl'}>{currentPlan.details.name}</h2>
                        <div className={'badge badge-outline'}>{currentPlan.details.type}</div>
                    </div>
                    <p>Going to <span
                        className={'font-bold'}>{currentPlan.details.destination}</span> from {currentPlan.details.startDate} to {currentPlan.details.endDate}.
                    </p>
                    <p className={'text-xs opacity-50 text-end'}>Plan created by: {currentPlan.details.createdBy}</p>
                </div>
            </div>

            <div className={'flex flex-col gap-2'}>
                <div
                    className={'bg-[url(/shelter.jpg)] bg-center h-25 flex flex-col justify-center items-center rounded-box'}>
                    <h2 className={'text-xl font-bold text-white backdrop-blur-2xl p-2 w-full text-center'}>Shelter</h2>
                </div>
                <div className={'card bg-base-100 shadow-sm'}>
                    <div className={'card-body gap-2'}>
                        <p><span className={'font-bold'}>Shelter Type:</span> {currentPlan.shelter.roof}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Sleeping:</span> {currentPlan.shelter.sleeping}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Climate Control:</span> {currentPlan.shelter.climateControl}
                        </p>
                    </div>
                </div>
            </div>

            <div className={'flex flex-col gap-2'}>
                <div
                    className={'bg-[url(/food.jpg)] bg-center h-25 flex flex-col justify-center items-center rounded-box'}>
                    <h2 className={'text-xl font-bold text-white backdrop-blur-2xl p-2 w-full text-center'}>Cooking,
                        Hydration & Food</h2>
                </div>
                <div className={'card bg-base-100 shadow-sm'}>
                    <div className={'card-body gap-2'}>
                        <p><span className={'font-bold'}>Cooking Method:</span> {currentPlan.kitchen.cookingMethod}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Hydration:</span> {currentPlan.kitchen.hydration}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Food Storage:</span> {currentPlan.kitchen.foodContainer}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Perishables:</span> {currentPlan.kitchen.perishables}</p>
                    </div>
                </div>
            </div>

            <div className={'flex flex-col gap-2'}>
                <div
                    className={'bg-[url(/layers.jpg)] bg-center h-25 flex flex-col justify-center items-center rounded-box'}>
                    <h2 className={'text-xl font-bold text-white backdrop-blur-2xl p-2 w-full text-center'}>Apparel &
                        Hygiene</h2>
                </div>
                <div className={'card bg-base-100 shadow-sm'}>
                    <div className={'card-body gap-2'}>
                        <p><span className={'font-bold'}>Layers:</span> {currentPlan.apparel.layers}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Footwear:</span> {currentPlan.apparel.footwear}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Hygiene:</span> {currentPlan.apparel.hygiene}</p>
                    </div>
                </div>
            </div>

            <div className={'flex flex-col gap-2'}>
                <div
                    className={'bg-[url(/entertainment.jpg)] bg-bottom h-25 flex flex-col justify-center items-center rounded-box'}>
                    <h2 className={'text-xl font-bold text-white backdrop-blur-2xl p-2 w-full text-center'}>Lighting,
                        Power & Entertainment</h2>
                </div>
                <div className={'card bg-base-100 shadow-sm'}>
                    <div className={'card-body gap-2'}>
                        <p><span className={'font-bold'}>Lighting:</span> {currentPlan.activities.lighting}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Power:</span> {currentPlan.activities.power}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Entertainment:</span> {currentPlan.activities.entertainment}
                        </p>
                    </div>
                </div>
            </div>

            <div className={'flex flex-col gap-2'}>
                <div
                    className={'bg-[url(/safety.jpg)] bg-center h-25 flex flex-col justify-center items-center rounded-box'}>
                    <h2 className={'text-xl font-bold text-white backdrop-blur-2xl p-2 w-full text-center'}>First Aid,
                        Navigation & Safety</h2>
                </div>
                <div className={'card bg-base-100 shadow-sm'}>
                    <div className={'card-body gap-2'}>
                        <p><span className={'font-bold'}>First Aid:</span> {currentPlan.safety.firstAid}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Navigation:</span> {currentPlan.safety.nav}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Emergency Gear:</span> {currentPlan.safety.emergency}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlanDetails;