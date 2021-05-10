import { FC, FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import ControlPanel from './ControlPanel';
import SingleEntity from './SingleEntity';
import { FollowedSelectorValue, selectEntities } from './FollowedSelector';

import { filterElements } from '../../tools/filters';

import ImageWithText, { Shape } from '../common/ImageWithText';
import CustomIcon from '../common/CustomIcon';

import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photosReducer';

import { ISinglePhoto } from '../../entities/photos';

import { fontSize } from '../../styledHelpers/fontSizes';
import { colors } from '../../styledHelpers/colors';
import {
	RoundedContainer,
	SectionHeading,
} from '../../styledHelpers/oftenUsed';

import cogIcon from '../../media/icons/cog.svg';
import mosaicIcon from '../../media/icons/mosaic.svg';
import listIcon from '../../media/icons/bars.svg';

import { entitiesData } from '../../arraysOfData/EntitiesPage/entities';

export enum Theme {
	Mosaic = 'mosaic',
	List = 'list',
}

export interface IEntitiesPageProps {
	theme: Theme;
}

const EntitiesContainer = styled.div<IEntitiesPageProps>`
	display: grid;
	grid-template-columns: ${({ theme }) =>
		theme === Theme.Mosaic ? 'repeat(4, 1fr)' : '1fr'};
	gap: 20px;
	width: 100%;
	margin-top: 40px;
`;

const EntitiesPageContainer = styled(RoundedContainer)`
	width: 100%;
	padding: 50px 50px;
	margin-bottom: 100px;
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

const MosaicTheme = styled.div<IEntitiesPageProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 65%;
	height: 100%;
	background-color: ${colors.greyTwelve};
	border-top-left-radius: 7px;
	border-bottom-left-radius: 7px;
	background-color: ${({ theme }) =>
		theme === Theme.Mosaic ? `${colors.greyTwelve}` : 'transparent'};
	border-top: ${({ theme }) =>
		theme === Theme.Mosaic
			? '2px solid transparent'
			: `2px solid ${colors.greyFour}`};
	border-left: ${({ theme }) =>
		theme === Theme.Mosaic
			? '2px solid transparent'
			: `2px solid ${colors.greyFour}`};
	border-bottom: ${({ theme }) =>
		theme === Theme.Mosaic
			? '2px solid transparent'
			: `2px solid ${colors.greyFour}`};
	border-top-left-radius: 7px;
	border-bottom-left-radius: 7px;
`;

const ListTheme = styled.div<IEntitiesPageProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 35%;
	height: 100%;
	background-color: ${({ theme }) =>
		theme === Theme.List ? `${colors.greyTwelve}` : 'transparent'};
	border-top: ${({ theme }) =>
		theme === Theme.List
			? '2px solid transparent'
			: `2px solid ${colors.greyFour}`};
	border-right: ${({ theme }) =>
		theme === Theme.List
			? '2px solid transparent'
			: `2px solid ${colors.greyFour}`};
	border-bottom: ${({ theme }) =>
		theme === Theme.List
			? '2px solid transparent'
			: `2px solid ${colors.greyFour}`};
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
	const [theme, setTheme] = useState<Theme>(Theme.Mosaic);
	const [photos, setPhotos] = useState<ISinglePhoto[]>([]);
	const [selectValue, setSelectValue] = useState<string>(
		FollowedSelectorValue.All
	);
	const [filterValue, setFilterValue] = useState<string>('');

	const handleSelector = (e: FormEvent<HTMLSelectElement>) => {
		setSelectValue(e.currentTarget.value);
	};

	const handleFilter = (e: FormEvent<HTMLInputElement>) => {
		setFilterValue(e.currentTarget.value);
	};

	const handleMosaicTheme = () => {
		setTheme(Theme.Mosaic);
	};

	const handleListTheme = () => {
		setTheme(Theme.List);
	};

	const { photosList } = useSelector<IState, IPhotosReducer>(
		(globalState) => ({
			...globalState.photos,
		})
	);

	useEffect(() => {
		if (photosList.length !== 0) {
			setPhotos(photosList);
		}
	}, [photosList]);

	const filteredEntities = filterElements(entitiesData, filterValue);
	const selectedEntities = selectEntities(filteredEntities, selectValue);
	const entitiesList = selectedEntities.map(({ id, name, location }) => {
		const src = photos.length !== 0 ? photos[id].url : '';

		return (
			<SingleEntity
				key={id}
				src={src}
				name={name}
				location={location}
				theme={theme}
			/>
		);
	});

	return (
		<EntitiesPageContainer>
			<Header>
				<Heading>
					<HeadingTitle>Entities</HeadingTitle>
					<HeadingIcon src={cogIcon} />
				</Heading>
				<ThemeContainer>
					<MosaicTheme theme={theme} onClick={handleMosaicTheme}>
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
					<ListTheme theme={theme} onClick={handleListTheme}>
						<CustomIcon src={listIcon} size={35} />
					</ListTheme>
				</ThemeContainer>
			</Header>
			<ControlPanel
				selectValue={selectValue}
				filterValue={filterValue}
				handleSelector={handleSelector}
				handleFilter={handleFilter}
			/>
			<EntitiesContainer theme={theme}>{entitiesList}</EntitiesContainer>
		</EntitiesPageContainer>
	);
};

export default EntitiesPage;
