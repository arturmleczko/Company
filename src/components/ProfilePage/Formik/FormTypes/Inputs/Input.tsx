import { FC } from 'react';
import { Field, ErrorMessage, useField } from 'formik';
import styled from 'styled-components';

import { fontSize } from '../../../../../styledHelpers/fontSizes';
import { colors } from '../../../../../styledHelpers/colors';

import InputError from '../../FormErrors/InputError';

export interface IInputProps {
	type: string;
	name: string;
}

const InputField = styled(Field)`
	font-family: 'Roboto', sans-serif;
	font-size: ${fontSize[23]};
	color: ${colors.darkNavyBlue};
`;

const Input: FC<IInputProps> = ({ type, name }) => {
	const field = useField(name);
	const validError = field[1].error ? 'error' : '';

	return (
		<div>
			<label htmlFor={name}></label>
			<InputField
				className={validError}
				id={name}
				name={name}
				type={type}
			/>
			<ErrorMessage name={name} component={InputError} />
		</div>
	);
};

export default Input;
