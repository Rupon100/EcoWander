import Experiances from "../Experiances/Experiances";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section className="max-w-5xl mx-auto p-10">
                <Experiances></Experiances>
            </section>
        </div>
    );
};

export default Home;