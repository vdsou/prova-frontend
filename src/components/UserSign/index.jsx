/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { SignContainer, FormWrapper } from './styles';

const UserSign = ({ children, colorScheme = 'primary', ...rest }) => (
  <FormWrapper {...rest}>
    <SignContainer colorScheme={colorScheme}>{children}</SignContainer>
  </FormWrapper>
);

UserSign.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default UserSign;
