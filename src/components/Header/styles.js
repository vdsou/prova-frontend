import styled from 'styled-components';

export const Wrapper = styled.header`
  height: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  nav {
    margin: 0 auto;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;

    @media (max-width: 800px) {
      width: 80%;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: start;
    }
  }
  li {
    border: 0.1rem solid ${({ theme }) => theme.colors.primary};
    overflow: hidden;
    border-radius: 1rem;
    margin: 2rem;
  }
  a {
    display: block;
    padding: 1rem 2rem;
    font-size: clamp(1.3rem, 2vw, 1.6rem);
    font-weight: bold;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 1;

    &:hover {
      color: #ea6ca6;
      opacity: 0.8;
    }
  }
`;

export default Wrapper;
