import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';

import CustomIcon from '../../common/CustomIcon';

const ReferenceContainer = styled.li`
	cursor: pointer;
`;

const ReferenceLink = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
`;

const ReferenceText = styled.span`
	font-size: ${fontSize[21]};
	color: ${colors.greySix};
	padding-left: 30px;
`;

interface IReferenceProps {
	referenceTo: string;
	referenceIconSrc: string;
	referenceText: string;
}

const Reference: FC<IReferenceProps> = ({
	referenceTo,
	referenceIconSrc,
	referenceText,
}) => {
	return (
		<ReferenceContainer>
			<ReferenceLink to={referenceTo}>
				<CustomIcon src={referenceIconSrc} size={37} />
				<ReferenceText>{referenceText}</ReferenceText>
			</ReferenceLink>
		</ReferenceContainer>
	);
};

export default Reference;
