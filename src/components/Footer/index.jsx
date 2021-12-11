import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Division, Wrapper } from './styles';

const Footer = () => (
  <Wrapper>
    <Division />
    <p>
      {'© Copyright 2021. Feito com '}
      <i>
        <FontAwesomeIcon icon={faHeart} />
      </i>
      {' por '}
      <a href="https://github.com/vdsou target">vdsou</a>
    </p>
  </Wrapper>
);

export default Footer;
