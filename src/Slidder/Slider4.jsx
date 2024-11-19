import { Link } from 'react-router-dom';
import slide4 from '../assets/slide4.jpg'
import 'animate.css';


const Slider4 = () => {
    return (
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${slide4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center m-24 md:my-40">
          <div className="max-w-md space-y-2">
            <h1 className="text-2xl md:text-5xl font-bold animate__animated animate__bounceIn">Wildlife Safari Wonders</h1>
            <p className="text-sm md:text-md">
              Embark on a sustainable journey through wild habitats, observing animals in their natural environments responsibly.
            </p>
            <Link to='/wildlife' className="btn text-white bg-sky-600 hover:bg-sky-500">View Details</Link>
          </div>
        </div>
    </div>
    );
};

export default Slider4;