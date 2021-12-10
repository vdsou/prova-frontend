import styled from 'styled-components';

export const Wrapper = styled.header`
  height: 5rem;
  width: clamp(40rem, 100vw, 50rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem auto;
  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
  }
  li {
    border: 0.1rem solid ${({ theme }) => theme.colors.primary};
    overflow: hidden;
    border-radius: 1rem;
  }
  a {
    display: block;
    padding: 1rem 2rem;
    font-size: clamp(1.3rem, 2vw, 1.6rem);
    font-weight: bold;
    line-height: 1.5;
    color: #ea6ca6;
    opacity: 1;

    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
      opacity: 0.8;
    }
  }
`;

export default Wrapper;
