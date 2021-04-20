import { FC, FormEvent, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import ImageWithText, { Shape } from '../common/ImageWithText';
import MenuItem from './MenuItem';

import { fontSize } from '../../styledHelpers/fontSizes';
import { colors } from '../../styledHelpers/colors';

import homeIcon from '../../media/icons/house2.svg';
import arrowDownIcon from '../../media/icons/arrow-down.svg';
import crossIcon from '../../media/icons/cross.svg';

import {
	menuItemsData,
	MenuSectionKind,
} from '../../arraysOfData/NavBar/expendedMenu';

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
		transform: translateY(0);
	}

	to {
		opacity: 1;
		transform: translateY(1);
	}
`;

const ExpendedMenuList = styled.div`
	position: absolute;
	bottom: -800px;
	left: -15px;
	width: calc(100% + 16px);
	height: 800px;
	background-color: ${colors.white};
	border: 2px solid ${colors.greyFour};
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	animation: ${expendedMenuListAnimation} 0.2s ease-in-out;
	user-select: none;
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

const LocationInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 145px;
	height: 100%;
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

const ExpandedMenu: FC = () => {
	const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
	const [value, setValue] = useState<string>('');

	const handleChange = (e: FormEvent<HTMLInputElement>): void => {
		const value = e.currentTarget.value;
		setValue(value);
	};

	const generateSectionItems = (
		sectionKind: MenuSectionKind,
		filterCondition: string
	): JSX.Element[] => {
		const sectionItems = menuItemsData
			.filter(
				({ section, text }) =>
					section === sectionKind &&
					text.toLowerCase().includes(filterCondition.toLowerCase())
			)
			.map(({ id, src, text, referenceTo }) => (
				<MenuItem
					key={id}
					src={src}
					text={text}
					referenceTo={referenceTo}
				/>
			));

		return sectionItems;
	};

	const generateMenuItems = () => {
		const platformSectionItems = generateSectionItems(
			MenuSectionKind.platform,
			value
		);
		const workspacesSectionItems = generateSectionItems(
			MenuSectionKind.workspaces,
			value
		);

		return { platformSectionItems, workspacesSectionItems };
	};

	const {
		platformSectionItems,
		workspacesSectionItems,
	} = generateMenuItems();

	return (
		<ExpandedMenuContainer>
			<ExpendedMenuSubcontainer ref={wrapperRef}>
				<LocationInfo>
					<ImageWithText
						src={homeIcon}
						shape={Shape.square}
						text="Home"
						textSize={fontSize[22]}
						letterSpacing={1}
						color={colors.darkNavyBlue}
						textPaddingLeft={45}
						containerPadding={[0, 0]}
					/>
				</LocationInfo>
				<MenuButton
					onClick={toggleDropdown}
					dropDownInfo={dropdownOpen}
				/>
				{dropdownOpen && (
					<ExpendedMenuList>
						<FilterNavigationContainer>
							<FilterNavigation
								placeholder="Filter..."
								value={value}
								onChange={handleChange}
							/>
						</FilterNavigationContainer>
						<MenuSectionsContainer>
							<MenuSection>
								<MenuSectionHeading>
									Platform
									{platformSectionItems}
								</MenuSectionHeading>
							</MenuSection>
							<MenuSection>
								<MenuSectionHeading>
									Workspaces
									{workspacesSectionItems}
								</MenuSectionHeading>
							</MenuSection>
						</MenuSectionsContainer>
					</ExpendedMenuList>
				)}
			</ExpendedMenuSubcontainer>
		</ExpandedMenuContainer>
	);
};

export default ExpandedMenu;
