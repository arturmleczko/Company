import { FC, FormEvent, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import useDropdown from 'react-dropdown-hook';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';
import { IPhotosReducer } from '../../reducers/photosReducer';

import { ISingleUser } from '../../entities/users';
import { ISinglePhoto } from '../../entities/photos';

import matchUserToPhoto from '../../tools/apiTools/matchUserToPhoto';

import LocationInfo from './LocationInfo';
import MenuItem from './MenuItem';
import RoundedImg from '../../components/common/RoundedImg';
import ImageWithText, { Shape } from '../../components/common/ImageWithText';

import { fontSize } from '../../styledHelpers/fontSizes';
import { colors } from '../../styledHelpers/colors';

import arrowDownIcon from '../../media/icons/arrow-down.svg';
import crossIcon from '../../media/icons/cross.svg';

import {
	menuItemsData,
	MenuSectionKind,
	IMenuItemData,
} from '../../arraysOfData/NavBar/expendedMenu';

import defaultUser from '../../tools/apiTools/defaultValues/defaultUser';
import defaultPhotos from '../../tools/apiTools/defaultValues/defaultPhotos';

import { filterMenuItems } from '../../tools/filters';

import mainUserIdx from '../../tools/apiTools/mainUserIdx';

interface IMenuButtonPropsStyle {
	dropDownInfo: boolean;
}

const ExpandedMenuContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 380px;
	height: 100%;
	cursor: pointer;
`;

const expendedMenuListAnimation = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

const ExpendedMenuList = styled.div`
	position: absolute;
	bottom: -960px;
	left: -15px;
	width: calc(100% + 16px);
	height: 960px;
	background-color: ${colors.white};
	border: 2px solid ${colors.greyFour};
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	animation: ${expendedMenuListAnimation} 0.2s ease-in-out;
`;

const ExpendedMenuSubcontainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const FilterNavigation = styled.input`
	width: calc(100% - 14px);
	border: 2px solid ${colors.greyFour};
	border-radius: 7px;
	font-size: ${fontSize[20]};
	padding: 12px 10px;
	margin: 2px 0;
	color: ${colors.greyTwo};
	letter-spacing: 1px;
	outline: none;

	&::placeholder {
		color: ${colors.greyTwo};
	}
`;

const FilterNavigationContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
`;

const MenuAccountContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 15px 0 10px 15px;
	border-bottom: 2px solid ${colors.greyFour};
`;

const MenuButton = styled.div<IMenuButtonPropsStyle>`
	width: 30px;
	height: 30px;
	margin-right: 5px;
	background-image: ${({ dropDownInfo }) =>
		dropDownInfo ? `url(${crossIcon})` : `url(${arrowDownIcon})`};
	background-repeat: no-repeat;
	background-size: ${({ dropDownInfo }) =>
		dropDownInfo ? '25px 25px' : '16px 16px'};
	background-position: center;
`;

const MenuLogoutContainer = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 83px;
	text-decoration: none;
`;

const MenuSection = styled.ul`
	padding: 10px 0;
`;

const MenuSectionsContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 59%;
	padding-left: 15px;
	padding-bottom: 15px;
	border-bottom: 2px solid ${colors.greyFour};
	overflow-y: scroll;
`;

const MenuSectionHeading = styled.h3`
	font-size: ${fontSize[19]};
	color: ${colors.greyTwo};
	font-weight: 500;
`;

const ProfileName = styled.span`
	color: ${colors.darkNavyBlue};
	font-size: ${fontSize[22]};
`;

const ProfileContainer = styled.div`
	display: flex;
	width: 100%;
	margin-top: 20px;
	margin-left: -10px;
	text-decoration: none;
`;

const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 65%;
	margin-left: 26px;
`;

const SeeProfile = styled(Link)`
	font-size: ${fontSize[18]};
	color: ${colors.navyBlue};
	font-weight: 500;
	text-decoration: none;
`;

const ExpandedMenu: FC = () => {
	const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
	const [filterValue, setFilterValue] = useState<string>('');

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
			const singleUser = usersList[mainUserIdx];

			setUser(singleUser);
			setPhotos(photosList);
		}
	}, [usersList, photosList]);

	const { url } = matchUserToPhoto(photos, user.id);
	const { name } = user;

	const handleChange = (e: FormEvent<HTMLInputElement>): void => {
		const filterValue = e.currentTarget.value;
		setFilterValue(filterValue);
	};

	const generateMenuItems = (
		sectionKind: MenuSectionKind,
		arrayMenuItems: IMenuItemData[]
	): JSX.Element[] => {
		const sectionMenuItems = arrayMenuItems
			.filter(({ section }) => section === sectionKind)
			.map(({ id, iconSrc, imageSrc, text, referenceTo }) => (
				<MenuItem
					key={id}
					iconSrc={iconSrc}
					imageSrc={imageSrc}
					text={text}
					referenceTo={referenceTo}
				/>
			));

		return sectionMenuItems;
	};

	const logoutMenuItem = menuItemsData
		.filter(({ section }) => section === MenuSectionKind.Logout)
		.map(({ id, iconSrc, text }) => (
			<ImageWithText
				key={id}
				src={iconSrc}
				shape={Shape.square}
				text={text}
				textSize={fontSize[22]}
				letterSpacing={1}
				color={colors.greyTwo}
				textPaddingLeft={45}
				containerPadding={[0, 0]}
			/>
		));

	const filteredMenuItems = filterMenuItems(menuItemsData, filterValue);

	const platformMenuItems = generateMenuItems(
		MenuSectionKind.Platform,
		filteredMenuItems
	);
	const workspacesMenuItems = generateMenuItems(
		MenuSectionKind.Workspaces,
		filteredMenuItems
	);
	const accountMenuItems = generateMenuItems(
		MenuSectionKind.Account,
		menuItemsData
	);

	return (
		<ExpandedMenuContainer>
			<ExpendedMenuSubcontainer ref={wrapperRef}>
				<LocationInfo />
				<MenuButton
					onClick={toggleDropdown}
					dropDownInfo={dropdownOpen}
				/>
				{dropdownOpen && (
					<ExpendedMenuList>
						<FilterNavigationContainer>
							<FilterNavigation
								placeholder="Filter..."
								value={filterValue}
								onChange={handleChange}
							/>
						</FilterNavigationContainer>
						<MenuSectionsContainer>
							<MenuSection>
								<MenuSectionHeading>
									Platform
								</MenuSectionHeading>
								{platformMenuItems}
							</MenuSection>
							<MenuSection>
								<MenuSectionHeading>
									Workspaces
								</MenuSectionHeading>
								{workspacesMenuItems}
							</MenuSection>
						</MenuSectionsContainer>
						<MenuAccountContainer>
							<MenuSection>
								<MenuSectionHeading>Account</MenuSectionHeading>
								<ProfileContainer>
									<RoundedImg src={url} size={48} />
									<ProfileInfo>
										<ProfileName>{name}</ProfileName>
										<SeeProfile to="/profile">
											See profile
										</SeeProfile>
									</ProfileInfo>
								</ProfileContainer>
								{accountMenuItems}
							</MenuSection>
						</MenuAccountContainer>
						<MenuLogoutContainer to="/logout">
							{logoutMenuItem}
						</MenuLogoutContainer>
					</ExpendedMenuList>
				)}
			</ExpendedMenuSubcontainer>
		</ExpandedMenuContainer>
	);
};

export default ExpandedMenu;
