import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({component: Component, ...rest }) => {
    // @ts-ignore
    const currentUser = useSelector((state) => state?.user?.currentUser )
  return (
    <Route {...rest} render={(props) => currentUser ? <Component {...props} />: <Redirect to="sign-in" /> } />
  )
}

export default ProtectedRoute