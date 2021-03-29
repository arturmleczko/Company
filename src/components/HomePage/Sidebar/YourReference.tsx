import { FC } from 'react';
import styled from 'styled-components';

import { fontSize } from '../../../styledHelpers/fontSizes';
import { colors } from '../../../styledHelpers/colors';
import { CenteredElement } from '../../../styledHelpers/oftenUsed';

import CustomIcon from '../../common/CustomIcon';

const AddIconBorder = styled(CenteredElement)`
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
	cursor: pointer;
`;

const YourReferenceInfo = styled.div`
	display: flex;
	align-items: center;
`;

const YourReferenceText = styled.span`
	padding-left: 20px;
	font-size: ${fontSize[20]};
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
				<CustomIcon src={firstSrc} size={33} />
				<YourReferenceText>{text}</YourReferenceText>
			</YourReferenceInfo>
			<AddIconBorder>
				<CustomIcon src={secondSrc} size={18} />
			</AddIconBorder>
		</YourReferenceContainer>
	);
};

export default YourReference;
