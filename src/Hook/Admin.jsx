import  { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import AxioSe from './AxioSe';

const Admin = () => {
  
        // const {user} = useContext(AuthContext);
        // // const [axiosSecure] = useAxiosSecure();
        // const token = localStorage.getItem('access-token');
        // const {  data: isAdmin,isLoading:isAdminLoading } = useQuery({
        //     queryKey: ['isAdmin', user?.email],
        //     queryFn: async () => {
        //         const res = await fetch(`http://localhost:5000/user/admin/${user?.email}`, { headers: {
        //                      authorization: `bearer ${token}`
        //                  }})
        //                  console.log("is admin",res)
        //         return res.json().Admin;
        //     },
        // })
        // return[isAdmin,isAdminLoading]
        const {user} = useContext(AuthContext);
        const [axiosSecure] = AxioSe();
        const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
            queryKey: ['isAdmin', user?.email],
            queryFn: async () => {
                const res = await axiosSecure.get(`/user/admin/${user?.email}`);
                console.log('is admin response', res)
                return res.data.admin;
            }
        })
        return [isAdmin, isAdminLoading]
};

export default Admin;