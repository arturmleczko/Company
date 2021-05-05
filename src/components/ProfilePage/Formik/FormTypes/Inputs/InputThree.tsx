import { FC } from 'react';
import styled from 'styled-components';
import { Field } from 'formik';

import { IInputProps } from './InputOne';
import { fontSize } from '../../../../../styledHelpers/fontSizes';
import { colors } from '../../../../../styledHelpers/colors';

const InputThreeContainer = styled.div`
	padding-right: 30px;

	&& input {
		font-size: ${fontSize[23]};
		color: ${colors.darkNavyBlue};
		border: none !important;
		width: 100%;
	}
`;

const InputThree: FC<IInputProps> = ({ type, name }) => {
	return (
		<InputThreeContainer>
			<label htmlFor={name}></label>
			<Field id={name} name={name} type={type} />
		</InputThreeContainer>
	);
};

export default InputThree;
