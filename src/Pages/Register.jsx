import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Register = () => {
    const { registerUser, setUser, user } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    

    const handleRegister = (e) => {
        e.preventDefault();

        const data = new FormData(e.target)
        const name = data.get("name");
        const email = data.get("email");
        const photo = data.get("photo");
        const pass = data.get("pass")
       
        const passRegx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(!passRegx.test(pass)) {
            setError("Password must be at least 6 characters long, with at least one uppercase and one lowercase letter!")
            return ;
        }else {
            setError("");
        }

        registerUser(email, pass)
        .then(result => {
            setUser(result.user);
            navigate('/')
            setError("");
        })
    }
    
    


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
                  <div className="form-control relative">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type={`${showPass ? "text" : "password"}`} name="pass" placeholder="password" className="input input-bordered" required />
                    <button onClick={() => setShowPass(!showPass)} type="button" className="absolute right-4 bottom-4
                    ">
                       {
                         showPass ? <FaEye /> :  <FaEyeSlash /> 
                       }
                    </button>
                  </div>

                  <span className="text-red-500 text-xs font-semibold">{error}</span>

                  <div className="form-control mt-6">
                    <button className="btn bg-sky-600 text-white hover:bg-sky-600">Register</button>
                  </div>
                </form>
                <h4 className="text-sm text-center p-1 my-4">Already Have an account? <Link to='/login'>Login</Link></h4>
            </div>
        </div>
    );
};

export default Register;