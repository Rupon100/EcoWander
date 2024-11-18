import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
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
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="pass" placeholder="password" className="input input-bordered" required />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-sky-600 text-white hover:bg-sky-600">Login</button>
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