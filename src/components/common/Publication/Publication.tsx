import { FC } from 'react';
import styled from 'styled-components';

import { fontSize } from '../../../styledHelpers/fontSizes';

import RoundedImg from '../RoundedImg';
import {
	PublicationColor,
	getTextColor,
	getDateColor,
	getAuthorColor,
} from './ColorMatching';

import profile from '../../../media/images/profile2.jpg';

export interface IPublicationProps {
	publicationColor: PublicationColor;
}

const Author = styled.span<IPublicationProps>`
	font-size: ${fontSize[18]};
	color: ${({ publicationColor }) => getAuthorColor(publicationColor)};
	font-weight: 300;
`;

const Date = styled.span<IPublicationProps>`
	font-size: ${fontSize[18]};
	color: ${({ publicationColor }) => getDateColor(publicationColor)};
	font-weight: 300;
`;

const PublicationInfo = styled.div`
	display: flex;
	align-items: center;
	width: 70%;
	padding-top: 13px;
`;

const PublicationText = styled.p<IPublicationProps>`
	font-size: ${fontSize[21]};
	color: ${({ publicationColor }) => getTextColor(publicationColor)};
	line-height: 1.3;
`;

const Publication: FC<IPublicationProps> = ({ publicationColor }) => {
	return (
		<aside>
			<PublicationText publicationColor={publicationColor}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit... and
				one more line for the demo
			</PublicationText>
			<PublicationInfo>
				<Date publicationColor={publicationColor}>7 jan.2020</Date>
				<RoundedImg src={profile} />
				<Author publicationColor={publicationColor}>John Doe</Author>
			</PublicationInfo>
		</aside>
	);
};

export default Publication;
