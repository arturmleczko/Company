import { FC } from 'react';
import styled from 'styled-components';

import { fontSize } from '../../styledHelpers/fontSizes';
import { CustomIcon } from '../../styledHelpers/oftenUsed';

const ExpendedMenuContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 400px;
	height: 100%;
	cursor: pointer;
`;

const LocationInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 150px;
	height: 100%;
`;

const LocationText = styled.span`
	font-size: ${fontSize[24]};
	letter-spacing: 1px;
`;

const ArrowIcon = styled.img`
	width: 17px;
	height: 17px;
`;

const ExpendedMenu: FC = () => {
	return (
		<ExpendedMenuContainer>
			<LocationInfo>
				<CustomIcon src="icons/house2.svg" />
				<LocationText>Home</LocationText>
			</LocationInfo>
			<ArrowIcon src="icons/arrow-down.svg" />
		</ExpendedMenuContainer>
	);
};

export default ExpendedMenu;
