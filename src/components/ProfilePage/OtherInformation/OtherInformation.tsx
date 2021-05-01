import { FC, useState } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import JobInformation from './JobInformation';
import ControlPanel from './ControlPanel';

import { colors } from '../../../styledHelpers/colors';

export interface IFormValues {
	expertise: string;
	specialtyOne: string;
	specialtyTwo: string;
	admissionOne: string;
	admissionTwo: string;
	country: string;
}

interface IOtherInformationProps {
	formState: boolean;
}

const OtherInformationContainer = styled.section<IOtherInformationProps>`
	position: relative;
	width: 100%;
	height: 100%;

	& select {
		pointer-events: ${({ formState }) => (formState ? 'auto' : 'none')};
		border: ${({ formState }) =>
			formState ? `2px solid ${colors.azure}` : '2px solid transparent'};
		appearance: none;
		outline: none;
		transition: 0.2s ease-out;
	}
`;

const initialValues: IFormValues = {
	expertise: '',
	specialtyOne: '',
	specialtyTwo: '',
	admissionOne: '',
	admissionTwo: '',
	country: '',
};

const validationSchema = Yup.object({
	expertise: Yup.string().required('Expertise is required'),
	specialtyOne: Yup.string().required('Specialty is required'),
	specialtyTwo: Yup.string().required('Specialty is required'),
	admissionOne: Yup.string().required('Admission is required'),
	admissionTwo: Yup.string().required('Admission is required'),
	country: Yup.string().required('Country is required'),
});

const onSubmit = (values: any) => {
	console.log(values);
};

const OtherInformation: FC = () => {
	const [formState, setFormState] = useState<boolean>(false);

	const editText = () => {
		setFormState((prevState) => !prevState);
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{({ errors }) => (
				<Form>
					<OtherInformationContainer formState={formState}>
						<JobInformation />
						<ControlPanel
							formState={formState}
							errors={errors}
							editText={editText}
						/>
					</OtherInformationContainer>
				</Form>
			)}
		</Formik>
	);
};

export default OtherInformation;
