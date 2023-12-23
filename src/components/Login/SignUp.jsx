import { NavLink } from "react-router-dom";

const SignUp = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Please Sign Up!</h1>
                
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
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
                    <input type="confirm_password" placeholder="confirm password" name="confirm password" className="input input-bordered" required />
                     </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                    </div>
                    <div>
                        <h1>Already have an account? <span className="text-blue-800"> <NavLink to='/login'>Login</NavLink></span> </h1>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SignUp;