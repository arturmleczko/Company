import { FC } from 'react';
import styled from 'styled-components';

import { PageContainer } from '../../styledHelpers/oftenUsed';

const SettingsPageContainer = styled(PageContainer)`
	width: 100%;
`;

const Heading = styled.h1`
	font-size: 80px;
`;

const SettingsPage: FC = () => {
	return (
		<SettingsPageContainer>
			<Heading>Settings page</Heading>
		</SettingsPageContainer>
	);
};

export default SettingsPage;
