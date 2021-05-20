import { FC } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { menuItemsData } from '../../arraysOfData/NavBar/expendedMenu';
import ImageWithText, { Shape } from '../common/ImageWithText';
import { MenuSectionKind } from '../../arraysOfData/NavBar/expendedMenu';

import { fontSize } from '../../styledHelpers/fontSizes';
import { colors } from '../../styledHelpers/colors';

import workspacesIcon from '../../media/icons/entities.svg';

const LocationInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 145px;
	height: 100%;
`;

const LocationInfo: FC = () => {
	const location = useLocation();
	const pathname = location.pathname;

	const currentMenuItem = menuItemsData
		.filter(({ referenceTo }) => referenceTo === pathname)
		.splice(0, 1)
		.map(({ id, iconSrc, text, section }) => {
			const checkText =
				section !== MenuSectionKind.Workspaces ? text : 'Workspaces';
			const checkIconSrc =
				section !== MenuSectionKind.Workspaces
					? iconSrc
					: `${workspacesIcon}`;

			return (
				<ImageWithText
					key={id}
					src={checkIconSrc}
					shape={Shape.square}
					text={checkText}
					textSize={fontSize[22]}
					color={colors.darkNavyBlue}
					textPaddingLeft={45}
					containerPadding={[0, 0]}
				/>
			);
		});

	return <LocationInfoContainer>{currentMenuItem}</LocationInfoContainer>;
};

export default LocationInfo;
