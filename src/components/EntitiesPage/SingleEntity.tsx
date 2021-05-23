import { FC } from 'react';
import styled from 'styled-components';

import { Theme, IThemeProps } from './EntitiesPage';

import { colors } from '../../styledHelpers/colors';
import { fontSize } from '../../styledHelpers/fontSizes';

import { RoundedContainer } from '../../styledHelpers/oftenUsed';

interface ISingleEntityProps {
	src: string;
	name: string;
	location: string;
	theme: Theme;
}

interface IPictureProps {
	src: string;
}

const Information = styled.div<IThemeProps>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: calc(100% - 150px);
	height: 100%;
	padding: ${({ theme }) =>
		theme === Theme.Mosaic ? '30px 20px 15px 5px' : '45px 20px 45px 5px'};
`;

const SingleEntityContainer = styled(RoundedContainer)`
	display: flex;
	align-items: center;
	width: 100%;
`;

const Name = styled.h3`
	font-size: ${fontSize[25]};
	font-weight: 500;
	color: ${colors.navyBlue};
	line-height: 1.3;
`;

const Picture = styled.div<IPictureProps>`
	width: 150px;
	height: 150px;
	margin: 15px;
	border-radius: 7px;
	background-image: ${({ src }) => (src ? `url(${src})` : 'url()')};
	background-size: cover;
	background-position: center;
`;

const Location = styled.span`
	font-size: ${fontSize[20]};
	color: ${colors.greyThirteen};
	line-height: 1.3;
`;

const SingleEntity: FC<ISingleEntityProps> = ({
	src,
	name,
	location,
	theme,
}) => {
	return (
		<SingleEntityContainer>
			<Picture src={src} />
			<Information theme={theme}>
				<Name>{name}</Name>
				<Location>{location}</Location>
			</Information>
		</SingleEntityContainer>
	);
};

export default SingleEntity;
