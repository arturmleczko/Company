import { FC } from 'react';
import styled from 'styled-components';

import { fontSize } from '../../../../styledHelpers/fontSizes';
import { colors } from '../../../../styledHelpers/colors';

const PublicationContainer = styled.div`
	width: 80%;
	padding: 0 0 70px 50px;
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
		</PublicationContainer>
	);
};

export default Publication;
