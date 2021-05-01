import { FC, useState } from 'react';
import styled from 'styled-components';

import JobInformation from './JobInformation';

import { colors } from '../../../styledHelpers/colors';

import editIcon from '../../../media/icons/pencil.svg';
import saveIcon from '../../../media/icons/save.svg';

interface IOtherInformationProps {
	formState: boolean;
}

const EditOrSaveButton = styled.div<IOtherInformationProps>`
	position: absolute;
	top: 70px;
	right: 60px;
	width: 30px;
	height: 30px;
	background-image: ${({ formState }) =>
		formState ? `url(${saveIcon})` : `url(${editIcon})`};
	background-size: cover;
	background-position: center;
	cursor: pointer;
`;

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

const OtherInformation: FC = () => {
	const [formState, setFormState] = useState<boolean>(false);

	const editText = () => {
		setFormState((prevState) => !prevState);
	};

	return (
		<OtherInformationContainer formState={formState}>
			<EditOrSaveButton formState={formState} onClick={editText} />
			<JobInformation />
		</OtherInformationContainer>
	);
};

export default OtherInformation;
