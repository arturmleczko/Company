import { FC } from 'react';
import styled from 'styled-components';

import { PageContainer } from '../../styledHelpers/oftenUsed';

const LogoutPageContainer = styled(PageContainer)`
	width: 100%;
`;

const Heading = styled.h1`
	font-size: 80px;
`;

const LogoutPage: FC = () => {
	return (
		<LogoutPageContainer>
			<Heading>Logout page</Heading>
		</LogoutPageContainer>
	);
};

export default LogoutPage;
