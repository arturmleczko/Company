import { FC } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Container } from '../../styledHelpers/oftenUsed';

import Sidebar from './Sidebar/Sidebar';
import MainContent from './MainContent/MainContent';
import ProfilePage from '../ProfilePage/ProfilePage';
import PublicationsPage from '../PublicationsPage/PublicationsPage';
import EcosystemPage from '../EcosystemPage/EcosystemPage';
import EntitiesPage from '../EntitiesPage/EntitiesPage';
import NetworkPage from '../NetworkPage/NetworkPage';

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
					<Switch>
						<Route path="/" exact>
							<Sidebar />
							<MainContent />
						</Route>
						<Route path="/profile">
							<ProfilePage />
						</Route>
						<Route path="/publications">
							<PublicationsPage />
						</Route>
						<Route path="/ecosystem">
							<EcosystemPage />
						</Route>
						<Route path="/entities">
							<EntitiesPage />
						</Route>
						<Route path="/network">
							<NetworkPage />
						</Route>
					</Switch>
				</ContentContainer>
			</Router>
		</>
	);
};

export default HomePage;
