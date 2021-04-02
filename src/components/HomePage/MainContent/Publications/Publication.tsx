import { FC } from 'react';
import styled from 'styled-components';

import { fontSize } from '../../../../styledHelpers/fontSizes';
import { colors } from '../../../../styledHelpers/colors';

import RoundedImg from '../../../common/RoundedImg';

import profile from '../../../../media/images/profile2.jpg';

const PublicationContainer = styled.div`
	width: 80%;
	padding: 0 0 60px 50px;
`;

const Date = styled.span`
	font-size: ${fontSize[18]};
	color: ${colors.greySeven};
	font-weight: 300;
`;

const Author = styled.span`
	font-size: ${fontSize[18]};
	color: ${colors.greyEight};
	font-weight: 300;
`;

const PublicationInfo = styled.div`
	display: flex;
	align-items: center;
	width: 70%;
	padding-top: 13px;
`;

const PublicationText = styled.p`
	font-size: ${fontSize[21]};
	color: ${colors.white};
	line-height: 1.3;
`;

const Publication: FC = () => {
	return (
		<PublicationContainer>
			<PublicationText>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit... and
				one more line for the demo
			</PublicationText>
			<PublicationInfo>
				<Date>7 jan.2020</Date>
				<RoundedImg src={profile} />
				<Author>John Doe</Author>
			</PublicationInfo>
		</PublicationContainer>
	);
};

export default Publication;
