import {useNavigate} from 'react-router';

const Loading = () => {
    const navigate = useNavigate();

    setTimeout(() => navigate('/login'), 3000);

    return (
        <>
            <div className={'flex flex-col items-center justify-center gap-10 h-full'}>
                <img src={'/logo.png'} alt={'CAMPY LOGO'} className={'max-w-[50%]'}/>
                <div className={'flex flex-col items-center'}>
                    <span className="loading loading-ring loading-xl"></span>
                    <h1>Loading assets...</h1>
                </div>
            </div>
        </>
    );
};

export default Loading;