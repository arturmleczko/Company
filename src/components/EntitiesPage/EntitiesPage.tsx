import { FC } from 'react';
import styled from 'styled-components';

import ControlPanel from './ControlPanel';

import ImageWithText, { Shape } from '../common/ImageWithText';
import CustomIcon from '../common/CustomIcon';

import { fontSize } from '../../styledHelpers/fontSizes';
import { colors } from '../../styledHelpers/colors';
import {
	RoundedContainer,
	SectionHeading,
} from '../../styledHelpers/oftenUsed';

import cogIcon from '../../media/icons/cog.svg';
import mosaicIcon from '../../media/icons/mosaic.svg';
import listIcon from '../../media/icons/bars.svg';

const EntitiesPageContainer = styled(RoundedContainer)`
	width: 100%;
	padding: 50px 50px;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	height: 60px;
`;

const Heading = styled.div`
	display: flex;
	align-items: center;
`;

const ThemeContainer = styled.div`
	display: flex;
	width: 230px;
	height: 100%;
	cursor: pointer;
`;

const MosaicTheme = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 65%;
	height: 100%;
	background-color: ${colors.greyTwelve};
	border-top-left-radius: 7px;
	border-bottom-left-radius: 7px;
`;

const ListTheme = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 35%;
	height: 100%;
	border-top: 2px solid ${colors.greyFour};
	border-right: 2px solid ${colors.greyFour};
	border-bottom: 2px solid ${colors.greyFour};
	border-top-right-radius: 7px;
	border-bottom-right-radius: 7px;
`;

const HeadingTitle = styled(SectionHeading)`
	font-size: ${fontSize[26]};
	font-weight: 500;
	color: ${colors.greySix};
`;

const HeadingIcon = styled.img`
	width: 26px;
	height: 26px;
	margin-left: 25px;
`;

const EntitiesPage: FC = () => {
	return (
		<EntitiesPageContainer>
			<Header>
				<Heading>
					<HeadingTitle>Entities</HeadingTitle>
					<HeadingIcon src={cogIcon} />
				</Heading>
				<ThemeContainer>
					<MosaicTheme>
						<ImageWithText
							src={mosaicIcon}
							size={30}
							shape={Shape.square}
							text="Mosaic"
							textSize={fontSize[19]}
							color={colors.navyBlue}
							fontWeight={500}
							textPaddingLeft={15}
						/>
					</MosaicTheme>
					<ListTheme>
						<CustomIcon src={listIcon} size={35} />
					</ListTheme>
				</ThemeContainer>
			</Header>
			<ControlPanel />
		</EntitiesPageContainer>
	);
};

export default EntitiesPage;
