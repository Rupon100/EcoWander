import { Link } from 'react-router-dom';
import slide1 from '../assets/slide1.jpg';
import 'animate.css';

const Slider1 = () => {
    return (
        <div
            className="hero"
            style={{
              backgroundImage: `url(${slide1})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center m-24 md:my-40">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold animate__animated animate__bounceIn">Mystic Forest Retreat</h1>
                <p className="mb-5">
                Reconnect with nature on a serene forest expedition, respecting biodiversity and leaving minimal impact.
                </p>
                <Link to='/forest' className="btn text-white bg-sky-600 hover:bg-sky-500">View Details</Link>
              </div>
            </div>
        </div>
    );
};

export default Slider1;