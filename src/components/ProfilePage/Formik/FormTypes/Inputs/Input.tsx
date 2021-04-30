import { FC } from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

import { fontSize } from '../../../../../styledHelpers/fontSizes';
import { colors } from '../../../../../styledHelpers/colors';

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
			<InputField id={name} name={name} type={type} />
		</div>
	);
};

export default Input;
