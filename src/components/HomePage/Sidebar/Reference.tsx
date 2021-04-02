import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';

import CustomIcon from '../../common/CustomIcon';

const ReferenceContainer = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	cursor: pointer;
`;

const ReferenceText = styled.span`
	font-size: ${fontSize[21]};
	color: ${colors.greySix};
	padding-left: 30px;
`;

interface IReferenceProps {
	to: string;
	src: string;
	text: string;
}

const Reference: FC<IReferenceProps> = ({ to, src, text }) => {
	return (
		<ReferenceContainer to={to}>
			<CustomIcon src={src} size={37} />
			<ReferenceText>{text}</ReferenceText>
		</ReferenceContainer>
	);
};

export default Reference;
