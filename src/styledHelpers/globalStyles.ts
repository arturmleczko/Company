import styled, { createGlobalStyle } from 'styled-components';
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

export const Container = styled.div`
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	padding-left: 70px;
	padding-right: 70px;
	z-index: 1;
`;

export const Icon = styled.img`
	width: 45px;
	height: 45px;
	cursor: pointer;
`;

export default GlobalStyle;
