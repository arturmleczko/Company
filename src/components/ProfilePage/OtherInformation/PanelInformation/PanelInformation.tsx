import { FC } from 'react';
import styled from 'styled-components';

import InputTwo from '../../Formik/FormTypes/Inputs/InputTwo';
import TermsAndConditions from './TermsAndConditions';

import {
	Fieldset,
	Legend,
	ProfileSectionHeading,
} from '../../../../styledHelpers/oftenUsed';

const CustomLegend = styled(Legend)`
	padding-bottom: 30px;
`;

const ProfileInformationContainer = styled.section`
	display: flex;
	flex-direction: column;
	padding: 70px 70px 20px 70px;
`;

const PanelInformation: FC = () => {
	return (
		<ProfileInformationContainer>
			<ProfileSectionHeading>Panel information's</ProfileSectionHeading>
			<Fieldset>
				<CustomLegend>Hourly fee</CustomLegend>
				<InputTwo type="text" name="hourlyFee" />
			</Fieldset>
			<fieldset>
				<Legend>Terms & conditions</Legend>
				<TermsAndConditions
					firstName="termsAndConditions1"
					secondName="termsAndConditions2"
				/>
			</fieldset>
		</ProfileInformationContainer>
	);
};

export default PanelInformation;
