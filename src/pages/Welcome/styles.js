import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 2rem auto;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  h1{
    margin: 2rem 0;
  }
  a{
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`;
export default Wrapper;
