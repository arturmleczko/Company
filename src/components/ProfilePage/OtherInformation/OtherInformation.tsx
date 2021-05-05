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
import InternalReviews from './InternalReviews';
import AmountOfFees from './AmountOfFees';

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
	proposalsData1: Date;
	proposalsData2: Date;
	proposalsData3: Date;
	proposalsFirm1: string;
	proposalsFirm2: string;
	proposalsFirm3: string;

	internalReviewsName1: string;
	internalReviewsName2: string;
	internalReviewsName3: string;
	internalReviewsEntity1: string;
	internalReviewsEntity2: string;
	internalReviewsEntity3: string;
	internalReviewsLocation1: string;
	internalReviewsLocation2: string;
	internalReviewsLocation3: string;
	internalReviewsExpertise1: string;
	internalReviewsExpertise2: string;
	internalReviewsExpertise3: string;
	internalReviewsData1: Date;
	internalReviewsData2: Date;
	internalReviewsData3: Date;

	year1: string;
	year2: string;
	year3: string;
	year4: string;
	year5: string;
	constCenter1: string;
	constCenter2: string;
	constCenter3: string;
	constCenter4: string;
	constCenter5: string;
	totalAmountText1: string;
	totalAmountText2: string;
	totalAmountText3: string;
	totalAmountText4: string;
	totalAmountText5: string;
	totalAmountCurrency1: string;
	totalAmountCurrency2: string;
	totalAmountCurrency3: string;
	totalAmountCurrency4: string;
	totalAmountCurrency5: string;
	lawFirm1: string;
	lawFirm2: string;
	lawFirm3: string;
	lawFirm4: string;
	lawFirm5: string;
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
	proposalsData1: new Date(),
	proposalsData2: new Date(),
	proposalsData3: new Date(),
	proposalsFirm1: '',
	proposalsFirm2: '',
	proposalsFirm3: '',

	internalReviewsName1: '',
	internalReviewsName2: '',
	internalReviewsName3: '',
	internalReviewsEntity1: '',
	internalReviewsEntity2: '',
	internalReviewsEntity3: '',
	internalReviewsLocation1: '',
	internalReviewsLocation2: '',
	internalReviewsLocation3: '',
	internalReviewsExpertise1: '',
	internalReviewsExpertise2: '',
	internalReviewsExpertise3: '',
	internalReviewsData1: new Date(),
	internalReviewsData2: new Date(),
	internalReviewsData3: new Date(),

	year1: '',
	year2: '',
	year3: '',
	year4: '',
	year5: '',
	constCenter1: 'CS 153',
	constCenter2: 'CS 153',
	constCenter3: 'CS 47',
	constCenter4: 'CS 153',
	constCenter5: 'CS 32',
	totalAmountText1: '3 500',
	totalAmountText2: '9 500',
	totalAmountText3: '10 500',
	totalAmountText4: '18 500',
	totalAmountText5: '15 500',
	totalAmountCurrency1: '',
	totalAmountCurrency2: '',
	totalAmountCurrency3: '',
	totalAmountCurrency4: '',
	totalAmountCurrency5: '',
	lawFirm1: 'Clifford chance',
	lawFirm2: 'Linklaters',
	lawFirm3: 'Linklaters',
	lawFirm4: 'Linklaters',
	lawFirm5: 'Linklaters',
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
						<InternalReviews />
						<AmountOfFees />
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
