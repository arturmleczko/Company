import { FC } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';

import AzureSelect from '../Formik/FormTypes/Selects/AzureSelect';

import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';

interface IOptions {
	key: string;
	value: string;
}

const options: IOptions[] = [
	{ key: 'Select expertise', value: '' },
	{ key: 'Option 1', value: 'option1' },
	{ key: 'Option 2', value: 'option2' },
	{ key: 'Option 3', value: 'option3' },
];

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

const initialValues = {
	expertise: '',
	specialtyOne: '',
	specialtyTwo: '',
	admissionOne: '',
	admissionTwo: '',
	counties: '',
};

const onSubmit = (values: any) => {};

const JobInformation: FC = () => {
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit}>
			<JobInformationContainer>
				<Form>
					<Fieldset>
						<Legend>Expertise</Legend>
						<SelectorsContainer>
							<AzureSelect name="expertise" options={options} />
						</SelectorsContainer>
					</Fieldset>
					<Fieldset>
						<Legend>Specialties</Legend>
						<SelectorsContainer>
							<AzureSelect
								name="specialtyOne"
								options={options}
							/>
							<AzureSelect
								name="specialtyTwo"
								options={options}
							/>
						</SelectorsContainer>
					</Fieldset>
					<Fieldset>
						<Legend>Admission to practice law</Legend>
						<SelectorsContainer>
							<AzureSelect
								name="admissionOne"
								options={options}
							/>
							<AzureSelect
								name="admissionTwo"
								options={options}
							/>
						</SelectorsContainer>
					</Fieldset>
					<Fieldset>
						<Legend>Counties</Legend>
						<SelectorsContainer>
							<AzureSelect name="counties" options={options} />
						</SelectorsContainer>
					</Fieldset>
				</Form>
			</JobInformationContainer>
		</Formik>
	);
};

export default JobInformation;
