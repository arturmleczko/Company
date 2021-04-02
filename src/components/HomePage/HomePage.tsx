import { FC } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Container } from '../../styledHelpers/oftenUsed';

import Sidebar from './Sidebar/Sidebar';
import Publications from '../Publications/Publications';
import Ecosystem from '../Ecosystem/Ecosystem';
import Entities from '../Entities/Entities';
import Network from '../Network/Network';

const ContentContainer = styled(Container)`
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
						<Route path="/" exact component={Sidebar} />
						<Route path="/publications" component={Publications} />
						<Route path="/ecosystem" component={Ecosystem} />
						<Route path="/entities" component={Entities} />
						<Route path="/network" component={Network} />
					</Switch>
				</ContentContainer>
			</Router>
		</>
	);
};

export default HomePage;
