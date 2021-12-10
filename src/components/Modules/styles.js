import styled from 'styled-components';

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: auto auto;
  gap: 2.4rem;
  width: 90vw;
  margin: 3rem auto;
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
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 10rem;
  width: clamp(50%, 80vw, 30rem);
  padding: 2rem;
  background: none;
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 2rem;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
