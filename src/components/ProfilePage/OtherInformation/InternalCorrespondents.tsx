import { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';

const Heading = styled.h2`
	padding-bottom: 25px;
	font-size: ${fontSize[23]};
	color: ${colors.darkNavyBlue};
	font-weight: 500;
`;

const InternalCorrespondentsContainer = styled.section`
	width: 100%;
	padding: 20px 70px 50px 70px;
	border-bottom: 3px solid ${colors.greyFive};
`;

const InternalCorrespondents: FC = () => {
	return (
		<InternalCorrespondentsContainer>
			<Heading>Internal correspondents</Heading>
		</InternalCorrespondentsContainer>
	);
};

export default InternalCorrespondents;
