import { FC } from 'react';
import styled from 'styled-components';

import Publication from '../../../common/Publication/Publication';
import { IPublicationProps } from '../../../common/Publication/Publication';

interface ILatestPublicationProps extends IPublicationProps {
	src: string;
}
const LatestPublicationContainer = styled.aside`
	display: flex;
	align-items: center;
`;

const PublicationImg = styled.img`
	width: 93px;
	height: 95px;
	margin-right: 20px;
`;

const LatestPublication: FC<ILatestPublicationProps> = ({
	src,
	publicationColor,
}) => {
	return (
		<LatestPublicationContainer>
			<PublicationImg src={src} />
			<Publication publicationColor={publicationColor} />
		</LatestPublicationContainer>
	);
};

export default LatestPublication;
