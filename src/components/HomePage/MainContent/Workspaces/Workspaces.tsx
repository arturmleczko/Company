import { FC } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import Workspace from './Workspace';

import { SectionHeading } from '../../../../styledHelpers/oftenUsed';

import contractImage from '../../../../media/images/workspaces-contract.jpg';
import entities1Icon from '../../../../media/icons/entities.svg';
import entities2Icon from '../../../../media/icons/entities2.svg';
import people from '../../../../media/icons/people.svg';

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
		slidesToScroll: 4,
	};

	return (
		<WorkspacesContainer>
			<Heading>Workspaces</Heading>
			<WorkspacesSlider {...settings}>
				<Workspace
					workspaceImageSrc={contractImage}
					workspaceIconSrc={entities2Icon}
					workspaceInfoFirstIconSrc={entities1Icon}
					workspaceInfoSecondIconSrc={people}
				/>
				<Workspace
					workspaceImageSrc={contractImage}
					workspaceIconSrc={entities2Icon}
					workspaceInfoFirstIconSrc={entities1Icon}
					workspaceInfoSecondIconSrc={people}
				/>
				<Workspace
					workspaceImageSrc={contractImage}
					workspaceIconSrc={entities2Icon}
					workspaceInfoFirstIconSrc={entities1Icon}
					workspaceInfoSecondIconSrc={people}
				/>
				<Workspace
					workspaceImageSrc={contractImage}
					workspaceIconSrc={entities2Icon}
					workspaceInfoFirstIconSrc={entities1Icon}
					workspaceInfoSecondIconSrc={people}
				/>
				<Workspace
					workspaceImageSrc={contractImage}
					workspaceIconSrc={entities2Icon}
					workspaceInfoFirstIconSrc={entities1Icon}
					workspaceInfoSecondIconSrc={people}
				/>
				<Workspace
					workspaceImageSrc={contractImage}
					workspaceIconSrc={entities2Icon}
					workspaceInfoFirstIconSrc={entities1Icon}
					workspaceInfoSecondIconSrc={people}
				/>
				<Workspace
					workspaceImageSrc={contractImage}
					workspaceIconSrc={entities2Icon}
					workspaceInfoFirstIconSrc={entities1Icon}
					workspaceInfoSecondIconSrc={people}
				/>
			</WorkspacesSlider>
		</WorkspacesContainer>
	);
};

export default Workspaces;
