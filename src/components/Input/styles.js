import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  input {
    background: none;
    border: 0.1rem solid ${({ theme, colorScheme }) => colorScheme && theme.colors[colorScheme]};
    border-radius: 1rem;
    width: 85%;
    margin: 1rem;
    padding: 1.5rem;
    color: ${({ theme }) => theme.colors.secondary};
    outline: none;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export default InputContainer;
