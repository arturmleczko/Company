import { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';
import { RoundedContainer } from '../../../styledHelpers/oftenUsed';

import YourReference from './YourReference';
import Reference from './Reference';

import profileImg from '../../../media/images/profile.jpg';

import {
	yourReferencesData,
	referencesData,
} from '../../../arraysOfData/sidebar';

const AboutYou = styled(RoundedContainer)`
	width: 100%;
`;

const JobInfo = styled.p`
	font-size: ${fontSize[19]};
	color: ${colors.greyTwo};
`;

const FullName = styled.p`
	font-size: ${fontSize[22]};
	color: ${colors.navyBlue};
	font-weight: 500;
`;

const Profile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	height: 260px;
	font-size: 22px;
	padding: 30px;
	border-bottom: 3px solid ${colors.greyFive};
	cursor: pointer;
`;

const ProfilePhoto = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
`;

const ReferencesContainer = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 230px;
	padding: 30px 50px;
`;

const SidebarContainer = styled.aside`
	width: 400px;
`;

const YourReferencesContainer = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 150px;
	padding: 30px 50px;
`;

const Sidebar: FC = () => {
	const yourReferences = yourReferencesData.map(
		({ to, firstSrc, secondSrc, text }) => (
			<YourReference
				to={to}
				firstSrc={firstSrc}
				secondSrc={secondSrc}
				text={text}
			/>
		)
	);

	const references = referencesData.map(({ to, src, text }) => (
		<Reference to={to} src={src} text={text} />
	));

	return (
		<SidebarContainer>
			<AboutYou>
				<Profile>
					<ProfilePhoto src={profileImg} alt="" />
					<FullName>Humberta Swift</FullName>
					<JobInfo>Job title - Company</JobInfo>
				</Profile>
				<YourReferencesContainer>
					{yourReferences}
				</YourReferencesContainer>
			</AboutYou>
			<ReferencesContainer>{references}</ReferencesContainer>
		</SidebarContainer>
	);
};

export default Sidebar;
