import { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../styledHelpers/colors';
import { fontSize } from '../../styledHelpers/fontSizes';
import { Container, CustomIcon } from '../../styledHelpers/oftenUsed';

import ExpandedMenu from './ExpendedMenu';
import NotificationIcon from './NotificationIcon';

const LeftNavPanel = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 540px;
	height: 100%;
`;

const Logo = styled.img`
	width: 75px;
	height: 75px;
`;

const Nav = styled.nav`
	position: sticky;
	top: 0;
	left: 0;
	height: 8vh;
	background-color: ${colors.white};
	box-shadow: 0px 3px 7px 0px ${colors.greyFive};
	z-index: 999;
`;

const NavContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
`;

const RightNavPanel = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 300px;
	height: 100%;
`;

const SearchEngine = styled.input`
	position: absolute;
	width: 100%;
	height: 100%;
	border: 2px solid ${colors.greyFour};
	padding: 0 60px 0 20px;
	padding-left: 20px;
	padding-right: 60px;
	border-radius: 7px;
	font-size: ${fontSize[20]};
	text-align: center;
	color: ${colors.greyTwo};
	letter-spacing: 1px;
	outline: none;

	&::placeholder {
		color: ${colors.greyTwo};
	}
`;

const SearchEngineContainer = styled.div`
	position: relative;
	width: 50%;
	height: 60px;
`;

const SearchIcon = styled.img`
	position: absolute;
	top: 50%;
	right: 20px;
	transform: translateY(-50%);
	width: 30px;
	height: 30px;
	cursor: pointer;
`;

const Navbar: FC = () => {
	return (
		<>
			<Nav>
				<NavContainer>
					<LeftNavPanel>
						<Logo src="icons/logo.png" />
						<ExpandedMenu />
					</LeftNavPanel>
					<SearchEngineContainer>
						<SearchEngine
							type="text"
							placeholder="Search Legalcluster"
						/>
						<SearchIcon src="icons/search.svg" />
					</SearchEngineContainer>
					<RightNavPanel>
						<CustomIcon src="icons/house.svg" />
						<NotificationIcon src="icons/comments.svg" />
						<NotificationIcon src="icons/bell.svg" />
					</RightNavPanel>
				</NavContainer>
			</Nav>
		</>
	);
};

export default Navbar;
