import { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';

interface IActionButtonProps {
	src?: string;
	text: string;
	textColor: string;
	backgroundColor: string;
}

interface IActionButtonContainer {
	backgroundColor: string;
}

interface IActionText {
	textColor: string;
}

const ActionButtonContainer = styled.div<IActionButtonContainer>`
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 100%;
	background-color: ${({ backgroundColor }) =>
		backgroundColor ? backgroundColor : ''};
	padding: 0 15px;
	margin-right: 30px;
	border-radius: 7px;
	box-shadow: 0 1px 1px ${colors.greyFive}, 0 1px 2.5px ${colors.greyFive},
		0 2.5px 5px ${colors.greyFive};
	cursor: pointer;
`;

const ActionIcon = styled.img`
	width: 30px;
	height: 30px;
	margin-right: 15px;
`;

const ActionText = styled.span<IActionText>`
	color: ${({ textColor }) => (textColor ? textColor : '')};
	font-size: ${fontSize[19]};
	font-weight: 500;
`;

const ActionButton: FC<IActionButtonProps> = ({
	src,
	text,
	backgroundColor,
	textColor,
}) => {
	const checkIcon = src !== '' ? <ActionIcon src={src} /> : null;

	return (
		<ActionButtonContainer backgroundColor={backgroundColor}>
			{checkIcon}
			<ActionText textColor={textColor}>{text}</ActionText>
		</ActionButtonContainer>
	);
};

export default ActionButton;
