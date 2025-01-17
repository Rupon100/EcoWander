import slide3 from '../assets/slide3.jpg'

const Slider3 = () => {
    return (
        <div
        className="hero "
        style={{
          backgroundImage: `url(${slide3})`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center m-24 md:my-40">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Ocean Blue Dive</h1>
            <p className="mb-5">
               Explore vibrant coral reefs and marine life with eco-friendly diving practices, protecting ocean habitats.
            </p>
            <button className="btn text-white bg-sky-600">View Details</button>
          </div>
        </div>
    </div>
    );
};

export default Slider3;