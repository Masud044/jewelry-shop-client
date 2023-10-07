import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li className="font-medium">
        <Link to="/">Home</Link>
      </li>
      <li className="font-medium">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="font-medium">
        <Link to="/alljewelry">All jewelry</Link>
      </li>
      <li className="font-medium">
        <Link to="/myjewelry">My jewelry</Link>
      </li>
      <li className="font-medium">
        <Link to="/addjewelry">Add jewelry</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10   max-w-screen-xl bg-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  text-red-600 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <img
            className=""
            src="https://i.ibb.co/myWMTkx/logo.png"
            alt="logo"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end ">
          {user && (
            <div className="mr-2">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img
                  className="rounded-full w-10 h-9"
                  src={user.photoURL}
                  alt=""
                />
              </div>
            </div>
          )}

          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className="btn  bg-amber-400 text-white"
              >
                LogOut
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn bg-amber-400 text-white">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
