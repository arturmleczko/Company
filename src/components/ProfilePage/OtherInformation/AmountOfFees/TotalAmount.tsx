import { FC } from 'react';
import styled from 'styled-components';

import InputThree from '../../Formik/FormTypes/Inputs/InputThree';
import Select from '../../Formik/FormTypes/Selects/Select';

import { currencyOptions } from '../../../../arraysOfData/ProfilePage/OtherInformation/AmountOfFees';

interface ITotalAmountsProps {
	textName: string;
	currencyName: string;
}

const TotalAmountsContainer = styled.div`
	display: flex;
	align-items: center;
	padding-right: 115px;

	& div {
		padding-right: 0;
	}
`;

const TotalAmounts: FC<ITotalAmountsProps> = ({ textName, currencyName }) => {
	return (
		<TotalAmountsContainer>
			<InputThree name={textName} type="text" />
			<Select name={currencyName} options={currencyOptions} />
		</TotalAmountsContainer>
	);
};

export default TotalAmounts;
