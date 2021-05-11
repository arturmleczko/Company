import { FC } from 'react';
import styled from 'styled-components';

import { Color } from './ConditionOne';

import { fontSize } from '../../../styledHelpers/fontSizes';
import { colors } from '../../../styledHelpers/colors';

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
	margin: 0 25px;
`;

const ConditionIcon = styled.img`
	width: 15px;
	height: 15px;
`;

const ConditionText = styled.span<IConditionTextProps>`
	color: ${({ color }) =>
		color === Color.Grey ? `${colors.greySix}` : `${colors.navyBlue}`};
	font-size: ${fontSize[22]};
	margin-right: 15px;
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
			<ConditionText color={color} fontWeight={fontWeight}>
				{text}
			</ConditionText>
			<ConditionIcon src={src} />
		</ConditionContainer>
	);
};

export default ConditionOne;
