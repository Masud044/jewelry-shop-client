
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';

const useAdmin = () => {
    const {user} = useContext(AuthContext);
    const {data:isAdmin,isLoading} = useQuery({
        queryKey:['admin',user?.email],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/user/admin/${user?.email}`);
            return res.json();
        }
    })
    return [isAdmin,isLoading]
};

export default useAdmin;