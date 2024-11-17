import slide3 from '../assets/slide3.jpg'

const Slider3 = () => {
    return (
        <div
        className="hero  "
        style={{
          backgroundImage: `url(${slide3})`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center m-24 md:my-40">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
    </div>
    );
};

export default Slider3;