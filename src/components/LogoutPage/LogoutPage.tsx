import { FC } from 'react';
import styled from 'styled-components';

import { CenteredElement } from '../../styledHelpers/oftenUsed';

const LogoutPageContainer = styled(CenteredElement)`
	width: 100%;
	height: 100%;
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
