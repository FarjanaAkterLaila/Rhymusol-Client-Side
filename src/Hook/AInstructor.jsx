import  { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import AxioSe from './AxioSe';
import { useQuery } from '@tanstack/react-query';

const AInstructor = () => {
 
    const {user} = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    // const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
    //     queryKey: ['isInstructor', user?.email],
    //     enabled:!isInstructorLoading,
    //     queryFn: async () => {
    //         const res = await fetch(`https://music-school-server-seven.vercel.app/user/instructor/${user?.email}`)
    //         return res.json();
    //     },
    // })
    //     return [isInstructor, isInstructorLoading]
    const [axiosSecure] = AxioSe();
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/instructor/${user?.email}`);
            console.log('is isInstructor response', res)
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
    
 };

export default AInstructor;