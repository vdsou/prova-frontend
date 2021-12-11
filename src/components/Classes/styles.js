import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
`;
export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2.4rem;
  margin: 2.4rem 0;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  padding: 2rem;
  width: 24rem;
  min-height: 20rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.quaternary};
  border-radius: 2rem;
  /* background: #2d2d31; */

  h2 {
    margin: 1.5rem 0;
    color: ${({ theme }) => theme.colors.tertiary};
  }

  div {
    position: relative;
    display: inline-flex;
    opacity: 0.9;
    border: 0.1rem solid ${({ theme }) => theme.colors.quaternary};
    border-radius: 1rem;
    overflow: hidden;
    &:hover {
      opacity: 1;
    }
  }
  i {
    position: absolute;
    right: 45%;
    top: 35%;
    font-size: 2.4rem;
  }

  h3 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.quaternary};
    margin: 1rem 0;
  }
  p {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
  a {
    color: ${({ theme }) => theme.colors.quaternary};
  }
`;
