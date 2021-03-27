import { createGlobalStyle } from 'styled-components';

import { colors } from './colors';

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
	    font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: ${colors.greyOne}
    }
`;

export default GlobalStyle;
