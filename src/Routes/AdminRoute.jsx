// import React, { useContext } from 'react';
// import Admin from '../Hook/Admin';
// import { Navigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../Providers/AuthProvider';

// const AdminRoute = ({children}) => {
//     const { user, loading } = useContext(AuthContext);
//     const [isAdmin, isAdminLoading] = Admin();
//     const location = useLocation();

//     if(loading || isAdminLoading){
//         return <progress className="progress w-56"></progress>
//     }

//     if (user && isAdmin) {
//         return children;
//     }
//     return <Navigate to="/login" state={{from: location}} replace></Navigate>
// };

// export default AdminRoute;