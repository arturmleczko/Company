import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IState } from '../../../../reducers';
import { IPublicationReducer } from '../../../../reducers/publicationsReducer';
import { IUsersReducer } from '../../../../reducers/usersReducer';
import { IPhotosReducer } from '../../../../reducers/photosReducer';

import { ISinglePublication } from '../../../../entities/publications';
import { ISingleUser } from '../../../../entities/users';
import { ISinglePhoto } from '../../../../entities/photos';

import { colors } from '../../../../styledHelpers/colors';
import { fontSize } from '../../../../styledHelpers/fontSizes';

import Publication from './Publication/Publication';
import { PublicationColor } from './Publication/ColorMatching';

import { SectionHeading } from '../../../../styledHelpers/oftenUsed';

import defaultPublications from '../../../../tools/apiTools/defaultValues/defaultPublications';
import defaultUsers from '../../../../tools/apiTools/defaultValues/defaultUsers';
import defaultPhotos from '../../../../tools/apiTools/defaultValues/defaultPhotos';

import generatePublicationData from './generatePublicationData';

interface IHighlightedPublicationPropsStyle {
	src: string;
}

const HighlightedPublication = styled.div<IHighlightedPublicationPropsStyle>`
	position: relative;
	flex-basis: 30%;
	background-image: ${({ src }) => (src ? `url(${src})` : `url()`)};
	background-position: center;
	background-size: cover;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	z-index: 100;
`;

const HighlightedPublicationContainer = styled.aside`
	padding: 0 90px 60px 50px;

	@media (max-width: 1920px) {
		padding: 0 50px 60px 50px;
	}
`;

const LatestPublications = styled.div`
	flex-basis: 70%;
	padding: 20px 80px 20px 50px;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	box-shadow: 0 1px 1px ${colors.greyFive}, 0 1px 7px ${colors.greyFive},
		0 5px 7px ${colors.greyFive};
	background-color: ${colors.white};
`;

const LastPublicationsContainer = styled.div`
	height: 100%;
`;

const LastPublicationsList = styled.div`
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	grid-gap: 20px;
	margin: 20px 0;
`;

const PublicationsContainer = styled.section`
	display: flex;
	height: auto;
`;

const SeeMore = styled(Link)`
	display: block;
	font-size: ${fontSize[22]};
	color: ${colors.navyBlue};
	font-weight: 500;
	text-decoration: none;
`;

const WhiteOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: flex-end;
	width: 100%;
	height: 100%;
	background-color: ${colors.blackOpacity};
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
`;

const Publications: FC = () => {
	const [publications, setPublications] =
		useState<ISinglePublication[]>(defaultPublications);
	const [users, setUsers] = useState<ISingleUser[]>(defaultUsers);
	const [photos, setPhotos] = useState<ISinglePhoto[]>(defaultPhotos);

	const { publicationsList, usersList, photosList } = useSelector<
		IState,
		IPublicationReducer & IUsersReducer & IPhotosReducer
	>((globalState) => ({
		...globalState.publications,
		...globalState.users,
		...globalState.photos,
	}));

	useEffect(() => {
		if (publicationsList.length !== 0) {
			setPublications(publicationsList);
			setUsers(usersList);
			setPhotos(photosList);
		}
	}, [publicationsList, usersList, photosList]);

	const highlightedPublication = (): JSX.Element => {
		const randomIndex = Math.floor(Math.random() * publications.length);
		const randomPublication = publications[randomIndex];

		const { text, date, photoSrc, name, profileSrc } =
			generatePublicationData(randomPublication, users, photos);

		return (
			<HighlightedPublication src={photoSrc}>
				<WhiteOverlay>
					<HighlightedPublicationContainer>
						<Publication
							publicationColor={PublicationColor.bright}
							publicationText={text}
							publicationDate={date}
							publicationProfileSrc={profileSrc}
							publicationAuthor={name}
						/>
					</HighlightedPublicationContainer>
				</WhiteOverlay>
			</HighlightedPublication>
		);
	};

	const firstThreePublications = publications.slice(0, 3);

	const publicationList = firstThreePublications.map((publication) => {
		const { key, photoSrc, text, date, name, profileSrc } =
			generatePublicationData(publication, users, photos);

		return (
			<Publication
				key={key}
				publicationPhotoSrc={photoSrc}
				publicationColor={PublicationColor.dark}
				publicationText={text}
				publicationDate={date}
				publicationProfileSrc={profileSrc}
				publicationAuthor={name}
			/>
		);
	});

	return (
		<PublicationsContainer>
			{highlightedPublication()}
			<LatestPublications>
				<LastPublicationsContainer>
					<SectionHeading>Latest publications</SectionHeading>
					<LastPublicationsList>
						{publicationList}
					</LastPublicationsList>
					<SeeMore to="/publications">See more publications</SeeMore>
				</LastPublicationsContainer>
			</LatestPublications>
		</PublicationsContainer>
	);
};

export default Publications;
