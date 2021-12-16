/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import useAuth from './hooks/useAuth';

const UserAuthContext = createContext();

const UserAuthProvider = ({ children }) => {
  const {
    handleUserSignUp,
    handleUserSignIn,
    handleUserLogout,
    error,
    signUpSuccess,
    isUserAuthorized,
  } = useAuth();
  return (
    <UserAuthContext.Provider
      value={{
        handleUserSignUp,
        handleUserSignIn,
        handleUserLogout,
        error,
        signUpSuccess,
        isUserAuthorized,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

UserAuthProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export { UserAuthProvider, UserAuthContext };
