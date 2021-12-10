import React from 'react';
import PropTypes from 'prop-types';
import Title from './styles';

const SectionTitle = ({ children }) => <Title>{children}</Title>;

SectionTitle.propTypes = {
  text: PropTypes.string,
}.isRequired;

export default SectionTitle;
