
import Footer from '../shared/Footer';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import useAdmin from '../Hook/useAdmin';
import Navber from '../shared/Navber';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Dashboard = () => {

    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const navigate = useNavigate();

    if(!user){
        return navigate('/')
    }
    return (
        <div >

        <Navber></Navber>
   


        <div className="drawer lg:drawer-open mb-10 ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-gray-400">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 mt-20 ">
                   

                  
                        {
                        
                        isAdmin?.admin && <>
                         <li><Link to="/dashboard/addjewelry">Admin Dashboard</Link></li>
                        <li><Link to="/dashboard/addjewelry">Add jewelry</Link></li>
                        </>
                        }

                       

                      { !isAdmin?.admin &&  
                      <> 
                       <li><Link to="/dashboard/myjewelry">Client Dashboard</Link></li>
                            <li><Link to="/dashboard/myjewelry"> my jewelry</Link></li>
    
                            
                            </>
                         }
                        
                        


                </ul>

            </div>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default Dashboard;