import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const {setUser, loginUser} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const data = new FormData(e.target)
        const email = data.get("email");
        const pass = data.get("pass")
        
        loginUser(email,pass)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => console.log(error.message))
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
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="pass" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-sky-600 text-white hover:bg-sky-600">Login</button>
                    <p className="text-center font-semibold">OR</p>
                    <button className="btn bg-sky-600 text-white hover:bg-sky-600">
                        Google
                      <FaGoogle /> 
                    </button>
                  </div>
                </form>
                <h4 className="text-sm text-center p-1">New to this application? <Link to='/register'>Register</Link></h4>
            </div>
        </div>
    );
};

export default Login;