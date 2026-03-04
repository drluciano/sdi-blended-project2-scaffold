import {useNavigate} from 'react-router';

const Loading = () => {
    const navigate = useNavigate();

    setTimeout(() => navigate('/home'), 3000);

    return (
        <>
            <div className={'flex flex-col h-screen min-h-full items-center justify-center gap-10'}>
                <img src={'/logo.png'} alt={'TACPLANNER LOGO'} className={'max-w-[50%]'}/>
                <div className={'flex flex-col items-center'}>
                    <span className="loading loading-ring loading-xl"></span>
                    <h1>Loading map and assets...</h1>
                </div>
            </div>
        </>
    );
};

export default Loading;