import { FC } from 'react';
import styled from 'styled-components';

import { RoundedContainer } from '../../../../styledHelpers/oftenUsed';

import CustomIcon from '../../../common/CustomIcon';
import HighlightedPublication from './HighlightedPublication';

const PublicationsContainer = styled(RoundedContainer)`
	height: 400px;
`;

const Publications: FC = () => {
	return (
		<PublicationsContainer>
			<HighlightedPublication />
			<div>
				<span></span>
			</div>
		</PublicationsContainer>
	);
};

export default Publications;
