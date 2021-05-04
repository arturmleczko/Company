import { FC } from 'react';
import styled from 'styled-components';

import InternalCorrespondent from './InternalCorrespondent';

import { colors } from '../../../../styledHelpers/colors';
import { fontSize } from '../../../../styledHelpers/fontSizes';

const Heading = styled.h2`
	padding-bottom: 25px;
	font-size: ${fontSize[23]};
	color: ${colors.darkNavyBlue};
	font-weight: 500;
`;

const InternalCorrespondentsContainer = styled.section`
	width: 100%;
	padding: 10px 70px 50px 70px;
	border-bottom: 3px solid ${colors.greyFive};
`;

const InternalCorrespondentsList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 150px;
`;

const InternalCorrespondents: FC = () => {
	return (
		<InternalCorrespondentsContainer>
			<Heading>Internal correspondents</Heading>
			<InternalCorrespondentsList>
				<InternalCorrespondent name="internalCorrespondent1" />
				<InternalCorrespondent name="internalCorrespondent2" />
			</InternalCorrespondentsList>
		</InternalCorrespondentsContainer>
	);
};

export default InternalCorrespondents;
