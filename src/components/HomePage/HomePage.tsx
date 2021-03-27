import { FC } from 'react';
import styled from 'styled-components';

import { Container } from '../../styledHelpers/oftenUsed';

import Sidebar from './Sidebar/Sidebar';

const ContentContainer = styled(Container)`
	height: 92vh;
	padding-top: 30px;
	padding-bottom: 100px;
`;

const HomePage: FC = () => {
	return (
		<ContentContainer>
			<Sidebar />
		</ContentContainer>
	);
};

export default HomePage;
