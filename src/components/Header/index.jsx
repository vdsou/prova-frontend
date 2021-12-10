import React from 'react';
import { Wrapper } from './styles';

const Header = () => (
  <Wrapper>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/signup">Registrar-se</a>
        </li>
        <li>
          <a href="/signin">Fazer login</a>
        </li>
        <li>
          <a href="/">Sair</a>
        </li>
      </ul>
    </nav>
  </Wrapper>
);

export default Header;
