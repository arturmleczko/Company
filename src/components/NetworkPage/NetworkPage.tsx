import { FC } from 'react';
import styled from 'styled-components';

import { CenteredElement } from '../../styledHelpers/oftenUsed';

const NetworkPageContainer = styled(CenteredElement)`
	width: 100%;
	height: 100%;
`;

const Heading = styled.h1`
	font-size: 100px;
`;

const NetworkPage: FC = () => {
	return (
		<NetworkPageContainer>
			<Heading>Network page</Heading>
		</NetworkPageContainer>
	);
};

export default NetworkPage;
