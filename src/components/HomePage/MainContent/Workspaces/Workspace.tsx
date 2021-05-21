import { FC } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import CustomIcon from '../../../common/CustomIcon';
import InfoIcons from '../../../common/InfoIcons';
import { Shape } from '../../../common/ImageWithText';

import { colors } from '../../../../styledHelpers/colors';
import { fontSize } from '../../../../styledHelpers/fontSizes';
import { RoundedContainer } from '../../../../styledHelpers/oftenUsed';

export interface IWorkspaceProps {
	workspaceImageSrc: string;
	workspaceIconSrc: string;
	workspaceTitle: string;
	workspaceInfoFirstIconSrc: string;
	workspaceKind: string;
	workspaceInfoSecondIconSrc: string;
	workspaceUsersNumber: number;
	workspaceDaysSinceLastUpdate: number;
	workspaceReferenceTo: string;
}

interface IWorkspacePropsStyle {
	workspaceImageSrc: string;
}

interface ILocation {
	pathname: string;
	state: {
		backgroundImage: string;
		icon: string;
		title: string;
	};
}

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 216px;
	padding: 0 15px 15px 15px;
`;

const Header = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 136px;
	padding: 20px;
	cursor: pointer;
`;

const Heading = styled.h2`
	padding-left: 25px;
	font-size: ${fontSize[22]};
	color: ${colors.darkNavyBlue};
	font-weight: 500;
`;

const HeaderIconContainer = styled(RoundedContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 136px;
	height: 136px;
`;

const PhotoContainer = styled.div<IWorkspacePropsStyle>`
	height: 144px;
	background-image: url(${({ workspaceImageSrc }) => workspaceImageSrc});
	background-size: cover;
	background-position: center;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

const UpdateInfo = styled.p`
	padding-left: 5px;
	font-size: ${fontSize[17]};
	color: ${colors.greyTwo};
`;

const WorkspaceContainer = styled(RoundedContainer)`
	position: relative;
	height: 360px;
	margin-bottom: 7px;
`;

const WorkspaceInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 93px;
	padding-top: 20px;
`;

const Workspace: FC<IWorkspaceProps> = ({
	workspaceImageSrc,
	workspaceIconSrc,
	workspaceTitle,
	workspaceInfoFirstIconSrc,
	workspaceKind,
	workspaceInfoSecondIconSrc,
	workspaceUsersNumber,
	workspaceDaysSinceLastUpdate,
	workspaceReferenceTo,
}) => {
	const history = useHistory();

	const handleOnClick = () => {
		const location: ILocation = {
			pathname: workspaceReferenceTo,
			state: {
				backgroundImage: workspaceImageSrc,
				icon: workspaceIconSrc,
				title: `${workspaceTitle} holdings`,
			},
		};

		history.push(location);
	};

	const howManyDaysAgoInfo: string =
		workspaceDaysSinceLastUpdate > 1
			? `${workspaceDaysSinceLastUpdate} days ago`
			: `${workspaceDaysSinceLastUpdate} day ago`;

	return (
		<WorkspaceContainer>
			<PhotoContainer
				workspaceImageSrc={workspaceImageSrc}
			></PhotoContainer>
			<ContentContainer>
				<Header onClick={handleOnClick}>
					<HeaderIconContainer shadowWidth={5}>
						<CustomIcon src={workspaceIconSrc} size={70} />
					</HeaderIconContainer>
					<Heading>{workspaceTitle}</Heading>
				</Header>
				<WorkspaceInfo>
					<InfoIcons
						firstSrc={workspaceInfoFirstIconSrc}
						secondSrc={workspaceInfoSecondIconSrc}
						firstText={workspaceKind}
						secondText={`${workspaceUsersNumber} users`}
						firstShape={Shape.square}
						secondShape={Shape.square}
					/>
					<UpdateInfo>Last update {howManyDaysAgoInfo}</UpdateInfo>
				</WorkspaceInfo>
			</ContentContainer>
		</WorkspaceContainer>
	);
};

export default Workspace;
