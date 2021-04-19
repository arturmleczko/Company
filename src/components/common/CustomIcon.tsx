import { FC } from 'react';
import styled from 'styled-components';

interface ICustomIconProps {
	src: string;
	size?: number;
	onClick?: () => void;
}

const Icon = styled.img<ICustomIconProps>`
	width: ${({ size }) => (size ? `${size}px` : '39px')};
	height: ${({ size }) => (size ? `${size}px` : '39px')};
	cursor: pointer;
`;

const CustomIcon: FC<ICustomIconProps> = ({ src, size, onClick }) => {
	return <Icon src={src} size={size} onClick={onClick} />;
};

export default CustomIcon;
