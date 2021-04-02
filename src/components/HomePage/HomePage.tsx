import { FC } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Container } from '../../styledHelpers/oftenUsed';

import Sidebar from './Sidebar/Sidebar';
import MainContent from './MainContent/MainContent';
import Publications from '../Publications/Publications';
import Ecosystem from '../Ecosystem/Ecosystem';
import Entities from '../Entities/Entities';
import Network from '../Network/Network';

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
						<Route path="/publications">
							<Publications />
						</Route>
						<Route path="/ecosystem">
							<Ecosystem />
						</Route>
						<Route path="/entities">
							<Entities />
						</Route>
						<Route path="/network">
							<Network />
						</Route>
					</Switch>
				</ContentContainer>
			</Router>
		</>
	);
};

export default HomePage;
