import styled from 'styled-components';

import { colors } from '../styledHelpers/colors';
import { fontSize } from '../styledHelpers/fontSizes';

export const Container = styled.div`
	width: 100vw;
	margin-left: auto;
	margin-right: auto;
	padding-left: 70px;
	padding-right: 70px;
	z-index: 1;
`;

export const CenteredElement = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SectionHeading = styled.h1`
	font-size: ${fontSize[24]};
	font-weight: 500;
	color: ${colors.greySix};
`;

interface IRoundedContainerPropsStyle {
	shadowWidth?: number;
}

export const RoundedContainer = styled.div<IRoundedContainerPropsStyle>`
	border-radius: 10px;
	box-shadow: ${({ shadowWidth }) => `0 1px 1px ${colors.greyFive}, 0 1px ${
		shadowWidth ? `${shadowWidth / 2}` : '7'
	}px ${colors.greyFive},
		0 ${shadowWidth ? `${shadowWidth / 2}px ${shadowWidth}px` : '5px 7px'} ${
		colors.greyFive
	};`};
	background-color: ${colors.white};
`;
