import { FC } from 'react';
import styled from 'styled-components';
import { Field, ErrorMessage, useField } from 'formik';

import { colors } from '../../../../../styledHelpers/colors';
import { fontSize } from '../../../../../styledHelpers/fontSizes';

import { IInputContainerProps } from '../../../../../styledHelpers/oftenUsed';
import TextError from '../../FormErrors/TextError';

import fileIcon from '../../../../../media/icons/file.svg';

interface IFileInputProps {
	name: string;
}

const FileButton = styled.img`
	position: absolute;
	left: 20px;
	top: 50%;
	transform: translateY(-50%);
	width: 30px;
	height: 30px;
`;

const FileInputContainer = styled.div<IInputContainerProps>`
	position: relative;
	margin-top: 50px;

	& input[type='file'] {
		font-family: 'Roboto', sans-serif;
		font-size: ${fontSize[23]};
		color: ${colors.darkNavyBlue};
		padding: 20px 20px 20px 70px;
		background-color: ${colors.greyEleven};

		&::file-selector-button {
			display: none;
		}
	}
`;

const FileInput: FC<IFileInputProps> = ({ name }) => {
	const field = useField(name);
	const isError = field[1].error ? true : false;

	return (
		<FileInputContainer isError={isError}>
			<label htmlFor={name}></label>
			<Field id={name} name={name} type="file" />
			<ErrorMessage name={name} component={TextError} />
			<FileButton src={fileIcon} />
		</FileInputContainer>
	);
};

export default FileInput;
