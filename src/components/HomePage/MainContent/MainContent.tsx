import { FC } from 'react';
import styled from 'styled-components';

import Publications from './Publications/Publications';

const MainContentContainer = styled.main`
	flex-basis: calc(100% - 400px);
	margin-left: 100px;
	margin-right: 140px;
`;

const MainContent: FC = () => {
	return (
		<MainContentContainer>
			<Publications />
		</MainContentContainer>
	);
};

export default MainContent;
