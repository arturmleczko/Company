import { FC } from 'react';
import styled from 'styled-components';

import { RoundedContainer, Dot } from '../../../styledHelpers/oftenUsed';
import { fontSize } from '../../../styledHelpers/fontSizes';
import { colors } from '../../../styledHelpers/colors';

import { adjustColorToWorkArea } from './WorkArea/adjustColorToWorkArea';

interface ICommentProps {
	title: string;
	text: string;
	name: string;
	workAreaSrc: string;
	workAreaName: string;
	lastUpdateDays: number;
}

interface IWorkAreaName {
	workAreaColor: string | undefined;
}

const CommentContainer = styled(RoundedContainer)`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 10px;
	margin-bottom: 25px;
`;

const ContentContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 25px 50px;
`;

const CustomDot = styled(Dot)`
	display: block;
`;

const InfoContainer = styled.div`
	display: flex;
	align-items: center;
	padding-top: 25px;
`;

const Text = styled.p`
	font-size: ${fontSize[22]};
	color: ${colors.greyNine};
	padding-top: 25px;
	line-height: 1.3;
`;

const Title = styled.h2`
	font-size: ${fontSize[23]};
	color: ${colors.navyBlue};
`;

const UpdateInfo = styled.p`
	padding-left: 5px;
	font-size: ${fontSize[19]};
	color: ${colors.greyTwo};
`;

const WorkAreaIcon = styled.img`
	width: 25px;
	height: 25px;
`;

const WorkAreaName = styled.span<IWorkAreaName>`
	font-size: ${fontSize[19]};
	font-weight: 400;
	color: ${({ workAreaColor }) => (workAreaColor ? workAreaColor : '')};
	padding-left: 10px;
	padding-right: 5px;
`;

const Comment: FC<ICommentProps> = ({
	title,
	text,
	name,
	workAreaSrc,
	workAreaName,
	lastUpdateDays,
}) => {
	const workAreaColor = adjustColorToWorkArea(workAreaName);

	return (
		<CommentContainer>
			<ContentContainer>
				<Title>{title}</Title>
				<Text>{text}</Text>
				<InfoContainer>
					<WorkAreaIcon src={workAreaSrc} />
					<WorkAreaName workAreaColor={workAreaColor}>
						{workAreaName}
					</WorkAreaName>
					<CustomDot />
					<UpdateInfo>
						Last update {lastUpdateDays} days ago by {name}
					</UpdateInfo>
				</InfoContainer>
			</ContentContainer>
		</CommentContainer>
	);
};

export default Comment;
