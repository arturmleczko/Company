import { FC } from 'react';
import styled from 'styled-components';

import InputTwo from '../Formik/FormTypes/Inputs/InputTwo';

import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';

const Heading = styled.h2`
	padding-bottom: 25px;
	font-size: ${fontSize[23]};
	color: ${colors.darkNavyBlue};
	font-weight: 500;
`;

const ServicesAndProjectsContainer = styled.section`
	width: 100%;
	padding: 20px 70px 30px 70px;
`;

const ServicesAndProjects: FC = () => {
	return (
		<ServicesAndProjectsContainer>
			<fieldset>
				<Heading>Services & projects</Heading>
				<InputTwo name="servicesAndProjects" type="text" />
			</fieldset>
		</ServicesAndProjectsContainer>
	);
};

export default ServicesAndProjects;
