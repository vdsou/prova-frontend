import styled from 'styled-components';

export const ButtonContainer = styled.button.attrs({ type: 'submit' })`
  width: 90%;
  margin: 1rem;
  padding: 1rem;
  background: ${({ theme, colorScheme }) => colorScheme && theme.colors[colorScheme]};
  border: none;
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  font-size: 1.6rem;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export default ButtonContainer;
