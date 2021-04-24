import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IState } from '../../../../reducers';
import { IPostsReducer } from '../../../../reducers/postsReducer';
import { ISinglePost } from '../../../../entities/posts';
import dataDressing from './publicationsHelpers';

import { colors } from '../../../../styledHelpers/colors';
import { fontSize } from '../../../../styledHelpers/fontSizes';

import Publication from '../../../common/Publication/Publication';
import { PublicationColor } from '../../../common/Publication/ColorMatching';

import { SectionHeading } from '../../../../styledHelpers/oftenUsed';

import defaultPublications from './defaultPublications';

interface IHighlightedPublicationPropsStyle {
	src: string;
}

const HighlightedPublication = styled.div<IHighlightedPublicationPropsStyle>`
	position: relative;
	flex-basis: 30%;
	height: 100%;
	background-image: ${({ src }) => (src ? `url(${src})` : `url()`)};
	background-position: center;
	background-size: cover;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	z-index: 100;
`;

const HighlightedPublicationContainer = styled.aside`
	padding: 0 90px 60px 50px;
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
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 100%;
`;

const PublicationsContainer = styled.section`
	display: flex;
	height: 475px;
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
	const [publications, setPublications] = useState<ISinglePost[]>(
		defaultPublications
	);

	const { postsList } = useSelector<IState, IPostsReducer>((globalState) => ({
		...globalState.posts,
	}));

	useEffect(() => {
		if (postsList.length !== 0) {
			setPublications(postsList);
		}
	}, [postsList]);

	const highlightedPublication = (): JSX.Element => {
		const randomIndex = Math.floor(Math.random() * publications.length);
		const randomPublication = publications[randomIndex];
		const { text, publishDate, owner, image } = randomPublication;
		const { picture, fullName, publishedDate } = dataDressing(
			owner,
			publishDate
		);

		return (
			<HighlightedPublication src={image}>
				<WhiteOverlay>
					<HighlightedPublicationContainer>
						<Publication
							publicationColor={PublicationColor.bright}
							publicationText={text}
							publicationDate={publishedDate}
							publicationProfileSrc={picture}
							publicationAuthor={fullName}
						/>
					</HighlightedPublicationContainer>
				</WhiteOverlay>
			</HighlightedPublication>
		);
	};

	const publicationList = publications
		.slice(0, 3)
		.map(({ text, image, publishDate, owner }) => {
			const { id, picture, fullName, publishedDate } = dataDressing(
				owner,
				publishDate
			);

			return (
				<Publication
					key={id}
					publicationPhotoSrc={image}
					publicationColor={PublicationColor.dark}
					publicationText={text}
					publicationDate={publishedDate}
					publicationProfileSrc={picture}
					publicationAuthor={fullName}
				/>
			);
		});

	return (
		<PublicationsContainer>
			{highlightedPublication()}
			<LatestPublications>
				<LastPublicationsContainer>
					<SectionHeading>Latest publications</SectionHeading>
					{publicationList}
					<SeeMore to="/publications">See more publications</SeeMore>
				</LastPublicationsContainer>
			</LatestPublications>
		</PublicationsContainer>
	);
};

export default Publications;
