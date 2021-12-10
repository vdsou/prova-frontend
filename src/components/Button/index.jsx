import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './styles';

const Button = ({ children }) => <ButtonContainer>{children}</ButtonContainer>;

Button.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default Button;
