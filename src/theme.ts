import { createGlobalStyle } from 'styled-components';

export interface ITheme {
  colors: {
    bg: string;
    bg2: string;
    darkFont: string;
    lightFont: string;
  };
}

const darkTheme: ITheme = {
  colors: {
    bg: '#2B344B',
    bg2: '#001529',
    darkFont: '#58595B',
    lightFont: 'white',
  },
};

const lightTheme: ITheme = {
  colors: {
    bg: '#2B344B',
    bg2: '#001529',
    darkFont: '#58595B',
    lightFont: 'white',
  },
};

export const appTheme: { dark: ITheme; light: ITheme } = {
  dark: darkTheme,
  light: lightTheme,
};

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
