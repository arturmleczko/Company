import { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../styledHelpers/colors';
import { fontSize } from '../../styledHelpers/fontSizes';

interface IActionButtonProps {
	src: string;
	text?: string;
}

const ActionButtonContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: 25px;
	cursor: pointer;
`;

const Icon = styled.img`
	width: 26px;
	height: 26px;
`;

const Text = styled.span`
	margin-left: 15px;
	color: ${colors.greyThirteen};
	font-size: ${fontSize[19]};
`;

const ActionButton: FC<IActionButtonProps> = ({ src, text }) => {
	const checkText = text ? <Text>{text}</Text> : null;

	return (
		<ActionButtonContainer>
			<Icon src={src} />
			{checkText}
		</ActionButtonContainer>
	);
};

export default ActionButton;
