import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

 

const ForgetPass = () => {
    const { updateEmail, resetPass } = useContext(AuthContext);
    
    const handleReset = () => {
        if(updateEmail){

          resetPass(updateEmail)
          .then(() => {
            window.open("https://mail.google.com/")
          })

        }
    }

    return (
        <div className="my-28 gap-8 flex justify-center items-center flex-col">
            <h2 className="font-semibold text-2xl md:text-4xl">Forget Password?</h2>
            <form className="max-w-xl p-10 space-y-4 shadow">
                <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" value={updateEmail} placeholder="email" className="input input-bordered" required />
                </div>
                <button onClick={handleReset} className="w-full border-none text-white btn p-2 bg-sky-600 hover:bg-sky-500 " type="button">Reset Password</button>
            </form>
        </div>
    );
};

export default ForgetPass;