import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  bottom: 120px;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 2;
  background-color: #51515120;
  border-radius: 50px;
  padding: 20px;
  img {
    width: 100px;
  }
  span {
    color: #396745;
    font-size: 2rem;
    font-weight: 700;
  }
`;
