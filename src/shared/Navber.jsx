import { Link } from "react-router-dom";


const Navber = () => {
  const navOptions = (
    <>
      <li className="font-medium">
        <Link to="/">Home</Link>
      </li>
      <li className="font-medium">
        <Link to="/">Blog</Link>
      </li>
      <li className="font-medium">
        <Link to="/">All jewelry</Link>
      </li>
      <li className="font-medium">
        <Link to="/">My jewelry</Link>
      </li>
      <li className="font-medium">
        <Link to="/">Add jewelry</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar  z-10  max-w-screen-xl bg-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  text-black rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img className="" src="https://i.ibb.co/myWMTkx/logo.png" alt="logo" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end ">
                 
                 <Link><button>Login</button></Link> 

                </div>
            </div>
    </div>
  );
};

export default Navber;
