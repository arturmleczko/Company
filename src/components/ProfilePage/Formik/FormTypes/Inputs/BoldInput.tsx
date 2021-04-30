import { FC } from 'react';
import { Field, ErrorMessage, useField } from 'formik';
import styled from 'styled-components';

import { fontSize } from '../../../../../styledHelpers/fontSizes';
import { colors } from '../../../../../styledHelpers/colors';

import { IInputProps } from './Input';
import TextError from '../../FormErros/TextError';

const BoldInputField = styled(Field)`
	font-family: 'Roboto', sans-serif;
	font-size: ${fontSize[23]};
	color: ${colors.darkNavyBlue};
	font-weight: 500;
`;

const BoldInput: FC<IInputProps> = ({ type, name }) => {
	const field = useField(name);
	const validError = field[1].error ? 'error' : '';

	return (
		<div>
			<label htmlFor={name}></label>
			<BoldInputField
				className={validError}
				id={name}
				name={name}
				type={type}
			/>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default BoldInput;
