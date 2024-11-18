import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
 

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="p-24 flex justify-center items-center">
            <div className="p-12 flex flex-col justify-center items-center shadow-md">
                <img className="w-14 h-14 border rounded-full" src={user.imageURL} alt="user profile" />
                <h2 className="text-2xl md:text-3xl font-semibold">{user.displayName}</h2>
                <p className="font-medium text-lg">{user.email}</p>
            </div>
        </div>
    );
};

export default Profile;