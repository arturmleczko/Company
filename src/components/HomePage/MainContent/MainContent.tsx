import { FC, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import Publications from './Publications/Publications';
import Workspaces from './Workspaces/Workspaces';
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

import { getUsers } from '../../../actions/usersAction';
import { getPosts } from '../../../actions/postsAction';

type GetUsers = ReturnType<typeof getUsers>;
type GetPosts = ReturnType<typeof getPosts>;

const MainContentContainer = styled.main`
	flex-basis: calc(100vw - 700px);
	margin-left: 100px;
`;

const MainContent: FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch<GetUsers>(getUsers());
		dispatch<GetPosts>(getPosts());
	}, [dispatch]);

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
