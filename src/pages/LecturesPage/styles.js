import styled from 'styled-components';

export const Search = styled.div`
  margin-top: 2rem;
`;

export const List = styled.div`
  width: 100%;
  button {
    background: ${({ theme }) => theme.colors.primary};
    border: 0;
    border-radius: 1rem;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.background};
    margin: 1rem;
    padding: 1rem;
    &:hover {
      opacity: 0.8;
    }
  }
  .new-lecture-button {
    margin: 2rem 3rem;
    padding: 1rem 3rem;
    background: none;
    border: 0.1rem solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    i {
      margin-right: 1rem;
    }
  }
  ul {
    margin: 0 3rem;
  }
  ul li {
    display: flex;
    justify-content: space-between;
    font-size: 1.8rem;
    margin-top: 3rem;
    padding-bottom: 2rem;
    color: ${({ theme }) => theme.colors.secondary};
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.background2};
    button {
      width: 4rem;
      height: 4rem;
    }
    p {
      margin-top: 0.8rem;
    }
  }
  a{
    color: ${({ theme }) => theme.colors.secondary};
    margin-left: 1rem;
  }
`;

export const LecturesPage = styled.div``;
