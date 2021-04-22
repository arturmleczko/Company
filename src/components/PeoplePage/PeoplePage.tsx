import { FC } from 'react';
import styled from 'styled-components';

import { CenteredElement } from '../../styledHelpers/oftenUsed';

const PeoplePageContainer = styled(CenteredElement)`
	width: 100%;
	height: 100%;
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
