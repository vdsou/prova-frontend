import React from 'react';
import PropTypes from 'prop-types';
import ErrorWrapper from './styles';

const ErrorMessage = ({ children }) => <ErrorWrapper>{children}</ErrorWrapper>;

ErrorMessage.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default ErrorMessage;
