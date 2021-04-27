import { FC } from 'react';
import styled from 'styled-components';

import { PageContainer } from '../../styledHelpers/oftenUsed';

const PrivacyPageContainer = styled(PageContainer)`
	width: 100%;
`;

const Heading = styled.h1`
	font-size: 80px;
`;

const PrivacyPage: FC = () => {
	return (
		<PrivacyPageContainer>
			<Heading>Privacy page</Heading>
		</PrivacyPageContainer>
	);
};

export default PrivacyPage;
