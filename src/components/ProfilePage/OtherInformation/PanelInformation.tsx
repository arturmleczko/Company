import { FC } from 'react';
import styled from 'styled-components';

import InputTwo from '../Formik/FormTypes/Inputs/InputTwo';
import FileInput from '../Formik/FormTypes/Inputs/FileInput';

import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';
import {
	ProfileSection,
	Fieldset,
	Legend,
} from '../../../styledHelpers/oftenUsed';

const ProfileInformationContainer = styled(ProfileSection)`
	display: flex;
	flex-direction: column;
`;

const Heading = styled.h2`
	padding-bottom: 50px;
	font-size: ${fontSize[23]};
	color: ${colors.darkNavyBlue};
	font-weight: 500;
`;

const PanelInformation: FC = () => {
	return (
		<ProfileInformationContainer>
			<Heading>Panel information's</Heading>
			<Fieldset>
				<Legend>Hourly fee</Legend>
				<InputTwo type="text" name="hourlyFee" />
			</Fieldset>
			<fieldset>
				<Legend>Terms & conditions</Legend>
				<InputTwo type="text" name="termsAndConditions1" />
				<FileInput name="termsAndConditions2" />
			</fieldset>
		</ProfileInformationContainer>
	);
};

export default PanelInformation;
