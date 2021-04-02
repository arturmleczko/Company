import { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';

import YourReference from './YourReference';
import Reference from './Reference';

import profileImg from '../../../media/images/profile.jpg';
import peopleIcon from '../../../media/icons/people.svg';
import userPlusIcon from '../../../media/icons/user-plus.svg';
import publicationsIcon from '../../../media/icons/publications.svg';
import plusIcon from '../../../media/icons/plus.svg';
import ecosystemIcon from '../../../media/icons/ecosystem.svg';
import entities from '../../../media/icons/entities2.svg';

const AboutYou = styled.div`
	width: 100%;
	background-color: ${colors.white};
	border-radius: 10px;
	box-shadow: 0 1px 1px ${colors.greyFive}, 0 1px 7px ${colors.greyFive},
		0 5px 7px ${colors.greyFive};
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

const References = styled.div`
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

const YourReferences = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 150px;
	padding: 30px 50px;
`;

const Sidebar: FC = () => {
	return (
		<SidebarContainer>
			<AboutYou>
				<Profile>
					<ProfilePhoto src={profileImg} alt="" />
					<FullName>Humberta Swift</FullName>
					<JobInfo>Job title - Company</JobInfo>
				</Profile>
				<YourReferences>
					<YourReference
						to="/network"
						firstSrc={peopleIcon}
						secondSrc={userPlusIcon}
						text="Your network"
					/>
					<YourReference
						to="/publications"
						firstSrc={publicationsIcon}
						secondSrc={plusIcon}
						text="Your Publications"
					/>
				</YourReferences>
			</AboutYou>
			<References>
				<Reference
					to="/publications"
					src={publicationsIcon}
					text="Publications"
				/>
				<Reference
					to="/ecosystem"
					src={ecosystemIcon}
					text="Ecosystem"
				/>
				<Reference to="/entities" src={entities} text="Entities" />
			</References>
		</SidebarContainer>
	);
};

export default Sidebar;
