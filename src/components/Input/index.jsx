/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { InputContainer } from './styles';

const Input = (props) => (
  <InputContainer>
    <input {...props} />
  </InputContainer>
);

export default Input;
