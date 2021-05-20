import { FC } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import ImageWithText, { Shape } from '../common/ImageWithText';

import { fontSize } from '../../styledHelpers/fontSizes';
import { colors } from '../../styledHelpers/colors';

interface IImageWithTextProps {
	iconSrc: string;
	imageSrc: string | undefined;
	text: string;
	referenceTo: string;
}

interface ILocation {
	pathname: string;
	state: {
		backgroundImage: string | undefined;
		icon: string;
		title: string;
	};
}

const MenuItemContainer = styled.div`
	margin-top: 25px;
`;

const MenuItem: FC<IImageWithTextProps> = ({
	iconSrc,
	imageSrc,
	text,
	referenceTo,
}) => {
	const history = useHistory();
	const handleOnClick = () => {
		const location: ILocation = {
			pathname: referenceTo,
			state: {
				backgroundImage: imageSrc,
				icon: iconSrc,
				title: `${text} holdings`,
			},
		};

		history.push(location);
	};

	return (
		<MenuItemContainer onClick={handleOnClick}>
			<ImageWithText
				src={iconSrc}
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
