import { FC } from 'react';
import { Field, ErrorMessage } from 'formik';
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
	return (
		<div>
			<label htmlFor={name}></label>
			<BoldInputField id={name} name={name} type={type} />
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default BoldInput;
