import styled from 'styled-components';

export const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.background2};
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  p,
  a {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 2.5rem;
  }
  a {
    text-decoration: underline;
    opacity: 1;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      opacity: 0.9;
    }
  }
  @media (max-width: 800px) {
    p{
      font-size: 1.3rem
    }
  }
`;

export const Division = styled.div`
  width: 100%;
  height: 1rem;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.quaternary},
    ${({ theme }) => theme.colors.primary}
  );
`;

export default Wrapper;
