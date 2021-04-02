import { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../styledHelpers/colors';
import { CenteredElement } from '../../styledHelpers/oftenUsed';

import CustomIcon from '../common/CustomIcon';

const NotificationIconBorder = styled(CenteredElement)`
	position: relative;
	width: 70px;
	height: 70px;
	background-color: ${colors.greyFour};
	border-radius: 50%;
	transition: background-color 0.1s ease-in-out;

	&:hover {
		background-color: ${colors.greyFive};
	}
`;

const NotificationNumber = styled.span``;

const NotificationNumberContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 28px;
	height: 20px;
	border-radius: 10px;
	background-color: ${colors.blue};
	color: ${colors.white};
`;

interface INotificationIconProps {
	src: string;
}

const NotificationIcon: FC<INotificationIconProps> = ({ src }) => {
	const randomNumberNotifications = Math.floor(Math.random() * 9) + 1;

	return (
		<NotificationIconBorder>
			<CustomIcon src={src} />
			<NotificationNumberContainer>
				<NotificationNumber>
					{randomNumberNotifications !== 0
						? randomNumberNotifications
						: null}
				</NotificationNumber>
			</NotificationNumberContainer>
		</NotificationIconBorder>
	);
};

export default NotificationIcon;
