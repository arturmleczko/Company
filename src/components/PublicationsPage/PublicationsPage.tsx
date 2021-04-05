import { FC } from 'react';
import styled from 'styled-components';

import { CenteredElement } from '../../styledHelpers/oftenUsed';

const PublicationPageContainer = styled(CenteredElement)`
	width: 100%;
	height: 100%;
`;

const Heading = styled.h1`
	font-size: 100px;
`;

const PublicationsPage: FC = () => {
	return (
		<PublicationPageContainer>
			<Heading>Publications page</Heading>
		</PublicationPageContainer>
	);
};

export default PublicationsPage;
