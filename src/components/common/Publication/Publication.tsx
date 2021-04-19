import { FC } from 'react';
import styled from 'styled-components';

import ImageWithText, { Shape } from '../ImageWithText';

import { fontSize } from '../../../styledHelpers/fontSizes';
import {
	PublicationColor,
	getTextColor,
	getDateColor,
	getAuthorColor,
} from './ColorMatching';

export interface IPublicationProps {
	publicationPhotoSrc?: string;
	publicationColor: PublicationColor;
	publicationText: string;
	publicationDate: string;
	publicationProfileSrc: string;
	publicationAuthor: string;
}

interface IPublicationPropsStyle {
	publicationColor: PublicationColor;
}

const PublicationContainer = styled.aside`
	display: flex;
	align-items: center;
`;

const PublicationDate = styled.span<IPublicationPropsStyle>`
	font-size: ${fontSize[18]};
	color: ${({ publicationColor }) => getDateColor(publicationColor)};
	font-weight: 300;
`;

const PublicationImg = styled.img`
	width: 93px;
	height: 95px;
	margin-right: 20px;
`;

const PublicationInfo = styled.div`
	display: flex;
	align-items: center;
	padding-top: 13px;
`;

const PublicationText = styled.p<IPublicationPropsStyle>`
	font-size: ${fontSize[21]};
	color: ${({ publicationColor }) => getTextColor(publicationColor)};
	line-height: 1.3;
`;

const Publication: FC<IPublicationProps> = ({
	publicationPhotoSrc,
	publicationColor,
	publicationText,
	publicationDate,
	publicationProfileSrc,
	publicationAuthor,
}) => {
	return (
		<PublicationContainer>
			{typeof publicationPhotoSrc !== 'undefined' ? (
				<PublicationImg src={publicationPhotoSrc} />
			) : null}
			<aside>
				<PublicationText publicationColor={publicationColor}>
					{publicationText}
				</PublicationText>
				<PublicationInfo>
					<PublicationDate publicationColor={publicationColor}>
						{publicationDate}
					</PublicationDate>
					<ImageWithText
						src={publicationProfileSrc}
						shape={Shape.circle}
						color={getAuthorColor(publicationColor)}
						text={publicationAuthor}
						fontWeight={300}
						paddingLeft={5}
					/>
				</PublicationInfo>
			</aside>
		</PublicationContainer>
	);
};

export default Publication;
