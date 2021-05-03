import { FC } from 'react';
import styled from 'styled-components';
import { Field, ErrorMessage, useField } from 'formik';

import TextError from '../Formik/FormErrors/TextError';
import { IInputContainerProps } from '../../../styledHelpers/oftenUsed';

import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';

import fileIcon from '../../../media/icons/file.svg';

interface ITermsAndConditionsProps {
	firstName: string;
	secondName: string;
}

const FileInputContainer = styled.div`
	position: relative;
	margin-top: 25px;

	& input[type='file'] {
		width: 100%;
		font-family: 'Roboto', sans-serif;
		font-size: ${fontSize[23]};
		color: ${colors.darkNavyBlue};
		padding: 20px 20px 20px 70px;
		background-color: ${colors.greyEleven};

		&::file-selector-button {
			display: none;
		}
	}

	&::after {
		content: '';
		position: absolute;
		left: 20px;
		top: 50%;
		transform: translateY(-50%);
		width: 30px;
		height: 30px;
		background-image: url(${fileIcon});
		background-position: center;
		background-size: 30px 30px;
	}
`;

const TermsAndConditionsContainer = styled.div`
	height: 200px;
`;

const TextInputContainer = styled.div<IInputContainerProps>`
	padding-top: 25px;

	& input[type='text'] {
		border: ${({ isError }) =>
			isError ? `2px solid ${colors.red} !important` : ''};
		background-color: ${({ isError }) =>
			isError ? `${colors.pink} !important` : ''};
		font-family: 'Roboto', sans-serif;
		font-size: ${fontSize[23]};
		color: ${colors.darkNavyBlue};

		:focus {
			background-color: ${colors.brightAzure};
			border-color: ${colors.azure};
		}
	}
`;

const TermsAndConditions: FC<ITermsAndConditionsProps> = ({
	firstName,
	secondName,
}) => {
	const field = useField(firstName);
	const isError = field[1].error ? true : false;

	return (
		<TermsAndConditionsContainer>
			<TextInputContainer isError={isError}>
				<label htmlFor={firstName}></label>
				<Field id={firstName} name={firstName} type="text" />
			</TextInputContainer>
			<FileInputContainer>
				<label htmlFor={secondName}></label>
				<Field id={secondName} name={secondName} type="file" />
			</FileInputContainer>
			<ErrorMessage name={firstName} component={TextError} />
		</TermsAndConditionsContainer>
	);
};

export default TermsAndConditions;
