import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 90%;
  margin: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export default ButtonContainer;
