import Experiances from "../Experiances/Experiances";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section className="max-w-6xl mx-auto p-10">
                <Experiances></Experiances>
                <About></About>
                <Contact></Contact>
            </section>
        </div>
    );
};

export default Home;