import { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';

import CustomIcon from '../../common/CustomIcon';

const ReferenceContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

const ReferenceText = styled.span`
	font-size: ${fontSize[21]};
	color: ${colors.greySix};
	padding-left: 30px;
`;

interface IReferenceProps {
	src: string;
	text: string;
}

const Reference: FC<IReferenceProps> = ({ src, text }) => {
	return (
		<ReferenceContainer>
			<CustomIcon src={src} size={37} />
			<ReferenceText>{text}</ReferenceText>
		</ReferenceContainer>
	);
};

export default Reference;
