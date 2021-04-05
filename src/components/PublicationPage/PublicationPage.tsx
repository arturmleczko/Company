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

const PublicationPage: FC = () => {
	return (
		<PublicationPageContainer>
			<Heading>Publication page</Heading>
		</PublicationPageContainer>
	);
};

export default PublicationPage;
