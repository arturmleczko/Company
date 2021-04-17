import { FC } from 'react';
import { Switch, Route } from 'react-router';
import styled from 'styled-components';

import Publications from './Publications/Publications';
import Workspaces from './Workspaces/Workspaces';
import ProfilePage from '../../ProfilePage/ProfilePage';
import PublicationsPage from '../../PublicationsPage/PublicationsPage';
import EcosystemPage from '../../EcosystemPage/EcosystemPage';
import EntitiesPage from '../../EntitiesPage/EntitiesPage';
import NetworkPage from '../../NetworkPage/NetworkPage';

const MainContentContainer = styled.main`
	flex-basis: calc(100% - 700px);
	margin-left: 100px;
`;

const MainContent: FC = () => {
	return (
		<MainContentContainer>
			<Switch>
				<Route path="/" exact>
					<Publications />
					<Workspaces />
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
		</MainContentContainer>
	);
};

export default MainContent;
