import { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';

interface ICorporateMatterProps {
	iconSrc: string;
	title: string;
	keyWord: string;
	description: string;
}

interface ICorporateContainerProps {
	iconSrc: string;
}

const CorporateMatterContainer = styled.div<ICorporateContainerProps>`
	display: flex;
	flex-direction: column;
	background-image: url(${({ iconSrc }) => (iconSrc ? iconSrc : '')});
	background-repeat: no-repeat;
	background-size: 70% 70%;
	background-position: 130% 35%;
	border-radius: 10px;
	box-shadow: 0 1px 1px ${colors.greyEight}, 0 1px 7px ${colors.greyEight},
		0 5px 7px ${colors.greyEight};
`;

const Icon = styled.img`
	width: 70px;
	height: 70px;
`;

const Layer = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.95);
	padding: 40px 30px;
	border-radius: 10px;
`;

const Title = styled.h3`
	font-size: ${fontSize[24]};
	color: ${colors.darkNavyBlue};
	margin-top: 30px;
`;

const KeyWord = styled.span`
	font-weight: 700;
`;

const Description = styled.p`
	font-size: ${fontSize[21]};
	color: ${colors.darkNavyBlue};
	margin-top: 30px;
	line-height: 1.3;
`;

const CorporateMatter: FC<ICorporateMatterProps> = ({
	iconSrc,
	title,
	keyWord,
	description,
}) => {
	return (
		<CorporateMatterContainer iconSrc={iconSrc}>
			<Layer>
				<Icon src={iconSrc} />
				<Title>
					{title}
					<KeyWord>{keyWord}</KeyWord>
				</Title>
				<Description>{description}</Description>
			</Layer>
		</CorporateMatterContainer>
	);
};

export default CorporateMatter;
