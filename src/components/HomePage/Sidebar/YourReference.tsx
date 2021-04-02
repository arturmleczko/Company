import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const YourReferenceContainer = styled.li`
	cursor: pointer;
`;

const YourReferenceInfo = styled.div`
	display: flex;
	align-items: center;
`;

const YourReferenceLink = styled(Link)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	text-decoration: none;
	cursor: pointer;
`;

const YourReferenceText = styled.span`
	padding-left: 20px;
	color: ${colors.black};
	font-size: ${fontSize[20]};
`;

interface IYourReferenceProps {
	to: string;
	firstSrc: string;
	secondSrc: string;
	text: string;
}

const YourReference: FC<IYourReferenceProps> = ({
	to,
	firstSrc,
	text,
	secondSrc,
}) => {
	return (
		<YourReferenceContainer>
			<YourReferenceLink to={to}>
				<YourReferenceInfo>
					<CustomIcon src={firstSrc} size={33} />
					<YourReferenceText>{text}</YourReferenceText>
				</YourReferenceInfo>
				<AddIconBorder>
					<CustomIcon src={secondSrc} size={18} />
				</AddIconBorder>
			</YourReferenceLink>
		</YourReferenceContainer>
	);
};

export default YourReference;
