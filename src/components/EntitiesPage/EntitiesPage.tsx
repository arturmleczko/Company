import { FC } from 'react';
import styled from 'styled-components';

import { CenteredElement } from '../../styledHelpers/oftenUsed';

const EntitiesPageContainer = styled(CenteredElement)`
	width: 100%;
	height: 100%;
`;

const Heading = styled.h1`
	font-size: 80px;
`;

const EntitiesPage: FC = () => {
	return (
		<EntitiesPageContainer>
			<Heading>Entities page</Heading>
		</EntitiesPageContainer>
	);
};

export default EntitiesPage;
