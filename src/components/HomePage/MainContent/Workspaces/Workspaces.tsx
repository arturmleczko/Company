import { FC } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import Workspace from './Workspace';

import { SectionHeading } from '../../../../styledHelpers/oftenUsed';

const Heading = styled(SectionHeading)`
	padding-left: 50px;
`;

const WorkspacesSlider = styled(Slider)`
	position: absolute;
	top: 25px;
	left: -20px;
	width: calc(100% + 40px);
	height: 330px;
	margin-top: 30px;
	border-radius: 10px;

	& .slick-slide {
		padding: 0 20px;
		box-sizing: border-box;
	}
`;

const WorkspacesContainer = styled.section`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 100%;
	height: 380px;
	margin-top: 30px;
`;

const Workspaces: FC = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 700,
		slidesToShow: 4,
		slidesToScroll: 1,
	};

	return (
		<WorkspacesContainer>
			<Heading>Workspaces</Heading>
			<WorkspacesSlider {...settings}>
				<Workspace />
				<Workspace />
				<Workspace />
				<Workspace />
				<Workspace />
				<Workspace />
			</WorkspacesSlider>
		</WorkspacesContainer>
	);
};

export default Workspaces;
