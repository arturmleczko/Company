import { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../styledHelpers/colors';

interface ICustomIconProps {
	src: string;
	size?: number;
	boxShadow?: boolean;
	onClick?: () => void;
}

const Icon = styled.img<ICustomIconProps>`
	width: ${({ size }) => (size ? `${size}px` : '39px')};
	height: ${({ size }) => (size ? `${size}px` : '39px')};
	box-shadow: ${({ boxShadow }) =>
		boxShadow
			? `0 1px 1px ${colors.greyFive}, 0 1px 2.5px ${colors.greyFive}, 0 2.5px 5px ${colors.greyFive}`
			: ''};
	cursor: pointer;
`;

const CustomIcon: FC<ICustomIconProps> = ({
	src,
	size,
	boxShadow,
	onClick,
}) => {
	return (
		<Icon src={src} size={size} boxShadow={boxShadow} onClick={onClick} />
	);
};

export default CustomIcon;
