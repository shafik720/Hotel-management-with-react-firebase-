import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    let location = useLocation();
    const [user] = useAuthState(auth);
    return (
        <div>
            
        </div>
    );
};

export default RequireAuth;