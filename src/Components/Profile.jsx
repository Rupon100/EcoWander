import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
 
const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="p-24 flex flex-col gap-8 justify-center items-center">
            <h2 className="text-center text-3xl md:text-4xl font-semibold">Welcome, {user.displayName}! <br /> Your EcoWander profile is ready</h2>
            <div className="p-12 flex gap-4 flex-col justify-center items-center rounded shadow-md">
                <img className="w-14 h-14 border rounded-full" src={user.imageURL} alt="user profile" />
                <h2 className="text-2xl md:text-3xl font-semibold">{user.displayName}</h2>
                <p className="font-medium text-lg">{user.email}</p>

                <Link to='/update-profile' className="btn border-none bg-sky-600 hover:bg-sky-600 text-white">Update</Link>
            </div>
        </div>
    );
};

export default Profile;