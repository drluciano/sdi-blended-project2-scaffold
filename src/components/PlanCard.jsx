import {useEffect, useState} from 'react';
import {fetchPhoto} from '../api/api.js';

const PlanCard = ({data, index}) => {

    console.log(data);

    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        const getDestinationImage = async () => {
            const randomPhotoNum = Math.floor(Math.random() * 10) + 1;
            const response = await fetchPhoto(data.details.destination);
            setPhotoData(response.photos[0].src.original);
        };
        getDestinationImage();
    }, []);

    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm w-full">
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
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PlanCard;