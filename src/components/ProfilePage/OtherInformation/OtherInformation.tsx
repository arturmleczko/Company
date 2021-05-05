import { FC, useState } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import JobInformation from './JobInformation';
import PanelInformation from './PanelInformation/PanelInformation';
import ControlPanel from './ControlPanel';
import ServicesAndProjects from './ServicesAndProjects';
import InternalCorrespondents from './InternalCorrespondents/InternalCorrespondents';
import Proposals from './Proposals';

import { colors } from '../../../styledHelpers/colors';

export interface IFormValues {
	expertise: string;
	specialtyOne: string;
	specialtyTwo: string;
	admissionOne: string;
	admissionTwo: string;
	country: string;

	hourlyFee: string;
	termsAndConditions1: string;
	termsAndConditions2: string;
	servicesAndProjects: string;
	internalCorrespondent1: string;
	internalCorrespondent2: string;

	proposalsName1: string;
	proposalsName2: string;
	proposalsName3: string;
	proposalsEntity1: string;
	proposalsEntity2: string;
	proposalsEntity3: string;
	proposalsLocation1: string;
	proposalsLocation2: string;
	proposalsLocation3: string;
	proposalsExpertise1: string;
	proposalsExpertise2: string;
	proposalsExpertise3: string;
	proposalsFirm1: string;
	proposalsFirm2: string;
	proposalsFirm3: string;
	proposalsData1: Date;
	proposalsData2: Date;
	proposalsData3: Date;
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

	& input {
		width: 500px;
		pointer-events: ${({ formState }) => (formState ? 'auto' : 'none')};
		padding: 6px 0 6px 0;
		outline: none;
		transition: 0.2s ease-out;
	}

	& input[type='text'] {
		border: ${({ formState }) =>
			formState
				? `2px solid ${colors.greyFive}`
				: '2px solid transparent '};
		border-radius: 7px;
	}
`;

const initialValues: IFormValues = {
	expertise: '',
	specialtyOne: '',
	specialtyTwo: '',
	admissionOne: '',
	admissionTwo: '',
	country: '',

	hourlyFee: '610€/hour (Negotiated)',
	termsAndConditions1: 'Monthly 10k€ retainer - see with Jeanny Smith',
	termsAndConditions2: '',
	servicesAndProjects: 'Corporate M&A and international acquisitions',
	internalCorrespondent1: '',
	internalCorrespondent2: '',

	proposalsName1: '',
	proposalsName2: '',
	proposalsName3: '',
	proposalsEntity1: '',
	proposalsEntity2: '',
	proposalsEntity3: '',
	proposalsLocation1: '',
	proposalsLocation2: '',
	proposalsLocation3: '',
	proposalsExpertise1: '',
	proposalsExpertise2: '',
	proposalsExpertise3: '',
	proposalsFirm1: '',
	proposalsFirm2: '',
	proposalsFirm3: '',
	proposalsData1: new Date(),
	proposalsData2: new Date(),
	proposalsData3: new Date(),
};

const validationSchema = Yup.object({
	expertise: Yup.string().required('Expertise is required field'),
	specialtyOne: Yup.string().required('Specialty is a required field'),
	specialtyTwo: Yup.string().required('Specialty is a required field'),
	admissionOne: Yup.string().required('Admission is a required field'),
	admissionTwo: Yup.string().required('Admission is a required field'),
	country: Yup.string().required('Country is a required field'),

	hourlyFee: Yup.string()
		.required('Hourly fee is a required field')
		.min(4, 'Enter at least four characters'),
	termsAndConditions1: Yup.string()
		.required('The terms and conditions text field is required')
		.min(10, 'Enter at least ten characters'),
	servicesAndProjects: Yup.string().required(
		'The services and projects is required field'
	),
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
						<PanelInformation />
						<ServicesAndProjects />
						<InternalCorrespondents />
						<Proposals />
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
