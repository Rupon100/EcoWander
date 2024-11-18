import React from 'react';

const UpdateProfile = () => {
    return (
        <div className='flex justify-center items-center'>
            <form className="card-body max-w-xl">
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
                   first need to update on firebase and then navigate to my route
                  <button className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;