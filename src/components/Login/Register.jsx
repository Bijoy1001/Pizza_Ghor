import { NavLink } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  
    const { createUser } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();

        // get field values 
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        //validation
        if (password.length < 6){
            toast.error('Passord must be least 6 characters');
            return;
        }


        // creating a new user
        createUser(email, password)
          .then(res => console.log(res.user))
          .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Please Register!</h1>
                
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="name" placeholder="name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                     </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="confirm_password" placeholder="confirm password" name="confirm_password" className="input input-bordered" required />
                     </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary" type="submit">Register</button>
                    </div>
                    <div>
                        <h1>Already have an account? <span className="text-blue-800"> <NavLink to='/login'>Login</NavLink></span> </h1>
                    </div>
                    <SocialLogin></SocialLogin>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;