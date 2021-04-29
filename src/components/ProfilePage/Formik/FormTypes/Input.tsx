import { FC } from 'react';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

import { fontSize } from '../../../../styledHelpers/fontSizes';
import { colors } from '../../../../styledHelpers/colors';

interface IInputProps {
	type: string;
	name: string;
	fontWeight?: number;
}

interface IInputFiledPropsStyle {
	fontWeight: number;
}

const InputField = styled(Field)<IInputFiledPropsStyle>`
	font-family: 'Roboto', sans-serif;
	font-size: ${fontSize[23]};
	color: ${colors.darkNavyBlue};
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
`;

const Input: FC<IInputProps> = ({ type, name, fontWeight }) => {
	return (
		<div>
			<label htmlFor={name}></label>
			<InputField
				id={name}
				name={name}
				type={type}
				fontWeight={fontWeight}
			/>
			<ErrorMessage name={name} />
		</div>
	);
};

export default Input;
