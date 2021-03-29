import { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';

const ReferenceContainer = styled.div`
	display: flex;
	align-items: center;
`;

const ReferenceIcon = styled.img`
	width: 37px;
	height: 37px;
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
			<ReferenceIcon src={src} />
			<ReferenceText>{text}</ReferenceText>
		</ReferenceContainer>
	);
};

export default Reference;
