import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
`;
export const Cards = styled.div`
  margin: 2rem 0.2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2.4rem;
`;

export const CardTitle = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  font-size: clamp(2rem, 2vw, 2.4rem);
  overflow-wrap: break-word;
  margin-bottom: 1rem;
`;

export const ClassesQuantity = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Card = styled.button`
  overflow: hidden;
  justify-content: space-between;
  height: 10rem;
  width: clamp(90%, 20vw, 30rem);
  padding: 2rem;
  background: none;
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 2rem;
  display: flex;
  &:hover {
    transform: scale(1.01, 1.01);
    background: #282A36;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: start;
  }
  i {
    background: ${({ theme }) => theme.colors.primary};
    height: 90%;
    width: 20%;
    font-size: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  cursor: pointer;
`;
