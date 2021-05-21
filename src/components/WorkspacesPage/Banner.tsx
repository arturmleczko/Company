import { FC } from 'react';
import styled from 'styled-components';

import { fontSize } from '../../styledHelpers/fontSizes';
import { colors } from '../../styledHelpers/colors';
import { RoundedContainer } from '../../styledHelpers/oftenUsed';

import cogIcon from '../../media/icons/cog.svg';

interface IBannerProps {
	backgroundImage: string;
	title: string;
	icon: string;
}

interface IBackgroundImageProps {
	url: string;
}

const BannerContainer = styled(RoundedContainer)`
	display: flex;
	flex-direction: column;
	height: 500px;
	margin: 0 50px 50px 50px;
`;

const BackgroundImage = styled.div<IBackgroundImageProps>`
	height: 60%;
	background-image: url(${({ url }) => (url ? url : '')});
	background-size: cover;
	background-position: center;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

const Description = styled.div`
	width: calc(100% - 100px);
	height: 100%;
	padding-left: 50px;
`;

const DescriptionContainer = styled.div`
	display: flex;
	height: 40%;
	padding: 30px 50px 30px 50px;
	align-items: center;
`;

const WorkspaceIcon = styled.img`
	width: 85px;
	height: 85px;
`;

const Title = styled.h2`
	font-size: ${fontSize[24]};
	color: ${colors.darkNavyBlue};
	font-weight: 500;
`;

const Content = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 100%;
	width: 100%;
`;

const CogIcon = styled.img`
	position: absolute;
	top: 0;
	right: 0;
	width: 36px;
	height: 36px;
`;

const Text = styled.p`
	font-size: ${fontSize[21]};
	color: ${colors.greyTwo};
`;

const Banner: FC<IBannerProps> = ({ backgroundImage, title, icon }) => {
	return (
		<BannerContainer>
			<BackgroundImage url={backgroundImage} />
			<DescriptionContainer>
				<WorkspaceIcon src={icon} />
				<Description>
					<Content>
						<Title>{title}</Title>
						<Text>
							Workspace purpose and a bit of context. This much
							needed description is here to remind people where
							they are, if they are new or have poor memory.
						</Text>
						<CogIcon src={cogIcon} />
					</Content>
				</Description>
			</DescriptionContainer>
		</BannerContainer>
	);
};

export default Banner;
