import { FC } from 'react';
import styled from 'styled-components';

import Select from '../Formik/FormTypes/Selects/Select';
import InputThree from '../Formik/FormTypes/Inputs/InputThree';
import TotalAmount from './AmountOfFees/TotalAmount';

import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';

import { yearOptions } from '../../../arraysOfData/ProfilePage/OtherInformation/AmountOfFees';

const AmountOfFeesContainer = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 70px;
`;

const Heading = styled.h2`
	font-size: ${fontSize[23]};
	color: ${colors.darkNavyBlue};
	font-weight: 500;
`;

const Table = styled.div`
	width: 100%;
`;

const TData = styled.div`
	display: flex;
	align-items: center;
	padding-top: 20px;
`;

const THead = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	width: 100%;
	margin-top: 45px;
`;

const THeading = styled.span`
	font-size: ${fontSize[23]};
	color: ${colors.darkNavyBlue};
	font-weight: 500;
`;

const TBody = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	width: 100%;
`;

const AmountOfFees: FC = () => {
	return (
		<AmountOfFeesContainer>
			<Heading>Amount of fees</Heading>
			<Table>
				<THead>
					<THeading>Year</THeading>
					<THeading>Cost center</THeading>
					<THeading>Total amount</THeading>
					<THeading>Law firm</THeading>
				</THead>
				<TBody>
					<TData>
						<Select name="year1" options={yearOptions} />
					</TData>
					<TData>
						<InputThree name="constCenter1" type="text" />
					</TData>
					<TData>
						<TotalAmount
							textName="totalAmountText1"
							currencyName="totalAmountCurrency1"
						/>
					</TData>
					<TData>
						<InputThree name="lawFirm1" type="text" />
					</TData>
					<TData>
						<Select name="year2" options={yearOptions} />
					</TData>
					<TData>
						<InputThree name="constCenter2" type="text" />
					</TData>
					<TData>
						<TotalAmount
							textName="totalAmountText2"
							currencyName="totalAmountCurrency2"
						/>
					</TData>
					<TData>
						<InputThree name="lawFirm2" type="text" />
					</TData>
					<TData>
						<Select name="year3" options={yearOptions} />
					</TData>
					<TData>
						<InputThree name="constCenter3" type="text" />
					</TData>
					<TData>
						<TotalAmount
							textName="totalAmountText3"
							currencyName="totalAmountCurrency3"
						/>
					</TData>
					<TData>
						<InputThree name="lawFirm3" type="text" />
					</TData>
					<TData>
						<Select name="year4" options={yearOptions} />
					</TData>
					<TData>
						<InputThree name="constCenter4" type="text" />
					</TData>
					<TData>
						<TotalAmount
							textName="totalAmountText4"
							currencyName="totalAmountCurrency4"
						/>
					</TData>
					<TData>
						<InputThree name="lawFirm4" type="text" />
					</TData>
					<TData>
						<Select name="year5" options={yearOptions} />
					</TData>
					<TData>
						<InputThree name="constCenter5" type="text" />
					</TData>
					<TData>
						<TotalAmount
							textName="totalAmountText5"
							currencyName="totalAmountCurrency5"
						/>
					</TData>
					<TData>
						<InputThree name="lawFirm5" type="text" />
					</TData>
				</TBody>
			</Table>
		</AmountOfFeesContainer>
	);
};

export default AmountOfFees;
