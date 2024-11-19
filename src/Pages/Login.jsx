import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const {setUser, loginUser, user, googleLogin, resetPass, updateEmail, setUpdateEmail} = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState("");
    // const [email, setEmail] = useState("");
   
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();

        const data = new FormData(e.target)
        const email = data.get("email");
        const pass = data.get("pass")

        if(pass.length < 6) {
            setError("Password must be at least 6 characters long, with at least one uppercase and one lowercase letter.!")
            return ;
        }else {
            setError("");
        }

        
        loginUser(email,pass)
        .then(result => {
            setUser(result.user);
            
            navigate(location?.state ? location.state : '/');

            setError("");
        })
        .catch(error => {
          const errorMsg = error.message.split('/').pop().replace(').', '');
          setError(errorMsg)
        });

    }

    const handleGoogle = () => {
        googleLogin()
        .then(result => {
            setUser(result.user);
             
            navigate(location?.state ? location.state : '/')

        })
    }


     
    return (
        <div className="flex flex-col gap-2 justify-center items-center p-6">
            <h1 className="text-2xl font-semibold">Login</h1>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-md">
                <form onSubmit={handleLogin} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>

                    <input 
                      type="email" 
                      name="email" 
                      placeholder="email" 
                      value={updateEmail} 
                      className="input input-bordered" 
                      required 
                      onChange={(e) => setUpdateEmail(e.target.value)} />

                  </div>
                  <div className="form-control relative">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type={`${showPass ? "text" : "password"}`} name="pass" placeholder="password" className="input input-bordered" required />

                    <button onClick={() => setShowPass(!showPass)} type="button" className="absolute right-4 bottom-12">
                       {
                         showPass ? <FaEye /> :  <FaEyeSlash /> 
                       }
                    </button>

                    <label className="label">
                      <Link to='/forgetpass' className="label-text-alt link link-hover">Forgot password?</Link>
                    </label>
                  </div>

                  <span className="text-red-500 text-xs font-semibold">{error}</span>  

                  <div className="form-control mt-6">
                    <button className="btn mb-2 border-none bg-sky-600 text-white hover:bg-sky-600">Login</button>
                    <p className="-mb-6 text-center font-semibold">OR</p>
                  </div>
                </form>
                <div className="mx-8">
                    <button onClick={handleGoogle} className="btn border-none bg-sky-600 text-white hover:bg-sky-600 w-full">
                        <h4>Google</h4>
                        <FaGoogle className="mt-1" /> 
                    </button>
                </div>
                
                <h4 className="text-sm text-center p-1 my-4">New to this application? <Link to='/register'>Register</Link></h4>
            </div>
        </div>
    );
};

export default Login;