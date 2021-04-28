import { createGlobalStyle } from 'styled-components';

import { colors } from './colors';

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box; 
        user-select: none;
    }

    html, button {
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: ${colors.greyOne};
        overflow-x: hidden;
    }
`;

export default GlobalStyle;
