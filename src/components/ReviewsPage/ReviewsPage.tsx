import { FC } from 'react';
import styled from 'styled-components';

import { PageContainer } from '../../styledHelpers/oftenUsed';

const ReviewsPageContainer = styled(PageContainer)`
	width: 100%;
`;

const Heading = styled.h1`
	font-size: 80px;
`;

const ReviewsPage: FC = () => {
	return (
		<ReviewsPageContainer>
			<Heading>Reviews page</Heading>
		</ReviewsPageContainer>
	);
};

export default ReviewsPage;
