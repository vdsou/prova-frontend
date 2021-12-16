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
  font-size: clamp(2rem, 1vw, 2.4rem);
  text-align: left;
  overflow-wrap: break-word;
  margin-bottom: 1rem;
`;

export const LecturesQuantity = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Card = styled.button`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  min-height: 15rem;
  background: tomato;
  min-width: clamp(80%, 20vw, 30rem);
  padding: 2rem;
  background: none;
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 2rem;
  &:hover {
    transform: scale(1.01, 1.01);
    background: #282a36;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: start;
    width: 100%;
  }
  i {
    background: ${({ theme }) => theme.colors.primary};
    height: 5rem;
    width: 6rem;
    font-size: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
    @media (max-width: 800px) {
      height: 5rem;
      width: 5rem;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    width: 93%;
    min-height: 15rem;
    align-items: center;
  }

  cursor: pointer;
`;
