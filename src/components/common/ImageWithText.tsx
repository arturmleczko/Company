import { FC } from 'react';
import styled from 'styled-components';

import { fontSize } from '../../styledHelpers/fontSizes';
import { colors } from '../../styledHelpers/colors';

import CustomIcon from './CustomIcon';
import RoundedImg from './RoundedImg';

export enum Shape {
	circle,
	square,
}

interface IIconWithTextProps {
	containerPadding?: [number, number];
	src: string;
	size?: number;
	shape: Shape;
	text: string;
	textSize?: string;
	fontWeight?: number;
	color?: string;
	letterSpacing?: number;
	textPaddingLeft?: number;
}

interface IIconWithTextPropsStyle {
	containerPadding?: [number, number];
	textSize?: string;
	fontWeight?: number;
	color?: string;
	letterSpacing?: number;
	textPaddingLeft?: number;
}

const IconWithTextContainer = styled.div<IIconWithTextPropsStyle>`
	display: flex;
	align-items: center;
	padding: ${({ containerPadding }) =>
		containerPadding
			? `${containerPadding[0]}px ${containerPadding[1]}px`
			: '0 5px'};
	height: 30px;
`;

const Text = styled.p<IIconWithTextPropsStyle>`
	font-size: ${({ textSize }) =>
		textSize ? `${textSize}` : `${fontSize[18]}`};
	font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : `400`)};
	color: ${({ color }) => (color ? `${color}` : `${colors.greyFive}`)};
	letter-spacing: ${({ letterSpacing }) =>
		letterSpacing ? `${letterSpacing}px` : 'normal'};
	padding-left: ${({ textPaddingLeft }) =>
		textPaddingLeft ? `${textPaddingLeft}px` : `10px`};
`;

const ImageWithText: FC<IIconWithTextProps> = ({
	containerPadding,
	src,
	size,
	shape,
	text,
	textSize,
	fontWeight,
	color,
	letterSpacing,
	textPaddingLeft,
}) => {
	const roundedOrSquareImage =
		shape === Shape.square ? (
			<CustomIcon src={src} size={size} />
		) : (
			<RoundedImg src={src} size={size} />
		);

	return (
		<IconWithTextContainer containerPadding={containerPadding}>
			{roundedOrSquareImage}
			<Text
				textSize={textSize}
				color={color}
				textPaddingLeft={textPaddingLeft}
				fontWeight={fontWeight}
				letterSpacing={letterSpacing}
			>
				{text}
			</Text>
		</IconWithTextContainer>
	);
};

export default ImageWithText;
