import { FC } from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

import { fontSize } from '../../../../../styledHelpers/fontSizes';
import { colors } from '../../../../../styledHelpers/colors';

import { IInputProps } from './Input';

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
		</div>
	);
};

export default BoldInput;
