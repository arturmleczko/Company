import { FC } from 'react';
import styled from 'styled-components';

import { Container } from '../../styledHelpers/oftenUsed';

import Sidebar from './Sidebar/Sidebar';
import MainContent from './MainContent/MainContent';

const ContentContainer = styled(Container)`
	display: flex;
	height: 92vh;
	justify-content: center;
	padding-top: 30px;
`;

const HomePage: FC = () => {
	return (
		<>
			<ContentContainer>
				<Sidebar />
				<MainContent />
			</ContentContainer>
		</>
	);
};

export default HomePage;
