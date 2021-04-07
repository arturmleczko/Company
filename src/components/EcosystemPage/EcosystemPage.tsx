import { FC } from 'react';
import styled from 'styled-components';

import { CenteredElement } from '../../styledHelpers/oftenUsed';

const EcosystemPageContainer = styled(CenteredElement)`
	width: 100%;
	height: 100%;
`;

const Heading = styled.h1`
	font-size: 80px;
`;

const EcosystemPage: FC = () => {
	return (
		<EcosystemPageContainer>
			<Heading>Ecosystem page</Heading>
		</EcosystemPageContainer>
	);
};

export default EcosystemPage;
