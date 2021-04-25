import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IState } from '../../../reducers';
import { IUsersReducer } from '../../../reducers/usersReducer';
import { IPhotosReducer } from '../../../reducers/photosReducer';

import { ISingleUser } from '../../../entities/users';
import { ISinglePhoto } from '../../../entities/photos';

import matchUserToPhoto from '../../../tools/matchUserToPhoto';

import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';
import { RoundedContainer } from '../../../styledHelpers/oftenUsed';

import YourReference from './YourReference';
import Reference from './Reference';
import RoundedImg from '../../common/RoundedImg';

import {
	yourReferencesData,
	referencesData,
} from '../../../arraysOfData/HomePage/sidebar';

import defaultUser from '../../../arraysOfData/HomePage/defaultValues/defaultUser';
import defaultPhotos from '../../../arraysOfData/HomePage/defaultValues/defaultPhotos';

const AboutYou = styled(RoundedContainer)`
	width: 100%;
`;
const FullName = styled.p`
	font-size: ${fontSize[22]};
	color: ${colors.navyBlue};
	font-weight: 500;
`;

const JobInfo = styled.p`
	font-size: ${fontSize[19]};
	color: ${colors.greyTwo};
`;

const Profile = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	height: 260px;
	font-size: 22px;
	padding: 30px;
	border-bottom: 3px solid ${colors.greyFive};
	text-decoration: none;
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
			const singleUser = usersList[1];

			setUser(singleUser);
			setPhotos(photosList);
		}
	}, [usersList, photosList]);

	const { url } = matchUserToPhoto(photos, user.id);
	const { name, username, company } = user;

	const fullName = `${name} ${username}`;
	const companyName = company.name;

	const yourReferences = yourReferencesData.map(
		({
			yourReferenceId,
			yourReferenceTo,
			yourReferenceIconSrc,
			yourReferenceBtnSrc,
			yourReferenceText,
		}) => (
			<YourReference
				key={yourReferenceId}
				yourReferenceTo={yourReferenceTo}
				yourReferenceIconSrc={yourReferenceIconSrc}
				yourReferenceBtnSrc={yourReferenceBtnSrc}
				yourReferenceText={yourReferenceText}
			/>
		)
	);

	const references = referencesData.map(
		({ referenceId, referenceTo, referenceIconSrc, referenceText }) => (
			<Reference
				key={referenceId}
				referenceTo={referenceTo}
				referenceIconSrc={referenceIconSrc}
				referenceText={referenceText}
			/>
		)
	);

	return (
		<SidebarContainer>
			<AboutYou>
				<Profile to="/profile">
					<RoundedImg src={url} size={100} />
					<FullName>{fullName}</FullName>
					<JobInfo>{companyName}</JobInfo>
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
