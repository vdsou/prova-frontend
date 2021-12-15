/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FormWrapper = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  height: auto;
  padding: 2rem;
  border: 0.1rem solid
    ${({ theme, colorScheme }) => colorScheme && theme.colors[colorScheme]};
  border-radius: 2rem;

  @media (max-width: 800px) {
    width: 80%;
  }
`;
