import {useState} from 'react';

const CreatePlan = () => {
    const [progress, setProgress] = useState(0);

    const [details, setDetails] = useState({
        name, dates: {startDate: '', endDate: ''}, type: 'Primitive/Rugged', destination: ''
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

    const handleFormSubmit = (e) => {


        if (progress < 6) {
        }

    };


    const [trip, setTrip] = useState();


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
                                   placeholder={'Input name'} onChange={(e) => trip.details.name = e.target.value}
                                   required/>

                            <label className={'label'}>Trip Start Date:</label>
                            <label className="input w-md">
                                <span className="label">Choose date</span>
                                <input type="date" name={'startDate'} id={'startDate'}
                                       onChange={(e) => trip.details.dates.startDate = e.target.value}/>
                            </label>

                            <label className={'label'}>Trip End Date:</label>
                            <label className="input w-md">
                                <span className="label">Choose date</span>
                                <input type="date" name={'endDate'} id={'endDate'}
                                       onChange={(e) => trip.details.dates.endDate = e.target.value}/>
                            </label>

                            <label className={'label'}>Trip Destination:</label>
                            <label className="input w-md">
                                <span className="label">Input destination name</span>
                                <input type="text" name={'location'} id={'location'}
                                       onChange={(e) => trip.details.destination = e.target.value}/>
                            </label>

                            <label className={'label'}>Trip type:</label>
                            <div className={'flex flex-row gap-4 w-md items-center justify-center'}>
                                <div className={'flex flex-col items-center gap-2'}>
                                    <img src={'/vibes/primitive.jpg'} alt={'Primitive Camping'}
                                         className={'h-60 rounded-box object-cover w-50'}/>
                                    <p>Primitive/Rugged</p>
                                    <input type="radio" name="radio-1" id={'prim'} className="radio" defaultChecked
                                           onChange={(e) => trip.details.type = 'Primitive/Rugged'}/>
                                </div>
                                <div className={'flex flex-col items-center gap-2'}>
                                    <img src={'/vibes/vehicle.jpg'} alt={'Primitive Camping'}
                                         className={'h-60 rounded-box object-cover w-50'}/>
                                    <p>Sprinter/RV/Vehicle</p>
                                    <input type="radio" name="radio-1" id={'vehicle'} className="radio"
                                           onChange={(e) => trip.details.type = 'Sprinter/RV/Vehicle'}/>
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

                            <label className={'label'}>What kind of shelter will you have?</label>
                            <input className={'input w-md'}
                                   placeholder={'Ex. Tent, RV, Hammock, Cabin'}
                                   name={'shelter'} id={'shelter'}
                                   onChange={(e) => trip.shelter.roof = e.target.value}
                                   required/>

                            <label className={'label'}>Where will you be sleeping? (Include quantities)</label>
                            <textarea className={'textarea w-md'}
                                      placeholder={'Ex. 2 Pads, 1 Air Mattress, 4 Cots'}
                                      name={'sleeping'} id={'sleeping'}
                                      onChange={(e) => trip.shelter.sleeping = e.target.value}
                                      required/>

                            <label className={'label'}>What do you need to pack climate control?
                                (Include
                                quantities)</label>
                            <textarea className={'textarea w-md'}
                                      name={'climateControl'} id={'climateControl'}
                                      placeholder={'Ex. 4 blankets, 1 electric heater, 1 hand fan'}
                                      onChange={(e) => trip.shelter.climateControl = e.target.value}
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

                            <label className={'label'}>How will you cook your food?</label>
                            <input className={'input w-md'}
                                   name={'cooking'} id={'cooking'}
                                   placeholder={'Ex. Stove, campfire, pre-cooked'}
                                   onChange={(e) => trip.kitchen.cookingMethod = e.target.value}
                                   required/>

                            <label className={'label'}>What will you bring for hydration? (Include
                                quantities)</label>
                            <textarea className={'textarea w-md'}
                                      name={'hydration'} id={'hydration'}
                                      placeholder={'Ex. 2 packs of water bottles, 2 water filters, 1 empty jug'}
                                      onChange={(e) => trip.kitchen.hydration = e.target.value}
                                      required/>

                            <label className={'label'}>Where will you store your perishables? (Include
                                quantities)</label>
                            <input className={'input w-md'}
                                   name={'foodStorage'} id={'foodStorage'}
                                   placeholder={'Ex. 1 Blue Yeti cooler, 1 Red Igloo Cooler'}
                                   onChange={(e) => trip.kitchen.foodContainer = e.target.value}
                                   required/>

                            <label className={'label'}>What perishables will you bring? (Include
                                quantities)</label>
                            <textarea className={'textarea w-md'}
                                      name={'perishableList'} id={'perishableList'}
                                      placeholder={'Ex. 1 loaf of bread, 1 pack of ham, 1 pack of cheese, 1 pack of hotdogs, etc.'}
                                      onChange={(e) => trip.kitchen.perishables = e.target.value}
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

                            <label className={'label'}>How will you stay warm/cold?</label>
                            <textarea className={'textarea w-md'}
                                      name={'layers'} id={'layers'}
                                      placeholder={'Ex. 1 Goretex jacket, 2 hoodies'}
                                      onChange={(e) => trip.apparel.layers = e.target.value}
                                      required/>
                            <label className={'label'}>What footwear will you bring?</label>
                            <input className={'input w-md'}
                                   name={'footwear'} id={'footwear'}
                                   placeholder={'Ex. 2 packs of water bottles, 2 water filters, 1 empty jug'}
                                   onChange={(e) => trip.apparel.footwear = e.target.value}
                                   required/>

                            <label className={'label'}>How will you maintain hygiene?</label>
                            <textarea className={'textarea w-md'}
                                      name={'hygiene'} id={'hygiene'}
                                      placeholder={'Ex. Toilet paper, soap, toothbrush, toothpaste, etc. '}
                                      onChange={(e) => trip.apparel.layers = e.target.value}
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

                            <label className={'label text-wrap'}>Will you bring any headlamps, lanterns, or
                                string
                                lights for the
                                "campy" aesthetic? Include quantities.</label>
                            <textarea className={'textarea w-md'}
                                      name={'lighting'} id={'lighting'}
                                      placeholder={'Ex. 1 headlamp, 2 LED lanterns'}
                                      onChange={(e) => trip.activities.lighting = e.target.value}
                                      required/>

                            <label className={'label text-wrap'}>What about power banks, solar panels? Or are you just
                                unplugging completely? Include quantities.</label>
                            <textarea className={'textarea w-md'}
                                      placeholder={'Ex. 1 powerbank'}
                                      name={'power'} id={'power'}
                                      onChange={(e) => trip.activities.power = e.target.value}
                                      required/>

                            <label className={'label text-wrap'}>List any entertainment gear.</label>
                            <textarea className={'textarea w-md'}
                                      name={'entertainment'} id={'entertainment'}
                                      placeholder={'Ex. 2 fishing rods, 1 tackle bag, kayak, cards against humanity, etc.'}
                                      onChange={(e) => trip.activities.entertainment = e.target.value}
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

                            <label className={'label text-wrap'}>What will you bring for first aid?</label>
                            <textarea className={'textarea w-md'}
                                      name={'firstAid'} id={'firstAid'}
                                      placeholder={'Ex. 1 first aid kit, 2 ice packs, etc.'}
                                      onChange={(e) => trip.safety.firstAid = e.target.value}
                                      required/>

                            <label className={'label text-wrap'}>Will you bring anything for navigation?</label>
                            <textarea className={'textarea w-md'}
                                      name={'nav'} id={'nav'}
                                      placeholder={'Ex. 1 GPS, Smartphone, etc.'}
                                      onChange={(e) => trip.safety.nav = e.target.value}
                                      required/>

                            <label className={'label text-wrap'}>List any miscellaneous emergency gear.</label>
                            <textarea className={'textarea w-md'}
                                      name={'miscEmergency'} id={'miscEmergency'}
                                      placeholder={'Ex. Bear spray, fire starter, multi-tool, etc.'}
                                      onChange={(e) => trip.safety.emergency = e.target.value}
                                      required/>

                        </fieldset>
                    </div>
                </>
            );
        } else if (progress === 6) {
            return (
                <>
                    <h1 className={'text-2xl'}>Recap</h1>
                    <div className={'divider'}/>
                    <div className={'flex flex-col gap-5'}>
                        <div className={'flex flex-col gap-2'}>
                            <h1 className={'text-xl'}>Trip Details</h1>
                            <p>Trip Name: {trip.details.name}</p>
                            <p>Trip Start Date: {trip.details.dates.startDate}</p>
                            <p>Trip End Date: {trip.details.dates.endDate}</p>

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
                    <button className={'btn btn-primary flex-1'}>
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