import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const GoogleSign = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, image: loggedInUser.photoURL }
            //     fetch('http://localhost:5000/users', {
            //         method: 'POST',
            //         headers: {
            //             'content-type': 'application/json'
            //         },
            //         body: JSON.stringify(saveUser)
            //     })
            //         .then(res => res.json())
            //         .then(() => {
            //             navigate(from, { replace: true });
            //         })
            //     navigate(from, { replace: true });
             })
    }
    return (
        <div>
             <div className="divider"></div>
        <div className="w-full text-center my-4">
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline ">
                <FcGoogle className="text-3xl"></FcGoogle>
            </button>
        </div>
        </div>
    );
};

export default GoogleSign;