import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const CardHook = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['addcart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/addcard?email=${user?.email}`)
            return res.json();
        },
    })

    return [cart, refetch]
};

export default CardHook;