import { FC } from 'react';
import styled from 'styled-components';

import { PageContainer } from '../../styledHelpers/oftenUsed';

const PeoplePageContainer = styled(PageContainer)`
	width: 100%;
`;

const Heading = styled.h1`
	font-size: 80px;
`;

const PeoplePage: FC = () => {
	return (
		<PeoplePageContainer>
			<Heading>People page</Heading>
		</PeoplePageContainer>
	);
};

export default PeoplePage;
