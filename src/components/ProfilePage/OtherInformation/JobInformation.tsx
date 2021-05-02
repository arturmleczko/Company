import { FC } from 'react';
import styled from 'styled-components';

import AzureSelect from '../Formik/FormTypes/Selects/AzureSelect';

import {
	ProfileSection,
	Fieldset,
	Legend,
} from '../../../styledHelpers/oftenUsed';

import {
	expertiseOptions,
	specialtiesOptions,
	admissionOptions,
	countriesOptions,
} from '../../../arraysOfData/ProfilePage/OtherInformation/JobInformation';

const JobInformationContainer = styled(ProfileSection)`
	display: flex;
	flex-direction: column;
	height: calc(150px * 4 + 100px);
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
