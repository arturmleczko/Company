import { FC } from 'react';
import styled from 'styled-components';

import { fontSize } from '../../../styledHelpers/fontSizes';
import { colors } from '../../../styledHelpers/colors';

const AddIcon = styled.img`
	width: 20px;
	height: 20px;
`;

const AddIconBorder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px 10px;
	border: 2px solid ${colors.greyThree};
	border-radius: 7px;
	cursor: pointer;
`;

const YourReferenceContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 10px 0;
	cursor: pointer;
`;

const YourReferenceIcon = styled.img`
	width: 35px;
	height: 35px;
`;

const YourReferenceInfo = styled.div`
	display: flex;
	align-items: center;
`;

const YourReferenceText = styled.span`
	padding-left: 20px;
	font-size: ${fontSize[22]};
`;

interface IYourReferenceProps {
	firstSrc: string;
	secondSrc: string;
	text: string;
}

const YourReference: FC<IYourReferenceProps> = ({
	firstSrc,
	text,
	secondSrc,
}) => {
	return (
		<YourReferenceContainer>
			<YourReferenceInfo>
				<YourReferenceIcon src={firstSrc} />
				<YourReferenceText>{text}</YourReferenceText>
			</YourReferenceInfo>
			<AddIconBorder>
				<AddIcon src={secondSrc} />
			</AddIconBorder>
		</YourReferenceContainer>
	);
};

export default YourReference;
