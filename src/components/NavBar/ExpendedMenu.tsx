import { FC } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { fontSize } from '../../styledHelpers/fontSizes';

import CustomIcon from '../common/CustomIcon';

import houseIcon from '../../media/icons/house2.svg';
import arrowDownIcon from '../../media/icons/arrow-down.svg';

const ExpendedMenuContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 380px;
	height: 100%;
	cursor: pointer;
`;

const LocationInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 145px;
	height: 100%;
`;

const LocationText = styled.span`
	font-size: ${fontSize[22]};
	letter-spacing: 1px;
`;

const ExpendedMenu: FC = () => {
	const history = useHistory();

	const backToHomePage = (): void => {
		const location = {
			pathname: '/',
		};

		history.push(location);
	};

	return (
		<ExpendedMenuContainer>
			<LocationInfo>
				<CustomIcon src={houseIcon} onClick={backToHomePage} />
				<LocationText>Home</LocationText>
			</LocationInfo>
			<CustomIcon src={arrowDownIcon} size={16} />
		</ExpendedMenuContainer>
	);
};

export default ExpendedMenu;
