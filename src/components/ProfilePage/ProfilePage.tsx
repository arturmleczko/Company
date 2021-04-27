import { FC } from 'react';
import styled from 'styled-components';

import { PageContainer } from '../../styledHelpers/oftenUsed';

const ProfilePageContainer = styled(PageContainer)`
	width: 100%;
`;

const Heading = styled.h1`
	font-size: 80px;
`;

const ProfilePage: FC = () => {
	return (
		<ProfilePageContainer>
			<Heading>Profile page</Heading>
		</ProfilePageContainer>
	);
};

export default ProfilePage;
