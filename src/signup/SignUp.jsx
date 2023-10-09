import Swal from "sweetalert2";
import { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from "react-router-dom";



const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {createUser,updateUserProfile} = useContext(AuthContext)
  const navigate = useNavigate();

  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    // console.log('confirm',e.target.value)
  };

  const onSubmit = (data) => {
    console.log(data);

    // if (data.password != confirmPassword) {
    //   setError("Passwords do not match!");
    //   return;
    // }
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      console.log(data.name, data.photoURL);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = {
            name: data.name,
            email: data.email,
            image: data.photoURL,
           
          };
          console.log(saveUser)
          fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div>
     
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl mt-20 font-bold">Sign up</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-teal-400">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                <div className="md:flex gap-3">
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
                </div>

             
             <div className="md:flex gap-3">
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
              </div>
             </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  onChange={handleConfirmPasswordChange}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {error && <p className="text-red-600">{error}</p>}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-teal-400 text-white"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="font-medium text-center text-2xl">
              <small>
                Already have an account? <Link to="/login">Login</Link>
              </small>
            </p>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
