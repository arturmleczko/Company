import { FC } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import Workspace from './Workspace';

import { SectionHeading } from '../../../../styledHelpers/oftenUsed';

import { workspacesData } from '../../../../arraysOfData/HomePage/workspaces';

const Heading = styled(SectionHeading)`
	padding-left: 50px;
`;

const WorkspacesContainer = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 380px;
	margin-top: 30px;
`;

const WorkspacesSlider = styled(Slider)`
	width: calc(100vw - 700px);
	height: 330px;
	margin-top: 20px;
	margin-left: -10px;
	margin-right: -10px;
	border-radius: 10px;

	& .slick-slide {
		padding: 0 10px;
		box-sizing: border-box;
	}
`;

const Workspaces: FC = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
	};

	const workspacesList = workspacesData.map(
		({
			workspaceImageSrc,
			workspaceIconSrc,
			workspaceTitle,
			workspaceInfoFirstIconSrc,
			workspaceKind,
			workspaceInfoSecondIconSrc,
			workspaceUsersNumber,
			workspaceDaysSinceLastUpdate,
		}) => (
			<Workspace
				workspaceImageSrc={workspaceImageSrc}
				workspaceIconSrc={workspaceIconSrc}
				workspaceTitle={workspaceTitle}
				workspaceInfoFirstIconSrc={workspaceInfoFirstIconSrc}
				workspaceKind={workspaceKind}
				workspaceInfoSecondIconSrc={workspaceInfoSecondIconSrc}
				workspaceUsersNumber={workspaceUsersNumber}
				workspaceDaysSinceLastUpdate={workspaceDaysSinceLastUpdate}
			/>
		)
	);

	return (
		<WorkspacesContainer>
			<Heading>Workspaces</Heading>
			<WorkspacesSlider {...settings}>{workspacesList}</WorkspacesSlider>
		</WorkspacesContainer>
	);
};

export default Workspaces;
