import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  background-color: #212121;
  display: flex;
  color: whitesmoke;
  font-size: 2rem;
  font-weight: 900;
  min-height: 4rem;
  padding: 1rem 2rem;
  width: 100%;
  @media screen and (max-width: 700px) {
    text-align: center;
  }
`;
