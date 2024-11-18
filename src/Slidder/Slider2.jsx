import slide2 from '../assets/slide2.jpg'
import 'animate.css';

const Slider2 = () => {
    return (
        <div
            className="hero "
            style={{
              backgroundImage: `url(${slide2})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center m-24 md:my-40">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold animate__animated animate__bounceIn">Mountain Whisper Trails</h1>
                <p className="mb-5">
                   Discover hidden trails and breathtaking views while preserving the pristine mountain ecosystems.
                </p>
                <button className="btn text-white bg-sky-600 hover:bg-sky-500">View Details</button>
              </div>
            </div>
        </div>
    );
};

export default Slider2;