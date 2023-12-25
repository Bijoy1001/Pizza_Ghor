import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  
    const {user, googleLogin} = useContext(AuthContext);


    const handleSocialLogin = (media) => {
        media()
        .then(res=>console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div>
             <div className="divider">Continue with</div>
             <div>
                <button
                onClick={()=>handleSocialLogin(googleLogin)} 
                className="btn btn-primary btn-sm">Google</button>
             </div>
        </div>
    );
};

export default SocialLogin;