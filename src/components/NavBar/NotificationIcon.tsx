import { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../styledHelpers/colors';
import { CenteredElement } from '../../styledHelpers/oftenUsed';

import CustomIcon from '../common/CustomIcon';

const NotificationIconBorder = styled(CenteredElement)`
	width: 70px;
	height: 70px;
	background-color: ${colors.greyFour};
	border-radius: 50%;
	transition: background-color 0.1s ease-in-out;

	&:hover {
		background-color: ${colors.greyFive};
	}
`;

interface INotificationIconProps {
	src: string;
}

const NotificationIcon: FC<INotificationIconProps> = ({ src }) => {
	return (
		<NotificationIconBorder>
			<CustomIcon src={src} />
		</NotificationIconBorder>
	);
};

export default NotificationIcon;
