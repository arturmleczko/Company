import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../styledHelpers/colors';
import { fontSize } from '../../styledHelpers/fontSizes';
import { Container } from '../../styledHelpers/oftenUsed';

import ExpandedMenu from './ExpandedMenu';
import NotificationIcon from './NotificationIcon';
import CustomIcon from '../common/CustomIcon';

import logoImg from '../../media/images/logo.png';
import searchIcon from '../../media/icons/search.svg';
import houseIcon from '../../media/icons/house.svg';
import commentsIcon from '../../media/icons/comments.svg';
import bellIcon from '../../media/icons/bell.svg';

const HomeButtonContainer = styled(Link)`
	text-decoration: none;
`;

const LeftNavPanel = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 520px;
	height: 100%;
`;

const Logo = styled.img`
	width: 70px;
	height: 70px;
`;

const Nav = styled.nav`
	position: sticky;
	top: 0;
	left: 0;
	height: 85px;
	background-color: ${colors.white};
	box-shadow: 0px 3px 7px 0px ${colors.greyFive};
	z-index: 999;
`;

const NavContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100vw;
	height: 100%;
`;

const RightNavPanel = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 270px;
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
	height: 50px;
`;

const SearchIcon = styled.img`
	position: absolute;
	top: 50%;
	right: 20px;
	transform: translateY(-50%);
	width: 25px;
	height: 25px;
	cursor: pointer;
`;

const Navbar: FC = () => {
	return (
		<>
			<Nav>
				<NavContainer>
					<LeftNavPanel>
						<Logo src={logoImg} />
						<ExpandedMenu />
					</LeftNavPanel>
					<SearchEngineContainer>
						<SearchEngine
							type="text"
							placeholder="Search Legalcluster"
						/>
						<SearchIcon src={searchIcon} />
					</SearchEngineContainer>
					<RightNavPanel>
						<HomeButtonContainer to="/">
							<CustomIcon src={houseIcon} />
						</HomeButtonContainer>
						<NotificationIcon src={commentsIcon} />
						<NotificationIcon src={bellIcon} />
					</RightNavPanel>
				</NavContainer>
			</Nav>
		</>
	);
};

export default Navbar;
