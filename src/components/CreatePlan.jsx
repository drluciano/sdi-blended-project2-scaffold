import {useContext, useState} from 'react';
import {UserContext} from '../context/UserContext.jsx';
import {useNavigate} from 'react-router';

const CreatePlan = () => {
    const {currentUser} = useContext(UserContext);

    const [progress, setProgress] = useState(0);

    const [radio, setRadio] = useState(true);

    const navigate = useNavigate();

    const [details, setDetails] = useState({
        planId: crypto.randomUUID(),
        createdBy: currentUser,
        name: '',
        startDate: '',
        endDate: '',
        type: 'Primitive/Rugged',
        destination: ''
    });

    const [shelter, setShelter] = useState({
        roof: '', sleeping: '', climateControl: ''
    });

    const [kitchen, setKitchen] = useState({
        cookingMethod: '', foodContainer: '', hydration: '', perishables: ''
    });

    const [apparel, setApparel] = useState({
        layers: '', footwear: '', hygiene: ''
    });

    const [activities, setActivities] = useState({
        lighting: '', power: '', entertainment: ''
    });

    const [safety, setSafety] = useState({
        firstAid: '', nav: '', emergency: ''
    });


    const handleFormSubmit = () => {
        const tripDetails = {
            details: {...details},
            shelter: {...shelter},
            kitchen: {...kitchen},
            apparel: {...apparel},
            activities: {...activities},
            safety: {...safety}
        };


        const previousUserPlans = JSON.parse(localStorage.getItem(`plans_${currentUser}`)) ?? [];
        const allUserPlans = [...previousUserPlans, tripDetails];
        localStorage.setItem(`plans_${currentUser}`, JSON.stringify(allUserPlans));

        setProgress(0);

        console.log(`Saved new trip to State and Local Storage.`);

        navigate('/home');
    };


    const createPlanForm = () => {
        if (progress === 0) {
            return (
                <>
                    <div className={'flex flex-col w-full items-center'}>
                        <fieldset
                            className={'flex flex-col gap-5 bg-base-200 border border-base-300 p-4 rounded-box w-96'}>
                            <legend className={'fieldset-legend'}>Starting off with the trip details.</legend>

                            <label className={'label'}>Name the trip:</label>
                            <input className={'input w-md'} name={'tripName'} id={'tripName'}
                                   placeholder={'Input name'}
                                   value={details.name}
                                   onChange={(e) => setDetails(prev => ({...prev, name: e.target.value}))}
                                   required/>

                            <label className={'label'}>Trip Start Date:</label>
                            <label className="input w-md">
                                <span className="label">Choose date</span>
                                <input type="date" name={'startDate'} id={'startDate'}
                                       value={details.startDate}
                                       onChange={(e) => setDetails(prev => ({...prev, startDate: e.target.value}))}/>
                            </label>

                            <label className={'label'}>Trip End Date:</label>
                            <label className="input w-md">
                                <span className="label">Choose date</span>
                                <input type="date" name={'endDate'} id={'endDate'}
                                       value={details.endDate}
                                       onChange={(e) => setDetails(prev => ({...prev, endDate: e.target.value}))}/>
                            </label>

                            <label className={'label'}>Trip Destination:</label>
                            <label className="input w-md">
                                <span className="label">Input destination name</span>
                                <input type="text" name={'location'} id={'location'}
                                       value={details.destination}
                                       onChange={(e) => setDetails(prev => ({...prev, destination: e.target.value}))}/>
                            </label>

                            <label className={'label'}>Trip type:</label>
                            <div className={'flex flex-row gap-4 w-md items-center justify-center'}>
                                <div className={'flex flex-col items-center gap-2'}>
                                    <img src={'/vibes/primitive.jpg'} alt={'Primitive Camping'}
                                         className={'h-60 rounded-box object-cover w-50'}/>
                                    <p>Primitive/Rugged</p>
                                    <input type="radio" name="radio-1" id={'prim'} className="radio"
                                           defaultChecked={radio === true}
                                           onChange={(e) => {
                                               setDetails(prev => ({
                                                   ...prev,
                                                   type: 'Primitive/Rugged'
                                               }));
                                               setRadio(true);
                                           }}/>
                                </div>
                                <div className={'flex flex-col items-center gap-2'}>
                                    <img src={'/vibes/vehicle.jpg'} alt={'Vehicle Camping'}
                                         className={'h-60 rounded-box object-cover w-50'}/>
                                    <p>Sprinter/RV/Vehicle</p>
                                    <input type="radio" name="radio-1" id={'vehicle'} className="radio"
                                           defaultChecked={radio === false}
                                           onChange={(e) => {
                                               setDetails(prev => ({
                                                   ...prev,
                                                   type: 'Sprinter/RV/Vehicle'
                                               }));
                                               setRadio(false);
                                           }}/>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </>
            );
        } else if (progress === 1) {
            return (
                <>
                    <div className={'flex flex-col w-full items-center'}>
                        <fieldset
                            className={'flex flex-col gap-5 bg-base-200 border border-base-300 p-4 rounded-box w-96'}>
                            <legend className={'fieldset-legend'}>Next, let's talk about shelter and climate control.
                            </legend>
                            <img src={'/sleep.jpg'} alt={'Shelter'} className={'w-full h-40 object-cover rounded-box'}/>

                            <label className={'label'}>What kind of shelter will you have?</label>
                            <input className={'input w-md'}
                                   placeholder={'Ex. Tent, RV, Hammock, Cabin'}
                                   name={'shelter'} id={'shelter'}
                                   value={shelter.roof}
                                   onChange={(e) => setShelter(prev => ({...prev, roof: e.target.value}))}
                                   required/>

                            <label className={'label'}>Where will you be sleeping? (Include quantities)</label>
                            <textarea className={'textarea w-md'}
                                      placeholder={'Ex. 2 Pads, 1 Air Mattress, 4 Cots'}
                                      name={'sleeping'} id={'sleeping'}
                                      value={shelter.sleeping}
                                      onChange={(e) => setShelter(prev => ({...prev, sleeping: e.target.value}))}
                                      required/>

                            <label className={'label'}>What do you need to pack climate control?
                                (Include
                                quantities)</label>
                            <textarea className={'textarea w-md'}
                                      name={'climateControl'} id={'climateControl'}
                                      value={shelter.climateControl}
                                      placeholder={'Ex. 4 blankets, 1 electric heater, 1 hand fan'}
                                      onChange={(e) => setShelter(prev => ({...prev, climateControl: e.target.value}))}
                                      required/>
                        </fieldset>
                    </div>
                </>
            );
        } else if (progress === 2) {
            return (
                <>
                    <div className={'flex flex-col w-full items-center'}>
                        <fieldset
                            className={'flex flex-col gap-5 bg-base-200 border border-base-300 p-4 rounded-box w-96'}>
                            <legend className={'fieldset-legend'}>Time to ensure you stay well hydrated and fed.
                            </legend>

                            <img src={'/food.jpg'} alt={'Shelter'} className={'w-full h-40 object-cover rounded-box'}/>


                            <label className={'label'}>How will you cook your food?</label>
                            <input className={'input w-md'}
                                   name={'cooking'} id={'cooking'}
                                   value={kitchen.cookingMethod}
                                   placeholder={'Ex. Stove, campfire, pre-cooked'}
                                   onChange={(e) => setKitchen(prev => ({...prev, cookingMethod: e.target.value}))}
                                   required/>

                            <label className={'label'}>What will you bring for hydration? (Include
                                quantities)</label>
                            <textarea className={'textarea w-md'}
                                      name={'hydration'} id={'hydration'}
                                      value={kitchen.hydration}
                                      placeholder={'Ex. 2 packs of water bottles, 2 water filters, 1 empty jug'}
                                      onChange={(e) => setKitchen(prev => ({...prev, hydration: e.target.value}))}
                                      required/>

                            <label className={'label'}>Where will you store your perishables? (Include
                                quantities)</label>
                            <input className={'input w-md'}
                                   name={'foodStorage'} id={'foodStorage'}
                                   value={kitchen.foodContainer}
                                   placeholder={'Ex. 1 Blue Yeti cooler, 1 Red Igloo Cooler'}
                                   onChange={(e) => setKitchen(prev => ({...prev, foodContainer: e.target.value}))}
                                   required/>

                            <label className={'label'}>What perishables will you bring? (Include
                                quantities)</label>
                            <textarea className={'textarea w-md'}
                                      value={kitchen.perishables}
                                      name={'perishableList'} id={'perishableList'}
                                      placeholder={'Ex. 1 loaf of bread, 1 pack of ham, 1 pack of cheese, 1 pack of hotdogs, etc.'}
                                      onChange={(e) => setKitchen(prev => ({...prev, perishables: e.target.value}))}
                                      required/>

                        </fieldset>
                    </div>
                </>
            );
        } else if (progress === 3) {
            return (
                <>
                    <div className={'flex flex-col w-full items-center'}>
                        <fieldset
                            className={'flex flex-col gap-5 bg-base-200 border border-base-300 p-4 rounded-box w-96'}>
                            <legend className={'fieldset-legend'}>Let's make sure you stay warm/cool and clean.
                            </legend>

                            <img src={'/layers.jpg'} alt={'Shelter'}
                                 className={'w-full h-40 object-cover rounded-box'}/>


                            <label className={'label'}>How will you stay warm/cold?</label>
                            <textarea className={'textarea w-md'}
                                      name={'layers'} id={'layers'}
                                      value={apparel.layers}
                                      placeholder={'Ex. 1 Goretex jacket, 2 hoodies'}
                                      onChange={(e) => setApparel(prev => ({...prev, layers: e.target.value}))}
                                      required/>
                            <label className={'label'}>What footwear will you bring?</label>
                            <input className={'input w-md'}
                                   name={'footwear'} id={'footwear'}
                                   value={apparel.footwear}
                                   placeholder={'Ex. 2 packs of water bottles, 2 water filters, 1 empty jug'}
                                   onChange={(e) => setApparel(prev => ({...prev, footwear: e.target.value}))}
                                   required/>

                            <label className={'label'}>How will you maintain hygiene?</label>
                            <textarea className={'textarea w-md'}
                                      name={'hygiene'} id={'hygiene'}
                                      value={apparel.hygiene}
                                      placeholder={'Ex. Toilet paper, soap, toothbrush, toothpaste, etc. '}
                                      onChange={(e) => setApparel(prev => ({...prev, hygiene: e.target.value}))}
                                      required/>
                        </fieldset>
                    </div>
                </>
            );
        } else if (progress === 4) {
            return (
                <>
                    <div className={'flex flex-col w-full items-center'}>
                        <fieldset
                            className={'flex flex-col gap-5 bg-base-200 border border-base-300 p-4 rounded-box w-96'}>
                            <legend className={'fieldset-legend'}>Stay lit and entertained!
                            </legend>

                            <img src={'/entertainment.jpg'} alt={'Shelter'}
                                 className={'w-full h-40 object-cover rounded-box'}/>

                            <label className={'label text-wrap'}>Will you bring any headlamps, lanterns, or
                                string
                                lights for the
                                "campy" aesthetic? Include quantities.</label>
                            <textarea className={'textarea w-md'}
                                      name={'lighting'} id={'lighting'}
                                      value={activities.lighting}
                                      placeholder={'Ex. 1 headlamp, 2 LED lanterns'}
                                      onChange={(e) => setActivities(prev => ({...prev, lighting: e.target.value}))}
                                      required/>

                            <label className={'label text-wrap'}>What about power banks, solar panels? Or are you just
                                unplugging completely? Include quantities.</label>
                            <textarea className={'textarea w-md'}
                                      placeholder={'Ex. 1 powerbank'}
                                      name={'power'} id={'power'}
                                      value={activities.power}
                                      onChange={(e) => setActivities(prev => ({...prev, power: e.target.value}))}
                                      required/>

                            <label className={'label text-wrap'}>List any entertainment gear.</label>
                            <textarea className={'textarea w-md'}
                                      name={'entertainment'} id={'entertainment'}
                                      value={activities.entertainment}
                                      placeholder={'Ex. 2 fishing rods, 1 tackle bag, kayak, cards against humanity, etc.'}
                                      onChange={(e) => setActivities(prev => ({
                                          ...prev,
                                          entertainment: e.target.value
                                      }))}
                                      required/>

                        </fieldset>
                    </div>
                </>
            );
        } else if (progress === 5) {
            return (
                <>
                    <div className={'flex flex-col w-full items-center'}>
                        <fieldset
                            className={'flex flex-col gap-5 bg-base-200 border border-base-300 p-4 rounded-box w-96'}>
                            <legend className={'fieldset-legend'}>Safety is our #1 priority!
                            </legend>

                            <img src={'/safety.jpg'} alt={'Shelter'}
                                 className={'w-full h-40 object-cover rounded-box'}/>

                            <label className={'label text-wrap'}>What will you bring for first aid?</label>
                            <textarea className={'textarea w-md'}
                                      name={'firstAid'} id={'firstAid'}
                                      value={safety.firstAid}
                                      placeholder={'Ex. 1 first aid kit, 2 ice packs, etc.'}
                                      onChange={(e) => setSafety(prev => ({...prev, firstAid: e.target.value}))}
                                      required/>

                            <label className={'label text-wrap'}>Will you bring anything for navigation?</label>
                            <textarea className={'textarea w-md'}
                                      name={'nav'} id={'nav'}
                                      value={safety.nav}
                                      placeholder={'Ex. 1 GPS, Smartphone, etc.'}
                                      onChange={(e) => setSafety(prev => ({...prev, nav: e.target.value}))}
                                      required/>

                            <label className={'label text-wrap'}>List any miscellaneous emergency gear.</label>
                            <textarea className={'textarea w-md'}
                                      name={'miscEmergency'} id={'miscEmergency'}
                                      value={safety.emergency}
                                      placeholder={'Ex. Bear spray, fire starter, multi-tool, etc.'}
                                      onChange={(e) => setSafety(prev => ({...prev, emergency: e.target.value}))}
                                      required/>

                        </fieldset>
                    </div>
                </>
            );
        } else if (progress === 6) {
            return (
                <>
                    <h1 className={'text-xl text-center'}>Review your plan and submit, or go back to make any
                        changes.</h1>
                    <div className={'divider'}/>
                    <div className={'flex flex-col gap-20'}>
                        <div className={'flex flex-col gap-2'}>
                            <div
                                className={'bg-[url(/entertainment.jpg)] h-25 flex flex-col justify-center items-center rounded-box'}>
                                <h1 className={'text-xl font-bold text-white backdrop-blur-2xl p-2 w-full text-center'}>Trip
                                    Details</h1>
                            </div>
                            <p>Trip Name: {details.name}</p>
                            <>Created by: {details.createdBy}</>
                            <p>Trip Start Date: {details.startDate}</p>
                            <p>Trip End Date: {details.endDate}</p>
                            <p>Tryp Type: {details.type}</p>

                        </div>

                        <div className={'flex flex-col gap-2'}>
                            <div
                                className={'bg-[url(/shelter.jpg)] h-25 flex flex-col justify-center items-center rounded-box'}>
                                <h1 className={'text-xl font-bold text-white backdrop-blur-2xl p-2 w-full text-center'}>Shelter
                                    Details</h1>
                            </div>
                            <p>Shelter Type: {shelter.roof}</p>
                            <p>Sleeping Arrangements: {shelter.sleeping}</p>
                            <p>Climate Control: {shelter.climateControl}</p>

                        </div>

                        <div className={'flex flex-col gap-2'}>
                            <div
                                className={'bg-[url(/food.jpg)] bg-center h-25 flex flex-col justify-center items-center rounded-box'}>
                                <h1 className={'text-xl font-bold text-white backdrop-blur-2xl p-2 w-full text-center'}>Cooking,
                                    Hydration, Perishables</h1>
                            </div>
                            <p>Cooking Methods: {kitchen.cookingMethod}</p>
                            <p>Perishable Storage: {kitchen.foodContainer}</p>
                            <p>Drinks/Hydration: {kitchen.hydration}</p>
                            <p>Perishables: {kitchen.perishables}</p>

                        </div>

                        <div className={'flex flex-col gap-2'}>
                            <div
                                className={'bg-[url(/layers.jpg)] bg-center h-25 flex flex-col justify-center items-center rounded-box'}>
                                <h1 className={'text-xl font-bold text-white backdrop-blur-2xl p-2 w-full text-center'}>Apparel,
                                    Hygiene</h1>
                            </div>
                            <p>Apparel/Layers: {apparel.layers}</p>
                            <p>Footwear: {apparel.footwear}</p>
                            <p>Hygiene Products: {apparel.hygiene}</p>

                        </div>

                        <div className={'flex flex-col gap-2'}>
                            <div
                                className={'bg-[url(/entertainment.jpg)] bg-bottom h-25 flex flex-col justify-center items-center rounded-box'}>
                                <h1 className={'text-xl font-bold text-white backdrop-blur-2xl p-2 w-full text-center'}>Lighting,
                                    Power,
                                    Entertainment</h1>
                            </div>
                            <p>Lighting: {activities.lighting}</p>
                            <p>Power: {activities.power}</p>
                            <p>Entertainment: {activities.entertainment}</p>

                        </div>

                        <div className={'flex flex-col gap-2'}>
                            <div
                                className={'bg-[url(/safety.jpg)] bg-center h-25 flex flex-col justify-center items-center rounded-box'}>
                                <h1 className={'text-xl font-bold text-white backdrop-blur-2xl p-2 w-full text-center'}>First
                                    Aid, Safety, Navigation</h1>
                            </div>
                            <p>Lighting: {safety.firstAid}</p>
                            <p>Navigation: {safety.nav}</p>
                            <p>Emergency: {safety.emergency}</p>

                        </div>

                    </div>
                </>
            );
        }
    };

    const createPlanCta = () => {
        if (progress === 0) {
            return (
                <div className={'flex flex-row w-full justify-end items-center'}>
                    <button className={'btn btn-primary w-[50%]'} onClick={() =>
                        setProgress(progress + 1)}>
                        Next
                    </button>
                </div>
            );
        } else if (progress > 0 && progress < 6) {
            return (
                <div className={'flex flex-row gap-2'}>
                    <button className={'btn btn-primary flex-1'} onClick={() => setProgress(progress - 1)}>
                        Previous
                    </button>
                    <button className={'btn btn-primary flex-1'} onClick={() => setProgress(progress + 1)}>
                        Next
                    </button>
                </div>
            );
        } else if (progress === 6) {
            return (
                <div className={'flex flex-row gap-2'}>
                    <button className={'btn btn-primary flex-1'} onClick={() => setProgress(progress - 1)}>
                        Previous
                    </button>
                    <button className={'btn btn-primary flex-1'} onClick={handleFormSubmit}>
                        Submit
                    </button>
                </div>
            );
        }
    };


    return (
        <>
            <div className={'flex flex-col gap-5 h-full'}>
                <h1 className={'text-3xl font-bold text-center'}>Let's create a new plan.</h1>
                {createPlanForm()}
                <div className={'h-full flex flex-col justify-end'}>
                    <progress className={'progress mb-1'}
                              value={progress}
                              max={'6'}/>
                    {createPlanCta()}
                </div>
            </div>
        </>
    );
};
export default CreatePlan;