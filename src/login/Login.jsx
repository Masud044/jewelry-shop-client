import { Link, useLocation, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'

import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
import GoogleSign from '../shared/GoogleSign';


const Login = () => {

   
    const { signIn } = useContext(AuthContext);
    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

   
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }
    const togglePassword = () => {
       
        setPasswordShown(!passwordShown);
      };

   

    return (
        <div>
             
              <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now</h1>
                     
                    </div>
                    <div className="card  md:w-1/2 sm:max-w-2xl   shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                 {/* <div className='flex '> */}
                                 <input   type={passwordShown ? "text" : "password"} name="password"   placeholder="password" className="input input-bordered"   />
                                 <div className='-mt-11 mx-72'>
                                    {
                                        passwordShown? <FaEyeSlash className='mt-3 -ml-14' onClick={togglePassword}></FaEyeSlash>:
                                        <FaEye className='mt-3 -ml-14' onClick={togglePassword}></FaEye>
                                    }
                                 </div>
                                
                               
                                 {/* </div> */}
                               
                               
                            </div>
                           
                            <div className="form-control mt-6">
                                <input  className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center font-medium text-2xl"><small >New Here? <Link to="/signup">Create an account</Link> </small></p>
                       
                      <GoogleSign></GoogleSign>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;