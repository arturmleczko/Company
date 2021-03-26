import { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../styledHelpers/colors';
import { fontSize } from '../../styledHelpers/fontSizes';
import { Container, Icon } from '../../styledHelpers/globalStyles';

import ExpandedMenu from './ExpendedMenu';
import NotificationIcon from './NotificationIcon';

const Nav = styled.nav`
	position: sticky;
	top: 0;
	left: 0;
	height: 100px;
	background-color: ${colors.white};
	box-shadow: 0px 1px 5px 0px ${colors.grey};
	z-index: 999;
`;

const NavContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100px;
`;

const LogoAndMenu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 20%;
	height: 100%;
`;

const Logo = styled.img`
	width: 75px;
	height: 75px;
`;

const SearchEngineContainer = styled.div`
	position: relative;
	width: 50%;
	height: 60px;
`;

const SearchEngine = styled.input`
	position: absolute;
	width: 100%;
	height: 100%;
	border: 2px solid #e9ecef;
	padding: 0 60px 0 20px;
	padding-left: 20px;
	padding-right: 60px;
	border-radius: 7px;
	font-size: ${fontSize[22]};
	text-align: center;
	color: ${colors.grey};
	letter-spacing: 0.7px;
	outline: none;
`;

const SearchIcon = styled.img`
	position: absolute;
	top: 50%;
	right: 20px;
	transform: translateY(-50%);
	width: 35px;
	height: 35px;
	cursor: pointer;
`;

const Icons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 10%;
	height: 100%;
`;

const NavBar: FC = () => {
	return (
		<>
			<Nav>
				<NavContainer>
					<LogoAndMenu>
						<Logo src="icons/logo.png" />
						<ExpandedMenu />
					</LogoAndMenu>
					<SearchEngineContainer>
						<SearchEngine
							type="text"
							placeholder="Search Legalcluster"
						/>
						<SearchIcon src="icons/search.svg" />
					</SearchEngineContainer>
					<Icons>
						<Icon src="icons/house.svg" />
						<NotificationIcon src="icons/comments.svg" />
						<NotificationIcon src="icons/bell.svg" />
					</Icons>
				</NavContainer>
			</Nav>
		</>
	);
};

export default NavBar;
