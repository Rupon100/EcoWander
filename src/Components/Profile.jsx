import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import 'animate.css';
 
const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="w-full p-8 md:p-24 flex flex-col gap-8 justify-center items-center animate__animated animate__fadeInRight">
            <h2 className="text-center text-xl md:text-4xl font-semibold">Welcome, {user.displayName}! <br /> Your profile is ready.</h2>
            <div className="relative h-72 flex flex-col justify-center items-center rounded shadow-md">
                <div className="h-2/5 rounded-t-md w-full round  bg-gradient-to-br from-sky-600 to-sky-300">
                </div>
                <div className="absolute top-10">
                   <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                       <img className="w-24 h-24 border rounded-full object-cover" src={user.photoURL} alt="profile" />
                   </div>
                </div>
                <div className="h-3/5 p-6 pt- text-center space-y-2">
                   <h2 className="text-lg md:text-xl font-semibold">{user.displayName}</h2>
                   <p className="font-medium text-base md:text-lg">{user.email}</p>
                   <Link to='/update-profile' className="btn border-none bg-sky-600 hover:bg-sky-600 text-white">Update Information</Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;