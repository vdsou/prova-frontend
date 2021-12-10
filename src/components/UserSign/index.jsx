import React from 'react';
import PropTypes from 'prop-types';
import { SignContainer } from './styles';

const UserSign = ({ children }) => (
  <SignContainer>
    {children}
  </SignContainer>
);

UserSign.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default UserSign;
