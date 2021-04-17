import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../../../styledHelpers/colors';
import { fontSize } from '../../../../styledHelpers/fontSizes';

import Publication from '../../../common/Publication/Publication';
import { PublicationColor } from '../../../common/Publication/ColorMatching';

import highlightedImg from '../../../../media/images/highlighted-publication.jpg';

import { SectionHeading } from '../../../../styledHelpers/oftenUsed';

import { publicationsData } from '../../../../arraysOfData/HomePage/publications';

const HighlightedPublication = styled.div`
	position: relative;
	flex-basis: 30%;
	height: 100%;
	background-image: url(${highlightedImg});
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
	const highlightedPublication = (): JSX.Element => {
		const randomIndex = Math.floor(Math.random() * publicationsData.length);
		const randomPublication = publicationsData[randomIndex];
		const {
			publicationText,
			publicationDate,
			publicationProfileSrc,
			publicationAuthor,
		} = randomPublication;
		return (
			<Publication
				publicationColor={PublicationColor.bright}
				publicationText={publicationText}
				publicationDate={publicationDate}
				publicationProfileSrc={publicationProfileSrc}
				publicationAuthor={publicationAuthor}
			/>
		);
	};

	const publicationList = publicationsData.map(
		({
			publicationId,
			publicationPhotoSrc,
			publicationColor,
			publicationText,
			publicationDate,
			publicationProfileSrc,
			publicationAuthor,
		}) => (
			<Publication
				key={publicationId}
				publicationPhotoSrc={publicationPhotoSrc}
				publicationColor={publicationColor}
				publicationText={publicationText}
				publicationDate={publicationDate}
				publicationProfileSrc={publicationProfileSrc}
				publicationAuthor={publicationAuthor}
			/>
		)
	);

	return (
		<PublicationsContainer>
			<HighlightedPublication>
				<WhiteOverlay>
					<HighlightedPublicationContainer>
						{highlightedPublication()}
					</HighlightedPublicationContainer>
				</WhiteOverlay>
			</HighlightedPublication>
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
