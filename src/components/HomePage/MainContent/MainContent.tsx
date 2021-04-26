import { FC } from 'react';
import { Switch, Route } from 'react-router';
import styled from 'styled-components';

import Publications from './Publications/Publications';
import Workspaces from './Workspaces/Workspaces';
import ResumeYourWork from './ResumeYourWork/ResumeYourWork';
import ProfilePage from '../../ProfilePage/ProfilePage';
import PublicationsPage from '../../PublicationsPage/PublicationsPage';
import EcosystemPage from '../../EcosystemPage/EcosystemPage';
import EntitiesPage from '../../EntitiesPage/EntitiesPage';
import NetworkPage from '../../NetworkPage/NetworkPage';
import WorkspacesPage from '../../WorkspacesPage/WorkspacesPage';
import PeoplePage from '../../PeoplePage/PeoplePage';
import AdministrationPage from '../../AdministrationPage/AdministrationPage';
import PrivacyPage from '../../PrivacyPage/PrivacyPage';
import SettingsPage from '../../SettingsPage/SettingsPage';
import LogoutPage from '../../LogoutPage/LogoutPage';

const MainContentContainer = styled.main`
	flex-basis: calc(100vw - 700px);
	margin-left: 100px;
`;

const MainContent: FC = () => {
	return (
		<MainContentContainer>
			<Switch>
				<Route path="/" exact>
					<Publications />
					<Workspaces />
					<ResumeYourWork />
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
				<Route path="/workspaces">
					<WorkspacesPage />
				</Route>
				<Route path="/people">
					<PeoplePage />
				</Route>
				<Route path="/administration">
					<AdministrationPage />
				</Route>
				<Route path="/privacy">
					<PrivacyPage />
				</Route>
				<Route path="/settings">
					<SettingsPage />
				</Route>
				<Route path="/logout">
					<LogoutPage />
				</Route>
			</Switch>
		</MainContentContainer>
	);
};

export default MainContent;
