import styled from 'styled-components';

export const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  height: auto;
  padding: 2rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 2rem;
`;
export const Test = styled.div`
  color: white;
`;
