import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import ImageWithText, { Shape } from '../common/ImageWithText';

import { fontSize } from '../../styledHelpers/fontSizes';
import { colors } from '../../styledHelpers/colors';

import houseIcon from '../../media/icons/house2.svg';
import arrowDownIcon from '../../media/icons/arrow-down.svg';
import crossIcon from '../../media/icons/cross.svg';

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
	bottom: -500px;
	left: -15px;
	width: calc(100% + 16px);
	height: 500px;
	background-color: ${colors.white};
	border: 2px solid #e8e8e8;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	animation: ${expendedMenuListAnimation} 0.2s ease-in-out;
	user-select: none;
`;

const ExpendedMenuListContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 5px;
`;

const ExpendedMenuItemsContainer = styled.ul`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding: 10px;
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

const MenuSectionHeading = styled.h3`
	font-size: ${fontSize[17]};
	color: ${colors.greyTwo};
	font-weight: 500;
`;

const ExpandedMenu: FC = () => {
	const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

	return (
		<ExpandedMenuContainer>
			<ExpendedMenuSubcontainer ref={wrapperRef}>
				<LocationInfo>
					<ImageWithText
						src={houseIcon}
						shape={Shape.square}
						text="Home"
						textSize={fontSize[22]}
						letterSpacing={1}
						color={colors.darkNavyBlue}
						textPaddingLeft={45}
					/>
				</LocationInfo>
				<MenuButton
					onClick={toggleDropdown}
					dropDownInfo={dropdownOpen}
				/>
				{dropdownOpen && (
					<ExpendedMenuList>
						<ExpendedMenuListContainer>
							<FilterNavigation placeholder="Filter..." />
							<ExpendedMenuItemsContainer>
								<MenuSectionHeading>
									Platform
								</MenuSectionHeading>
							</ExpendedMenuItemsContainer>
						</ExpendedMenuListContainer>
					</ExpendedMenuList>
				)}
			</ExpendedMenuSubcontainer>
		</ExpandedMenuContainer>
	);
};

export default ExpandedMenu;
