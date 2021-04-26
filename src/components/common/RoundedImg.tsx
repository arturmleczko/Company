import { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../styledHelpers/colors';

interface IRoundedImgProps {
	src: string;
	size?: number;
	boxShadow?: boolean;
}

const Img = styled.img<IRoundedImgProps>`
	width: ${({ size }) => (size ? `${size}px` : '25px')};
	height: ${({ size }) => (size ? `${size}px` : '25px')};
	box-shadow: ${({ boxShadow }) =>
		boxShadow
			? `0 1px 1px ${colors.greyFive}, 0 1px 2.5px ${colors.greyFive}, 0 2.5px 5px ${colors.greyFive}`
			: ''};
	margin: 0 10px;
	border-radius: 50%;
`;

const RoundedImg: FC<IRoundedImgProps> = ({ src, size, boxShadow }) => {
	return <Img src={src} size={size} boxShadow={boxShadow} />;
};

export default RoundedImg;
