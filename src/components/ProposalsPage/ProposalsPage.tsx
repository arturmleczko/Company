import { FC } from 'react';
import styled from 'styled-components';

import { PageContainer } from '../../styledHelpers/oftenUsed';

const ProposalsPageContainer = styled(PageContainer)`
	width: 100%;
`;

const Heading = styled.h1`
	font-size: 80px;
`;

const ProposalsPage: FC = () => {
	return (
		<ProposalsPageContainer>
			<Heading>Proposals page</Heading>
		</ProposalsPageContainer>
	);
};

export default ProposalsPage;
