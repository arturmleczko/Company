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
		.map(({ id, src, text, section }) => {
			const checkText =
				section !== MenuSectionKind.workspaces ? text : 'Workspaces';
			const checkSrc =
				section !== MenuSectionKind.workspaces
					? src
					: `${workspacesIcon}`;

			return (
				<ImageWithText
					key={id}
					src={checkSrc}
					// src={src}
					shape={Shape.square}
					text={checkText}
					// text={text}
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
