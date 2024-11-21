import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import 'animate.css';

const UpdateProfile = () => {
    const { upDateProfile, user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdate = (e) => {
      e.preventDefault();

      const form = new FormData(e.target);
      const name = form.get("name")
      const photo = form.get("photo");
      
      upDateProfile(name, photo)
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        navigate('/profile')
      })
    }


    return (
        <div className='min-h-screen w-full flex gap-8 flex-col justify-center items-center  animate__animated animate__fadeInUp'>
          <div className='space-y-4'>
            <h1 className='font-semibold text-xl md:text-4xl text-center '>Update Your Profile</h1>
            <form onSubmit={handleUpdate} className="card-body w-full max-w-xl shadow flex ">
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
        </div>
    );
};

export default UpdateProfile;