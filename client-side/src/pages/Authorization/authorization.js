import React from 'react';
import './authorization.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const Authorization = () => {
    return (
        <div className='container auth-container'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Authorization
