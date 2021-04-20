import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ImageWithText, { Shape } from '../common/ImageWithText';

import { fontSize } from '../../styledHelpers/fontSizes';
import { colors } from '../../styledHelpers/colors';

interface IImageWithTextProps {
	src: string;
	text: string;
	referenceTo: string;
}

const MenuItemContainer = styled(Link)`
	display: block;
	margin-top: 25px;
	text-decoration: none;
`;

const MenuItem: FC<IImageWithTextProps> = ({ src, text, referenceTo }) => {
	return (
		<MenuItemContainer to={referenceTo}>
			<ImageWithText
				src={src}
				shape={Shape.square}
				text={text}
				textSize={fontSize[22]}
				letterSpacing={1}
				color={colors.darkNavyBlue}
				textPaddingLeft={45}
				containerPadding={[0, 0]}
			/>
		</MenuItemContainer>
	);
};

export default MenuItem;
