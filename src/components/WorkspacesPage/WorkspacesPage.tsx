import { FC } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Banner from './Banner';
import CorporateMatters from './CorporateMatters/CorporateMatters';
import LatestUpdates from './LastUpdates/LatestUpdates';

import { RoundedContainer } from '../../styledHelpers/oftenUsed';

interface ILocationState {
	backgroundImage: string;
	icon: string;
	title: string;
}

const WorkspacesPageContainer = styled(RoundedContainer)`
	width: 100%;
	padding: 50px 0 30px 0;
	margin-bottom: 100px;
`;

const WorkspacesPage: FC = () => {
	const history = useHistory();
	const { backgroundImage, icon, title } = history.location
		.state as ILocationState;

	return (
		<WorkspacesPageContainer>
			<Banner
				backgroundImage={backgroundImage}
				icon={icon}
				title={title}
			/>
			<CorporateMatters />
			<LatestUpdates />
		</WorkspacesPageContainer>
	);
};

export default WorkspacesPage;
