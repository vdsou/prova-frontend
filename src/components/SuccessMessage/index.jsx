import React from 'react';
import PropTypes from 'prop-types';
import SuccessWrapper from './styles';

const SuccessMessage = ({ children }) => <SuccessWrapper>{children}</SuccessWrapper>;

SuccessMessage.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default SuccessMessage;
