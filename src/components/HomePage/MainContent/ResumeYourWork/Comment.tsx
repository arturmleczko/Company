import { FC } from 'react';
import styled from 'styled-components';

import InfoIcons from '../../../common/InfoIcons';
import { Shape } from '../../../common/ImageWithText';

import { RoundedContainer, Dot } from '../../../../styledHelpers/oftenUsed';
import { fontSize } from '../../../../styledHelpers/fontSizes';
import { colors } from '../../../../styledHelpers/colors';

interface ICommentProps {
	title: string;
	text: string;
	companySrc: string;
	companyName: string;
	workspaceSrc: string;
	workspaceName: string;
	name: string;
	lastUpdateDays: number;
}

const CommentContainer = styled(RoundedContainer)`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 195px;
	margin-top: 10px;
	margin-bottom: 20px;
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
	width: 70%;
	padding-top: 25px;
	margin-left: -15px;
`;

const Text = styled.p`
	font-size: ${fontSize[22]};
	color: ${colors.greyNine};
	padding-top: 25px;
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

const Comment: FC<ICommentProps> = ({
	title,
	text,
	companySrc,
	companyName,
	workspaceSrc,
	workspaceName,
	name,
	lastUpdateDays,
}) => {
	return (
		<CommentContainer>
			<ContentContainer>
				<Title>{title}</Title>
				<Text>{text}</Text>
				<InfoContainer>
					<InfoIcons
						firstSrc={companySrc}
						secondSrc={workspaceSrc}
						firstText={companyName}
						secondText={workspaceName}
						firstShape={Shape.circle}
						secondShape={Shape.square}
						firstBoxShadow={true}
					></InfoIcons>
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
