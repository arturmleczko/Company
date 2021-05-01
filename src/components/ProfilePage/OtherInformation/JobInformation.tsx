import { FC } from 'react';
import styled from 'styled-components';

import AzureSelect from '../Formik/FormTypes/Selects/AzureSelect';

import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';

import {
	expertiseOptions,
	specialtiesOptions,
	admissionOptions,
	countriesOptions,
} from '../../../arraysOfData/ProfilePage/OtherInformation/JobInformation';

const Fieldset = styled.fieldset`
	display: flex;
	flex-direction: column;
	width: calc(100% - 150px);
	height: 150px;
`;

const Legend = styled.legend`
	color: ${colors.greyTen};
	font-size: ${fontSize[23]};
`;

const JobInformationContainer = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: calc(150px * 4 + 140px);
	padding: 70px 60px;
	border-bottom: 3px solid ${colors.greyFive};
`;

const SelectorsContainer = styled.div`
	padding-top: 30px;
	display: flex;
`;

const JobInformation: FC = () => {
	return (
		<JobInformationContainer>
			<Fieldset>
				<Legend>Expertise</Legend>
				<SelectorsContainer>
					<AzureSelect name="expertise" options={expertiseOptions} />
				</SelectorsContainer>
			</Fieldset>
			<Fieldset>
				<Legend>Specialties</Legend>
				<SelectorsContainer>
					<AzureSelect
						name="specialtyOne"
						options={specialtiesOptions}
					/>
					<AzureSelect
						name="specialtyTwo"
						options={specialtiesOptions}
					/>
				</SelectorsContainer>
			</Fieldset>
			<Fieldset>
				<Legend>Admission to practice law</Legend>
				<SelectorsContainer>
					<AzureSelect
						name="admissionOne"
						options={admissionOptions}
					/>
					<AzureSelect
						name="admissionTwo"
						options={admissionOptions}
					/>
				</SelectorsContainer>
			</Fieldset>
			<Fieldset>
				<Legend>Countries</Legend>
				<SelectorsContainer>
					<AzureSelect name="country" options={countriesOptions} />
				</SelectorsContainer>
			</Fieldset>
		</JobInformationContainer>
	);
};

export default JobInformation;
