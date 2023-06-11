import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

import { Navigate, useLocation } from 'react-router-dom';
import AInstructor from '../Hook/AInstructor';

const Instructor = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor , isInstructorLoading] = AInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default Instructor;