import { FC } from 'react';
import styled from 'styled-components';

import RoundedImg from '../../common/RoundedImg';

import { fontSize } from '../../../styledHelpers/fontSizes';
import { colors } from '../../../styledHelpers/colors';

import statusIcon from '../../../media/icons/sun.svg';

interface IProfilePictureProps {
	src: string;
}

const ProfilePictureContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 30%;
	height: 160px;
`;

const ProfilePictureSubContainer = styled.div`
	position: relative;
`;

const ProfileStatus = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	transform: translate(-5px, -5px);
	width: 35px;
	height: 35px;
	background: linear-gradient(to right, #e0c18f, #a56b2f);
	border: 4px solid ${colors.white};
	border-radius: 50%;

	&::after {
		display: block;
		content: '';
		background-image: url(${statusIcon});
		background-size: 20px;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%;
		height: 100%;
	}
`;

const SeeProfile = styled.span`
	font-size: ${fontSize[23]};
	color: ${colors.azure};
	letter-spacing: 1px;
`;

const ProfilePicture: FC<IProfilePictureProps> = ({ src }) => {
	return (
		<ProfilePictureContainer>
			<ProfilePictureSubContainer>
				<RoundedImg src={src} size={110} />
				<ProfileStatus />
			</ProfilePictureSubContainer>
			<SeeProfile>See profile</SeeProfile>
		</ProfilePictureContainer>
	);
};

export default ProfilePicture;
