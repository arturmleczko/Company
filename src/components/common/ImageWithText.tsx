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
	src: string;
	size?: number;
	shape: Shape;
	text: string;
	textSize?: string;
	color?: string;
	paddingLeft?: number;
}

interface IIconWithTextPropsStyle {
	textSize?: string;
	color?: string;
	paddingLeft?: number;
}

const IconWithTextContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 0 10px;
	height: 30px;
`;

const Text = styled.p<IIconWithTextPropsStyle>`
	font-size: ${({ textSize }) =>
		textSize ? `${textSize}` : `${fontSize[18]}`};
	color: ${({ color }) => (color ? `${color}` : `${colors.greyFive}`)};
	padding-left: ${({ paddingLeft }) =>
		paddingLeft ? `${paddingLeft}px` : `10px`};
`;

const ImageWithText: FC<IIconWithTextProps> = ({
	src,
	size,
	shape,
	text,
	textSize,
	color,
	paddingLeft,
}) => {
	const roundedOrSquareImage =
		shape === Shape.square ? (
			<CustomIcon src={src} size={size} />
		) : (
			<RoundedImg src={src} size={size} />
		);

	return (
		<IconWithTextContainer>
			{roundedOrSquareImage}
			<Text textSize={textSize} color={color} paddingLeft={paddingLeft}>
				{text}
			</Text>
		</IconWithTextContainer>
	);
};

export default ImageWithText;
