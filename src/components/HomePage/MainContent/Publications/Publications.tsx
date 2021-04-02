import { FC } from 'react';
import styled from 'styled-components';

import { RoundedContainer } from '../../../../styledHelpers/oftenUsed';

import HighlightedPublication from './HighlightedPublication';

const PublicationsContainer = styled(RoundedContainer)`
	height: 400px;
`;

const Publications: FC = () => {
	return (
		<PublicationsContainer>
			<HighlightedPublication />
		</PublicationsContainer>
	);
};

export default Publications;
