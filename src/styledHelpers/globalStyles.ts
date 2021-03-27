import { createGlobalStyle } from 'styled-components';

import { colors } from './colors';

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
	    font-family: 'Lato', sans-serif;
    }

    body {
        background-color: ${colors.primary}
    }
`;

export default GlobalStyle;
