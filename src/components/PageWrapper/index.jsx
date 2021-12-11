import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styles';

const PageWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

PageWrapper.propTypes = {
  children: PropTypes.object,
}.isRequired;
export default PageWrapper;
