import slide4 from '../assets/slide4.jpg'

const Slider4 = () => {
    return (
        <div
        className="hero"
        style={{
          backgroundImage: `url(${slide4})`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center m-24 md:my-40">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Wildlife Safari Wonders</h1>
            <p className="mb-5">
              Embark on a sustainable journey through wild habitats, observing animals in their natural environments responsibly.
            </p>
            <button className="btn text-white bg-sky-600">View Details</button>
          </div>
        </div>
    </div>
    );
};

export default Slider4;