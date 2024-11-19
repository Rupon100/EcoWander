import { Link } from 'react-router-dom';
import slide2 from '../assets/slide2.jpg'
import 'animate.css';

const Slider2 = () => {
    return (
        <div
            className="hero min-h-screen border border-red-500"
            style={{
              backgroundImage: `url(${slide2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center m-24 md:my-40">
              <div className="max-w-md space-y-2">
                <h1 className="text-2xl md:text-5xl font-bold animate__animated animate__bounceIn">Mountain Whisper Trails</h1>
                <p className="text-sm md:text-md">
                   Discover hidden trails and breathtaking views while preserving the pristine mountain ecosystems.
                </p>
                <Link to='/mountain' className="btn text-white bg-sky-600 hover:bg-sky-500 p-1 sm:p-3">View Details</Link>
              </div>
            </div>
        </div>
    );
};

export default Slider2;