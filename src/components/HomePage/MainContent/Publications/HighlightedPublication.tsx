import { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../../../styledHelpers/colors';

import Publication from './Publication';

import highlightedImg from '../../../../media/images/highlighted-publication.jpg';

const HighlightedPublicationContainer = styled.div`
	position: relative;
	width: 500px;
	height: 400px;
	background-image: url(${highlightedImg});
	background-position: center;
	background-size: cover;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	z-index: 100;
`;

const WhiteOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: flex-end;
	width: 100%;
	height: 100%;
	background-color: ${colors.blackOpacity};
`;

const HighlightedPublication: FC = () => {
	return (
		<HighlightedPublicationContainer>
			<WhiteOverlay>
				<Publication />
			</WhiteOverlay>
		</HighlightedPublicationContainer>
	);
};

export default HighlightedPublication;
