import { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';

import ConditionOne, { Color } from './ConditionOne';
import ConditionTwo from './ConditionTwo';

import { RoundedContainer } from '../../../styledHelpers/oftenUsed';

import crossIcon from '../../../media/icons/cross2.svg';
import plusIcon from '../../../media/icons/plus2.svg';

import arrowDownGreyIcon from '../../../media/icons/arrow-down3.svg';
import arrowDownBlueIcon from '../../../media/icons/arrow-down2.svg';

const FilterWindowContainer = styled(RoundedContainer)`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 35px 50px;
	margin-top: 40px;
`;

const Instruction = styled.span`
	color: ${colors.greyThirteen};
	font-size: ${fontSize[22]};
`;

const Row = styled.div`
	display: flex;
	align-items: center;
	height: 50px;
	margin-top: 25px;
`;

const FilterWindow: FC = () => {
	return (
		<FilterWindowContainer>
			<Instruction>
				Rows are filtered by the following conditions starting from the
				top.
			</Instruction>
			<Row>
				<ConditionOne src={crossIcon} text="Where" color={Color.Grey} />
				<ConditionTwo
					src={arrowDownGreyIcon}
					text="Company"
					color={Color.Grey}
				/>
				<ConditionTwo
					src={arrowDownGreyIcon}
					text="Contains"
					color={Color.Grey}
				/>
			</Row>
			<Row>
				<ConditionOne src={crossIcon} text="Where" color={Color.Grey} />
				<ConditionTwo
					src={arrowDownGreyIcon}
					text="Status"
					color={Color.Grey}
				/>
				<ConditionTwo
					src={arrowDownGreyIcon}
					text="Is"
					color={Color.Grey}
				/>
			</Row>
			<Row>
				<ConditionOne src={crossIcon} text="And" color={Color.Grey} />
				<ConditionTwo
					src={arrowDownGreyIcon}
					text="Status"
					color={Color.Grey}
				/>
				<ConditionTwo
					src={arrowDownGreyIcon}
					text="Ends before"
					color={Color.Grey}
				/>
			</Row>
			<Row>
				<ConditionOne
					src={plusIcon}
					text="Add filter"
					color={Color.Blue}
					fontWeight={500}
				/>
				<ConditionTwo
					src={arrowDownBlueIcon}
					text="choose property"
					color={Color.Blue}
					fontWeight={500}
				/>
			</Row>
		</FilterWindowContainer>
	);
};

export default FilterWindow;
