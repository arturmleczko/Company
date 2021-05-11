import { FC } from 'react';
import styled from 'styled-components';

import { fontSize } from '../../../styledHelpers/fontSizes';
import { colors } from '../../../styledHelpers/colors';

export enum Color {
	Grey = 'grey',
	Blue = 'blue',
}

interface IConditionOneProps {
	src: string;
	color: Color;
	text: string;
	fontWeight?: number;
}

interface IConditionTextProps {
	color: Color;
	fontWeight?: number;
}

const ConditionContainer = styled.div`
	display: flex;
	align-items: center;
	width: 150px;
	margin-right: 30px;
`;

const ConditionIcon = styled.img`
	width: 35px;
	height: 35px;
`;

const ConditionText = styled.span<IConditionTextProps>`
	color: ${({ color }) =>
		color === Color.Grey ? `${colors.greySix}` : `${colors.navyBlue}`};
	font-size: ${fontSize[22]};
	margin-left: 15px;
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
`;

const ConditionOne: FC<IConditionOneProps> = ({
	src,
	color,
	text,
	fontWeight,
}) => {
	return (
		<ConditionContainer>
			<ConditionIcon src={src} />
			<ConditionText color={color} fontWeight={fontWeight}>
				{text}
			</ConditionText>
		</ConditionContainer>
	);
};

export default ConditionOne;
