import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Title from "../Components/Title";

 

const MainLayout = () => {
    return (
        <div>
            <Title></Title>
            <nav>
                <Header></Header>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;