import { FC } from 'react';

import ImageWithText, { Shape } from '../../../common/ImageWithText';

import { colors } from '../../../../styledHelpers/colors';
import { fontSize } from '../../../../styledHelpers/fontSizes';

interface ISingleActionProps {
	src: string;
	text: string;
}

const SingleAction: FC<ISingleActionProps> = ({ src, text }) => {
	return (
		<ImageWithText
			src={src}
			size={30}
			text={text}
			textSize={fontSize[23]}
			color={colors.darkNavyBlue}
			shape={Shape.square}
		/>
	);
};

export default SingleAction;
