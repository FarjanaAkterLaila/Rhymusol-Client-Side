import  { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import AxioSe from './AxioSe';
import { useQuery } from '@tanstack/react-query';

const UInstructor = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = AxioSe();
    const {data: instructor, isLoading: instructorLoading} = useQuery({
        queryKey: ['instructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/instructor/${user?.email}`);
            console.log('is instructor response', res)
            return res.data.instructor;
        }
    })
    return [instructor, instructorLoading]
//     const {user} = useContext(AuthContext);
//         // const [axiosSecure] = useAxiosSecure();
//         const token = localStorage.getItem('access-token');
//         const {  data: instructor,isLoading:instructorLoading } = useQuery({
//             queryKey: ['instructor', user?.email],
//             queryFn: async () => {
//                 const res = await fetch(`http://localhost:5000/user/instructor/${user?.email}`, { headers: {
//                              authorization: `bearer ${token}`
//                          }})
//                          console.log("is instructor",res)
//                 return res.json().Instructor;
//             },
//         })
//         return[instructor,instructorLoading]
 };

export default UInstructor;