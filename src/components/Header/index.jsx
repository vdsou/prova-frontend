import React, { useContext } from 'react';
import { Wrapper } from './styles';
import { UserAuthContext } from '../../context/UserAuthContext';

const Header = () => {
  const { handleUserLogout, isUserAuthorized } = useContext(UserAuthContext);
  return (
    <Wrapper>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          {!isUserAuthorized && (
            <>
              <li>
                <a href="/signup">Registrar-se</a>
              </li>
              <li>
                <a href="/signin">Fazer login</a>
              </li>
            </>
          )}
          {isUserAuthorized && (
            <>
              <li>
                <a href="/painel-modulos">Painel de Módulos</a>
              </li>
              <li>
                <a href="/painel-aulas">Painel de Aulas</a>
              </li>
              <li>
                <a href="/" onClick={handleUserLogout}>
                  Sair
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Header;
