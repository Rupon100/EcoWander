import { Link } from "react-router-dom";
import errorImg from '../assets/error.jpg';
 

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex justify-center items-center p-10">
            <div className="flex flex-col">
                <img className="w-52" src={errorImg} alt="error photo" />
                <Link to='/' className="btn bg-sky-600 text-white hover:bg-sky-600">go back</Link>
            </div>
        </div>
    );
};

export default ErrorPage;