import { useQuery } from '@tanstack/react-query'
import  { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
// import AxioSe from './AxioSe';


const CardHook = () => {
    const { user, loading } = useContext(AuthContext);
    // const [axiosSecure] = AxioSe();

    // const token = localStorage.getItem('access-token');
    const { refetch, data: card = [] } = useQuery({
        queryKey: ['addcart', user?.email],
        enabled:!loading,
        queryFn: async () => {
            const res = await fetch(`https://music-school-server-seven.vercel.app/addcard?email=${user?.email}`)
            return res.json();
        },
        // queryFn: async () => {
        //     const res = await axiosSecure(`/addcard?email=${user?.email}`)
        //     console.log('res from axios', res)
        //     return res.data;
        // },
        // , { headers: {
        //     authorization: `bearer ${token}`
        // }})
    })

    return [card, refetch]
};

export default CardHook;