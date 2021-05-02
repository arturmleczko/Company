import { FC } from 'react';
import { Field, ErrorMessage, useField } from 'formik';
import styled from 'styled-components';

import { InputContainer } from '../../../../../styledHelpers/oftenUsed';

import { IInputProps } from './InputOne';
import BoxError from '../../FormErrors/BoxError';

const BoldInputContainer = styled(InputContainer)`
	& input {
		font-weight: 500;
	}
`;

const BoldInput: FC<IInputProps> = ({ type, name }) => {
	const field = useField(name);
	const isError = field[1].error ? true : false;

	return (
		<BoldInputContainer isError={isError}>
			<label htmlFor={name}></label>
			<Field id={name} name={name} type={type} />
			<ErrorMessage name={name} component={BoxError} />
		</BoldInputContainer>
	);
};

export default BoldInput;
