 
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import Slider1 from '../Slidder/Slider1';
import Slider2 from '../Slidder/Slider2';
import Slider3 from '../Slidder/Slider3';
import Slider4 from '../Slidder/Slider4';

const Banner = () => {
    return (
        <div className='relative'>
            <div className="carousel w-full">
              <div id="item1" className="carousel-item w-full">
                <Slider1></Slider1>
              </div>
              <div id="item2" className="carousel-item w-full">
                <Slider2></Slider2>
              </div>
              <div id="item3" className="carousel-item w-full">
                <Slider3></Slider3>
              </div>
              <div id="item4" className="carousel-item w-full">
                <Slider4></Slider4>
              </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2 absolute bottom-4">
                <a href="#item1" className="h-4 w-4 bg-sky-600 rounded-full"></a>
                <a href="#item2" className="h-4 w-4 bg-sky-600 rounded-full"></a>
                <a href="#item3" className="h-4 w-4 bg-sky-600 rounded-full"></a>
                <a href="#item4" className="h-4 w-4 bg-sky-600 rounded-full"></a>
            </div>
        </div>
    );
};

export default Banner;