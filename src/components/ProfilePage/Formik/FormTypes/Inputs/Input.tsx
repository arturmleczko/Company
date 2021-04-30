import { FC } from 'react';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

import { fontSize } from '../../../../../styledHelpers/fontSizes';
import { colors } from '../../../../../styledHelpers/colors';

import TextError from '../../FormErros/TextError';

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
	return (
		<div>
			<label htmlFor={name}></label>
			<InputField style={{}} id={name} name={name} type={type} />
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default Input;
