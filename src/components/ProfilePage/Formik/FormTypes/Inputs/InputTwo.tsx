import { FC } from 'react';
import styled from 'styled-components';
import { Field, ErrorMessage, useField } from 'formik';

import { InputContainer } from '../../../../../styledHelpers/oftenUsed';

import { IInputProps } from './InputOne';
import TextError from '../../FormErrors/TextError';

const InputTwoContainer = styled(InputContainer)`
	padding-top: 30px;
`;

const InputTwo: FC<IInputProps> = ({ type, name }) => {
	const field = useField(name);
	const isError = field[1].error ? true : false;

	return (
		<InputTwoContainer isError={isError}>
			<label htmlFor={name}></label>
			<Field id={name} name={name} type={type} />
			<ErrorMessage name={name} component={TextError} />
		</InputTwoContainer>
	);
};

export default InputTwo;
