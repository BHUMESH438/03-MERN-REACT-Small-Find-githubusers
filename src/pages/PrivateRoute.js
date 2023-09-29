import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();
  const isUser = isAuthenticated && user;
  if (!isUser) {
    return <Navigate to='/login' />;
  }
  return children;
};
export default PrivateRoute;
// here in the return body componenet we should not give the content if we give it will take that content and will not redirect
// because the componenet is route not html

// if rest is used instead of react router navigate v5
/*  return (
    <Route
      {...rest}
      render={() => {
        return isUser ? children : <Redirect to='/login' />;
      }}
    ></Route>
    );*/
