import {useContext, useEffect, useState} from 'react';
import {PlanContext} from '../context/PlanContext.jsx';
import {useParams} from 'react-router';
import {UserContext} from '../context/UserContext.jsx';
import {fetchPhoto} from '../api/api.js';

const PlanDetails = () => {

    const {currentPlan, setCurrentPlan, plans} = useContext(PlanContext);
    const {currentUser} = useContext(UserContext);

    const {planId} = useParams();

    const plan = currentPlan ?? plans?.find((p) => p.details.planId === planId);

    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        if (!plan) return;
        const getDestinationImage = async () => {
            const response = await fetchPhoto(plan.details.destination);
            setPhotoData(response.photos[0].src.original);
        };
        getDestinationImage();
    }, [plan]);

    console.log(photoData);


    if (!plan) return null;

    if (currentUser && photoData) return (
        <div className={'flex flex-col gap-6'}>

            <div style={{backgroundImage: `url(${photoData})`}}
                 className={'bg-center h-50 rounded-box'}>
                <div className={'backdrop-blur-sm h-full w-full rounded-box flex flex-col justify-center items-center'}>
                    <h1 className={'text-3xl uppercase text-white font-bold tracking-[0.75rem] mix-blend-difference'}>{plan.details.destination}</h1>
                </div>
            </div>

            <div className={'card bg-base-100 shadow-sm'}>
                <div className={'card-body gap-3'}>
                    <div className={'flex flex-row items-center gap-3'}>
                        <h2 className={'card-title text-2xl'}>{plan.details.name}</h2>
                        <div className={'badge badge-outline'}>{plan.details.type}</div>
                    </div>
                    <p>Going to <span
                        className={'font-bold'}>{plan.details.destination}</span> from {plan.details.startDate} to {plan.details.endDate}.
                    </p>
                    <p className={'text-xs opacity-50 text-end'}>Plan created by: {plan.details.createdBy}</p>
                </div>
            </div>

            <div className={'flex flex-col gap-2'}>
                <div
                    className={'bg-[url(/shelter.jpg)] bg-center h-25 flex flex-col justify-center items-center rounded-box'}>
                    <h2 className={'text-xl font-bold text-white backdrop-blur-2xl p-2 w-full text-center'}>Shelter</h2>
                </div>
                <div className={'card bg-base-100 shadow-sm'}>
                    <div className={'card-body gap-2'}>
                        <p><span className={'font-bold'}>Shelter Type:</span> {plan.shelter.roof}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Sleeping:</span> {plan.shelter.sleeping}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Climate Control:</span> {plan.shelter.climateControl}
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
                        <p><span className={'font-bold'}>Cooking Method:</span> {plan.kitchen.cookingMethod}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Hydration:</span> {plan.kitchen.hydration}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Food Storage:</span> {plan.kitchen.foodContainer}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Perishables:</span> {plan.kitchen.perishables}</p>
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
                        <p><span className={'font-bold'}>Layers:</span> {plan.apparel.layers}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Footwear:</span> {plan.apparel.footwear}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Hygiene:</span> {plan.apparel.hygiene}</p>
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
                        <p><span className={'font-bold'}>Lighting:</span> {plan.activities.lighting}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Power:</span> {plan.activities.power}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Entertainment:</span> {plan.activities.entertainment}
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
                        <p><span className={'font-bold'}>First Aid:</span> {plan.safety.firstAid}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Navigation:</span> {plan.safety.nav}</p>
                        <div className={'divider my-0'}/>
                        <p><span className={'font-bold'}>Emergency Gear:</span> {plan.safety.emergency}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlanDetails;