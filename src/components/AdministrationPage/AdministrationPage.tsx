import { FC } from 'react';
import styled from 'styled-components';

import { PageContainer } from '../../styledHelpers/oftenUsed';

const AdministrationPageContainer = styled(PageContainer)`
	width: 100%;
`;

const Heading = styled.h1`
	font-size: 80px;
`;

const AdministrationPage: FC = () => {
	return (
		<AdministrationPageContainer>
			<Heading>Administration page</Heading>
		</AdministrationPageContainer>
	);
};

export default AdministrationPage;
