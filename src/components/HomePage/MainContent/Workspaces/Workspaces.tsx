import { FC } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import Workspace from './Workspace';

import { SectionHeading } from '../../../../styledHelpers/oftenUsed';
import { colors } from '../../../../styledHelpers/colors';

import { workspacesData } from '../../../../arraysOfData/HomePage/workspaces';

import arrowLeft from '../../../../media/icons/arrow-left.svg';
import arrowRight from '../../../../media/icons/arrow-right.svg';

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
	width: calc(100vw - 680px);
	height: 330px;
	margin-top: 20px;
	margin-left: -10px;
	margin-right: -10px;
	border-radius: 10px;

	& .slick-slide {
		padding: 0 10px;
		box-sizing: border-box;
		outline: none;
	}

	& .slick-arrow {
		position: absolute;
		width: 40px;
		height: 40px;
		border-radius: 50px;
		background-color: ${colors.white};
		background-size: 25px 25px;
		background-position: center;
		background-repeat: no-repeat;
		box-shadow: 0 0 5px ${colors.greyFive};
		opacity: 0;
		transition: opacity 0.2s ease-in-out;

		&.slick-prev {
			left: -60px;
			background-image: url(${arrowLeft});
		}

		&.slick-next {
			right: -60px;
			background-image: url(${arrowRight});
		}

		&:hover {
			opacity: 1;
		}

		&::before {
			display: none;
		}
	}
`;

const Workspaces: FC = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		swipeToSlide: false,
	};

	const workspacesList = workspacesData.map(
		({
			workspaceId,
			workspaceReference,
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
				key={workspaceId}
				workspaceReference={workspaceReference}
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
