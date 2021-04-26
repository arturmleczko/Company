import { FC } from 'react';
import styled from 'styled-components';

import ImageWithText, { Shape } from './ImageWithText';

import { fontSize } from '../../styledHelpers/fontSizes';
import { colors } from '../../styledHelpers/colors';
import { Dot } from '../../styledHelpers/oftenUsed';

interface IInfoIconsProps {
	firstSrc: string;
	secondSrc: string;
	firstText: string;
	secondText: string;
	firstShape: Shape;
	secondShape: Shape;
	firstBoxShadow?: boolean;
}

const InfoIconsContainer = styled.div`
	display: flex;
	align-items: center;
`;

const InfoIcons: FC<IInfoIconsProps> = ({
	firstSrc,
	secondSrc,
	firstText,
	secondText,
	firstShape,
	secondShape,
	firstBoxShadow,
}) => {
	return (
		<InfoIconsContainer>
			<ImageWithText
				src={firstSrc}
				size={25}
				shape={firstShape}
				text={firstText}
				textSize={fontSize[19]}
				color={colors.greyNine}
				boxShadow={firstBoxShadow}
			/>
			<Dot />
			<ImageWithText
				src={secondSrc}
				size={25}
				shape={secondShape}
				text={secondText}
				textSize={fontSize[19]}
				color={colors.greyNine}
			/>
		</InfoIconsContainer>
	);
};

export default InfoIcons;
