import { FC } from 'react';
import styled from 'styled-components';

import { fontSize } from '../../styledHelpers/fontSizes';
import { Icon } from '../../styledHelpers/globalStyles';

const ExpendedMenuContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 400px;
	height: 100%;
	cursor: pointer;
`;

const HomeElementContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 160px;
	height: 100%;
`;

const LocationText = styled.span`
	font-size: ${fontSize[24]};
`;

const ArrowIcon = styled.img`
	width: 17px;
	height: 17px;
`;

const ExpendedMenu: FC = () => {
	return (
		<ExpendedMenuContainer>
			<HomeElementContainer>
				<Icon src="icons/house2.svg" />
				<LocationText>Home</LocationText>
			</HomeElementContainer>
			<ArrowIcon src="icons/arrow-down.svg" />
		</ExpendedMenuContainer>
	);
};

export default ExpendedMenu;
