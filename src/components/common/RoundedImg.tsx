import { FC } from 'react';
import styled from 'styled-components';

interface IRoundedImgProps {
	src: string;
	size?: number;
}

const Img = styled.img<IRoundedImgProps>`
	width: ${({ size }) => (size ? `${size}px` : '25px')};
	height: ${({ size }) => (size ? `${size}px` : '25px')};
	margin: 0 10px;
	border-radius: 50%;
`;

const RoundedImg: FC<IRoundedImgProps> = ({ src, size }) => {
	return <Img src={src} size={size} />;
};

export default RoundedImg;
