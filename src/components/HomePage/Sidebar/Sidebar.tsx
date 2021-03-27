import { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';

import YourReference from './YourReference';

const AboutYou = styled.div`
	width: 100%;
	background-color: ${colors.white};
	border-radius: 10px;
	box-shadow: 0 1px 1px ${colors.greyFive}, 0 1px 7px ${colors.greyFive},
		0 5px 7px ${colors.greyFive};
`;

const JobInfo = styled.p`
	padding-top: 15px;
	font-size: ${fontSize[20]};
	color: ${colors.greyTwo};
`;

const FullName = styled.p`
	padding-top: 20px;
	font-size: ${fontSize[22]};
	color: ${colors.navyBlue};
	font-weight: 500;
`;

const Profile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 22px;
	padding: 30px;
	border-bottom: 3px solid ${colors.greyFive};
	cursor: pointer;
`;

const ProfilePhoto = styled.img`
	width: 110px;
	height: 110px;
	border-radius: 50%;
`;

const SidebarContainer = styled.aside`
	width: 17%;
`;

const YourReferences = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 20px 50px;
`;

const Sidebar: FC = () => {
	return (
		<SidebarContainer>
			<AboutYou>
				<Profile>
					<ProfilePhoto src="icons/profile.jpg" alt="" />
					<FullName>Humberta Swift</FullName>
					<JobInfo>Job title - Company</JobInfo>
				</Profile>
				<YourReferences>
					<YourReference
						firstSrc="icons/people.svg"
						secondSrc="icons/user-plus.svg"
						text="Your network"
					/>
					<YourReference
						firstSrc="icons/publications.svg"
						secondSrc="icons/plus.svg"
						text="Your Publications"
					/>
				</YourReferences>
			</AboutYou>
		</SidebarContainer>
	);
};

export default Sidebar;
