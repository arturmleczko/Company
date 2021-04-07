import { FC } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import { Container } from '../../styledHelpers/oftenUsed';

import Sidebar from './Sidebar/Sidebar';
import MainContent from './MainContent/MainContent';

const ContentContainer = styled(Container)`
	display: flex;
	height: 92vh;
	padding-top: 30px;
	padding-bottom: 100px;
`;

const HomePage: FC = () => {
	return (
		<>
			<Router>
				<ContentContainer>
					<Sidebar />
					<MainContent />
				</ContentContainer>
			</Router>
		</>
	);
};

export default HomePage;
