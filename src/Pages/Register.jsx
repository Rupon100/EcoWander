import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const { registerUser, setUser, user } = useContext(AuthContext);
    

    const handleRegister = (e) => {
        e.preventDefault();

        const data = new FormData(e.target)
        const name = data.get("name");
        const email = data.get("email");
        const photo = data.get("photo");
        const pass = data.get("pass")
        console.log(name,email,photo,pass)

        registerUser(email, pass)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => console.log(error.message))
    }
    console.log(user)

    return (
        <div className="flex flex-col gap-2 justify-center items-center p-6">
            <h1 className="text-2xl font-semibold">Register</h1>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-md">
                <form onSubmit={handleRegister} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="pass" placeholder="password" className="input input-bordered" required />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-sky-600 text-white hover:bg-sky-600">Register</button>
                    {/* <p className="text-center font-semibold">OR</p>
                    <button className="btn bg-sky-600 text-white hover:bg-sky-600">
                        Google
                      <FaGoogle /> 
                    </button> */}
                  </div>
                </form>
                <h4 className="text-sm text-center p-1">Already Have an account? <Link to='/login'>Login</Link></h4>
            </div>
        </div>
    );
};

export default Register;