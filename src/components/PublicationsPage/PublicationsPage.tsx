import { FC } from 'react';
import styled from 'styled-components';

import { PageContainer } from '../../styledHelpers/oftenUsed';

const PublicationPageContainer = styled(PageContainer)`
	width: 100%;
`;

const Heading = styled.h1`
	font-size: 80px;
`;

const PublicationsPage: FC = () => {
	return (
		<PublicationPageContainer>
			<Heading>Publications page</Heading>
		</PublicationPageContainer>
	);
};

export default PublicationsPage;
