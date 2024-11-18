import { PulseLoader } from 'react-spinners' 

const Loading = () => {
    return (
        <div className='w-full min-h-[500px] md:min-h-[700px] flex justify-center items-center'>
           <div>
             <PulseLoader color="#32bfcd" />
           </div>
        </div>
    );
};

export default Loading;