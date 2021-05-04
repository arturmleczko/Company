import { FC } from 'react';
import styled from 'styled-components';

import Profile from './Profile/Profile';
import OtherInformation from './OtherInformation/OtherInformation';

import ImageWithText, { Shape } from '../common/ImageWithText';
import CustomIcon from '../common/CustomIcon';

import { colors } from '../../styledHelpers/colors';
import { fontSize } from '../../styledHelpers/fontSizes';

import { RoundedContainer } from '../../styledHelpers/oftenUsed';

import closeIcon from '../../media/icons/cross.svg';

import { activitiesData } from '../../arraysOfData/ProfilePage/Profile/activities';

const ActivitiesContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	padding: 0 60px;
`;

const ActivitiesList = styled.ul`
	display: flex;
	padding: 0 30px;
`;

const ActivityItem = styled.li`
	margin: 0 30px;
	cursor: pointer;
`;

const ProfileContentContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 30px 0;
`;

const ProfilePageContainer = styled(RoundedContainer)`
	display: flex;
	flex-direction: column;
	width: 55%;
	margin: 0 auto 100px auto;
`;

const ProfilePage: FC = () => {
	const activitiesList = activitiesData.map(({ id, src, text }) => (
		<ActivityItem key={id}>
			<ImageWithText
				src={src}
				size={30}
				shape={Shape.square}
				text={text}
				textPaddingLeft={25}
				color={colors.darkNavyBlue}
				textSize={fontSize[23]}
				fontWeight={500}
			/>
		</ActivityItem>
	));

	return (
		<ProfilePageContainer>
			<ProfileContentContainer>
				<ActivitiesContainer>
					<ActivitiesList>{activitiesList}</ActivitiesList>
					<CustomIcon src={closeIcon} size={35} />
				</ActivitiesContainer>
				<Profile />
				<OtherInformation />
			</ProfileContentContainer>
		</ProfilePageContainer>
	);
};

export default ProfilePage;
