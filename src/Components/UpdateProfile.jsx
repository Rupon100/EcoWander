import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import 'animate.css';


const UpdateProfile = () => {

    const { upDateProfile, user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
   //for forget

    const handleUpdate = (e) => {
      e.preventDefault();

      const form = new FormData(e.target);
      const name = form.get("name")
      const photo = form.get("photo");
      console.log(name, photo)

      upDateProfile(name, photo)
      .then(() => {
        console.log("Profile Update!")
        setUser({ ...user, displayName: name, photoURL: photo });
        navigate('/profile')
      })
      .catch((error) => console.log(error.message))

      console.log(user)
    }


    return (
        <div className='flex gap-8 flex-col justify-center items-center my-24'>
            <h1 className='font-semibold text-2xl md:text-4xl text-center animate__animated animate__lightSpeedInLeft'>Update Your Profile</h1>
            <form onSubmit={handleUpdate} className="card-body max-w-xl shadow">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                   {/* first need to update on firebase and then navigate to my route */}
                  <button className="btn bg-sky-600 hover:bg-sky-500 text-white">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;