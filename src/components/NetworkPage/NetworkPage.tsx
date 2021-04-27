import { FC } from 'react';
import styled from 'styled-components';

import { PageContainer } from '../../styledHelpers/oftenUsed';

const NetworkPageContainer = styled(PageContainer)`
	width: 100%;
`;

const Heading = styled.h1`
	font-size: 80px;
`;

const NetworkPage: FC = () => {
	return (
		<NetworkPageContainer>
			<Heading>Network page</Heading>
		</NetworkPageContainer>
	);
};

export default NetworkPage;
