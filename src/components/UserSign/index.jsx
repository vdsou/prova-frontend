import React from 'react';
import PropTypes from 'prop-types';
import { SignContainer, Wrapper } from './styles';

const UserSign = ({ children }) => (
  <Wrapper>
    <SignContainer>{children}</SignContainer>
  </Wrapper>
);

UserSign.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default UserSign;
