import { createGlobalStyle } from '@emotion/styled';

export const GlobalStyle = createGlobalStyle`

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
ul,ol {
     margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
`;
