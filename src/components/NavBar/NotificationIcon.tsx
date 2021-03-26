import { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../styledHelpers/colors';
import { Icon } from '../../styledHelpers/globalStyles';

const NotificationIconBorder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80px;
	height: 80px;
	background-color: ${colors.greyLighter};
	border-radius: 50%;
`;

interface INotificationIconProps {
	src: string;
}

const NotificationIcon: FC<INotificationIconProps> = ({ src }) => {
	return (
		<NotificationIconBorder>
			<Icon src={src} />
		</NotificationIconBorder>
	);
};

export default NotificationIcon;
