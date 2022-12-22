import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin: 0;
  padding: 0;
}
#root,body{
  max-width: 100vw;
  min-height: 100vh;
}
#root{
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
}
`;
