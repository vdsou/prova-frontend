import styled from 'styled-components';

const FormWrapper = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  @media (max-width: 800px) {
    width: 100%;
  }
  h1 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 2rem;
  }
  h2 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  h2,
  h1 {
    text-align: left;
    width: 100%;
    margin: 1rem;
    padding-left: 3rem;
  }
  select {
    background: none;
    width: 93%;
    option {
      color: #000;
    }
  }
  textarea {
    width: 85%;
  }
  textarea,
  select {
    background: none;
    border: 0.1rem solid ${({ theme }) => theme.colors.primary};
    border-radius: 1rem;
    margin: 1rem;
    padding: 1.5rem;
    color: ${({ theme }) => theme.colors.secondary};
    outline: none;
  }
`;

export default FormWrapper;
