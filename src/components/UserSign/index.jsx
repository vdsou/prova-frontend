import React from 'react';
import PropTypes from 'prop-types';
import { SignContainer, Wrapper } from './styles';

const UserSign = ({ children, colorScheme = 'primary' }) => (
  <Wrapper>
    <SignContainer colorScheme={colorScheme}>{children}</SignContainer>
  </Wrapper>
);

UserSign.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default UserSign;
