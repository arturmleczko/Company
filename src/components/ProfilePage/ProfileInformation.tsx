import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { useSelector } from 'react-redux';

import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photosReducer';
import { IUsersReducer } from '../../reducers/usersReducer';

import RoundedImg from '../common/RoundedImg';

import { ISinglePhoto } from '../../entities/photos';
import { ISingleUser } from '../../entities/users';

import { fontSize } from '../../styledHelpers/fontSizes';
import { colors } from '../../styledHelpers/colors';

import statusIcon from '../../media/icons/sun.svg';

import profile from '../../media/images/profile1.jpg';

import defaultUser from '../../tools/apiTools/defaultValues/defaultUser';
import defaultPhotos from '../../tools/apiTools/defaultValues/defaultPhotos';
import mainUserIdx from '../../tools/apiTools/mainUserIdx';
import matchUserToPhoto from '../../tools/apiTools/matchUserToPhoto';

const FormContainer = styled(Form)`
	width: 100%;
	padding: 60px 0;
`;

const ProfileData = styled.div`
	display: flex;
	width: 50%;
`;

const ProfilePicture = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 30%;
`;

const ProfilePictureContainer = styled.div`
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
	padding-top: 25px;
	font-size: ${fontSize[23]};
	color: ${colors.azure};
	font-weight: 500;
	letter-spacing: 1px;
`;

const initialValues = {};

const onSubmit = () => {};

const ProfileInformation: FC = () => {
	const [user, setUser] = useState<ISingleUser>(defaultUser);
	const [photos, setPhotos] = useState<ISinglePhoto[]>(defaultPhotos);

	const { usersList, photosList } = useSelector<
		IState,
		IUsersReducer & IPhotosReducer
	>((globalState) => ({
		...globalState.users,
		...globalState.photos,
	}));

	useEffect(() => {
		if (usersList.length !== 0) {
			const singleUser = usersList[mainUserIdx];

			setUser(singleUser);
			setPhotos(photosList);
		}
	}, [usersList, photosList]);

	const { url } = matchUserToPhoto(photos, user.id);

	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit}>
			<FormContainer>
				<ProfileData>
					<ProfilePicture>
						<ProfilePictureContainer>
							<RoundedImg src={url} size={110} />
							<ProfileStatus />
						</ProfilePictureContainer>
						<SeeProfile>See profile</SeeProfile>
					</ProfilePicture>
				</ProfileData>
			</FormContainer>
		</Formik>
	);
};

export default ProfileInformation;
