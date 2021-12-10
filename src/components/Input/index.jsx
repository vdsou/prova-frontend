/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer } from './styles';

const Input = ({ colorScheme = 'primary', ...rest }) => (
  <InputContainer colorScheme={colorScheme}>
    <input {...rest} />
  </InputContainer>
);

Input.propTypes = {
  colorScheme: PropTypes.string,
}.isRequired;

export default Input;
